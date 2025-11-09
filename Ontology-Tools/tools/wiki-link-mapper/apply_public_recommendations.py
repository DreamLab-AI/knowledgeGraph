#!/usr/bin/env python3
"""
Apply public-access:: true to recommended ontology concepts based on analysis.
"""

import os
import re
import json
from pathlib import Path

def has_public_access_field(content):
    """Check if public-access field already exists in OntologyBlock."""
    return bool(re.search(r'^\s*-\s+public-access::', content, re.MULTILINE))

def add_public_access_to_content(content, is_public=True):
    """Add public-access field to OntologyBlock Identification section."""
    # Check if field already exists
    if has_public_access_field(content):
        return content, False, "already exists"

    # Find the status:: line in the Identification section
    pattern = r'(^\s*-\s+status::\s+\w+)(\s*$)'

    def replacement(match):
        status_line = match.group(1)
        trailing = match.group(2)
        public_value = "true" if is_public else "false"
        return f"{status_line}{trailing}\n    - public-access:: {public_value}"

    new_content, count = re.subn(pattern, replacement, content, count=1, flags=re.MULTILINE)

    if count > 0:
        return new_content, True, "added"
    else:
        return content, False, "status line not found"

def process_file(file_path, is_public=True, dry_run=False):
    """Process a single markdown file to add public-access field."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has OntologyBlock
        if 'ontology:: true' not in content:
            return False, "no OntologyBlock"

        new_content, modified, status = add_public_access_to_content(content, is_public)

        if modified:
            if not dry_run:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
            return True, status
        else:
            return False, status

    except Exception as e:
        return False, f"error: {e}"

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Apply public-access recommendations to ontology files')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be done without making changes')
    parser.add_argument('--recommendations', default='tools/wiki-link-mapper/public-access-recommendations.json',
                        help='Path to recommendations JSON')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--priority', choices=['high', 'medium', 'all'], default='all',
                        help='Only apply to specific priority level')

    args = parser.parse_args()

    # Load recommendations
    recs_file = Path(args.recommendations)
    if not recs_file.exists():
        print(f"Error: Recommendations file not found: {recs_file}")
        return 1

    print(f"Loading recommendations from {recs_file}...")
    with open(recs_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    recommendations = data['recommendations']
    pages_dir = Path(args.pages_dir)

    # Filter by priority
    if args.priority != 'all':
        recommendations = [r for r in recommendations if r['priority'] == args.priority]

    print(f"\nProcessing {len(recommendations)} recommendations")
    if args.priority != 'all':
        print(f"(filtered to {args.priority} priority only)")

    if args.dry_run:
        print("\n" + "="*70)
        print("DRY RUN MODE - No files will be modified")
        print("="*70 + "\n")

    modified_count = 0
    skipped_count = 0
    already_public_count = 0

    for i, rec in enumerate(recommendations, 1):
        filename = rec['filename']
        file_path = pages_dir / f"{filename}.md"

        print(f"\n{i}. {rec['canonical_term']} ({rec['term_id']})")
        print(f"   File: {filename}.md")
        print(f"   Reason: {rec['reason']}")
        print(f"   Quality: {rec['quality_score']}/100 | Words: {rec['word_count']:,} | Priority: {rec['priority']}")

        if not file_path.exists():
            print(f"   ✗ File not found: {file_path}")
            skipped_count += 1
            continue

        success, status = process_file(file_path, is_public=True, dry_run=args.dry_run)

        if success:
            if args.dry_run:
                print(f"   [DRY RUN] Would add public-access:: true")
            else:
                print(f"   ✓ Added public-access:: true")
            modified_count += 1
        elif status == "already exists":
            print(f"   - Already has public-access field")
            already_public_count += 1
        else:
            print(f"   ⚠ Skipped: {status}")
            skipped_count += 1

    print("\n" + "="*70)
    print("SUMMARY")
    print("="*70)
    print(f"Recommendations processed: {len(recommendations)}")
    print(f"Files modified:            {modified_count}")
    print(f"Already public:            {already_public_count}")
    print(f"Skipped:                   {skipped_count}")

    if args.dry_run:
        print("\nThis was a DRY RUN. Run without --dry-run to apply changes.")
    elif modified_count > 0:
        print(f"\n✓ Public-access field successfully added to {modified_count} files")
        print("\nNext steps:")
        print("1. Review the changes")
        print("2. Regenerate mappings: python3 tools/wiki-link-mapper/extract_ontology_terms.py")
        print("3. Commit changes to git")

    return 0

if __name__ == '__main__':
    exit(main())
