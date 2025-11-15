#!/usr/bin/env python3
"""
Ontology Enricher - Enrich ontology blocks with domain metadata

This script:
1. Reads migration_map.json
2. For each file, extracts domain-prefix and sequence-number
3. Enriches ontology block with new fields:
   - domain-prefix:: AI
   - sequence-number:: 0377
   - filename-history:: ["AI-0377-fairness-metrics.md"]
4. Preserves all existing data
5. Writes enriched files back
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime
from tqdm import tqdm

# Configuration
PAGES_DIR = Path("/home/user/logseq/mainKnowledgeGraph/pages")
MAPPING_FILE = Path("/home/user/logseq/scripts/ontology-migration/migration_map.json")
LOGS_DIR = Path("/home/user/logseq/scripts/ontology-migration/logs")

# Regex patterns
ONTOLOGY_BLOCK_START = re.compile(r'^-\s*###\s*OntologyBlock\s*$', re.MULTILINE)
IDENTIFICATION_SECTION = re.compile(r'^(\s*)-\s*\*\*Identification\*\*\s*$', re.MULTILINE)


def load_mapping() -> Dict:
    """Load migration mapping from JSON file."""
    if not MAPPING_FILE.exists():
        print(f"❌ Error: Mapping file not found: {MAPPING_FILE}", file=sys.stderr)
        print("   Run filename_mapper.py first!", file=sys.stderr)
        sys.exit(1)

    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def enrich_ontology_block(content: str, mapping: Dict) -> str:
    """
    Enrich ontology block with domain metadata.

    Adds after the **Identification** section:
        - domain-prefix:: AI
        - sequence-number:: 0377
        - filename-history:: ["AI-0377-fairness-metrics.md"]
    """
    # Find Identification section
    match = IDENTIFICATION_SECTION.search(content)
    if not match:
        return content  # No Identification section found

    indent = match.group(1)
    insert_pos = match.end()

    # Prepare enrichment fields
    domain_prefix = mapping["domain_prefix"]
    sequence_number = mapping["sequence_number"]
    old_filename = mapping["old_filename"]

    # Check if fields already exist
    if f"domain-prefix:: {domain_prefix}" in content:
        # Already enriched
        return content

    # Build enrichment text
    enrichment = (
        f"\n{indent}  - domain-prefix:: {domain_prefix}"
        f"\n{indent}  - sequence-number:: {sequence_number}"
        f"\n{indent}  - filename-history:: [\"{old_filename}\"]"
    )

    # Insert after Identification header
    enriched_content = content[:insert_pos] + enrichment + content[insert_pos:]

    return enriched_content


def update_metadata_section(content: str) -> str:
    """
    Update the Metadata section at the bottom with current date.
    """
    today = datetime.now().strftime("%Y-%m-%d")

    # Update Last Updated
    content = re.sub(
        r'(\*\*Last Updated\*\*:)\s*\d{4}-\d{2}-\d{2}',
        rf'\1 {today}',
        content
    )

    # Add migration note if not present
    if "**Migration Status**" not in content:
        metadata_match = re.search(r'(## Metadata\s*\n)', content)
        if metadata_match:
            insert_pos = metadata_match.end()
            migration_note = f"\n- **Migration Status**: Ontology block enriched on {today}\n"
            content = content[:insert_pos] + migration_note + content[insert_pos:]

    return content


def enrich_file(file_path: Path, mapping: Dict) -> bool:
    """
    Enrich a single file with ontology metadata.

    Returns:
        True if successful, False otherwise
    """
    try:
        # Read file
        content = file_path.read_text(encoding='utf-8')

        # Enrich ontology block
        enriched_content = enrich_ontology_block(content, mapping)

        # Update metadata section
        enriched_content = update_metadata_section(enriched_content)

        # Write back
        file_path.write_text(enriched_content, encoding='utf-8')

        return True

    except Exception as e:
        print(f"❌ Error enriching {file_path.name}: {e}", file=sys.stderr)
        return False


def enrich_all_files(mapping_data: Dict) -> Dict:
    """
    Enrich all files in the mapping.

    Returns:
        Statistics about the enrichment process
    """
    mappings = mapping_data["mappings"]

    success_count = 0
    error_count = 0
    errors = []

    print(f"Enriching {len(mappings)} files...")

    for mapping in tqdm(mappings, desc="Enriching files"):
        # Use NEW filename since files have been renamed
        new_filename = mapping["new_filename"]
        file_path = PAGES_DIR / new_filename

        if not file_path.exists():
            errors.append({
                "filename": new_filename,
                "error": "File not found"
            })
            error_count += 1
            continue

        if enrich_file(file_path, mapping):
            success_count += 1
        else:
            errors.append({
                "filename": new_filename,
                "error": "Enrichment failed"
            })
            error_count += 1

    return {
        "total": len(mappings),
        "success": success_count,
        "errors": error_count,
        "error_details": errors
    }


def print_summary(stats: Dict) -> None:
    """Print summary of enrichment process."""
    print("\n" + "="*70)
    print("ONTOLOGY ENRICHMENT SUMMARY")
    print("="*70)

    print(f"\n📊 Statistics:")
    print(f"   Total files:      {stats['total']}")
    print(f"   Successfully enriched: {stats['success']}")
    print(f"   Errors:          {stats['errors']}")

    if stats['error_details']:
        print(f"\n❌ ERRORS ({len(stats['error_details'])}):")
        for error in stats['error_details'][:10]:
            print(f"   {error['filename']}: {error['error']}")
        if len(stats['error_details']) > 10:
            print(f"   ... and {len(stats['error_details']) - 10} more")

        # Save error log
        log_file = LOGS_DIR / "enrichment_errors.json"
        LOGS_DIR.mkdir(parents=True, exist_ok=True)
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(stats['error_details'], f, indent=2, ensure_ascii=False)
        print(f"\n📝 Error log: {log_file}")


def main():
    """Main execution."""
    print("🚀 Ontology Enricher - Enriching ontology blocks...")

    # Load mapping
    mapping_data = load_mapping()
    print(f"✅ Loaded mapping with {len(mapping_data['mappings'])} entries")

    # Enrich files
    stats = enrich_all_files(mapping_data)

    # Print summary
    print_summary(stats)

    # Exit with appropriate code
    if stats['errors'] > 0:
        print("\n⚠️  Enrichment completed with errors")
        return 1
    else:
        print("\n✅ Enrichment completed successfully")
        return 0


if __name__ == "__main__":
    sys.exit(main())
