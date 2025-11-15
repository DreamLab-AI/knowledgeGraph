#!/usr/bin/env python3
"""
Stratification Validator for Ontology Graph

Validates that the ontology maintains proper stratification:
- No circular dependencies within same property type
- Properly defined inverse properties
- DAG structure for each relationship type
- Computational tractability for reasoning

Based on principles from:
- Description Logic stratification
- DAG-structured ontologies
- Antisymmetric relations in OWL
"""

import re
import json
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Set, Tuple

# Define known inverse property pairs
INVERSE_PAIRS = {
    ('has-part', 'is-part-of'),
    ('contains', 'is-contained-in'),
    ('requires', 'is-required-by'),
    ('enables', 'is-enabled-by'),
    ('implements', 'is-implemented-by'),
    ('uses', 'is-used-by'),
    ('depends-on', 'is-dependency-of'),
    ('subClassOf', 'superClassOf'),
}

def normalize_inverse_pairs():
    """Create bidirectional lookup for inverse pairs."""
    inverses = {}
    for pair in INVERSE_PAIRS:
        prop1, prop2 = pair
        inverses[prop1] = prop2
        inverses[prop2] = prop1
    return inverses

INVERSE_MAP = normalize_inverse_pairs()

def extract_relationships(file_path):
    """Extract all relationship assertions from a markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return None, f"Error reading file: {e}"

    # Check if it's an ontology file
    if 'ontology:: true' not in content and 'metaverseOntology:: true' not in content:
        return None, "Not an ontology file"

    # Extract preferred term
    preferred_term = None
    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    if match:
        preferred_term = match.group(1).strip()
    else:
        # Fallback to file stem
        preferred_term = file_path.stem

    # Extract all relationship properties
    relationships = defaultdict(list)

    # Pattern: - property:: [[Target1]], [[Target2]]
    # This matches relationship properties in markdown
    pattern = r'^\s*-\s+([a-zA-Z][a-zA-Z0-9_-]*)::\s*(.+?)(?:\n|$)'

    for match in re.finditer(pattern, content, re.MULTILINE):
        property_name = match.group(1).strip()
        targets_str = match.group(2).strip()

        # Skip non-relationship properties
        if property_name in ['ontology', 'metaverseOntology', 'term-id', 'preferred-term',
                              'source-domain', 'status', 'public-access', 'version',
                              'last-updated', 'definition', 'maturity', 'source',
                              'authority-score', 'collapsed', 'id']:
            continue

        # Extract [[WikiLink]] targets
        wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

        if wiki_links:
            relationships[property_name].extend(wiki_links)

    return {
        'term': preferred_term,
        'file': file_path.stem,
        'relationships': dict(relationships)
    }, None

def build_relationship_graphs(pages_dir):
    """Build directed graphs for each relationship property type."""
    graphs = defaultdict(lambda: defaultdict(set))  # graphs[property][source] = {targets}
    term_to_file = {}  # Map preferred terms to filenames
    all_terms = {}  # term -> full data

    print("Extracting relationships from all ontology files...")

    for md_file in Path(pages_dir).glob('*.md'):
        data, error = extract_relationships(md_file)

        if error:
            continue

        if data:
            term = data['term']
            term_to_file[term] = data['file']
            all_terms[term] = data

            # Build graphs for each property
            for prop, targets in data['relationships'].items():
                for target in targets:
                    graphs[prop][term].add(target)

    print(f"Processed {len(all_terms)} ontology concepts")
    print(f"Found {len(graphs)} distinct relationship properties")

    return graphs, all_terms, term_to_file

def detect_cycles_dfs(graph: Dict[str, Set[str]], property_name: str):
    """
    Detect cycles in a directed graph using DFS.
    Returns list of cycles found.
    """
    cycles = []
    visited = set()
    rec_stack = set()
    path = []

    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        path.append(node)

        if node in graph:
            for neighbor in graph[node]:
                if neighbor not in visited:
                    if dfs(neighbor):
                        return True
                elif neighbor in rec_stack:
                    # Found a cycle
                    cycle_start = path.index(neighbor)
                    cycle = path[cycle_start:] + [neighbor]
                    cycles.append(cycle)
                    return True

        path.pop()
        rec_stack.remove(node)
        return False

    # Check all nodes
    for node in graph:
        if node not in visited:
            dfs(node)

    return cycles

def check_inverse_consistency(graphs, inverse_map):
    """
    Check if inverse properties are properly defined.

    If A has-part B, then B should have is-part-of A (correct inverse)
    If A has-part B AND B has-part A, that's a cycle (incorrect)
    """
    violations = []

    for prop1, prop2 in INVERSE_PAIRS:
        if prop1 not in graphs or prop2 not in graphs:
            continue

        graph1 = graphs[prop1]
        graph2 = graphs[prop2]

        # Check consistency: if A prop1 B, then B should have prop2 A
        for source in graph1:
            for target in graph1[source]:
                # Check if inverse exists
                if target in graph2 and source in graph2[target]:
                    # Good - inverse is defined
                    pass
                else:
                    # Missing inverse
                    violations.append({
                        'type': 'missing_inverse',
                        'source': source,
                        'target': target,
                        'property': prop1,
                        'expected_inverse': prop2,
                        'severity': 'warning'
                    })

    return violations

def analyze_stratification(pages_dir='logseq/pages'):
    """Main analysis function."""
    print("="*70)
    print("ONTOLOGY STRATIFICATION VALIDATION")
    print("="*70)
    print()

    # Build graphs
    graphs, all_terms, term_to_file = build_relationship_graphs(pages_dir)

    # Results
    results = {
        'cycles': {},
        'inverse_violations': [],
        'statistics': {},
        'graphs': {}
    }

    # Detect cycles for each property
    print("\nChecking for circular dependencies...")
    total_cycles = 0

    for prop, graph in sorted(graphs.items()):
        cycles = detect_cycles_dfs(graph, prop)

        if cycles:
            results['cycles'][prop] = cycles
            total_cycles += len(cycles)
            print(f"  ⚠ {prop}: Found {len(cycles)} cycle(s)")
            for i, cycle in enumerate(cycles, 1):
                print(f"     Cycle {i}: {' → '.join(cycle)}")
        else:
            print(f"  ✓ {prop}: No cycles (DAG structure maintained)")

        # Store graph statistics
        results['graphs'][prop] = {
            'node_count': len(graph),
            'edge_count': sum(len(targets) for targets in graph.values()),
            'has_cycles': len(cycles) > 0
        }

    # Check inverse consistency
    print("\nChecking inverse property consistency...")
    inverse_violations = check_inverse_consistency(graphs, INVERSE_MAP)
    results['inverse_violations'] = inverse_violations

    if inverse_violations:
        print(f"  ⚠ Found {len(inverse_violations)} missing inverse relationships")
        for v in inverse_violations[:5]:  # Show first 5
            print(f"     {v['source']} --{v['property']}--> {v['target']}")
            print(f"       Missing: {v['target']} --{v['expected_inverse']}--> {v['source']}")
        if len(inverse_violations) > 5:
            print(f"     ... and {len(inverse_violations) - 5} more")
    else:
        print(f"  ✓ All inverse properties properly defined")

    # Statistics
    results['statistics'] = {
        'total_concepts': len(all_terms),
        'total_properties': len(graphs),
        'total_relationships': sum(
            sum(len(targets) for targets in graph.values())
            for graph in graphs.values()
        ),
        'properties_with_cycles': len(results['cycles']),
        'total_cycles': total_cycles,
        'inverse_violations': len(inverse_violations)
    }

    return results

def generate_report(results, output_file):
    """Generate detailed JSON report."""
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

def print_summary(results):
    """Print summary to console."""
    print("\n" + "="*70)
    print("VALIDATION SUMMARY")
    print("="*70)

    stats = results['statistics']
    print(f"Total concepts analyzed:    {stats['total_concepts']}")
    print(f"Relationship properties:    {stats['total_properties']}")
    print(f"Total relationships:        {stats['total_relationships']}")
    print()

    if stats['total_cycles'] > 0:
        print(f"⚠️  CYCLES DETECTED: {stats['total_cycles']}")
        print(f"   Properties with cycles: {stats['properties_with_cycles']}")
        print()
        print("   ❌ STRATIFICATION VIOLATED - Circular dependencies found!")
        print("   This will cause computational explosion during reasoning.")
        print()
        for prop, cycles in results['cycles'].items():
            print(f"   Property '{prop}': {len(cycles)} cycle(s)")
    else:
        print("✅ NO CYCLES DETECTED")
        print("   All relationship properties maintain DAG structure")
        print("   Stratification preserved - reasoning will be tractable")
        print()

    if stats['inverse_violations'] > 0:
        print(f"⚠️  INVERSE VIOLATIONS: {stats['inverse_violations']}")
        print("   Some inverse properties are not properly defined")
        print("   This is a WARNING, not a critical error")
    else:
        print("✅ INVERSE PROPERTIES CONSISTENT")
        print("   All inverse relationships properly defined")

    print()
    print("="*70)

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Validate ontology stratification')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing ontology markdown files')
    parser.add_argument('--output', default='tools/validation/stratification-report.json',
                        help='Output JSON report file')

    args = parser.parse_args()

    # Run analysis
    results = analyze_stratification(args.pages_dir)

    # Print summary
    print_summary(results)

    # Generate report
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    generate_report(results, output_path)

    print(f"\nDetailed report saved to: {output_path}")

    # Exit code
    if results['statistics']['total_cycles'] > 0:
        print("\n⚠️  Validation FAILED - cycles detected")
        return 1
    else:
        print("\n✅ Validation PASSED - stratification maintained")
        return 0

if __name__ == '__main__':
    exit(main())
