#!/usr/bin/env python3
"""
Convert blockchain ontology to CSV format.
Creates multiple CSV files for classes, properties, hierarchies, and annotations.
"""

import os
import csv
import xml.etree.ElementTree as ET

def sanitize_csv(value):
    """Sanitize value for CSV."""
    if value is None:
        return ""
    return str(value).strip()

def parse_owl_file(owl_file):
    """Parse OWL file and extract all elements."""
    tree = ET.parse(owl_file)
    root = tree.getroot()

    ns = {
        'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'owl': 'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'bc': 'http://metaverse-ontology.org/blockchain#'
    }

    classes = []
    properties = []
    hierarchies = []
    annotations = []

    for elem in root:
        tag = elem.tag.split('}')[-1]

        if tag == 'Class':
            class_uri = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about', '')
            if not class_uri or '#' not in class_uri:
                continue

            class_id = class_uri.split('#')[1]

            class_data = {
                'id': class_id,
                'uri': class_uri,
                'label': '',
                'comment': '',
                'priority': '',
                'complexity': '',
                'concept_id': '',
                'type': 'Class'
            }

            parent_class = None

            for child in elem:
                child_tag = child.tag.split('}')[-1]

                if child_tag == 'label':
                    class_data['label'] = sanitize_csv(child.text)
                    # Add to annotations
                    annotations.append({
                        'subject_id': class_id,
                        'property': 'label',
                        'value': sanitize_csv(child.text),
                        'language': child.get('{http://www.w3.org/XML/1998/namespace}lang', '')
                    })
                elif child_tag == 'comment':
                    class_data['comment'] = sanitize_csv(child.text)
                    annotations.append({
                        'subject_id': class_id,
                        'property': 'comment',
                        'value': sanitize_csv(child.text),
                        'language': child.get('{http://www.w3.org/XML/1998/namespace}lang', '')
                    })
                elif child_tag == 'subClassOf':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    if resource and '#' in resource:
                        parent_class = resource.split('#')[1]
                elif child_tag == 'hasPriority':
                    class_data['priority'] = sanitize_csv(child.text)
                elif child_tag == 'hasComplexity':
                    class_data['complexity'] = sanitize_csv(child.text)
                elif child_tag == 'hasConceptID':
                    class_data['concept_id'] = sanitize_csv(child.text)

            classes.append(class_data)

            if parent_class:
                hierarchies.append({
                    'source_id': class_id,
                    'source_label': class_data['label'],
                    'relationship_type': 'subClassOf',
                    'target_id': parent_class,
                    'target_label': ''  # Will be filled later
                })

        elif tag in ['ObjectProperty', 'DatatypeProperty']:
            prop_uri = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about', '')
            if not prop_uri or '#' not in prop_uri:
                continue

            prop_id = prop_uri.split('#')[1]

            prop_data = {
                'id': prop_id,
                'uri': prop_uri,
                'type': tag,
                'label': '',
                'comment': '',
                'domain': '',
                'range': '',
                'characteristics': ''
            }

            characteristics = []

            for child in elem:
                child_tag = child.tag.split('}')[-1]

                if child_tag == 'label':
                    prop_data['label'] = sanitize_csv(child.text)
                elif child_tag == 'comment':
                    prop_data['comment'] = sanitize_csv(child.text)
                elif child_tag == 'domain':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    if resource and '#' in resource:
                        prop_data['domain'] = resource.split('#')[1]
                elif child_tag == 'range':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    if resource and '#' in resource:
                        prop_data['range'] = resource.split('#')[1]
                elif child_tag in ['FunctionalProperty', 'InverseFunctionalProperty', 'TransitiveProperty', 'SymmetricProperty']:
                    characteristics.append(child_tag)

            prop_data['characteristics'] = ', '.join(characteristics)
            properties.append(prop_data)

    # Fill in target labels for hierarchies
    class_labels = {c['id']: c['label'] for c in classes}
    for hier in hierarchies:
        hier['target_label'] = class_labels.get(hier['target_id'], '')

    return classes, properties, hierarchies, annotations

def write_csv_files(classes, properties, hierarchies, annotations, output_dir):
    """Write CSV files."""
    os.makedirs(output_dir, exist_ok=True)

    # Write classes.csv
    classes_file = os.path.join(output_dir, 'classes.csv')
    with open(classes_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'uri', 'type', 'label', 'comment', 'priority', 'complexity', 'concept_id'])
        writer.writeheader()
        writer.writerows(classes)

    print(f"  classes.csv: {len(classes)} rows")

    # Write properties.csv
    properties_file = os.path.join(output_dir, 'properties.csv')
    with open(properties_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'uri', 'type', 'label', 'comment', 'domain', 'range', 'characteristics'])
        writer.writeheader()
        writer.writerows(properties)

    print(f"  properties.csv: {len(properties)} rows")

    # Write relationships.csv
    relationships_file = os.path.join(output_dir, 'relationships.csv')
    with open(relationships_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['source_id', 'source_label', 'relationship_type', 'target_id', 'target_label'])
        writer.writeheader()
        writer.writerows(hierarchies)

    print(f"  relationships.csv: {len(hierarchies)} rows")

    # Write annotations.csv
    annotations_file = os.path.join(output_dir, 'annotations.csv')
    with open(annotations_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['subject_id', 'property', 'value', 'language'])
        writer.writeheader()
        writer.writerows(annotations)

    print(f"  annotations.csv: {len(annotations)} rows")

    return {
        'classes': len(classes),
        'properties': len(properties),
        'relationships': len(hierarchies),
        'annotations': len(annotations)
    }

def main():
    """Main execution function."""
    print("=" * 80)
    print("OWL to CSV Conversion")
    print("=" * 80)

    input_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-unified.owl'
    output_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/exports'

    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return

    print(f"Reading: {input_file}")

    # Parse OWL file
    classes, properties, hierarchies, annotations = parse_owl_file(input_file)

    # Write CSV files
    print("\nWriting CSV files:")
    stats = write_csv_files(classes, properties, hierarchies, annotations, output_dir)

    print(f"\nCSV files saved to: {output_dir}")
    print(f"Total exports:")
    for key, value in stats.items():
        print(f"  {key}: {value}")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
