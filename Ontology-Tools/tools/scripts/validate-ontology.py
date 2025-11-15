#!/usr/bin/env python3
"""
Chimera Prime Ontology Validator
Validates all TTL files for syntax and basic consistency
"""

import sys
from pathlib import Path
from typing import List, Tuple
import re

# Try to import rdflib, fall back to basic validation if not available
try:
    from rdflib import Graph, Namespace, RDF, RDFS, OWL
    from rdflib.plugins.parsers.notation3 import BadSyntax
    HAS_RDFLIB = True
except ImportError:
    HAS_RDFLIB = False
    print("⚠️  rdflib not available, using basic syntax validation only")

def basic_ttl_validation(file_path: Path) -> Tuple[bool, str]:
    """Basic Turtle syntax validation without rdflib"""
    content = file_path.read_text()

    # Check for basic Turtle structure
    if not content.strip():
        return False, "Empty file"

    # Check for prefix declarations
    if not re.search(r'@prefix\s+\w+:\s+<[^>]+>', content):
        return False, "No @prefix declarations found"

    # Check for basic triple patterns
    if not re.search(r'\w+:\w+\s+\w+:\w+\s+', content):
        return False, "No valid triple patterns found"

    # Check for unmatched brackets
    open_brackets = content.count('[') + content.count('(')
    close_brackets = content.count(']') + content.count(')')
    if open_brackets != close_brackets:
        return False, f"Mismatched brackets: {open_brackets} open, {close_brackets} close"

    # Check for unmatched quotes
    double_quotes = content.count('"')
    if double_quotes % 2 != 0:
        return False, "Mismatched double quotes"

    return True, "Basic syntax OK"

def validate_with_rdflib(file_path: Path) -> Tuple[bool, str]:
    """Validate using rdflib parser"""
    try:
        g = Graph()
        g.parse(file_path, format='turtle')

        # Count triples
        triple_count = len(g)

        # Check for common ontology elements
        classes = len(list(g.subjects(RDF.type, OWL.Class)))
        properties = len(list(g.subjects(RDF.type, OWL.ObjectProperty)))
        data_props = len(list(g.subjects(RDF.type, OWL.DatatypeProperty)))

        stats = f"{triple_count} triples, {classes} classes, {properties} obj props, {data_props} data props"
        return True, stats

    except BadSyntax as e:
        return False, f"Turtle syntax error: {str(e)[:200]}"
    except Exception as e:
        return False, f"Parse error: {str(e)[:200]}"

def validate_file(file_path: Path) -> Tuple[bool, str]:
    """Validate a single TTL file"""
    if HAS_RDFLIB:
        return validate_with_rdflib(file_path)
    else:
        return basic_ttl_validation(file_path)

def main():
    """Main validation routine"""
    print("=" * 80)
    print("CHIMERA PRIME ONTOLOGY VALIDATOR")
    print("=" * 80)
    print()

    # Find all TTL files
    base_dir = Path("/home/user/logseq/docs/chimera-prime")
    ttl_files = list(base_dir.rglob("*.ttl"))

    if not ttl_files:
        print("❌ No TTL files found!")
        sys.exit(1)

    print(f"Found {len(ttl_files)} TTL files to validate")
    print()

    results = []
    passed = 0
    failed = 0

    # Validate each file
    for ttl_file in sorted(ttl_files):
        rel_path = ttl_file.relative_to(base_dir)
        print(f"Validating: {rel_path}...", end=" ")

        success, message = validate_file(ttl_file)

        if success:
            print(f"✅ {message}")
            passed += 1
        else:
            print(f"❌ {message}")
            failed += 1

        results.append((rel_path, success, message))

    # Summary
    print()
    print("=" * 80)
    print("VALIDATION SUMMARY")
    print("=" * 80)
    print(f"Total files: {len(ttl_files)}")
    print(f"Passed: {passed} ✅")
    print(f"Failed: {failed} ❌")
    print()

    if failed > 0:
        print("FAILED FILES:")
        for path, success, msg in results:
            if not success:
                print(f"  ❌ {path}: {msg}")
        print()
        sys.exit(1)
    else:
        print("🎉 ALL FILES VALID!")
        sys.exit(0)

if __name__ == "__main__":
    main()
