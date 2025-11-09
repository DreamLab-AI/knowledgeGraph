#!/usr/bin/env python3
"""
Convert OWL Functional Syntax to Turtle
Custom converter for metaverse ontology
"""
import re

def convert_to_turtle(owl_file, ttl_file):
    """Convert OWL functional syntax to Turtle format"""

    with open(owl_file, 'r') as f:
        lines = f.readlines()

    # Start building Turtle output
    ttl_lines = []

    # Add prefixes
    ttl_lines.append("@prefix mv: <https://metaverse-ontology.org/> .")
    ttl_lines.append("@prefix owl: <http://www.w3.org/2002/07/owl#> .")
    ttl_lines.append("@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .")
    ttl_lines.append("@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .")
    ttl_lines.append("@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .")
    ttl_lines.append("@prefix dc: <http://purl.org/dc/elements/1.1/> .")
    ttl_lines.append("@prefix dcterms: <http://purl.org/dc/terms/> .")
    ttl_lines.append("@prefix etsi: <https://etsi.org/ontology/> .")
    ttl_lines.append("@prefix iso: <https://www.iso.org/ontology/> .")
    ttl_lines.append("")
    ttl_lines.append("<https://metaverse-ontology.org/> a owl:Ontology ;")
    ttl_lines.append('    owl:versionIRI <https://metaverse-ontology.org/1.0> .')
    ttl_lines.append("")

    # Parse classes
    classes = set()
    subclass_axioms = []

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Extract class declarations
        if line.startswith("Declaration(Class("):
            match = re.search(r'Declaration\(Class\((mv:\w+)\)\)', line)
            if match:
                class_name = match.group(1)
                classes.add(class_name)

        # Extract SubClassOf axioms
        elif line.startswith("SubClassOf("):
            # Read multi-line axiom
            axiom = line
            paren_count = line.count('(') - line.count(')')
            j = i + 1
            while paren_count > 0 and j < len(lines):
                next_line = lines[j].strip()
                axiom += " " + next_line
                paren_count += next_line.count('(') - next_line.count(')')
                j += 1

            subclass_axioms.append(axiom)
            i = j - 1

        i += 1

    # Write class declarations
    ttl_lines.append("# Classes")
    for class_name in sorted(classes):
        ttl_lines.append(f"{class_name} a owl:Class .")

    ttl_lines.append("")
    ttl_lines.append("# SubClass axioms")

    # Convert SubClassOf axioms to Turtle
    for axiom in subclass_axioms:
        # Extract subject class
        match = re.search(r'SubClassOf\((mv:\w+)', axiom)
        if match:
            subject = match.group(1)

            # Check for simple subclass relationship
            simple_match = re.search(r'SubClassOf\((mv:\w+)\s+(mv:\w+)\)', axiom)
            if simple_match:
                superclass = simple_match.group(2)
                ttl_lines.append(f"{subject} rdfs:subClassOf {superclass} .")
            else:
                # Complex axiom - add as comment for now
                ttl_lines.append(f"# {axiom[:80]}...")

    # Write output
    with open(ttl_file, 'w') as f:
        f.write('\n'.join(ttl_lines))

    print(f"✅ Converted to Turtle format")
    print(f"   Classes: {len(classes)}")
    print(f"   SubClass axioms: {len(subclass_axioms)}")
    print(f"   Output file: {ttl_file}")

if __name__ == "__main__":
    convert_to_turtle(
        "metaverse-ontology-FINAL-v1.0.owl",
        "metaverse-ontology-COMPLETE.ttl"
    )
