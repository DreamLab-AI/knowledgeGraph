#!/usr/bin/env python3
"""
Convert blockchain ontology to SQL schema.
Creates relational database schema for ontology storage.
"""

import os
import xml.etree.ElementTree as ET

def sanitize_sql(value):
    """Sanitize string for SQL."""
    if not value:
        return ""
    return value.replace("'", "''").replace('\n', ' ').replace('\r', '')

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
                'priority': None,
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
                    try:
                        class_data['priority'] = int(child.text.strip()) if child.text else None
                    except:
                        class_data['priority'] = None
                elif child_tag == 'hasComplexity':
                    class_data['complexity'] = child.text.strip() if child.text else ''
                elif child_tag == 'hasConceptID':
                    class_data['concept_id'] = child.text.strip() if child.text else ''

            classes.append(class_data)

            if parent_class:
                hierarchies.append({
                    'child': class_id,
                    'parent': parent_class
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

    return classes, properties, hierarchies

def write_sql_schema(classes, properties, hierarchies, output_file):
    """Write SQL schema to file."""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("-- Blockchain Ontology SQL Schema\n")
        f.write("-- Auto-generated relational database schema\n")
        f.write("-- Compatible with PostgreSQL, MySQL, SQLite\n\n")

        # Create tables
        f.write("-- Drop existing tables if they exist\n")
        f.write("DROP TABLE IF EXISTS kg_class_hierarchy CASCADE;\n")
        f.write("DROP TABLE IF EXISTS kg_properties CASCADE;\n")
        f.write("DROP TABLE IF EXISTS kg_classes CASCADE;\n\n")

        # Classes table
        f.write("-- Classes table\n")
        f.write("CREATE TABLE kg_classes (\n")
        f.write("    id VARCHAR(255) PRIMARY KEY,\n")
        f.write("    uri TEXT NOT NULL,\n")
        f.write("    label VARCHAR(500),\n")
        f.write("    comment TEXT,\n")
        f.write("    priority INTEGER,\n")
        f.write("    complexity VARCHAR(50),\n")
        f.write("    concept_id VARCHAR(50),\n")
        f.write("    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n")
        f.write(");\n\n")

        # Properties table
        f.write("-- Properties table\n")
        f.write("CREATE TABLE kg_properties (\n")
        f.write("    id VARCHAR(255) PRIMARY KEY,\n")
        f.write("    uri TEXT NOT NULL,\n")
        f.write("    type VARCHAR(50),\n")
        f.write("    label VARCHAR(500),\n")
        f.write("    comment TEXT,\n")
        f.write("    domain VARCHAR(255),\n")
        f.write("    range VARCHAR(255),\n")
        f.write("    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n")
        f.write("    FOREIGN KEY (domain) REFERENCES kg_classes(id),\n")
        f.write("    FOREIGN KEY (range) REFERENCES kg_classes(id)\n")
        f.write(");\n\n")

        # Hierarchy table
        f.write("-- Class hierarchy table\n")
        f.write("CREATE TABLE kg_class_hierarchy (\n")
        f.write("    id SERIAL PRIMARY KEY,\n")
        f.write("    child_class VARCHAR(255) NOT NULL,\n")
        f.write("    parent_class VARCHAR(255) NOT NULL,\n")
        f.write("    FOREIGN KEY (child_class) REFERENCES kg_classes(id),\n")
        f.write("    FOREIGN KEY (parent_class) REFERENCES kg_classes(id),\n")
        f.write("    UNIQUE(child_class, parent_class)\n")
        f.write(");\n\n")

        # Create indexes
        f.write("-- Create indexes for performance\n")
        f.write("CREATE INDEX idx_class_priority ON kg_classes(priority);\n")
        f.write("CREATE INDEX idx_class_concept_id ON kg_classes(concept_id);\n")
        f.write("CREATE INDEX idx_property_domain ON kg_properties(domain);\n")
        f.write("CREATE INDEX idx_property_range ON kg_properties(range);\n")
        f.write("CREATE INDEX idx_hierarchy_child ON kg_class_hierarchy(child_class);\n")
        f.write("CREATE INDEX idx_hierarchy_parent ON kg_class_hierarchy(parent_class);\n\n")

        # Insert classes
        f.write("-- Insert classes\n")
        for cls in classes:
            label = sanitize_sql(cls['label'])
            comment = sanitize_sql(cls['comment'])
            priority = cls['priority'] if cls['priority'] is not None else 'NULL'

            f.write(f"INSERT INTO kg_classes (id, uri, label, comment, priority, complexity, concept_id)\n")
            f.write(f"VALUES ('{cls['id']}', '{cls['uri']}', '{label}', '{comment}', {priority}, '{cls['complexity']}', '{cls['concept_id']}');\n")

        # Insert properties
        f.write("\n-- Insert properties\n")
        for prop in properties:
            label = sanitize_sql(prop['label'])
            comment = sanitize_sql(prop['comment'])
            domain = f"'{prop['domain']}'" if prop['domain'] else 'NULL'
            range_val = f"'{prop['range']}'" if prop['range'] else 'NULL'

            f.write(f"INSERT INTO kg_properties (id, uri, type, label, comment, domain, range)\n")
            f.write(f"VALUES ('{prop['id']}', '{prop['uri']}', '{prop['type']}', '{label}', '{comment}', {domain}, {range_val});\n")

        # Insert hierarchies
        f.write("\n-- Insert class hierarchies\n")
        for hier in hierarchies:
            f.write(f"INSERT INTO kg_class_hierarchy (child_class, parent_class)\n")
            f.write(f"VALUES ('{hier['child']}', '{hier['parent']}');\n")

        # Add useful views
        f.write("\n-- Create useful views\n")
        f.write("CREATE VIEW v_class_hierarchy AS\n")
        f.write("SELECT \n")
        f.write("    c.id AS class_id,\n")
        f.write("    c.label AS class_label,\n")
        f.write("    p.id AS parent_id,\n")
        f.write("    p.label AS parent_label\n")
        f.write("FROM kg_classes c\n")
        f.write("LEFT JOIN kg_class_hierarchy h ON c.id = h.child_class\n")
        f.write("LEFT JOIN kg_classes p ON h.parent_class = p.id;\n\n")

        f.write("CREATE VIEW v_property_details AS\n")
        f.write("SELECT \n")
        f.write("    p.id AS property_id,\n")
        f.write("    p.label AS property_label,\n")
        f.write("    p.type AS property_type,\n")
        f.write("    d.label AS domain_label,\n")
        f.write("    r.label AS range_label\n")
        f.write("FROM kg_properties p\n")
        f.write("LEFT JOIN kg_classes d ON p.domain = d.id\n")
        f.write("LEFT JOIN kg_classes r ON p.range = r.id;\n\n")

        # Add useful queries as comments
        f.write("-- Useful queries:\n")
        f.write("-- SELECT * FROM kg_classes WHERE priority = 1;\n")
        f.write("-- SELECT * FROM v_class_hierarchy WHERE parent_id = 'DeFiConcept';\n")
        f.write("-- SELECT * FROM v_property_details WHERE domain_label LIKE '%Smart%';\n")

def main():
    """Main execution function."""
    print("=" * 80)
    print("OWL to SQL Schema Conversion")
    print("=" * 80)

    input_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-unified.owl'
    output_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-schema.sql'

    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return

    print(f"Reading: {input_file}")

    # Parse OWL file
    classes, properties, hierarchies = parse_owl_file(input_file)
    print(f"Found {len(classes)} classes, {len(properties)} properties, {len(hierarchies)} hierarchies")

    # Write SQL schema
    write_sql_schema(classes, properties, hierarchies, output_file)

    print(f"\nSQL schema saved: {output_file}")
    print(f"File size: {os.path.getsize(output_file) / 1024:.2f} KB")
    print("\nImport with: psql -d database -f blockchain-ontology-schema.sql")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
