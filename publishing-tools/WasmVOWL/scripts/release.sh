#!/usr/bin/env bash

# release.sh
# Creates a new git tag for a WasmVOWL release

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if version argument is provided
if [[ $# -eq 0 ]]; then
    # Auto-detect version from Cargo.toml
    VERSION=$(grep '^version = ' "$PROJECT_ROOT/rust-wasm/Cargo.toml" | head -n1 | sed 's/version = "\(.*\)"/\1/')
    echo -e "${BLUE}ℹ No version specified, detected v$VERSION from Cargo.toml${NC}"
else
    VERSION="$1"
fi

TAG_NAME="wasmvowl-v$VERSION"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "WasmVOWL Release Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📦 Version:  $VERSION"
echo "🏷️  Tag:      $TAG_NAME"
echo ""

# Verify versions are synchronized
echo "🔍 Checking version synchronization..."
if ! "$SCRIPT_DIR/check-versions.sh"; then
    echo ""
    echo -e "${RED}✗ Version check failed. Please ensure Cargo.toml and package.json have matching versions.${NC}"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if git tag already exists
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
    echo -e "${RED}✗ Tag $TAG_NAME already exists!${NC}"
    echo ""
    echo "Options:"
    echo "  1. Delete existing tag:  git tag -d $TAG_NAME && git push origin :refs/tags/$TAG_NAME"
    echo "  2. Use a different version number"
    echo ""
    exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${YELLOW}⚠ Warning: You have uncommitted changes${NC}"
    echo ""
    git status --short
    echo ""
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
fi

# Extract changelog for this version
CHANGELOG_FILE="$PROJECT_ROOT/CHANGELOG.md"
if [[ -f "$CHANGELOG_FILE" ]]; then
    echo ""
    echo "📄 Changelog excerpt for v$VERSION:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    # Extract section between [VERSION] and next [VERSION] or EOF
    CHANGELOG_EXCERPT=$(awk "/## \[$VERSION\]/,/## \[/{if (/## \[/ && !/$VERSION/) exit; print}" "$CHANGELOG_FILE" | head -n -1)

    if [[ -z "$CHANGELOG_EXCERPT" ]]; then
        echo -e "${YELLOW}⚠ No changelog entry found for v$VERSION${NC}"
        echo "Please update CHANGELOG.md before creating a release."
        echo ""
        read -p "Continue without changelog? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Aborted."
            exit 1
        fi
        CHANGELOG_EXCERPT="Release v$VERSION"
    else
        echo "$CHANGELOG_EXCERPT"
    fi
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
else
    echo -e "${YELLOW}⚠ CHANGELOG.md not found${NC}"
    CHANGELOG_EXCERPT="Release v$VERSION"
fi

echo ""
echo -e "${BLUE}Creating release tag...${NC}"
echo ""

# Create annotated tag with changelog message
git tag -a "$TAG_NAME" -m "WasmVOWL v$VERSION

$CHANGELOG_EXCERPT"

echo -e "${GREEN}✓ Tag $TAG_NAME created successfully${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Next steps:"
echo ""
echo "  1. Review the tag:"
echo "     git show $TAG_NAME"
echo ""
echo "  2. Push to remote:"
echo "     git push origin $TAG_NAME"
echo ""
echo "  3. Create GitHub release:"
echo "     gh release create $TAG_NAME --title \"WasmVOWL v$VERSION\" --notes-file CHANGELOG.md"
echo ""
echo "  4. Publish to npm (if applicable):"
echo "     cd rust-wasm && wasm-pack publish"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✓ Release v$VERSION ready!${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
