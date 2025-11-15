#!/bin/bash
# Resolve remaining 6 robotics file conflicts by making names more specific

set -e

PAGES_DIR="/home/user/logseq/mainKnowledgeGraph/pages"

echo "🔧 Resolving robotics file conflicts..."

# Conflict 1: Singularity - robotics term vs AI singularity
# Keep both but rename robotics one to be specific
mv "${PAGES_DIR}/rb-0031-singularity.md" "${PAGES_DIR}/Robot Singularity.md"
echo "✓ Renamed rb-0031-singularity.md → Robot Singularity.md"

# Conflict 2: Accuracy - robotics term vs general accuracy
# Check which one has ontology block
if grep -q "term-id:: RB-0035" "${PAGES_DIR}/Accuracy.md" 2>/dev/null; then
    # The existing one is the robotics one, delete the prefixed
    rm "${PAGES_DIR}/rb-0035-accuracy.md"
    echo "✓ Deleted rb-0035-accuracy.md (duplicate)"
else
    # Keep both, rename robotics one
    mv "${PAGES_DIR}/rb-0035-accuracy.md" "${PAGES_DIR}/Robot Accuracy.md"
    echo "✓ Renamed rb-0035-accuracy.md → Robot Accuracy.md"
fi

# Conflict 3: Motion Planning - robotics specific
mv "${PAGES_DIR}/rb-0049-motion-planning.md" "${PAGES_DIR}/Robot Motion Planning.md"
echo "✓ Renamed rb-0049-motion-planning.md → Robot Motion Planning.md"

# Conflict 4: Path Planning - robotics specific
mv "${PAGES_DIR}/rb-0050-path-planning.md" "${PAGES_DIR}/Robot Path Planning.md"
echo "✓ Renamed rb-0050-path-planning.md → Robot Path Planning.md"

# Conflict 5: Encoder - robotics component vs general encoder
mv "${PAGES_DIR}/rb-0072-encoder.md" "${PAGES_DIR}/Robot Encoder.md"
echo "✓ Renamed rb-0072-encoder.md → Robot Encoder.md"

# Conflict 6: Risk Assessment - robotics specific
mv "${PAGES_DIR}/rb-0089-risk-assessment.md" "${PAGES_DIR}/Robot Risk Assessment.md"
echo "✓ Renamed rb-0089-risk-assessment.md → Robot Risk Assessment.md"

echo ""
echo "✅ All robotics file conflicts resolved"
