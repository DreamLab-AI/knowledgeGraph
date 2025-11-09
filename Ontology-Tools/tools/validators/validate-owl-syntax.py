#!/usr/bin/env python3
"""
OWL Functional Syntax Validator
Validates OWL syntax blocks in all foundational robotics terms
"""

import re
from pathlib import Path
from typing import List, Dict, Tuple

class OWLValidator:
    """Validates OWL Functional Syntax in markdown files"""

    def __init__(self):
        self.owl_keywords = {
            'Declaration', 'Class', 'ObjectProperty', 'DataProperty',
            'SubClassOf', 'EquivalentClasses', 'DisjointClasses', 'DisjointUnion',
            'ObjectSomeValuesFrom', 'ObjectAllValuesFrom', 'DataSomeValuesFrom',
            'ObjectMinCardinality', 'ObjectMaxCardinality', 'ObjectExactCardinality',
            'DataPropertyAssertion', 'ObjectPropertyAssertion',
            'AnnotationAssertion', 'FunctionalObjectProperty', 'InverseFunctionalObjectProperty',
            'ObjectPropertyDomain', 'ObjectPropertyRange',
            'DataPropertyDomain', 'DataPropertyRange',
            'ObjectIntersectionOf', 'ObjectUnionOf', 'ObjectComplementOf',
            'DataHasValue', 'DataMinCardinality', 'DataMaxCardinality',
            'InverseObjectProperty', 'SymmetricObjectProperty', 'TransitiveObjectProperty',
            'ReflexiveObjectProperty', 'IrreflexiveObjectProperty', 'AsymmetricObjectProperty'
        }

    def extract_owl_block(self, content: str) -> str:
        """Extract OWL code block from markdown"""
        pattern = r'```clojure\n(.*?)```'
        matches = re.findall(pattern, content, re.DOTALL)
        return '\n'.join(matches) if matches else ""

    def validate_balanced_parentheses(self, owl_code: str) -> Tuple[bool, str]:
        """Check if parentheses are balanced"""
        stack = []
        line_num = 1
        col = 0

        for char in owl_code:
            col += 1
            if char == '\n':
                line_num += 1
                col = 0
            elif char == '(':
                stack.append((line_num, col))
            elif char == ')':
                if not stack:
                    return False, f"Unmatched ')' at line {line_num}, col {col}"
                stack.pop()

        if stack:
            line, col = stack[-1]
            return False, f"Unmatched '(' at line {line}, col {col}"

        return True, "Balanced"

    def check_owl_keywords(self, owl_code: str) -> Tuple[bool, List[str]]:
        """Verify OWL keywords are used correctly"""
        issues = []

        # Check for basic OWL structure
        if not re.search(r'\(Declaration\s+\(Class\s+:', owl_code):
            issues.append("Missing primary Class Declaration")

        if not re.search(r'\(AnnotationAssertion\s+rdfs:label', owl_code):
            issues.append("Missing rdfs:label annotation")

        # Check for invalid keywords
        for line in owl_code.split('\n'):
            line = line.strip()
            if line.startswith('('):
                keyword = line[1:].split()[0] if line[1:].split() else ""
                if keyword and keyword not in self.owl_keywords and not keyword.startswith(':'):
                    issues.append(f"Unknown OWL keyword: {keyword}")

        return len(issues) == 0, issues

    def validate_term_file(self, filepath: Path) -> Dict:
        """Validate single term file"""
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        result = {
            'file': filepath.name,
            'term_id': self.extract_term_id(content),
            'has_owl_block': False,
            'balanced_parens': False,
            'valid_keywords': False,
            'issues': []
        }

        # Extract OWL block
        owl_code = self.extract_owl_block(content)
        if not owl_code:
            result['issues'].append("No OWL code block found")
            return result

        result['has_owl_block'] = True

        # Validate parentheses
        balanced, msg = self.validate_balanced_parentheses(owl_code)
        result['balanced_parens'] = balanced
        if not balanced:
            result['issues'].append(f"Parentheses: {msg}")

        # Check keywords
        valid_keywords, keyword_issues = self.check_owl_keywords(owl_code)
        result['valid_keywords'] = valid_keywords
        result['issues'].extend(keyword_issues)

        return result

    def extract_term_id(self, content: str) -> str:
        """Extract term ID from markdown"""
        match = re.search(r'# (RB-\d{4}):', content)
        return match.group(1) if match else "Unknown"

def main():
    """Main validation routine"""
    base_path = Path("/home/devuser/workspace/project/Metaverse-Ontology/ontology/robotics-ontology/concepts/foundational")

    validator = OWLValidator()
    all_results = []

    # Validate all markdown files
    for md_file in sorted(base_path.rglob("*.md")):
        if md_file.name == "README.md":
            continue

        result = validator.validate_term_file(md_file)
        all_results.append(result)

    # Generate report
    print("="*70)
    print("OWL FUNCTIONAL SYNTAX VALIDATION REPORT")
    print("="*70)
    print()

    total_terms = len(all_results)
    passed = sum(1 for r in all_results if not r['issues'])
    failed = total_terms - passed

    print(f"Total Terms Validated: {total_terms}")
    print(f"Passed: {passed} ({100*passed/total_terms:.1f}%)")
    print(f"Failed: {failed} ({100*failed/total_terms:.1f}%)")
    print()

    # Component breakdown
    has_owl = sum(1 for r in all_results if r['has_owl_block'])
    balanced = sum(1 for r in all_results if r['balanced_parens'])
    valid_kw = sum(1 for r in all_results if r['valid_keywords'])

    print(f"Has OWL Block: {has_owl}/{total_terms}")
    print(f"Balanced Parentheses: {balanced}/{total_terms}")
    print(f"Valid Keywords: {valid_kw}/{total_terms}")
    print()

    # List failures
    if failed > 0:
        print("FAILURES:")
        print("-"*70)
        for result in all_results:
            if result['issues']:
                print(f"\n{result['term_id']}: {result['file']}")
                for issue in result['issues']:
                    print(f"  ✗ {issue}")

    print()
    print("="*70)

    return failed == 0

if __name__ == "__main__":
    import sys
    sys.exit(0 if main() else 1)
