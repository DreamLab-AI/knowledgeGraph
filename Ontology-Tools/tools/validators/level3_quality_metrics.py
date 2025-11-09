#!/usr/bin/env python3
"""
Level 3: Quality Metrics Validation
Measures cohesion, coupling, hierarchy depth/breadth, documentation coverage
Target Score: 92/100
"""

import sys
import re
from typing import Dict, List, Set
from collections import defaultdict
import math

class QualityMetricsValidator:
    def __init__(self, ontology_file: str):
        self.ontology_file = ontology_file
        self.warnings = []
        self.stats = defaultdict(float)
        self.classes = {}
        self.properties = {}
        self.hierarchy = defaultdict(set)
        self.class_properties = defaultdict(set)

    def validate(self) -> Dict:
        """Run all quality metrics validation checks"""
        print("\n" + "=" * 80)
        print("LEVEL 3: QUALITY METRICS VALIDATION")
        print("=" * 80)

        with open(self.ontology_file, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')

        # Parse ontology
        self._parse_ontology(lines)

        # Check 1: Calculate cohesion score
        cohesion = self._calculate_cohesion()

        # Check 2: Calculate coupling score
        coupling = self._calculate_coupling()

        # Check 3: Measure hierarchy depth
        depth_score = self._measure_hierarchy_depth()

        # Check 4: Measure hierarchy breadth
        breadth_score = self._measure_hierarchy_breadth()

        # Check 5: Check documentation coverage
        doc_coverage = self._check_documentation_coverage(lines)

        # Check 6: Check metadata coverage
        metadata_coverage = self._check_metadata_coverage(lines)

        # Calculate overall score
        score = self._calculate_score(cohesion, coupling, depth_score, breadth_score,
                                      doc_coverage, metadata_coverage)

        return {
            'level': 3,
            'name': 'Quality Metrics',
            'score': score,
            'target': 92,
            'warnings': self.warnings,
            'stats': dict(self.stats),
            'metrics': {
                'cohesion': cohesion,
                'coupling': coupling,
                'hierarchy_depth_score': depth_score,
                'hierarchy_breadth_score': breadth_score,
                'documentation_coverage': doc_coverage,
                'metadata_coverage': metadata_coverage
            },
            'passed': score >= 92
        }

    def _parse_ontology(self, lines: List[str]):
        """Parse ontology structure"""
        print("\n[1/6] Parsing ontology structure...")

        current_class = None
        current_property = None

        for line in lines:
            stripped = line.strip()

            # Parse class declarations (both 'a' and 'rdf:type' patterns)
            if 'owl:Class' in stripped:
                match = re.search(r'(\w+:\w+)\s+(?:a|rdf:type)\s+owl:Class', stripped)
                if match:
                    class_name = match.group(1)
                    self.classes[class_name] = {
                        'label': None,
                        'comment': None,
                        'metadata': set()
                    }
                    current_class = class_name

            # Parse property declarations
            if re.search(r'(?:a|rdf:type)\s+owl:(Object|Datatype|Annotation)Property', stripped):
                match = re.search(r'(\w+:\w+)\s+(?:a|rdf:type)\s+owl:', stripped)
                if match:
                    prop_name = match.group(1)
                    self.properties[prop_name] = {
                        'domain': None,
                        'range': None,
                        'label': None
                    }
                    current_property = prop_name

            # Parse hierarchy
            if 'rdfs:subClassOf' in stripped and current_class:
                match = re.search(r'rdfs:subClassOf\s+(\w+:\w+)', stripped)
                if match:
                    self.hierarchy[current_class].add(match.group(1))

            # Parse labels
            if 'rdfs:label' in stripped:
                if current_class and current_class in self.classes:
                    self.classes[current_class]['label'] = True
                elif current_property and current_property in self.properties:
                    self.properties[current_property]['label'] = True

            # Parse comments
            if 'rdfs:comment' in stripped and current_class and current_class in self.classes:
                self.classes[current_class]['comment'] = True

            # Parse metadata annotations
            metadata_props = ['meta:sourceOntology', 'meta:technologyDomain',
                            'meta:integrationDate', 'dc:description']
            for meta_prop in metadata_props:
                if meta_prop in stripped and current_class and current_class in self.classes:
                    self.classes[current_class]['metadata'].add(meta_prop)

        print(f"   ✓ Parsed {len(self.classes)} classes")
        print(f"   ✓ Parsed {len(self.properties)} properties")
        print(f"   ✓ Found {sum(len(v) for v in self.hierarchy.values())} hierarchy relationships")

    def _calculate_cohesion(self) -> float:
        """Calculate ontology cohesion score (target > 0.7)"""
        print("\n[2/6] Calculating cohesion score...")

        if not self.classes:
            return 0.0

        # Cohesion = ratio of classes with defined relationships to total classes
        classes_with_hierarchy = len([c for c in self.classes if c in self.hierarchy])
        cohesion = classes_with_hierarchy / len(self.classes) if self.classes else 0

        self.stats['cohesion_score'] = round(cohesion, 3)
        self.stats['classes_with_hierarchy'] = classes_with_hierarchy

        print(f"   ✓ Cohesion score: {cohesion:.3f} (target > 0.7)")

        if cohesion < 0.7:
            self.warnings.append(f"Low cohesion: {cohesion:.3f} < 0.7")

        return cohesion

    def _calculate_coupling(self) -> float:
        """Calculate ontology coupling score (target 0.5-0.7)"""
        print("\n[3/6] Calculating coupling score...")

        if not self.classes:
            return 0.0

        # Coupling = average number of relationships per class
        total_relationships = sum(len(v) for v in self.hierarchy.values())
        coupling = total_relationships / len(self.classes) if self.classes else 0

        # Normalize to 0-1 scale (assume max 5 relationships is optimal)
        normalized_coupling = min(coupling / 5.0, 1.0)

        self.stats['coupling_score'] = round(normalized_coupling, 3)
        self.stats['avg_relationships_per_class'] = round(coupling, 2)

        print(f"   ✓ Coupling score: {normalized_coupling:.3f} (target 0.5-0.7)")
        print(f"   ✓ Average relationships per class: {coupling:.2f}")

        if normalized_coupling < 0.5 or normalized_coupling > 0.7:
            self.warnings.append(f"Coupling outside optimal range: {normalized_coupling:.3f}")

        return normalized_coupling

    def _measure_hierarchy_depth(self) -> float:
        """Measure hierarchy depth (target 4-6 levels)"""
        print("\n[4/6] Measuring hierarchy depth...")

        def get_depth(class_name, visited=None):
            if visited is None:
                visited = set()
            if class_name in visited:
                return 0
            visited.add(class_name)

            if class_name not in self.hierarchy or not self.hierarchy[class_name]:
                return 1

            max_parent_depth = max(get_depth(parent, visited.copy())
                                  for parent in self.hierarchy[class_name])
            return max_parent_depth + 1

        depths = [get_depth(c) for c in self.classes]
        max_depth = max(depths) if depths else 0
        avg_depth = sum(depths) / len(depths) if depths else 0

        self.stats['max_hierarchy_depth'] = max_depth
        self.stats['avg_hierarchy_depth'] = round(avg_depth, 2)

        # Score based on target range 4-6
        if 4 <= max_depth <= 6:
            depth_score = 1.0
        elif max_depth < 4:
            depth_score = max_depth / 4.0
        else:
            depth_score = max(0, 1.0 - (max_depth - 6) * 0.1)

        print(f"   ✓ Maximum depth: {max_depth} levels (target 4-6)")
        print(f"   ✓ Average depth: {avg_depth:.2f} levels")
        print(f"   ✓ Depth score: {depth_score:.3f}")

        return depth_score

    def _measure_hierarchy_breadth(self) -> float:
        """Measure hierarchy breadth (target 6-10 children per class)"""
        print("\n[5/6] Measuring hierarchy breadth...")

        # Count children per class
        children_count = defaultdict(int)
        for child, parents in self.hierarchy.items():
            for parent in parents:
                children_count[parent] += 1

        if children_count:
            avg_children = sum(children_count.values()) / len(children_count)
            max_children = max(children_count.values())
        else:
            avg_children = 0
            max_children = 0

        self.stats['avg_children_per_class'] = round(avg_children, 2)
        self.stats['max_children'] = max_children

        # Score based on target range 6-10
        if 6 <= avg_children <= 10:
            breadth_score = 1.0
        elif avg_children < 6:
            breadth_score = avg_children / 6.0
        else:
            breadth_score = max(0, 1.0 - (avg_children - 10) * 0.05)

        print(f"   ✓ Average children per class: {avg_children:.2f} (target 6-10)")
        print(f"   ✓ Maximum children: {max_children}")
        print(f"   ✓ Breadth score: {breadth_score:.3f}")

        return breadth_score

    def _check_documentation_coverage(self, lines: List[str]) -> float:
        """Check documentation coverage (target > 95%)"""
        print("\n[6/6] Checking documentation coverage...")

        documented_classes = sum(1 for c in self.classes.values()
                                if c['label'] or c['comment'])
        total_classes = len(self.classes)

        coverage = (documented_classes / total_classes * 100) if total_classes else 0

        self.stats['documented_classes'] = documented_classes
        self.stats['total_classes'] = total_classes
        self.stats['documentation_coverage_pct'] = round(coverage, 2)

        print(f"   ✓ Documented classes: {documented_classes}/{total_classes}")
        print(f"   ✓ Documentation coverage: {coverage:.2f}% (target > 95%)")

        if coverage < 95:
            self.warnings.append(f"Low documentation coverage: {coverage:.2f}% < 95%")

        return coverage / 100.0

    def _check_metadata_coverage(self, lines: List[str]) -> float:
        """Check metadata annotation coverage (target 100%)"""
        print("\n[Bonus] Checking metadata coverage...")

        classes_with_metadata = sum(1 for c in self.classes.values()
                                    if len(c['metadata']) > 0)
        total_classes = len(self.classes)

        coverage = (classes_with_metadata / total_classes * 100) if total_classes else 0

        self.stats['classes_with_metadata'] = classes_with_metadata
        self.stats['metadata_coverage_pct'] = round(coverage, 2)

        print(f"   ✓ Classes with metadata: {classes_with_metadata}/{total_classes}")
        print(f"   ✓ Metadata coverage: {coverage:.2f}% (target 100%)")

        return coverage / 100.0

    def _calculate_score(self, cohesion, coupling, depth_score, breadth_score,
                        doc_coverage, metadata_coverage) -> float:
        """Calculate overall quality metrics score"""
        # Weighted scoring
        weights = {
            'cohesion': 0.20,
            'coupling': 0.20,
            'depth': 0.15,
            'breadth': 0.15,
            'documentation': 0.20,
            'metadata': 0.10
        }

        score = (
            cohesion * weights['cohesion'] * 100 +
            coupling * weights['coupling'] * 100 +
            depth_score * weights['depth'] * 100 +
            breadth_score * weights['breadth'] * 100 +
            doc_coverage * weights['documentation'] * 100 +
            metadata_coverage * weights['metadata'] * 100
        )

        # Deduct for warnings
        score -= len(self.warnings) * 1

        return max(0, round(score, 2))

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python level3_quality_metrics.py <ontology_file>")
        sys.exit(1)

    validator = QualityMetricsValidator(sys.argv[1])
    result = validator.validate()

    print("\n" + "=" * 80)
    print(f"SCORE: {result['score']}/{result['target']}")
    print(f"STATUS: {'PASS' if result['passed'] else 'FAIL'}")
    print("=" * 80)

    sys.exit(0 if result['passed'] else 1)
