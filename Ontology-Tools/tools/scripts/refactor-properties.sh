#!/bin/bash
#
# Chimera Prime Workstream 1.4: Property Refactoring Script
# Purpose: Replace dt:is-subclass-of with standard rdfs:subClassOf
# Target: ontology-full-bridged.ttl (352 instances)
#

set -euo pipefail

# Configuration
INPUT_FILE="${1:-/home/user/logseq/ontology-full-bridged.ttl}"
BACKUP_FILE="${INPUT_FILE}.backup-$(date +%Y%m%d-%H%M%S)"
OUTPUT_FILE="${INPUT_FILE}.refactored"
LOG_FILE="/home/user/logseq/docs/chimera-prime/refactoring.log"

# Initialize log
echo "=== Chimera Prime WS1.4 Property Refactoring ===" > "$LOG_FILE"
echo "Start Time: $(date)" >> "$LOG_FILE"
echo "Input File: $INPUT_FILE" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"

# Validation
if [ ! -f "$INPUT_FILE" ]; then
    echo "ERROR: Input file not found: $INPUT_FILE" | tee -a "$LOG_FILE"
    exit 1
fi

# Create backup
echo "Creating backup: $BACKUP_FILE" | tee -a "$LOG_FILE"
cp "$INPUT_FILE" "$BACKUP_FILE"

# Count occurrences before refactoring
BEFORE_COUNT=$(grep -c "dt:is-subclass-of" "$INPUT_FILE" || echo "0")
echo "Found $BEFORE_COUNT instances of dt:is-subclass-of" | tee -a "$LOG_FILE"
echo "" >> "$LOG_FILE"

# Extract all occurrences with line numbers for documentation
echo "=== dt:is-subclass-of Usage Locations ===" >> "$LOG_FILE"
grep -n "dt:is-subclass-of" "$INPUT_FILE" >> "$LOG_FILE" || true
echo "" >> "$LOG_FILE"

# REFACTORING STEP 1: Replace dt:is-subclass-of property in restrictions
echo "Step 1: Replacing dt:is-subclass-of in owl:Restriction patterns..." | tee -a "$LOG_FILE"

sed -E 's/owl:onProperty dt:is-subclass-of ;/# REFACTORED: was owl:onProperty dt:is-subclass-of/g' "$INPUT_FILE" > "${OUTPUT_FILE}.step1"

# Count replacements
STEP1_REMAINING=$(grep -c "dt:is-subclass-of" "${OUTPUT_FILE}.step1" || echo "0")
echo "  Remaining after Step 1: $STEP1_REMAINING" | tee -a "$LOG_FILE"

# REFACTORING STEP 2: Remove dt:is-subclass-of property definition
echo "Step 2: Commenting out dt:is-subclass-of property definition..." | tee -a "$LOG_FILE"

sed -E '/^dt:is-subclass-of a owl:ObjectProperty/,/rdfs:label "is subclass of" \./ {
    s/^(.*)$/# DEPRECATED: \1/
}' "${OUTPUT_FILE}.step1" > "${OUTPUT_FILE}.step2"

# REFACTORING STEP 3: Convert restriction patterns to direct subClassOf
echo "Step 3: Converting restriction patterns to standard rdfs:subClassOf..." | tee -a "$LOG_FILE"

# This is complex - we need to transform:
# [ a owl:Restriction ;
#     owl:onProperty dt:is-subclass-of ;
#     owl:someValuesFrom Target ]
# Into:
# rdfs:subClassOf Target

cat "${OUTPUT_FILE}.step2" > "${OUTPUT_FILE}.step3"

echo "  Note: Restriction to subClassOf conversion requires manual review" | tee -a "$LOG_FILE"
echo "  Patterns commented for safety - review before final deployment" | tee -a "$LOG_FILE"

# Count final occurrences
AFTER_COUNT=$(grep -c "dt:is-subclass-of" "${OUTPUT_FILE}.step3" | grep -v "^# DEPRECATED" || echo "0")
COMMENTED_COUNT=$(grep -c "# REFACTORED: was owl:onProperty dt:is-subclass-of" "${OUTPUT_FILE}.step3" || echo "0")

# Generate statistics
echo "" >> "$LOG_FILE"
echo "=== Refactoring Statistics ===" >> "$LOG_FILE"
echo "Initial count: $BEFORE_COUNT" >> "$LOG_FILE"
echo "Remaining (uncommented): $AFTER_COUNT" >> "$LOG_FILE"
echo "Commented out: $COMMENTED_COUNT" >> "$LOG_FILE"
echo "Property definition: DEPRECATED" >> "$LOG_FILE"

# Create final output
cp "${OUTPUT_FILE}.step3" "$OUTPUT_FILE"

# Cleanup intermediate files
rm -f "${OUTPUT_FILE}.step1" "${OUTPUT_FILE}.step2" "${OUTPUT_FILE}.step3"

# Final validation
echo "" >> "$LOG_FILE"
echo "=== Final Validation ===" >> "$LOG_FILE"

if [ "$AFTER_COUNT" -eq 0 ]; then
    echo "SUCCESS: All dt:is-subclass-of instances refactored" | tee -a "$LOG_FILE"
else
    echo "WARNING: $AFTER_COUNT instances remain - manual review required" | tee -a "$LOG_FILE"
fi

# Generate file checksums
echo "" >> "$LOG_FILE"
echo "=== File Checksums ===" >> "$LOG_FILE"
echo "Original: $(sha256sum "$INPUT_FILE" | cut -d' ' -f1)" >> "$LOG_FILE"
echo "Backup: $(sha256sum "$BACKUP_FILE" | cut -d' ' -f1)" >> "$LOG_FILE"
echo "Refactored: $(sha256sum "$OUTPUT_FILE" | cut -d' ' -f1)" >> "$LOG_FILE"

echo "" >> "$LOG_FILE"
echo "End Time: $(date)" >> "$LOG_FILE"

# Summary output
echo ""
echo "=== REFACTORING COMPLETE ==="
echo "Input:      $INPUT_FILE"
echo "Backup:     $BACKUP_FILE"
echo "Output:     $OUTPUT_FILE"
echo "Log:        $LOG_FILE"
echo ""
echo "Original instances:    $BEFORE_COUNT"
echo "Commented instances:   $COMMENTED_COUNT"
echo "Remaining instances:   $AFTER_COUNT"
echo ""
echo "Next steps:"
echo "1. Review: $OUTPUT_FILE"
echo "2. Run SPARQL verification: scripts/verify-no-is-subclass-of.sparql"
echo "3. Test with HermiT/Pellet reasoner"
echo "4. Apply property inverse declarations"
echo ""
