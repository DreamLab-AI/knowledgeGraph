#!/usr/bin/env python3
"""
Bidirectional Relationship Builder
Implements inverse property pairs across all 1,001 ontology files
Uses INVERSE-PROPERTY-STANDARD.md as the canonical reference
"""

import os
import re
import sys
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Set, Tuple
from concurrent.futures import ThreadPoolExecutor, as_completed
import json

# Paths
PAGES_DIR = Path("/home/devuser/workspace/project/logseq/mainKnowledgeGraph/pages")
DOCS_DIR = Path("/home/devuser/workspace/project/logseq/Ontology-Tools/docs")

# Inverse property mapping from INVERSE-PROPERTY-STANDARD.md
INVERSE_PROPERTIES = {
    'has-part': 'is-part-of',
    'is-part-of': 'has-part',
    'requires': 'is-required-by',
    'is-required-by': 'requires',
    'enables': 'is-enabled-by',
    'is-enabled-by': 'enables',
    'implements': 'is-implemented-by',
    'is-implemented-by': 'implements',
    'uses': 'is-used-by',
    'is-used-by': 'uses',
    'depends-on': 'is-dependency-of',
    'is-dependency-of': 'depends-on',
    'belongs-to': 'has-member',
    'has-member': 'belongs-to',
    'contains': 'is-contained-in',
    'is-contained-in': 'contains'
}

# Symmetric properties (no inverse needed)
SYMMETRIC_PROPERTIES = {
    'related-to', 'bridges-to', 'connected-to',
    'interacts-with', 'adjacent-to', 'equivalent-to'
}

# OWL property characteristics
TRANSITIVE_PROPERTIES = {'is-part-of', 'is-contained-in', 'equivalent-to'}
ASYMMETRIC_PROPERTIES = {'requires', 'is-required-by', 'enables', 'is-enabled-by',
                         'implements', 'is-implemented-by', 'depends-on', 'is-dependency-of'}
FUNCTIONAL_PROPERTIES = {'belongs-to'}

class RelationshipStats:
    """Track relationship building statistics"""
    def __init__(self):
        self.files_scanned = 0
        self.relationships_found = 0
        self.inverses_added = 0
        self.symmetric_axioms_added = 0
        self.owl_axioms_enriched = 0
        self.errors = []

    def to_dict(self):
        return {
            'files_scanned': self.files_scanned,
            'relationships_found': self.relationships_found,
            'inverses_added': self.inverses_added,
            'symmetric_axioms_added': self.symmetric_axioms_added,
            'owl_axioms_enriched': self.owl_axioms_enriched,
            'error_count': len(self.errors),
            'errors': self.errors[:10]
        }

class RelationshipBuilder:
    """Build bidirectional relationships across ontology"""

    def __init__(self, pages_dir: Path):
        self.pages_dir = pages_dir
        self.stats = RelationshipStats()
        self.file_cache = {}  # Cache file paths for WikiLink lookup
        self.relationship_map = {}  # Track all relationships

    def build_file_cache(self):
        """Build cache of filename -> filepath mappings"""
        print("📁 Building file cache...")
        for filepath in self.pages_dir.glob("*.md"):
            # Store multiple lookup keys
            stem = filepath.stem
            self.file_cache[stem] = filepath
            self.file_cache[stem.lower()] = filepath
            self.file_cache[stem.replace('_', ' ')] = filepath
            self.file_cache[stem.replace('-', ' ')] = filepath
        print(f"   Cached {len(self.file_cache)} file mappings")

    def extract_relationships(self, content: str) -> Dict[str, List[str]]:
        """Extract relationship properties and their values"""
        relationships = {}
        pattern = r'-\s+([\w-]+)::\s+(.+)$'

        for line in content.split('\n'):
            line = line.strip()
            match = re.match(pattern, line)
            if match:
                prop = match.group(1)
                values_str = match.group(2)
                # Extract WikiLinks
                wikilinks = re.findall(r'\[\[([^\]]+)\]\]', values_str)
                if wikilinks:
                    relationships[prop] = wikilinks
                    self.stats.relationships_found += len(wikilinks)

        return relationships

    def get_target_file(self, concept_name: str) -> Path:
        """Find file for a concept name"""
        # Try various lookup patterns
        for key in [concept_name, concept_name.lower(),
                    concept_name.replace(' ', '_'),
                    concept_name.replace(' ', '-')]:
            if key in self.file_cache:
                return self.file_cache[key]
        return None

    def add_inverse_relationship(self, target_file: Path, inverse_prop: str,
                                 source_concept: str) -> bool:
        """Add inverse relationship to target file"""
        try:
            content = target_file.read_text(encoding='utf-8')

            # Check if relationship already exists
            check_pattern = f'{inverse_prop}::.+\\[\\[{re.escape(source_concept)}\\]\\]'
            if re.search(check_pattern, content):
                return False  # Already has this inverse

            # Find Relationships section
            rel_section_pattern = r'(- #### Relationships\s+id::.+?\n)'
            match = re.search(rel_section_pattern, content, re.DOTALL)

            if not match:
                return False  # No relationships section

            # Find insertion point (after relationships header)
            insert_pos = match.end()

            # Check if this property already exists in the section
            prop_pattern = f'\\s+-\\s+{inverse_prop}::'
            section_after = content[insert_pos:insert_pos+500]

            if re.search(prop_pattern, section_after):
                # Property exists, append to it
                existing_pattern = f'(\\s+-\\s+{inverse_prop}::\\s+.+?)\\n'
                existing_match = re.search(existing_pattern, section_after)
                if existing_match:
                    old_line = existing_match.group(1)
                    new_line = f"{old_line}, [[{source_concept}]]"
                    content = content.replace(old_line, new_line)
            else:
                # Add new property line
                indent = '\t\t'
                new_line = f"{indent}- {inverse_prop}:: [[{source_concept}]]\n"
                content = content[:insert_pos] + new_line + content[insert_pos:]

            # Write updated content
            target_file.write_text(content, encoding='utf-8')
            self.stats.inverses_added += 1
            return True

        except Exception as e:
            error_msg = f"Error adding inverse to {target_file.name}: {e}"
            self.stats.errors.append(error_msg)
            return False

    def add_symmetric_axiom(self, filepath: Path, property_name: str) -> bool:
        """Add SymmetricObjectProperty axiom to OWL Axioms section"""
        try:
            content = filepath.read_text(encoding='utf-8')

            # Check if axiom already exists
            if f'SymmetricObjectProperty(dt:{property_name.replace("-", "")}' in content:
                return False

            # Find OWL Axioms section
            axiom_pattern = r'(- #### OWL Axioms\s+.*?```clojure\s+)(.*?)(```)'
            match = re.search(axiom_pattern, content, re.DOTALL)

            if not match:
                return False

            axioms_content = match.group(2)

            # Add symmetric property declaration at the end of axioms
            property_iri = f"dt:{property_name.replace('-', '')}"
            new_axiom = f"\n  # Symmetric property\n  SymmetricObjectProperty({property_iri})\n"

            # Insert before closing triple backticks
            new_axioms = axioms_content.rstrip() + new_axiom
            updated_content = content.replace(match.group(2), new_axioms)

            filepath.write_text(updated_content, encoding='utf-8')
            self.stats.symmetric_axioms_added += 1
            return True

        except Exception as e:
            error_msg = f"Error adding symmetric axiom to {filepath.name}: {e}"
            self.stats.errors.append(error_msg)
            return False

    def add_property_characteristics(self, filepath: Path, property_name: str) -> bool:
        """Add TransitiveObjectProperty or AsymmetricObjectProperty axioms"""
        try:
            content = filepath.read_text(encoding='utf-8')

            # Determine property characteristics
            characteristics = []
            property_iri = f"dt:{property_name.replace('-', '')}"

            if property_name in TRANSITIVE_PROPERTIES:
                if f'TransitiveObjectProperty({property_iri}' not in content:
                    characteristics.append(f"TransitiveObjectProperty({property_iri})")

            if property_name in ASYMMETRIC_PROPERTIES:
                if f'AsymmetricObjectProperty({property_iri}' not in content:
                    characteristics.append(f"AsymmetricObjectProperty({property_iri})")

            if property_name in FUNCTIONAL_PROPERTIES:
                if f'FunctionalObjectProperty({property_iri}' not in content:
                    characteristics.append(f"FunctionalObjectProperty({property_iri})")

            if not characteristics:
                return False

            # Find OWL Axioms section
            axiom_pattern = r'(- #### OWL Axioms\s+.*?```clojure\s+)(.*?)(```)'
            match = re.search(axiom_pattern, content, re.DOTALL)

            if not match:
                return False

            axioms_content = match.group(2)

            # Add characteristics
            new_axioms_lines = [f"\n  # Property characteristics"]
            for char in characteristics:
                new_axioms_lines.append(f"  {char}")

            new_axioms = axioms_content.rstrip() + '\n' + '\n'.join(new_axioms_lines) + '\n'
            updated_content = content.replace(match.group(2), new_axioms)

            filepath.write_text(updated_content, encoding='utf-8')
            self.stats.owl_axioms_enriched += 1
            return True

        except Exception as e:
            return False

    def process_file(self, filepath: Path) -> Tuple[bool, str]:
        """Process a single file for bidirectional relationships"""
        try:
            self.stats.files_scanned += 1
            content = filepath.read_text(encoding='utf-8')
            source_concept = filepath.stem

            # Extract relationships
            relationships = self.extract_relationships(content)

            if not relationships:
                return True, f"No relationships in {filepath.name}"

            # Process each relationship
            for prop, targets in relationships.items():
                # Handle symmetric properties
                if prop in SYMMETRIC_PROPERTIES:
                    self.add_symmetric_axiom(filepath, prop)
                    continue

                # Handle asymmetric properties with inverses
                inverse_prop = INVERSE_PROPERTIES.get(prop)
                if not inverse_prop:
                    continue  # Skip unknown properties

                # Add inverse to each target
                for target_concept in targets:
                    target_file = self.get_target_file(target_concept)
                    if target_file and target_file.exists():
                        self.add_inverse_relationship(target_file, inverse_prop, source_concept)

                # Add property characteristics to source file
                self.add_property_characteristics(filepath, prop)

            return True, f"Processed {filepath.name}"

        except Exception as e:
            error_msg = f"Error processing {filepath.name}: {e}"
            self.stats.errors.append(error_msg)
            return False, error_msg

def main():
    """Main execution"""
    print("=" * 80)
    print("🔗 BIDIRECTIONAL RELATIONSHIP BUILDER")
    print("=" * 80)
    print()

    builder = RelationshipBuilder(PAGES_DIR)

    # Build file cache
    builder.build_file_cache()
    print()

    # Get all files
    all_files = list(PAGES_DIR.glob("*.md"))
    print(f"📊 Processing {len(all_files)} ontology files")
    print()

    # Process files sequentially (for relationship integrity)
    print("🔄 Building bidirectional relationships...")
    for i, filepath in enumerate(all_files):
        success, msg = builder.process_file(filepath)

        if (i + 1) % 100 == 0:
            print(f"   Processed {i + 1}/{len(all_files)} files...")

    print()
    print("=" * 80)
    print("📈 RELATIONSHIP BUILDING SUMMARY")
    print("=" * 80)
    print(f"Files scanned: {builder.stats.files_scanned}")
    print(f"Relationships found: {builder.stats.relationships_found}")
    print(f"Inverse relationships added: {builder.stats.inverses_added}")
    print(f"Symmetric axioms added: {builder.stats.symmetric_axioms_added}")
    print(f"OWL axioms enriched: {builder.stats.owl_axioms_enriched}")
    print(f"Errors: {len(builder.stats.errors)}")
    print()

    # Save report
    report_path = DOCS_DIR / f"bidirectional-relationship-report-{datetime.now().strftime('%Y%m%d-%H%M%S')}.json"
    report_data = {
        'execution_time': datetime.now().isoformat(),
        'statistics': builder.stats.to_dict()
    }

    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    with open(report_path, 'w') as f:
        json.dump(report_data, f, indent=2)

    print(f"📄 Report saved: {report_path}")
    print()
    print("=" * 80)
    print("✅ BIDIRECTIONAL RELATIONSHIP BUILDING COMPLETE")
    print("=" * 80)

    return 0 if len(builder.stats.errors) == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
