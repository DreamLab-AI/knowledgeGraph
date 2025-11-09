#!/usr/bin/env python3
"""
Apply related-to replacement plan.
Removes related-to property and replaces with specific unidirectional properties.
"""

import re
import json
from pathlib import Path
from collections import defaultdict

def load_replacement_plan(plan_file):
    """Load the replacement plan JSON."""
    with open(plan_file, 'r') as f:
        data = json.load(f)
    return data['replacement_plan']

def remove_related_to(content, source_term, targets_to_remove):
    """
    Remove specific targets from related-to property.
    If all targets removed, remove entire line.
    """
    pattern = r'^\s*-\s+related-to::\s*(.+?)(?:\n|$)'

    def replacement(match):
        original_line = match.group(0)
        targets_str = match.group(1).strip()

        # Extract all [[WikiLink]] targets
        wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

        # Filter out targets to remove
        filtered_links = [link for link in wiki_links if link not in targets_to_remove]

        if len(filtered_links) == 0:
            # All targets removed, remove entire line
            return ''
        elif len(filtered_links) < len(wiki_links):
            # Some targets removed, reconstruct line
            new_targets = ', '.join([f'[[{link}]]' for link in filtered_links])
            indent = match.group(0)[:match.group(0).index('-')]
            return f'{indent}- related-to:: {new_targets}\n'
        else:
            # No changes
            return original_line

    new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
    return new_content

def add_property_relationships(content, property_name, source_term, targets):
    """
    Add a new relationship property or append targets to existing.
    Inserts after the Relationships section heading.
    """
    # Check if property already exists
    existing_pattern = rf'^\s*-\s+{re.escape(property_name)}::\s*(.+?)(?:\n|$)'
    existing_match = re.search(existing_pattern, content, re.MULTILINE)

    if existing_match:
        # Property exists, append targets
        def replacement(match):
            existing_line = match.group(0)
            existing_targets_str = match.group(1).strip()

            existing_links = re.findall(r'\[\[([^\]]+)\]\]', existing_targets_str)

            # Merge with new targets (avoid duplicates)
            all_targets = list(set(existing_links + targets))
            new_targets_str = ', '.join([f'[[{t}]]' for t in sorted(all_targets)])

            indent = match.group(0)[:match.group(0).index('-')]
            return f'{indent}- {property_name}:: {new_targets_str}\n'

        new_content = re.sub(existing_pattern, replacement, content, flags=re.MULTILINE)
        return new_content
    else:
        # Property doesn't exist, add it
        # Try to find a good insertion point (after other relationship properties)

        # Look for the Relationships section or similar
        relationships_section_pattern = r'(^\s*-\s+\*\*Relationships\*\*\s*$)'
        match = re.search(relationships_section_pattern, content, re.MULTILINE)

        if match:
            # Insert after the Relationships heading
            insertion_point = match.end()
            targets_str = ', '.join([f'[[{t}]]' for t in targets])
            new_line = f'\n    - {property_name}:: {targets_str}'
            new_content = content[:insertion_point] + new_line + content[insertion_point:]
            return new_content
        else:
            # Fallback: insert before OWL Axioms or at end of OntologyBlock
            owl_pattern = r'(^\s*-\s+####\s+OWL Axioms)'
            match = re.search(owl_pattern, content, re.MULTILINE)

            if match:
                insertion_point = match.start()
                targets_str = ', '.join([f'[[{t}]]' for t in targets])
                new_line = f'    - {property_name}:: {targets_str}\n\n'
                new_content = content[:insertion_point] + new_line + content[insertion_point:]
                return new_content
            else:
                # Last resort: append at end (not ideal)
                targets_str = ', '.join([f'[[{t}]]' for t in targets])
                new_line = f'\n    - {property_name}:: {targets_str}\n'
                return content + new_line

def apply_replacement_to_file(file_path, remove_plan, add_plan, dry_run=False):
    """Apply replacement plan to a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Error reading: {e}"

    original_content = content
    changes = []

    # Step 1: Remove related-to relationships
    if remove_plan:
        for source_term, targets in remove_plan.items():
            content = remove_related_to(content, source_term, targets)
            if content != original_content:
                changes.append(f"Removed {len(targets)} related-to links from {source_term}")

    # Step 2: Add specific property relationships
    if add_plan:
        for property_name, sources in add_plan.items():
            for source_term, targets in sources.items():
                content = add_property_relationships(content, property_name, source_term, targets)
                changes.append(f"Added {len(targets)} {property_name} links")

    if content != original_content:
        if not dry_run:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
        return True, changes

    return False, "No changes needed"

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Apply related-to replacement plan')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--plan', default='tools/validation/related-to-replacement-plan.json',
                        help='Replacement plan JSON file')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be done without making changes')
    parser.add_argument('--limit', type=int, default=None,
                        help='Limit number of files to process (for testing)')

    args = parser.parse_args()

    print("="*70)
    print("RELATED-TO REPLACEMENT APPLICATION")
    print("="*70)
    print()

    # Load plan
    plan = load_replacement_plan(args.plan)

    if args.dry_run:
        print("DRY RUN MODE - No files will be modified")
        print()

    pages_dir = Path(args.pages_dir)
    modified_count = 0
    processed = 0

    files_to_process = list(plan['remove'].keys())
    if args.limit:
        files_to_process = files_to_process[:args.limit]

    for filename in files_to_process:
        file_path = pages_dir / f"{filename}.md"

        if not file_path.exists():
            print(f"⚠ File not found: {filename}.md")
            continue

        remove_plan = plan['remove'].get(filename, {})
        add_plan = plan['add'].get(filename, {})

        modified, result = apply_replacement_to_file(file_path, remove_plan, add_plan, dry_run=args.dry_run)

        if modified:
            modified_count += 1
            if args.dry_run:
                print(f"[DRY RUN] {filename}.md")
            else:
                print(f"✓ {filename}.md")

            if isinstance(result, list):
                for change in result[:3]:  # Show first 3 changes
                    print(f"  {change}")
                if len(result) > 3:
                    print(f"  ... and {len(result) - 3} more changes")

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
        print()
        print("WARNING: This operation removes all 'related-to' relationships")
        print("and replaces them with specific unidirectional properties.")
        print("Review the changes carefully before committing!")
    elif modified_count > 0:
        print()
        print("✓ Relationships successfully replaced")
        print()
        print("NEXT STEPS:")
        print("1. Review changes with: git diff")
        print("2. Re-validate: python3 tools/validation/stratification_validator.py")
        print("3. If validation passes, commit changes")

    return 0

if __name__ == '__main__':
    exit(main())
