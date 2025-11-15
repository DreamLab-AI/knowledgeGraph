#!/bin/bash
set -e

# Build script for logseq-publisher Rust binary
# Optimizes for size and creates distribution package

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🔧 Building Logseq Publisher (Rust)"
echo "=================================="
echo ""

# Detect target platform
TARGET=""
case "$(uname -s)" in
    Linux*)     TARGET="x86_64-unknown-linux-gnu";;
    Darwin*)    TARGET="x86_64-apple-darwin";;
    MINGW*|MSYS*|CYGWIN*)  TARGET="x86_64-pc-windows-gnu";;
    *)          echo "❌ Unsupported platform: $(uname -s)"; exit 1;;
esac

echo "📦 Target: $TARGET"
echo ""

# Check Rust installation
if ! command -v cargo &> /dev/null; then
    echo "❌ Error: Cargo not found. Please install Rust:"
    echo "   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    exit 1
fi

# Show Rust version
echo "🦀 Rust version:"
rustc --version
cargo --version
echo ""

# Clean previous builds
echo "🧹 Cleaning previous builds..."
cargo clean --release
echo ""

# Build binary with optimizations
echo "🔨 Building release binary..."
cargo build --release --bin logseq-publisher

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""

# Show binary info
BINARY_PATH="target/release/logseq-publisher"
if [ -f "$BINARY_PATH" ]; then
    BINARY_SIZE=$(du -h "$BINARY_PATH" | cut -f1)
    echo "📊 Binary information:"
    echo "   Path: $BINARY_PATH"
    echo "   Size: $BINARY_SIZE"

    # Check if binary is executable
    if [ -x "$BINARY_PATH" ]; then
        echo "   Executable: Yes"

        # Show version
        echo ""
        echo "🔍 Testing binary..."
        "$BINARY_PATH" --version || echo "   (version not available)"
    else
        echo "   Executable: No (fixing permissions...)"
        chmod +x "$BINARY_PATH"
    fi
else
    echo "❌ Error: Binary not found at $BINARY_PATH"
    exit 1
fi

echo ""
echo "=================================="
echo "✨ Build complete!"
echo ""
echo "📝 Usage:"
echo "   $BINARY_PATH export --input ./mainKnowledgeGraph --output ./www --with-api"
echo "   $BINARY_PATH ontology extract --input ontology.json --output output.json"
echo ""
echo "🔗 Or run via cargo:"
echo "   cargo run --release -- export --input ./mainKnowledgeGraph --output ./www --with-api"
echo ""
