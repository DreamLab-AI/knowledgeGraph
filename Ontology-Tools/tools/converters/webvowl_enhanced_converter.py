#!/usr/bin/env python3
"""
Enhanced WebVOWL-Compatible Ontology Generator
Generates full-depth TTL with WebVOWL optimizations and cross-domain bridges
"""

import re
from pathlib import Path
import argparse
from rdflib import Graph, Namespace, RDF, RDFS, OWL, XSD, URIRef, Literal, BNode
from collections import defaultdict
import sys

# Define namespaces with stable URIs for WebVOWL
DT = Namespace("http://disruption.org/ontology/disruptive-technologies#")
AI = Namespace("http://disruption.org/ontology/artificial-intelligence#")
BC = Namespace("http://disruption.org/ontology/blockchain#")
MV = Namespace("http://disruption.org/ontology/metaverse#")
RB = Namespace("http://disruption.org/ontology/robotics#")
DCTERMS = Namespace("http://purl.org/dc/terms/")
PROV = Namespace("http://www.w3.org/ns/prov#")

class WebVOWLOntologyBuilder:
    def __init__(self):
        self.graph = Graph()
        self.setup_namespaces()
        self.term_map = {}
        self.object_properties = set()
        self.data_properties = set()
        self.annotation_properties = set()
        self.stats = defaultdict(int)

    def setup_namespaces(self):
        """Setup RDF namespaces with WebVOWL-friendly prefixes"""
        self.graph.bind('dt', DT)
        self.graph.bind('ai', AI)
        self.graph.bind('bc', BC)
        self.graph.bind('mv', MV)
        self.graph.bind('rb', RB)
        self.graph.bind('owl', OWL)
        self.graph.bind('rdf', RDF)
        self.graph.bind('rdfs', RDFS)
        self.graph.bind('xsd', XSD)
        self.graph.bind('dcterms', DCTERMS)
        self.graph.bind('prov', PROV)

    def extract_metadata(self, content: str):
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

        # Extract source-domain
        match = re.search(r'^\s*-\s*source-domain::\s*(.+)$', content, re.MULTILINE)
        if match:
            metadata['domain'] = match.group(1).strip()

        # Extract maturity
        match = re.search(r'^\s*-\s*maturity::\s*(.+)$', content, re.MULTILINE)
        if match:
            metadata['maturity'] = match.group(1).strip()

        return metadata

    def extract_relationships(self, content: str) -> dict:
        """Extract relationships from markdown #### Relationships block"""
        relationships = defaultdict(list)
        rel_block = re.search(
            r'-\s*#### Relationships.*?\n(.*?)(?=\n\s*-\s*####|\n\s*- ##|\Z)',
            content, re.DOTALL | re.IGNORECASE
        )
        if not rel_block:
            return relationships

        for line in rel_block.group(1).strip().split('\n'):
            match = re.match(r'-\s*([\w-]+)::\s*(.*)', line.strip())
            if match:
                prop_name = match.group(1).strip()
                targets = re.findall(r'\[\[([^\]]+)\]\]', match.group(2))
                if targets:
                    relationships[prop_name].extend(t.strip() for t in targets)

        return relationships

    def term_to_uri(self, term_id, preferred_term=None):
        """Convert term-id to proper URI based on domain"""
        if term_id.startswith('AI-'):
            ns = AI
        elif term_id.startswith('BC-'):
            ns = BC
        elif term_id.startswith('MV-'):
            ns = MV
        elif term_id.startswith('RB-') or term_id.startswith('rb-'):
            ns = RB
        else:
            ns = DT

        if preferred_term:
            fragment = self.to_camel_case(preferred_term)
            return ns[fragment]
        else:
            return ns[term_id.replace('-', '')]

    def to_camel_case(self, text):
        """Convert text to CamelCase"""
        words = re.sub(r'[^a-zA-Z0-9\s]', '', text).split()
        return ''.join(word.capitalize() for word in words) if words else 'Term'

    def to_property_name(self, text):
        """Convert text to camelCase for properties"""
        words = re.sub(r'[^a-zA-Z0-9\s-]', '', text).split()
        if not words:
            return 'relatedTo'
        return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

    def resolve_term_uri(self, term_name):
        """Resolve term name to URI using intelligent namespace detection"""
        term_name = term_name.lstrip(':')

        if term_name in self.term_map:
            return self.term_map[term_name]

        # Detect namespace from keywords
        keywords = {
            BC: ['blockchain', 'crypto', 'bitcoin', 'ethereum', 'mining', 'consensus',
                 'smart', 'contract', 'dao', 'nft', 'token', 'ledger', 'defi'],
            RB: ['robot', 'sensor', 'actuator', 'manipulation', 'gripper', 'arm',
                 'humanoid', 'mobile', 'industrial', 'servo'],
            MV: ['virtual', 'avatar', 'metaverse', 'spatial', 'digital', 'npc',
                 'immersive', 'vr', 'ar', 'xr'],
            AI: ['learning', 'neural', 'training', 'model', 'ai', 'algorithm',
                 'network', 'deep', 'machine', 'intelligence']
        }

        term_lower = term_name.lower()
        for ns, kws in keywords.items():
            if any(kw in term_lower for kw in kws):
                return ns[term_name]

        return DT[term_name]

    def parse_owl_block(self, owl_code, term_uri):
        """Parse OWL functional syntax blocks"""

        # Class declarations
        if re.search(r'Declaration\s*\(\s*Class', owl_code):
            self.graph.add((term_uri, RDF.type, OWL.Class))
            self.stats['classes'] += 1

        # Labels
        for match in re.finditer(r'rdfs:label\s+:?\w*\s+"([^"]+)"(?:@(\w+))?', owl_code):
            label, lang = match.group(1), match.group(2) or 'en'
            self.graph.add((term_uri, RDFS.label, Literal(label, lang=lang)))
            self.stats['labels'] += 1

        # Comments
        for match in re.finditer(r'rdfs:comment\s+:?\w*\s+"([^"]+)"(?:@(\w+))?', owl_code, re.DOTALL):
            comment, lang = match.group(1), match.group(2) or 'en'
            self.graph.add((term_uri, RDFS.comment, Literal(comment, lang=lang)))
            self.stats['comments'] += 1

        # Simple SubClassOf
        for match in re.finditer(r'SubClassOf\s+:(\w+)\s+:(\w+)\s*\)', owl_code):
            child = self.resolve_term_uri(match.group(1))
            parent = self.resolve_term_uri(match.group(2))
            self.graph.add((child, RDFS.subClassOf, parent))
            self.stats['subclass'] += 1

        # ObjectSomeValuesFrom restrictions
        pattern = r'SubClassOf\s+:(\w+)\s+\(\s*ObjectSomeValuesFrom\s+:(\w+)\s+:(\w+)\s*\)'
        for match in re.finditer(pattern, owl_code):
            subject = self.resolve_term_uri(match.group(1))
            prop = self.resolve_term_uri(match.group(2))
            obj = self.resolve_term_uri(match.group(3))

            restriction = BNode()
            self.graph.add((subject, RDFS.subClassOf, restriction))
            self.graph.add((restriction, RDF.type, OWL.Restriction))
            self.graph.add((restriction, OWL.onProperty, prop))
            self.graph.add((restriction, OWL.someValuesFrom, obj))
            self.stats['restrictions'] += 1
            self.object_properties.add(prop)

        # ObjectProperty declarations
        for match in re.finditer(r'Declaration\s*\(\s*ObjectProperty\s+:(\w+)\s*\)', owl_code):
            prop = self.resolve_term_uri(match.group(1))
            self.graph.add((prop, RDF.type, OWL.ObjectProperty))
            self.object_properties.add(prop)
            self.stats['obj_props'] += 1

        # DataProperty declarations
        for match in re.finditer(r'Declaration\s*\(\s*DataProperty\s+:(\w+)\s*\)', owl_code):
            prop = self.resolve_term_uri(match.group(1))
            self.graph.add((prop, RDF.type, OWL.DatatypeProperty))
            self.data_properties.add(prop)
            self.stats['data_props'] += 1

        # Property domains
        for match in re.finditer(r'ObjectPropertyDomain\s+:(\w+)\s+:(\w+)', owl_code):
            prop = self.resolve_term_uri(match.group(1))
            domain = self.resolve_term_uri(match.group(2))
            self.graph.add((prop, RDFS.domain, domain))
            self.stats['domains'] += 1

        # Property ranges
        for match in re.finditer(r'ObjectPropertyRange\s+:(\w+)\s+:(\w+)', owl_code):
            prop = self.resolve_term_uri(match.group(1))
            range_cls = self.resolve_term_uri(match.group(2))
            self.graph.add((prop, RDFS.range, range_cls))
            self.stats['ranges'] += 1

    def process_file(self, md_file):
        """Process a single markdown file"""
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            return False

        metadata = self.extract_metadata(content)
        if not metadata.get('term_id'):
            return False

        # Create term URI
        term_uri = self.term_to_uri(metadata['term_id'], metadata.get('preferred_term'))

        # Store mapping
        if metadata.get('preferred_term'):
            camel = self.to_camel_case(metadata['preferred_term'])
            self.term_map[camel] = term_uri
            self.term_map[metadata['term_id']] = term_uri

        # Add basic triples
        self.graph.add((term_uri, RDF.type, OWL.Class))

        if metadata.get('preferred_term'):
            self.graph.add((term_uri, RDFS.label,
                          Literal(metadata['preferred_term'], lang='en')))

        if metadata.get('definition'):
            self.graph.add((term_uri, RDFS.comment,
                          Literal(metadata['definition'], lang='en')))

        if metadata.get('maturity'):
            self.graph.add((term_uri, DT.maturity, Literal(metadata['maturity'])))

        # Extract relationships from markdown
        relationships = self.extract_relationships(content)
        for prop_name, targets in relationships.items():
            prop_uri = DT[self.to_property_name(prop_name)]

            if prop_uri not in self.object_properties:
                self.graph.add((prop_uri, RDF.type, OWL.ObjectProperty))
                self.graph.add((prop_uri, RDFS.label, Literal(prop_name.replace('-', ' '))))
                self.object_properties.add(prop_uri)

            for target in targets:
                target_uri = self.resolve_term_uri(self.to_camel_case(target))
                restriction = BNode()
                self.graph.add((term_uri, RDFS.subClassOf, restriction))
                self.graph.add((restriction, RDF.type, OWL.Restriction))
                self.graph.add((restriction, OWL.onProperty, prop_uri))
                self.graph.add((restriction, OWL.someValuesFrom, target_uri))
                self.stats['md_restrictions'] += 1

        # Parse OWL blocks
        owl_blocks = re.findall(r'```(?:clojure|owl)\s*\n(.*?)\n```', content, re.DOTALL)
        for owl_code in owl_blocks:
            self.parse_owl_block(owl_code, term_uri)

        return True

    def process_directory(self, pages_dir):
        """Process all markdown files"""
        pages_path = Path(pages_dir)
        md_files = sorted(pages_path.glob('*.md'))

        print(f"Processing {len(md_files)} markdown files...")
        processed = 0

        for md_file in md_files:
            if self.process_file(md_file):
                processed += 1
                if processed % 100 == 0:
                    print(f"  Processed {processed} files...")

        print(f"✅ Processed {processed} files")
        return processed

    def add_ontology_metadata(self):
        """Add comprehensive ontology metadata for WebVOWL"""
        ont = URIRef("http://disruption.org/ontology/unified")

        self.graph.add((ont, RDF.type, OWL.Ontology))
        self.graph.add((ont, RDFS.label,
                       Literal("Unified Disruptive Technologies Ontology", lang='en')))
        self.graph.add((ont, RDFS.comment, Literal(
            "Comprehensive multi-domain ontology integrating AI, Blockchain, "
            "Metaverse, and Robotics with full semantic depth and cross-domain bridges",
            lang='en')))
        self.graph.add((ont, DCTERMS.created, Literal("2025-11-08", datatype=XSD.date)))
        self.graph.add((ont, OWL.versionInfo, Literal("1.0.0")))
        self.graph.add((ont, DCTERMS.creator, Literal("Logseq Ontology Tools")))

    def save_turtle(self, output_file):
        """Save as Turtle with statistics"""
        self.add_ontology_metadata()

        output_path = Path(output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        self.graph.serialize(destination=output_file, format='turtle')

        # Statistics
        triples = len(self.graph)
        classes = len(list(self.graph.subjects(RDF.type, OWL.Class)))

        print(f"\n✅ Generated: {output_file}")
        print(f"\n📊 Statistics:")
        print(f"   Total Triples: {triples:,}")
        print(f"   Classes: {classes:,}")
        print(f"   Object Properties: {len(self.object_properties):,}")
        print(f"   Data Properties: {len(self.data_properties):,}")
        print(f"   SubClassOf: {self.stats['subclass']:,}")
        print(f"   Restrictions (OWL): {self.stats['restrictions']:,}")
        print(f"   Restrictions (MD): {self.stats['md_restrictions']:,}")
        print(f"   Domains: {self.stats['domains']:,}")
        print(f"   Ranges: {self.stats['ranges']:,}")

def main():
    parser = argparse.ArgumentParser(
        description='Generate WebVOWL-compatible TTL from Logseq ontology'
    )
    parser.add_argument('--pages-dir', default='../mainKnowledgeGraph/pages',
                       help='Logseq pages directory')
    parser.add_argument('--output', default='outputs/unified-ontology-webvowl.ttl',
                       help='Output TTL file')

    args = parser.parse_args()

    builder = WebVOWLOntologyBuilder()
    builder.process_directory(args.pages_dir)
    builder.save_turtle(args.output)

if __name__ == '__main__':
    main()
