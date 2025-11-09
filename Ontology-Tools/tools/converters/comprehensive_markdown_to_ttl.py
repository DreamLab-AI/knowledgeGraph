#!/usr/bin/env python3
"""
Comprehensive Markdown to Turtle Converter with Full OWL Semantics
Extracts ALL OWL axioms including complex restrictions and cross-domain bridges
"""

import re
from pathlib import Path
import argparse
from rdflib import Graph, Namespace, RDF, RDFS, OWL, XSD, URIRef, Literal, BNode
from collections import defaultdict

# Define namespaces
DT = Namespace("http://purl.org/disruptive-tech/bridges#")
META = Namespace("http://purl.org/disruptive-tech/meta#")
AI = Namespace("http://purl.org/ai-ontology#")
AIGO = Namespace("http://purl.org/ai-ontology#")
BC = Namespace("http://purl.org/blockchain-ontology#")
MV = Namespace("http://purl.org/metaverse-ontology#")
RB = Namespace("http://purl.org/robotics-ontology#")

class ComprehensiveOWLConverter:
    def __init__(self):
        self.graph = Graph()
        self.setup_namespaces()
        self.term_map = {}
        self.object_properties = set()
        self.data_properties = set()
        self.stats = defaultdict(int)
        self.stats['object_properties_from_md'] = 0
        self.stats['md_object_some_values'] = 0

    def setup_namespaces(self):
        """Setup RDF namespaces"""
        self.graph.bind('dt', DT)
        self.graph.bind('meta', META)
        self.graph.bind('ai', AI)
        self.graph.bind('aigo', AIGO)
        self.graph.bind('bc', BC)
        self.graph.bind('mv', MV)
        self.graph.bind('rb', RB)
        self.graph.bind('owl', OWL)
        self.graph.bind('rdf', RDF)
        self.graph.bind('rdfs', RDFS)
        self.graph.bind('xsd', XSD)

    def extract_metadata(self, content: str, md_file: Path):
        """Extract metadata from markdown content"""
        metadata = {}

        # Extract term-id
        match = re.search(r'^\s*-\s*term-id::\s*(.+)$', content, re.MULTILINE)
        if match:
            metadata['term_id'] = match.group(1).strip()

        # Extract preferred-term
        match = re.search(r'^\s*-\s*preferred-term::\s*(.+)$', content, re.MULTILINE)
        if match:
            metadata['preferred_term'] = match.group(1).strip()

        # Extract definition
        match = re.search(r'^\s*-\s*definition::\s*(.+)$', content, re.MULTILINE)
        if match:
            metadata['definition'] = match.group(1).strip()

        # Extract domain
        match = re.search(r'^\s*-\s*source-domain::\s*(.+)$', content, re.MULTILINE)
        if match:
            metadata['domain'] = match.group(1).strip()

        return metadata

    def extract_relationships_from_markdown(self, content: str) -> dict:
        """Extracts relationships from the #### Relationships block."""
        relationships = defaultdict(list)
        rel_block_match = re.search(r'-\s*#### Relationships.*?\n(.*?)(?=\n\s*-\s*####|\n\s*- ##|\Z)', content, re.DOTALL | re.IGNORECASE)
        if not rel_block_match:
            return relationships

        rel_content = rel_block_match.group(1)
        rel_lines = rel_content.strip().split('\n')

        for line in rel_lines:
            line = line.strip()
            match = re.match(r'-\s*([\w-]+)::\s*(.*)', line)
            if match:
                prop_name = match.group(1).strip()
                targets_str = match.group(2).strip()
                
                # Extract [[wikilinks]]
                target_matches = re.findall(r'\[\[([^\]]+)\]\]', targets_str)
                targets = [t.strip() for t in target_matches]
                
                if targets:
                    relationships[prop_name].extend(targets)
        
        return relationships

    def term_to_uri(self, term_id, preferred_term=None):
        """Convert term-id to proper URI"""
        # Determine namespace
        if term_id.startswith('AI-'):
            ns = AI
        elif term_id.startswith('BC-'):
            ns = BC
        elif term_id.startswith('MV-'):
            ns = MV
        elif term_id.startswith('rb-') or term_id.startswith('RB-'):
            ns = RB
        else:
            ns = MV  # Default to metaverse for cross-domain

        # Use camelCase of preferred term if available
        if preferred_term:
            camel = self.to_camel_case(preferred_term)
            return ns[camel]
        else:
            return ns[term_id.replace('-', '_')]

    def to_camel_case(self, text):
        """Convert text to CamelCase"""
        words = re.sub(r'[^a-zA-Z0-9\s]', '', text).split()
        if not words:
            return 'Term'
        return ''.join(word.capitalize() for word in words)

    def to_camel_case_prop(self, text: str) -> str:
        """Convert text to camelCase for properties."""
        words = re.sub(r'[^a-zA-Z0-9\s-]', '', text).split('-')
        if not words:
            return 'relatedTo' # a default
        if len(words) == 1:
            return words[0].lower()
        return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

    def resolve_term_from_code(self, term_name):
        """Resolve term name from OWL code to URI"""
        # Remove leading colon
        term_name = term_name.lstrip(':')

        # Check if already mapped
        if term_name in self.term_map:
            return self.term_map[term_name]

        # Infer namespace from patterns
        if any(kw in term_name.lower() for kw in ['blockchain', 'crypto', 'bitcoin', 'mining', 'consensus', 'smart', 'contract', 'dao', 'nft', 'token', 'ledger']):
            return BC[term_name]
        elif any(kw in term_name.lower() for kw in ['robot', 'sensor', 'actuator', 'manipulation', 'gripper', 'arm', 'humanoid']):
            return RB[term_name]
        elif any(kw in term_name.lower() for kw in ['virtual', 'avatar', 'metaverse', 'spatial', 'digital', 'npc']):
            return MV[term_name]
        elif any(kw in term_name.lower() for kw in ['learning', 'neural', 'training', 'model', 'ai', 'algorithm', 'network']):
            return AI[term_name]
        else:
            return MV[term_name]  # Default

    def parse_owl_block(self, owl_code, term_uri):
        """Parse OWL functional syntax and extract ALL axioms"""

        # 1. Extract Class Declaration
        if re.search(r'Declaration\s*\(\s*Class', owl_code):
            self.graph.add((term_uri, RDF.type, OWL.Class))
            self.stats['classes'] += 1

        # 2. Extract rdfs:label
        label_matches = re.finditer(r'rdfs:label\s+:?\w+\s+"([^"]+)"(?:@(\w+))?', owl_code)
        for match in label_matches:
            label_text = match.group(1)
            lang = match.group(2) if match.group(2) else 'en'
            self.graph.add((term_uri, RDFS.label, Literal(label_text, lang=lang)))
            self.stats['labels'] += 1

        # 3. Extract rdfs:comment
        comment_matches = re.finditer(r'rdfs:comment\s+:?\w+\s+"([^"]+)"(?:@(\w+))?', owl_code, re.DOTALL)
        for match in comment_matches:
            comment_text = match.group(1)
            lang = match.group(2) if match.group(2) else 'en'
            self.graph.add((term_uri, RDFS.comment, Literal(comment_text, lang=lang)))
            self.stats['comments'] += 1

        # 4. Extract simple SubClassOf relationships
        simple_subclass = re.finditer(r'SubClassOf\s+:(\w+)\s+:(\w+)\s*\)', owl_code)
        for match in simple_subclass:
            child = self.resolve_term_from_code(match.group(1))
            parent = self.resolve_term_from_code(match.group(2))
            self.graph.add((child, RDFS.subClassOf, parent))
            self.stats['simple_subclass'] += 1

        # 5. Extract ObjectSomeValuesFrom restrictions (CRITICAL!)
        # Pattern: SubClassOf :Term (ObjectSomeValuesFrom :property :value)
        obj_some_pattern = r'SubClassOf\s+:(\w+)\s+\(\s*ObjectSomeValuesFrom\s+:(\w+)\s+:(\w+)\s*\)'
        for match in re.finditer(obj_some_pattern, owl_code):
            subject = self.resolve_term_from_code(match.group(1))
            property_uri = self.resolve_term_from_code(match.group(2))
            object_uri = self.resolve_term_from_code(match.group(3))

            # Create restriction blank node
            restriction = BNode()
            self.graph.add((subject, RDFS.subClassOf, restriction))
            self.graph.add((restriction, RDF.type, OWL.Restriction))
            self.graph.add((restriction, OWL.onProperty, property_uri))
            self.graph.add((restriction, OWL.someValuesFrom, object_uri))

            self.stats['object_some_values'] += 1
            self.object_properties.add(property_uri)

        # 6. Extract ObjectProperty declarations
        obj_prop_decl = re.finditer(r'Declaration\s*\(\s*ObjectProperty\s+:(\w+)\s*\)', owl_code)
        for match in obj_prop_decl:
            prop_uri = self.resolve_term_from_code(match.group(1))
            self.graph.add((prop_uri, RDF.type, OWL.ObjectProperty))
            self.stats['object_properties'] += 1
            self.object_properties.add(prop_uri)

        # 7. Extract DataProperty declarations
        data_prop_decl = re.finditer(r'Declaration\s*\(\s*DataProperty\s+:(\w+)\s*\)', owl_code)
        for match in data_prop_decl:
            prop_uri = self.resolve_term_from_code(match.group(1))
            self.graph.add((prop_uri, RDF.type, OWL.DatatypeProperty))
            self.stats['data_properties'] += 1
            self.data_properties.add(prop_uri)

        # 8. Extract DataPropertyAssertion
        data_prop_assert = re.finditer(r'DataPropertyAssertion\s+:(\w+)\s+:(\w+)\s+"([^"]+)"\^\^xsd:(\w+)', owl_code)
        for match in data_prop_assert:
            prop_uri = self.resolve_term_from_code(match.group(1))
            subject_uri = self.resolve_term_from_code(match.group(2))
            value = match.group(3)
            datatype = match.group(4)

            # Convert value to proper type
            if datatype == 'boolean':
                literal_value = Literal(value.lower() == 'true', datatype=XSD.boolean)
            elif datatype == 'integer':
                literal_value = Literal(int(value), datatype=XSD.integer)
            elif datatype == 'float':
                literal_value = Literal(float(value), datatype=XSD.float)
            else:
                literal_value = Literal(value)

            self.graph.add((subject_uri, prop_uri, literal_value))
            self.stats['data_assertions'] += 1
            self.data_properties.add(prop_uri)

        # 9. Extract ObjectPropertyDomain
        obj_prop_domain = re.finditer(r'ObjectPropertyDomain\s+:(\w+)\s+:(\w+)', owl_code)
        for match in obj_prop_domain:
            prop_uri = self.resolve_term_from_code(match.group(1))
            domain_uri = self.resolve_term_from_code(match.group(2))
            self.graph.add((prop_uri, RDFS.domain, domain_uri))
            self.stats['property_domains'] += 1

        # 10. Extract ObjectPropertyRange
        obj_prop_range = re.finditer(r'ObjectPropertyRange\s+:(\w+)\s+:(\w+)', owl_code)
        for match in obj_prop_range:
            prop_uri = self.resolve_term_from_code(match.group(1))
            range_uri = self.resolve_term_from_code(match.group(2))
            self.graph.add((prop_uri, RDFS.range, range_uri))
            self.stats['property_ranges'] += 1

    def process_markdown_file(self, md_file):
        """Process a single markdown file"""
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        metadata = self.extract_metadata(content, md_file)

        if not metadata.get('term_id'):
            return False

        # Create URI for this term
        term_uri = self.term_to_uri(metadata['term_id'], metadata.get('preferred_term'))

        # Store mapping
        if metadata.get('preferred_term'):
            camel = self.to_camel_case(metadata['preferred_term'])
            self.term_map[camel] = term_uri

        # Add basic triples
        self.graph.add((term_uri, RDF.type, OWL.Class))

        if metadata.get('preferred_term'):
            self.graph.add((term_uri, RDFS.label, Literal(metadata['preferred_term'], lang='en')))

        if metadata.get('definition'):
            self.graph.add((term_uri, RDFS.comment, Literal(metadata['definition'], lang='en')))

        # Extract relationships from markdown
        md_relationships = self.extract_relationships_from_markdown(content)
        for prop_name, targets in md_relationships.items():
            # Create property URI
            prop_camel = self.to_camel_case_prop(prop_name)
            
            # Infer namespace for property, default to mv
            prop_ns = MV
            if prop_name.startswith('dt-'):
                prop_ns = DT
                prop_camel = self.to_camel_case_prop(prop_name.replace('dt-',''))

            prop_uri = prop_ns[prop_camel]

            # Declare property if not already seen
            if prop_uri not in self.object_properties:
                self.graph.add((prop_uri, RDF.type, OWL.ObjectProperty))
                self.graph.add((prop_uri, RDFS.label, Literal(prop_name.replace('-', ' '))))
                self.object_properties.add(prop_uri)
                self.stats['object_properties_from_md'] += 1

            for target_term in targets:
                # Resolve target URI
                target_uri = self.resolve_term_from_code(self.to_camel_case(target_term))

                # Create ObjectSomeValuesFrom restriction
                restriction = BNode()
                self.graph.add((term_uri, RDFS.subClassOf, restriction))
                self.graph.add((restriction, RDF.type, OWL.Restriction))
                self.graph.add((restriction, OWL.onProperty, prop_uri))
                self.graph.add((restriction, OWL.someValuesFrom, target_uri))
                self.stats['md_object_some_values'] += 1

        # Extract and parse OWL blocks
        owl_blocks = re.findall(r'```(?:clojure|owl)\s*\n(.*?)\n```', content, re.DOTALL)

        for owl_code in owl_blocks:
            self.parse_owl_block(owl_code, term_uri)

        return True

    def process_directory(self, pages_dir):
        """Process all markdown files in directory"""
        pages_path = Path(pages_dir)
        md_files = sorted(pages_path.glob('*.md'))

        print(f"Processing {len(md_files)} markdown files...")
        processed = 0

        for md_file in md_files:
            if self.process_markdown_file(md_file):
                processed += 1
                if processed % 100 == 0:
                    print(f"  Processed {processed} files...")

        print(f"✅ Processed {processed} files total")
        return processed

    def add_cross_domain_bridges(self):
        """Add the 200+ cross-domain bridges from generate_unified_ontology.py"""
        print("\nAdding cross-domain bridges...")

        # Import the bridge definitions
        from tools.generators.generate_unified_ontology import CROSS_DOMAIN_BRIDGES

        for bridge in CROSS_DOMAIN_BRIDGES:
            subject_term, predicate_term, object_term, bridge_dir, bridge_type, confidence = bridge

            # Resolve URIs
            subject = self.resolve_term_from_code(subject_term.split(':')[1])
            predicate = self.resolve_term_from_code(predicate_term.split(':')[1])
            obj = self.resolve_term_from_code(object_term.split(':')[1])

            # Add the bridge triple
            self.graph.add((subject, predicate, obj))

            # Add bridge metadata
            bridge_node = BNode()
            self.graph.add((bridge_node, RDF.type, RDF.Statement))
            self.graph.add((bridge_node, RDF.subject, subject))
            self.graph.add((bridge_node, RDF.predicate, predicate))
            self.graph.add((bridge_node, RDF.object, obj))
            self.graph.add((bridge_node, META.crossDomainBridge, Literal(bridge_dir)))
            self.graph.add((bridge_node, META.bridgeType, Literal(bridge_type)))

            # Declare bridge property as ObjectProperty
            self.graph.add((predicate, RDF.type, OWL.ObjectProperty))

            self.stats['bridges'] += 1

        print(f"✅ Added {self.stats['bridges']} cross-domain bridges")

    def save_turtle(self, output_file):
        """Save RDF graph as Turtle"""
        # Add ontology metadata
        ontology_uri = URIRef("http://disruption.org/ontology/metaverse")
        self.graph.add((ontology_uri, RDF.type, OWL.Ontology))
        self.graph.add((ontology_uri, RDFS.label, Literal("Metaverse Unified Ontology", lang='en')))
        self.graph.add((ontology_uri, RDFS.comment, Literal(
            "Comprehensive multi-domain ontology spanning AI, Blockchain, Metaverse, and Robotics with 200+ cross-domain semantic bridges", lang='en')))

        # Serialize to Turtle
        self.graph.serialize(destination=output_file, format='turtle')

        # Get statistics
        triples = len(self.graph)
        classes = len(list(self.graph.subjects(RDF.type, OWL.Class)))
        obj_props = len(self.object_properties)
        data_props = len(self.data_properties)

        print(f"\n✅ Generated Comprehensive Turtle RDF file: {output_file}")
        print(f"\n📊 Extraction Statistics:")
        print(f"   Total Triples: {triples:,}")
        print(f"   Classes: {classes}")
        print(f"   Object Properties (total): {obj_props}")
        print(f"   Data Properties (total): {data_props}")
        print(f"   Simple SubClassOf (from OWL): {self.stats['simple_subclass']}")
        print(f"   ObjectSomeValuesFrom (from OWL): {self.stats['object_some_values']}")
        print(f"   ObjectSomeValuesFrom (from MD): {self.stats['md_object_some_values']}")
        print(f"   DataPropertyAssertions (from OWL): {self.stats['data_assertions']}")
        print(f"   Object Properties (from MD): {self.stats['object_properties_from_md']}")
        print(f"   Cross-Domain Bridges: {self.stats['bridges']}")
        print(f"   Property Domains (from OWL): {self.stats['property_domains']}")
        print(f"   Property Ranges (from OWL): {self.stats['property_ranges']}")

def main():
    parser = argparse.ArgumentParser(
        description='Convert Logseq markdown to comprehensive Turtle RDF with full OWL semantics'
    )
    parser.add_argument(
        '--pages-dir',
        default='logseq/pages',
        help='Directory containing markdown files'
    )
    parser.add_argument(
        '--output',
        default='outputs/metaverse-ontology-comprehensive.ttl',
        help='Output Turtle RDF file'
    )
    parser.add_argument(
        '--include-bridges',
        action='store_true',
        default=True,
        help='Include cross-domain bridges from generate_unified_ontology.py'
    )

    args = parser.parse_args()

    converter = ComprehensiveOWLConverter()
    converter.process_directory(args.pages_dir)

    if args.include_bridges:
        try:
            converter.add_cross_domain_bridges()
        except Exception as e:
            print(f"Warning: Could not add bridges: {e}")
            print("Continuing without bridges...")

    converter.save_turtle(args.output)

if __name__ == '__main__':
    main()
