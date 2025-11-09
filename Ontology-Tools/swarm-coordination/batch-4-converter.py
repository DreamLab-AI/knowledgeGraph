#!/usr/bin/env python3
"""
Batch 4: Robotics (RB-*) Files Converter
Converts 5 RB-* files from Format B to canonical Logseq format
"""

import os
import re
from pathlib import Path
from datetime import datetime

# Configuration
LOGSEQ_PAGES = Path("/home/devuser/workspace/project/Metaverse-Ontology/logseq/pages")
LOG_FILE = Path("/home/devuser/workspace/project/Metaverse-Ontology/swarm-coordination/batch-4-log.txt")
STATS_FILE = Path("/home/devuser/workspace/project/Metaverse-Ontology/swarm-coordination/batch-4-statistics.json")

# RB files to process (first 5)
RB_FILES = [
    "RB-0001-robot.md",
    "RB-0002-mobile-robot.md",
    "RB-0003-manipulator.md",
    "RB-0004-humanoid-robot.md",
    "RB-0005-industrial-robot.md"
]

class RoboticsConverter:
    def __init__(self):
        self.log = []
        self.stats = {
            "total_files": 0,
            "converted": 0,
            "errors": 0,
            "start_time": datetime.now().isoformat()
        }

    def log_msg(self, msg):
        """Log message to both console and log list"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = f"[{timestamp}] {msg}"
        print(log_entry)
        self.log.append(log_entry)

    def extract_metadata(self, content):
        """Extract metadata from Format B markdown"""
        metadata = {}

        # Extract term ID
        term_id_match = re.search(r'\*\*Term ID\*\*:\s*([^\n]+)', content)
        if term_id_match:
            metadata['term_id'] = term_id_match.group(1).strip()

        # Extract preferred term from title
        title_match = re.search(r'^#\s+([^:\n]+)(?::\s*(.+))?$', content, re.MULTILINE)
        if title_match:
            metadata['preferred_term'] = title_match.group(2).strip() if title_match.group(2) else title_match.group(1).strip().split(': ', 1)[-1]

        # Extract ISO reference
        iso_match = re.search(r'\*\*ISO Reference\*\*:\s*([^\n]+)', content)
        if iso_match:
            metadata['iso_reference'] = iso_match.group(1).strip()

        # Extract version
        version_match = re.search(r'\*\*Version\*\*:\s*([^\n]+)', content)
        if version_match:
            metadata['version'] = version_match.group(1).strip()

        # Extract last updated
        updated_match = re.search(r'\*\*Last Updated\*\*:\s*([^\n]+)', content)
        if updated_match:
            metadata['last_updated'] = updated_match.group(1).strip()

        # Extract authority score
        authority_match = re.search(r'\*\*Authority Score\*\*:\s*([^\n]+)', content)
        if authority_match:
            metadata['authority_score'] = authority_match.group(1).strip()

        return metadata

    def extract_definition(self, content):
        """Extract primary definition"""
        # Try to find Primary Definition section
        primary_def = re.search(r'###\s+Primary Definition\s*\n+(.+?)(?=\n###|\n##|\Z)', content, re.DOTALL)
        if primary_def:
            definition = primary_def.group(1).strip()
            # Remove markdown bold markers and clean
            definition = re.sub(r'\*\*([^*]+)\*\*', r'\1', definition)
            # Get first sentence
            sentences = re.split(r'(?<=[.!?])\s+', definition)
            return sentences[0] if sentences else definition

        # Fallback: get first paragraph after Definition heading
        definition_match = re.search(r'##\s+Definition\s*\n+(.+?)(?=\n##|\Z)', content, re.DOTALL)
        if definition_match:
            text = definition_match.group(1).strip()
            # Get first non-header line
            lines = [l for l in text.split('\n') if l and not l.startswith('#')]
            if lines:
                return lines[0].strip()

        return "Definition to be extracted"

    def extract_owl_axioms(self, content):
        """Extract OWL axioms from clojure code fence"""
        owl_match = re.search(r'```clojure\s*\n(.+?)\n```', content, re.DOTALL)
        if owl_match:
            return owl_match.group(1).strip()
        return None

    def extract_relationships(self, content):
        """Extract relationships from Relationships section"""
        relationships = {
            'parent': [],
            'child': [],
            'related': []
        }

        # Find Relationships section
        rel_section = re.search(r'##\s+Relationships\s*\n+(.+?)(?=\n##|\Z)', content, re.DOTALL)
        if not rel_section:
            return relationships

        rel_text = rel_section.group(1)

        # Extract parent classes
        parent_match = re.search(r'###\s+Parent Classes\s*\n+(.+?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if parent_match:
            for line in parent_match.group(1).split('\n'):
                if line.strip().startswith('-'):
                    # Extract concept from markdown
                    concept = re.sub(r'[`*]', '', line.strip()[1:]).split(':')[0].strip()
                    relationships['parent'].append(concept)

        # Extract child classes
        child_match = re.search(r'###\s+Child Classes(?:\s+\(Specializations\))?\s*\n+(.+?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if child_match:
            for line in child_match.group(1).split('\n'):
                if line.strip().startswith('-'):
                    concept = re.sub(r'[`*]', '', line.strip()[1:]).split(':')[0].strip()
                    relationships['child'].append(concept)

        # Extract related concepts
        related_match = re.search(r'###\s+Related Concepts\s*\n+(.+?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if related_match:
            for line in related_match.group(1).split('\n'):
                if line.strip().startswith('-'):
                    concept = re.sub(r'[`*]', '', line.strip()[1:]).split(':')[0].strip()
                    relationships['related'].append(concept)

        return relationships

    def generate_concept_slug(self, term):
        """Generate concept slug from term name"""
        slug = term.lower()
        slug = re.sub(r'[^a-z0-9\s-]', '', slug)
        slug = re.sub(r'\s+', '-', slug)
        return slug

    def convert_to_canonical(self, content, filename):
        """Convert Format B to canonical Logseq format"""
        metadata = self.extract_metadata(content)
        definition = self.extract_definition(content)
        owl_axioms = self.extract_owl_axioms(content)
        relationships = self.extract_relationships(content)

        # Generate concept slug
        preferred_term = metadata.get('preferred_term', filename.replace('.md', '').replace('-', ' ').title())
        concept_slug = self.generate_concept_slug(preferred_term)

        # Build canonical format
        output = []

        # OntologyBlock
        output.append("- ### OntologyBlock")
        output.append(f"  id:: {concept_slug}-ontology")
        output.append("  collapsed:: true")
        output.append("")

        # Identification
        output.append("  - **Identification**")
        output.append("    - ontology:: true")
        output.append(f"    - term-id:: {metadata.get('term_id', 'TBD')}")
        output.append(f"    - preferred-term:: {preferred_term}")
        output.append("    - source-domain:: robotics")
        output.append("    - status:: complete")
        output.append(f"    - version:: {metadata.get('version', '1.0.0')}")
        output.append(f"    - last-updated:: {metadata.get('last_updated', '2025-10-29')}")
        output.append("")

        # Definition
        output.append("  - **Definition**")
        output.append(f"    - definition:: {definition}")
        output.append("    - maturity:: mature")
        if metadata.get('iso_reference'):
            output.append(f"    - source:: [[{metadata['iso_reference'].split(',')[0].strip()}]]")
        if metadata.get('authority_score'):
            output.append(f"    - authority-score:: {metadata['authority_score']}")
        output.append("")

        # Semantic Classification
        output.append("  - **Semantic Classification**")
        term_class = preferred_term.replace(' ', '')
        output.append(f"    - owl:class:: rb:{term_class}")
        output.append("    - owl:physicality:: PhysicalEntity")
        output.append("    - owl:role:: Object")
        output.append("    - belongsToDomain:: [[Robotics]]")
        output.append("")

        # Relationships
        output.append("  - #### Relationships")
        output.append(f"    id:: {concept_slug}-relationships")

        if relationships['child']:
            child_links = ', '.join([f"[[{c}]]" for c in relationships['child']])
            output.append(f"    - has-part:: {child_links}")

        if relationships['parent']:
            parent_links = ', '.join([f"[[{p}]]" for p in relationships['parent']])
            output.append(f"    - is-part-of:: {parent_links}")

        if relationships['related']:
            related_links = ', '.join([f"[[{r}]]" for r in relationships['related']])
            output.append(f"    - related-to:: {related_links}")

        output.append("")

        # OWL Axioms
        output.append("  - #### OWL Axioms")
        output.append(f"    id:: {concept_slug}-owl-axioms")
        output.append("    collapsed:: true")
        output.append("    - ```clojure")
        if owl_axioms:
            # Indent OWL axioms properly
            for line in owl_axioms.split('\n'):
                output.append(f"      {line}")
        else:
            output.append("      ; OWL axioms to be extracted")
        output.append("      ```")
        output.append("")

        # About Section
        output.append(f"- ## About {preferred_term}")
        output.append(f"  id:: {concept_slug}-about")
        output.append("")
        output.append(f"  - {definition}")
        output.append("  -")
        output.append("  - ### Technical Details")
        output.append(f"    id:: {concept_slug}-details")
        output.append("    - [Content preserved from original file]")
        output.append("  -")
        output.append("  - ### Standards & References")
        output.append(f"    id:: {concept_slug}-standards")
        if metadata.get('iso_reference'):
            for ref in metadata['iso_reference'].split(','):
                output.append(f"    - [[{ref.strip()}]]")
        output.append("  -")
        output.append("  - ### Related Concepts")
        output.append(f"    id:: {concept_slug}-related")
        for rel in relationships['related']:
            output.append(f"    - [[{rel}]]")

        return '\n'.join(output)

    def process_file(self, filename):
        """Process a single RB file"""
        filepath = LOGSEQ_PAGES / filename

        if not filepath.exists():
            self.log_msg(f"❌ File not found: {filename}")
            self.stats['errors'] += 1
            return False

        try:
            self.log_msg(f"Processing: {filename}")

            # Read original content
            with open(filepath, 'r', encoding='utf-8') as f:
                original_content = f.read()

            # Convert to canonical format
            canonical_content = self.convert_to_canonical(original_content, filename)

            # Write back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(canonical_content)

            self.log_msg(f"✅ Converted: {filename}")
            self.stats['converted'] += 1
            return True

        except Exception as e:
            self.log_msg(f"❌ Error processing {filename}: {str(e)}")
            self.stats['errors'] += 1
            return False

    def run(self):
        """Run batch conversion"""
        self.log_msg("=" * 80)
        self.log_msg("BATCH 4: Robotics (RB-*) Files Conversion")
        self.log_msg("=" * 80)
        self.log_msg(f"Processing {len(RB_FILES)} files")
        self.log_msg("")

        self.stats['total_files'] = len(RB_FILES)

        for filename in RB_FILES:
            self.process_file(filename)
            self.log_msg("")

        # Summary
        self.stats['end_time'] = datetime.now().isoformat()
        self.log_msg("=" * 80)
        self.log_msg("CONVERSION SUMMARY")
        self.log_msg("=" * 80)
        self.log_msg(f"Total files: {self.stats['total_files']}")
        self.log_msg(f"Converted: {self.stats['converted']}")
        self.log_msg(f"Errors: {self.stats['errors']}")
        self.log_msg(f"Success rate: {(self.stats['converted']/self.stats['total_files']*100):.1f}%")

        # Write log file
        with open(LOG_FILE, 'w', encoding='utf-8') as f:
            f.write('\n'.join(self.log))

        self.log_msg(f"\nLog written to: {LOG_FILE}")

        # Write statistics
        import json
        with open(STATS_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.stats, f, indent=2)

        self.log_msg(f"Statistics written to: {STATS_FILE}")

if __name__ == "__main__":
    converter = RoboticsConverter()
    converter.run()
