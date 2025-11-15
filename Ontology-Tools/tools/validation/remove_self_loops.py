#!/usr/bin/env python3
"""
Remove self-referencing relationships (self-loops) from ontology files.
These violate stratification and are clearly errors.
"""

import re
from pathlib import Path

def extract_preferred_term(content):
    """Extract preferred term from content."""
    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    return match.group(1).strip() if match else None

def remove_self_loops(content, term, property_name='implementedInLayer'):
    """
    Remove self-referencing relationships.
    Example: In file "Application Layer.md", remove:
      - implementedInLayer:: [[Application Layer]]
    """
    # Pattern to match the property line with the self-reference
    # Matches: - property:: [[Term]], [[Term]], other terms
    # Or:      - property:: [[Term]]

    changes = []

    # Find all instances of the property
    pattern = rf'^\s*-\s+{property_name}::\s*(.+?)(?:\n|$)'

    def replacement(match):
        original_line = match.group(0)
        targets_str = match.group(1).strip()

        # Extract all [[WikiLink]] targets
        wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

        # Filter out self-references
        filtered_links = [link for link in wiki_links if link != term]

        if len(filtered_links) < len(wiki_links):
            # Self-reference was found and removed
            changes.append({
                'property': property_name,
                'removed': [link for link in wiki_links if link == term]
            })

            if not filtered_links:
                # All links were self-references, remove entire line
                return ''
            else:
                # Reconstruct line with remaining links
                new_targets = ', '.join([f'[[{link}]]' for link in filtered_links])
                indent = match.group(0)[:match.group(0).index('-')]
                return f'{indent}- {property_name}:: {new_targets}\n'

        return original_line

    new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

    return new_content, changes

def process_file(file_path, dry_run=False):
    """Process a single file to remove self-loops."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Error reading: {e}"

    # Get preferred term
    term = extract_preferred_term(content)
    if not term:
        term = file_path.stem

    # Check all common relationship properties for self-loops
    properties_to_check = [
        'implementedInLayer',
        'has-part',
        'is-part-of',
        'requires',
        'enables',
        'bridges-to',
        'depends-on',
        'uses',
        'related-to'
    ]

    all_changes = []
    modified_content = content

    for prop in properties_to_check:
        modified_content, changes = remove_self_loops(modified_content, term, prop)
        if changes:
            all_changes.extend(changes)

    if all_changes:
        if not dry_run:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(modified_content)

        return True, all_changes

    return False, "No self-loops found"

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Remove self-loop relationships')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be done without making changes')

    args = parser.parse_args()

    print("="*70)
    print("SELF-LOOP REMOVAL TOOL")
    print("="*70)
    print()

    if args.dry_run:
        print("DRY RUN MODE - No files will be modified")
        print()

    pages_dir = Path(args.pages_dir)
    modified_count = 0
    total_loops_removed = 0

    for md_file in sorted(pages_dir.glob('*.md')):
        modified, result = process_file(md_file, dry_run=args.dry_run)

        if modified:
            modified_count += 1
            loops_count = len(result)
            total_loops_removed += loops_count

            if args.dry_run:
                print(f"[DRY RUN] {md_file.name}")
            else:
                print(f"✓ {md_file.name}")

            for change in result:
                print(f"  Removed self-loop: {change['property']} → {change['removed']}")

    print()
    print("="*70)
    print("SUMMARY")
    print("="*70)
    print(f"Files modified:      {modified_count}")
    print(f"Self-loops removed:  {total_loops_removed}")

    if args.dry_run:
        print()
        print("This was a DRY RUN. Run without --dry-run to apply changes.")
    elif modified_count > 0:
        print()
        print("✓ Self-loops successfully removed")
    else:
        print()
        print("✓ No self-loops found")

    return 0

if __name__ == '__main__':
    exit(main())
