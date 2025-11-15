#!/bin/bash
# Ontology Migration Conflict Resolution Script
# Resolves 8 file conflicts by removing inferior duplicates
# Date: 2025-11-12

set -e  # Exit on error

PAGES_DIR="/home/user/logseq/mainKnowledgeGraph/pages"
BACKUP_DIR="/home/user/logseq/scripts/ontology-migration/backups/conflict-resolution-$(date +%Y%m%d-%H%M%S)"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "=== Ontology Migration Conflict Resolution ==="
echo "Backup directory: $BACKUP_DIR"
echo ""

cd "$PAGES_DIR"

# Function to backup and delete a file
backup_and_delete() {
    local file="$1"
    local reason="$2"

    if [ -f "$file" ]; then
        echo "Processing: $file"
        echo "  Reason: $reason"
        cp "$file" "$BACKUP_DIR/"
        rm "$file"
        echo "  ✓ Backed up and deleted"
        echo ""
    else
        echo "  ⚠ File not found: $file"
        echo ""
    fi
}

echo "Step 1/8: Resolving Blockchain conflict..."
backup_and_delete "Blockchain.md" "Draft mv-* version inferior to complete BC-0001 with extensive content"

echo "Step 2/8: Resolving Distributed Ledger conflict..."
backup_and_delete "BC-0002-distributed-ledger.md" "PC-0004 version has more comprehensive definition and content"

echo "Step 3/8: Resolving Smart Contract conflict..."
backup_and_delete "Smart Contract.md" "Draft metaverse version inferior to complete BC-0009 with RGB protocol content"

echo "Step 4/8: Resolving Consensus Mechanism conflict..."
backup_and_delete "BC-0051-consensus-mechanism.md" "PC-0009 version has more comprehensive definition and analysis"

echo "Step 5/8: Resolving Token conflict..."
backup_and_delete "Token.md" "Draft mv-* version is simple stub, BC-0096 has comprehensive token economics"

echo "Step 6/8: Resolving Cryptocurrency conflict..."
backup_and_delete "Cryptocurrency.md" "Draft metaverse version inferior to complete BC-0097 with 2024-2025 developments"

echo "Step 7/8: Resolving Digital Identity Wallet conflict..."
backup_and_delete "BC-0459-digital-identity-wallet.md" "Stub with minimal placeholder, target has comprehensive content"

echo "Step 8/8: Resolving AI Governance Framework conflict..."
backup_and_delete "AI Governance Framework.md" "Draft metaverse version inferior to in-progress AI-0387 with proper ai-grounded domain"

echo "=== Conflict Resolution Complete ==="
echo "8 conflicts resolved"
echo "Backups saved to: $BACKUP_DIR"
echo ""
echo "Next steps:"
echo "  1. Run: python3 rename_files.py (no dry-run)"
echo "  2. Run: python3 ontology_enricher.py"
echo "  3. Run: python3 reference_updater.py"
