#!/usr/bin/env python3
"""
Best Practice Turtle OWL Ontology Generator

Addresses critical issues identified in audit:
1. Proper prefix declarations (once at top)
2. Valid, consistent URIs using PascalCase
3. Uncommented, syntactically correct rdfs:subClassOf axioms
4. Unique URIs for each concept
5. Proper namespace strategy
6. Formal property definitions
7. Valid OWL/RDF structure

Extracts from Logseq markdown OntologyBlock headers only.
"""

import re
from pathlib import Path
import argparse
from rdflib import Graph, Namespace, RDF, RDFS, OWL, XSD, URIRef, Literal
from collections import defaultdict
import sys

# Define namespaces with clear separation
DT = Namespace("http://disruption.org/ontology/disruptive-tech#")
AI = Namespace("http://disruption.org/ontology/artificial-intelligence#")
BC = Namespace("http://disruption.org/ontology/blockchain#")
MV = Namespace("http://disruption.org/ontology/metaverse#")
RB = Namespace("http://disruption.org/ontology/robotics#")
DCTERMS = Namespace("http://purl.org/dc/terms/")

def sanitize_uri_fragment(text):
    """
    Convert text to valid PascalCase URI fragment.
    Removes codes, invalid characters, standardizes naming.
    """
    # Remove code patterns like BC-0123, AI-0456
    text = re.sub(r'^[A-Z]{2,}-\d+[-_]?', '', text)

    # Remove invalid characters: (), %, etc.
    text = re.sub(r'[()%\[\]{}]', '', text)

    # Convert to PascalCase
    # Split on spaces, hyphens, underscores
    words = re.split(r'[\s\-_]+', text)
    # Capitalize each word and join
    pascal = ''.join(word.capitalize() for word in words if word)

    # Remove any remaining invalid URI characters
    pascal = re.sub(r'[^a-zA-Z0-9]', '', pascal)

    return pascal

def get_namespace_for_code(code_prefix):
    """Map code prefix to appropriate namespace."""
    mapping = {
        'AI': AI,
        'BC': BC,
        'MV': MV,
        'RB': RB,
        'DT': DT,
    }
    return mapping.get(code_prefix, DT)

def extract_ontology_header(md_content):
    """Extract only the OntologyBlock header, ignore markdown content."""
    match = re.search(
        r'-\s+###\s+OntologyBlock\s*\n(.*?)(?=\n-\s+|\Z)',
        md_content,
        re.DOTALL
    )
    if not match:
        return None

    header_text = match.group(1)
    header_data = {}

    # Extract metadata
    for key in ['term-id', 'preferred-term', 'definition', 'maturity', 'category']:
        pattern = rf'{key}::\s*(.+?)(?=\n\s*[a-z-]+::|$)'
        match = re.search(pattern, header_text, re.IGNORECASE | re.DOTALL)
        if match:
            header_data[key] = match.group(1).strip()

    # Extract OWL functional syntax
    owl_match = re.search(r'```owl\s+(.*?)```', header_text, re.DOTALL)
    if owl_match:
        header_data['owl_axioms'] = owl_match.group(1).strip()

    return header_data

def parse_subclass_axioms(owl_text):
    """Parse SubClassOf axioms from OWL functional syntax."""
    subclass_pattern = r'SubClassOf\s*\(\s*:?(\w+)\s+:?(\w+)\s*\)'
    matches = re.findall(subclass_pattern, owl_text)
    return [(child, parent) for child, parent in matches]

def parse_property_restrictions(owl_text):
    """Parse ObjectSomeValuesFrom and similar restrictions."""
    restrictions = []

    # ObjectSomeValuesFrom(:property :class)
    pattern = r'ObjectSomeValuesFrom\s*\(\s*:(\w+)\s+:(\w+)\s*\)'
    for prop, cls in re.findall(pattern, owl_text):
        restrictions.append(('some', prop, cls))

    # ObjectAllValuesFrom(:property :class)
    pattern = r'ObjectAllValuesFrom\s*\(\s*:(\w+)\s+:(\w+)\s*\)'
    for prop, cls in re.findall(pattern, owl_text):
        restrictions.append(('all', prop, cls))

    return restrictions

def create_ontology_graph(pages_dir):
    """Create RDF graph from markdown files with best practices."""

    g = Graph()

    # Bind namespaces ONCE at top
    g.bind('dt', DT)
    g.bind('ai', AI)
    g.bind('bc', BC)
    g.bind('mv', MV)
    g.bind('rb', RB)
    g.bind('owl', OWL)
    g.bind('rdfs', RDFS)
    g.bind('rdf', RDF)
    g.bind('dcterms', DCTERMS)

    # Track all concepts and properties
    concepts = {}  # Maps sanitized URI to metadata
    properties_used = set()

    # Process all markdown files
    pages = Path(pages_dir)
    md_files = list(pages.glob('*.md'))

    print(f"Processing {len(md_files)} markdown files...", file=sys.stderr)

    for md_file in md_files:
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            header = extract_ontology_header(content)
            if not header:
                continue

            # Extract term ID and determine namespace
            term_id = header.get('term-id', '')
            preferred_term = header.get('preferred-term', md_file.stem)

            # Extract code prefix (e.g., 'BC' from 'BC-0123')
            code_match = re.match(r'([A-Z]{2,})-\d+', term_id)
            ns = get_namespace_for_code(code_match.group(1) if code_match else None)

            # Create clean URI fragment
            uri_fragment = sanitize_uri_fragment(preferred_term)
            concept_uri = ns[uri_fragment]

            # Store metadata
            concepts[concept_uri] = {
                'label': preferred_term,
                'definition': header.get('definition', ''),
                'term_id': term_id,
                'maturity': header.get('maturity', ''),
                'subclasses': [],
                'restrictions': []
            }

            # Parse OWL axioms if present
            if 'owl_axioms' in header:
                owl_text = header['owl_axioms']

                # Extract subclass relationships
                subclasses = parse_subclass_axioms(owl_text)
                for child_name, parent_name in subclasses:
                    parent_uri = sanitize_uri_fragment(parent_name)
                    concepts[concept_uri]['subclasses'].append(ns[parent_uri])

                # Extract property restrictions
                restrictions = parse_property_restrictions(owl_text)
                for restriction in restrictions:
                    concepts[concept_uri]['restrictions'].append(restriction)
                    properties_used.add(restriction[1])  # Track property name

        except Exception as e:
            print(f"Error processing {md_file}: {e}", file=sys.stderr)
            continue

    print(f"Extracted {len(concepts)} concepts", file=sys.stderr)

    # Define ontology metadata
    ontology_uri = URIRef("http://disruption.org/ontology")
    g.add((ontology_uri, RDF.type, OWL.Ontology))
    g.add((ontology_uri, RDFS.label, Literal("Disruptive Technologies Ontology", lang="en")))
    g.add((ontology_uri, DCTERMS.description,
           Literal("Comprehensive ontology covering AI, Blockchain, Metaverse, and Robotics", lang="en")))
    g.add((ontology_uri, OWL.versionInfo, Literal("1.0")))

    # Define all used properties first
    print(f"Defining {len(properties_used)} properties...", file=sys.stderr)
    for prop_name in properties_used:
        prop_uri_fragment = sanitize_uri_fragment(prop_name)
        prop_uri = DT[prop_uri_fragment]

        g.add((prop_uri, RDF.type, OWL.ObjectProperty))
        g.add((prop_uri, RDFS.label, Literal(prop_name, lang="en")))

    # Add standard properties
    for prop_name, label in [
        ('hasPart', 'has part'),
        ('enables', 'enables'),
        ('requires', 'requires'),
        ('implements', 'implements'),
        ('uses', 'uses')
    ]:
        prop_uri = DT[prop_name]
        g.add((prop_uri, RDF.type, OWL.ObjectProperty))
        g.add((prop_uri, RDFS.label, Literal(label, lang="en")))

    # Now define all classes with proper axioms
    for concept_uri, metadata in concepts.items():
        # Declare as OWL Class
        g.add((concept_uri, RDF.type, OWL.Class))

        # Add label
        g.add((concept_uri, RDFS.label, Literal(metadata['label'], lang="en")))

        # Add definition as comment
        if metadata['definition']:
            g.add((concept_uri, RDFS.comment, Literal(metadata['definition'], lang="en")))

        # Add term ID as dcterms:identifier
        if metadata['term_id']:
            g.add((concept_uri, DCTERMS.identifier, Literal(metadata['term_id'])))

        # Add maturity level
        if metadata['maturity']:
            g.add((concept_uri, DT.maturityLevel, Literal(metadata['maturity'])))

        # Add subClassOf relationships - UNCOMMENTED and PROPER SYNTAX
        for parent_uri in metadata['subclasses']:
            g.add((concept_uri, RDFS.subClassOf, parent_uri))

        # Add property restrictions as blank nodes
        for restriction_type, prop_name, target_class_name in metadata['restrictions']:
            prop_uri = DT[sanitize_uri_fragment(prop_name)]
            target_uri = DT[sanitize_uri_fragment(target_class_name)]

            restriction = BNode()
            g.add((restriction, RDF.type, OWL.Restriction))
            g.add((restriction, OWL.onProperty, prop_uri))

            if restriction_type == 'some':
                g.add((restriction, OWL.someValuesFrom, target_uri))
            elif restriction_type == 'all':
                g.add((restriction, OWL.allValuesFrom, target_uri))

            g.add((concept_uri, RDFS.subClassOf, restriction))

    return g

def main():
    parser = argparse.ArgumentParser(
        description='Generate best-practice Turtle OWL ontology from Logseq markdown'
    )
    parser.add_argument('--pages-dir', required=True, help='Logseq pages directory')
    parser.add_argument('--output', required=True, help='Output TTL file')

    args = parser.parse_args()

    # Generate graph
    graph = create_ontology_graph(args.pages_dir)

    # Serialize to Turtle with nice formatting
    print(f"Writing {args.output}...", file=sys.stderr)
    graph.serialize(destination=args.output, format='turtle')

    print(f"✅ Generated best-practice TTL ontology", file=sys.stderr)
    print(f"   Classes: {len(list(graph.subjects(RDF.type, OWL.Class)))}", file=sys.stderr)
    print(f"   Properties: {len(list(graph.subjects(RDF.type, OWL.ObjectProperty)))}", file=sys.stderr)
    print(f"   Triples: {len(graph)}", file=sys.stderr)

if __name__ == '__main__':
    main()
