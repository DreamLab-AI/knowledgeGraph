#!/usr/bin/env python3
"""
Intelligent OWL Block Generator for Isolated Ontology Nodes
Generates rich OWL Functional Syntax based on metadata and text relationships
"""

import re
import json
from pathlib import Path
from typing import Dict, List, Optional, Set
import argparse

class OWLBlockGenerator:
    def __init__(self, pages_dir: Path, audit_report_path: Path):
        self.pages_dir = pages_dir
        self.audit_report = self.load_audit_report(audit_report_path)
        self.term_map = self.build_term_map()

    def load_audit_report(self, path: Path) -> Dict:
        """Load semantic audit report"""
        with open(path, 'r') as f:
            return json.load(f)

    def build_term_map(self) -> Dict[str, Dict]:
        """Build map of all terms from existing files"""
        term_map = {}

        for md_file in self.pages_dir.glob('*.md'):
            try:
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Extract metadata
                term_id_match = re.search(r'term-id::\s*(.+)', content)
                preferred_term_match = re.search(r'preferred-term::\s*(.+)', content)

                if term_id_match and preferred_term_match:
                    term_id = term_id_match.group(1).strip()
                    preferred_term = preferred_term_match.group(1).strip()

                    term_map[preferred_term.lower()] = {
                        'term_id': term_id,
                        'preferred_term': preferred_term,
                        'file': md_file.name,
                        'has_owl': bool(re.search(r'```(?:clojure|owl)', content))
                    }
            except Exception as e:
                print(f"Warning: Could not process {md_file}: {e}")

        return term_map

    def extract_metadata(self, file_path: Path) -> Dict:
        """Extract all metadata from markdown file"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        metadata = {
            'term_id': None,
            'preferred_term': None,
            'definition': None,
            'domain': None,
            'relationships': [],
            'related_terms': [],
            'subclass_of': [],
            'has_owl_block': False
        }

        # Extract basic metadata
        for field, pattern in [
            ('term_id', r'term-id::\s*(.+)'),
            ('preferred_term', r'preferred-term::\s*(.+)'),
            ('definition', r'definition::\s*(.+)'),
            ('domain', r'source-domain::\s*(.+)')
        ]:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                metadata[field] = match.group(1).strip()

        # Check for OWL blocks
        metadata['has_owl_block'] = bool(re.search(r'```(?:clojure|owl)', content))

        # Extract related-to relationships
        related_matches = re.findall(r'related-to::\s*\[\[(.+?)\]\]', content)
        metadata['related_terms'].extend([r.strip() for r in related_matches if r.strip()])

        # Also look for related-to with multiple terms
        multi_related = re.findall(r'related-to::\s*(.+)', content)
        for related in multi_related:
            terms = re.findall(r'\[\[(.+?)\]\]', related)
            metadata['related_terms'].extend([t.strip() for t in terms if t.strip()])

        # Extract subclass relationships from text
        subclass_patterns = [
            r'[*-]\s*\*\*Subclass\*\*:\s*(.+)',
            r'Subclass:\s*(.+)',
            r'SubClassOf\s+:?\w+\s+:(\w+)'
        ]

        for pattern in subclass_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            for match in matches:
                # Extract terms from [[Term]] format
                terms = re.findall(r'\[\[(.+?)\]\]', match)
                if terms:
                    metadata['subclass_of'].extend(terms)
                else:
                    # Plain text term
                    clean_term = match.strip().strip(',').strip()
                    if clean_term and len(clean_term) < 50:
                        metadata['subclass_of'].append(clean_term)

        # Remove duplicates
        metadata['related_terms'] = list(set(metadata['related_terms']))
        metadata['subclass_of'] = list(set(metadata['subclass_of']))

        return metadata

    def term_to_owl_name(self, term: str) -> str:
        """Convert term to OWL name (CamelCase)"""
        # Remove special characters and convert to CamelCase
        words = re.sub(r'[^a-zA-Z0-9\s]', '', term).split()
        return ''.join(word.capitalize() for word in words)

    def infer_namespace_prefix(self, term_id: str) -> str:
        """Infer namespace prefix from term ID"""
        if term_id.startswith('AI-'):
            return 'aigo'
        elif term_id.startswith('BC-'):
            return 'bc'
        elif term_id.startswith('MV-'):
            return 'mv'
        elif term_id.startswith('rb-') or term_id.startswith('RB-'):
            return 'rb'
        else:
            return 'dt'

    def generate_owl_block(self, metadata: Dict) -> str:
        """Generate OWL Functional Syntax block"""
        term_id = metadata['term_id']
        preferred_term = metadata['preferred_term']
        definition = metadata.get('definition', '')

        ns_prefix = self.infer_namespace_prefix(term_id)
        owl_name = self.term_to_owl_name(preferred_term)

        owl_lines = []
        owl_lines.append('```clojure')
        owl_lines.append(';; OWL Functional Syntax')
        owl_lines.append('')

        # Class declaration
        owl_lines.append(f'(Declaration (Class :{owl_name}))')
        owl_lines.append('')

        # Annotations
        owl_lines.append(';; Annotations')
        owl_lines.append(f'(AnnotationAssertion rdfs:label :{owl_name} "{preferred_term}"@en)')

        if definition:
            # Escape quotes and limit length
            clean_def = definition.replace('"', '\\"')[:500]
            owl_lines.append(f'(AnnotationAssertion rdfs:comment :{owl_name} "{clean_def}"@en)')

        owl_lines.append('')

        # SubClassOf relationships
        if metadata['subclass_of']:
            owl_lines.append(';; Taxonomic Relationships')
            for parent_term in metadata['subclass_of'][:3]:  # Limit to 3
                parent_owl = self.term_to_owl_name(parent_term)
                owl_lines.append(f'(SubClassOf :{owl_name} :{parent_owl})')
            owl_lines.append('')

        # Related terms as ObjectSomeValuesFrom
        if metadata['related_terms']:
            owl_lines.append(';; Semantic Relationships')

            for i, related_term in enumerate(metadata['related_terms'][:5]):  # Limit to 5
                related_owl = self.term_to_owl_name(related_term)

                # Infer relationship type based on term patterns
                if any(kw in related_term.lower() for kw in ['model', 'architecture', 'technique', 'method']):
                    property_name = 'implements'
                elif any(kw in related_term.lower() for kw in ['application', 'use', 'domain']):
                    property_name = 'appliesTo'
                elif any(kw in related_term.lower() for kw in ['component', 'part', 'module']):
                    property_name = 'hasPart'
                else:
                    property_name = 'relatedTo'

                owl_lines.append(f'(SubClassOf :{owl_name}')
                owl_lines.append(f'  (ObjectSomeValuesFrom :{property_name} :{related_owl}))')

            owl_lines.append('')

        # Data properties
        owl_lines.append(';; Data Properties')
        owl_lines.append(f'(DataPropertyAssertion :hasIdentifier :{owl_name} "{term_id}"^^xsd:string)')

        # Add domain-specific data properties
        if ns_prefix in ['aigo', 'ai']:
            owl_lines.append(f'(DataPropertyAssertion :isAITechnology :{owl_name} "true"^^xsd:boolean)')
        elif ns_prefix == 'bc':
            owl_lines.append(f'(DataPropertyAssertion :isBlockchainTechnology :{owl_name} "true"^^xsd:boolean)')
        elif ns_prefix == 'rb':
            owl_lines.append(f'(DataPropertyAssertion :isRoboticsTechnology :{owl_name} "true"^^xsd:boolean)')

        owl_lines.append('```')
        owl_lines.append('')

        return '\n'.join(owl_lines)

    def insert_owl_block(self, file_path: Path, owl_block: str) -> bool:
        """Insert OWL block after OntologyBlock metadata"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find insertion point after OntologyBlock
            ontology_block_end = re.search(r'(- ### OntologyBlock.*?(?=\n## |\n- ##|\Z))', content, re.DOTALL)

            if ontology_block_end:
                insert_pos = ontology_block_end.end()

                # Insert OWL block with proper spacing
                new_content = (
                    content[:insert_pos] +
                    '\n\n## OWL Formal Semantics\n\n' +
                    owl_block +
                    content[insert_pos:]
                )
            else:
                # Fallback: insert after definition
                definition_match = re.search(r'definition::\s*.+?\n', content)
                if definition_match:
                    insert_pos = definition_match.end()
                    new_content = (
                        content[:insert_pos] +
                        '\n## OWL Formal Semantics\n\n' +
                        owl_block +
                        '\n' +
                        content[insert_pos:]
                    )
                else:
                    # Last resort: add at end
                    new_content = content + '\n\n## OWL Formal Semantics\n\n' + owl_block

            # Write back
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)

            return True

        except Exception as e:
            print(f"Error inserting OWL block into {file_path}: {e}")
            return False

    def process_file(self, file_path: Path) -> bool:
        """Process a single file: extract metadata and generate OWL block"""
        print(f"Processing: {file_path.name}")

        # Extract metadata
        metadata = self.extract_metadata(file_path)

        if not metadata['term_id'] or not metadata['preferred_term']:
            print(f"  ⚠️  Missing required metadata")
            return False

        if metadata['has_owl_block']:
            print(f"  ℹ️  Already has OWL block")
            return False

        # Generate OWL block
        owl_block = self.generate_owl_block(metadata)

        # Insert into file
        success = self.insert_owl_block(file_path, owl_block)

        if success:
            print(f"  ✅ Added OWL block")
            print(f"     Subclasses: {len(metadata['subclass_of'])}")
            print(f"     Related: {len(metadata['related_terms'])}")
        else:
            print(f"  ❌ Failed to add OWL block")

        return success

    def process_missing_files(self, limit: Optional[int] = None) -> Dict:
        """Process all files missing OWL blocks"""
        missing_files = self.audit_report['missing_owl_blocks']

        if limit:
            missing_files = missing_files[:limit]

        stats = {
            'processed': 0,
            'successful': 0,
            'failed': 0,
            'skipped': 0
        }

        print(f"\n{'='*70}")
        print(f"Processing {len(missing_files)} files with missing OWL blocks")
        print(f"{'='*70}\n")

        for file_info in missing_files:
            file_path = Path(file_info['file_path'])

            if not file_path.exists():
                print(f"⚠️  File not found: {file_path}")
                stats['skipped'] += 1
                continue

            stats['processed'] += 1

            if self.process_file(file_path):
                stats['successful'] += 1
            else:
                stats['failed'] += 1

            print()

        return stats

def main():
    parser = argparse.ArgumentParser(
        description='Generate OWL blocks for ontology files missing formal semantics'
    )
    parser.add_argument(
        '--pages-dir',
        type=Path,
        default=Path('logseq/pages'),
        help='Directory containing markdown files'
    )
    parser.add_argument(
        '--audit-report',
        type=Path,
        default=Path('outputs/semantic-audit-report.json'),
        help='Semantic audit report JSON file'
    )
    parser.add_argument(
        '--limit',
        type=int,
        help='Limit number of files to process (for testing)'
    )

    args = parser.parse_args()

    generator = OWLBlockGenerator(args.pages_dir, args.audit_report)
    stats = generator.process_missing_files(limit=args.limit)

    print(f"\n{'='*70}")
    print(f"RESULTS:")
    print(f"  Processed: {stats['processed']}")
    print(f"  Successful: {stats['successful']}")
    print(f"  Failed: {stats['failed']}")
    print(f"  Skipped: {stats['skipped']}")
    print(f"{'='*70}\n")

if __name__ == '__main__':
    main()
