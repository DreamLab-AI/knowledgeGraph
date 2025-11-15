#!/usr/bin/env python3
"""
Convert OWL Functional Syntax to OWL/XML (RDF/XML) format
Properly handles namespaces to avoid duplicates and ensure W3C compliance
"""

import re
import sys
from pathlib import Path
from xml.etree.ElementTree import Element, SubElement, ElementTree, register_namespace


def parse_ofn(content):
    """Parse OWL Functional Syntax file"""

    # Remove comments
    content = re.sub(r'#.*?$', '', content, flags=re.MULTILINE)

    data = {
        'prefixes': {},
        'ontology_uri': None,
        'ontology_version': None,
        'classes': set(),
        'properties': set(),
        'axioms': []
    }

    # Extract prefixes
    prefix_pattern = r'Prefix\(([a-zA-Z0-9_-]+):=<([^>]+)>\)'
    for match in re.finditer(prefix_pattern, content):
        prefix = match.group(1)
        namespace = match.group(2)
        data['prefixes'][prefix] = namespace

    # Extract ontology URI
    ontology_pattern = r'Ontology\(<([^>]+)>\s+<([^>]+)'
    match = re.search(ontology_pattern, content)
    if match:
        data['ontology_uri'] = match.group(1)
        data['ontology_version'] = match.group(2)

    # Extract class declarations
    class_pattern = r'Declaration\(Class\(([a-zA-Z0-9_:]+)\)\)\)'
    data['classes'].update(re.findall(class_pattern, content))

    # Extract property declarations
    obj_prop_pattern = r'Declaration\(ObjectProperty\(([a-zA-Z0-9_:]+)\)\)'
    data['properties'].update(re.findall(obj_prop_pattern, content))

    data_prop_pattern = r'Declaration\(DataProperty\(([a-zA-Z0-9_:]+)\)\)'
    data['properties'].update(re.findall(data_prop_pattern, content))

    return data


def create_owl_xml(data):
    """Create OWL/XML RDF document with proper namespace handling"""

    # Define standard namespaces
    standard_namespaces = {
        'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'owl': 'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
    }

    # Register all namespaces BEFORE creating elements
    # This prevents ElementTree from auto-generating ns0, ns1, etc.
    for prefix, uri in standard_namespaces.items():
        register_namespace(prefix, uri)

    # Register custom namespaces from OFN
    for prefix, ns_uri in data['prefixes'].items():
        if prefix not in standard_namespaces:
            register_namespace(prefix, ns_uri)

    # Create root RDF element
    rdf_ns = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
    rdf = Element(f'{{{rdf_ns}}}RDF')

    # Note: ElementTree will automatically add namespace declarations
    # when serializing, based on the register_namespace() calls above.
    # We should NOT manually add xmlns attributes to avoid duplicates.

    # Create Ontology element
    if data['ontology_uri']:
        ontology = SubElement(rdf, f'{{{standard_namespaces["owl"]}}}Ontology')
        ontology.set(f'{{{rdf_ns}}}about', data['ontology_uri'])

        # Add version info
        if data['ontology_version']:
            version_info = SubElement(ontology, f'{{{standard_namespaces["owl"]}}}versionInfo')
            version_info.text = data['ontology_version']

        # Add ontology metadata
        label = SubElement(ontology, f'{{{standard_namespaces["rdfs"]}}}label')
        label.text = 'Metaverse Ontology'

    # Add class descriptions
    for cls in sorted(data['classes']):
        class_desc = SubElement(rdf, f'{{{standard_namespaces["owl"]}}}Class')
        class_desc.set(f'{{{rdf_ns}}}about', expand_qname(cls, data['prefixes']))

    # Add property descriptions
    for prop in sorted(data['properties']):
        if ':' in prop:
            prop_desc = SubElement(rdf, f'{{{standard_namespaces["owl"]}}}ObjectProperty')
        else:
            prop_desc = SubElement(rdf, f'{{{standard_namespaces["owl"]}}}DatatypeProperty')
        prop_desc.set(f'{{{rdf_ns}}}about', expand_qname(prop, data['prefixes']))

    return rdf


def expand_qname(qname, prefixes):
    """Expand qualified name to full URI"""
    if ':' in qname:
        prefix, local = qname.split(':', 1)
        if prefix in prefixes:
            return prefixes[prefix] + local
    return qname


def format_xml(elem, level=0):
    """Add pretty-printing to XML"""
    indent = "\n" + level * "  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = indent + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = indent
        for child in elem:
            format_xml(child, level + 1)
        if not child.tail or not child.tail.strip():
            child.tail = indent
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = indent


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 ofn_to_owl_xml.py <input.ofn> [output.owl]")
        sys.exit(1)

    ofn_file = sys.argv[1]
    owl_file = sys.argv[2] if len(sys.argv) > 2 else ofn_file.replace('.ofn', '.owl')

    print(f"Converting {ofn_file} to OWL/XML format...")

    with open(ofn_file, 'r', encoding='utf-8') as f:
        content = f.read()

    data = parse_ofn(content)
    rdf_root = create_owl_xml(data)

    # Format XML for readability
    format_xml(rdf_root)

    # Write to file
    tree = ElementTree(rdf_root)
    output_path = Path(owl_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Add XML declaration
    with open(output_path, 'wb') as f:
        f.write(b'<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write(b'<!DOCTYPE rdf:RDF [<!ENTITY xsd "http://www.w3.org/2001/XMLSchema#">]>\n')
        tree.write(f, encoding='utf-8', xml_declaration=False)

    # Print statistics
    file_size = output_path.stat().st_size / 1024
    print(f"✅ OWL/XML file created successfully!")
    print(f"   Output file: {owl_file}")
    print(f"   Size: {file_size:.1f} KB")
    print(f"   Classes: {len(data['classes'])}")
    print(f"   Properties: {len(data['properties'])}")
    print(f"   Ontology URI: {data['ontology_uri']}")


if __name__ == '__main__':
    main()
