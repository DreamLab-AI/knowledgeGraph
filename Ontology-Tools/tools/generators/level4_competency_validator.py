#!/usr/bin/env python3
"""
Level 4: Competency Evaluation
Tests cross-domain reasoning, semantic bridges, SPARQL performance, provenance
Target Score: 88/100
"""

import sys
import re
from typing import Dict, List, Set
from collections import defaultdict

class CompetencyValidator:
    def __init__(self, ontology_file: str):
        self.ontology_file = ontology_file
        self.warnings = []
        self.stats = defaultdict(int)
        self.bridges = []
        self.domains = defaultdict(set)
        self.provenance = {}

    def validate(self) -> Dict:
        """Run all competency validation checks"""
        print("\n" + "=" * 80)
        print("LEVEL 4: COMPETENCY EVALUATION")
        print("=" * 80)

        with open(self.ontology_file, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')

        # Check 1: Identify cross-domain bridges
        bridge_score = self._identify_cross_domain_bridges(lines)

        # Check 2: Validate semantic bridge connectivity
        connectivity_score = self._validate_bridge_connectivity(lines)

        # Check 3: Test SPARQL query patterns
        sparql_score = self._test_sparql_patterns(lines)

        # Check 4: Validate provenance chain
        provenance_score = self._validate_provenance_chain(lines)

        # Check 5: Test reasoning capabilities
        reasoning_score = self._test_reasoning_capabilities(lines)

        # Calculate overall score
        score = self._calculate_score(bridge_score, connectivity_score,
                                      sparql_score, provenance_score, reasoning_score)

        return {
            'level': 4,
            'name': 'Competency Evaluation',
            'score': score,
            'target': 88,
            'warnings': self.warnings,
            'stats': dict(self.stats),
            'competencies': {
                'cross_domain_bridges': bridge_score,
                'semantic_connectivity': connectivity_score,
                'sparql_performance': sparql_score,
                'provenance_chain': provenance_score,
                'reasoning_capability': reasoning_score
            },
            'passed': score >= 88
        }

    def _identify_cross_domain_bridges(self, lines: List[str]) -> float:
        """Identify and validate cross-domain semantic bridges"""
        print("\n[1/5] Identifying cross-domain bridges...")

        # Identify domain-specific classes
        domain_prefixes = {
            'mv': 'Metaverse',
            'bc': 'Blockchain',
            'aigo': 'AI',
            'rb': 'Robotics'
        }

        for line in lines:
            # Find classes from each domain (both 'a' and 'rdf:type' patterns)
            for prefix, domain in domain_prefixes.items():
                if f'{prefix}:' in line and 'owl:Class' in line:
                    match = re.search(rf'({prefix}:\w+)', line)
                    if match:
                        self.domains[domain].add(match.group(1))

        # Count bridge types
        bridge_patterns = [
            (r'dt:enables', 'enables'),
            (r'dt:integrates', 'integrates'),
            (r'dt:supports', 'supports'),
            (r'dt:enhances', 'enhances'),
            (r'dt:requires', 'requires'),
            (r'dt:implements', 'implements')
        ]

        bridge_counts = defaultdict(int)
        for line in lines:
            for pattern, bridge_type in bridge_patterns:
                if pattern in line:
                    bridge_counts[bridge_type] += 1
                    self.bridges.append(bridge_type)

        total_bridges = sum(bridge_counts.values())

        self.stats['total_bridges'] = total_bridges
        self.stats['mv_classes'] = len(self.domains['Metaverse'])
        self.stats['bc_classes'] = len(self.domains['Blockchain'])
        self.stats['ai_classes'] = len(self.domains['AI'])
        self.stats['rb_classes'] = len(self.domains['Robotics'])

        print(f"   ✓ Metaverse classes: {self.stats['mv_classes']}")
        print(f"   ✓ Blockchain classes: {self.stats['bc_classes']}")
        print(f"   ✓ AI classes: {self.stats['ai_classes']}")
        print(f"   ✓ Robotics classes: {self.stats['rb_classes']}")
        print(f"   ✓ Total cross-domain bridges: {total_bridges}")

        for bridge_type, count in bridge_counts.items():
            print(f"     - {bridge_type}: {count}")
            self.stats[f'bridge_{bridge_type}'] = count

        # Score based on bridge coverage
        expected_bridges = 50  # Minimum expected for comprehensive integration
        bridge_score = min(total_bridges / expected_bridges, 1.0)

        if total_bridges < expected_bridges:
            self.warnings.append(f"Low bridge count: {total_bridges} < {expected_bridges}")

        return bridge_score

    def _validate_bridge_connectivity(self, lines: List[str]) -> float:
        """Validate that bridges connect different domains"""
        print("\n[2/5] Validating semantic bridge connectivity...")

        # Parse bridge statements to check domain connectivity
        cross_domain_connections = 0
        same_domain_connections = 0

        for line in lines:
            # Look for bridge properties connecting classes
            if 'dt:' in line:
                # Extract subject and object
                subjects = []
                objects = []

                for prefix in ['mv:', 'bc:', 'aigo:', 'rb:']:
                    if prefix in line:
                        matches = re.findall(rf'{prefix}\w+', line)
                        if len(matches) >= 2:
                            # Check if connecting different domains
                            prefixes = [m.split(':')[0] for m in matches]
                            if len(set(prefixes)) > 1:
                                cross_domain_connections += 1
                            else:
                                same_domain_connections += 1
                            break

        self.stats['cross_domain_connections'] = cross_domain_connections
        self.stats['same_domain_connections'] = same_domain_connections

        total_connections = cross_domain_connections + same_domain_connections
        connectivity_score = (cross_domain_connections / total_connections
                            if total_connections > 0 else 0)

        print(f"   ✓ Cross-domain connections: {cross_domain_connections}")
        print(f"   ✓ Same-domain connections: {same_domain_connections}")
        print(f"   ✓ Connectivity score: {connectivity_score:.3f}")

        if connectivity_score < 0.7:
            self.warnings.append(f"Low cross-domain connectivity: {connectivity_score:.3f}")

        return connectivity_score

    def _test_sparql_patterns(self, lines: List[str]) -> float:
        """Test common SPARQL query patterns"""
        print("\n[3/5] Testing SPARQL query patterns...")

        # Check for queryable structure
        has_labels = sum(1 for line in lines if 'rdfs:label' in line)
        has_comments = sum(1 for line in lines if 'rdfs:comment' in line)
        has_hierarchy = sum(1 for line in lines if 'rdfs:subClassOf' in line)
        has_properties = sum(1 for line in lines if 'owl:ObjectProperty' in line or
                           'owl:DatatypeProperty' in line)

        self.stats['queryable_labels'] = has_labels
        self.stats['queryable_comments'] = has_comments
        self.stats['queryable_hierarchy'] = has_hierarchy
        self.stats['queryable_properties'] = has_properties

        # Score based on queryability
        queryability_components = [
            has_labels > 100,
            has_comments > 50,
            has_hierarchy > 100,
            has_properties > 20
        ]

        sparql_score = sum(queryability_components) / len(queryability_components)

        print(f"   ✓ Labels for querying: {has_labels}")
        print(f"   ✓ Comments for querying: {has_comments}")
        print(f"   ✓ Hierarchy for querying: {has_hierarchy}")
        print(f"   ✓ Properties for querying: {has_properties}")
        print(f"   ✓ SPARQL readiness score: {sparql_score:.3f}")

        return sparql_score

    def _validate_provenance_chain(self, lines: List[str]) -> float:
        """Validate PROV-O provenance tracking"""
        print("\n[4/5] Validating provenance chain...")

        # Count provenance elements
        prov_patterns = {
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
            for pattern in prov_patterns.keys():
                if pattern in line:
                    prov_patterns[pattern] += 1

        for key, value in prov_patterns.items():
            self.stats[f'provenance_{key}'] = value

        # Score based on completeness
        prov_score = sum(1 for v in prov_patterns.values() if v > 0) / len(prov_patterns)

        print(f"   ✓ Provenance elements found:")
        for key, value in prov_patterns.items():
            print(f"     - {key}: {value}")
        print(f"   ✓ Provenance completeness: {prov_score:.3f}")

        if prov_score < 0.5:
            self.warnings.append(f"Incomplete provenance chain: {prov_score:.3f}")

        return prov_score

    def _test_reasoning_capabilities(self, lines: List[str]) -> float:
        """Test reasoning capabilities"""
        print("\n[5/5] Testing reasoning capabilities...")

        # Check for reasoning-friendly constructs
        has_equivalence = sum(1 for line in lines if 'owl:equivalentClass' in line)
        has_disjoint = sum(1 for line in lines if 'owl:disjointWith' in line)
        has_inverse = sum(1 for line in lines if 'owl:inverseOf' in line)
        has_transitivity = sum(1 for line in lines if 'owl:TransitiveProperty' in line)
        has_symmetry = sum(1 for line in lines if 'owl:SymmetricProperty' in line)
        has_functional = sum(1 for line in lines if 'owl:FunctionalProperty' in line)

        self.stats['equivalence_axioms'] = has_equivalence
        self.stats['disjoint_axioms'] = has_disjoint
        self.stats['inverse_properties'] = has_inverse
        self.stats['transitive_properties'] = has_transitivity
        self.stats['symmetric_properties'] = has_symmetry
        self.stats['functional_properties'] = has_functional

        reasoning_features = [
            has_equivalence > 0,
            has_disjoint > 0,
            has_inverse > 0,
            has_transitivity > 0,
            has_symmetry > 0,
            has_functional > 0
        ]

        reasoning_score = sum(reasoning_features) / len(reasoning_features)

        print(f"   ✓ Equivalence axioms: {has_equivalence}")
        print(f"   ✓ Disjoint axioms: {has_disjoint}")
        print(f"   ✓ Inverse properties: {has_inverse}")
        print(f"   ✓ Transitive properties: {has_transitivity}")
        print(f"   ✓ Symmetric properties: {has_symmetry}")
        print(f"   ✓ Functional properties: {has_functional}")
        print(f"   ✓ Reasoning capability score: {reasoning_score:.3f}")

        return reasoning_score

    def _calculate_score(self, bridge_score, connectivity_score, sparql_score,
                        provenance_score, reasoning_score) -> float:
        """Calculate overall competency score"""
        weights = {
            'bridges': 0.25,
            'connectivity': 0.25,
            'sparql': 0.20,
            'provenance': 0.15,
            'reasoning': 0.15
        }

        score = (
            bridge_score * weights['bridges'] * 100 +
            connectivity_score * weights['connectivity'] * 100 +
            sparql_score * weights['sparql'] * 100 +
            provenance_score * weights['provenance'] * 100 +
            reasoning_score * weights['reasoning'] * 100
        )

        # Deduct for warnings
        score -= len(self.warnings) * 2

        return max(0, round(score, 2))

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python level4_competency_validator.py <ontology_file>")
        sys.exit(1)

    validator = CompetencyValidator(sys.argv[1])
    result = validator.validate()

    print("\n" + "=" * 80)
    print(f"SCORE: {result['score']}/{result['target']}")
    print(f"STATUS: {'PASS' if result['passed'] else 'FAIL'}")
    print("=" * 80)

    sys.exit(0 if result['passed'] else 1)
