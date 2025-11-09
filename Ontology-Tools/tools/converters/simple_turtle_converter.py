#!/usr/bin/env python3
"""
Simple OWL Functional Syntax to Turtle RDF Converter
Minimal, straightforward conversion with no corruption issues
"""

import re
from pathlib import Path
import sys


# Fixed hardcoded namespace declarations for Turtle header
TURTLE_HEADER = """# Metaverse Ontology in Turtle RDF Format
# Generated from OWL Functional Syntax
# Valid Turtle RDF - Ready for Protégé and WebVOWL

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
"""


def extract_custom_prefixes(ofn_content):
    """Extract custom namespace prefixes from OFN and detect used prefixes"""
    custom_prefixes = {}
    declared_prefixes = {}

    # Match Prefix(name:=<uri>)
    prefix_pattern = r'Prefix\(([a-zA-Z0-9_-]+):=<([^>]+)>\)'

    # First pass: extract declared prefixes
    for match in re.finditer(prefix_pattern, ofn_content):
        prefix = match.group(1)
        namespace = match.group(2).strip()

        # Skip standard namespaces
        if prefix not in ['rdf', 'rdfs', 'owl', 'xsd', 'dc', 'dcterms']:
            # Ensure namespace ends with # or /
            if not (namespace.endswith('#') or namespace.endswith('/')):
                if 'ontology' in namespace.lower():
                    namespace += '/'
                else:
                    namespace += '#'

            custom_prefixes[prefix] = namespace
            declared_prefixes[prefix] = namespace

    # Second pass: detect used prefixes in class/property declarations
    # Find all prefixed names like mv:ClassName, metaverse:ClassName, etc.
    used_prefix_pattern = r'([a-zA-Z_][a-zA-Z0-9_-]*):([A-Z][a-zA-Z0-9_]*)'
    standard_prefixes = {'rdf', 'rdfs', 'owl', 'xsd', 'dc', 'dcterms'}

    for match in re.finditer(used_prefix_pattern, ofn_content):
        used_prefix = match.group(1)

        # Skip standard prefixes and already declared custom ones
        if used_prefix not in standard_prefixes and used_prefix not in declared_prefixes:
            # Check if this is a missing prefix (used but not declared)
            if used_prefix not in custom_prefixes:
                # Map undeclared prefixes to mv: namespace
                # This handles the case where metaverse: is used but only mv: is declared
                if 'metaverse' in used_prefix or used_prefix == 'mv':
                    # Use the same namespace as mv: if it exists
                    if 'mv' in custom_prefixes:
                        custom_prefixes[used_prefix] = custom_prefixes['mv']
                    else:
                        # Fallback: create a new one
                        custom_prefixes[used_prefix] = 'https://metaverse-ontology.org/'

    return custom_prefixes


def extract_ontology_elements(ofn_content):
    """Extract ontology elements from OFN"""
    elements = {
        'classes': set(),
        'object_properties': set(),
        'data_properties': set(),
        'subclass_rels': [],
    }

    # Classes
    class_pattern = r'Declaration\(Class\(([a-zA-Z0-9_:]+)\)\)'
    elements['classes'].update(re.findall(class_pattern, ofn_content))

    # Object Properties
    obj_prop_pattern = r'Declaration\(ObjectProperty\(([a-zA-Z0-9_:]+)\)\)'
    elements['object_properties'].update(re.findall(obj_prop_pattern, ofn_content))

    # Data Properties
    data_prop_pattern = r'Declaration\(DataProperty\(([a-zA-Z0-9_:]+)\)\)'
    elements['data_properties'].update(re.findall(data_prop_pattern, ofn_content))

    # SubClassOf relationships
    subclass_pattern = r'SubClassOf\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
    for match in re.finditer(subclass_pattern, ofn_content):
        child = match.group(1)
        parent = match.group(2)
        elements['subclass_rels'].append((child, parent))

    return elements


def generate_turtle(ofn_file):
    """Generate clean Turtle RDF from OFN"""

    with open(ofn_file, 'r', encoding='utf-8') as f:
        ofn_content = f.read()

    # Remove comments
    ofn_content = re.sub(r'#.*?$', '', ofn_content, flags=re.MULTILINE)

    # Extract data
    custom_prefixes = extract_custom_prefixes(ofn_content)
    elements = extract_ontology_elements(ofn_content)

    # Build output
    lines = [TURTLE_HEADER]

    # Add custom prefixes
    if custom_prefixes:
        lines.append("# Custom Namespace Prefixes")
        for prefix, namespace in sorted(custom_prefixes.items()):
            lines.append(f"@prefix {prefix}: <{namespace}> .")
        lines.append("")

    # Ontology metadata
    ontology_match = re.search(r'Ontology\(<([^>]+)>', ofn_content)
    if ontology_match:
        ont_uri = ontology_match.group(1)
        lines.append(f"# Ontology: {ont_uri}")
        lines.append("")

    # Classes
    if elements['classes']:
        lines.append("# === CLASSES ===")
        lines.append("")
        for cls in sorted(elements['classes']):
            lines.append(f"{cls} rdf:type owl:Class .")
        lines.append("")

    # Class hierarchy
    if elements['subclass_rels']:
        lines.append("# === CLASS HIERARCHY ===")
        lines.append("")
        for child, parent in sorted(set(elements['subclass_rels'])):
            lines.append(f"{child} rdfs:subClassOf {parent} .")
        lines.append("")

    # Object Properties
    if elements['object_properties']:
        lines.append("# === OBJECT PROPERTIES ===")
        lines.append("")
        for prop in sorted(elements['object_properties']):
            lines.append(f"{prop} rdf:type owl:ObjectProperty .")
        lines.append("")

    # Data Properties
    if elements['data_properties']:
        lines.append("# === DATA PROPERTIES ===")
        lines.append("")
        for prop in sorted(elements['data_properties']):
            lines.append(f"{prop} rdf:type owl:DatatypeProperty .")
        lines.append("")

    # Statistics
    lines.append("# === ONTOLOGY STATISTICS ===")
    lines.append(f"# Total Classes: {len(elements['classes'])}")
    lines.append(f"# Total Object Properties: {len(elements['object_properties'])}")
    lines.append(f"# Total Data Properties: {len(elements['data_properties'])}")
    lines.append(f"# Total SubClassOf Relationships: {len(elements['subclass_rels'])}")
    lines.append(f"# Standard Namespaces: 6")
    lines.append(f"# Custom Namespaces: {len(custom_prefixes)}")

    return "\n".join(lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 simple_turtle_converter.py <input.ofn> [output.ttl]")
        sys.exit(1)

    ofn_file = sys.argv[1]
    ttl_file = sys.argv[2] if len(sys.argv) > 2 else ofn_file.replace('.ofn', '-simple.ttl')

    print(f"Converting {ofn_file} to Turtle format...")

    ttl_content = generate_turtle(ofn_file)

    output_path = Path(ttl_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write with UTF-8 encoding
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ttl_content)

    # Statistics
    lines = ttl_content.count('\n')
    size_kb = len(ttl_content) / 1024

    print(f"\n✅ Conversion complete!")
    print(f"   Output file: {ttl_file}")
    print(f"   Size: {size_kb:.1f} KB")
    print(f"   Lines: {lines}")

    # Parse to get counts
    classes = len(re.findall(r' rdf:type owl:Class', ttl_content))
    subclass_rels = len(re.findall(r' rdfs:subClassOf ', ttl_content))
    obj_props = len(re.findall(r' rdf:type owl:ObjectProperty', ttl_content))
    data_props = len(re.findall(r' rdf:type owl:DatatypeProperty', ttl_content))

    print(f"   Classes: {classes}")
    print(f"   Object Properties: {obj_props}")
    print(f"   Data Properties: {data_props}")
    print(f"   SubClassOf Relationships: {subclass_rels}")
    print(f"\n📋 Pure Turtle RDF - Ready for Protégé and WebVOWL")


if __name__ == '__main__':
    main()
