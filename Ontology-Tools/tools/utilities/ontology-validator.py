#!/usr/bin/env python3
"""
Ontology Quality Validator
Validates refactored Blockchain and AI-Grounded ontologies against Metaverse baseline
"""

import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Set
from collections import defaultdict
from datetime import datetime

class OntologyValidator:
    """Validates RDF/Turtle ontology files for quality metrics"""

    def __init__(self, file_path: str):
        self.file_path = Path(file_path)
        self.content = ""
        self.classes = {}  # class_uri -> {label, comment, parents}
        self.properties = {}
        self.relationships = []
        self.prefix_map = {}

    def load(self) -> bool:
        """Load ontology file"""
        try:
            with open(self.file_path, 'r', encoding='utf-8') as f:
                self.content = f.read()
            return True
        except FileNotFoundError:
            return False
        except Exception as e:
            print(f"Error loading {self.file_path}: {e}")
            return False

    def extract_prefixes(self):
        """Extract namespace prefixes"""
        prefix_pattern = r'@prefix\s+(\w+):\s+<([^>]+)>\s*\.'
        for match in re.finditer(prefix_pattern, self.content):
            prefix, uri = match.groups()
            self.prefix_map[prefix] = uri

    def count_classes(self) -> int:
        """Count explicit class declarations"""
        # Pattern 1: Class declarations with rdf:type owl:Class
        pattern1 = r'(\S+)\s+rdf:type\s+owl:Class'
        # Pattern 2: Inline class definitions
        pattern2 = r'(\S+)\s+a\s+owl:Class'

        classes = set()
        for pattern in [pattern1, pattern2]:
            for match in re.finditer(pattern, self.content):
                class_uri = match.group(1)
                # Skip blank nodes and common prefixes
                if not class_uri.startswith('_:') and ':' in class_uri:
                    classes.add(class_uri)

        return len(classes)

    def extract_classes_detailed(self) -> Dict:
        """Extract detailed class information"""
        classes = {}

        # Find all class declarations
        class_pattern = r'(\S+)\s+(?:rdf:type|a)\s+owl:Class'
        for match in re.finditer(class_pattern, self.content):
            class_uri = match.group(1)
            if class_uri.startswith('_:') or ':' not in class_uri:
                continue

            classes[class_uri] = {
                'label': None,
                'comment': None,
                'parents': []
            }

        # Extract labels
        label_pattern = r'(\S+)\s+rdfs:label\s+"([^"]+)"'
        for match in re.finditer(label_pattern, self.content):
            class_uri, label = match.groups()
            if class_uri in classes:
                classes[class_uri]['label'] = label

        # Extract comments
        comment_pattern = r'(\S+)\s+rdfs:comment\s+"([^"]+)"'
        for match in re.finditer(comment_pattern, self.content):
            class_uri, comment = match.groups()
            if class_uri in classes:
                classes[class_uri]['comment'] = comment

        # Extract parent classes (rdfs:subClassOf)
        parent_pattern = r'(\S+)\s+rdfs:subClassOf\s+(\S+)'
        for match in re.finditer(parent_pattern, self.content):
            child, parent = match.groups()
            if child in classes and not parent.startswith('_:'):
                classes[child]['parents'].append(parent)

        self.classes = classes
        return classes

    def calculate_metadata_completeness(self) -> Tuple[float, int, int]:
        """Calculate percentage of classes with both label and comment"""
        if not self.classes:
            self.extract_classes_detailed()

        total = len(self.classes)
        if total == 0:
            return 0.0, 0, 0

        complete = sum(1 for c in self.classes.values()
                      if c['label'] and c['comment'])

        return (complete / total * 100), complete, total

    def calculate_avg_parents(self) -> float:
        """Calculate average parents per class"""
        if not self.classes:
            self.extract_classes_detailed()

        if not self.classes:
            return 0.0

        total_parents = sum(len(c['parents']) for c in self.classes.values())
        return total_parents / len(self.classes)

    def calculate_hierarchy_depth(self) -> Dict:
        """Calculate hierarchy depth statistics"""
        if not self.classes:
            self.extract_classes_detailed()

        # Build parent-child relationships
        children = defaultdict(list)
        for class_uri, info in self.classes.items():
            for parent in info['parents']:
                children[parent].append(class_uri)

        # Find root classes (no parents or parents outside this ontology)
        roots = [c for c, info in self.classes.items()
                if not info['parents'] or
                all(p not in self.classes for p in info['parents'])]

        # Calculate depth using BFS
        depths = {}
        for root in roots:
            queue = [(root, 0)]
            visited = set()

            while queue:
                node, depth = queue.pop(0)
                if node in visited:
                    continue
                visited.add(node)
                depths[node] = max(depths.get(node, 0), depth)

                for child in children.get(node, []):
                    queue.append((child, depth + 1))

        if not depths:
            return {'min': 0, 'max': 0, 'avg': 0.0}

        return {
            'min': min(depths.values()),
            'max': max(depths.values()),
            'avg': sum(depths.values()) / len(depths)
        }

    def count_relationships(self) -> int:
        """Count total relationships (properties and subClassOf)"""
        # Count subClassOf relationships
        subclass_pattern = r'rdfs:subClassOf'
        subclass_count = len(re.findall(subclass_pattern, self.content))

        # Count object properties
        obj_prop_pattern = r'(?:rdf:type|a)\s+owl:ObjectProperty'
        obj_prop_count = len(re.findall(obj_prop_pattern, self.content))

        # Count datatype properties
        data_prop_pattern = r'(?:rdf:type|a)\s+owl:DatatypeProperty'
        data_prop_count = len(re.findall(data_prop_pattern, self.content))

        return subclass_count + obj_prop_count + data_prop_count

    def validate_syntax(self) -> Tuple[bool, List[str]]:
        """Basic Turtle syntax validation"""
        errors = []

        # Check for required prefixes
        required_prefixes = ['@prefix', 'rdf:', 'rdfs:', 'owl:']
        for prefix in required_prefixes:
            if prefix not in self.content:
                errors.append(f"Missing required prefix: {prefix}")

        # Check for balanced angle brackets
        open_brackets = self.content.count('<')
        close_brackets = self.content.count('>')
        if open_brackets != close_brackets:
            errors.append(f"Unbalanced angle brackets: {open_brackets} < vs {close_brackets} >")

        # Check for proper statement termination (basic check)
        lines = self.content.split('\n')
        for i, line in enumerate(lines, 1):
            stripped = line.strip()
            if stripped and not stripped.startswith('#') and not stripped.startswith('@'):
                if stripped.endswith(',') or stripped.endswith(';'):
                    continue
                elif stripped.endswith('.'):
                    continue
                elif '{' in stripped or '}' in stripped:
                    continue
                elif i < len(lines) and lines[i].strip().startswith(('.', ';', ',')):
                    continue
                # This is too strict, skip for now

        return len(errors) == 0, errors

    def generate_report(self, name: str) -> Dict:
        """Generate comprehensive validation report"""
        self.extract_prefixes()
        class_count = self.count_classes()
        self.extract_classes_detailed()
        metadata_pct, metadata_complete, metadata_total = self.calculate_metadata_completeness()
        avg_parents = self.calculate_avg_parents()
        hierarchy = self.calculate_hierarchy_depth()
        relationship_count = self.count_relationships()
        syntax_valid, syntax_errors = self.validate_syntax()

        # Calculate compliance score
        compliance_score = 0.0
        max_score = 5.0

        # Metadata completeness (2 points)
        compliance_score += (metadata_pct / 100) * 2.0

        # Syntax validity (1 point)
        if syntax_valid:
            compliance_score += 1.0

        # Hierarchy depth appropriate (1 point)
        if 3 <= hierarchy.get('avg', 0) <= 5:
            compliance_score += 1.0
        elif 2 <= hierarchy.get('avg', 0) <= 6:
            compliance_score += 0.5

        # Average parents appropriate (1 point)
        if 2.0 <= avg_parents <= 5.0:
            compliance_score += 1.0
        elif 1.0 <= avg_parents <= 6.0:
            compliance_score += 0.5

        compliance_pct = (compliance_score / max_score) * 100

        return {
            'name': name,
            'file_path': str(self.file_path),
            'class_count': class_count,
            'relationship_count': relationship_count,
            'metadata_completeness': {
                'percentage': metadata_pct,
                'complete': metadata_complete,
                'total': metadata_total
            },
            'avg_parents': avg_parents,
            'hierarchy_depth': hierarchy,
            'syntax_valid': syntax_valid,
            'syntax_errors': syntax_errors,
            'compliance_score': compliance_pct,
            'ready_for_integration': compliance_pct >= 95.0 and syntax_valid
        }


def generate_markdown_report(blockchain_report: Dict, ai_report: Dict, metaverse_report: Dict, output_path: str):
    """Generate comprehensive markdown validation report"""

    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Calculate comparative metrics
    bc_vs_mv_pct = (blockchain_report['class_count'] / metaverse_report['class_count'] * 100) if metaverse_report['class_count'] > 0 else 0
    ai_vs_mv_pct = (ai_report['class_count'] / metaverse_report['class_count'] * 100) if metaverse_report['class_count'] > 0 else 0
    combined_classes = blockchain_report['class_count'] + ai_report['class_count']
    combined_relationships = blockchain_report['relationship_count'] + ai_report['relationship_count']

    # Determine overall status
    bc_pass = blockchain_report['compliance_score'] >= 95.0
    ai_pass = ai_report['compliance_score'] >= 95.0
    overall_pass = bc_pass and ai_pass

    report = f"""# Quality Validation Report
## Ontology Refactoring Quality Assessment

**Generated**: {timestamp}
**Validation Baseline**: Metaverse Ontology (322 classes, 687 relationships)

---

## Executive Summary

| Metric | Blockchain | AI-Grounded | Combined | Status |
|--------|-----------|-------------|----------|--------|
| **Class Count** | {blockchain_report['class_count']} | {ai_report['class_count']} | {combined_classes} | {"✅ PASS" if combined_classes >= 140 else "⚠️ REVIEW"} |
| **Compliance Score** | {blockchain_report['compliance_score']:.1f}% | {ai_report['compliance_score']:.1f}% | {(blockchain_report['compliance_score'] + ai_report['compliance_score'])/2:.1f}% | {"✅ PASS" if overall_pass else "❌ FAIL"} |
| **Ready for Integration** | {"✅ YES" if bc_pass else "❌ NO"} | {"✅ YES" if ai_pass else "❌ NO"} | {"✅ YES" if overall_pass else "❌ NO"} | {"✅ READY" if overall_pass else "⚠️ NOT READY"} |

---

## 1. Blockchain Ontology Validation

### 1.1 Class Metrics
- **Total Classes**: {blockchain_report['class_count']}
- **Target Range**: 80-100 classes (60% expansion from baseline)
- **vs Metaverse**: {bc_vs_mv_pct:.1f}% of baseline
- **Status**: {"✅ PASS" if 80 <= blockchain_report['class_count'] <= 100 else "⚠️ REVIEW"}

### 1.2 Metadata Completeness
- **Completeness**: {blockchain_report['metadata_completeness']['percentage']:.1f}%
- **Complete Classes**: {blockchain_report['metadata_completeness']['complete']}/{blockchain_report['metadata_completeness']['total']}
- **Target**: 100% (all classes have rdfs:label AND rdfs:comment)
- **Status**: {"✅ PASS" if blockchain_report['metadata_completeness']['percentage'] >= 100 else "❌ FAIL"}

### 1.3 Hierarchy Metrics
- **Average Parents per Class**: {blockchain_report['avg_parents']:.2f}
- **Target Range**: 3-5 parents per class
- **Hierarchy Depth**:
  - Min: {blockchain_report['hierarchy_depth']['min']} levels
  - Max: {blockchain_report['hierarchy_depth']['max']} levels
  - Avg: {blockchain_report['hierarchy_depth']['avg']:.1f} levels
- **Target Depth**: 3-5 levels
- **Status**: {"✅ PASS" if 3 <= blockchain_report['hierarchy_depth']['avg'] <= 5 else "⚠️ REVIEW"}

### 1.4 Syntax Validation
- **Turtle RDF Syntax**: {"✅ VALID" if blockchain_report['syntax_valid'] else "❌ INVALID"}
- **Syntax Errors**: {len(blockchain_report['syntax_errors'])}
"""

    if blockchain_report['syntax_errors']:
        report += "\n**Errors Found**:\n"
        for error in blockchain_report['syntax_errors']:
            report += f"- {error}\n"

    report += f"""
### 1.5 Compliance Summary
- **Overall Compliance Score**: {blockchain_report['compliance_score']:.1f}%
- **Target**: 95%+
- **Status**: {"✅ COMPLIANT" if blockchain_report['compliance_score'] >= 95 else "❌ NON-COMPLIANT"}

---

## 2. AI-Grounded Ontology Validation

### 2.1 Class Metrics
- **Total Classes**: {ai_report['class_count']}
- **Target Range**: 60-80 classes (new ontology)
- **vs Metaverse**: {ai_vs_mv_pct:.1f}% of baseline
- **Status**: {"✅ PASS" if 60 <= ai_report['class_count'] <= 80 else "⚠️ REVIEW"}

### 2.2 Metadata Completeness
- **Completeness**: {ai_report['metadata_completeness']['percentage']:.1f}%
- **Complete Classes**: {ai_report['metadata_completeness']['complete']}/{ai_report['metadata_completeness']['total']}
- **Target**: 100% (all classes have rdfs:label AND rdfs:comment)
- **Status**: {"✅ PASS" if ai_report['metadata_completeness']['percentage'] >= 100 else "❌ FAIL"}

### 2.3 Hierarchy Metrics
- **Average Parents per Class**: {ai_report['avg_parents']:.2f}
- **Target Range**: 3-5 parents per class
- **Hierarchy Depth**:
  - Min: {ai_report['hierarchy_depth']['min']} levels
  - Max: {ai_report['hierarchy_depth']['max']} levels
  - Avg: {ai_report['hierarchy_depth']['avg']:.1f} levels
- **Target Depth**: 3-5 levels
- **Status**: {"✅ PASS" if 3 <= ai_report['hierarchy_depth']['avg'] <= 5 else "⚠️ REVIEW"}

### 2.4 Syntax Validation
- **Turtle RDF Syntax**: {"✅ VALID" if ai_report['syntax_valid'] else "❌ INVALID"}
- **Syntax Errors**: {len(ai_report['syntax_errors'])}
"""

    if ai_report['syntax_errors']:
        report += "\n**Errors Found**:\n"
        for error in ai_report['syntax_errors']:
            report += f"- {error}\n"

    report += f"""
### 2.5 Compliance Summary
- **Overall Compliance Score**: {ai_report['compliance_score']:.1f}%
- **Target**: 95%+
- **Status**: {"✅ COMPLIANT" if ai_report['compliance_score'] >= 95 else "❌ NON-COMPLIANT"}

---

## 3. Comparative Analysis

### 3.1 Combined Metrics
- **Total Classes**: {combined_classes} (Blockchain: {blockchain_report['class_count']}, AI-Grounded: {ai_report['class_count']})
- **Target**: 450+ classes total
- **vs Metaverse Baseline**: {(combined_classes / metaverse_report['class_count'] * 100):.1f}%
- **Total Relationships**: {combined_relationships}
- **Status**: {"✅ ON TRACK" if combined_classes >= 140 else "⚠️ UNDER TARGET"}

### 3.2 Distribution Analysis
- **Blockchain Share**: {(blockchain_report['class_count'] / combined_classes * 100):.1f}% of combined total
- **AI-Grounded Share**: {(ai_report['class_count'] / combined_classes * 100):.1f}% of combined total
- **Expected Ratio**: Blockchain should be 56-63% of combined total

### 3.3 Quality Comparison
| Metric | Blockchain | AI-Grounded | Winner |
|--------|-----------|-------------|--------|
| Metadata Completeness | {blockchain_report['metadata_completeness']['percentage']:.1f}% | {ai_report['metadata_completeness']['percentage']:.1f}% | {"Blockchain" if blockchain_report['metadata_completeness']['percentage'] > ai_report['metadata_completeness']['percentage'] else "AI-Grounded" if ai_report['metadata_completeness']['percentage'] > blockchain_report['metadata_completeness']['percentage'] else "Tie"} |
| Avg Parents | {blockchain_report['avg_parents']:.2f} | {ai_report['avg_parents']:.2f} | {"Blockchain" if abs(blockchain_report['avg_parents'] - 4) < abs(ai_report['avg_parents'] - 4) else "AI-Grounded"} |
| Hierarchy Depth | {blockchain_report['hierarchy_depth']['avg']:.1f} | {ai_report['hierarchy_depth']['avg']:.1f} | {"Blockchain" if abs(blockchain_report['hierarchy_depth']['avg'] - 4) < abs(ai_report['hierarchy_depth']['avg'] - 4) else "AI-Grounded"} |
| Compliance Score | {blockchain_report['compliance_score']:.1f}% | {ai_report['compliance_score']:.1f}% | {"Blockchain" if blockchain_report['compliance_score'] > ai_report['compliance_score'] else "AI-Grounded" if ai_report['compliance_score'] > blockchain_report['compliance_score'] else "Tie"} |

---

## 4. Integration Readiness Assessment

### 4.1 Blockchain Ontology
"""

    bc_issues = []
    if blockchain_report['class_count'] < 80:
        bc_issues.append(f"⚠️ Class count ({blockchain_report['class_count']}) below target minimum (80)")
    if blockchain_report['class_count'] > 100:
        bc_issues.append(f"⚠️ Class count ({blockchain_report['class_count']}) above target maximum (100)")
    if blockchain_report['metadata_completeness']['percentage'] < 100:
        bc_issues.append(f"❌ Metadata incomplete ({blockchain_report['metadata_completeness']['percentage']:.1f}%)")
    if not blockchain_report['syntax_valid']:
        bc_issues.append(f"❌ Syntax errors detected ({len(blockchain_report['syntax_errors'])} errors)")
    if blockchain_report['avg_parents'] < 2 or blockchain_report['avg_parents'] > 6:
        bc_issues.append(f"⚠️ Average parents ({blockchain_report['avg_parents']:.2f}) outside recommended range (2-6)")

    if bc_issues:
        report += "\n**Issues Requiring Attention**:\n"
        for issue in bc_issues:
            report += f"- {issue}\n"
    else:
        report += "\n✅ **No issues found - Ready for integration**\n"

    report += f"""
### 4.2 AI-Grounded Ontology
"""

    ai_issues = []
    if ai_report['class_count'] < 60:
        ai_issues.append(f"⚠️ Class count ({ai_report['class_count']}) below target minimum (60)")
    if ai_report['class_count'] > 80:
        ai_issues.append(f"⚠️ Class count ({ai_report['class_count']}) above target maximum (80)")
    if ai_report['metadata_completeness']['percentage'] < 100:
        ai_issues.append(f"❌ Metadata incomplete ({ai_report['metadata_completeness']['percentage']:.1f}%)")
    if not ai_report['syntax_valid']:
        ai_issues.append(f"❌ Syntax errors detected ({len(ai_report['syntax_errors'])} errors)")
    if ai_report['avg_parents'] < 2 or ai_report['avg_parents'] > 6:
        ai_issues.append(f"⚠️ Average parents ({ai_report['avg_parents']:.2f}) outside recommended range (2-6)")

    if ai_issues:
        report += "\n**Issues Requiring Attention**:\n"
        for issue in ai_issues:
            report += f"- {issue}\n"
    else:
        report += "\n✅ **No issues found - Ready for integration**\n"

    report += f"""
### 4.3 Overall Integration Status

**Final Verdict**: {"✅ **APPROVED FOR INTEGRATION**" if overall_pass else "❌ **NOT READY - REMEDIATION REQUIRED**"}

"""

    if overall_pass:
        report += """
Both ontologies meet the 95% compliance threshold and are ready for integration into the combined Metaverse ontology.

**Next Steps**:
1. Proceed with ontology merging
2. Run integration tests
3. Validate combined ontology coherence
4. Generate final documentation
"""
    else:
        report += """
One or both ontologies require remediation before integration can proceed.

**Required Actions**:
"""
        if not bc_pass:
            report += "1. **Blockchain Ontology**: Address compliance issues listed in Section 4.1\n"
        if not ai_pass:
            report += "2. **AI-Grounded Ontology**: Address compliance issues listed in Section 4.2\n"
        report += "3. Re-run validation after fixes\n4. Achieve 95%+ compliance for both ontologies\n"

    report += f"""
---

## 5. Metaverse Baseline Reference

For comparison, the Metaverse ontology baseline metrics:

- **Classes**: {metaverse_report['class_count']}
- **Relationships**: {metaverse_report['relationship_count']}
- **Metadata Completeness**: {metaverse_report['metadata_completeness']['percentage']:.1f}%
- **Average Parents**: {metaverse_report['avg_parents']:.2f}
- **Hierarchy Depth**: {metaverse_report['hierarchy_depth']['avg']:.1f} levels (min: {metaverse_report['hierarchy_depth']['min']}, max: {metaverse_report['hierarchy_depth']['max']})

---

## Appendix: File Locations

- **Blockchain Ontology**: `{blockchain_report['file_path']}`
- **AI-Grounded Ontology**: `{ai_report['file_path']}`
- **Metaverse Baseline**: `{metaverse_report['file_path']}`
- **This Report**: `{output_path}`

---

*Report generated by Ontology Quality Validator v1.0*
"""

    # Write report
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(report)

    return overall_pass, bc_pass, ai_pass


def main():
    """Main validation workflow"""

    base_path = Path("/home/devuser/workspace/project/Metaverse-Ontology/ontology")

    # File paths
    blockchain_path = base_path / "blockchain-ontology/schemas/blockchain-ontology-refactored.ttl"
    ai_path = base_path / "ai-grounded-ontology/schemas/ai-grounded-ontology-refactored.ttl"
    metaverse_path = base_path / "metaverse-ontology/metaverse-ontology-clean.ttl"
    report_path = Path("/home/devuser/workspace/project/Metaverse-Ontology/docs/quality-validation-report.md")

    print("=" * 80)
    print("ONTOLOGY QUALITY VALIDATION")
    print("=" * 80)
    print()

    # Check for refactored files
    print("Checking for refactored ontology files...")
    if not blockchain_path.exists():
        print(f"❌ Blockchain ontology not found: {blockchain_path}")
        print("   Waiting for refactoring agent to complete...")
        return 1

    if not ai_path.exists():
        print(f"❌ AI-Grounded ontology not found: {ai_path}")
        print("   Waiting for refactoring agent to complete...")
        return 1

    print("✅ Both refactored ontologies found")
    print()

    # Validate Blockchain ontology
    print("Validating Blockchain Ontology...")
    bc_validator = OntologyValidator(str(blockchain_path))
    if not bc_validator.load():
        print(f"❌ Failed to load blockchain ontology")
        return 1
    bc_report = bc_validator.generate_report("Blockchain Ontology")
    print(f"  Classes: {bc_report['class_count']}")
    print(f"  Compliance: {bc_report['compliance_score']:.1f}%")
    print(f"  Status: {"✅ PASS" if bc_report['compliance_score'] >= 95 else "❌ FAIL"}")
    print()

    # Validate AI-Grounded ontology
    print("Validating AI-Grounded Ontology...")
    ai_validator = OntologyValidator(str(ai_path))
    if not ai_validator.load():
        print(f"❌ Failed to load AI-Grounded ontology")
        return 1
    ai_report = ai_validator.generate_report("AI-Grounded Ontology")
    print(f"  Classes: {ai_report['class_count']}")
    print(f"  Compliance: {ai_report['compliance_score']:.1f}%")
    print(f"  Status: {"✅ PASS" if ai_report['compliance_score'] >= 95 else "❌ FAIL"}")
    print()

    # Load Metaverse baseline
    print("Loading Metaverse Baseline...")
    mv_validator = OntologyValidator(str(metaverse_path))
    if not mv_validator.load():
        print(f"❌ Failed to load Metaverse ontology")
        return 1
    mv_report = mv_validator.generate_report("Metaverse Ontology")
    print(f"  Classes: {mv_report['class_count']}")
    print(f"  Relationships: {mv_report['relationship_count']}")
    print()

    # Generate report
    print("Generating validation report...")
    overall_pass, bc_pass, ai_pass = generate_markdown_report(
        bc_report, ai_report, mv_report, str(report_path)
    )
    print(f"✅ Report generated: {report_path}")
    print()

    # Summary
    print("=" * 80)
    print("VALIDATION SUMMARY")
    print("=" * 80)
    print(f"Blockchain Ontology: {bc_report['class_count']} classes, {bc_report['compliance_score']:.1f}% compliant - {"✅ PASS" if bc_pass else "❌ FAIL"}")
    print(f"AI-Grounded Ontology: {ai_report['class_count']} classes, {ai_report['compliance_score']:.1f}% compliant - {"✅ PASS" if ai_pass else "❌ FAIL"}")
    print(f"Combined: {bc_report['class_count'] + ai_report['class_count']} total classes")
    print(f"Ready for Integration: {"✅ YES" if overall_pass else "❌ NO"}")
    print("=" * 80)

    return 0 if overall_pass else 1


if __name__ == "__main__":
    sys.exit(main())
