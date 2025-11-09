#!/usr/bin/env python3
"""
Convert Turtle OWL to WebVOWL JSON format
Pure Python implementation - no Java required
"""

import json
import argparse
from rdflib import Graph, Namespace, RDF, RDFS, OWL
from collections import defaultdict
import sys

def ttl_to_webvowl(ttl_file, output_file):
    """Convert TTL ontology to WebVOWL JSON format"""

    # Load TTL
    g = Graph()
    print(f"Loading {ttl_file}...", file=sys.stderr)
    g.parse(ttl_file, format='turtle')
    print(f"Loaded {len(g)} triples", file=sys.stderr)

    # WebVOWL JSON structure
    vowl = {
        "header": {
            "languages": ["en"],
            "title": {"en": "Narrative Goldmine Ontology"},
            "description": {"en": "Multi-domain ontology with AI, Blockchain, Metaverse, and Robotics"},
            "version": "1.0"
        },
        "namespace": [],
        "class": [],
        "classAttribute": [],
        "property": [],
        "propertyAttribute": []
    }

    # Track nodes and properties
    classes = {}
    properties = {}
    class_id = 0
    prop_id = 0

    # Extract namespaces
    for prefix, ns in g.namespaces():
        vowl["namespace"].append({
            "prefix": prefix,
            "iri": str(ns)
        })

    # Extract classes
    for cls in g.subjects(RDF.type, OWL.Class):
        if isinstance(cls, str) or str(cls).startswith('http'):
            class_id += 1
            label = g.value(cls, RDFS.label)
            comment = g.value(cls, RDFS.comment)

            classes[str(cls)] = class_id

            vowl["class"].append({
                "id": str(class_id),
                "type": "owl:Class"
            })

            # Extract base IRI and fragment
            iri_str = str(cls)
            if '#' in iri_str:
                base_iri, fragment = iri_str.rsplit('#', 1)
            elif '/' in iri_str:
                base_iri, fragment = iri_str.rsplit('/', 1)
            else:
                base_iri = "http://disruption.org/ontology"
                fragment = iri_str

            attrs = {
                "id": str(class_id),
                "iri": iri_str,
                "baseIri": base_iri
            }
            if label:
                attrs["label"] = {"en": str(label)}
            if comment:
                attrs["comment"] = {"en": str(comment)[:200]}  # Truncate long comments

            vowl["classAttribute"].append(attrs)

    print(f"Extracted {len(classes)} classes", file=sys.stderr)

    # Extract object properties
    for prop in g.subjects(RDF.type, OWL.ObjectProperty):
        if isinstance(prop, str) or str(prop).startswith('http'):
            prop_id += 1
            label = g.value(prop, RDFS.label)
            domain = g.value(prop, RDFS.domain)
            range_val = g.value(prop, RDFS.range)

            properties[str(prop)] = prop_id

            prop_data = {
                "id": str(prop_id),
                "type": "owl:objectProperty"
            }

            vowl["property"].append(prop_data)

            # Extract base IRI for property
            prop_iri = str(prop)
            if '#' in prop_iri:
                prop_base, prop_frag = prop_iri.rsplit('#', 1)
            elif '/' in prop_iri:
                prop_base, prop_frag = prop_iri.rsplit('/', 1)
            else:
                prop_base = "http://disruption.org/ontology"
                prop_frag = prop_iri

            attrs = {
                "id": str(prop_id),
                "iri": prop_iri,
                "baseIri": prop_base,
                "attributes": ["object"]
            }

            # Add domain/range to propertyAttribute
            if domain and str(domain) in classes:
                attrs["domain"] = str(classes[str(domain)])
            else:
                attrs["domain"] = "1"  # Default to first class

            if range_val and str(range_val) in classes:
                attrs["range"] = str(classes[str(range_val)])
            else:
                attrs["range"] = "1"  # Default to first class

            if label:
                attrs["label"] = {"en": str(label)}

            vowl["propertyAttribute"].append(attrs)

    # Extract datatype properties
    for prop in g.subjects(RDF.type, OWL.DatatypeProperty):
        if isinstance(prop, str) or str(prop).startswith('http'):
            prop_id += 1
            label = g.value(prop, RDFS.label)
            domain = g.value(prop, RDFS.domain)

            properties[str(prop)] = prop_id

            prop_data = {
                "id": str(prop_id),
                "type": "owl:datatypeProperty"
            }

            vowl["property"].append(prop_data)

            # Extract base IRI for datatype property
            prop_iri = str(prop)
            if '#' in prop_iri:
                prop_base, prop_frag = prop_iri.rsplit('#', 1)
            elif '/' in prop_iri:
                prop_base, prop_frag = prop_iri.rsplit('/', 1)
            else:
                prop_base = "http://disruption.org/ontology"
                prop_frag = prop_iri

            attrs = {
                "id": str(prop_id),
                "iri": prop_iri,
                "baseIri": prop_base,
                "attributes": ["datatype"]
            }

            # Add domain to propertyAttribute
            if domain and str(domain) in classes:
                attrs["domain"] = str(classes[str(domain)])
            else:
                attrs["domain"] = "1"  # Default to first class

            if label:
                attrs["label"] = {"en": str(label)}

            vowl["propertyAttribute"].append(attrs)

    print(f"Extracted {len(properties)} properties", file=sys.stderr)

    # Extract subClassOf relationships - each gets its own property
    for subj, obj in g.subject_objects(RDFS.subClassOf):
        if str(subj) in classes and str(obj) in classes:
            prop_id += 1

            # Add to property array (just id and type)
            vowl["property"].append({
                "id": str(prop_id),
                "type": "rdfs:SubClassOf"
            })

            # Add to propertyAttribute array (with domain/range)
            vowl["propertyAttribute"].append({
                "id": str(prop_id),
                "domain": str(classes[str(subj)]),
                "range": str(classes[str(obj)]),
                "attributes": ["anonymous", "object"]
            })

    # Save JSON
    print(f"Writing {output_file}...", file=sys.stderr)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(vowl, f, indent=2, ensure_ascii=False)

    print(f"✅ Generated WebVOWL JSON:", file=sys.stderr)
    print(f"   Classes: {len(classes)}", file=sys.stderr)
    print(f"   Properties: {len(properties)}", file=sys.stderr)
    print(f"   File size: {len(json.dumps(vowl))} bytes", file=sys.stderr)

def main():
    parser = argparse.ArgumentParser(
        description='Convert Turtle OWL to WebVOWL JSON format'
    )
    parser.add_argument('--input', required=True, help='Input TTL file')
    parser.add_argument('--output', required=True, help='Output JSON file')

    args = parser.parse_args()

    ttl_to_webvowl(args.input, args.output)

if __name__ == '__main__':
    main()
