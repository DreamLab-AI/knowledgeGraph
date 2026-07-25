#!/usr/bin/env bash

# check-versions.sh
# Verifies that Cargo.toml and package.json versions are synchronized

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

CARGO_TOML="$PROJECT_ROOT/rust-wasm/Cargo.toml"
PACKAGE_JSON="$PROJECT_ROOT/modern/package.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "WasmVOWL Version Checker"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if files exist
if [[ ! -f "$CARGO_TOML" ]]; then
    echo -e "${RED}✗ Error: Cargo.toml not found at $CARGO_TOML${NC}"
    exit 1
fi

if [[ ! -f "$PACKAGE_JSON" ]]; then
    echo -e "${RED}✗ Error: package.json not found at $PACKAGE_JSON${NC}"
    exit 1
fi

# Extract version from Cargo.toml
# Looks for: version = "X.Y.Z"
CARGO_VERSION=$(grep '^version = ' "$CARGO_TOML" | head -n1 | sed 's/version = "\(.*\)"/\1/')

# Extract version from package.json
# Looks for: "version": "X.Y.Z"
PACKAGE_VERSION=$(grep '"version":' "$PACKAGE_JSON" | head -n1 | sed 's/.*"version": "\(.*\)".*/\1/')

echo "📦 Rust WASM (Cargo.toml):   v$CARGO_VERSION"
echo "📦 Frontend (package.json):  v$PACKAGE_VERSION"
echo ""

# Compare versions
if [[ "$CARGO_VERSION" == "$PACKAGE_VERSION" ]]; then
    echo -e "${GREEN}✓ Versions match! Both are at v$CARGO_VERSION${NC}"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}✓ Version check PASSED${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 0
else
    echo -e "${RED}✗ Version mismatch detected!${NC}"
    echo ""
    echo -e "${YELLOW}Expected: Both versions should be identical${NC}"
    echo -e "${YELLOW}Actual:   Cargo.toml has v$CARGO_VERSION, package.json has v$PACKAGE_VERSION${NC}"
    echo ""
    echo "Please update one of the following files:"
    echo "  - $CARGO_TOML"
    echo "  - $PACKAGE_JSON"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${RED}✗ Version check FAILED${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi
