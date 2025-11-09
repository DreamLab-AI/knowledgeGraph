#!/usr/bin/env python3
"""
Semantic categorization of 'related-to' relationships.
Suggests specific replacement properties based on context.
"""

import re
import json
from pathlib import Path
from collections import defaultdict

# Semantic keywords that hint at relationship type
SEMANTIC_PATTERNS = {
    'compositional': {
        'keywords': ['component', 'part', 'element', 'module', 'layer', 'subsystem'],
        'property': 'has-part',
        'inverse': 'is-part-of'
    },
    'measurement': {
        'keywords': ['metric', 'measure', 'score', 'accuracy', 'precision', 'recall',
                     'performance', 'evaluation', 'assessment'],
        'property': 'measured-by',
        'inverse': 'measures'
    },
    'technique': {
        'keywords': ['algorithm', 'method', 'technique', 'approach', 'model', 'architecture'],
        'property': 'uses-technique',
        'inverse': 'technique-used-in'
    },
    'application': {
        'keywords': ['application', 'use case', 'domain', 'field', 'industry', 'sector'],
        'property': 'has-application-in',
        'inverse': 'applies-to'
    },
    'dependency': {
        'keywords': ['require', 'depend', 'need', 'prerequisite', 'foundation'],
        'property': 'requires',
        'inverse': 'is-required-by'
    },
    'capability': {
        'keywords': ['enable', 'allow', 'support', 'facilitate', 'provide'],
        'property': 'enables',
        'inverse': 'is-enabled-by'
    },
    'implementation': {
        'keywords': ['implement', 'realize', 'instantiate', 'concrete'],
        'property': 'implements',
        'inverse': 'is-implemented-by'
    }
}

def extract_term_metadata(file_path):
    """Extract preferred term, domain, and definition."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return None

    preferred_term_match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    preferred_term = preferred_term_match.group(1).strip() if preferred_term_match else file_path.stem

    domain_match = re.search(r'source-domain::\s*(.+?)(?:\n|$)', content)
    domain = domain_match.group(1).strip() if domain_match else 'unknown'

    definition_match = re.search(r'definition::\s*(.+?)(?:\n|$)', content)
    definition = definition_match.group(1).strip() if definition_match else ''

    return {
        'term': preferred_term,
        'domain': domain,
        'definition': definition,
        'file': file_path.stem
    }

def categorize_by_keywords(source_term, target_term, source_def, target_def):
    """Categorize relationship based on keyword matching."""
    combined_text = f"{source_term} {target_term} {source_def} {target_def}".lower()

    scores = {}
    for category, config in SEMANTIC_PATTERNS.items():
        score = sum(1 for keyword in config['keywords'] if keyword in combined_text)
        if score > 0:
            scores[category] = score

    if scores:
        best_category = max(scores.items(), key=lambda x: x[1])[0]
        return best_category, scores[best_category]

    return 'associative', 0

def choose_canonical_direction(source, target, category):
    """
    Choose canonical direction for relationship to break bidirectional cycle.

    Rules:
    - Alphabetical order (deterministic)
    - Prefer general → specific
    - Prefer abstract → concrete
    """
    # Simple alphabetical for determinism
    if source.lower() < target.lower():
        return 'forward'  # source → target
    else:
        return 'reverse'  # target → source

def extract_all_related_to(pages_dir):
    """Extract all related-to relationships with metadata."""
    relationships = []
    term_metadata = {}

    # First pass: collect metadata
    print("Collecting term metadata...")
    for md_file in Path(pages_dir).glob('*.md'):
        metadata = extract_term_metadata(md_file)
        if metadata:
            term_metadata[metadata['term']] = metadata

    # Second pass: extract relationships
    print("Extracting related-to relationships...")
    for md_file in Path(pages_dir).glob('*.md'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            continue

        source_meta = extract_term_metadata(md_file)
        if not source_meta:
            continue

        # Find related-to relationships
        pattern = r'^\s*-\s+related-to::\s*(.+?)(?:\n|$)'
        for match in re.finditer(pattern, content, re.MULTILINE):
            targets_str = match.group(1).strip()
            wiki_links = re.findall(r'\[\[([^\]]+)\]\]', targets_str)

            for target in wiki_links:
                target_meta = term_metadata.get(target, {'term': target, 'domain': 'unknown', 'definition': ''})

                # Categorize relationship
                category, confidence = categorize_by_keywords(
                    source_meta['term'],
                    target,
                    source_meta['definition'],
                    target_meta['definition']
                )

                # Choose direction
                direction = choose_canonical_direction(source_meta['term'], target, category)

                relationships.append({
                    'source': source_meta['term'],
                    'target': target,
                    'source_file': source_meta['file'],
                    'source_domain': source_meta['domain'],
                    'target_domain': target_meta['domain'],
                    'category': category,
                    'confidence': confidence,
                    'direction': direction,
                    'suggested_property': SEMANTIC_PATTERNS.get(category, {}).get('property', 'related-concept'),
                    'suggested_inverse': SEMANTIC_PATTERNS.get(category, {}).get('inverse', 'inverse-related-concept')
                })

    return relationships

def generate_replacement_plan(relationships):
    """Generate concrete replacement plan."""
    plan = {
        'remove': defaultdict(lambda: defaultdict(list)),  # file -> {term -> [targets to remove]}
        'add': defaultdict(lambda: defaultdict(lambda: defaultdict(list))),  # file -> {property -> {term -> [targets]}}
        'statistics': defaultdict(int)
    }

    # Group by source file
    by_source = defaultdict(list)
    for rel in relationships:
        by_source[rel['source_file']].append(rel)

    for source_file, rels in by_source.items():
        for rel in rels:
            # Always remove related-to
            plan['remove'][source_file][rel['source']].append(rel['target'])

            # Add specific property based on direction
            if rel['direction'] == 'forward':
                # Keep in source file with new property
                new_prop = rel['suggested_property']
                plan['add'][source_file][new_prop][rel['source']].append(rel['target'])
            # If reverse, the inverse relationship will be added when processing the other file

            plan['statistics'][rel['category']] += 1

    return plan

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Categorize related-to relationships')
    parser.add_argument('--pages-dir', default='logseq/pages',
                        help='Directory containing markdown files')
    parser.add_argument('--output', default='tools/validation/related-to-replacement-plan.json',
                        help='Output JSON file')

    args = parser.parse_args()

    print("="*70)
    print("RELATED-TO SEMANTIC CATEGORIZATION")
    print("="*70)
    print()

    relationships = extract_all_related_to(args.pages_dir)

    print(f"\nFound {len(relationships)} related-to relationships")
    print()

    # Categorize
    by_category = defaultdict(list)
    for rel in relationships:
        by_category[rel['category']].append(rel)

    print("CATEGORIZATION RESULTS")
    print("-"*70)
    for category in sorted(by_category.keys()):
        count = len(by_category[category])
        pct = (count / len(relationships) * 100)
        config = SEMANTIC_PATTERNS.get(category, {})
        suggested_prop = config.get('property', 'related-concept')
        print(f"{category:20} {count:4} ({pct:5.1f}%)  →  {suggested_prop}")

    # Generate replacement plan
    print("\nGenerating replacement plan...")
    plan = generate_replacement_plan(relationships)

    # Statistics
    print("\nREPLACEMENT STATISTICS")
    print("-"*70)
    for category, count in sorted(plan['statistics'].items(), key=lambda x: x[1], reverse=True):
        print(f"{category:20} {count:4} relationships")

    files_affected = len(plan['remove'])
    print(f"\nFiles to modify: {files_affected}")

    # Save plan
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, 'w') as f:
        json.dump({
            'relationships': relationships,
            'replacement_plan': {
                'remove': {k: dict(v) for k, v in plan['remove'].items()},
                'add': {
                    file: {
                        prop: dict(targets)
                        for prop, targets in props.items()
                    }
                    for file, props in plan['add'].items()
                },
                'statistics': dict(plan['statistics'])
            }
        }, f, indent=2)

    print(f"\n✓ Replacement plan saved to: {output_path}")
    print()
    print("="*70)
    print("NEXT STEP:")
    print("  Review the replacement plan, then run:")
    print("  python3 tools/validation/apply_related_to_replacement.py")
    print("="*70)

if __name__ == '__main__':
    main()
