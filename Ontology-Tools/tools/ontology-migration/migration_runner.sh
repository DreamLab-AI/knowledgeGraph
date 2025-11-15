#!/bin/bash
#
# Migration Runner - Master script for ontology migration
#
# This script orchestrates the complete migration process:
# 1. Backup
# 2. Pre-validation
# 3. Filename mapping generation
# 4. File renaming
# 5. Ontology enrichment
# 6. Reference updates
# 7. Post-validation
# 8. Publisher testing
#

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directories
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GRAPH_DIR="/home/user/logseq/mainKnowledgeGraph"
PUBLISHER_DIR="/home/user/logseq/publishing-tools/rust-web-publish/logseq-publisher-rust"

# Log file
LOG_FILE="${SCRIPT_DIR}/logs/migration_$(date +%Y%m%d_%H%M%S).log"
mkdir -p "${SCRIPT_DIR}/logs"

# Functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

step() {
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

run_step() {
    local step_name=$1
    local command=$2

    log "Running: $step_name"

    if eval "$command"; then
        success "$step_name completed"
        return 0
    else
        error "$step_name failed"
        return 1
    fi
}

# Check Python
check_python() {
    if ! command -v python3 &> /dev/null; then
        error "python3 not found. Please install Python 3.11+"
        exit 1
    fi

    local python_version=$(python3 --version | cut -d' ' -f2 | cut -d'.' -f1,2)
    log "Using Python version: $python_version"
}

# Check dependencies
check_dependencies() {
    step "🔍 CHECKING DEPENDENCIES"

    check_python

    # Check for required Python packages
    log "Checking Python packages..."
    python3 -c "import tqdm" 2>/dev/null || {
        warning "tqdm not installed. Installing..."
        pip3 install tqdm
    }

    success "All dependencies satisfied"
}

# Main migration process
main() {
    echo -e "${GREEN}"
    cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║         LOGSEQ ONTOLOGY MIGRATION TOOL                        ║
║         ═══════════════════════════                          ║
║                                                               ║
║         This will migrate 268 prefixed ontology files         ║
║         to human-readable names and enrich metadata          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"

    log "Migration started"
    log "Log file: $LOG_FILE"

    # Check dependencies
    check_dependencies

    # Confirmation
    echo ""
    read -p "$(echo -e ${YELLOW}Continue with migration? [y/N]:${NC} )" -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        warning "Migration cancelled by user"
        exit 0
    fi

    # Step 1: Backup
    step "📦 STEP 1: CREATING BACKUP"
    run_step "Backup" "python3 '${SCRIPT_DIR}/backup_ontology.py'" || {
        error "Backup failed. Aborting migration."
        exit 1
    }

    # Step 2: Pre-validation
    step "🔍 STEP 2: PRE-MIGRATION VALIDATION"
    run_step "Pre-validation" "python3 '${SCRIPT_DIR}/migration_validator.py' --phase=pre" || {
        warning "Pre-validation found issues"
        read -p "$(echo -e ${YELLOW}Continue anyway? [y/N]:${NC} )" -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            error "Migration aborted due to validation failures"
            exit 1
        fi
    }

    # Step 3: Generate mapping
    step "🗺️  STEP 3: GENERATING FILENAME MAPPING"
    run_step "Filename mapping" "python3 '${SCRIPT_DIR}/filename_mapper.py'" || {
        error "Filename mapping failed. Aborting migration."
        exit 1
    }

    # Step 4: Rename files
    step "✏️  STEP 4: RENAMING FILES"
    run_step "File renaming" "python3 '${SCRIPT_DIR}/rename_files.py'" || {
        error "File renaming failed. Attempting rollback..."
        python3 "${SCRIPT_DIR}/rollback_tool.py"
        exit 1
    }

    # Step 5: Enrich ontology blocks
    step "📝 STEP 5: ENRICHING ONTOLOGY BLOCKS"
    run_step "Ontology enrichment" "python3 '${SCRIPT_DIR}/ontology_enricher.py'" || {
        error "Ontology enrichment failed. Attempting rollback..."
        python3 "${SCRIPT_DIR}/rollback_tool.py"
        exit 1
    }

    # Step 6: Update references
    step "🔗 STEP 6: UPDATING WIKI-LINK REFERENCES"
    run_step "Reference updates" "python3 '${SCRIPT_DIR}/reference_updater.py'" || {
        error "Reference updates failed. Attempting rollback..."
        python3 "${SCRIPT_DIR}/rollback_tool.py"
        exit 1
    }

    # Step 7: Post-validation
    step "✅ STEP 7: POST-MIGRATION VALIDATION"
    run_step "Post-validation" "python3 '${SCRIPT_DIR}/migration_validator.py' --phase=post" || {
        error "Post-validation failed"
        read -p "$(echo -e ${YELLOW}Rollback migration? [y/N]:${NC} )" -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            python3 "${SCRIPT_DIR}/rollback_tool.py"
            exit 1
        fi
    }

    # Step 8: Test publisher
    step "🧪 STEP 8: TESTING PUBLISHER"
    if [ -d "$PUBLISHER_DIR" ]; then
        log "Building publisher..."
        cd "$PUBLISHER_DIR"
        npm run build || {
            warning "Publisher build failed"
        }

        log "Testing publisher with real graph..."
        node tests/test-real-graph.js || {
            warning "Publisher test failed"
        }
    else
        warning "Publisher directory not found: $PUBLISHER_DIR"
        warning "Skipping publisher test"
    fi

    # Success!
    step "🎉 MIGRATION COMPLETE"
    success "All migration steps completed successfully!"
    echo ""
    echo -e "${GREEN}Next steps:${NC}"
    echo "  1. Review validation reports in: ${SCRIPT_DIR}/reports/"
    echo "  2. Test your Logseq graph"
    echo "  3. Run publisher: cd $PUBLISHER_DIR && npm run build"
    echo "  4. If issues occur, rollback: python3 ${SCRIPT_DIR}/rollback_tool.py"
    echo ""
    log "Migration completed successfully"
}

# Run main
main "$@"
