#!/usr/bin/env python3
"""
Comprehensive OWL Functional Syntax to Turtle RDF Converter
Extracts and converts all axioms including SubClassOf, properties, domains, ranges, and constraints
"""

import re
from collections import defaultdict, OrderedDict
from pathlib import Path
import sys


class OWLToTurtleConverter:
    def __init__(self):
        self.prefixes = OrderedDict()
        self.classes = set()
        self.object_properties = set()
        self.data_properties = set()
        self.annotation_properties = set()
        self.subclass_of = defaultdict(set)  # child -> parents
        self.equivalent_classes = []
        self.disjoint_classes = []
        self.property_domains = defaultdict(set)
        self.property_ranges = defaultdict(set)
        self.property_characteristics = defaultdict(set)
        self.property_super_properties = defaultdict(set)
        self.property_inverse = defaultdict(set)
        self.annotations = defaultdict(list)
        self.ontology_info = {}
        self.cardinality_constraints = defaultdict(list)
        self.object_union_of = defaultdict(list)
        self.object_intersection_of = defaultdict(list)

    def parse_ofn(self, ofn_file):
        """Parse OWL Functional Syntax file"""
        with open(ofn_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove comments
        content = re.sub(r'#.*?$', '', content, flags=re.MULTILINE)

        # Extract prefixes
        self._extract_prefixes(content)

        # Extract ontology info
        self._extract_ontology_info(content)

        # Extract declarations
        self._extract_declarations(content)

        # Extract axioms
        self._extract_subclass_of(content)
        self._extract_equivalent_classes(content)
        self._extract_disjoint_classes(content)
        self._extract_property_axioms(content)
        self._extract_property_characteristics(content)
        self._extract_annotations(content)
        self._extract_cardinality_constraints(content)

    def _extract_prefixes(self, content):
        """Extract namespace prefixes"""
        prefix_pattern = r'Prefix\(([a-zA-Z0-9_-]+):=<([^>]+)>\)'
        matches = re.findall(prefix_pattern, content)
        for prefix, namespace in matches:
            self.prefixes[prefix] = namespace

    def _extract_ontology_info(self, content):
        """Extract ontology metadata"""
        ontology_pattern = r'Ontology\(<([^>]+)>\s+<([^>]+)>'
        match = re.search(ontology_pattern, content)
        if match:
            self.ontology_info['uri'] = match.group(1)
            self.ontology_info['version'] = match.group(2)

    def _extract_declarations(self, content):
        """Extract class, property, and datatype declarations"""
        # Classes
        class_pattern = r'Declaration\(Class\(([a-zA-Z0-9_:]+)\)\)'
        self.classes.update(re.findall(class_pattern, content))

        # Object Properties
        obj_prop_pattern = r'Declaration\(ObjectProperty\(([a-zA-Z0-9_:]+)\)\)'
        self.object_properties.update(re.findall(obj_prop_pattern, content))

        # Data Properties
        data_prop_pattern = r'Declaration\(DataProperty\(([a-zA-Z0-9_:]+)\)\)'
        self.data_properties.update(re.findall(data_prop_pattern, content))

        # Annotation Properties
        ann_prop_pattern = r'Declaration\(AnnotationProperty\(([a-zA-Z0-9_:]+)\)\)'
        self.annotation_properties.update(re.findall(ann_prop_pattern, content))

    def _extract_subclass_of(self, content):
        """Extract SubClassOf axioms"""
        # Simple SubClassOf(child parent)
        simple_pattern = r'SubClassOf\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(simple_pattern, content):
            child = match.group(1)
            parent = match.group(2)
            # Verify we haven't captured a complex pattern
            snippet = content[match.start():match.end()]
            if 'ObjectSomeValuesFrom' not in snippet and 'ObjectIntersectionOf' not in snippet:
                self.subclass_of[child].add(parent)

    def _extract_equivalent_classes(self, content):
        """Extract EquivalentClasses axioms"""
        pattern = r'EquivalentClasses\(([^()]*(?:\([^()]*\)[^()]*)*)\)'
        matches = re.findall(pattern, content)
        for match in matches:
            classes = re.findall(r'([a-zA-Z0-9_:]+)', match)
            if classes:
                self.equivalent_classes.append(classes)

    def _extract_disjoint_classes(self, content):
        """Extract DisjointClasses axioms"""
        pattern = r'DisjointClasses\(([a-zA-Z0-9_:\s]+)\)'
        matches = re.findall(pattern, content)
        for match in matches:
            classes = match.strip().split()
            if classes:
                self.disjoint_classes.append(classes)

    def _extract_property_axioms(self, content):
        """Extract property domain, range, and inverse axioms"""
        # ObjectPropertyDomain
        domain_pattern = r'ObjectPropertyDomain\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(domain_pattern, content):
            prop = match.group(1)
            domain = match.group(2)
            self.property_domains[prop].add(domain)

        # ObjectPropertyRange
        range_pattern = r'ObjectPropertyRange\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(range_pattern, content):
            prop = match.group(1)
            range_val = match.group(2)
            self.property_ranges[prop].add(range_val)

        # DataPropertyRange
        data_range_pattern = r'DataPropertyRange\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(data_range_pattern, content):
            prop = match.group(1)
            range_val = match.group(2)
            self.property_ranges[prop].add(range_val)

        # SubObjectPropertyOf
        sub_obj_prop_pattern = r'SubObjectPropertyOf\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(sub_obj_prop_pattern, content):
            sub_prop = match.group(1)
            super_prop = match.group(2)
            self.property_super_properties[sub_prop].add(super_prop)

        # SubDataPropertyOf
        sub_data_prop_pattern = r'SubDataPropertyOf\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(sub_data_prop_pattern, content):
            sub_prop = match.group(1)
            super_prop = match.group(2)
            self.property_super_properties[sub_prop].add(super_prop)

        # InverseObjectProperties
        inverse_pattern = r'InverseObjectProperties\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\)'
        for match in re.finditer(inverse_pattern, content):
            prop1 = match.group(1)
            prop2 = match.group(2)
            self.property_inverse[prop1].add(prop2)
            self.property_inverse[prop2].add(prop1)

    def _extract_property_characteristics(self, content):
        """Extract property characteristics (Transitive, Symmetric, Functional, etc.)"""
        characteristics = ['Transitive', 'Symmetric', 'Reflexive', 'Irreflexive',
                         'Functional', 'InverseFunctional', 'Asymmetric']
        for char in characteristics:
            pattern = rf'{char}ObjectProperty\(([a-zA-Z0-9_:]+)\)'
            for match in re.finditer(pattern, content):
                prop = match.group(1)
                self.property_characteristics[prop].add(char)

            pattern = rf'{char}DataProperty\(([a-zA-Z0-9_:]+)\)'
            for match in re.finditer(pattern, content):
                prop = match.group(1)
                self.property_characteristics[prop].add(char)

    def _extract_annotations(self, content):
        """Extract annotations (comments, labels, etc.)"""
        # Annotation(rdfs:comment entity "text")
        ann_pattern = r'Annotation\(([a-zA-Z0-9_:]+)\s+([a-zA-Z0-9_:]+)\s+"([^"]+)"\)'
        for match in re.finditer(ann_pattern, content):
            ann_type = match.group(1)
            entity = match.group(2)
            text = match.group(3)
            self.annotations[entity].append((ann_type, text))

    def _extract_cardinality_constraints(self, content):
        """Extract cardinality constraints from SubClassOf axioms"""
        # ObjectExactCardinality, ObjectMinCardinality, ObjectMaxCardinality
        patterns = [
            (r'ObjectExactCardinality\((\d+)\s+([a-zA-Z0-9_:]+)', 'exact'),
            (r'ObjectMinCardinality\((\d+)\s+([a-zA-Z0-9_:]+)', 'min'),
            (r'ObjectMaxCardinality\((\d+)\s+([a-zA-Z0-9_:]+)', 'max'),
        ]
        for pattern, card_type in patterns:
            for match in re.finditer(pattern, content):
                cardinality = match.group(1)
                prop = match.group(2)
                self.cardinality_constraints[prop].append((card_type, cardinality))

    def to_turtle(self):
        """Convert to Turtle RDF format"""
        ttl_lines = []

        # Add prefix declarations
        ttl_lines.append("# Metaverse Ontology in Turtle RDF Format")
        ttl_lines.append("# Generated from OWL Functional Syntax")
        ttl_lines.append("")

        for prefix, namespace in self.prefixes.items():
            ttl_lines.append(f"@prefix {prefix}: <{namespace}> .")

        ttl_lines.append("")

        # Ontology metadata
        if self.ontology_info.get('uri'):
            ttl_lines.append(f"# Ontology: {self.ontology_info['uri']}")
            ttl_lines.append("")

        # Classes with type declarations
        ttl_lines.append("# === CLASSES ===")
        ttl_lines.append("")
        for cls in sorted(self.classes):
            ttl_lines.append(f"{cls} rdf:type owl:Class .")

        # Class hierarchy (SubClassOf)
        if self.subclass_of:
            ttl_lines.append("")
            ttl_lines.append("# === CLASS HIERARCHY ===")
            ttl_lines.append("")
            for child in sorted(self.subclass_of.keys()):
                for parent in sorted(self.subclass_of[child]):
                    ttl_lines.append(f"{child} rdfs:subClassOf {parent} .")

        # Equivalent classes
        if self.equivalent_classes:
            ttl_lines.append("")
            ttl_lines.append("# === EQUIVALENT CLASSES ===")
            ttl_lines.append("")
            for equiv_group in self.equivalent_classes:
                for i, cls in enumerate(sorted(equiv_group)):
                    for other_cls in sorted(equiv_group)[i+1:]:
                        ttl_lines.append(f"{cls} owl:equivalentClass {other_cls} .")

        # Disjoint classes
        if self.disjoint_classes:
            ttl_lines.append("")
            ttl_lines.append("# === DISJOINT CLASSES ===")
            ttl_lines.append("")
            for disjoint_group in self.disjoint_classes:
                for i, cls in enumerate(sorted(disjoint_group)):
                    for other_cls in sorted(disjoint_group)[i+1:]:
                        ttl_lines.append(f"{cls} owl:disjointWith {other_cls} .")

        # Object properties
        if self.object_properties:
            ttl_lines.append("")
            ttl_lines.append("# === OBJECT PROPERTIES ===")
            ttl_lines.append("")
            for prop in sorted(self.object_properties):
                ttl_lines.append(f"{prop} rdf:type owl:ObjectProperty .")

                # Add property domains
                if prop in self.property_domains:
                    for domain in sorted(self.property_domains[prop]):
                        ttl_lines.append(f"{prop} rdfs:domain {domain} .")

                # Add property ranges
                if prop in self.property_ranges:
                    for range_val in sorted(self.property_ranges[prop]):
                        ttl_lines.append(f"{prop} rdfs:range {range_val} .")

                # Add super properties
                if prop in self.property_super_properties:
                    for super_prop in sorted(self.property_super_properties[prop]):
                        ttl_lines.append(f"{prop} rdfs:subPropertyOf {super_prop} .")

                # Add inverse properties
                if prop in self.property_inverse:
                    for inv_prop in sorted(self.property_inverse[prop]):
                        ttl_lines.append(f"{prop} owl:inverseOf {inv_prop} .")

                # Add characteristics
                if prop in self.property_characteristics:
                    char_map = {
                        'Transitive': 'owl:TransitiveProperty',
                        'Symmetric': 'owl:SymmetricProperty',
                        'Functional': 'owl:FunctionalProperty',
                        'InverseFunctional': 'owl:InverseFunctionalProperty',
                        'Irreflexive': 'owl:IrreflexiveProperty',
                        'Reflexive': 'owl:ReflexiveProperty',
                        'Asymmetric': 'owl:AsymmetricProperty'
                    }
                    for char in sorted(self.property_characteristics[prop]):
                        if char in char_map:
                            ttl_lines.append(f"{prop} rdf:type {char_map[char]} .")

        # Data properties
        if self.data_properties:
            ttl_lines.append("")
            ttl_lines.append("# === DATA PROPERTIES ===")
            ttl_lines.append("")
            for prop in sorted(self.data_properties):
                ttl_lines.append(f"{prop} rdf:type owl:DatatypeProperty .")

                # Add property domains
                if prop in self.property_domains:
                    for domain in sorted(self.property_domains[prop]):
                        ttl_lines.append(f"{prop} rdfs:domain {domain} .")

                # Add property ranges
                if prop in self.property_ranges:
                    for range_val in sorted(self.property_ranges[prop]):
                        ttl_lines.append(f"{prop} rdfs:range {range_val} .")

                # Add super properties
                if prop in self.property_super_properties:
                    for super_prop in sorted(self.property_super_properties[prop]):
                        ttl_lines.append(f"{prop} rdfs:subPropertyOf {super_prop} .")

                # Add characteristics
                if prop in self.property_characteristics:
                    char_map = {
                        'Functional': 'owl:FunctionalProperty',
                    }
                    for char in sorted(self.property_characteristics[prop]):
                        if char in char_map:
                            ttl_lines.append(f"{prop} rdf:type {char_map[char]} .")

        # Annotation properties
        if self.annotation_properties:
            ttl_lines.append("")
            ttl_lines.append("# === ANNOTATION PROPERTIES ===")
            ttl_lines.append("")
            for prop in sorted(self.annotation_properties):
                ttl_lines.append(f"{prop} rdf:type owl:AnnotationProperty .")

        # Annotations/Comments
        if self.annotations:
            ttl_lines.append("")
            ttl_lines.append("# === ANNOTATIONS & DOCUMENTATION ===")
            ttl_lines.append("")
            for entity in sorted(self.annotations.keys()):
                for ann_type, text in self.annotations[entity]:
                    # Escape special characters in text
                    escaped_text = text.replace('\\', '\\\\').replace('"', '\\"')
                    ttl_lines.append(f'{entity} {ann_type} "{escaped_text}" .')

        # Statistics
        ttl_lines.append("")
        ttl_lines.append("# === ONTOLOGY STATISTICS ===")
        ttl_lines.append(f"# Total Classes: {len(self.classes)}")
        ttl_lines.append(f"# Total Object Properties: {len(self.object_properties)}")
        ttl_lines.append(f"# Total Data Properties: {len(self.data_properties)}")
        ttl_lines.append(f"# Total Annotation Properties: {len(self.annotation_properties)}")
        ttl_lines.append(f"# Total SubClassOf Relationships: {sum(len(v) for v in self.subclass_of.values())}")
        ttl_lines.append(f"# Total Annotations: {sum(len(v) for v in self.annotations.values())}")

        return "\n".join(ttl_lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 comprehensive_owl_to_turtle.py <input.ofn> [output.ttl]")
        sys.exit(1)

    ofn_file = sys.argv[1]
    ttl_file = sys.argv[2] if len(sys.argv) > 2 else ofn_file.replace('.ofn', '.ttl')

    print(f"Converting {ofn_file} to Turtle format...")

    converter = OWLToTurtleConverter()
    converter.parse_ofn(ofn_file)
    ttl_content = converter.to_turtle()

    output_path = Path(ttl_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(ttl_content, encoding='utf-8')

    # Print statistics
    lines = ttl_content.count('\n')
    size_kb = len(ttl_content) / 1024
    print(f"✅ Conversion complete!")
    print(f"   Output file: {ttl_file}")
    print(f"   Size: {size_kb:.1f} KB")
    print(f"   Lines: {lines}")
    print(f"   Classes: {len(converter.classes)}")
    print(f"   Object Properties: {len(converter.object_properties)}")
    print(f"   Data Properties: {len(converter.data_properties)}")
    print(f"   SubClassOf Relationships: {sum(len(v) for v in converter.subclass_of.values())}")


if __name__ == '__main__':
    main()
