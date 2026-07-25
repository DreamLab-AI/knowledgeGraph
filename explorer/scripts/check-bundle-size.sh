#!/bin/bash
# Bundle Size Validation Script for Phase 3
# Target: WASM binary <1.5MB

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
RUST_WASM_DIR="$PROJECT_ROOT/rust-wasm"
PKG_DIR="$RUST_WASM_DIR/pkg"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Phase 3 Bundle Size Validation${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Build WASM with wasm-pack
echo -e "${YELLOW}Building WASM package...${NC}"
cd "$RUST_WASM_DIR"

# Build optimized release
wasm-pack build --target web --release

if [ $? -ne 0 ]; then
    echo -e "${RED}WASM build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}Build successful!${NC}"
echo ""

# Check if pkg directory exists
if [ ! -d "$PKG_DIR" ]; then
    echo -e "${RED}Error: pkg directory not found${NC}"
    exit 1
fi

# File size analysis
echo -e "${BLUE}File Size Analysis:${NC}"
echo "-------------------------------------------"

WASM_FILE="$PKG_DIR/webvowl_wasm_bg.wasm"
JS_FILE="$PKG_DIR/webvowl_wasm.js"
TS_FILE="$PKG_DIR/webvowl_wasm.d.ts"

# WASM binary size
if [ -f "$WASM_FILE" ]; then
    WASM_SIZE=$(stat -c%s "$WASM_FILE" 2>/dev/null || stat -f%z "$WASM_FILE")
    WASM_SIZE_KB=$((WASM_SIZE / 1024))
    WASM_SIZE_MB=$(echo "scale=2; $WASM_SIZE / 1024 / 1024" | bc)

    echo -e "WASM Binary:      ${WASM_SIZE_KB} KB (${WASM_SIZE_MB} MB)"

    # Check against target
    TARGET_SIZE=$((1536 * 1024)) # 1.5 MB in bytes

    if [ $WASM_SIZE -le $TARGET_SIZE ]; then
        echo -e "                  ${GREEN}✓ PASS${NC} (Target: <1.5 MB)"
    else
        echo -e "                  ${RED}✗ FAIL${NC} (Target: <1.5 MB)"
        FAIL=1
    fi
else
    echo -e "${RED}Error: WASM file not found${NC}"
    exit 1
fi

# JS glue code size
if [ -f "$JS_FILE" ]; then
    JS_SIZE=$(stat -c%s "$JS_FILE" 2>/dev/null || stat -f%z "$JS_FILE")
    JS_SIZE_KB=$((JS_SIZE / 1024))
    echo -e "JS Glue Code:     ${JS_SIZE_KB} KB"
fi

# TypeScript definitions size
if [ -f "$TS_FILE" ]; then
    TS_SIZE=$(stat -c%s "$TS_FILE" 2>/dev/null || stat -f%z "$TS_FILE")
    TS_SIZE_KB=$((TS_SIZE / 1024))
    echo -e "TypeScript Defs:  ${TS_SIZE_KB} KB"
fi

# Total package size
if [ -f "$WASM_FILE" ] && [ -f "$JS_FILE" ] && [ -f "$TS_FILE" ]; then
    TOTAL_SIZE=$((WASM_SIZE + JS_SIZE + TS_SIZE))
    TOTAL_SIZE_KB=$((TOTAL_SIZE / 1024))
    TOTAL_SIZE_MB=$(echo "scale=2; $TOTAL_SIZE / 1024 / 1024" | bc)
    echo "-------------------------------------------"
    echo -e "Total Package:    ${TOTAL_SIZE_KB} KB (${TOTAL_SIZE_MB} MB)"
fi

echo ""

# Detailed WASM analysis with wasm-opt if available
if command -v wasm-opt &> /dev/null; then
    echo -e "${BLUE}WASM Optimization Analysis:${NC}"
    echo "-------------------------------------------"

    # Create optimized version for comparison
    OPTIMIZED_WASM="$PKG_DIR/webvowl_wasm_bg_opt.wasm"
    wasm-opt -Oz "$WASM_FILE" -o "$OPTIMIZED_WASM" 2>/dev/null || true

    if [ -f "$OPTIMIZED_WASM" ]; then
        OPT_SIZE=$(stat -c%s "$OPTIMIZED_WASM" 2>/dev/null || stat -f%z "$OPTIMIZED_WASM")
        OPT_SIZE_KB=$((OPT_SIZE / 1024))
        OPT_SIZE_MB=$(echo "scale=2; $OPT_SIZE / 1024 / 1024" | bc)

        SAVINGS=$((WASM_SIZE - OPT_SIZE))
        SAVINGS_KB=$((SAVINGS / 1024))
        SAVINGS_PCT=$(echo "scale=1; ($SAVINGS * 100) / $WASM_SIZE" | bc)

        echo -e "Optimized Size:   ${OPT_SIZE_KB} KB (${OPT_SIZE_MB} MB)"
        echo -e "Potential Savings: ${SAVINGS_KB} KB (${SAVINGS_PCT}%)"

        # Cleanup
        rm -f "$OPTIMIZED_WASM"
    fi

    echo ""
fi

# Component breakdown using wasm2wat if available
if command -v wasm2wat &> /dev/null; then
    echo -e "${BLUE}WASM Component Breakdown:${NC}"
    echo "-------------------------------------------"

    WAT_FILE="$PKG_DIR/webvowl_wasm_bg.wat"
    wasm2wat "$WASM_FILE" -o "$WAT_FILE" 2>/dev/null || true

    if [ -f "$WAT_FILE" ]; then
        FUNCTIONS=$(grep -c "func \$" "$WAT_FILE" || echo "N/A")
        IMPORTS=$(grep -c "import" "$WAT_FILE" || echo "N/A")
        EXPORTS=$(grep -c "export" "$WAT_FILE" || echo "N/A")

        echo -e "Functions:        $FUNCTIONS"
        echo -e "Imports:          $IMPORTS"
        echo -e "Exports:          $EXPORTS"

        # Cleanup
        rm -f "$WAT_FILE"
    fi

    echo ""
fi

# Summary
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Summary${NC}"
echo -e "${BLUE}================================================${NC}"

if [ -z "$FAIL" ]; then
    echo -e "${GREEN}✓ All bundle size targets met!${NC}"
    echo ""
    echo "Phase 3 Bundle Size Validation: PASSED"
    exit 0
else
    echo -e "${RED}✗ Bundle size exceeds target${NC}"
    echo ""
    echo "Recommendations:"
    echo "  1. Enable LTO in Cargo.toml"
    echo "  2. Use opt-level = 'z' for size optimization"
    echo "  3. Strip debug symbols"
    echo "  4. Run wasm-opt -Oz"
    echo "  5. Review dependency tree for bloat"
    echo ""
    echo "Phase 3 Bundle Size Validation: FAILED"
    exit 1
fi
