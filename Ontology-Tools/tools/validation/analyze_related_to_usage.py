#!/usr/bin/env python3
"""
Analyze 'related-to' property usage to understand what it's being used for.
This helps decide how to replace it with more specific properties.
"""

import re
import json
from pathlib import Path
from collections import defaultdict, Counter

def extract_related_to_relationships(pages_dir='logseq/pages'):
    """Extract all related-to relationships with context."""
    relationships = []

    for md_file in Path(pages_dir).glob('*.md'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            continue

        # Extract preferred term
        match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
        source_term = match.group(1).strip() if match else md_file.stem

        # Extract domain
        domain_match = re.search(r'source-domain::\s*(.+?)(?:\n|$)', content)
        source_domain = domain_match.group(1).strip() if domain_match else 'unknown'

        # Find related-to relationships
        pattern = r'^\s*-\s+related-to::\s*(.+?)(?:\n|$)'
        for match in re.finditer(pattern, content, re.MULTILINE):
            targets_str = match.group(1).strip()
            wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

            for target in wiki_links:
                relationships.append({
                    'source': source_term,
                    'target': target,
                    'source_domain': source_domain,
                    'source_file': md_file.stem
                })

    return relationships

def analyze_patterns(relationships):
    """Analyze patterns in related-to usage."""
    # Count by domain
    domain_pairs = Counter()
    within_domain = 0
    cross_domain = 0

    # Build reverse index
    target_to_source = defaultdict(list)
    source_to_target = defaultdict(list)

    for rel in relationships:
        source = rel['source']
        target = rel['target']
        source_domain = rel['source_domain']

        source_to_target[source].append(target)
        target_to_source[target].append(source)

    # Find bidirectional relationships
    bidirectional = []
    for source, targets in source_to_target.items():
        for target in targets:
            if source in target_to_source.get(target, []):
                # Bidirectional relationship
                if (target, source) not in [(b['target'], b['source']) for b in bidirectional]:
                    bidirectional.append({
                        'source': source,
                        'target': target
                    })

    return {
        'total_relationships': len(relationships),
        'unique_sources': len(source_to_target),
        'unique_targets': len(target_to_source),
        'bidirectional_count': len(bidirectional),
        'bidirectional_examples': bidirectional[:20],
        'high_degree_sources': sorted(
            [(k, len(v)) for k, v in source_to_target.items()],
            key=lambda x: x[1],
            reverse=True
        )[:20],
        'high_degree_targets': sorted(
            [(k, len(v)) for k, v in target_to_source.items()],
            key=lambda x: x[1],
            reverse=True
        )[:20]
    }

def main():
    print("="*70)
    print("ANALYZING 'related-to' PROPERTY USAGE")
    print("="*70)
    print()

    relationships = extract_related_to_relationships()
    print(f"Found {len(relationships)} 'related-to' relationships")
    print()

    analysis = analyze_patterns(relationships)

    print("STATISTICS")
    print("-"*70)
    print(f"Total relationships:      {analysis['total_relationships']}")
    print(f"Unique source concepts:   {analysis['unique_sources']}")
    print(f"Unique target concepts:   {analysis['unique_targets']}")
    print(f"Bidirectional pairs:      {analysis['bidirectional_count']}")
    print()

    print("BIDIRECTIONAL RELATIONSHIPS (sample)")
    print("-"*70)
    for i, pair in enumerate(analysis['bidirectional_examples'][:10], 1):
        print(f"{i:2}. {pair['source']} ↔ {pair['target']}")
    if len(analysis['bidirectional_examples']) > 10:
        print(f"    ... and {len(analysis['bidirectional_examples']) - 10} more")
    print()

    print("MOST CONNECTED CONCEPTS (outgoing 'related-to')")
    print("-"*70)
    for i, (concept, count) in enumerate(analysis['high_degree_sources'][:10], 1):
        print(f"{i:2}. {concept}: {count} outgoing links")
    print()

    print("MOST REFERENCED CONCEPTS (incoming 'related-to')")
    print("-"*70)
    for i, (concept, count) in enumerate(analysis['high_degree_targets'][:10], 1):
        print(f"{i:2}. {concept}: {count} incoming links")
    print()

    # Save detailed report
    output_file = 'tools/validation/related-to-analysis.json'
    with open(output_file, 'w') as f:
        json.dump({
            'relationships': relationships,
            'analysis': analysis
        }, f, indent=2)

    print("="*70)
    print(f"Detailed analysis saved to: {output_file}")
    print()
    print("RECOMMENDATION:")
    print("  The 'related-to' property is being used bidirectionally, creating")
    print("  cycles that violate stratification. Consider:")
    print()
    print("  1. Replace with specific unidirectional properties")
    print("  2. Remove 'related-to' from reasoning (non-semantic use only)")
    print("  3. Make antisymmetric by removing one direction in each pair")
    print("="*70)

if __name__ == '__main__':
    main()
