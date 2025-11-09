#!/usr/bin/env python3
"""
Convert blockchain ontology to Neo4j Cypher format.
Creates property graph with nodes for classes and relationships for properties.
"""

import os
import xml.etree.ElementTree as ET

def sanitize_label(label):
    """Sanitize label for Neo4j."""
    if not label:
        return ""
    # Remove special characters
    return label.replace('"', '\\"').replace("'", "\\'").replace('\n', ' ')

def parse_owl_file(owl_file):
    """Parse OWL file and extract classes and properties."""
    tree = ET.parse(owl_file)
    root = tree.getroot()

    ns = {
        'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'owl': 'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'bc': 'http://metaverse-ontology.org/blockchain#'
    }

    classes = []
    relationships = []
    properties = []

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
                'concept_id': ''
            }

            parent_class = None

            for child in elem:
                child_tag = child.tag.split('}')[-1]

                if child_tag == 'label':
                    class_data['label'] = child.text.strip() if child.text else ''
                elif child_tag == 'comment':
                    class_data['comment'] = child.text.strip() if child.text else ''
                elif child_tag == 'subClassOf':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    if resource and '#' in resource:
                        parent_class = resource.split('#')[1]
                elif child_tag == 'hasPriority':
                    class_data['priority'] = child.text.strip() if child.text else ''
                elif child_tag == 'hasComplexity':
                    class_data['complexity'] = child.text.strip() if child.text else ''
                elif child_tag == 'hasConceptID':
                    class_data['concept_id'] = child.text.strip() if child.text else ''

            classes.append(class_data)

            if parent_class:
                relationships.append({
                    'from': class_id,
                    'to': parent_class,
                    'type': 'SUB_CLASS_OF'
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
                'range': ''
            }

            for child in elem:
                child_tag = child.tag.split('}')[-1]

                if child_tag == 'label':
                    prop_data['label'] = child.text.strip() if child.text else ''
                elif child_tag == 'comment':
                    prop_data['comment'] = child.text.strip() if child.text else ''
                elif child_tag == 'domain':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    if resource and '#' in resource:
                        prop_data['domain'] = resource.split('#')[1]
                elif child_tag == 'range':
                    resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource', '')
                    if resource and '#' in resource:
                        prop_data['range'] = resource.split('#')[1]

            properties.append(prop_data)

    return classes, relationships, properties

def write_cypher_file(classes, relationships, properties, output_file):
    """Write Cypher queries to file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("// Blockchain Ontology - Neo4j Cypher Import Script\n")
        f.write("// Auto-generated property graph representation\n")
        f.write("// Usage: cypher-shell -u neo4j -p [password] < blockchain-ontology-graph.cypher\n\n")

        # Create indexes
        f.write("// Create indexes for performance\n")
        f.write("CREATE INDEX class_id IF NOT EXISTS FOR (c:Class) ON (c.id);\n")
        f.write("CREATE INDEX class_concept_id IF NOT EXISTS FOR (c:Class) ON (c.concept_id);\n")
        f.write("CREATE INDEX property_id IF NOT EXISTS FOR (p:Property) ON (p.id);\n\n")

        # Create class nodes
        f.write("// Create class nodes\n")
        for cls in classes:
            label = sanitize_label(cls['label'])
            comment = sanitize_label(cls['comment'])

            f.write(f"CREATE (c{cls['id']}:Class {{\n")
            f.write(f"  id: '{cls['id']}',\n")
            f.write(f"  uri: '{cls['uri']}',\n")
            f.write(f"  label: '{label}',\n")
            f.write(f"  comment: '{comment}',\n")
            if cls['priority']:
                f.write(f"  priority: {cls['priority']},\n")
            if cls['complexity']:
                f.write(f"  complexity: '{cls['complexity']}',\n")
            if cls['concept_id']:
                f.write(f"  concept_id: '{cls['concept_id']}'\n")
            else:
                f.write("  concept_id: ''\n")
            f.write("});\n")

        f.write("\n// Create property nodes\n")
        for prop in properties:
            label = sanitize_label(prop['label'])
            comment = sanitize_label(prop['comment'])

            f.write(f"CREATE (p{prop['id']}:Property {{\n")
            f.write(f"  id: '{prop['id']}',\n")
            f.write(f"  uri: '{prop['uri']}',\n")
            f.write(f"  type: '{prop['type']}',\n")
            f.write(f"  label: '{label}',\n")
            f.write(f"  comment: '{comment}'\n")
            f.write("});\n")

        # Create relationships
        f.write("\n// Create class hierarchy relationships\n")
        for rel in relationships:
            f.write(f"MATCH (child:Class {{id: '{rel['from']}'}}), ")
            f.write(f"(parent:Class {{id: '{rel['to']}'}})\n")
            f.write(f"CREATE (child)-[:{rel['type']}]->(parent);\n")

        # Create domain/range relationships for properties
        f.write("\n// Create property domain/range relationships\n")
        for prop in properties:
            if prop['domain']:
                f.write(f"MATCH (p:Property {{id: '{prop['id']}'}}), ")
                f.write(f"(c:Class {{id: '{prop['domain']}'}})\n")
                f.write("CREATE (p)-[:HAS_DOMAIN]->(c);\n")

            if prop['range']:
                f.write(f"MATCH (p:Property {{id: '{prop['id']}'}}), ")
                f.write(f"(c:Class {{id: '{prop['range']}'}})\n")
                f.write("CREATE (p)-[:HAS_RANGE]->(c);\n")

        # Add useful queries
        f.write("\n// Useful queries\n")
        f.write("// Count all classes:\n")
        f.write("// MATCH (c:Class) RETURN count(c);\n\n")
        f.write("// Find top-level classes (no parent):\n")
        f.write("// MATCH (c:Class) WHERE NOT (c)-[:SUB_CLASS_OF]->() RETURN c;\n\n")
        f.write("// Find class hierarchy:\n")
        f.write("// MATCH path = (c:Class)-[:SUB_CLASS_OF*]->(parent:Class) RETURN path;\n\n")
        f.write("// Find properties for a class:\n")
        f.write("// MATCH (c:Class {id: 'SmartContract'})<-[:HAS_DOMAIN]-(p:Property) RETURN p;\n")

def main():
    """Main execution function."""
    print("=" * 80)
    print("OWL to Neo4j Cypher Conversion")
    print("=" * 80)

    input_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-unified.owl'
    output_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-graph.cypher'

    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return

    print(f"Reading: {input_file}")

    # Parse OWL file
    classes, relationships, properties = parse_owl_file(input_file)
    print(f"Found {len(classes)} classes, {len(relationships)} relationships, {len(properties)} properties")

    # Write Cypher file
    write_cypher_file(classes, relationships, properties, output_file)

    print(f"\nCypher file saved: {output_file}")
    print(f"File size: {os.path.getsize(output_file) / 1024:.2f} KB")
    print("\nImport with: cypher-shell -u neo4j -p [password] < blockchain-ontology-graph.cypher")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
