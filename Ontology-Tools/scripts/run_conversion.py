#!/usr/bin/env python3
"""
Runs the full conversion and enrichment pipeline for the Metaverse Ontology.

1. Converts Logseq markdown files to a comprehensive Turtle RDF file with full OWL semantics.
2. Applies the 200+ cross-domain semantic bridges to the generated TTL file.
"""

import subprocess
import sys
from pathlib import Path

def run_command(command: list, cwd: Path):
    """Runs a command and streams its output."""
    print(f"\n{'='*80}")
    print(f"🚀 Running command: {' '.join(str(c) for c in command)}")
    print(f"   In directory: {cwd}")
    print(f"{'='*80}\n")
    
    process = subprocess.Popen(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        cwd=cwd
    )

    for line in process.stdout:
        print(line, end='')

    process.wait()
    
    if process.returncode != 0:
        print(f"\n❌ Command failed with exit code {process.returncode}")
        return False
    
    print(f"\n✅ Command completed successfully.")
    return True

def main():
    """Main pipeline execution function."""
    project_root = Path(__file__).parent.parent.resolve()
    
    # Define paths
    markdown_converter_script = project_root / "tools" / "converters" / "comprehensive_markdown_to_ttl.py"
    bridge_applicator_script = project_root / "scripts" / "apply_bridges_to_ttl.py"
    
    pages_dir = project_root / "logseq" / "pages"
    output_dir = project_root / "outputs"
    
    enriched_ttl_output = output_dir / "metaverse-ontology-enriched.ttl"
    final_ttl_output = output_dir / "metaverse-ontology-final.ttl"
    
    # --- Step 1: Comprehensive Markdown to TTL Conversion ---
    command1 = [
        sys.executable,
        str(markdown_converter_script),
        '--pages-dir', str(pages_dir),
        '--output', str(enriched_ttl_output),
    ]
    
    if not run_command(command1, cwd=project_root):
        sys.exit(1)
        
    # --- Step 2: Apply Cross-Domain Bridges ---
    command2 = [
        sys.executable,
        str(bridge_applicator_script),
        str(enriched_ttl_output),
        str(final_ttl_output)
    ]
    
    if not run_command(command2, cwd=project_root):
        sys.exit(1)

    print(f"\n{'='*80}")
    print("🎉 Full conversion and enrichment pipeline completed successfully!")
    print(f"   Final output file: {final_ttl_output}")
    print(f"{'='*80}\n")

if __name__ == "__main__":
    main()