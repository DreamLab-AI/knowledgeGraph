#!/usr/bin/env python3
"""
Create Filtered WebVOWL Ontology for Visualization
Selects most connected classes to reduce graph size for rendering
"""

import json
import sys
import argparse
from collections import defaultdict
from pathlib import Path


def calculate_connectivity(ontology_data):
    """Calculate connectivity score for each class based on properties"""
    connectivity = defaultdict(int)

    # Count incoming and outgoing properties for each class
    for prop_attr in ontology_data.get('propertyAttribute', []):
        domain = prop_attr.get('domain')
        range_val = prop_attr.get('range')

        if domain and domain.isdigit():
            connectivity[domain] += 1
        if range_val and range_val.isdigit():
            connectivity[range_val] += 1

    return connectivity


def get_domain_prefix(iri):
    """Extract domain prefix from IRI (ai:, bc:, mv:, rb:, dt:)"""
    if not iri:
        return 'unknown'

    if 'artificial-intelligence' in iri:
        return 'ai'
    elif 'blockchain' in iri:
        return 'bc'
    elif 'metaverse' in iri:
        return 'mv'
    elif 'robotics' in iri:
        return 'rb'
    elif 'disruptive-technologies' in iri:
        return 'dt'
    else:
        return 'other'


def create_balanced_selection(ontology_data, max_classes=100):
    """
    Select classes balanced across domains, prioritizing high connectivity
    """
    connectivity = calculate_connectivity(ontology_data)

    # Group classes by domain
    classes_by_domain = defaultdict(list)

    for cls in ontology_data.get('class', []):
        cls_id = cls['id']

        # Find corresponding attribute to get IRI
        attr = next((a for a in ontology_data.get('classAttribute', [])
                    if a['id'] == cls_id), None)

        if attr:
            domain = get_domain_prefix(attr.get('iri', ''))
            score = connectivity.get(cls_id, 0)
            classes_by_domain[domain].append((cls_id, score, attr))

    # Sort each domain by connectivity
    for domain in classes_by_domain:
        classes_by_domain[domain].sort(key=lambda x: x[1], reverse=True)

    # Allocate classes per domain (balanced distribution)
    num_domains = len(classes_by_domain)
    classes_per_domain = max(max_classes // num_domains, 10)  # Minimum 10 per domain

    selected_ids = set()
    selection_info = {}

    for domain, classes in classes_by_domain.items():
        # Take top N from this domain
        domain_selection = classes[:classes_per_domain]
        domain_ids = [cls_id for cls_id, score, attr in domain_selection]
        selected_ids.update(domain_ids)

        selection_info[domain] = {
            'selected': len(domain_selection),
            'total': len(classes),
            'avg_connectivity': sum(score for _, score, _ in domain_selection) / len(domain_selection)
                                if domain_selection else 0
        }

    return selected_ids, selection_info


def create_filtered_ontology(input_json, output_json, max_classes=100, strategy='balanced'):
    """
    Create smaller ontology for visualization

    Strategies:
    - 'balanced': Select equal numbers from each domain
    - 'connectivity': Select most connected classes overall
    - 'mixed': 70% most connected, 30% balanced across domains
    """

    print(f"Loading {input_json}...")
    with open(input_json) as f:
        full = json.load(f)

    print(f"Input ontology: {len(full['class'])} classes, {len(full['property'])} properties")

    # Select classes based on strategy
    if strategy == 'balanced':
        selected_ids, selection_info = create_balanced_selection(full, max_classes)
    elif strategy == 'connectivity':
        connectivity = calculate_connectivity(full)
        class_scores = [(cls['id'], connectivity.get(cls['id'], 0))
                       for cls in full['class']]
        class_scores.sort(key=lambda x: x[1], reverse=True)
        selected_ids = set(cls_id for cls_id, _ in class_scores[:max_classes])
        selection_info = {'strategy': 'connectivity', 'selected': len(selected_ids)}
    else:
        # Mixed strategy: 70% most connected, 30% balanced
        connectivity = calculate_connectivity(full)
        class_scores = [(cls['id'], connectivity.get(cls['id'], 0))
                       for cls in full['class']]
        class_scores.sort(key=lambda x: x[1], reverse=True)

        # Top 70%
        top_count = int(max_classes * 0.7)
        selected_ids = set(cls_id for cls_id, _ in class_scores[:top_count])

        # Balanced 30%
        remaining = max_classes - len(selected_ids)
        balanced_ids, _ = create_balanced_selection(full, remaining)
        selected_ids.update(balanced_ids)

        selection_info = {'strategy': 'mixed', 'selected': len(selected_ids)}

    print(f"\nSelection strategy: {strategy}")
    print(f"Selected {len(selected_ids)} classes")

    if 'ai' in selection_info:
        print("\nDomain distribution:")
        for domain, info in sorted(selection_info.items()):
            print(f"  {domain.upper()}: {info['selected']}/{info['total']} "
                  f"(avg connectivity: {info['avg_connectivity']:.1f})")

    # Filter classes
    filtered_classes = [cls for cls in full['class'] if cls['id'] in selected_ids]
    filtered_class_attrs = [attr for attr in full['classAttribute']
                           if attr['id'] in selected_ids]

    # Filter properties that connect selected classes
    filtered_props = []
    filtered_prop_attrs = []

    for i, prop in enumerate(full.get('property', [])):
        if i >= len(full.get('propertyAttribute', [])):
            continue

        prop_attr = full['propertyAttribute'][i]
        domain = prop_attr.get('domain', '')
        range_val = prop_attr.get('range', '')

        # Keep property if both domain and range are in selected classes
        # OR if it's a SubClassOf relationship within selected classes
        if ((domain in selected_ids and range_val in selected_ids) or
            (prop.get('type') == 'rdfs:SubClassOf' and
             domain in selected_ids and range_val in selected_ids)):
            filtered_props.append(prop)
            filtered_prop_attrs.append(prop_attr)

    # Build filtered ontology
    filtered = {
        "header": {
            "languages": full["header"].get("languages", ["en"]),
            "title": {
                "en": full["header"]["title"]["en"] + " (Filtered View)"
            },
            "description": {
                "en": f"Filtered visualization showing {len(selected_ids)} most "
                      f"connected classes from {len(full['class'])} total classes"
            },
            "version": full["header"].get("version", "1.0")
        },
        "namespace": full["namespace"],
        "class": filtered_classes,
        "classAttribute": filtered_class_attrs,
        "property": filtered_props,
        "propertyAttribute": filtered_prop_attrs
    }

    # Save
    print(f"\nWriting {output_json}...")
    with open(output_json, 'w') as f:
        json.dump(filtered, f, indent=2, ensure_ascii=False)

    # Statistics
    full_size = len(json.dumps(full))
    filtered_size = len(json.dumps(filtered))
    reduction = (1 - filtered_size / full_size) * 100

    print(f"\n✅ Created filtered ontology:")
    print(f"   Classes: {len(full['class'])} → {len(filtered['class'])} "
          f"({len(filtered['class'])/len(full['class'])*100:.1f}%)")
    print(f"   Properties: {len(full['property'])} → {len(filtered['property'])} "
          f"({len(filtered['property'])/len(full['property'])*100:.1f}%)")
    print(f"   File size: {full_size:,} → {filtered_size:,} bytes "
          f"({reduction:.1f}% reduction)")

    return filtered


def main():
    parser = argparse.ArgumentParser(
        description='Create filtered WebVOWL ontology for visualization',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Create balanced 100-class ontology
  %(prog)s --input full.json --output filtered.json --max-classes 100 --strategy balanced

  # Create connectivity-based 150-class ontology
  %(prog)s --input full.json --output filtered.json --max-classes 150 --strategy connectivity

  # Create mixed strategy 200-class ontology
  %(prog)s --input full.json --output filtered.json --max-classes 200 --strategy mixed
        """
    )

    parser.add_argument('--input', required=True,
                       help='Input WebVOWL JSON file (full ontology)')
    parser.add_argument('--output', required=True,
                       help='Output WebVOWL JSON file (filtered ontology)')
    parser.add_argument('--max-classes', type=int, default=100,
                       help='Maximum number of classes to include (default: 100)')
    parser.add_argument('--strategy', choices=['balanced', 'connectivity', 'mixed'],
                       default='balanced',
                       help='Selection strategy (default: balanced)')

    args = parser.parse_args()

    # Validate input file exists
    if not Path(args.input).exists():
        print(f"❌ Error: Input file not found: {args.input}", file=sys.stderr)
        sys.exit(1)

    # Create output directory if needed
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        create_filtered_ontology(
            args.input,
            args.output,
            max_classes=args.max_classes,
            strategy=args.strategy
        )
        print(f"\n✅ Success! Filtered ontology saved to: {args.output}")
    except Exception as e:
        print(f"\n❌ Error creating filtered ontology: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
