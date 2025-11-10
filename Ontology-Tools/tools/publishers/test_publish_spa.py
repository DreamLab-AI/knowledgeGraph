#!/usr/bin/env python3
"""
Isolated test tool for Logseq publish-spa to identify escape character issues.

This tool allows progressive testing by publishing subsets of pages to isolate
problematic files causing the "narrativegoldmine" escape character error.

Usage:
    # Test with minimal pages (introduction only)
    python3 test_publish_spa.py --mode minimal

    # Test with ontology pages only
    python3 test_publish_spa.py --mode ontology

    # Test with specific files
    python3 test_publish_spa.py --mode custom --files "AI-0001.md,BC-0001.md"

    # Test full graph
    python3 test_publish_spa.py --mode full
"""

import argparse
import os
import shutil
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent.parent.parent
MAIN_GRAPH = REPO_ROOT / "mainKnowledgeGraph"
TEST_GRAPH = REPO_ROOT / "test-graph-spa"
OUTPUT_DIR = REPO_ROOT / "test-www"


def clean_test_dirs():
    """Remove previous test directories."""
    if TEST_GRAPH.exists():
        shutil.rmtree(TEST_GRAPH)
    if OUTPUT_DIR.exists():
        shutil.rmtree(OUTPUT_DIR)
    print(f"✅ Cleaned test directories")


def setup_minimal_graph():
    """Create minimal test graph with just introduction page."""
    TEST_GRAPH.mkdir(parents=True, exist_ok=True)
    (TEST_GRAPH / "pages").mkdir(exist_ok=True)
    (TEST_GRAPH / "journals").mkdir(exist_ok=True)
    (TEST_GRAPH / "logseq").mkdir(exist_ok=True)

    # Copy config
    shutil.copytree(MAIN_GRAPH / "logseq", TEST_GRAPH / "logseq", dirs_exist_ok=True)

    # Copy introduction page
    intro_src = MAIN_GRAPH / "pages" / "introduction.md"
    if intro_src.exists():
        shutil.copy(intro_src, TEST_GRAPH / "pages" / "introduction.md")
        print(f"✅ Copied introduction.md")
    else:
        # Create minimal introduction if it doesn't exist
        intro_path = TEST_GRAPH / "pages" / "introduction.md"
        intro_path.write_text("# Introduction\n\nMinimal test page.\n")
        print(f"✅ Created minimal introduction.md")

    return TEST_GRAPH


def setup_ontology_graph():
    """Create test graph with ontology pages only (AI-*, BC-*)."""
    TEST_GRAPH.mkdir(parents=True, exist_ok=True)
    (TEST_GRAPH / "pages").mkdir(exist_ok=True)
    (TEST_GRAPH / "journals").mkdir(exist_ok=True)
    (TEST_GRAPH / "logseq").mkdir(exist_ok=True)

    # Copy config
    shutil.copytree(MAIN_GRAPH / "logseq", TEST_GRAPH / "logseq", dirs_exist_ok=True)

    # Copy ontology pages
    pages_dir = MAIN_GRAPH / "pages"
    ontology_files = []

    for pattern in ["AI-*.md", "BC-*.md"]:
        ontology_files.extend(pages_dir.glob(pattern))

    for src_file in ontology_files:
        shutil.copy(src_file, TEST_GRAPH / "pages" / src_file.name)

    print(f"✅ Copied {len(ontology_files)} ontology pages")
    return TEST_GRAPH


def setup_custom_graph(file_list):
    """Create test graph with custom list of files."""
    TEST_GRAPH.mkdir(parents=True, exist_ok=True)
    (TEST_GRAPH / "pages").mkdir(exist_ok=True)
    (TEST_GRAPH / "journals").mkdir(exist_ok=True)
    (TEST_GRAPH / "logseq").mkdir(exist_ok=True)

    # Copy config
    shutil.copytree(MAIN_GRAPH / "logseq", TEST_GRAPH / "logseq", dirs_exist_ok=True)

    # Copy specified files
    pages_dir = MAIN_GRAPH / "pages"
    copied = 0

    for filename in file_list:
        src_file = pages_dir / filename
        if src_file.exists():
            shutil.copy(src_file, TEST_GRAPH / "pages" / filename)
            copied += 1
        else:
            print(f"⚠️  File not found: {filename}")

    print(f"✅ Copied {copied}/{len(file_list)} specified files")
    return TEST_GRAPH


def setup_full_graph():
    """Copy full graph for testing."""
    shutil.copytree(MAIN_GRAPH, TEST_GRAPH)
    print(f"✅ Copied full graph")
    return TEST_GRAPH


def run_publish_spa(graph_dir):
    """Run Logseq publish-spa using local clone."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Use the cloned publish-spa in /tmp
    publish_spa_bin = Path("/tmp/publish-spa/publish_spa.mjs")

    if not publish_spa_bin.exists():
        print(f"❌ publish-spa not found at {publish_spa_bin}")
        print("Run: cd /tmp && git clone https://github.com/logseq/publish-spa.git && cd publish-spa && npm install")
        return False

    print(f"\n🚀 Running publish-spa...")
    print(f"   Graph: {graph_dir}")
    print(f"   Output: {OUTPUT_DIR}\n")

    # Run publish_spa.mjs directly with node
    cmd = [
        "node",
        str(publish_spa_bin),
        str(graph_dir.absolute()),
        str(OUTPUT_DIR.absolute())
    ]

    print(f"Command: {' '.join(cmd)}\n")

    try:
        # Add ~/.local/bin to PATH for babashka
        env = os.environ.copy()
        env['PATH'] = f"{Path.home()}/.local/bin:{env.get('PATH', '')}"

        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=300,
            cwd=publish_spa_bin.parent,
            env=env
        )

        print("STDOUT:")
        print(result.stdout)

        if result.stderr:
            print("\nSTDERR:")
            print(result.stderr)

        if result.returncode != 0:
            print(f"\n❌ publish-spa failed with exit code {result.returncode}")
            return False
        else:
            print(f"\n✅ publish-spa succeeded")
            return True

    except subprocess.TimeoutExpired:
        print(f"\n❌ publish-spa timed out after 5 minutes")
        return False
    except Exception as e:
        print(f"\n❌ Error running publish-spa: {e}")
        return False


def analyze_output():
    """Analyze the generated output."""
    if not OUTPUT_DIR.exists():
        print("❌ No output directory found")
        return

    index_html = OUTPUT_DIR / "index.html"
    if index_html.exists():
        print(f"\n✅ Generated index.html ({index_html.stat().st_size} bytes)")
    else:
        print(f"\n❌ No index.html generated")

    # List output contents
    print(f"\nOutput directory contents:")
    for item in OUTPUT_DIR.iterdir():
        if item.is_file():
            print(f"  {item.name} ({item.stat().st_size} bytes)")
        else:
            print(f"  {item.name}/ (directory)")


def main():
    parser = argparse.ArgumentParser(description="Test Logseq publish-spa in isolation")
    parser.add_argument(
        "--mode",
        choices=["minimal", "ontology", "custom", "full"],
        default="minimal",
        help="Test mode: minimal (intro only), ontology (AI-*/BC-*), custom (specify files), full (entire graph)"
    )
    parser.add_argument(
        "--files",
        help="Comma-separated list of filenames for custom mode (e.g., 'AI-0001.md,BC-0001.md')"
    )
    parser.add_argument(
        "--keep-dirs",
        action="store_true",
        help="Keep test directories after completion"
    )

    args = parser.parse_args()

    print(f"{'='*60}")
    print(f"Logseq publish-spa Isolation Test")
    print(f"Mode: {args.mode}")
    print(f"{'='*60}\n")

    # Clean previous test runs
    clean_test_dirs()

    # Setup test graph based on mode
    if args.mode == "minimal":
        graph_dir = setup_minimal_graph()
    elif args.mode == "ontology":
        graph_dir = setup_ontology_graph()
    elif args.mode == "custom":
        if not args.files:
            print("❌ --files required for custom mode")
            sys.exit(1)
        file_list = [f.strip() for f in args.files.split(",")]
        graph_dir = setup_custom_graph(file_list)
    elif args.mode == "full":
        graph_dir = setup_full_graph()

    # Run publish-spa
    success = run_publish_spa(graph_dir)

    # Analyze output
    analyze_output()

    # Cleanup unless --keep-dirs specified
    if not args.keep_dirs:
        print(f"\n🧹 Cleaning up test directories...")
        clean_test_dirs()
    else:
        print(f"\n📁 Test directories preserved:")
        print(f"   Graph: {TEST_GRAPH}")
        print(f"   Output: {OUTPUT_DIR}")

    print(f"\n{'='*60}")
    if success:
        print("✅ Test completed successfully")
    else:
        print("❌ Test failed - check output above for errors")
    print(f"{'='*60}\n")

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
