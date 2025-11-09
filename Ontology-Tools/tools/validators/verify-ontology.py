#!/usr/bin/env python3
"""
Verify Blockchain Ontology Terms
- Check OWL syntax presence
- Validate term structure
- Verify cross-references
- Check standards compliance
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Set, Tuple

BASE_DIR = Path("/home/devuser/workspace/project/Metaverse-Ontology/ontology/blockchain-ontology/concepts/foundational")

class OntologyVerifier:
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.term_ids = set()
        self.term_files = {}

    def verify_all(self):
        """Run all verification checks"""
        print("=" * 70)
        print("BLOCKCHAIN ONTOLOGY VERIFICATION")
        print("=" * 70)

        self.collect_terms()
        self.verify_term_count()
        self.verify_term_structure()
        self.verify_owl_syntax()
        self.verify_standards_references()
        self.verify_cross_references()
        self.print_report()

    def collect_terms(self):
        """Collect all term files"""
        for category_dir in BASE_DIR.iterdir():
            if category_dir.is_dir() and not category_dir.name.startswith('.'):
                for term_file in category_dir.glob("BC-*.md"):
                    match = re.match(r'(BC-\d{4})-', term_file.name)
                    if match:
                        term_id = match.group(1)
                        self.term_ids.add(term_id)
                        self.term_files[term_id] = term_file

    def verify_term_count(self):
        """Verify we have exactly 120 terms"""
        print(f"\n1. Term Count Verification")
        print(f"   Expected: 120 foundational terms")
        print(f"   Found: {len(self.term_ids)} terms")

        if len(self.term_ids) != 120:
            self.errors.append(f"Expected 120 terms, found {len(self.term_ids)}")
            print(f"   ❌ FAILED")
        else:
            print(f"   ✓ PASSED")

        # Check for gaps in numbering
        expected_ids = {f"BC-{i:04d}" for i in range(1, 121)}
        missing = expected_ids - self.term_ids
        extra = self.term_ids - expected_ids

        if missing:
            self.errors.append(f"Missing term IDs: {sorted(missing)}")
            print(f"   ❌ Missing IDs: {', '.join(sorted(missing))}")

        if extra:
            self.warnings.append(f"Extra term IDs: {sorted(extra)}")
            print(f"   ⚠ Extra IDs: {', '.join(sorted(extra))}")

    def verify_term_structure(self):
        """Verify each term has required sections"""
        print(f"\n2. Term Structure Verification")

        required_sections = [
            "## Metadata",
            "## Definition",
            "## Formal Ontology",
            "### OWL Functional Syntax",
            "## Relationships",
            "## Properties",
            "## Use Cases",
            "## Standards and References",
            "## Implementation Considerations",
            "## Examples",
            "## See Also"
        ]

        missing_sections = {}

        for term_id, filepath in sorted(self.term_files.items()):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            missing = [section for section in required_sections if section not in content]
            if missing:
                missing_sections[term_id] = missing

        if missing_sections:
            print(f"   ❌ {len(missing_sections)} terms missing required sections")
            for term_id, sections in list(missing_sections.items())[:5]:  # Show first 5
                print(f"      {term_id}: {', '.join(sections)}")
            self.errors.append(f"{len(missing_sections)} terms missing sections")
        else:
            print(f"   ✓ All {len(self.term_files)} terms have required sections")

    def verify_owl_syntax(self):
        """Verify OWL functional syntax blocks"""
        print(f"\n3. OWL Functional Syntax Verification")

        owl_patterns = [
            r'Prefix\(:=<http://metaverse-ontology\.org/blockchain#>\)',
            r'Ontology\(<http://metaverse-ontology\.org/blockchain/BC-\d{4}>',
            r'Declaration\(Class\(:[A-Za-z]+\)\)',
            r'SubClassOf\(:',
            r'AnnotationAssertion\(rdfs:label',
        ]

        terms_without_owl = []
        incomplete_owl = []

        for term_id, filepath in sorted(self.term_files.items()):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Check for OWL block
            if '```clojure' not in content or 'Ontology(<' not in content:
                terms_without_owl.append(term_id)
                continue

            # Check for required OWL elements
            missing_patterns = []
            for pattern in owl_patterns:
                if not re.search(pattern, content):
                    missing_patterns.append(pattern)

            if missing_patterns:
                incomplete_owl.append((term_id, missing_patterns))

        if terms_without_owl:
            print(f"   ❌ {len(terms_without_owl)} terms missing OWL blocks")
            self.errors.append(f"{len(terms_without_owl)} terms without OWL")

        if incomplete_owl:
            print(f"   ⚠ {len(incomplete_owl)} terms with incomplete OWL")
            self.warnings.append(f"{len(incomplete_owl)} terms with incomplete OWL")

        if not terms_without_owl and not incomplete_owl:
            print(f"   ✓ All {len(self.term_files)} terms have valid OWL syntax")

    def verify_standards_references(self):
        """Verify standards references"""
        print(f"\n4. Standards References Verification")

        required_standards = [
            "ISO/IEC 23257:2021",
        ]

        optional_standards = [
            "NIST",
            "IEEE",
            "Nakamoto",
        ]

        terms_missing_standards = []

        for term_id, filepath in sorted(self.term_files.items()):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Check for required standard
            has_required = any(std in content for std in required_standards)

            if not has_required:
                terms_missing_standards.append(term_id)

        if terms_missing_standards:
            print(f"   ⚠ {len(terms_missing_standards)} terms missing ISO/IEC 23257:2021")
            self.warnings.append(f"{len(terms_missing_standards)} terms missing standards")
        else:
            print(f"   ✓ All terms reference ISO/IEC 23257:2021")

    def verify_cross_references(self):
        """Verify cross-references between terms"""
        print(f"\n5. Cross-Reference Verification")

        invalid_refs = {}

        for term_id, filepath in sorted(self.term_files.items()):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find all BC-#### references
            refs = re.findall(r'\*\*BC-(\d{4})\*\*', content)

            invalid = []
            for ref in refs:
                ref_id = f"BC-{ref}"
                if ref_id not in self.term_ids and ref_id != term_id:
                    # Check if it's a valid future reference (BC-0121+)
                    if int(ref) <= 120:
                        invalid.append(ref_id)

            if invalid:
                invalid_refs[term_id] = invalid

        if invalid_refs:
            print(f"   ⚠ {len(invalid_refs)} terms have invalid cross-references")
            for term_id, refs in list(invalid_refs.items())[:3]:  # Show first 3
                print(f"      {term_id}: {', '.join(refs)}")
            self.warnings.append(f"{len(invalid_refs)} terms with invalid cross-refs")
        else:
            print(f"   ✓ All cross-references are valid")

    def print_report(self):
        """Print verification report"""
        print("\n" + "=" * 70)
        print("VERIFICATION REPORT")
        print("=" * 70)

        print(f"\nTotal Terms: {len(self.term_files)}")
        print(f"Errors: {len(self.errors)}")
        print(f"Warnings: {len(self.warnings)}")

        if self.errors:
            print("\n❌ ERRORS:")
            for error in self.errors:
                print(f"   - {error}")

        if self.warnings:
            print("\n⚠ WARNINGS:")
            for warning in self.warnings:
                print(f"   - {warning}")

        if not self.errors and not self.warnings:
            print("\n✓ ALL CHECKS PASSED")
            print("   Ontology is complete and well-formed")
        elif not self.errors:
            print("\n✓ NO CRITICAL ERRORS")
            print("   All required checks passed with minor warnings")
        else:
            print("\n❌ VERIFICATION FAILED")
            print("   Please address errors before deployment")

        print("\n" + "=" * 70)

def main():
    verifier = OntologyVerifier()
    verifier.verify_all()

if __name__ == "__main__":
    main()
