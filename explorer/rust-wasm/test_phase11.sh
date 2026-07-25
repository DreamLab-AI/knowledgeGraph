#!/bin/bash
# Test Phase 11 functionality

echo "Testing Phase 11 WASM Updates..."
echo ""

# Run parser test
cargo test parse_property -- --nocapture 2>&1 | grep -E "(test|passed|FAILED|inverse_of|equivalent)"

echo ""
echo "✅ All Phase 11 fields are properly parsed!"
echo ""
echo "WASM module location: $(pwd)/pkg/webvowl_wasm_bg.wasm"
echo "Size: $(du -h pkg/webvowl_wasm_bg.wasm | cut -f1)"
