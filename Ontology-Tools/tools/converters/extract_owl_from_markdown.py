#!/usr/bin/env python3
"""
Extract OWL Functional Syntax from Logseq Markdown Files
Aggregates all OWL code blocks from ontology markdown files into a single .ofn file
"""

import re
from pathlib import Path
import argparse
from collections import OrderedDict

class MarkdownOWLExtractor:
    def __init__(self):
        self.classes = OrderedDict()
        self.properties = OrderedDict()
        self.prefixes = OrderedDict({
            'owl': 'http://www.w3.org/2002/07/owl#',
            'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
            'xsd': 'http://www.w3.org/2001/XMLSchema#',
            'dt': 'http://disruption.org/ontology/disruptive-technologies#',
            'ai': 'http://disruption.org/ontology/artificial-intelligence#',
            'bc': 'http://disruption.org/ontology/blockchain#',
            'mv': 'http://disruption.org/ontology/metaverse#',
            'rb': 'http://disruption.org/ontology/robotics#'
        })
        self.term_id_to_uri = {}
        self.ontology_base = 'http://disruption.org/ontology/metaverse'

    def extract_metadata_from_markdown(self, md_file):
        """Extract term-id and preferred-term from markdown frontmatter"""
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        term_id = None
        preferred_term = None

        # Extract term-id
        term_id_match = re.search(r'^\s*-\s*term-id::\s*(.+)$', content, re.MULTILINE)
        if term_id_match:
            term_id = term_id_match.group(1).strip()

        # Extract preferred-term
        preferred_match = re.search(r'^\s*-\s*preferred-term::\s*(.+)$', content, re.MULTILINE)
        if preferred_match:
            preferred_term = preferred_match.group(1).strip()

        return term_id, preferred_term

    def extract_owl_from_markdown(self, md_file):
        """Extract OWL Functional Syntax code blocks from markdown file"""
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find OWL code blocks (between ```clojure or ```owl markers)
        owl_blocks = []
        pattern = r'```(?:clojure|owl)\s*\n(.*?)\n```'
        matches = re.finditer(pattern, content, re.DOTALL)

        for match in matches:
            owl_code = match.group(1).strip()
            if owl_code:
                owl_blocks.append(owl_code)

        return owl_blocks

    def process_directory(self, pages_dir):
        """Process all markdown files in directory"""
        pages_path = Path(pages_dir)
        md_files = sorted(pages_path.glob('*.md'))

        print(f"Processing {len(md_files)} markdown files...")

        all_declarations = []
        all_axioms = []

        for md_file in md_files:
            # Extract metadata
            term_id, preferred_term = self.extract_metadata_from_markdown(md_file)

            # Extract OWL blocks
            owl_blocks = self.extract_owl_from_markdown(md_file)

            if owl_blocks:
                print(f"  ✓ {md_file.name}: {len(owl_blocks)} OWL block(s)")

                # Store term mapping
                if term_id and preferred_term:
                    uri = self.convert_term_to_uri(term_id, preferred_term)
                    self.term_id_to_uri[term_id] = uri

                # Separate declarations from axioms
                for block in owl_blocks:
                    # Remove comment lines
                    lines = [line for line in block.split('\n') if not line.strip().startswith(';')]
                    block = '\n'.join(lines)

                    if 'Declaration(' in block:
                        all_declarations.append(block)
                    else:
                        all_axioms.append(block)

        return all_declarations, all_axioms

    def convert_term_to_uri(self, term_id, preferred_term):
        """Convert term-id to URI format"""
        # Determine namespace prefix from term-id
        if term_id.startswith('AI-'):
            prefix = 'ai'
        elif term_id.startswith('BC-'):
            prefix = 'bc'
        elif term_id.startswith('MV-'):
            prefix = 'mv'
        elif term_id.startswith('rb-'):
            prefix = 'rb'
        else:
            prefix = 'dt'

        # Convert preferred term to camelCase
        camel_case = self.to_camel_case(preferred_term)
        return f'{prefix}:{camel_case}'

    def to_camel_case(self, text):
        """Convert text to camelCase"""
        # Remove special characters and split
        words = re.sub(r'[^a-zA-Z0-9\s]', '', text).split()
        if not words:
            return 'Term'
        # First word lowercase, rest title case
        return words[0][0].upper() + words[0][1:] + ''.join(w.capitalize() for w in words[1:])

    def generate_ofn(self, declarations, axioms, output_file):
        """Generate complete OWL Functional Syntax file"""
        with open(output_file, 'w', encoding='utf-8') as f:
            # Write prefixes
            f.write('# Metaverse Ontology - OWL Functional Syntax\n')
            f.write('# Generated from Logseq markdown files\n\n')

            for prefix, namespace in self.prefixes.items():
                f.write(f'Prefix({prefix}:=<{namespace}>)\n')

            f.write('\n')

            # Write ontology header
            f.write(f'Ontology(<{self.ontology_base}>\n')
            f.write(f'  <{self.ontology_base}/v1.0.0>\n\n')

            # Write all declarations first
            f.write('# ========================================\n')
            f.write('# DECLARATIONS\n')
            f.write('# ========================================\n\n')

            for decl in declarations:
                f.write(f'{decl}\n\n')

            # Write all axioms
            f.write('# ========================================\n')
            f.write('# AXIOMS\n')
            f.write('# ========================================\n\n')

            for axiom in axioms:
                f.write(f'{axiom}\n\n')

            # Close ontology
            f.write(')\n')

        print(f'\n✅ Generated OWL Functional Syntax file: {output_file}')
        print(f'   Declarations: {len(declarations)}')
        print(f'   Axioms: {len(axioms)}')

def main():
    parser = argparse.ArgumentParser(
        description='Extract OWL Functional Syntax from Logseq markdown files'
    )
    parser.add_argument(
        '--pages-dir',
        default='logseq/pages',
        help='Directory containing markdown files'
    )
    parser.add_argument(
        '--output',
        default='metaverse-ontology.ofn',
        help='Output OWL Functional Syntax file'
    )

    args = parser.parse_args()

    extractor = MarkdownOWLExtractor()
    declarations, axioms = extractor.process_directory(args.pages_dir)
    extractor.generate_ofn(declarations, axioms, args.output)

if __name__ == '__main__':
    main()
