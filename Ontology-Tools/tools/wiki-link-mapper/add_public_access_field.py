#!/usr/bin/env python3
"""
Add public-access:: true field to OntologyBlock Identification section
for files that were marked as public.
"""

import os
import re
import json
from pathlib import Path

def has_public_access_field(content):
    """Check if public-access field already exists in OntologyBlock."""
    return bool(re.search(r'^\s*-\s+public-access::', content, re.MULTILINE))

def add_public_access_to_content(content, is_public=True):
    """
    Add public-access field to OntologyBlock Identification section.
    Adds it after the 'status::' line.
    """
    # Check if field already exists
    if has_public_access_field(content):
        print("    Public-access field already exists, skipping")
        return content, False

    # Find the status:: line in the Identification section
    # Pattern: find "- status:: [value]" and add public-access after it
    pattern = r'(^\s*-\s+status::\s+\w+)(\s*$)'

    def replacement(match):
        status_line = match.group(1)
        trailing = match.group(2)
        public_value = "true" if is_public else "false"
        return f"{status_line}{trailing}\n    - public-access:: {public_value}"

    new_content, count = re.subn(pattern, replacement, content, count=1, flags=re.MULTILINE)

    if count > 0:
        return new_content, True
    else:
        print("    Warning: Could not find status:: line to insert after")
        return content, False

def process_file(file_path, is_public=True, dry_run=False):
    """Process a single markdown file to add public-access field."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has OntologyBlock
        if 'ontology:: true' not in content:
            print(f"  ⚠ Skipping {file_path.name}: No OntologyBlock found")
            return False

        new_content, modified = add_public_access_to_content(content, is_public)

        if modified:
            if not dry_run:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"  ✓ Modified {file_path.name}: Added public-access:: {is_public}")
            else:
                print(f"  [DRY RUN] Would modify {file_path.name}: Add public-access:: {is_public}")
            return True
        else:
            print(f"  - No changes needed for {file_path.name}")
            return False

    except Exception as e:
        print(f"  ✗ Error processing {file_path}: {e}")
        return False

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Add public-access field to ontology files')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be done without making changes')
    parser.add_argument('--mapping-file', default='tools/wiki-link-mapper/public-files-mapping.json',
                        help='Path to public files mapping JSON')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')

    args = parser.parse_args()

    # Load mapping file
    mapping_file = Path(args.mapping_file)
    if not mapping_file.exists():
        print(f"Error: Mapping file not found: {mapping_file}")
        return 1

    print(f"Loading public files mapping from {mapping_file}...")
    with open(mapping_file, 'r', encoding='utf-8') as f:
        mapping_data = json.load(f)

    mapped_files = mapping_data['mapped']
    pages_dir = Path(args.pages_dir)

    print(f"\nFound {len(mapped_files)} files to mark as public")

    if args.dry_run:
        print("\n" + "="*60)
        print("DRY RUN MODE - No files will be modified")
        print("="*60 + "\n")

    modified_count = 0
    skipped_count = 0

    for item in mapped_files:
        ontology_filename = item['ontology_filename']
        file_path = pages_dir / f"{ontology_filename}.md"

        print(f"\nProcessing: {ontology_filename}.md")
        print(f"  Canonical term: {item['canonical_term']}")
        print(f"  Term ID: {item['term_id']}")

        if not file_path.exists():
            print(f"  ✗ File not found: {file_path}")
            skipped_count += 1
            continue

        if process_file(file_path, is_public=True, dry_run=args.dry_run):
            modified_count += 1
        else:
            skipped_count += 1

    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Files processed:  {len(mapped_files)}")
    print(f"Files modified:   {modified_count}")
    print(f"Files skipped:    {skipped_count}")

    if args.dry_run:
        print("\nThis was a DRY RUN. Run without --dry-run to apply changes.")
    elif modified_count > 0:
        print("\n✓ Public-access field successfully added to files")

    return 0

if __name__ == '__main__':
    exit(main())
