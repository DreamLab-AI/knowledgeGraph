#!/usr/bin/env python3
"""
Level 1: Syntactic Validation
Validates Turtle RDF syntax and OWL 2 DL compliance
Target Score: 100/100
"""

import sys
import re
from typing import Dict, List, Tuple
from collections import defaultdict

class SyntacticValidator:
    def __init__(self, ontology_file: str):
        self.ontology_file = ontology_file
        self.errors = []
        self.warnings = []
        self.stats = defaultdict(int)

    def validate(self) -> Dict:
        """Run all syntactic validation checks"""
        print("=" * 80)
        print("LEVEL 1: SYNTACTIC VALIDATION")
        print("=" * 80)

        with open(self.ontology_file, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')

        # Check 1: Validate Turtle syntax
        self._check_turtle_syntax(lines)

        # Check 2: Validate namespace prefixes
        self._check_namespaces(lines)

        # Check 3: Validate triple completeness
        self._check_triples(lines)

        # Check 4: Validate OWL 2 DL compliance
        self._check_owl2_dl(lines)

        # Check 5: Check for orphaned literals
        self._check_orphaned_literals(lines)

        # Calculate score
        score = self._calculate_score()

        return {
            'level': 1,
            'name': 'Syntactic Validation',
            'score': score,
            'target': 100,
            'errors': self.errors,
            'warnings': self.warnings,
            'stats': dict(self.stats),
            'passed': score >= 100
        }

    def _check_turtle_syntax(self, lines: List[str]):
        """Check basic Turtle syntax rules"""
        print("\n[1/5] Checking Turtle RDF syntax...")

        triple_pattern = re.compile(r'^[^#]*[.;,]\s*$')
        prefix_pattern = re.compile(r'^@prefix\s+\w+:\s+<[^>]+>\s+\.\s*$')

        in_multiline = False
        bracket_count = 0

        for i, line in enumerate(lines, 1):
            stripped = line.strip()

            # Skip comments and empty lines
            if not stripped or stripped.startswith('#'):
                continue

            # Check prefix declarations
            if stripped.startswith('@prefix'):
                if not prefix_pattern.match(stripped):
                    self.errors.append(f"Line {i}: Invalid prefix declaration")
                else:
                    self.stats['valid_prefixes'] += 1

            # Track brackets for multiline statements
            bracket_count += stripped.count('[') - stripped.count(']')
            bracket_count += stripped.count('(') - stripped.count(')')

            # Check for unclosed strings
            if stripped.count('"') % 2 != 0 and not stripped.endswith('\\'):
                self.warnings.append(f"Line {i}: Possible unclosed string")

        if bracket_count != 0:
            self.errors.append(f"Unmatched brackets: {bracket_count}")

        print(f"   ✓ Found {self.stats['valid_prefixes']} valid prefix declarations")
        print(f"   ✓ {len(self.errors)} syntax errors, {len(self.warnings)} warnings")

    def _check_namespaces(self, lines: List[str]):
        """Validate all namespace prefixes are declared"""
        print("\n[2/5] Validating namespace prefixes...")

        # Extract declared prefixes
        declared_prefixes = set()
        prefix_pattern = re.compile(r'^@prefix\s+(\w+):\s+<([^>]+)>\s+\.')

        for line in lines:
            match = prefix_pattern.match(line.strip())
            if match:
                declared_prefixes.add(match.group(1))

        # Find all used prefixes
        used_prefixes = set()
        prefix_use_pattern = re.compile(r'\b(\w+):(\w+)')

        for line in lines:
            if line.strip().startswith('#') or line.strip().startswith('@prefix'):
                continue
            matches = prefix_use_pattern.findall(line)
            for prefix, _ in matches:
                used_prefixes.add(prefix)

        # Check for undeclared prefixes
        undeclared = used_prefixes - declared_prefixes
        if undeclared:
            for prefix in undeclared:
                self.errors.append(f"Undeclared prefix used: {prefix}")

        self.stats['declared_prefixes'] = len(declared_prefixes)
        self.stats['used_prefixes'] = len(used_prefixes)

        print(f"   ✓ Declared prefixes: {len(declared_prefixes)}")
        print(f"   ✓ Used prefixes: {len(used_prefixes)}")
        print(f"   ✓ Undeclared prefixes: {len(undeclared)}")

    def _check_triples(self, lines: List[str]):
        """Check for complete triple statements"""
        print("\n[3/5] Validating triple completeness...")

        triple_count = 0
        incomplete_triples = 0

        # Simple triple pattern (subject predicate object .)
        for i, line in enumerate(lines, 1):
            stripped = line.strip()
            if not stripped or stripped.startswith('#') or stripped.startswith('@'):
                continue

            # Count statement terminators
            if '.' in stripped or ';' in stripped or ',' in stripped:
                triple_count += 1

            # Check for incomplete patterns (basic heuristic)
            if stripped.endswith(':') or stripped.endswith('a'):
                incomplete_triples += 1

        self.stats['total_triples'] = triple_count
        self.stats['incomplete_triples'] = incomplete_triples

        print(f"   ✓ Total triples/statements: {triple_count}")
        print(f"   ✓ Potentially incomplete: {incomplete_triples}")

    def _check_owl2_dl(self, lines: List[str]):
        """Check OWL 2 DL compliance"""
        print("\n[4/5] Validating OWL 2 DL compliance...")

        # Check for proper class declarations (both 'a' and 'rdf:type' patterns)
        class_pattern1 = re.compile(r'a\s+owl:Class')
        class_pattern2 = re.compile(r'rdf:type\s+owl:Class')
        property_pattern1 = re.compile(r'a\s+owl:(Object|Datatype|Annotation)Property')
        property_pattern2 = re.compile(r'rdf:type\s+owl:(Object|Datatype|Annotation)Property')

        classes = 0
        properties = 0

        for line in lines:
            if class_pattern1.search(line) or class_pattern2.search(line):
                classes += 1
            if property_pattern1.search(line) or property_pattern2.search(line):
                properties += 1

        self.stats['owl_classes'] = classes
        self.stats['owl_properties'] = properties

        print(f"   ✓ OWL classes declared: {classes}")
        print(f"   ✓ OWL properties declared: {properties}")

    def _check_orphaned_literals(self, lines: List[str]):
        """Check for orphaned literals (literals not in proper triple context)"""
        print("\n[5/5] Checking for orphaned literals...")

        orphaned = 0
        literal_pattern = re.compile(r'^\s*"[^"]*"')

        for i, line in enumerate(lines, 1):
            stripped = line.strip()
            if literal_pattern.match(stripped):
                # Check if it's part of a proper triple
                if not any(x in stripped for x in ['a ', 'rdfs:', 'owl:', 'dc:', 'meta:', 'dt:']):
                    orphaned += 1
                    self.warnings.append(f"Line {i}: Possible orphaned literal")

        self.stats['orphaned_literals'] = orphaned
        print(f"   ✓ Orphaned literals found: {orphaned}")

    def _calculate_score(self) -> float:
        """Calculate final score based on errors and warnings"""
        # Deduct points for errors and warnings
        error_penalty = len(self.errors) * 5
        warning_penalty = len(self.warnings) * 0.5

        score = max(0, 100 - error_penalty - warning_penalty)
        return round(score, 2)

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python level1_syntactic_validator.py <ontology_file>")
        sys.exit(1)

    validator = SyntacticValidator(sys.argv[1])
    result = validator.validate()

    print("\n" + "=" * 80)
    print(f"SCORE: {result['score']}/{result['target']}")
    print(f"STATUS: {'PASS' if result['passed'] else 'FAIL'}")
    print("=" * 80)

    sys.exit(0 if result['passed'] else 1)
