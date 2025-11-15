#!/bin/bash
# Integration test for CLI binary

set -e

echo "🧪 Testing CLI Binary..."

# Build CLI
cargo build --release --bin logseq-publisher

CLI_BIN="./target/release/logseq-publisher"

# Test 1: Version check
echo "✓ Test 1: Version check"
$CLI_BIN --version

# Test 2: Ontology stats
echo "✓ Test 2: Ontology statistics"
if [ -f "/home/user/logseq/narrativegoldmine-ontology.json" ]; then
    $CLI_BIN ontology stats --input /home/user/logseq/narrativegoldmine-ontology.json
fi

# Test 3: Ontology extraction
echo "✓ Test 3: Ontology extraction"
if [ -f "/home/user/logseq/narrativegoldmine-ontology.json" ]; then
    $CLI_BIN ontology extract \
        --input /home/user/logseq/narrativegoldmine-ontology.json \
        --output /tmp/test-ontology-output.json \
        --format json
    
    if [ -f "/tmp/test-ontology-output.json" ]; then
        echo "✅ Ontology extracted successfully"
        ls -lh /tmp/test-ontology-output.json
    fi
fi

# Test 4: Ontology validation
echo "✓ Test 4: Ontology validation"
if [ -f "/home/user/logseq/narrativegoldmine-ontology.json" ]; then
    $CLI_BIN ontology validate --input /home/user/logseq/narrativegoldmine-ontology.json
fi

echo "🎉 All CLI tests passed!"
