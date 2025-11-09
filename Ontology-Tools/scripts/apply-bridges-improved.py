#!/usr/bin/env python3
"""
Bridge Application Script (Improved)
Applies recovered cross-domain bridges from TTL to Logseq concept files.

Improvements:
- Fuzzy filename matching
- Handles multiple naming conventions (CamelCase, kebab-case, with prefixes)
- Better handling of compound words

Source: /swarm-coordination/recovered-bridges-sample.ttl
Target: /logseq/pages/*.md files
Output: /swarm-coordination/bridge-application-log.txt
"""

import re
import os
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Tuple, Set, Optional

# Predicate to bridge relationship mapping
PREDICATE_TO_RELATIONSHIP = {
    'dt:implements': 'implementation',
    'dt:uses': 'component',
    'dt:securedBy': 'security',
    'dt:authenticatedBy': 'identity',
    'dt:governedBy': 'governance',
    'dt:storedOn': 'storage',
    'dt:executedBy': 'automation',
    'dt:animatedBy': 'animation',
    'dt:optimizedBy': 'optimization',
    'dt:controls': 'control',
    'dt:trains': 'training',
    'dt:enables': 'interface',
    'dt:monitors': 'monitoring',
    'dt:predicts': 'prediction',
    'dt:representedBy': 'representation',
    'dt:enhances': 'enhancement',
    'dt:versionedBy': 'versioning',
    'dt:provenanceTrackedBy': 'provenance',
    'dt:coordinatedBy': 'coordination',
    'dt:recordedOn': 'audit',
    'dt:implementedBy': 'governance',
    'dt:provenBy': 'ownership',
    'dt:enforcedBy': 'licensing',
    'dt:tokenizedBy': 'tokenization'
}


class BridgeParser:
    """Parse TTL bridges and extract subject-predicate-object triples."""

    def __init__(self, ttl_path: str):
        self.ttl_path = ttl_path
        self.bridges: List[Tuple[str, str, str, str, str]] = []

    def parse(self) -> List[Tuple[str, str, str, str, str]]:
        """
        Parse TTL file and extract bridges.
        Returns: List of (subject_iri, predicate, object_iri, domain_bridge, bridge_type)
        """
        with open(self.ttl_path, 'r') as f:
            content = f.read()

        # Pattern to match bridge statements
        pattern = r'(\w+:\w+)\s+(dt:\w+)\s+(\w+:\w+)\s*;'
        matches = re.findall(pattern, content)

        for subject, predicate, obj in matches:
            triple_block = self._extract_triple_block(content, subject, predicate, obj)
            domain_bridge = self._extract_metadata(triple_block, 'meta:crossDomainBridge')
            bridge_type = self._extract_metadata(triple_block, 'meta:bridgeType')

            if domain_bridge and bridge_type:
                self.bridges.append((subject, predicate, obj, domain_bridge, bridge_type))

        return self.bridges

    def _extract_triple_block(self, content: str, subject: str, predicate: str, obj: str) -> str:
        """Extract the full block for a triple including metadata."""
        pattern = re.escape(subject) + r'\s+' + re.escape(predicate) + r'\s+' + re.escape(obj) + r'\s*;(.*?)(?=\n\n|\n\w+:|\Z)'
        match = re.search(pattern, content, re.DOTALL)
        return match.group(0) if match else ""

    def _extract_metadata(self, block: str, key: str) -> str:
        """Extract metadata value from triple block."""
        pattern = key + r'\s+"([^"]+)"'
        match = re.search(pattern, block)
        return match.group(1) if match else ""


class FilenameMatcher:
    """Fuzzy filename matching for concept files."""

    def __init__(self, pages_dir: str):
        self.pages_dir = Path(pages_dir)
        self.file_cache: Dict[str, Path] = {}
        self._build_cache()

    def _build_cache(self):
        """Build cache of all .md files with normalized keys."""
        for md_file in self.pages_dir.glob("*.md"):
            # Multiple keys for same file
            name = md_file.stem

            # Original name
            self.file_cache[name.lower()] = md_file

            # Without spaces
            self.file_cache[name.replace(' ', '').lower()] = md_file

            # Without hyphens
            self.file_cache[name.replace('-', '').lower()] = md_file

            # Without prefixes like RB-0004-
            clean_name = re.sub(r'^[A-Z]+-\d+-', '', name)
            self.file_cache[clean_name.lower()] = md_file
            self.file_cache[clean_name.replace('-', '').lower()] = md_file

    def find_file(self, iri: str) -> Optional[Path]:
        """
        Find file for IRI using fuzzy matching.
        Example: rb:HumanoidRobot → RB-0004-humanoid-robot.md or HumanoidRobot.md
        """
        # Extract concept name
        if ':' in iri:
            namespace, concept = iri.split(':', 1)
        else:
            concept = iri

        # Try multiple variations
        variations = [
            concept,  # HumanoidRobot
            self._camel_to_spaces(concept),  # Humanoid Robot
            self._camel_to_kebab(concept),  # humanoid-robot
            concept.lower(),  # humanoidrobot
            self._camel_to_spaces(concept).lower(),  # humanoid robot
        ]

        for variation in variations:
            # Check cache
            key = variation.replace(' ', '').replace('-', '').lower()
            if key in self.file_cache:
                return self.file_cache[key]

        return None

    def _camel_to_spaces(self, text: str) -> str:
        """Convert CamelCase to space-separated."""
        # Handle acronyms: AIModel → AI Model
        text = re.sub(r'([A-Z]+)([A-Z][a-z])', r'\1 \2', text)
        # Handle normal: HumanoidRobot → Humanoid Robot
        text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
        return text

    def _camel_to_kebab(self, text: str) -> str:
        """Convert CamelCase to kebab-case."""
        text = self._camel_to_spaces(text)
        return text.replace(' ', '-').lower()


class BridgeApplicator:
    """Apply bridges to concept files."""

    def __init__(self, pages_dir: str, log_path: str):
        self.pages_dir = Path(pages_dir)
        self.log_path = Path(log_path)
        self.matcher = FilenameMatcher(str(pages_dir))
        self.stats: Dict[str, int] = defaultdict(int)
        self.file_updates: Dict[str, List[str]] = defaultdict(list)
        self.processed_files: Set[str] = set()

    def iri_to_page_link(self, iri: str) -> str:
        """
        Convert IRI to Logseq page link.
        Uses actual filename if found, otherwise converts IRI.
        """
        # Find actual file
        file_path = self.matcher.find_file(iri)

        if file_path:
            # Use actual filename
            page_name = file_path.stem
        else:
            # Fallback: Convert IRI
            if ':' in iri:
                concept = iri.split(':', 1)[1]
            else:
                concept = iri
            page_name = self.matcher._camel_to_spaces(concept)

        return f"[[{page_name}]]"

    def apply_bridges(self, bridges: List[Tuple[str, str, str, str, str]]) -> Dict[str, int]:
        """
        Apply bridges to concept files.
        Returns: Statistics dictionary
        """
        for subject_iri, predicate, object_iri, domain_bridge, bridge_type in bridges:
            # Find subject file
            subject_path = self.matcher.find_file(subject_iri)

            if not subject_path:
                self.stats['files_not_found'] += 1
                self.file_updates['not_found'].append(f"{subject_iri} → {object_iri}")
                continue

            # Convert object IRI to page link
            object_link = self.iri_to_page_link(object_iri)

            # Create bridge entry
            bridge_entry = f"- bridges-to:: {object_link} (domain: {domain_bridge}, type: {bridge_type})"

            # Apply to file
            if self._add_bridge_to_file(subject_path, bridge_entry, subject_iri, object_iri, predicate):
                self.stats['bridges_applied'] += 1
                self.file_updates[subject_path.name].append(f"{predicate} {object_iri}")
                self.processed_files.add(subject_path.name)
            else:
                self.stats['bridges_skipped'] += 1

        return dict(self.stats)

    def _add_bridge_to_file(self, file_path: Path, bridge_entry: str,
                           subject_iri: str, object_iri: str, predicate: str) -> bool:
        """Add bridge entry to concept file."""
        with open(file_path, 'r') as f:
            content = f.read()

        # Check if bridge already exists (avoid duplicates)
        if bridge_entry in content or object_iri in content:
            return False

        # Find the "Cross-Domain Relationships" section in Original Content
        # First try inside Original Content block
        original_pattern = r'(- ### Original Content\s*\n.*?collapsed:: true\s*\n.*?```.*?- ## Cross-Domain Relationships\s*\n)(.*?)(?=\n\s*- ##|\Z)'
        match = re.search(original_pattern, content, re.DOTALL)

        if match:
            # Insert bridge in existing section
            section_start = match.group(1)
            section_content = match.group(2)

            # Add bridge at the beginning of the section
            # Need to match indentation (usually 4 spaces in Original Content)
            new_section = section_start + f"    {bridge_entry}\n" + section_content

            content = content[:match.start()] + new_section + content[match.end():]

            # Write back
            with open(file_path, 'w') as f:
                f.write(content)

            return True

        # Try to find Cross-Domain Relationships outside Original Content
        cross_domain_pattern = r'(- ## Cross-Domain Relationships\s*\n)(.*?)(?=\n\s*- ##|\Z)'
        match = re.search(cross_domain_pattern, content, re.DOTALL)

        if match:
            section_start = match.group(1)
            section_content = match.group(2)

            # Add bridge
            new_section = section_start + f"  {bridge_entry}\n" + section_content

            content = content[:match.start()] + new_section + content[match.end():]

            with open(file_path, 'w') as f:
                f.write(content)

            return True

        # If no Cross-Domain Relationships section, try to add before Related Concepts
        related_pattern = r'(\n\s*- ## Related Concepts)'
        match = re.search(related_pattern, content)

        if match:
            # Find correct indentation
            indent = "  "
            if "### Original Content" in content:
                indent = "    "

            new_section = f"\n{indent}- ## Cross-Domain Relationships\n{indent}  {bridge_entry}\n"
            content = content[:match.start()] + new_section + content[match.start():]

            with open(file_path, 'w') as f:
                f.write(content)

            return True

        return False

    def write_log(self):
        """Write application log to file."""
        with open(self.log_path, 'w') as f:
            f.write("=" * 80 + "\n")
            f.write("BRIDGE APPLICATION LOG (IMPROVED)\n")
            f.write("=" * 80 + "\n\n")

            f.write("STATISTICS\n")
            f.write("-" * 80 + "\n")
            for key, value in sorted(self.stats.items()):
                f.write(f"{key}: {value}\n")
            f.write(f"\nUnique files updated: {len(self.processed_files)}\n")
            f.write("\n")

            f.write("FILE UPDATES (by file)\n")
            f.write("-" * 80 + "\n")
            for filename in sorted(self.processed_files):
                updates = self.file_updates.get(filename, [])
                f.write(f"\n{filename}: {len(updates)} bridge(s)\n")
                for update in updates:
                    f.write(f"  + {update}\n")

            f.write("\n")
            f.write("BRIDGES NOT APPLIED (missing files)\n")
            f.write("-" * 80 + "\n")
            for bridge in self.file_updates.get('not_found', []):
                f.write(f"  - {bridge}\n")


def main():
    """Main execution function."""
    # Paths
    base_dir = Path("/home/devuser/workspace/project/Metaverse-Ontology")
    ttl_path = base_dir / "swarm-coordination" / "recovered-bridges-sample.ttl"
    pages_dir = base_dir / "logseq" / "pages"
    log_path = base_dir / "swarm-coordination" / "bridge-application-log.txt"

    print("=" * 80)
    print("BRIDGE APPLICATION SCRIPT (IMPROVED)")
    print("=" * 80)
    print(f"Source: {ttl_path}")
    print(f"Target: {pages_dir}")
    print(f"Log: {log_path}")
    print()

    # Parse bridges
    print("Parsing bridges from TTL...")
    parser = BridgeParser(str(ttl_path))
    bridges = parser.parse()
    print(f"Found {len(bridges)} bridges\n")

    # Apply bridges
    print("Applying bridges to concept files...")
    applicator = BridgeApplicator(str(pages_dir), str(log_path))
    stats = applicator.apply_bridges(bridges)

    # Write log
    print("Writing application log...")
    applicator.write_log()

    # Print summary
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    for key, value in sorted(stats.items()):
        print(f"{key}: {value}")
    print(f"unique_files_updated: {len(applicator.processed_files)}")
    print()
    print(f"Log written to: {log_path}")
    print("=" * 80)


if __name__ == "__main__":
    main()
