#!/bin/bash
#
# Logseq Ontology Validation Script
# Validates ontology files for structural integrity and naming consistency
#
# Usage: ./validate-ontology.sh
#

set -e

PAGES_DIR="pages"
ERRORS=0
WARNINGS=0

echo "🔍 Logseq Ontology Validator"
echo "============================"
echo ""

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Check 1: term-id matches file name
echo "✓ Check 1: Validating term-id matches file name..."
for file in $PAGES_DIR/BC-*.md $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    filename=$(basename "$file" .md)
    file_prefix=$(echo "$filename" | cut -d'-' -f1-2)  # BC-0001 or AI-0376

    term_id=$(grep "term-id::" "$file" | head -1 | awk '{print $NF}')

    if [ "$term_id" != "$file_prefix" ]; then
        echo -e "${RED}  ✗ ERROR: $filename has term-id: $term_id (should be $file_prefix)${NC}"
        ((ERRORS++))
    fi
done

# Check 2: No number prefixes in preferred-term
echo "✓ Check 2: Validating preferred-term has no number prefix..."
for file in $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    preferred_term=$(grep "preferred-term::" "$file" | head -1 | sed 's/.*preferred-term:: //')

    if echo "$preferred_term" | grep -qE '^\d{4} '; then
        echo -e "${RED}  ✗ ERROR: $(basename $file) has number prefix in preferred-term: $preferred_term${NC}"
        ((ERRORS++))
    fi
done

# Check 3: OWL class uses domain-appropriate prefix
echo "✓ Check 3: Validating owl:class uses correct prefix..."
for file in $PAGES_DIR/BC-*.md; do
    [ -f "$file" ] || continue

    owl_class=$(grep "owl:class::" "$file" | head -1 | awk '{print $NF}')

    if ! echo "$owl_class" | grep -qE '^bc:|^PC:'; then
        echo -e "${YELLOW}  ⚠ WARNING: $(basename $file) uses non-bc: prefix: $owl_class${NC}"
        ((WARNINGS++))
    fi
done

for file in $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    owl_class=$(grep "owl:class::" "$file" | head -1 | awk '{print $NF}')

    if ! echo "$owl_class" | grep -qE '^aigo:'; then
        echo -e "${YELLOW}  ⚠ WARNING: $(basename $file) uses non-aigo: prefix: $owl_class${NC}"
        ((WARNINGS++))
    fi
done

# Check 4: source-domain matches file type
echo "✓ Check 4: Validating source-domain matches file type..."
for file in $PAGES_DIR/BC-*.md; do
    [ -f "$file" ] || continue

    source_domain=$(grep "source-domain::" "$file" | head -1 | awk '{print $NF}')

    if [ "$source_domain" != "blockchain" ] && [ "$source_domain" != "" ]; then
        echo -e "${RED}  ✗ ERROR: $(basename $file) has wrong source-domain: $source_domain (should be blockchain)${NC}"
        ((ERRORS++))
    fi
done

for file in $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    source_domain=$(grep "source-domain::" "$file" | head -1 | awk '{print $NF}')

    if [ "$source_domain" != "ai-grounded" ] && [ "$source_domain" != "" ]; then
        echo -e "${RED}  ✗ ERROR: $(basename $file) has wrong source-domain: $source_domain (should be ai-grounded)${NC}"
        ((ERRORS++))
    fi
done

# Check 5: Definition field is not empty for complete files
echo "✓ Check 5: Validating definitions exist for complete files..."
for file in $PAGES_DIR/BC-*.md $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    status=$(grep "status::" "$file" | head -1 | awk '{print $NF}')

    if [ "$status" = "complete" ]; then
        # Check if definition field is empty or missing
        if ! grep -A 1 "definition::" "$file" | grep -qE '\S'; then
            echo -e "${YELLOW}  ⚠ WARNING: $(basename $file) is complete but has empty definition${NC}"
            ((WARNINGS++))
        fi
    fi
done

# Check 6: Referenced parent classes exist
echo "✓ Check 6: Validating parent class files exist..."
MISSING_PARENTS=()

check_parent_exists() {
    local parent_name="$1"
    local file_to_check="$PAGES_DIR/${parent_name}.md"

    if [ ! -f "$file_to_check" ]; then
        if [[ ! " ${MISSING_PARENTS[@]} " =~ " ${parent_name} " ]]; then
            MISSING_PARENTS+=("$parent_name")
        fi
    fi
}

for file in $PAGES_DIR/BC-*.md $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    # Extract parent classes from is-subclass-of line
    parents=$(grep "is-subclass-of::" "$file" | sed 's/.*is-subclass-of:: //' | tr ',' '\n')

    for parent in $parents; do
        # Remove [[ ]] brackets and trim
        parent_clean=$(echo "$parent" | sed 's/\[\[\(.*\)\]\]/\1/' | xargs)
        [ -n "$parent_clean" ] && check_parent_exists "$parent_clean"
    done
done

if [ ${#MISSING_PARENTS[@]} -gt 0 ]; then
    echo -e "${YELLOW}  ⚠ WARNING: Missing parent class files:${NC}"
    for parent in "${MISSING_PARENTS[@]}"; do
        echo -e "${YELLOW}    - $parent.md${NC}"
    done
    ((WARNINGS+=${#MISSING_PARENTS[@]}))
fi

# Check 7: Authority score is present
echo "✓ Check 7: Validating authority-score exists..."
for file in $PAGES_DIR/BC-*.md $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    if ! grep -q "authority-score::" "$file"; then
        echo -e "${YELLOW}  ⚠ WARNING: $(basename $file) missing authority-score${NC}"
        ((WARNINGS++))
    fi
done

# Check 8: OWL axioms have minimum content
echo "✓ Check 8: Validating OWL axioms exist..."
for file in $PAGES_DIR/BC-*.md $PAGES_DIR/AI-*.md; do
    [ -f "$file" ] || continue

    # Count lines in clojure code block
    axiom_lines=$(sed -n '/```clojure/,/```/p' "$file" | wc -l)

    if [ "$axiom_lines" -lt 10 ]; then
        echo -e "${YELLOW}  ⚠ WARNING: $(basename $file) has minimal OWL axioms ($axiom_lines lines)${NC}"
        ((WARNINGS++))
    fi
done

# Summary
echo ""
echo "============================"
echo "📊 Validation Summary"
echo "============================"
echo -e "${RED}Errors: $ERRORS${NC}"
echo -e "${YELLOW}Warnings: $WARNINGS${NC}"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed! Ontology is valid.${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ No critical errors found.${NC}"
    echo -e "${YELLOW}⚠ $WARNINGS warnings to review.${NC}"
    exit 0
else
    echo -e "${RED}✗ Found $ERRORS critical errors that must be fixed.${NC}"
    exit 1
fi
