#!/usr/bin/env python3
"""
Break multi-node cycles by removing one edge from each cycle.
Uses lexicographic ordering to choose which edge to remove deterministically.
"""

import re
import json
from pathlib import Path

def load_cycles_from_report():
    """Load cycles from validation report."""
    with open('tools/validation/stratification-report.json', 'r') as f:
        data = json.load(f)
    return data['cycles']

def extract_edges_from_cycle(cycle_path):
    """
    Extract edges from a cycle path.
    Cycle: [A, B, C, A] → edges: [(A,B), (B,C), (C,A)]
    """
    edges = []
    for i in range(len(cycle_path) - 1):
        edges.append((cycle_path[i], cycle_path[i+1]))
    return edges

def choose_edge_to_remove(cycle_path):
    """
    Choose which edge to remove from a cycle.
    Use lexicographic ordering: remove the edge with highest (source, target) tuple.
    """
    edges = extract_edges_from_cycle(cycle_path)

    # Sort edges lexicographically and take the last (highest) one
    sorted_edges = sorted(edges, key=lambda e: (e[0].lower(), e[1].lower()))
    return sorted_edges[-1]  # Remove the highest edge

def build_removal_plan(cycles_by_property):
    """Build a plan of which edges to remove."""
    removal_plan = {}  # {property: [(source, target), ...]}

    for prop, cycles in cycles_by_property.items():
        edges_to_remove = set()

        for cycle in cycles:
            # Each cycle is a list like: [A, B, C, A]
            edge_to_remove = choose_edge_to_remove(cycle)
            edges_to_remove.add(edge_to_remove)

        removal_plan[prop] = list(edges_to_remove)

    return removal_plan

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

def extract_preferred_term(file_path):
    """Extract preferred term from file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return file_path.stem

    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    return match.group(1).strip() if match else file_path.stem

def find_file_for_term(pages_dir, term):
    """Find the markdown file for a given term."""
    # Try multiple filename patterns
    possible_files = [
        term,
        term.replace(' ', '-'),
        term.replace(' ', '_'),
    ]

    for possible in possible_files:
        test_path = pages_dir / f"{possible}.md"
        if test_path.exists():
            return test_path

    # Try to find by preferred-term
    for md_file in pages_dir.glob('*.md'):
        if extract_preferred_term(md_file) == term:
            return md_file

    return None

def apply_removal_plan(pages_dir, removal_plan, dry_run=False):
    """Apply the removal plan to break cycles."""
    modified_count = 0

    for prop, edges_to_remove in removal_plan.items():
        print(f"\nProcessing '{prop}' property:")
        print(f"  Removing {len(edges_to_remove)} edges to break cycles")

        for source, target in edges_to_remove:
            # Find the source file
            file_path = find_file_for_term(pages_dir, source)

            if not file_path:
                print(f"  ⚠ File not found for: {source}")
                continue

            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception as e:
                print(f"  ✗ Error reading {file_path.name}: {e}")
                continue

            original_content = content
            content = remove_property_target(content, prop, target)

            if content != original_content:
                if dry_run:
                    print(f"  [DRY RUN] {file_path.name}: Remove {prop}::{target}")
                else:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"  ✓ {file_path.name}: Removed {prop}::{target}")
                    modified_count += 1

    return modified_count

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Break multi-node cycles')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be done without making changes')

    args = parser.parse_args()

    print("="*70)
    print("BREAKING MULTI-NODE CYCLES")
    print("="*70)
    print()

    # Load cycles from validation report
    cycles = load_cycles_from_report()

    total_cycles = sum(len(c) for c in cycles.values())
    print(f"Found {total_cycles} cycles across {len(cycles)} properties")
    print()

    # Build removal plan
    removal_plan = build_removal_plan(cycles)

    total_edges_to_remove = sum(len(edges) for edges in removal_plan.values())
    print(f"Removal plan: {total_edges_to_remove} edges to remove")

    if args.dry_run:
        print("\nDRY RUN MODE - No files will be modified")

    # Apply removal plan
    pages_dir = Path(args.pages_dir)
    modified_count = apply_removal_plan(pages_dir, removal_plan, dry_run=args.dry_run)

    print()
    print("="*70)
    print("SUMMARY")
    print("="*70)
    print(f"Files modified: {modified_count}")
    print(f"Edges removed:  {total_edges_to_remove}")

    if args.dry_run:
        print()
        print("This was a DRY RUN. Run without --dry-run to apply changes.")
    elif modified_count > 0:
        print()
        print("✓ Multi-node cycles broken!")
        print()
        print("NEXT STEP:")
        print("  Re-validate: python3 tools/validation/stratification_validator.py")

    return 0

if __name__ == '__main__':
    exit(main())
