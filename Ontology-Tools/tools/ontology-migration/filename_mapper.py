#!/usr/bin/env python3
"""
Filename Mapper - Generate mapping of old→new filenames with validation

This script:
1. Reads all prefixed files (PREFIX-NNNN-name.md)
2. Extracts preferred-term from ontology block
3. Generates clean filename from preferred-term
4. Handles conflicts (same preferred-term, different files)
5. Outputs migration_map.json with validation
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from collections import defaultdict
import unicodedata
from tqdm import tqdm

# Configuration
PAGES_DIR = Path("/home/user/logseq/mainKnowledgeGraph/pages")
OUTPUT_FILE = Path("/home/user/logseq/scripts/ontology-migration/migration_map.json")
LOGS_DIR = Path("/home/user/logseq/scripts/ontology-migration/logs")

# Regex patterns
PREFIXED_FILENAME_PATTERN = re.compile(r'^([A-Z]{2,4})-(\d{4})-(.+)\.md$')
TERM_ID_PATTERN = re.compile(r'^\s*-?\s*term-id::\s*(.+)$', re.MULTILINE)
PREFERRED_TERM_PATTERN = re.compile(r'^\s*-?\s*preferred-term::\s*(.+)$', re.MULTILINE)


def sanitize_filename(text: str) -> str:
    """
    Convert text to safe filename.

    Examples:
        "Fairness Metrics" -> "Fairness Metrics"
        "k-Anonymity Datasets" -> "k-Anonymity Datasets"
        "AI/ML System" -> "AI-ML System"
    """
    # Normalize unicode
    text = unicodedata.normalize('NFKC', text)

    # Remove or replace invalid characters
    text = text.replace('/', '-')
    text = text.replace('\\', '-')
    text = text.replace(':', '-')
    text = text.replace('*', '')
    text = text.replace('?', '')
    text = text.replace('"', '')
    text = text.replace('<', '')
    text = text.replace('>', '')
    text = text.replace('|', '-')

    # Remove leading/trailing whitespace and dots
    text = text.strip('. ')

    # Collapse multiple spaces
    text = re.sub(r'\s+', ' ', text)

    return text


def extract_ontology_metadata(file_path: Path) -> Optional[Tuple[str, str]]:
    """
    Extract term-id and preferred-term from ontology block.

    Returns:
        (term_id, preferred_term) or None if not found
    """
    try:
        content = file_path.read_text(encoding='utf-8')

        # Extract term-id
        term_id_match = TERM_ID_PATTERN.search(content)
        if not term_id_match:
            return None
        term_id = term_id_match.group(1).strip()

        # Extract preferred-term
        preferred_term_match = PREFERRED_TERM_PATTERN.search(content)
        if not preferred_term_match:
            return None
        preferred_term = preferred_term_match.group(1).strip()

        return (term_id, preferred_term)

    except Exception as e:
        print(f"Error reading {file_path}: {e}", file=sys.stderr)
        return None


def parse_prefixed_filename(filename: str) -> Optional[Tuple[str, str, str]]:
    """
    Parse prefixed filename into components.

    Returns:
        (domain_prefix, sequence_number, old_name_part) or None
    """
    match = PREFIXED_FILENAME_PATTERN.match(filename)
    if match:
        return match.groups()
    return None


def generate_mapping() -> Dict:
    """
    Generate complete filename mapping with conflict detection.

    Returns:
        {
            "mappings": [
                {
                    "old_filename": "AI-0377-fairness-metrics.md",
                    "new_filename": "Fairness Metrics.md",
                    "term_id": "AI-0377",
                    "domain_prefix": "AI",
                    "sequence_number": "0377",
                    "preferred_term": "Fairness Metrics"
                },
                ...
            ],
            "conflicts": {...},
            "errors": {...},
            "stats": {...}
        }
    """
    mappings = []
    conflicts = defaultdict(list)
    errors = []

    # Find all prefixed files
    all_files = sorted(PAGES_DIR.glob("*-*-*.md"))
    prefixed_files = [f for f in all_files if PREFIXED_FILENAME_PATTERN.match(f.name)]

    print(f"Found {len(prefixed_files)} prefixed files to process")

    # Process each file
    for file_path in tqdm(prefixed_files, desc="Processing files"):
        filename = file_path.name

        # Parse old filename
        parsed = parse_prefixed_filename(filename)
        if not parsed:
            errors.append({
                "filename": filename,
                "error": "Failed to parse prefixed filename"
            })
            continue

        domain_prefix, sequence_number, old_name_part = parsed

        # Extract ontology metadata
        metadata = extract_ontology_metadata(file_path)
        if not metadata:
            errors.append({
                "filename": filename,
                "error": "Missing term-id or preferred-term in ontology block"
            })
            continue

        term_id, preferred_term = metadata

        # Validate term-id matches filename
        expected_term_id = f"{domain_prefix}-{sequence_number}"
        if term_id != expected_term_id:
            errors.append({
                "filename": filename,
                "error": f"term-id mismatch: found '{term_id}', expected '{expected_term_id}'"
            })
            continue

        # Generate new filename
        new_name = sanitize_filename(preferred_term)
        new_filename = f"{new_name}.md"

        # Check for conflicts
        conflicts[new_filename].append(filename)

        # Store mapping
        mappings.append({
            "old_filename": filename,
            "new_filename": new_filename,
            "term_id": term_id,
            "domain_prefix": domain_prefix,
            "sequence_number": sequence_number,
            "preferred_term": preferred_term
        })

    # Filter actual conflicts (multiple files → same new name)
    actual_conflicts = {
        new_name: old_names
        for new_name, old_names in conflicts.items()
        if len(old_names) > 1
    }

    # Generate statistics
    stats = {
        "total_prefixed_files": len(prefixed_files),
        "successful_mappings": len(mappings),
        "conflicts_detected": len(actual_conflicts),
        "errors": len(errors),
        "unique_domain_prefixes": len(set(m["domain_prefix"] for m in mappings))
    }

    # Count by domain
    domain_counts = defaultdict(int)
    for mapping in mappings:
        domain_counts[mapping["domain_prefix"]] += 1
    stats["by_domain"] = dict(domain_counts)

    return {
        "mappings": mappings,
        "conflicts": actual_conflicts,
        "errors": errors,
        "stats": stats
    }


def save_mapping(data: Dict) -> None:
    """Save mapping to JSON file with pretty printing."""
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Mapping saved to: {OUTPUT_FILE}")


def print_summary(data: Dict) -> None:
    """Print summary of mapping generation."""
    stats = data["stats"]
    conflicts = data["conflicts"]
    errors = data["errors"]

    print("\n" + "="*70)
    print("FILENAME MAPPING SUMMARY")
    print("="*70)

    print(f"\n📊 Statistics:")
    print(f"   Total prefixed files: {stats['total_prefixed_files']}")
    print(f"   Successful mappings:  {stats['successful_mappings']}")
    print(f"   Conflicts detected:   {stats['conflicts_detected']}")
    print(f"   Errors:               {stats['errors']}")
    print(f"   Domain prefixes:      {stats['unique_domain_prefixes']}")

    if stats.get('by_domain'):
        print(f"\n📁 Files by domain:")
        for domain, count in sorted(stats['by_domain'].items()):
            print(f"   {domain}: {count}")

    if conflicts:
        print(f"\n⚠️  CONFLICTS DETECTED ({len(conflicts)}):")
        for new_name, old_names in sorted(conflicts.items()):
            print(f"   {new_name}")
            for old_name in old_names:
                print(f"      ← {old_name}")

    if errors:
        print(f"\n❌ ERRORS ({len(errors)}):")
        for error in errors[:10]:  # Show first 10
            print(f"   {error['filename']}: {error['error']}")
        if len(errors) > 10:
            print(f"   ... and {len(errors) - 10} more")

    # Save detailed logs
    if conflicts or errors:
        log_file = LOGS_DIR / "mapping_issues.json"
        LOGS_DIR.mkdir(parents=True, exist_ok=True)
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump({
                "conflicts": conflicts,
                "errors": errors
            }, f, indent=2, ensure_ascii=False)
        print(f"\n📝 Detailed issues log: {log_file}")


def main():
    """Main execution."""
    print("🚀 Filename Mapper - Generating migration mapping...")
    print(f"📁 Pages directory: {PAGES_DIR}")

    # Generate mapping
    data = generate_mapping()

    # Save results
    save_mapping(data)

    # Print summary
    print_summary(data)

    # Exit with appropriate code
    if data["conflicts"] or data["errors"]:
        print("\n⚠️  Migration mapping completed with issues")
        print("   Review conflicts and errors before proceeding")
        return 1
    else:
        print("\n✅ Migration mapping completed successfully")
        return 0


if __name__ == "__main__":
    sys.exit(main())
