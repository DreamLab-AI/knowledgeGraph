#!/usr/bin/env python3
"""
Convert blockchain ontology to SKOS (Simple Knowledge Organization System) format.
Maps OWL classes to SKOS concepts for use in thesaurus applications.
"""

import os
import xml.etree.ElementTree as ET

PREFIXES = {
    'bc': 'http://metaverse-ontology.org/blockchain#',
    'skos': 'http://www.w3.org/2004/02/skos/core#',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'dcterms': 'http://purl.org/dc/terms/'
}

def qname(prefix, local):
    """Create qualified name."""
    return f"{prefix}:{local}"

def parse_owl_file(owl_file):
    """Parse OWL file and extract classes with hierarchy."""
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

    for elem in root:
        tag = elem.tag.split('}')[-1]

        if tag == 'Class':
            class_uri = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about', '')
            if not class_uri:
                continue

            class_data = {
                'uri': class_uri,
                'label': '',
                'comment': '',
                'parent': '',
                'priority': ''
            }

            # Extract properties
            for child in elem:
                child_tag = child.tag.split('}')[-1]

                if child_tag == 'label':
                    class_data['label'] = child.text.strip() if child.text else ''
                elif child_tag == 'comment':
                    class_data['comment'] = child.text.strip() if child.text else ''
                elif child_tag == 'subClassOf':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    class_data['parent'] = resource
                elif child_tag == 'hasPriority':
                    class_data['priority'] = child.text.strip() if child.text else ''

            classes.append(class_data)

        elif tag in ['ObjectProperty', 'DatatypeProperty']:
            prop_uri = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about', '')
            if not prop_uri:
                continue

            prop_data = {
                'uri': prop_uri,
                'type': tag,
                'label': '',
                'comment': ''
            }

            for child in elem:
                child_tag = child.tag.split('}')[-1]
                if child_tag == 'label':
                    prop_data['label'] = child.text.strip() if child.text else ''
                elif child_tag == 'comment':
                    prop_data['comment'] = child.text.strip() if child.text else ''

            properties.append(prop_data)

    return classes, properties

def write_skos_file(classes, properties, output_file):
    """Write SKOS format file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write header
        f.write("# Blockchain Ontology - SKOS Format\n")
        f.write("# Concept hierarchy for thesaurus applications\n\n")

        # Write prefixes
        for prefix, uri in PREFIXES.items():
            f.write(f"@prefix {prefix}: <{uri}> .\n")
        f.write("\n")

        # Create concept scheme
        f.write("bc:BlockchainConceptScheme\n")
        f.write("    a skos:ConceptScheme ;\n")
        f.write('    dcterms:title "Blockchain Ontology Concept Scheme" ;\n')
        f.write('    dcterms:description "Hierarchical organization of blockchain and cryptocurrency concepts" ;\n')
        f.write('    dcterms:created "2025-10-28" ;\n')
        f.write('    dcterms:creator "Metaverse Ontology Project" .\n\n')

        # Priority-based concept schemes
        for priority in ['1', '2', '3', '4', '5']:
            scheme_uri = f"bc:Priority{priority}ConceptScheme"
            f.write(f"{scheme_uri}\n")
            f.write("    a skos:ConceptScheme ;\n")
            f.write(f'    dcterms:title "Priority {priority} Blockchain Concepts" ;\n')
            f.write(f'    skos:notation "{priority}" .\n\n')

        # Convert classes to SKOS concepts
        for cls in classes:
            uri_parts = cls['uri'].split('#')
            if len(uri_parts) < 2:
                continue

            concept_id = uri_parts[1]

            f.write(f"bc:{concept_id}\n")
            f.write("    a skos:Concept ;\n")
            f.write("    skos:inScheme bc:BlockchainConceptScheme ;\n")

            if cls['label']:
                f.write(f'    skos:prefLabel "{cls["label"]}"@en ;\n')

            if cls['comment']:
                f.write(f'    skos:definition "{cls["comment"]}"@en ;\n')

            # Map subClassOf to broader/narrower relationships
            if cls['parent']:
                parent_parts = cls['parent'].split('#')
                if len(parent_parts) >= 2:
                    parent_id = parent_parts[1]
                    f.write(f"    skos:broader bc:{parent_id} ;\n")

            # Add to priority scheme
            if cls['priority']:
                f.write(f"    skos:inScheme bc:Priority{cls['priority']}ConceptScheme ;\n")

            # Add notation
            f.write(f'    skos:notation "{concept_id}" .\n\n')

        # Add inverse narrower relationships
        f.write("# Inverse narrower relationships\n\n")
        parent_to_children = {}
        for cls in classes:
            if cls['parent']:
                parent_parts = cls['parent'].split('#')
                cls_parts = cls['uri'].split('#')
                if len(parent_parts) >= 2 and len(cls_parts) >= 2:
                    parent_id = parent_parts[1]
                    child_id = cls_parts[1]
                    if parent_id not in parent_to_children:
                        parent_to_children[parent_id] = []
                    parent_to_children[parent_id].append(child_id)

        for parent, children in parent_to_children.items():
            f.write(f"bc:{parent}\n")
            for i, child in enumerate(children):
                if i == len(children) - 1:
                    f.write(f"    skos:narrower bc:{child} .\n")
                else:
                    f.write(f"    skos:narrower bc:{child} ;\n")
            f.write("\n")

        # Map properties to semantic relations
        f.write("# Property mappings as semantic relations\n\n")
        for prop in properties:
            prop_parts = prop['uri'].split('#')
            if len(prop_parts) < 2:
                continue

            prop_id = prop_parts[1]
            f.write(f"bc:{prop_id}\n")
            f.write("    a skos:Concept ;\n")
            f.write("    skos:inScheme bc:BlockchainConceptScheme ;\n")

            if prop['label']:
                f.write(f'    skos:prefLabel "{prop["label"]}"@en ;\n')

            if prop['comment']:
                f.write(f'    skos:definition "{prop["comment"]}"@en ;\n')

            f.write(f'    skos:notation "{prop_id}" .\n\n')

def main():
    """Main execution function."""
    print("=" * 80)
    print("OWL to SKOS Conversion")
    print("=" * 80)

    input_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-unified.owl'
    output_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-complete-skos.ttl'

    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return

    print(f"Reading: {input_file}")

    # Parse OWL file
    classes, properties = parse_owl_file(input_file)
    print(f"Found {len(classes)} classes and {len(properties)} properties")

    # Write SKOS file
    write_skos_file(classes, properties, output_file)

    print(f"\nSKOS file saved: {output_file}")
    print(f"File size: {os.path.getsize(output_file) / 1024:.2f} KB")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
