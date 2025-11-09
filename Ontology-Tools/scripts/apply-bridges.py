#!/usr/bin/env python3
"""
Bridge Application Script
Applies recovered cross-domain bridges from TTL to Logseq concept files.

Source: /swarm-coordination/recovered-bridges-sample.ttl
Target: /logseq/pages/*.md files
Output: /swarm-coordination/bridge-application-log.txt
"""

import re
import os
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Tuple, Set

# IRI to filename mapping (namespace → domain mapping)
NAMESPACE_TO_DOMAIN = {
    'mv': 'metaverse',
    'aigo': 'ai-grounded',
    'bc': 'blockchain',
    'rb': 'robotics',
    'dt': 'disruptive-tech',
    'meta': 'meta'
}

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
        # Example: rb:HumanoidRobot dt:implements aigo:ReinforcementLearning ;
        pattern = r'(\w+:\w+)\s+(dt:\w+)\s+(\w+:\w+)\s*;'
        matches = re.findall(pattern, content)

        for subject, predicate, obj in matches:
            # Extract domain bridge and bridge type from metadata
            # Find the meta:crossDomainBridge and meta:bridgeType for this triple
            triple_block = self._extract_triple_block(content, subject, predicate, obj)
            domain_bridge = self._extract_metadata(triple_block, 'meta:crossDomainBridge')
            bridge_type = self._extract_metadata(triple_block, 'meta:bridgeType')

            if domain_bridge and bridge_type:
                self.bridges.append((subject, predicate, obj, domain_bridge, bridge_type))

        return self.bridges

    def _extract_triple_block(self, content: str, subject: str, predicate: str, obj: str) -> str:
        """Extract the full block for a triple including metadata."""
        # Find the section containing this triple
        pattern = re.escape(subject) + r'\s+' + re.escape(predicate) + r'\s+' + re.escape(obj) + r'\s*;(.*?)(?=\n\n|\n\w+:|\Z)'
        match = re.search(pattern, content, re.DOTALL)
        return match.group(0) if match else ""

    def _extract_metadata(self, block: str, key: str) -> str:
        """Extract metadata value from triple block."""
        pattern = key + r'\s+"([^"]+)"'
        match = re.search(pattern, block)
        return match.group(1) if match else ""


class BridgeApplicator:
    """Apply bridges to concept files."""

    def __init__(self, pages_dir: str, log_path: str):
        self.pages_dir = Path(pages_dir)
        self.log_path = Path(log_path)
        self.stats: Dict[str, int] = defaultdict(int)
        self.file_updates: Dict[str, List[str]] = defaultdict(list)

    def iri_to_filename(self, iri: str) -> str:
        """
        Convert IRI to filename.
        Example: mv:Avatar → Avatar.md, aigo:ReinforcementLearning → Reinforcement Learning.md
        """
        # Extract the concept name after the namespace
        if ':' in iri:
            namespace, concept = iri.split(':', 1)
        else:
            concept = iri

        # Convert CamelCase to space-separated
        # Handle special cases: AIGovernance → AI Governance, NFT → NFT
        spaced = re.sub(r'([a-z])([A-Z])', r'\1 \2', concept)
        spaced = re.sub(r'([A-Z]+)([A-Z][a-z])', r'\1 \2', spaced)

        return f"{spaced}.md"

    def iri_to_page_link(self, iri: str) -> str:
        """
        Convert IRI to Logseq page link.
        Example: aigo:ReinforcementLearning → [[Reinforcement Learning]]
        """
        filename = self.iri_to_filename(iri)
        page_name = filename.replace('.md', '')
        return f"[[{page_name}]]"

    def apply_bridges(self, bridges: List[Tuple[str, str, str, str, str]]) -> Dict[str, int]:
        """
        Apply bridges to concept files.
        Returns: Statistics dictionary
        """
        for subject_iri, predicate, object_iri, domain_bridge, bridge_type in bridges:
            # Convert subject IRI to filename
            subject_file = self.iri_to_filename(subject_iri)
            subject_path = self.pages_dir / subject_file

            # Check if file exists (try variations)
            if not subject_path.exists():
                # Try without spaces
                alt_file = subject_file.replace(' ', '')
                alt_path = self.pages_dir / alt_file
                if alt_path.exists():
                    subject_path = alt_path
                    subject_file = alt_file
                else:
                    self.stats['files_not_found'] += 1
                    self.file_updates['not_found'].append(f"{subject_file} (from {subject_iri})")
                    continue

            # Convert object IRI to page link
            object_link = self.iri_to_page_link(object_iri)

            # Get predicate relationship type
            rel_type = PREDICATE_TO_RELATIONSHIP.get(predicate, 'unknown')

            # Create bridge entry
            bridge_entry = f"- bridges-to:: {object_link} (domain: {domain_bridge}, type: {bridge_type})"

            # Apply to file
            if self._add_bridge_to_file(subject_path, bridge_entry, subject_iri, object_iri):
                self.stats['bridges_applied'] += 1
                self.file_updates[subject_file].append(f"{predicate} {object_iri}")
            else:
                self.stats['bridges_skipped'] += 1

        return dict(self.stats)

    def _add_bridge_to_file(self, file_path: Path, bridge_entry: str, subject_iri: str, object_iri: str) -> bool:
        """Add bridge entry to concept file."""
        with open(file_path, 'r') as f:
            content = f.read()

        # Check if bridge already exists (avoid duplicates)
        if bridge_entry in content:
            return False

        # Find the "Cross-Domain Relationships" section
        # Pattern: - ## Cross-Domain Relationships
        cross_domain_pattern = r'(- ## Cross-Domain Relationships\s*\n)(.*?)(?=\n\s*- ##|\Z)'
        match = re.search(cross_domain_pattern, content, re.DOTALL)

        if match:
            # Insert bridge in existing section
            section_start = match.group(1)
            section_content = match.group(2)

            # Add bridge at the beginning of the section (after header)
            new_section = section_start + f"    {bridge_entry}\n" + section_content

            content = content[:match.start()] + new_section + content[match.end():]

            # Write back
            with open(file_path, 'w') as f:
                f.write(content)

            return True
        else:
            # No Cross-Domain Relationships section found
            # Try to find "Related Concepts" and add before it
            related_pattern = r'(\n\s*- ## Related Concepts)'
            match = re.search(related_pattern, content)

            if match:
                # Insert new section before Related Concepts
                new_section = f"\n  - ## Cross-Domain Relationships\n    {bridge_entry}\n"
                content = content[:match.start()] + new_section + content[match.start():]

                with open(file_path, 'w') as f:
                    f.write(content)

                return True

        return False

    def write_log(self):
        """Write application log to file."""
        with open(self.log_path, 'w') as f:
            f.write("=" * 80 + "\n")
            f.write("BRIDGE APPLICATION LOG\n")
            f.write("=" * 80 + "\n\n")

            f.write("STATISTICS\n")
            f.write("-" * 80 + "\n")
            for key, value in sorted(self.stats.items()):
                f.write(f"{key}: {value}\n")
            f.write("\n")

            f.write("FILE UPDATES\n")
            f.write("-" * 80 + "\n")
            for filename, updates in sorted(self.file_updates.items()):
                if filename != 'not_found':
                    f.write(f"\n{filename}:\n")
                    for update in updates:
                        f.write(f"  + {update}\n")

            f.write("\n")
            f.write("FILES NOT FOUND\n")
            f.write("-" * 80 + "\n")
            for missing in self.file_updates.get('not_found', []):
                f.write(f"  - {missing}\n")


def main():
    """Main execution function."""
    # Paths
    base_dir = Path("/home/devuser/workspace/project/Metaverse-Ontology")
    ttl_path = base_dir / "swarm-coordination" / "recovered-bridges-sample.ttl"
    pages_dir = base_dir / "logseq" / "pages"
    log_path = base_dir / "swarm-coordination" / "bridge-application-log.txt"

    print("=" * 80)
    print("BRIDGE APPLICATION SCRIPT")
    print("=" * 80)
    print(f"Source: {ttl_path}")
    print(f"Target: {pages_dir}")
    print(f"Log: {log_path}")
    print()

    # Parse bridges
    print("Parsing bridges...")
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
    print()
    print(f"Log written to: {log_path}")
    print("=" * 80)


if __name__ == "__main__":
    main()
