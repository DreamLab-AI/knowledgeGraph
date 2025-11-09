#!/usr/bin/env python3
"""
Intelligent manual categorization of related-to relationships.
Uses deep semantic analysis of actual file content and ontological structure.
"""

import re
import json
from pathlib import Path
from collections import defaultdict

def read_full_context(file_path):
    """Read full file content for deep analysis."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ""

def extract_metadata(content, filename):
    """Extract comprehensive metadata from file."""
    metadata = {'file': filename}

    # Preferred term
    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    metadata['term'] = match.group(1).strip() if match else filename

    # Domain
    match = re.search(r'source-domain::\s*(.+?)(?:\n|$)', content)
    metadata['domain'] = match.group(1).strip() if match else 'unknown'

    # Definition
    match = re.search(r'definition::\s*(.+?)(?:\n|$)', content)
    metadata['definition'] = match.group(1).strip() if match else ''

    # Term ID
    match = re.search(r'term-id::\s*(.+?)(?:\n|$)', content)
    metadata['term_id'] = match.group(1).strip() if match else ''

    # Extract all existing relationships for context
    metadata['relationships'] = {}
    rel_pattern = r'^\s*-\s+([a-zA-Z][a-zA-Z0-9_-]*)::\s*(.+?)(?:\n|$)'
    for match in re.finditer(rel_pattern, content, re.MULTILINE):
        prop = match.group(1).strip()
        targets = re.findall(r'\[\[([^\]]+)\]\]', match.group(2))
        if targets and prop not in ['ontology', 'term-id', 'preferred-term', 'source-domain',
                                     'status', 'definition', 'maturity', 'source']:
            metadata['relationships'][prop] = targets

    return metadata

def intelligent_categorize(source_meta, target_meta):
    """
    Intelligently determine the correct relationship type based on deep semantic analysis.

    Returns: (property, confidence, reason)
    """
    source_term = source_meta['term'].lower()
    target_term = target_meta['term'].lower()
    source_def = source_meta['definition'].lower()
    target_def = target_meta['definition'].lower()
    source_domain = source_meta['domain']
    target_domain = target_meta['domain']

    # Rule 1: Metrics and Performance Measurements
    metric_keywords = ['metric', 'score', 'measure', 'performance', 'accuracy', 'precision',
                       'recall', 'f1', 'auc', 'roc', 'confusion matrix', 'error', 'loss']

    is_source_metric = any(kw in source_term for kw in metric_keywords)
    is_target_metric = any(kw in target_term for kw in metric_keywords)

    if is_source_metric and not is_target_metric:
        # Metric measures something
        return 'measures', 0.9, f"'{source_meta['term']}' is a metric"
    elif is_target_metric and not is_source_metric:
        # Something is measured by metric
        return 'measured-by', 0.9, f"'{target_meta['term']}' is a metric"
    elif is_source_metric and is_target_metric:
        # Both are metrics, likely related metrics
        return 'related-metric', 0.8, "Both are metrics"

    # Rule 2: Compositional (part-whole) Relationships
    compositional_source = ['system', 'architecture', 'framework', 'platform', 'layer',
                           'stack', 'infrastructure', 'network']
    compositional_target = ['component', 'module', 'element', 'part', 'layer', 'service']

    is_source_whole = any(kw in source_term for kw in compositional_source)
    is_target_part = any(kw in target_term for kw in compositional_target)

    if is_source_whole and is_target_part:
        return 'has-part', 0.85, f"'{source_meta['term']}' contains '{target_meta['term']}'"

    # Rule 3: Technique/Method/Algorithm Relationships
    technique_keywords = ['algorithm', 'method', 'technique', 'approach', 'model',
                         'neural', 'learning', 'network', 'tree', 'forest', 'svm',
                         'regression', 'classification', 'clustering']

    is_source_technique = any(kw in source_term for kw in technique_keywords)
    is_target_technique = any(kw in target_term for kw in technique_keywords)

    if not is_source_technique and is_target_technique:
        # Domain/application uses technique
        return 'uses-technique', 0.85, f"'{source_meta['term']}' uses '{target_meta['term']}'"
    elif is_source_technique and not is_target_technique:
        # Technique applies to domain
        return 'applies-to', 0.80, f"'{source_meta['term']}' applies to '{target_meta['term']}'"

    # Rule 4: Domain/Application Relationships
    domain_keywords = ['ai', 'medical', 'healthcare', 'autonomous', 'robotics', 'vision',
                      'nlp', 'language', 'speech', 'imaging', 'diagnosis']

    is_source_domain = any(kw in source_term for kw in domain_keywords) and 'ai' in source_term
    is_target_domain = any(kw in target_term for kw in domain_keywords) and 'ai' in target_term

    if is_source_domain and is_target_domain:
        # Check if one is more specific
        if len(source_term) > len(target_term):
            return 'specializes', 0.75, f"'{source_meta['term']}' is specialized form"
        else:
            return 'generalizes', 0.75, f"'{target_meta['term']}' is specialized form"

    # Rule 5: Layer/Architecture Relationships
    layers = ['infrastructure', 'hardware', 'compute', 'network', 'application', 'experience']

    source_layer_idx = next((i for i, layer in enumerate(layers) if layer in source_term), None)
    target_layer_idx = next((i for i, layer in enumerate(layers) if layer in target_term), None)

    if source_layer_idx is not None and target_layer_idx is not None:
        if source_layer_idx < target_layer_idx:
            return 'supports', 0.85, f"Lower layer supports higher layer"
        elif source_layer_idx > target_layer_idx:
            return 'depends-on', 0.85, f"Higher layer depends on lower layer"

    # Rule 6: Implementation/Realization
    if 'implementation' in source_term or 'concrete' in source_term:
        return 'implements', 0.80, "Implementation relationship"

    # Rule 7: Provider/Operator/User/Stakeholder Relationships
    stakeholder_keywords = ['provider', 'operator', 'user', 'stakeholder', 'developer']

    is_source_stakeholder = any(kw in source_term for kw in stakeholder_keywords)
    is_target_stakeholder = any(kw in target_term for kw in stakeholder_keywords)

    if is_source_stakeholder or is_target_stakeholder:
        return 'stakeholder-role', 0.75, "Stakeholder relationship"

    # Rule 8: Ethical/Governance Concepts
    ethics_keywords = ['responsible', 'ethical', 'fair', 'transparent', 'accountable',
                      'governance', 'oversight', 'audit', 'compliance', 'regulation']

    is_source_ethics = any(kw in source_term for kw in ethics_keywords)
    is_target_ethics = any(kw in target_term for kw in ethics_keywords)

    if is_source_ethics and is_target_ethics:
        return 'governance-related', 0.80, "Both are governance concepts"

    # Rule 9: Cross-domain bridges
    if source_domain != target_domain and source_domain != 'unknown' and target_domain != 'unknown':
        return 'bridges-domain', 0.70, f"Cross-domain: {source_domain} → {target_domain}"

    # Rule 10: Same-domain associations
    if source_domain == target_domain and source_domain != 'unknown':
        return 'domain-concept', 0.65, f"Same domain: {source_domain}"

    # Default: Generic association
    return 'associated-with', 0.50, "Generic association (unclear semantic relationship)"

def analyze_all_relationships(pages_dir='logseq/pages'):
    """Perform intelligent categorization of all relationships."""

    print("Loading relationship data...")
    with open('tools/validation/related-to-replacement-plan.json', 'r') as f:
        data = json.load(f)

    relationships = data['relationships']

    print(f"Analyzing {len(relationships)} relationships...")
    print()

    # Cache file content
    file_cache = {}

    def get_metadata(term, filename):
        if filename not in file_cache:
            file_path = Path(pages_dir) / f"{filename}.md"
            content = read_full_context(file_path)
            file_cache[filename] = extract_metadata(content, filename)
        return file_cache[filename]

    categorized = []
    category_counts = defaultdict(int)

    for i, rel in enumerate(relationships, 1):
        if i % 100 == 0:
            print(f"  Processed {i}/{len(relationships)}...")

        source_meta = get_metadata(rel['source'], rel['source_file'])

        # Get target metadata
        target_file = rel['source_file']  # Try same file first
        target_meta = {'term': rel['target'], 'domain': 'unknown', 'definition': ''}

        # Try to find target file
        for cached_file, cached_meta in file_cache.items():
            if cached_meta['term'] == rel['target']:
                target_meta = cached_meta
                break

        # If not found, try to load it
        if target_meta['domain'] == 'unknown':
            # Try common filename patterns
            possible_files = [
                rel['target'],
                rel['target'].replace(' ', '-'),
                rel['target'].replace(' ', '_'),
            ]

            for possible in possible_files:
                possible_path = Path(pages_dir) / f"{possible}.md"
                if possible_path.exists():
                    target_meta = get_metadata(rel['target'], possible)
                    break

        # Intelligent categorization
        property_type, confidence, reason = intelligent_categorize(source_meta, target_meta)

        categorized.append({
            **rel,
            'intelligent_property': property_type,
            'confidence': confidence,
            'reason': reason,
            'source_domain': source_meta['domain'],
            'target_domain': target_meta['domain']
        })

        category_counts[property_type] += 1

    return categorized, dict(category_counts)

def main():
    print("="*70)
    print("INTELLIGENT MANUAL CATEGORIZATION")
    print("="*70)
    print()

    categorized, category_counts = analyze_all_relationships()

    print()
    print("="*70)
    print("CATEGORIZATION RESULTS")
    print("="*70)

    total = sum(category_counts.values())

    for category, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True):
        pct = (count / total * 100)
        print(f"{category:25} {count:4} ({pct:5.1f}%)")

    # Save results
    output_file = 'tools/validation/intelligent-categorization.json'
    with open(output_file, 'w') as f:
        json.dump({
            'relationships': categorized,
            'category_counts': category_counts,
            'total': total
        }, f, indent=2)

    print()
    print(f"✓ Intelligent categorization saved to: {output_file}")
    print()
    print("="*70)
    print("NEXT STEP:")
    print("  Review the categorization and generate final replacement plan")
    print("="*70)

if __name__ == '__main__':
    main()
