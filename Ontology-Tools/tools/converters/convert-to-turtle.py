#!/usr/bin/env python3
"""
Convert unified OWL RDF/XML to Turtle (.ttl) format.
Preserves all semantic information while converting to more readable Turtle syntax.
"""

import os
import xml.etree.ElementTree as ET
from pathlib import Path

# Namespace mappings
PREFIXES = {
    'bc': 'http://metaverse-ontology.org/blockchain#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'dc': 'http://purl.org/dc/elements/1.1/',
    'dcterms': 'http://purl.org/dc/terms/',
    'skos': 'http://www.w3.org/2004/02/skos/core#'
}

NAMESPACES = {v: k for k, v in PREFIXES.items()}

def qname(uri):
    """Convert URI to qualified name (prefix:localName)."""
    for ns, prefix in NAMESPACES.items():
        if uri.startswith(ns):
            local = uri[len(ns):]
            return f"{prefix}:{local}"
    # Return full URI in angle brackets if no prefix match
    return f"<{uri}>"

def escape_literal(value):
    """Escape special characters in string literals."""
    if value is None:
        return '""'
    value = str(value)
    value = value.replace('\\', '\\\\')
    value = value.replace('"', '\\"')
    value = value.replace('\n', '\\n')
    value = value.replace('\r', '\\r')
    value = value.replace('\t', '\\t')
    return f'"{value}"'

def format_literal(value, datatype=None, lang=None):
    """Format a literal value with optional datatype or language tag."""
    escaped = escape_literal(value)
    if lang:
        return f'{escaped}@{lang}'
    elif datatype:
        return f'{escaped}^^{qname(datatype)}'
    else:
        return escaped

def extract_rdf_elements(owl_file):
    """Extract all RDF elements from the OWL file."""
    tree = ET.parse(owl_file)
    root = tree.getroot()

    # Parse namespace from root
    ns = {
        'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'owl': 'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
        'bc': 'http://metaverse-ontology.org/blockchain#',
        'dc': 'http://purl.org/dc/elements/1.1/',
        'dcterms': 'http://purl.org/dc/terms/'
    }

    triples = []

    # Process ontology declaration
    ontology_elem = root.find('owl:Ontology', ns)
    if ontology_elem is not None:
        subject = ontology_elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about', '')
        triples.append((subject, 'rdf:type', 'owl:Ontology'))

        for child in ontology_elem:
            tag = child.tag.replace('{http://www.w3.org/2000/01/rdf-schema#}', 'rdfs:')
            tag = tag.replace('{http://www.w3.org/2002/07/owl#}', 'owl:')
            tag = tag.replace('{http://purl.org/dc/elements/1.1/}', 'dc:')
            tag = tag.replace('{http://purl.org/dc/terms/}', 'dcterms:')

            if child.text and child.text.strip():
                lang = child.get('{http://www.w3.org/XML/1998/namespace}lang')
                if lang:
                    triples.append((subject, tag, format_literal(child.text.strip(), lang=lang)))
                else:
                    triples.append((subject, tag, format_literal(child.text.strip())))

    # Process all other elements
    for elem in root:
        tag = elem.tag.split('}')[-1]
        if tag == 'Ontology':
            continue

        subject = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about')
        if not subject:
            subject = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}ID')
            if subject:
                subject = f"http://metaverse-ontology.org/blockchain#{subject}"

        if not subject:
            continue

        # Add rdf:type
        elem_type = elem.tag.replace('{http://www.w3.org/2002/07/owl#}', 'owl:')
        elem_type = elem_type.replace('{http://www.w3.org/2000/01/rdf-schema#}', 'rdfs:')
        elem_type = elem_type.replace('{http://metaverse-ontology.org/blockchain#}', 'bc:')
        triples.append((subject, 'rdf:type', elem_type))

        # Process child elements
        for child in elem:
            predicate = child.tag.replace('{http://www.w3.org/2000/01/rdf-schema#}', 'rdfs:')
            predicate = predicate.replace('{http://www.w3.org/2002/07/owl#}', 'owl:')
            predicate = predicate.replace('{http://metaverse-ontology.org/blockchain#}', 'bc:')

            # Check for resource reference
            resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource')
            if resource:
                triples.append((subject, predicate, qname(resource)))
            elif child.text and child.text.strip():
                # Literal value
                lang = child.get('{http://www.w3.org/XML/1998/namespace}lang')
                datatype = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}datatype')

                if datatype:
                    triples.append((subject, predicate, format_literal(child.text.strip(), datatype=datatype)))
                elif lang:
                    triples.append((subject, predicate, format_literal(child.text.strip(), lang=lang)))
                else:
                    triples.append((subject, predicate, format_literal(child.text.strip())))

    return triples

def group_triples_by_subject(triples):
    """Group triples by subject for more compact Turtle output."""
    from collections import defaultdict
    grouped = defaultdict(list)
    for subject, predicate, obj in triples:
        grouped[subject].append((predicate, obj))
    return grouped

def write_turtle_file(triples, output_file):
    """Write triples to Turtle format."""
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write prefixes
        f.write("# Blockchain Ontology - Turtle Format\n")
        f.write("# Auto-generated from OWL RDF/XML\n\n")

        for prefix, uri in PREFIXES.items():
            f.write(f"@prefix {prefix}: <{uri}> .\n")
        f.write("\n")

        # Group triples by subject
        grouped = group_triples_by_subject(triples)

        # Write grouped triples
        for subject, properties in sorted(grouped.items()):
            f.write(f"{qname(subject)}\n")

            for i, (predicate, obj) in enumerate(properties):
                if i == len(properties) - 1:
                    f.write(f"    {predicate} {obj} .\n")
                else:
                    f.write(f"    {predicate} {obj} ;\n")

            f.write("\n")

def main():
    """Main execution function."""
    print("=" * 80)
    print("OWL to Turtle Conversion")
    print("=" * 80)

    input_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-unified.owl'
    output_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-complete.ttl'

    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return

    print(f"Reading: {input_file}")

    # Extract triples
    triples = extract_rdf_elements(input_file)
    print(f"Extracted {len(triples)} RDF triples")

    # Write Turtle file
    write_turtle_file(triples, output_file)

    print(f"\nTurtle file saved to: {output_file}")
    print(f"File size: {os.path.getsize(output_file) / 1024:.2f} KB")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
