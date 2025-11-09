#!/usr/bin/env python3
"""
Simple format converter that creates all output formats from individual OWL files.
Uses text processing to avoid XML parsing issues.
"""

import os
import re
import json
import csv
from pathlib import Path
from collections import defaultdict

def find_owl_files(root_dir):
    """Find all OWL files."""
    files = []
    for root, dirs, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.owl'):
                files.append(os.path.join(root, filename))
    return sorted(files)

def extract_class_info(content):
    """Extract class information from OWL content."""
    classes = []

    # Extract owl:Class elements
    class_pattern = r'<owl:Class\s+rdf:about="([^"]+)"[^>]*>(.*?)</owl:Class>'
    matches = re.findall(class_pattern, content, re.DOTALL)

    for uri, class_content in matches:
        class_data = {
            'uri': uri,
            'label': '',
            'comment': '',
            'parent': '',
            'priority': '',
            'complexity': '',
            'concept_id': ''
        }

        # Extract label
        label_match = re.search(r'<rdfs:label[^>]*>([^<]+)</rdfs:label>', class_content)
        if label_match:
            class_data['label'] = label_match.group(1).strip()

        # Extract comment
        comment_match = re.search(r'<rdfs:comment[^>]*>([^<]+)</rdfs:comment>', class_content)
        if comment_match:
            class_data['comment'] = comment_match.group(1).strip()

        # Extract parent class
        parent_match = re.search(r'<rdfs:subClassOf\s+rdf:resource="([^"]+)"', class_content)
        if parent_match:
            class_data['parent'] = parent_match.group(1)

        # Extract custom properties
        priority_match = re.search(r'<bc:hasPriority>([^<]+)</bc:hasPriority>', class_content)
        if priority_match:
            class_data['priority'] = priority_match.group(1).strip()

        complexity_match = re.search(r'<bc:hasComplexity>([^<]+)</bc:hasComplexity>', class_content)
        if complexity_match:
            class_data['complexity'] = complexity_match.group(1).strip()

        concept_match = re.search(r'<bc:hasConceptID>([^<]+)</bc:hasConceptID>', class_content)
        if concept_match:
            class_data['concept_id'] = concept_match.group(1).strip()

        classes.append(class_data)

    return classes

def extract_property_info(content):
    """Extract property information."""
    properties = []

    # Object and Datatype properties
    for prop_type in ['ObjectProperty', 'DatatypeProperty']:
        pattern = f'<owl:{prop_type}\\s+rdf:about="([^"]+)"[^>]*>(.*?)</owl:{prop_type}>'
        matches = re.findall(pattern, content, re.DOTALL)

        for uri, prop_content in matches:
            prop_data = {
                'uri': uri,
                'type': prop_type,
                'label': '',
                'comment': '',
                'domain': '',
                'range': ''
            }

            label_match = re.search(r'<rdfs:label[^>]*>([^<]+)</rdfs:label>', prop_content)
            if label_match:
                prop_data['label'] = label_match.group(1).strip()

            comment_match = re.search(r'<rdfs:comment[^>]*>([^<]+)</rdfs:comment>', prop_content)
            if comment_match:
                prop_data['comment'] = comment_match.group(1).strip()

            domain_match = re.search(r'<rdfs:domain\s+rdf:resource="([^"]+)"', prop_content)
            if domain_match:
                prop_data['domain'] = domain_match.group(1)

            range_match = re.search(r'<rdfs:range\s+rdf:resource="([^"]+)"', prop_content)
            if range_match:
                prop_data['range'] = range_match.group(1)

            properties.append(prop_data)

    return properties

def get_local_name(uri):
    """Extract local name from URI."""
    if '#' in uri:
        return uri.split('#')[-1]
    elif '/' in uri:
        return uri.split('/')[-1]
    return uri

def write_turtle_format(classes, properties, output_file):
    """Write Turtle format."""
    with open(output_file, 'w', encoding='utf-8') as f:
        # Prefixes
        f.write("@prefix bc: <http://metaverse-ontology.org/blockchain#> .\n")
        f.write("@prefix owl: <http://www.w3.org/2002/07/owl#> .\n")
        f.write("@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n")
        f.write("@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n")
        f.write("@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\n")

        # Ontology
        f.write("bc: a owl:Ontology ;\n")
        f.write('    rdfs:label "Blockchain Ontology"@en ;\n')
        f.write('    owl:versionInfo "1.0.0" .\n\n')

        # Classes
        for cls in classes:
            local_name = get_local_name(cls['uri'])
            f.write(f"bc:{local_name} a owl:Class")

            if cls['parent']:
                parent_local = get_local_name(cls['parent'])
                f.write(f" ;\n    rdfs:subClassOf bc:{parent_local}")

            if cls['label']:
                f.write(f' ;\n    rdfs:label "{cls["label"]}"@en')

            if cls['comment']:
                comment = cls['comment'].replace('"', '\\"').replace('\n', ' ')
                f.write(f' ;\n    rdfs:comment "{comment}"@en')

            f.write(" .\n\n")

        # Properties
        for prop in properties:
            local_name = get_local_name(prop['uri'])
            prop_class = "owl:ObjectProperty" if prop['type'] == 'ObjectProperty' else "owl:DatatypeProperty"
            f.write(f"bc:{local_name} a {prop_class}")

            if prop['label']:
                f.write(f' ;\n    rdfs:label "{prop["label"]}"@en')

            if prop['domain']:
                domain_local = get_local_name(prop['domain'])
                f.write(f" ;\n    rdfs:domain bc:{domain_local}")

            if prop['range']:
                range_local = get_local_name(prop['range'])
                f.write(f" ;\n    rdfs:range bc:{range_local}")

            f.write(" .\n\n")

def write_jsonld_format(classes, properties, context_file, graph_file):
    """Write JSON-LD format."""
    # Context
    context = {
        "@context": {
            "bc": "http://metaverse-ontology.org/blockchain#",
            "owl": "http://www.w3.org/2002/07/owl#",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        }
    }

    with open(context_file, 'w', encoding='utf-8') as f:
        json.dump(context, f, indent=2)

    # Graph
    graph = []

    for cls in classes:
        obj = {
            "@id": cls['uri'],
            "@type": "owl:Class",
            "rdfs:label": {"@value": cls['label'], "@language": "en"} if cls['label'] else None,
            "rdfs:comment": {"@value": cls['comment'], "@language": "en"} if cls['comment'] else None
        }

        if cls['parent']:
            obj["rdfs:subClassOf"] = {"@id": cls['parent']}

        # Remove None values
        obj = {k: v for k, v in obj.items() if v is not None}
        graph.append(obj)

    jsonld_doc = {
        "@context": context["@context"],
        "@graph": graph
    }

    with open(graph_file, 'w', encoding='utf-8') as f:
        json.dump(jsonld_doc, f, indent=2)

def write_skos_format(classes, properties, output_file):
    """Write SKOS format."""
    with open(output_file, 'w', encoding='utf-8') as f:
        # Prefixes
        f.write("@prefix bc: <http://metaverse-ontology.org/blockchain#> .\n")
        f.write("@prefix skos: <http://www.w3.org/2004/02/skos/core#> .\n")
        f.write("@prefix dcterms: <http://purl.org/dc/terms/> .\n\n")

        # Concept Scheme
        f.write("bc:BlockchainConceptScheme a skos:ConceptScheme ;\n")
        f.write('    dcterms:title "Blockchain Ontology Concept Scheme"@en ;\n')
        f.write('    dcterms:created "2025-10-28" .\n\n')

        # Convert classes to concepts
        for cls in classes:
            local_name = get_local_name(cls['uri'])
            f.write(f"bc:{local_name} a skos:Concept ;\n")
            f.write("    skos:inScheme bc:BlockchainConceptScheme")

            if cls['label']:
                f.write(f' ;\n    skos:prefLabel "{cls["label"]}"@en')

            if cls['comment']:
                comment = cls['comment'].replace('"', '\\"').replace('\n', ' ')
                f.write(f' ;\n    skos:definition "{comment}"@en')

            if cls['parent']:
                parent_local = get_local_name(cls['parent'])
                f.write(f" ;\n    skos:broader bc:{parent_local}")

            f.write(" .\n\n")

def write_cypher_format(classes, properties, output_file):
    """Write Neo4j Cypher format."""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("// Blockchain Ontology - Neo4j Cypher Import\n")
        f.write("// Usage: cypher-shell < blockchain-ontology-graph.cypher\n\n")

        # Create indexes
        f.write("CREATE INDEX class_id IF NOT EXISTS FOR (c:Class) ON (c.id);\n")
        f.write("CREATE INDEX property_id IF NOT EXISTS FOR (p:Property) ON (p.id);\n\n")

        # Create class nodes
        f.write("// Classes\n")
        for cls in classes:
            local_name = get_local_name(cls['uri'])
            label = cls['label'].replace("'", "\\'")
            comment = cls['comment'].replace("'", "\\'").replace('\n', ' ')[:200]

            f.write(f"CREATE (:{local_name}:Class {{")
            f.write(f"id: '{local_name}', ")
            f.write(f"label: '{label}', ")
            f.write(f"comment: '{comment}'")
            if cls['priority']:
                f.write(f", priority: {cls['priority']}")
            f.write("});\n")

        f.write("\n// Relationships\n")
        for cls in classes:
            if cls['parent']:
                child = get_local_name(cls['uri'])
                parent = get_local_name(cls['parent'])
                f.write(f"MATCH (c:Class {{id: '{child}'}}), (p:Class {{id: '{parent}'}})\n")
                f.write("CREATE (c)-[:SUB_CLASS_OF]->(p);\n")

def write_sql_format(classes, properties, output_file):
    """Write SQL schema format."""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("-- Blockchain Ontology SQL Schema\n\n")

        # Create tables
        f.write("DROP TABLE IF EXISTS class_hierarchy CASCADE;\n")
        f.write("DROP TABLE IF EXISTS properties CASCADE;\n")
        f.write("DROP TABLE IF EXISTS classes CASCADE;\n\n")

        f.write("CREATE TABLE classes (\n")
        f.write("    id VARCHAR(255) PRIMARY KEY,\n")
        f.write("    label VARCHAR(500),\n")
        f.write("    comment TEXT,\n")
        f.write("    priority INTEGER,\n")
        f.write("    complexity VARCHAR(50)\n")
        f.write(");\n\n")

        f.write("CREATE TABLE properties (\n")
        f.write("    id VARCHAR(255) PRIMARY KEY,\n")
        f.write("    type VARCHAR(50),\n")
        f.write("    label VARCHAR(500),\n")
        f.write("    domain VARCHAR(255),\n")
        f.write("    range VARCHAR(255)\n")
        f.write(");\n\n")

        f.write("CREATE TABLE class_hierarchy (\n")
        f.write("    child_class VARCHAR(255),\n")
        f.write("    parent_class VARCHAR(255),\n")
        f.write("    FOREIGN KEY (child_class) REFERENCES classes(id),\n")
        f.write("    FOREIGN KEY (parent_class) REFERENCES classes(id)\n")
        f.write(");\n\n")

        # Insert data
        f.write("-- Insert classes\n")
        for cls in classes:
            local_name = get_local_name(cls['uri'])
            label = cls['label'].replace("'", "''")
            comment = cls['comment'].replace("'", "''").replace('\n', ' ')[:500]
            priority = cls['priority'] if cls['priority'] else 'NULL'

            f.write(f"INSERT INTO classes VALUES ('{local_name}', '{label}', '{comment}', {priority}, '{cls['complexity']}');\n")

        f.write("\n-- Insert hierarchies\n")
        for cls in classes:
            if cls['parent']:
                child = get_local_name(cls['uri'])
                parent = get_local_name(cls['parent'])
                f.write(f"INSERT INTO class_hierarchy VALUES ('{child}', '{parent}');\n")

def write_csv_exports(classes, properties, output_dir):
    """Write CSV exports."""
    os.makedirs(output_dir, exist_ok=True)

    # Classes CSV
    with open(os.path.join(output_dir, 'classes.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'uri', 'label', 'comment', 'parent', 'priority', 'complexity', 'concept_id'])
        writer.writeheader()
        for cls in classes:
            writer.writerow({
                'id': get_local_name(cls['uri']),
                'uri': cls['uri'],
                'label': cls['label'],
                'comment': cls['comment'],
                'parent': get_local_name(cls['parent']) if cls['parent'] else '',
                'priority': cls['priority'],
                'complexity': cls['complexity'],
                'concept_id': cls['concept_id']
            })

    # Properties CSV
    with open(os.path.join(output_dir, 'properties.csv'), 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'uri', 'type', 'label', 'comment', 'domain', 'range'])
        writer.writeheader()
        for prop in properties:
            writer.writerow({
                'id': get_local_name(prop['uri']),
                'uri': prop['uri'],
                'type': prop['type'],
                'label': prop['label'],
                'comment': prop['comment'],
                'domain': get_local_name(prop['domain']) if prop['domain'] else '',
                'range': get_local_name(prop['range']) if prop['range'] else ''
            })

def main():
    """Main function."""
    print("="*80)
    print("Simple Format Converter")
    print("="*80)

    concepts_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/concepts'
    schemas_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas'
    exports_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/exports'

    os.makedirs(schemas_dir, exist_ok=True)
    os.makedirs(exports_dir, exist_ok=True)

    # Find all OWL files
    owl_files = find_owl_files(concepts_dir)
    print(f"Found {len(owl_files)} OWL files")

    # Extract all classes and properties
    all_classes = []
    all_properties = []

    for owl_file in owl_files:
        try:
            with open(owl_file, 'r', encoding='utf-8') as f:
                content = f.read()
                all_classes.extend(extract_class_info(content))
                all_properties.extend(extract_property_info(content))
        except Exception as e:
            print(f"Error processing {owl_file}: {e}")

    print(f"Extracted {len(all_classes)} classes and {len(all_properties)} properties")

    # Write Turtle
    print("Writing Turtle format...")
    write_turtle_format(all_classes, all_properties,
                       os.path.join(schemas_dir, 'blockchain-ontology-complete.ttl'))

    # Write JSON-LD
    print("Writing JSON-LD format...")
    write_jsonld_format(all_classes, all_properties,
                       os.path.join(schemas_dir, 'blockchain-ontology-context.jsonld'),
                       os.path.join(schemas_dir, 'blockchain-ontology-complete.jsonld'))

    # Write CSV
    print("Writing CSV exports...")
    write_csv_exports(all_classes, all_properties, exports_dir)

    # Write SKOS
    print("Writing SKOS format...")
    write_skos_format(all_classes, all_properties,
                     os.path.join(schemas_dir, 'blockchain-ontology-complete-skos.ttl'))

    # Write Cypher
    print("Writing Cypher format...")
    write_cypher_format(all_classes, all_properties,
                       os.path.join(schemas_dir, 'blockchain-ontology-graph.cypher'))

    # Write SQL
    print("Writing SQL format...")
    write_sql_format(all_classes, all_properties,
                    os.path.join(schemas_dir, 'blockchain-ontology-schema.sql'))

    print("\n" + "="*80)
    print("Conversion complete!")
    print(f"  Classes: {len(all_classes)}")
    print(f"  Properties: {len(all_properties)}")
    print("="*80)

if __name__ == '__main__':
    main()
