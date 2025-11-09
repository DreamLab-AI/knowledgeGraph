#!/usr/bin/env python3
"""
Level 5: Statistics Reporter
Generates comprehensive statistics about the ontology
"""

import sys
import re
from typing import Dict, List
from collections import defaultdict

class StatisticsReporter:
    def __init__(self, ontology_file: str):
        self.ontology_file = ontology_file
        self.stats = defaultdict(int)

    def generate_report(self) -> Dict:
        """Generate comprehensive statistics report"""
        print("\n" + "=" * 80)
        print("LEVEL 5: STATISTICS REPORT")
        print("=" * 80)

        with open(self.ontology_file, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')

        # File statistics
        self._gather_file_stats(lines)

        # Class statistics by domain
        self._gather_class_stats(lines)

        # Bridge statistics
        self._gather_bridge_stats(lines)

        # Metadata statistics
        self._gather_metadata_stats(lines)

        # Provenance statistics
        self._gather_provenance_stats(lines)

        # Print comprehensive report
        self._print_report()

        return {
            'level': 5,
            'name': 'Statistics Report',
            'score': 100,
            'target': 100,
            'stats': dict(self.stats),
            'passed': True
        }

    def _gather_file_stats(self, lines: List[str]):
        """Gather file-level statistics"""
        print("\n[1/5] Gathering file statistics...")

        import os
        file_size = os.path.getsize(self.ontology_file)

        self.stats['file_size_bytes'] = file_size
        self.stats['file_size_kb'] = round(file_size / 1024, 2)
        self.stats['total_lines'] = len(lines)
        self.stats['non_empty_lines'] = sum(1 for line in lines if line.strip())
        self.stats['comment_lines'] = sum(1 for line in lines if line.strip().startswith('#'))

        print(f"   ✓ File size: {self.stats['file_size_kb']} KB")
        print(f"   ✓ Total lines: {self.stats['total_lines']}")
        print(f"   ✓ Non-empty lines: {self.stats['non_empty_lines']}")
        print(f"   ✓ Comment lines: {self.stats['comment_lines']}")

    def _gather_class_stats(self, lines: List[str]):
        """Gather class statistics by domain"""
        print("\n[2/5] Gathering class statistics by domain...")

        domain_classes = defaultdict(int)

        for line in lines:
            if 'owl:Class' in line:
                if 'mv:' in line:
                    domain_classes['metaverse'] += 1
                elif 'bc:' in line:
                    domain_classes['blockchain'] += 1
                elif 'aigo:' in line:
                    domain_classes['ai'] += 1
                elif 'rb:' in line:
                    domain_classes['robotics'] += 1
                elif 'dt:' in line:
                    domain_classes['bridge'] += 1

        self.stats['mv_classes'] = domain_classes['metaverse']
        self.stats['bc_classes'] = domain_classes['blockchain']
        self.stats['ai_classes'] = domain_classes['ai']
        self.stats['rb_classes'] = domain_classes['robotics']
        self.stats['bridge_classes'] = domain_classes['bridge']
        self.stats['total_classes'] = sum(domain_classes.values())

        print(f"   ✓ Metaverse classes: {self.stats['mv_classes']}")
        print(f"   ✓ Blockchain classes: {self.stats['bc_classes']}")
        print(f"   ✓ AI classes: {self.stats['ai_classes']}")
        print(f"   ✓ Robotics classes: {self.stats['rb_classes']}")
        print(f"   ✓ Bridge classes: {self.stats['bridge_classes']}")
        print(f"   ✓ Total classes: {self.stats['total_classes']}")

    def _gather_bridge_stats(self, lines: List[str]):
        """Gather cross-domain bridge statistics"""
        print("\n[3/5] Gathering cross-domain bridge statistics...")

        bridge_types = {
            'enables': 0,
            'integrates': 0,
            'supports': 0,
            'enhances': 0,
            'requires': 0,
            'implements': 0,
            'connects': 0,
            'facilitates': 0
        }

        for line in lines:
            for bridge_type in bridge_types.keys():
                if f'dt:{bridge_type}' in line:
                    bridge_types[bridge_type] += 1

        total_bridges = sum(bridge_types.values())

        for bridge_type, count in bridge_types.items():
            self.stats[f'bridge_{bridge_type}'] = count

        self.stats['total_bridges'] = total_bridges

        print(f"   ✓ Total cross-domain bridges: {total_bridges}")
        for bridge_type, count in bridge_types.items():
            if count > 0:
                print(f"     - dt:{bridge_type}: {count}")

    def _gather_metadata_stats(self, lines: List[str]):
        """Gather metadata annotation statistics"""
        print("\n[4/5] Gathering metadata statistics...")

        metadata_props = {
            'meta:sourceOntology': 0,
            'meta:sourceFile': 0,
            'meta:sourceVersion': 0,
            'meta:integrationDate': 0,
            'meta:technologyDomain': 0,
            'meta:disruptiveTechCategory': 0,
            'meta:technologyReadinessLevel': 0,
            'meta:qualityScore': 0
        }

        for line in lines:
            for prop in metadata_props.keys():
                if prop in line:
                    metadata_props[prop] += 1

        total_metadata = sum(metadata_props.values())

        for prop, count in metadata_props.items():
            self.stats[f'metadata_{prop.split(":")[1]}'] = count

        self.stats['total_metadata_annotations'] = total_metadata

        # Calculate coverage
        classes_with_metadata = sum(1 for prop, count in metadata_props.items()
                                    if prop == 'meta:sourceOntology' and count > 0)

        coverage_pct = 0
        if self.stats['total_classes'] > 0:
            # Estimate based on sourceOntology annotations
            coverage_pct = round((metadata_props['meta:sourceOntology'] /
                                 self.stats['total_classes'] * 100), 2)

        self.stats['metadata_coverage_pct'] = coverage_pct

        print(f"   ✓ Total metadata annotations: {total_metadata}")
        print(f"   ✓ Metadata coverage: {coverage_pct}%")

        for prop, count in metadata_props.items():
            if count > 0:
                print(f"     - {prop}: {count}")

    def _gather_provenance_stats(self, lines: List[str]):
        """Gather PROV-O provenance statistics"""
        print("\n[5/5] Gathering provenance statistics...")

        prov_elements = {
            'prov:wasGeneratedBy': 0,
            'prov:generatedAtTime': 0,
            'prov:wasDerivedFrom': 0,
            'prov:wasAttributedTo': 0,
            'prov:used': 0,
            'prov:Activity': 0,
            'prov:Entity': 0,
            'prov:Agent': 0
        }

        for line in lines:
            for element in prov_elements.keys():
                if element in line:
                    prov_elements[element] += 1

        total_prov = sum(prov_elements.values())

        for element, count in prov_elements.items():
            self.stats[f'prov_{element.split(":")[1]}'] = count

        self.stats['total_prov_statements'] = total_prov

        # Calculate coverage
        coverage_pct = 0
        if self.stats['total_classes'] > 0:
            coverage_pct = round((prov_elements['prov:wasGeneratedBy'] /
                                 self.stats['total_classes'] * 100), 2)

        self.stats['prov_coverage_pct'] = coverage_pct

        print(f"   ✓ Total PROV-O statements: {total_prov}")
        print(f"   ✓ Provenance coverage: {coverage_pct}%")

        for element, count in prov_elements.items():
            if count > 0:
                print(f"     - {element}: {count}")

    def _print_report(self):
        """Print comprehensive statistics report"""
        print("\n" + "=" * 80)
        print("COMPREHENSIVE STATISTICS SUMMARY")
        print("=" * 80)

        print(f"\nFILE INFORMATION:")
        print(f"  File size: {self.stats['file_size_kb']} KB ({self.stats['file_size_bytes']} bytes)")
        print(f"  Total lines: {self.stats['total_lines']:,}")
        print(f"  Non-empty lines: {self.stats['non_empty_lines']:,}")
        print(f"  Comment lines: {self.stats['comment_lines']:,}")

        print(f"\nCLASS DISTRIBUTION:")
        print(f"  Metaverse: {self.stats['mv_classes']}")
        print(f"  Blockchain: {self.stats['bc_classes']}")
        print(f"  AI: {self.stats['ai_classes']}")
        print(f"  Robotics: {self.stats['rb_classes']}")
        print(f"  Bridge classes: {self.stats['bridge_classes']}")
        print(f"  TOTAL: {self.stats['total_classes']}")

        print(f"\nCROSS-DOMAIN BRIDGES:")
        print(f"  Total bridges: {self.stats['total_bridges']}")

        print(f"\nMETADATA COVERAGE:")
        print(f"  Total annotations: {self.stats['total_metadata_annotations']}")
        print(f"  Coverage: {self.stats['metadata_coverage_pct']}%")

        print(f"\nPROVENANCE TRACKING:")
        print(f"  Total PROV-O statements: {self.stats['total_prov_statements']}")
        print(f"  Coverage: {self.stats['prov_coverage_pct']}%")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python level5_statistics_reporter.py <ontology_file>")
        sys.exit(1)

    reporter = StatisticsReporter(sys.argv[1])
    result = reporter.generate_report()

    print("\n" + "=" * 80)
    print(f"STATISTICS REPORT COMPLETED")
    print("=" * 80)

    sys.exit(0)
