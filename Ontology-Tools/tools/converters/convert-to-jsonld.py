#!/usr/bin/env python3
"""
Convert unified OWL to JSON-LD format.
Creates both context file and graph file for JSON-LD representation.
"""

import os
import json
import xml.etree.ElementTree as ET
from collections import defaultdict

def create_jsonld_context():
    """Create JSON-LD @context with all namespace mappings."""
    return {
        "@context": {
            "bc": "http://metaverse-ontology.org/blockchain#",
            "owl": "http://www.w3.org/2002/07/owl#",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#",
            "dc": "http://purl.org/dc/elements/1.1/",
            "dcterms": "http://purl.org/dc/terms/",
            "skos": "http://www.w3.org/2004/02/skos/core#",

            "Class": "owl:Class",
            "Property": "rdf:Property",
            "ObjectProperty": "owl:ObjectProperty",
            "DatatypeProperty": "owl:DatatypeProperty",

            "label": {"@id": "rdfs:label"},
            "comment": {"@id": "rdfs:comment"},
            "subClassOf": {"@id": "rdfs:subClassOf", "@type": "@id"},
            "domain": {"@id": "rdfs:domain", "@type": "@id"},
            "range": {"@id": "rdfs:range", "@type": "@id"},
            "type": {"@id": "rdf:type", "@type": "@id"}
        }
    }

def parse_owl_to_jsonld(owl_file):
    """Parse OWL file and convert to JSON-LD graph."""
    tree = ET.parse(owl_file)
    root = tree.getroot()

    ns = {
        'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'owl': 'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
        'bc': 'http://metaverse-ontology.org/blockchain#'
    }

    graph = []

    # Process ontology
    ontology_elem = root.find('owl:Ontology', ns)
    if ontology_elem is not None:
        ontology_obj = {
            "@id": ontology_elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about', ''),
            "@type": "owl:Ontology"
        }

        for child in ontology_elem:
            tag = child.tag.split('}')[-1]
            if child.text and child.text.strip():
                lang = child.get('{http://www.w3.org/XML/1998/namespace}lang')
                if lang:
                    ontology_obj[tag] = {"@value": child.text.strip(), "@language": lang}
                else:
                    ontology_obj[tag] = child.text.strip()

        graph.append(ontology_obj)

    # Process all other elements
    for elem in root:
        tag = elem.tag.split('}')[-1]
        if tag == 'Ontology':
            continue

        subject = elem.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about')
        if not subject:
            continue

        obj = {
            "@id": subject,
            "@type": tag
        }

        # Process properties
        for child in elem:
            prop_name = child.tag.split('}')[-1]

            # Check for resource reference
            resource = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}resource')
            if resource:
                if prop_name in obj:
                    if not isinstance(obj[prop_name], list):
                        obj[prop_name] = [obj[prop_name]]
                    obj[prop_name].append({"@id": resource})
                else:
                    obj[prop_name] = {"@id": resource}
            elif child.text and child.text.strip():
                lang = child.get('{http://www.w3.org/XML/1998/namespace}lang')
                datatype = child.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}datatype')

                value_obj = {"@value": child.text.strip()}
                if datatype:
                    value_obj["@type"] = datatype
                elif lang:
                    value_obj["@language"] = lang

                if prop_name in obj:
                    if not isinstance(obj[prop_name], list):
                        obj[prop_name] = [obj[prop_name]]
                    obj[prop_name].append(value_obj)
                else:
                    obj[prop_name] = value_obj

        graph.append(obj)

    return graph

def main():
    """Main execution function."""
    print("=" * 80)
    print("OWL to JSON-LD Conversion")
    print("=" * 80)

    input_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-unified.owl'
    context_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-context.jsonld'
    graph_file = '/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/schemas/blockchain-ontology-complete.jsonld'

    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return

    print(f"Reading: {input_file}")

    # Create context
    context = create_jsonld_context()

    # Write context file
    with open(context_file, 'w', encoding='utf-8') as f:
        json.dump(context, f, indent=2, ensure_ascii=False)
    print(f"Context file saved: {context_file}")

    # Parse and convert to JSON-LD
    graph = parse_owl_to_jsonld(input_file)

    # Create complete JSON-LD document
    jsonld_doc = {
        "@context": context["@context"],
        "@graph": graph
    }

    # Write graph file
    with open(graph_file, 'w', encoding='utf-8') as f:
        json.dump(jsonld_doc, f, indent=2, ensure_ascii=False)

    print(f"\nJSON-LD graph saved: {graph_file}")
    print(f"  Context file size: {os.path.getsize(context_file) / 1024:.2f} KB")
    print(f"  Graph file size: {os.path.getsize(graph_file) / 1024:.2f} KB")
    print(f"  Total elements: {len(graph)}")
    print("\n" + "=" * 80)

if __name__ == '__main__':
    main()
