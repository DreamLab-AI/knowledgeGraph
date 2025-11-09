#!/bin/bash
# Verify Bridge Application Script
# Checks that bridges were correctly applied to concept files

echo "================================================================================"
echo "BRIDGE VERIFICATION REPORT"
echo "================================================================================"
echo ""

PAGES_DIR="/home/devuser/workspace/project/Metaverse-Ontology/logseq/pages"

# Count total bridges
TOTAL_BRIDGES=$(grep -r "bridges-to::" "$PAGES_DIR"/*.md 2>/dev/null | wc -l)
echo "Total bridges found: $TOTAL_BRIDGES"

# Count files with bridges
FILES_WITH_BRIDGES=$(grep -l "bridges-to::" "$PAGES_DIR"/*.md 2>/dev/null | wc -l)
echo "Files with bridges: $FILES_WITH_BRIDGES"
echo ""

echo "================================================================================"
echo "FILES WITH BRIDGES"
echo "================================================================================"
echo ""

for file in $(grep -l "bridges-to::" "$PAGES_DIR"/*.md 2>/dev/null); do
    filename=$(basename "$file")
    count=$(grep -c "bridges-to::" "$file")
    echo "$filename: $count bridge(s)"
    grep "bridges-to::" "$file" | sed 's/^/  /'
    echo ""
done

echo "================================================================================"
echo "VERIFICATION COMPLETE"
echo "================================================================================"
echo ""
echo "Summary:"
echo "  - Total concept files: $(ls -1 "$PAGES_DIR"/*.md 2>/dev/null | wc -l)"
echo "  - Files with bridges: $FILES_WITH_BRIDGES"
echo "  - Total bridges: $TOTAL_BRIDGES"
echo "  - Average bridges per file: $(echo "scale=2; $TOTAL_BRIDGES / $FILES_WITH_BRIDGES" | bc 2>/dev/null || echo "N/A")"
echo ""
