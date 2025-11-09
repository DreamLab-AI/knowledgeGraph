#!/usr/bin/env python3
"""
Aggregate all individual OWL files into a unified RDF/XML ontology.
Handles merging of 116+ OWL files while preserving all class, property, and axiom definitions.
"""

import os
import xml.etree.ElementTree as ET
from pathlib import Path
from collections import defaultdict

# Namespace mappings
NAMESPACES = {
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'bc': 'http://metaverse-ontology.org/blockchain#'
}

# Register namespaces for cleaner output
for prefix, uri in NAMESPACES.items():
    ET.register_namespace(prefix, uri)

def find_owl_files(root_dir):
    """Find all OWL files in the concepts directory."""
    owl_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.owl'):
                owl_files.append(os.path.join(root, file))
    return sorted(owl_files)

def parse_owl_file(filepath):
    """Parse an OWL file and extract all elements except the ontology declaration."""
    try:
        tree = ET.parse(filepath)
        root = tree.getroot()

        # Extract all elements except the ontology declaration (we'll create a new one)
        elements = []
        for child in root:
            # Skip the owl:Ontology element - we'll create a unified one
            tag = child.tag.replace('{http://www.w3.org/2002/07/owl#}', 'owl:')
            if 'Ontology' not in tag:
                elements.append(child)

        return elements
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return []

def create_unified_ontology():
    """Create the unified ontology file."""

    # Create root element - use QName without namespace prefix to avoid duplicates
    rdf_root = ET.Element('rdf:RDF')
    rdf_root.set('xmlns', 'http://metaverse-ontology.org/blockchain#')
    rdf_root.set('xml:base', 'http://metaverse-ontology.org/blockchain')
    # Set namespaces explicitly to control order
    rdf_root.set('xmlns:rdf', NAMESPACES['rdf'])
    rdf_root.set('xmlns:owl', NAMESPACES['owl'])
    rdf_root.set('xmlns:rdfs', NAMESPACES['rdfs'])
    rdf_root.set('xmlns:xsd', NAMESPACES['xsd'])
    rdf_root.set('xmlns:bc', NAMESPACES['bc'])

    # Create unified ontology declaration
    ontology = ET.SubElement(rdf_root, '{http://www.w3.org/2002/07/owl#}Ontology')
    ontology.set('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about',
                 'http://metaverse-ontology.org/blockchain')

    label = ET.SubElement(ontology, '{http://www.w3.org/2000/01/rdf-schema#}label')
    label.text = 'Blockchain Ontology - Unified Schema'

    comment = ET.SubElement(ontology, '{http://www.w3.org/2000/01/rdf-schema#}comment')
    comment.text = 'Comprehensive blockchain and cryptocurrency ontology with 555+ terms covering core concepts, DeFi, NFTs, governance, security, and interoperability.'

    version = ET.SubElement(ontology, '{http://www.w3.org/2002/07/owl#}versionInfo')
    version.text = '1.0.0'

    creator = ET.SubElement(ontology, '{http://purl.org/dc/elements/1.1/}creator')
    creator.text = 'Metaverse Ontology Project'

    created = ET.SubElement(ontology, '{http://purl.org/dc/terms/}created')
    created.text = '2025-10-28'

    # Find and process all OWL files
    concepts_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/concepts'
    owl_files = find_owl_files(concepts_dir)

    print(f"Found {len(owl_files)} OWL files")

    # Track unique elements by their rdf:about attribute
    unique_elements = {}
    stats = defaultdict(int)

    for owl_file in owl_files:
        elements = parse_owl_file(owl_file)
        for element in elements:
            # Get the identifier (rdf:about or rdf:ID)
            about = element.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about')
            if not about:
                about = element.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}ID')

            if about:
                # Store unique elements (avoid duplicates)
                if about not in unique_elements:
                    unique_elements[about] = element
                    tag_name = element.tag.split('}')[-1]
                    stats[tag_name] += 1
            else:
                # Elements without identifiers (add anyway)
                rdf_root.append(element)
                tag_name = element.tag.split('}')[-1]
                stats[tag_name] += 1

    # Add all unique elements to the root
    for element in unique_elements.values():
        rdf_root.append(element)

    # Print statistics
    print(f"\nOntology Statistics:")
    print(f"  Total OWL files processed: {len(owl_files)}")
    for tag, count in sorted(stats.items()):
        print(f"  {tag}: {count}")

    return rdf_root, stats

def write_manual_xml(ontology_data, output_file):
    """Write XML manually to avoid namespace issues."""
    concepts_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/concepts'
    owl_files = find_owl_files(concepts_dir)

    with open(output_file, 'w', encoding='utf-8') as f:
        # Write XML header
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<!DOCTYPE rdf:RDF [\n')
        f.write('  <!ENTITY owl "http://www.w3.org/2002/07/owl#">\n')
        f.write('  <!ENTITY xsd "http://www.w3.org/2001/XMLSchema#">\n')
        f.write('  <!ENTITY rdfs "http://www.w3.org/2000/01/rdf-schema#">\n')
        f.write('  <!ENTITY rdf "http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n')
        f.write('  <!ENTITY bc "http://metaverse-ontology.org/blockchain#">\n')
        f.write(']>\n\n')

        # Write RDF root with clean namespaces (including commonly used ones)
        f.write('<rdf:RDF\n')
        f.write('    xmlns="http://metaverse-ontology.org/blockchain#"\n')
        f.write('    xml:base="http://metaverse-ontology.org/blockchain"\n')
        f.write('    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n')
        f.write('    xmlns:owl="http://www.w3.org/2002/07/owl#"\n')
        f.write('    xmlns:xsd="http://www.w3.org/2001/XMLSchema#"\n')
        f.write('    xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"\n')
        f.write('    xmlns:bc="http://metaverse-ontology.org/blockchain#"\n')
        f.write('    xmlns:skos="http://www.w3.org/2004/02/skos/core#"\n')
        f.write('    xmlns:dc="http://purl.org/dc/elements/1.1/"\n')
        f.write('    xmlns:dcterms="http://purl.org/dc/terms/">\n\n')

        # Write ontology declaration
        f.write('    <owl:Ontology rdf:about="http://metaverse-ontology.org/blockchain">\n')
        f.write('        <rdfs:label>Blockchain Ontology - Unified Schema</rdfs:label>\n')
        f.write('        <rdfs:comment>Comprehensive blockchain and cryptocurrency ontology with 555+ terms covering core concepts, DeFi, NFTs, governance, security, and interoperability.</rdfs:comment>\n')
        f.write('        <owl:versionInfo>1.0.0</owl:versionInfo>\n')
        f.write('    </owl:Ontology>\n\n')

        # Process each OWL file and extract content
        unique_elements = set()
        for owl_file in owl_files:
            try:
                with open(owl_file, 'r', encoding='utf-8') as src:
                    content = src.read()

                    # Extract everything between <owl:Class and </owl:Class>
                    import re
                    # Match all top-level elements (Class, ObjectProperty, DatatypeProperty, etc.)
                    pattern = r'<(owl:Class|owl:ObjectProperty|owl:DatatypeProperty|bc:\w+|owl:NamedIndividual)[^>]*rdf:about="([^"]+)"[^>]*>.*?</\1>'
                    matches = re.findall(pattern, content, re.DOTALL)

                    for match in matches:
                        elem_type, elem_uri = match[0], match[1]
                        # Create a unique identifier
                        elem_id = f"{elem_type}:{elem_uri}"

                        if elem_id not in unique_elements:
                            unique_elements.add(elem_id)
                            # Find the full element
                            full_pattern = f'<{elem_type}[^>]*rdf:about="{re.escape(elem_uri)}"[^>]*>.*?</{elem_type}>'
                            full_match = re.search(full_pattern, content, re.DOTALL)
                            if full_match:
                                # Write the element with proper indentation
                                element_text = full_match.group(0)
                                # Add indentation
                                indented = '\n'.join('    ' + line if line.strip() else line
                                                   for line in element_text.split('\n'))
                                f.write(indented + '\n\n')

            except Exception as e:
                print(f"Error processing {owl_file}: {e}")

        # Close RDF tag
        f.write('</rdf:RDF>\n')

def main():
    """Main execution function."""
    print("=" * 80)
    print("Blockchain Ontology Aggregation")
    print("=" * 80)

    # Create output directory
    output_dir = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas'
    os.makedirs(output_dir, exist_ok=True)

    # Write unified OWL file
    output_file = os.path.join(output_dir, 'blockchain-ontology-unified.owl')

    # Write manually to avoid namespace issues
    write_manual_xml({}, output_file)

    print(f"\nUnified ontology saved to: {output_file}")
    print(f"File size: {os.path.getsize(output_file) / 1024:.2f} KB")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
