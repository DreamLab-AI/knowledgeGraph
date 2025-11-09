#!/usr/bin/env python3
"""
Direct Markdown to Turtle Converter using RDFLib
Extracts OWL from Logseq markdown and converts to Turtle format for WebVOWL
"""

import re
from pathlib import Path
import argparse
from rdflib import Graph, Namespace, RDF, RDFS, OWL, XSD, URIRef, Literal
from collections import defaultdict

# Define namespaces
DT = Namespace("http://disruption.org/ontology/disruptive-technologies#")
AI = Namespace("http://disruption.org/ontology/artificial-intelligence#")
BC = Namespace("http://disruption.org/ontology/blockchain#")
MV = Namespace("http://disruption.org/ontology/metaverse#")
RB = Namespace("http://disruption.org/ontology/robotics#")

class MarkdownToTurtleConverter:
    def __init__(self):
        self.graph = Graph()
        self.setup_namespaces()
        self.term_map = {}  # Map term-id to URIRef

    def setup_namespaces(self):
        """Setup RDF namespaces"""
        self.graph.bind('dt', DT)
        self.graph.bind('ai', AI)
        self.graph.bind('bc', BC)
        self.graph.bind('mv', MV)
        self.graph.bind('rb', RB)
        self.graph.bind('owl', OWL)
        self.graph.bind('rdf', RDF)
        self.graph.bind('rdfs', RDFS)
        self.graph.bind('xsd', XSD)

    def extract_metadata(self, md_file):
        """Extract metadata from markdown frontmatter"""
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

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
            ns = DT

        # Use camelCase of preferred term if available
        if preferred_term:
            camel = self.to_camel_case(preferred_term)
            return ns[camel]
        else:
            # Use term-id as-is
            return ns[term_id.replace('-', '_')]

    def to_camel_case(self, text):
        """Convert text to CamelCase"""
        words = re.sub(r'[^a-zA-Z0-9\s]', '', text).split()
        if not words:
            return 'Term'
        return ''.join(word.capitalize() for word in words)

    def parse_owl_block(self, owl_code, term_uri):
        """Parse OWL functional syntax and add to RDF graph"""

        # Extract annotations
        label_match = re.search(r'rdfs:label\s+:?\w+\s+"([^"]+)"', owl_code)
        if label_match:
            self.graph.add((term_uri, RDFS.label, Literal(label_match.group(1), lang='en')))

        comment_match = re.search(r'rdfs:comment\s+:?\w+\s+"([^"]+)"', owl_code, re.DOTALL)
        if comment_match:
            self.graph.add((term_uri, RDFS.comment, Literal(comment_match.group(1), lang='en')))

        # Extract SubClassOf relationships
        subclass_patterns = [
            r'SubClassOf\s+:(\w+)\s+:(\w+)\)',
            r'SubClassOf\(:\w+\s+:(\w+)\)'
        ]

        for pattern in subclass_patterns:
            for match in re.finditer(pattern, owl_code):
                parent_class = match.group(1)
                parent_uri = self.resolve_term(parent_class)
                self.graph.add((term_uri, RDFS.subClassOf, parent_uri))

        # Mark as OWL Class
        if 'Declaration (Class' in owl_code or 'Declaration(Class' in owl_code:
            self.graph.add((term_uri, RDF.type, OWL.Class))

    def resolve_term(self, term_name):
        """Resolve term name to URI"""
        # Check if it's already mapped
        if term_name in self.term_map:
            return self.term_map[term_name]

        # Try to infer namespace from common patterns
        if any(keyword in term_name.lower() for keyword in ['blockchain', 'crypto', 'bitcoin', 'mining', 'consensus']):
            return BC[term_name]
        elif any(keyword in term_name.lower() for keyword in ['robot', 'sensor', 'actuator', 'manipulation']):
            return RB[term_name]
        elif any(keyword in term_name.lower() for keyword in ['virtual', 'avatar', 'metaverse', 'spatial']):
            return MV[term_name]
        elif any(keyword in term_name.lower() for keyword in ['learning', 'neural', 'training', 'model', 'ai']):
            return AI[term_name]
        else:
            return DT[term_name]

    def process_markdown_file(self, md_file):
        """Process a single markdown file"""
        # Extract metadata
        metadata = self.extract_metadata(md_file)

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

        # Extract and parse OWL blocks
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

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

    def save_turtle(self, output_file):
        """Save RDF graph as Turtle"""
        # Add ontology metadata
        ontology_uri = URIRef("http://disruption.org/ontology/metaverse")
        self.graph.add((ontology_uri, RDF.type, OWL.Ontology))
        self.graph.add((ontology_uri, RDFS.label, Literal("Metaverse Ontology", lang='en')))
        self.graph.add((ontology_uri, RDFS.comment, Literal(
            "Comprehensive ontology spanning AI, Blockchain, Metaverse, and Robotics domains", lang='en')))

        # Serialize to Turtle
        self.graph.serialize(destination=output_file, format='turtle')

        # Get statistics
        classes = len(list(self.graph.subjects(RDF.type, OWL.Class)))
        properties = len(list(self.graph.subjects(RDF.type, OWL.ObjectProperty)))
        triples = len(self.graph)

        print(f"\n✅ Generated Turtle RDF file: {output_file}")
        print(f"   Classes: {classes}")
        print(f"   Properties: {properties}")
        print(f"   Total Triples: {triples}")

def main():
    parser = argparse.ArgumentParser(
        description='Convert Logseq markdown ontology to Turtle RDF for WebVOWL'
    )
    parser.add_argument(
        '--pages-dir',
        default='logseq/pages',
        help='Directory containing markdown files'
    )
    parser.add_argument(
        '--output',
        default='outputs/metaverse-ontology.ttl',
        help='Output Turtle RDF file'
    )

    args = parser.parse_args()

    converter = MarkdownToTurtleConverter()
    converter.process_directory(args.pages_dir)
    converter.save_turtle(args.output)

if __name__ == '__main__':
    main()
