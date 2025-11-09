#!/bin/bash
# Watch for refactored ontology files and automatically validate

BASE_DIR="/home/devuser/workspace/project/Metaverse-Ontology/ontology"
BLOCKCHAIN_FILE="$BASE_DIR/blockchain-ontology/schemas/blockchain-ontology-refactored.ttl"
AI_FILE="$BASE_DIR/ai-grounded-ontology/schemas/ai-grounded-ontology-refactored.ttl"
VALIDATOR="/home/devuser/workspace/project/Metaverse-Ontology/scripts/ontology-validator.py"

echo "=========================================="
echo "Ontology Quality Validator - Monitor Mode"
echo "=========================================="
echo ""
echo "Waiting for refactored ontology files..."
echo "  - Blockchain: $BLOCKCHAIN_FILE"
echo "  - AI-Grounded: $AI_FILE"
echo ""

# Check initial state
if [ -f "$BLOCKCHAIN_FILE" ]; then
    echo "✓ Blockchain ontology already exists"
    BC_READY=1
else
    echo "⧗ Waiting for Blockchain ontology..."
    BC_READY=0
fi

if [ -f "$AI_FILE" ]; then
    echo "✓ AI-Grounded ontology already exists"
    AI_READY=1
else
    echo "⧗ Waiting for AI-Grounded ontology..."
    AI_READY=0
fi

echo ""

# If both exist, run validation immediately
if [ $BC_READY -eq 1 ] && [ $AI_READY -eq 1 ]; then
    echo "Both files found! Running validation..."
    python3 "$VALIDATOR"
    exit $?
fi

# Otherwise, monitor for file creation
echo "Monitoring for file creation (checking every 5 seconds)..."
echo "Press Ctrl+C to stop monitoring"
echo ""

CHECK_COUNT=0
while true; do
    ((CHECK_COUNT++))

    # Check Blockchain file
    if [ $BC_READY -eq 0 ] && [ -f "$BLOCKCHAIN_FILE" ]; then
        echo "✓ Blockchain ontology created!"
        BC_READY=1
    fi

    # Check AI file
    if [ $AI_READY -eq 0 ] && [ -f "$AI_FILE" ]; then
        echo "✓ AI-Grounded ontology created!"
        AI_READY=1
    fi

    # If both ready, run validation
    if [ $BC_READY -eq 1 ] && [ $AI_READY -eq 1 ]; then
        echo ""
        echo "=========================================="
        echo "Both ontologies ready! Running validation..."
        echo "=========================================="
        echo ""
        python3 "$VALIDATOR"
        exit $?
    fi

    # Status update every minute (12 checks)
    if [ $((CHECK_COUNT % 12)) -eq 0 ]; then
        echo "[$(date +%H:%M:%S)] Still waiting... (Blockchain: $BC_READY, AI: $AI_READY)"
    fi

    sleep 5
done
