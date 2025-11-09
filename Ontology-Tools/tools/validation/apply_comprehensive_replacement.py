#!/usr/bin/env python3
"""
Apply comprehensive manual categorization.
- DELETE redundant relationships
- REPLACE with specific properties
- REVIEW unclear ones (optionally delete or keep)
"""

import re
import json
from pathlib import Path
from collections import defaultdict

def load_categorization():
    """Load comprehensive categorization."""
    with open('tools/validation/comprehensive-categorization.json', 'r') as f:
        return json.load(f)

def remove_related_to_targets(content, targets_to_remove):
    """Remove specific targets from related-to property."""
    pattern = r'^\s*-\s+related-to::\s*(.+?)(?:\n|$)'

    def replacement(match):
        original_line = match.group(0)
        targets_str = match.group(1).strip()
        wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

        # Filter out targets to remove
        filtered = [link for link in wiki_links if link not in targets_to_remove]

        if len(filtered) == 0:
            # All removed, delete line
            return ''
        elif len(filtered) < len(wiki_links):
            # Some removed, reconstruct
            new_targets = ', '.join([f'[[{link}]]' for link in filtered])
            indent = match.group(0)[:match.group(0).index('-')]
            return f'{indent}- related-to:: {new_targets}\n'
        return original_line

    return re.sub(pattern, replacement, content, flags=re.MULTILINE)

def add_property(content, property_name, targets):
    """Add or append to a property."""
    existing_pattern = rf'^\s*-\s+{re.escape(property_name)}::\s*(.+?)(?:\n|$)'
    existing_match = re.search(existing_pattern, content, re.MULTILINE)

    if existing_match:
        # Append to existing
        def replacement(match):
            existing_targets_str = match.group(1).strip()
            existing_links = re.findall(r'\[\[([^\]]+)\]\]', existing_targets_str)
            all_targets = list(set(existing_links + targets))
            new_targets_str = ', '.join([f'[[{t}]]' for t in sorted(all_targets)])
            indent = match.group(0)[:match.group(0).index('-')]
            return f'{indent}- {property_name}:: {new_targets_str}\n'

        return re.sub(existing_pattern, replacement, content, flags=re.MULTILINE)
    else:
        # Add new property - try to find good insertion point
        # Look for Relationships section
        rel_pattern = r'(^\s*-\s+\*\*Relationships\*\*\s*$)'
        match = re.search(rel_pattern, content, re.MULTILINE)

        if match:
            insertion_point = match.end()
            targets_str = ', '.join([f'[[{t}]]' for t in targets])
            new_line = f'\n    - {property_name}:: {targets_str}'
            return content[:insertion_point] + new_line + content[insertion_point:]
        else:
            # Fallback: add at end of OntologyBlock
            targets_str = ', '.join([f'[[{t}]]' for t in targets])
            return content + f'\n    - {property_name}:: {targets_str}\n'

def process_file(file_path, file_plan, handle_review='keep'):
    """
    Process a file according to the plan.

    handle_review: 'keep', 'delete', or 'skip'
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Error reading: {e}"

    original_content = content
    changes = []

    # Group by action
    to_delete = []
    to_replace = defaultdict(list)
    to_review = []

    for rel in file_plan:
        action = rel['action']
        target = rel['target']

        if action == 'delete':
            to_delete.append(target)
        elif action == 'replace':
            new_prop = rel['new_property']
            if new_prop != 'same-domain-unclear':  # Don't add unclear ones
                to_replace[new_prop].append(target)
            else:
                # Unclear - handle based on parameter
                if handle_review == 'delete':
                    to_delete.append(target)
                elif handle_review == 'keep':
                    to_review.append(target)
        elif action == 'review':
            if handle_review == 'delete':
                to_delete.append(target)
            elif handle_review == 'keep':
                to_review.append(target)

    # Remove related-to relationships
    all_to_remove = to_delete + [t for targets in to_replace.values() for t in targets]
    if all_to_remove:
        content = remove_related_to_targets(content, all_to_remove)
        changes.append(f"Removed {len(all_to_remove)} related-to links")

    # Add specific properties
    for prop, targets in to_replace.items():
        if targets:
            content = add_property(content, prop, targets)
            changes.append(f"Added {len(targets)} {prop} links")

    # Report review items
    if to_review:
        changes.append(f"Kept {len(to_review)} for manual review")

    if content != original_content:
        return content, changes

    return None, "No changes needed"

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Apply comprehensive categorization')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be done without making changes')
    parser.add_argument('--handle-review', choices=['keep', 'delete', 'skip'],
                        default='delete',
                        help='How to handle unclear REVIEW items (default: delete)')
    parser.add_argument('--limit', type=int, default=None,
                        help='Limit number of files to process')

    args = parser.parse_args()

    print("="*70)
    print("COMPREHENSIVE REPLACEMENT APPLICATION")
    print("="*70)
    print()

    data = load_categorization()
    relationships = data['relationships']

    print(f"Total relationships: {len(relationships)}")
    print(f"  DELETE actions:  {data['summary']['delete']}")
    print(f"  REPLACE actions: {data['summary']['replace']}")
    print(f"  REVIEW actions:  {data['summary']['review']}")
    print(f"\nReview handling: {args.handle_review}")
    print()

    if args.dry_run:
        print("DRY RUN MODE - No files will be modified")
        print()

    # Group by source file
    by_file = defaultdict(list)
    for rel in relationships:
        by_file[rel['source_file']].append(rel)

    pages_dir = Path(args.pages_dir)
    modified_count = 0
    processed = 0

    files_to_process = list(by_file.keys())
    if args.limit:
        files_to_process = files_to_process[:args.limit]

    for filename in files_to_process:
        file_path = pages_dir / f"{filename}.md"

        if not file_path.exists():
            print(f"⚠ File not found: {filename}.md")
            continue

        result = process_file(file_path, by_file[filename], handle_review=args.handle_review)

        if result[0] is not None:
            new_content, changes = result
            modified_count += 1

            if args.dry_run:
                print(f"[DRY RUN] {filename}.md")
            else:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✓ {filename}.md")

            for change in changes[:4]:
                print(f"  {change}")
            if len(changes) > 4:
                print(f"  ... and {len(changes) - 4} more")

        processed += 1

    print()
    print("="*70)
    print("SUMMARY")
    print("="*70)
    print(f"Files processed:  {processed}")
    print(f"Files modified:   {modified_count}")

    if args.dry_run:
        print()
        print("This was a DRY RUN. Run without --dry-run to apply changes.")
    elif modified_count > 0:
        print()
        print("✓ Comprehensive replacement complete!")
        print()
        print("Changes made:")
        print(f"  - Deleted {data['summary']['delete']} redundant relationships")
        print(f"  - Replaced {data['summary']['replace']} with specific properties")
        if args.handle_review == 'delete':
            print(f"  - Deleted {data['summary']['review']} unclear relationships")
        elif args.handle_review == 'keep':
            print(f"  - Kept {data['summary']['review']} unclear for manual review")
        print()
        print("NEXT STEPS:")
        print("1. Review changes: git diff")
        print("2. Re-validate: python3 tools/validation/stratification_validator.py")
        print("3. Commit if validation passes")

    return 0

if __name__ == '__main__':
    exit(main())
