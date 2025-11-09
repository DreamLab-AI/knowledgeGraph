#!/usr/bin/env zsh
#
# replace-wiki-links.zsh
#
# Replace [[wiki-style links]] in markdown files with canonical ontology terms.
# Uses the generated wiki-link-mapping.csv for term mappings.
#
# Usage:
#   ./replace-wiki-links.zsh [OPTIONS] [DIRECTORY]
#
# Options:
#   --dry-run       Show what would be replaced without making changes
#   --backup        Create .bak backup files before replacement
#   --verbose       Show detailed progress
#   --help          Show this help message
#
# Examples:
#   ./replace-wiki-links.zsh --dry-run .
#   ./replace-wiki-links.zsh --backup ~/my-notes
#   ./replace-wiki-links.zsh --verbose --backup .
#

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default options
DRY_RUN=0
BACKUP=0
VERBOSE=0
TARGET_DIR="."

# Get the directory where this script is located
SCRIPT_DIR="${0:A:h}"
MAPPING_FILE="${SCRIPT_DIR}/wiki-link-mapping.csv"

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run)
            DRY_RUN=1
            shift
            ;;
        --backup)
            BACKUP=1
            shift
            ;;
        --verbose)
            VERBOSE=1
            shift
            ;;
        --help)
            grep '^#' "$0" | grep -v '#!/' | sed 's/^# \?//'
            exit 0
            ;;
        *)
            TARGET_DIR="$1"
            shift
            ;;
    esac
done

# Validate mapping file exists
if [[ ! -f "$MAPPING_FILE" ]]; then
    echo "${RED}Error: Mapping file not found: $MAPPING_FILE${NC}"
    echo "Please run extract_ontology_terms.py first to generate the mapping."
    exit 1
fi

# Validate target directory exists
if [[ ! -d "$TARGET_DIR" ]]; then
    echo "${RED}Error: Target directory not found: $TARGET_DIR${NC}"
    exit 1
fi

# Function to log verbose messages
log_verbose() {
    if [[ $VERBOSE -eq 1 ]]; then
        echo "${BLUE}[INFO]${NC} $1"
    fi
}

# Function to escape special regex characters
escape_regex() {
    echo "$1" | sed -e 's/[]\/$*.^[]/\\&/g'
}

# Read mapping CSV and build perl script - use temp file to avoid subshell issues
echo "${GREEN}Building replacement rules from mapping file...${NC}"
TEMP_RULES=$(mktemp)
RULE_COUNT=0

tail -n +2 "$MAPPING_FILE" | while IFS=',' read -r old_term canonical_term term_id domain filename rest; do
    # Remove quotes if present (CSV format)
    old_term="${old_term//\"/}"
    canonical_term="${canonical_term//\"/}"

    # Skip if canonical term is empty
    if [[ -z "$canonical_term" ]]; then
        continue
    fi

    # Skip if old term equals canonical term (no replacement needed)
    if [[ "$old_term" == "$canonical_term" ]]; then
        continue
    fi

    # Escape special characters for perl
    old_escaped=$(escape_regex "$old_term")
    canonical_escaped=$(escape_regex "$canonical_term")

    # Write perl command to temp file
    echo "s/\[\[${old_escaped}\]\]/[[${canonical_escaped}]]/g;" >> "$TEMP_RULES"
done

RULE_COUNT=$(wc -l < "$TEMP_RULES")
echo "${GREEN}Generated ${RULE_COUNT} replacement rules${NC}"

# Build complete perl script from temp file
PERL_SCRIPT=$(cat "$TEMP_RULES")
rm "$TEMP_RULES"

# Find all markdown files in target directory
MARKDOWN_FILES=(${(f)"$(find "$TARGET_DIR" -name "*.md" -type f)"})
FILE_COUNT=${#MARKDOWN_FILES[@]}

if [[ $FILE_COUNT -eq 0 ]]; then
    echo "${YELLOW}No markdown files found in $TARGET_DIR${NC}"
    exit 0
fi

echo "${GREEN}Found ${FILE_COUNT} markdown files to process${NC}"

if [[ $DRY_RUN -eq 1 ]]; then
    echo "${YELLOW}DRY RUN MODE - No files will be modified${NC}"
fi

if [[ $BACKUP -eq 1 ]]; then
    echo "${YELLOW}Backup mode enabled - .bak files will be created${NC}"
fi

# Process each markdown file
PROCESSED=0
MODIFIED=0

for md_file in "${MARKDOWN_FILES[@]}"; do
    log_verbose "Processing: $md_file"

    if [[ $DRY_RUN -eq 1 ]]; then
        # Dry run: show what would change
        TEMP_OUTPUT_DRY=$(mktemp)
        perl -0777 -pe "$PERL_SCRIPT" "$md_file" > "$TEMP_OUTPUT_DRY"
        CHANGES=$(diff -u "$md_file" "$TEMP_OUTPUT_DRY" || true)
        rm "$TEMP_OUTPUT_DRY"
        if [[ -n "$CHANGES" ]]; then
            echo "${YELLOW}Would modify:${NC} $md_file"
            if [[ $VERBOSE -eq 1 ]]; then
                echo "$CHANGES"
            fi
            MODIFIED=$((MODIFIED + 1))
        fi
    else
        # Check if file would be modified
        TEMP_OUTPUT=$(mktemp)
        perl -0777 -pe "$PERL_SCRIPT" "$md_file" > "$TEMP_OUTPUT"

        if ! diff -q "$md_file" "$TEMP_OUTPUT" > /dev/null 2>&1; then
            # File will be modified
            if [[ $BACKUP -eq 1 ]]; then
                cp "$md_file" "${md_file}.bak"
                log_verbose "Created backup: ${md_file}.bak"
            fi

            mv "$TEMP_OUTPUT" "$md_file"
            echo "${GREEN}Modified:${NC} $md_file"
            MODIFIED=$((MODIFIED + 1))
        else
            rm "$TEMP_OUTPUT"
            log_verbose "No changes needed: $md_file"
        fi
    fi

    PROCESSED=$((PROCESSED + 1))
done

# Summary
echo ""
echo "${GREEN}================================${NC}"
echo "${GREEN}Replacement Summary${NC}"
echo "${GREEN}================================${NC}"
echo "Files processed:  $PROCESSED"
echo "Files modified:   $MODIFIED"
echo "Rules applied:    $RULE_COUNT"

if [[ $DRY_RUN -eq 1 ]]; then
    echo ""
    echo "${YELLOW}This was a DRY RUN - no files were actually modified.${NC}"
    echo "Run without --dry-run to apply changes."
elif [[ $MODIFIED -gt 0 ]]; then
    echo ""
    echo "${GREEN}Wiki-link replacement complete!${NC}"
    if [[ $BACKUP -eq 1 ]]; then
        echo "Backup files (.bak) have been created."
    fi
else
    echo ""
    echo "${BLUE}No replacements needed - all links already use canonical terms.${NC}"
fi
