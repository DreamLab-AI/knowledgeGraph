#!/usr/bin/env python3
"""
Break remaining cycles by making bidirectional properties unidirectional.
Uses alphabetical ordering as canonical direction.
"""

import re
from pathlib import Path

# Properties that ended up bidirectional and need fixing
SYMMETRIC_PROPERTIES = [
    'related-metric',
    'related-role',
    'similar-system',
    'governance-aspect',
    'experiential-quality'
]

# Known cycles from validation
KNOWN_CYCLES = {
    'related-metric': [
        ('AUC', 'ROC Curve'),
        ('Recall', 'Precision'),
        ('Recall', 'Accuracy'),
        ('Model Performance', 'Root Mean Square Error'),
        ('Root Mean Square Error', 'Mean Absolute Error'),
        ('Mean Absolute Error', 'F1 Score'),
        ('F1 Score', 'Confusion Matrix'),
        ('Model Performance', 'Recall'),
    ],
    'related-role': [
        ('AI Provider', 'AI User'),
        ('AI User', 'Stakeholder'),
        ('Stakeholder', 'AI Operator'),
    ],
    'similar-system': [
        ('Chatbot', 'Dialogue System'),
    ],
    'governance-aspect': [
        ('Human Oversight', 'AI Governance'),
        ('AI Governance', 'Ethical AI'),
        ('Ethical AI', 'AI Audit'),
    ],
    'enables': [
        ('Presence', 'Immersion'),
        ('Immersion', 'Experience Layer'),
        ('Experience Layer', 'Extended Reality (XR)'),
        ('Extended Reality (XR)', 'Human Interface Layer (HIL)'),
    ]
}

def should_keep_direction(source, target):
    """
    Determine if source → target should be kept.
    Use alphabetical ordering as canonical direction.
    """
    return source.lower() < target.lower()

def remove_property_target(content, property_name, target_to_remove):
    """Remove specific target from a property."""
    pattern = rf'^\s*-\s+{re.escape(property_name)}::\s*(.+?)(?:\n|$)'

    def replacement(match):
        original_line = match.group(0)
        targets_str = match.group(1).strip()
        wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

        # Filter out target to remove
        filtered = [link for link in wiki_links if link != target_to_remove]

        if len(filtered) == 0:
            # All removed, delete line
            return ''
        elif len(filtered) < len(wiki_links):
            # Some removed, reconstruct
            new_targets = ', '.join([f'[[{link}]]' for link in filtered])
            indent = match.group(0)[:match.group(0).index('-')]
            return f'{indent}- {property_name}:: {new_targets}\n'
        return original_line

    return re.sub(pattern, replacement, content, flags=re.MULTILINE)

def process_file(file_path, preferred_term):
    """Process a file to remove bidirectional links."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return False, f"Error reading: {e}"

    original_content = content
    changes = []

    # Check each symmetric property
    for prop in SYMMETRIC_PROPERTIES + ['enables']:
        if prop not in KNOWN_CYCLES:
            continue

        for source, target in KNOWN_CYCLES[prop]:
            # Check if this file is one of the pair
            if preferred_term == source:
                # This is the source - check if we should keep or remove
                if not should_keep_direction(source, target):
                    # Remove this direction
                    content = remove_property_target(content, prop, target)
                    if content != original_content:
                        changes.append(f"Removed {prop}::{target} (keeping reverse direction)")
                        original_content = content

            elif preferred_term == target:
                # This is the target - check if we should keep or remove
                if not should_keep_direction(source, target):
                    # Keep this direction (source should remove)
                    pass  # No change needed
                else:
                    # Remove this direction
                    content = remove_property_target(content, prop, source)
                    if content != original_content:
                        changes.append(f"Removed {prop}::{source} (keeping reverse direction)")
                        original_content = content

    if changes:
        return content, changes

    return None, "No changes needed"

def extract_preferred_term(file_path):
    """Extract preferred term from file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return file_path.stem

    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    return match.group(1).strip() if match else file_path.stem

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Break remaining bidirectional cycles')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be done without making changes')

    args = parser.parse_args()

    print("="*70)
    print("BREAKING REMAINING BIDIRECTIONAL CYCLES")
    print("="*70)
    print()

    if args.dry_run:
        print("DRY RUN MODE - No files will be modified")
        print()

    pages_dir = Path(args.pages_dir)
    modified_count = 0

    # Get all unique terms involved in cycles
    all_terms = set()
    for cycles in KNOWN_CYCLES.values():
        for source, target in cycles:
            all_terms.add(source)
            all_terms.add(target)

    print(f"Processing {len(all_terms)} concepts involved in cycles...")
    print()

    for term in sorted(all_terms):
        # Find the file
        # Try multiple filename patterns
        possible_files = [
            term,
            term.replace(' ', '-'),
            term.replace(' ', '_'),
            f"AI-{term}",
            f"BC-{term}",
        ]

        file_path = None
        for possible in possible_files:
            test_path = pages_dir / f"{possible}.md"
            if test_path.exists():
                file_path = test_path
                break

        if not file_path:
            # Try to find by preferred-term
            for md_file in pages_dir.glob('*.md'):
                if extract_preferred_term(md_file) == term:
                    file_path = md_file
                    break

        if not file_path:
            print(f"⚠ File not found for: {term}")
            continue

        result = process_file(file_path, term)

        if result[0] is not None:
            new_content, changes = result
            modified_count += 1

            if args.dry_run:
                print(f"[DRY RUN] {file_path.name}")
            else:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✓ {file_path.name}")

            for change in changes:
                print(f"  {change}")

    print()
    print("="*70)
    print("SUMMARY")
    print("="*70)
    print(f"Files modified: {modified_count}")

    if args.dry_run:
        print()
        print("This was a DRY RUN. Run without --dry-run to apply changes.")
    elif modified_count > 0:
        print()
        print("✓ Bidirectional cycles broken!")
        print()
        print("NEXT STEP:")
        print("  Re-validate: python3 tools/validation/stratification_validator.py")

    return 0

if __name__ == '__main__':
    exit(main())
