#!/usr/bin/env python3
"""
Level 2: Semantic Validation
Validates logical consistency, hierarchy, domain/range constraints
Target Score: 96/100
"""

import sys
import re
from typing import Dict, List, Set, Tuple
from collections import defaultdict

class SemanticValidator:
    def __init__(self, ontology_file: str):
        self.ontology_file = ontology_file
        self.errors = []
        self.warnings = []
        self.stats = defaultdict(int)
        self.classes = set()
        self.properties = set()
        self.hierarchy = defaultdict(set)
        self.domains = {}
        self.ranges = {}

    def validate(self) -> Dict:
        """Run all semantic validation checks"""
        print("\n" + "=" * 80)
        print("LEVEL 2: SEMANTIC VALIDATION")
        print("=" * 80)

        with open(self.ontology_file, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')

        # Parse ontology structure
        self._parse_ontology(lines)

        # Check 1: Validate hierarchy completeness
        self._check_hierarchy_completeness()

        # Check 2: Check for circular dependencies
        self._check_circular_dependencies()

        # Check 3: Validate domain/range constraints
        self._check_domain_range_constraints()

        # Check 4: Check logical consistency
        self._check_logical_consistency()

        # Check 5: Validate property usage
        self._check_property_usage(lines)

        # Calculate score
        score = self._calculate_score()

        return {
            'level': 2,
            'name': 'Semantic Validation',
            'score': score,
            'target': 96,
            'errors': self.errors,
            'warnings': self.warnings,
            'stats': dict(self.stats),
            'passed': score >= 96
        }

    def _parse_ontology(self, lines: List[str]):
        """Parse ontology to extract classes, properties, and relationships"""
        print("\n[1/5] Parsing ontology structure...")

        current_subject = None

        for line in lines:
            stripped = line.strip()
            if not stripped or stripped.startswith('#'):
                continue

            # Extract classes (both 'a' and 'rdf:type' patterns)
            if 'owl:Class' in stripped:
                match = re.search(r'(\w+:\w+)\s+(?:a|rdf:type)\s+owl:Class', stripped)
                if match:
                    class_name = match.group(1)
                    self.classes.add(class_name)
                    current_subject = class_name

            # Extract properties
            if re.search(r'(?:a|rdf:type)\s+owl:(Object|Datatype|Annotation)Property', stripped):
                match = re.search(r'(\w+:\w+)\s+(?:a|rdf:type)\s+owl:', stripped)
                if match:
                    self.properties.add(match.group(1))

            # Extract subClassOf relationships
            if 'rdfs:subClassOf' in stripped:
                match = re.search(r'rdfs:subClassOf\s+(\w+:\w+)', stripped)
                if match and current_subject:
                    parent = match.group(1)
                    self.hierarchy[current_subject].add(parent)

            # Extract domain constraints
            if 'rdfs:domain' in stripped:
                match = re.search(r'(\w+:\w+).*rdfs:domain\s+(\w+:\w+)', stripped)
                if match:
                    prop, domain = match.groups()
                    self.domains[prop] = domain

            # Extract range constraints
            if 'rdfs:range' in stripped:
                match = re.search(r'(\w+:\w+).*rdfs:range\s+(\w+:\w+)', stripped)
                if match:
                    prop, range_class = match.groups()
                    self.ranges[prop] = range_class

        self.stats['total_classes'] = len(self.classes)
        self.stats['total_properties'] = len(self.properties)
        self.stats['hierarchy_relationships'] = sum(len(v) for v in self.hierarchy.values())

        print(f"   ✓ Classes found: {len(self.classes)}")
        print(f"   ✓ Properties found: {len(self.properties)}")
        print(f"   ✓ Hierarchy relationships: {self.stats['hierarchy_relationships']}")

    def _check_hierarchy_completeness(self):
        """Validate that all parent classes in hierarchy exist"""
        print("\n[2/5] Validating hierarchy completeness...")

        undefined_parents = set()

        for child, parents in self.hierarchy.items():
            for parent in parents:
                # Allow owl:Thing and standard OWL classes
                if parent.startswith('owl:') or parent.startswith('rdfs:'):
                    continue
                if parent not in self.classes:
                    undefined_parents.add(parent)
                    self.errors.append(f"Undefined parent class: {parent} (referenced by {child})")

        self.stats['undefined_parents'] = len(undefined_parents)
        print(f"   ✓ Undefined parent classes: {len(undefined_parents)}")

        if len(undefined_parents) == 0:
            print(f"   ✓ All hierarchy relationships valid")

    def _check_circular_dependencies(self):
        """Check for circular class hierarchies"""
        print("\n[3/5] Checking for circular dependencies...")

        def has_cycle(node, visited, rec_stack):
            visited.add(node)
            rec_stack.add(node)

            for parent in self.hierarchy.get(node, []):
                if parent not in visited:
                    if has_cycle(parent, visited, rec_stack):
                        return True
                elif parent in rec_stack:
                    return True

            rec_stack.remove(node)
            return False

        cycles = []
        visited = set()

        for class_name in self.classes:
            if class_name not in visited:
                rec_stack = set()
                if has_cycle(class_name, visited, rec_stack):
                    cycles.append(class_name)

        self.stats['circular_dependencies'] = len(cycles)

        if cycles:
            for cycle in cycles:
                self.errors.append(f"Circular dependency detected involving: {cycle}")

        print(f"   ✓ Circular dependencies found: {len(cycles)}")

    def _check_domain_range_constraints(self):
        """Validate domain and range constraints"""
        print("\n[4/5] Validating domain/range constraints...")

        invalid_domains = 0
        invalid_ranges = 0

        for prop, domain in self.domains.items():
            if not domain.startswith('owl:') and not domain.startswith('rdfs:'):
                if domain not in self.classes:
                    self.warnings.append(f"Property {prop} has undefined domain: {domain}")
                    invalid_domains += 1

        for prop, range_class in self.ranges.items():
            if not range_class.startswith('owl:') and not range_class.startswith('rdfs:'):
                if not range_class.startswith('xsd:') and range_class not in self.classes:
                    self.warnings.append(f"Property {prop} has undefined range: {range_class}")
                    invalid_ranges += 1

        self.stats['invalid_domains'] = invalid_domains
        self.stats['invalid_ranges'] = invalid_ranges
        self.stats['total_domain_constraints'] = len(self.domains)
        self.stats['total_range_constraints'] = len(self.ranges)

        print(f"   ✓ Domain constraints: {len(self.domains)} ({invalid_domains} invalid)")
        print(f"   ✓ Range constraints: {len(self.ranges)} ({invalid_ranges} invalid)")

    def _check_logical_consistency(self):
        """Check for logical consistency issues"""
        print("\n[5/5] Checking logical consistency...")

        # Check for classes that are both subclass and superclass of each other
        inconsistencies = 0

        for child, parents in self.hierarchy.items():
            for parent in parents:
                if parent in self.hierarchy and child in self.hierarchy[parent]:
                    self.errors.append(f"Mutual subclass relationship: {child} <-> {parent}")
                    inconsistencies += 1

        self.stats['logical_inconsistencies'] = inconsistencies
        print(f"   ✓ Logical inconsistencies found: {inconsistencies}")

    def _check_property_usage(self, lines: List[str]):
        """Check if properties are used consistently"""
        # Count property usage
        property_usage = defaultdict(int)

        for line in lines:
            for prop in self.properties:
                if prop in line:
                    property_usage[prop] += 1

        unused = [p for p in self.properties if property_usage[p] <= 1]
        self.stats['unused_properties'] = len(unused)

        if len(unused) > 0:
            self.warnings.append(f"{len(unused)} properties appear to be unused or rarely used")

    def _calculate_score(self) -> float:
        """Calculate semantic validation score"""
        # Base score
        score = 100

        # Deduct for errors
        score -= len(self.errors) * 2

        # Deduct for warnings
        score -= len(self.warnings) * 0.5

        # Bonus for complete hierarchy
        if self.stats['undefined_parents'] == 0:
            score += 0

        return max(0, min(100, round(score, 2)))

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python level2_semantic_validator.py <ontology_file>")
        sys.exit(1)

    validator = SemanticValidator(sys.argv[1])
    result = validator.validate()

    print("\n" + "=" * 80)
    print(f"SCORE: {result['score']}/{result['target']}")
    print(f"STATUS: {'PASS' if result['passed'] else 'FAIL'}")
    print("=" * 80)

    sys.exit(0 if result['passed'] else 1)
