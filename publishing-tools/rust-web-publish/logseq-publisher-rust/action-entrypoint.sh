#!/bin/bash
set -e

# Action entrypoint for GitHub Actions
# This script is called by action.yml to run the Rust publisher

echo "🎯 Logseq Publisher - GitHub Action Entrypoint"
echo "=============================================="
echo ""

# Validate required inputs
if [ -z "$INPUT_GRAPH_DIRECTORY" ]; then
    echo "❌ Error: graph-directory input is required"
    exit 1
fi

if [ -z "$INPUT_OUTPUT_DIRECTORY" ]; then
    echo "❌ Error: output-directory input is required"
    exit 1
fi

# Set defaults
THEME="${INPUT_THEME_MODE:-light}"
MAX_SIZE="${INPUT_MAX_SIZE_MB:-100}"
VERBOSE="${INPUT_VERBOSE:-false}"

# Display configuration
echo "📋 Configuration:"
echo "   Graph:  $INPUT_GRAPH_DIRECTORY"
echo "   Output: $INPUT_OUTPUT_DIRECTORY"
echo "   Theme:  $THEME"
[ -n "$INPUT_FILTER_PROPERTY" ] && echo "   Filter: $INPUT_FILTER_PROPERTY"
[ "$INPUT_INCLUDE_BACKLINKS" = "true" ] && echo "   Backlinks: Enabled"
[ "$INPUT_INCLUDE_GRAPH_VIEW" = "true" ] && echo "   Graph View: Enabled"
[ -n "$INPUT_CUSTOM_CSS" ] && echo "   Custom CSS: $INPUT_CUSTOM_CSS"
echo ""

# Check if publisher binary exists
PUBLISHER_BIN="./target/release/logseq-publisher"
if [ ! -f "$PUBLISHER_BIN" ]; then
    echo "❌ Error: Publisher binary not found at $PUBLISHER_BIN"
    echo "   Make sure the build step completed successfully"
    exit 1
fi

# Make binary executable
chmod +x "$PUBLISHER_BIN"

# Build command arguments
ARGS=(
    "--input" "$INPUT_GRAPH_DIRECTORY"
    "--output" "$INPUT_OUTPUT_DIRECTORY"
    "--theme" "$THEME"
)

# Add optional arguments
if [ -n "$INPUT_FILTER_PROPERTY" ]; then
    ARGS+=("--filter" "$INPUT_FILTER_PROPERTY")
fi

if [ "$INPUT_INCLUDE_BACKLINKS" = "true" ]; then
    ARGS+=("--backlinks")
fi

if [ "$INPUT_INCLUDE_GRAPH_VIEW" = "true" ]; then
    ARGS+=("--graph-view")
fi

if [ -n "$INPUT_CUSTOM_CSS" ] && [ -f "$INPUT_CUSTOM_CSS" ]; then
    ARGS+=("--custom-css" "$INPUT_CUSTOM_CSS")
fi

if [ "$VERBOSE" = "true" ]; then
    ARGS+=("--verbose")
fi

# Run publisher
echo "🚀 Running publisher..."
echo "   Command: $PUBLISHER_BIN ${ARGS[*]}"
echo ""

START_TIME=$(date +%s)

"$PUBLISHER_BIN" "${ARGS[@]}"

END_TIME=$(date +%s)
BUILD_TIME=$((END_TIME - START_TIME))

# Calculate statistics
OUTPUT_SIZE=$(du -sm "$INPUT_OUTPUT_DIRECTORY" 2>/dev/null | cut -f1 || echo "0")
PAGES_COUNT=$(find "$INPUT_OUTPUT_DIRECTORY/pages" -name "*.json" 2>/dev/null | wc -l || echo "0")

echo ""
echo "✅ Publishing Complete!"
echo "=============================================="
echo ""
echo "📊 Statistics:"
echo "   Pages published: $PAGES_COUNT"
echo "   Output size:     ${OUTPUT_SIZE}MB"
echo "   Build time:      ${BUILD_TIME}s"
echo ""

# Set GitHub Actions outputs
if [ -n "$GITHUB_OUTPUT" ]; then
    echo "pages_count=$PAGES_COUNT" >> "$GITHUB_OUTPUT"
    echo "output_size=$OUTPUT_SIZE" >> "$GITHUB_OUTPUT"
    echo "build_time=$BUILD_TIME" >> "$GITHUB_OUTPUT"
fi

# Verify size limit
if [ "$OUTPUT_SIZE" -gt "$MAX_SIZE" ]; then
    echo "❌ ERROR: Output size (${OUTPUT_SIZE}MB) exceeds maximum (${MAX_SIZE}MB)"
    echo "   Consider filtering more content or optimizing assets"
    exit 1
fi

echo "🎉 All checks passed!"
echo ""
