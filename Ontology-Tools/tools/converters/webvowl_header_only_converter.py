#!/usr/bin/env python3
"""
Header-Only WebVOWL Ontology Generator
Extracts ONLY metadata and OWL axioms from OntologyBlock headers.
Ignores all markdown content below the header.
Maximum depth with cross-domain bridges.
"""

import re
from pathlib import Path
import argparse
from rdflib import Graph, Namespace, RDF, RDFS, OWL, XSD, URIRef, Literal, BNode
from collections import defaultdict
import sys

# Define namespaces
DT = Namespace("http://disruption.org/ontology/disruptive-technologies#")
AI = Namespace("http://disruption.org/ontology/artificial-intelligence#")
BC = Namespace("http://disruption.org/ontology/blockchain#")
MV = Namespace("http://disruption.org/ontology/metaverse#")
RB = Namespace("http://disruption.org/ontology/robotics#")
DCTERMS = Namespace("http://purl.org/dc/terms/")
PROV = Namespace("http://www.w3.org/ns/prov#")

class HeaderOnlyOntologyBuilder:
    def __init__(self):
        self.graph = Graph()
        self.setup_namespaces()
        self.term_map = {}
        self.object_properties = set()
        self.data_properties = set()
        self.stats = defaultdict(int)
        self.bridges = []  # Track cross-domain relationships for bridge generation

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
        self.graph.bind('dcterms', DCTERMS)
        self.graph.bind('prov', PROV)

    def extract_ontology_block(self, content: str) -> str:
        """Extract ONLY the OntologyBlock header section, stop at first ## heading"""
        match = re.search(
            r'-\s*###\s*OntologyBlock\s*\n(.*?)(?=\n-\s*##|\Z)',
            content,
            re.DOTALL
        )
        return match.group(1) if match else ""

    def extract_metadata(self, block: str):
        """Extract metadata from OntologyBlock only"""
        metadata = {}

        # Term-id
        match = re.search(r'^\s*-\s*term-id::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['term_id'] = match.group(1).strip()

        # Preferred-term
        match = re.search(r'^\s*-\s*preferred-term::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['preferred_term'] = match.group(1).strip()

        # Definition
        match = re.search(r'^\s*-\s*definition::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['definition'] = match.group(1).strip()

        # Source-domain
        match = re.search(r'^\s*-\s*source-domain::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['domain'] = match.group(1).strip()

        # Maturity
        match = re.search(r'^\s*-\s*maturity::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['maturity'] = match.group(1).strip()

        # Source
        match = re.search(r'^\s*-\s*source::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['source'] = match.group(1).strip()

        # Authority score
        match = re.search(r'^\s*-\s*authority-score::\s*(.+)$', block, re.MULTILINE)
        if match:
            metadata['authority_score'] = match.group(1).strip()

        return metadata

    def extract_relationships(self, block: str) -> dict:
        """Extract relationships from #### Relationships section within OntologyBlock"""
        relationships = defaultdict(list)
        rel_section = re.search(
            r'-\s*####\s*Relationships\s*\n(.*?)(?=-\s*####|\Z)',
            block,
            re.DOTALL | re.IGNORECASE
        )
        if not rel_section:
            return relationships

        for line in rel_section.group(1).strip().split('\n'):
            match = re.match(r'-\s*([\w-]+)::\s*(.*)', line.strip())
            if match:
                prop_name = match.group(1).strip()
                targets = re.findall(r'\[\[([^\]]+)\]\]', match.group(2))
                if targets:
                    relationships[prop_name].extend(t.strip() for t in targets)

        return relationships

    def term_to_uri(self, term_id, preferred_term=None):
        """Convert term-id to URI based on domain prefix"""
        if term_id.startswith('AI-'):
            ns = AI
        elif term_id.startswith('BC-'):
            ns = BC
        elif term_id.startswith('MV-'):
            ns = MV
        elif term_id.startswith('RB-'):
            ns = RB
        else:
            ns = DT

        if preferred_term:
            fragment = self.to_camel_case(preferred_term)
            return ns[fragment]
        else:
            return ns[term_id.replace('-', '')]

    def to_camel_case(self, text):
        """Convert text to valid PascalCase URI fragment, removing code prefixes"""
        # Remove code patterns like BC-0123, AI-0456, leading numbers
        text = re.sub(r'^[A-Z]{2,}-?\d+[-_\s]*', '', text)

        # Remove invalid characters: (), %, [], {}, etc.
        text = re.sub(r'[()%\[\]{}]', '', text)

        # Convert to PascalCase
        words = re.sub(r'[^a-zA-Z0-9\s]', ' ', text).split()
        result = ''.join(word.capitalize() for word in words if word)

        # Remove any remaining invalid URI characters and leading digits
        result = re.sub(r'^[\d\s]+', '', result)
        result = re.sub(r'[^a-zA-Z0-9]', '', result)

        return result if result else 'Term'

    def to_property_name(self, text):
        """Convert text to camelCase for properties"""
        words = re.sub(r'[^a-zA-Z0-9\s-]', '', text).split()
        if not words:
            return 'relatedTo'
        return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

    def resolve_term_uri(self, term_name):
        """Resolve term name to URI"""
        term_name = term_name.lstrip(':')

        if term_name in self.term_map:
            return self.term_map[term_name]

        # Keyword-based namespace detection
        keywords = {
            BC: ['blockchain', 'crypto', 'bitcoin', 'ethereum', 'mining', 'consensus',
                 'smart', 'contract', 'dao', 'nft', 'token', 'ledger', 'defi'],
            RB: ['robot', 'sensor', 'actuator', 'manipulation', 'gripper', 'arm',
                 'humanoid', 'mobile', 'industrial', 'servo'],
            MV: ['virtual', 'avatar', 'metaverse', 'spatial', 'digital', 'npc',
                 'immersive', 'vr', 'ar', 'xr'],
            AI: ['learning', 'neural', 'training', 'model', 'ai', 'algorithm',
                 'network', 'deep', 'machine', 'intelligence', 'fairness', 'bias',
                 'ethics', 'privacy', 'governance']
        }

        term_lower = term_name.lower()
        for ns, kws in keywords.items():
            if any(kw in term_lower for kw in kws):
                return ns[term_name]

        return DT[term_name]

    def parse_owl_block(self, owl_code, term_uri, term_id):
        """Parse OWL functional syntax axioms"""

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

        # SubClassOf (simple)
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

            # Track cross-domain bridges
            self._track_bridge(subject, obj, prop, term_id)

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

        # DisjointClasses
        for match in re.finditer(r'DisjointClasses\s+((?::?\w+\s*)+)', owl_code):
            classes = [self.resolve_term_uri(c.strip()) for c in match.group(1).split() if c.strip()]
            if len(classes) > 1:
                for i, cls1 in enumerate(classes):
                    for cls2 in classes[i+1:]:
                        self.graph.add((cls1, OWL.disjointWith, cls2))
                self.stats['disjoints'] += 1

    def _track_bridge(self, subject_uri, object_uri, property_uri, term_id):
        """Track potential cross-domain bridges"""
        subject_ns = str(subject_uri).split('#')[0]
        object_ns = str(object_uri).split('#')[0]

        if subject_ns != object_ns:
            self.bridges.append({
                'source': subject_uri,
                'target': object_uri,
                'property': property_uri,
                'term_id': term_id
            })

    def process_file(self, md_file):
        """Process single markdown file - HEADER ONLY"""
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            return False

        # Extract ONLY OntologyBlock header (stops at first ## heading)
        ontology_block = self.extract_ontology_block(content)
        if not ontology_block:
            return False

        # Extract metadata from header
        metadata = self.extract_metadata(ontology_block)
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

        # Store term-id as dcterms:identifier (not in URI)
        if metadata.get('term_id'):
            self.graph.add((term_uri, DCTERMS.identifier, Literal(metadata['term_id'])))

        if metadata.get('preferred_term'):
            self.graph.add((term_uri, RDFS.label,
                          Literal(metadata['preferred_term'], lang='en')))

        if metadata.get('definition'):
            self.graph.add((term_uri, RDFS.comment,
                          Literal(metadata['definition'], lang='en')))

        if metadata.get('maturity'):
            self.graph.add((term_uri, DT.maturity, Literal(metadata['maturity'])))

        if metadata.get('authority_score'):
            self.graph.add((term_uri, DT.authorityScore,
                          Literal(float(metadata['authority_score']), datatype=XSD.decimal)))

        # Extract relationships from header #### Relationships section
        relationships = self.extract_relationships(ontology_block)
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

                # Track bridges
                self._track_bridge(term_uri, target_uri, prop_uri, metadata['term_id'])

        # Parse OWL axioms from header #### OWL Axioms section
        owl_blocks = re.findall(r'```(?:clojure|owl)\s*\n(.*?)\n```', ontology_block, re.DOTALL)
        for owl_code in owl_blocks:
            self.parse_owl_block(owl_code, term_uri, metadata['term_id'])

        return True

    def add_cross_domain_bridges(self):
        """Generate explicit bridge axioms for cross-domain relationships"""
        for bridge in self.bridges:
            bridge_node = BNode()
            self.graph.add((bridge_node, RDF.type, DT.CrossDomainBridge))
            self.graph.add((bridge_node, DT.bridgeSource, bridge['source']))
            self.graph.add((bridge_node, DT.bridgeTarget, bridge['target']))
            self.graph.add((bridge_node, DT.bridgeProperty, bridge['property']))
            self.stats['bridges'] += 1

    def process_directory(self, pages_dir):
        """Process all markdown files"""
        pages_path = Path(pages_dir)
        md_files = sorted(pages_path.glob('*.md'))

        print(f"Processing {len(md_files)} markdown files (header-only)...", file=sys.stderr)
        processed = 0

        for md_file in md_files:
            if self.process_file(md_file):
                processed += 1
                if processed % 100 == 0:
                    print(f"  Processed {processed} files...", file=sys.stderr)

        print(f"✅ Processed {processed} ontology pages", file=sys.stderr)
        return processed

    def add_ontology_metadata(self):
        """Add ontology-level metadata"""
        ont = URIRef("http://disruption.org/ontology/unified")

        self.graph.add((ont, RDF.type, OWL.Ontology))
        self.graph.add((ont, RDFS.label,
                       Literal("Unified Disruptive Technologies Ontology", lang='en')))
        self.graph.add((ont, RDFS.comment, Literal(
            "Multi-domain ontology with cross-domain bridges integrating AI, Blockchain, "
            "Metaverse, and Robotics. Generated from OntologyBlock headers only.",
            lang='en')))
        self.graph.add((ont, DCTERMS.created, Literal("2025-11-09", datatype=XSD.date)))
        self.graph.add((ont, OWL.versionInfo, Literal("1.1.0")))
        self.graph.add((ont, DCTERMS.creator, Literal("Logseq Ontology Tools - Header Extractor")))

    def save_turtle(self, output_file):
        """Save as Turtle with statistics"""
        self.add_ontology_metadata()
        self.add_cross_domain_bridges()

        output_path = Path(output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        self.graph.serialize(destination=output_file, format='turtle')

        # Statistics
        triples = len(self.graph)
        classes = len(list(self.graph.subjects(RDF.type, OWL.Class)))

        print(f"\n✅ Generated: {output_file}", file=sys.stderr)
        print(f"\n📊 Statistics:", file=sys.stderr)
        print(f"   Total Triples: {triples:,}", file=sys.stderr)
        print(f"   Classes: {classes:,}", file=sys.stderr)
        print(f"   Object Properties: {len(self.object_properties):,}", file=sys.stderr)
        print(f"   Data Properties: {len(self.data_properties):,}", file=sys.stderr)
        print(f"   SubClassOf: {self.stats['subclass']:,}", file=sys.stderr)
        print(f"   Restrictions (OWL): {self.stats['restrictions']:,}", file=sys.stderr)
        print(f"   Restrictions (MD): {self.stats['md_restrictions']:,}", file=sys.stderr)
        print(f"   Cross-Domain Bridges: {self.stats['bridges']:,}", file=sys.stderr)
        print(f"   Domains: {self.stats['domains']:,}", file=sys.stderr)
        print(f"   Ranges: {self.stats['ranges']:,}", file=sys.stderr)
        print(f"   Disjoints: {self.stats['disjoints']:,}", file=sys.stderr)

def main():
    parser = argparse.ArgumentParser(
        description='Generate WebVOWL TTL from OntologyBlock headers only (no markdown content)'
    )
    parser.add_argument('--pages-dir', default='../mainKnowledgeGraph/pages',
                       help='Logseq pages directory')
    parser.add_argument('--output', default='outputs/ontology-header-only.ttl',
                       help='Output TTL file')

    args = parser.parse_args()

    builder = HeaderOnlyOntologyBuilder()
    builder.process_directory(args.pages_dir)
    builder.save_turtle(args.output)

if __name__ == '__main__':
    main()
