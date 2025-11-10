#!/usr/bin/env python3
"""
Consolidated Logseq Publishing Script

This script handles the complete publishing pipeline:
1. Ontology generation (TTL and WebVOWL JSON)
2. WebVOWL setup
3. Logseq graph publishing
4. Deployment preparation

Can be used locally or in CI/CD pipelines.
"""

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

# Repository paths
REPO_ROOT = Path(__file__).parent.parent.parent.parent
MAIN_GRAPH = REPO_ROOT / "mainKnowledgeGraph"
OUTPUT_DIR = REPO_ROOT / "www"


class PublishingPipeline:
    def __init__(self, graph_dir, output_dir, skip_ontology=False, skip_webvowl=False):
        self.graph_dir = Path(graph_dir)
        self.output_dir = Path(output_dir)
        self.skip_ontology = skip_ontology
        self.skip_webvowl = skip_webvowl
        self.temp_graph = REPO_ROOT / "mainKnowledgeGraph-publish"

    def prepare_graph_copy(self):
        """Create temporary copy of graph with public tags added."""
        print("📋 Preparing graph for publishing...")

        if self.temp_graph.exists():
            shutil.rmtree(self.temp_graph)

        shutil.copytree(self.graph_dir, self.temp_graph)

        # Add public:: true to ontology pages
        pages_dir = self.temp_graph / "pages"
        count = 0

        for md_file in pages_dir.glob("*.md"):
            content = md_file.read_text()

            if "### OntologyBlock" in content and "public-access:: true" in content:
                if not content.startswith("public:: true"):
                    content = "public:: true\n\n" + content
                    md_file.write_text(content)
                    count += 1

        print(f"✅ Prepared graph copy with {count} public ontology pages")
        return self.temp_graph

    def generate_ontology(self):
        """Generate TTL and WebVOWL JSON from markdown."""
        if self.skip_ontology:
            print("⏭️  Skipping ontology generation")
            return None, None

        print("🔧 Generating ontology files...")

        ttl_output = Path("/tmp/narrativegoldmine-ontology.ttl")
        json_output = Path("/tmp/narrativegoldmine-ontology.json")

        # Generate TTL
        cmd_ttl = [
            "python3",
            str(REPO_ROOT / "Ontology-Tools/tools/converters/webvowl_header_only_converter.py"),
            "--pages-dir", str(MAIN_GRAPH / "pages"),
            "--output", str(ttl_output)
        ]

        result = subprocess.run(cmd_ttl, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"❌ TTL generation failed: {result.stderr}")
            sys.exit(1)

        print(f"✅ Generated TTL: {ttl_output.stat().st_size} bytes")

        # Convert TTL to WebVOWL JSON
        cmd_json = [
            "python3",
            str(REPO_ROOT / "Ontology-Tools/tools/converters/ttl_to_webvowl_json.py"),
            "--input", str(ttl_output),
            "--output", str(json_output)
        ]

        result = subprocess.run(cmd_json, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"❌ JSON conversion failed: {result.stderr}")
            sys.exit(1)

        print(f"✅ Generated JSON: {json_output.stat().st_size} bytes")

        return ttl_output, json_output

    def setup_webvowl(self, ttl_file, json_file):
        """Clone and configure WebVOWL."""
        if self.skip_webvowl:
            print("⏭️  Skipping WebVOWL setup")
            return None

        print("🌐 Setting up WebVOWL...")

        webvowl_dir = REPO_ROOT / "webvowl-deploy"

        if webvowl_dir.exists():
            shutil.rmtree(webvowl_dir)

        # Clone WebVOWL v1.1.6
        cmd = [
            "git", "clone",
            "--depth", "1",
            "--branch", "1.1.6",
            "https://github.com/VisualDataWeb/WebVOWL.git",
            "webvowl-src"
        ]

        subprocess.run(cmd, cwd=REPO_ROOT, check=True, capture_output=True)

        # Copy deploy folder
        src_deploy = REPO_ROOT / "webvowl-src/deploy"
        if src_deploy.exists():
            shutil.copytree(src_deploy, webvowl_dir)
        else:
            print("❌ WebVOWL deploy folder not found")
            sys.exit(1)

        # Fix mixed content security issue
        css_file = webvowl_dir / "css/webvowl.app.css"
        if css_file.exists():
            css_content = css_file.read_text()
            css_content = css_content.replace(
                "http://fonts.googleapis.com",
                "https://fonts.googleapis.com"
            )
            css_file.write_text(css_content)
            print("✅ Fixed CSS mixed content issue")

        # Copy ontology files
        data_dir = webvowl_dir / "data"
        data_dir.mkdir(exist_ok=True)

        # Replace FOAF with our ontology
        shutil.copy(json_file, data_dir / "foaf.json")
        shutil.copy(ttl_file, data_dir / "foaf.ttl")

        # Also keep under original name
        shutil.copy(json_file, data_dir / "narrativegoldmine-ontology.json")
        shutil.copy(ttl_file, data_dir / "narrativegoldmine-ontology.ttl")

        print("✅ WebVOWL configured with custom ontology")

        # Cleanup
        shutil.rmtree(REPO_ROOT / "webvowl-src", ignore_errors=True)

        return webvowl_dir

    def publish_with_docker(self, graph_dir):
        """Publish using official Logseq docker image."""
        print("📦 Publishing Logseq graph with Docker...")

        self.output_dir.mkdir(parents=True, exist_ok=True)

        cmd = [
            "docker", "run", "--rm",
            "-v", f"{graph_dir.absolute()}:/graph:ro",
            "-v", f"{self.output_dir.absolute()}:/output",
            "ghcr.io/logseq/publish-spa:latest",
            "/graph",
            "/output"
        ]

        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode != 0:
            print(f"❌ Publishing failed: {result.stderr}")
            return False

        print("✅ Logseq graph published")
        return True

    def publish_with_npx(self, graph_dir):
        """Publish using npx (fallback if docker unavailable)."""
        print("📦 Publishing Logseq graph with npx...")

        # Note: This won't work as @logseq/publish-spa is not on npm
        # This is a placeholder for when/if we publish our own package
        print("❌ npx method not yet available")
        return False

    def integrate_webvowl(self, webvowl_dir):
        """Copy WebVOWL into output directory."""
        if not webvowl_dir or not webvowl_dir.exists():
            print("⏭️  Skipping WebVOWL integration")
            return

        print("🔗 Integrating WebVOWL into deployment...")

        ontology_dir = self.output_dir / "ontology"
        if ontology_dir.exists():
            shutil.rmtree(ontology_dir)

        shutil.copytree(webvowl_dir, ontology_dir)
        print("✅ WebVOWL integrated")

    def finalize_deployment(self):
        """Add final touches to deployment."""
        print("🎨 Finalizing deployment...")

        # Add .nojekyll
        (self.output_dir / ".nojekyll").touch()

        # Modify index.html to default to introduction
        index_html = self.output_dir / "index.html"
        if index_html.exists():
            content = index_html.read_text()
            content = content.replace("#/all-pages", "#/page/introduction")
            index_html.write_text(content)
            print("✅ Modified index.html default page")

        # Add CNAME
        (self.output_dir / "CNAME").write_text("narrativegoldmine.com\n")

        # Copy documentation
        (self.output_dir / "README.md").write_text(
            (REPO_ROOT / "README.md").read_text()
        )
        (self.output_dir / "CLAUDE.md").write_text(
            (REPO_ROOT / "CLAUDE.md").read_text()
        )

        # Copy Ontology-Tools
        tools_dest = self.output_dir / "Ontology-Tools"
        if tools_dest.exists():
            shutil.rmtree(tools_dest)
        shutil.copytree(REPO_ROOT / "Ontology-Tools", tools_dest)

        print("✅ Deployment finalized")

    def run(self):
        """Execute the full publishing pipeline."""
        print("=" * 60)
        print("Logseq Publishing Pipeline")
        print("=" * 60)

        try:
            # Step 1: Prepare graph
            temp_graph = self.prepare_graph_copy()

            # Step 2: Generate ontology
            ttl_file, json_file = self.generate_ontology()

            # Step 3: Setup WebVOWL
            webvowl_dir = self.setup_webvowl(ttl_file, json_file)

            # Step 4: Publish graph (try docker first, then npx)
            success = self.publish_with_docker(temp_graph)
            if not success:
                success = self.publish_with_npx(temp_graph)

            if not success:
                print("❌ All publishing methods failed")
                sys.exit(1)

            # Step 5: Integrate WebVOWL
            self.integrate_webvowl(webvowl_dir)

            # Step 6: Finalize
            self.finalize_deployment()

            print("\n" + "=" * 60)
            print(f"✅ Publishing complete! Output: {self.output_dir}")
            print("=" * 60)

            # Cleanup
            if self.temp_graph.exists():
                shutil.rmtree(self.temp_graph)

        except Exception as e:
            print(f"\n❌ Pipeline failed: {e}")
            import traceback
            traceback.print_exc()
            sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Consolidated Logseq publishing pipeline"
    )
    parser.add_argument(
        "--graph-dir",
        default=str(MAIN_GRAPH),
        help="Logseq graph directory"
    )
    parser.add_argument(
        "--output-dir",
        default=str(OUTPUT_DIR),
        help="Output directory for published site"
    )
    parser.add_argument(
        "--skip-ontology",
        action="store_true",
        help="Skip ontology generation"
    )
    parser.add_argument(
        "--skip-webvowl",
        action="store_true",
        help="Skip WebVOWL setup"
    )

    args = parser.parse_args()

    pipeline = PublishingPipeline(
        args.graph_dir,
        args.output_dir,
        args.skip_ontology,
        args.skip_webvowl
    )

    pipeline.run()


if __name__ == "__main__":
    main()
