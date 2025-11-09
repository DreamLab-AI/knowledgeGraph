#!/usr/bin/env python3
"""
Batch 1 AI-Grounded Domain Validation Script
Validates 64 converted files for format compliance, OWL syntax, and WikiLink integrity
"""

import re
import json
from pathlib import Path
from typing import Dict, List, Tuple
from dataclasses import dataclass, asdict

@dataclass
class ValidationResult:
    """Results for a single file validation"""
    file_path: str
    compliance_score: float
    has_ontology_block: bool
    has_ontology_true: bool
    has_source_domain: bool
    source_domain_correct: bool
    has_status: bool
    has_term_id: bool
    has_preferred_term: bool
    has_definition: bool
    has_owl_class: bool
    owl_in_clojure_fence: bool
    unique_block_ids: bool
    owl_syntax_valid: bool
    broken_wikilinks: List[str]
    issues: List[str]

    def calculate_score(self) -> float:
        """Calculate compliance score 0-100%"""
        checks = [
            self.has_ontology_block,
            self.has_ontology_true,
            self.has_source_domain,
            self.source_domain_correct,
            self.has_status,
            self.has_term_id,
            self.has_preferred_term,
            self.has_definition,
            self.has_owl_class,
            self.owl_in_clojure_fence,
            self.unique_block_ids,
            self.owl_syntax_valid,
            len(self.broken_wikilinks) == 0
        ]
        return (sum(checks) / len(checks)) * 100


class Batch1Validator:
    """Validates Batch 1 AI-Grounded domain files"""

    def __init__(self, base_path: Path):
        self.base_path = base_path
        self.logseq_pages = base_path / "logseq" / "pages"
        self.all_files = set()
        self.all_concepts = set()

    def scan_all_files(self):
        """Scan for all existing files and concepts"""
        for md_file in self.logseq_pages.glob("*.md"):
            self.all_files.add(md_file.stem)
            # Extract concept name variations
            self.all_concepts.add(md_file.stem)
            self.all_concepts.add(md_file.stem.replace("-", " "))
            self.all_concepts.add(md_file.stem.replace("_", " "))

    def validate_file(self, file_path: Path) -> ValidationResult:
        """Validate a single file against all criteria"""
        content = file_path.read_text()

        result = ValidationResult(
            file_path=str(file_path),
            compliance_score=0.0,
            has_ontology_block=False,
            has_ontology_true=False,
            has_source_domain=False,
            source_domain_correct=False,
            has_status=False,
            has_term_id=False,
            has_preferred_term=False,
            has_definition=False,
            has_owl_class=False,
            owl_in_clojure_fence=False,
            unique_block_ids=False,
            owl_syntax_valid=False,
            broken_wikilinks=[],
            issues=[]
        )

        # 1. Check first block is OntologyBlock
        first_block_match = re.search(r'^-\s+###\s+(\w+)', content, re.MULTILINE)
        if first_block_match and first_block_match.group(1) == "OntologyBlock":
            result.has_ontology_block = True
        else:
            result.issues.append("First block is not '### OntologyBlock'")

        # 2. Check ontology:: true is first property
        ontology_prop_match = re.search(r'ontology::\s*(true|false)', content)
        if ontology_prop_match:
            if ontology_prop_match.group(1) == "true":
                result.has_ontology_true = True
            else:
                result.issues.append("ontology:: is not set to true")
        else:
            result.issues.append("Missing ontology:: property")

        # 3. Check source-domain:: ai-grounded
        source_domain_match = re.search(r'source-domain::\s*(\S+)', content)
        if source_domain_match:
            result.has_source_domain = True
            if source_domain_match.group(1) == "ai-grounded":
                result.source_domain_correct = True
            else:
                result.issues.append(f"source-domain:: is '{source_domain_match.group(1)}', expected 'ai-grounded'")
        else:
            result.issues.append("Missing source-domain:: property")

        # 4. Check status:: field
        if re.search(r'status::\s*\S+', content):
            result.has_status = True
        else:
            result.issues.append("Missing status:: field")

        # 5. Check term-id
        if re.search(r'term-id::\s*AI-\d+', content):
            result.has_term_id = True
        else:
            result.issues.append("Missing or malformed term-id:: (expected AI-####)")

        # 6. Check preferred-term
        if re.search(r'preferred-term::\s*.+', content):
            result.has_preferred_term = True
        else:
            result.issues.append("Missing preferred-term::")

        # 7. Check definition
        if re.search(r'definition::\s*.+', content):
            result.has_definition = True
        else:
            result.issues.append("Missing definition::")

        # 8. Check owl:class
        if re.search(r'owl:class::\s*\S+', content):
            result.has_owl_class = True
        else:
            result.issues.append("Missing owl:class::")

        # 9. Check OWL axioms in clojure fence (not <details>)
        clojure_fence_match = re.search(r'```clojure\s+(.*?)```', content, re.DOTALL)
        if clojure_fence_match:
            result.owl_in_clojure_fence = True
            owl_content = clojure_fence_match.group(1)

            # 10. Basic OWL syntax validation
            result.owl_syntax_valid = self.validate_owl_syntax(owl_content)
            if not result.owl_syntax_valid:
                result.issues.append("OWL syntax appears malformed")
        else:
            result.issues.append("OWL axioms not in ```clojure fence")
            # Check if using old <details> format
            if '<details>' in content and '<summary>OWL' in content:
                result.issues.append("Still using deprecated <details> format for OWL")

        # 11. Check unique block IDs
        block_ids = re.findall(r'id::\s*(\S+)', content)
        if len(block_ids) == len(set(block_ids)):
            result.unique_block_ids = True
        else:
            result.issues.append(f"Duplicate block IDs found: {[bid for bid in block_ids if block_ids.count(bid) > 1]}")

        # 12. Check WikiLinks integrity
        result.broken_wikilinks = self.check_wikilinks(content)
        if result.broken_wikilinks:
            result.issues.append(f"Found {len(result.broken_wikilinks)} broken WikiLinks")

        # Calculate final score
        result.compliance_score = result.calculate_score()

        return result

    def validate_owl_syntax(self, owl_content: str) -> bool:
        """Basic OWL functional syntax validation"""
        # Check for common patterns
        has_declaration = 'Declaration' in owl_content or 'declaration' in owl_content.lower()
        has_class_or_property = 'Class' in owl_content or 'ObjectProperty' in owl_content or 'DataProperty' in owl_content

        # Check for balanced parentheses
        if owl_content.strip():
            open_count = owl_content.count('(')
            close_count = owl_content.count(')')
            balanced = open_count == close_count
        else:
            balanced = True  # Empty is okay

        return has_declaration or has_class_or_property or balanced or not owl_content.strip()

    def check_wikilinks(self, content: str) -> List[str]:
        """Check for broken WikiLinks"""
        wikilinks = re.findall(r'\[\[([^\]]+)\]\]', content)
        broken = []

        for link in wikilinks:
            # Convert to potential filename
            normalized = link.replace(" ", "-").lower()
            if normalized not in [f.lower() for f in self.all_files]:
                # Check if it's a concept name that might exist
                if link not in self.all_concepts:
                    broken.append(link)

        return broken

    def validate_batch(self, file_list_path: Path) -> Dict:
        """Validate all files in batch"""
        # First scan all files
        self.scan_all_files()

        # Read file list
        files_to_validate = []
        for line in file_list_path.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith('#'):
                files_to_validate.append(Path(line))

        results = []
        for file_path in files_to_validate:
            if file_path.exists():
                result = self.validate_file(file_path)
                results.append(result)
            else:
                print(f"WARNING: File not found: {file_path}")

        # Generate summary statistics
        total_files = len(results)
        avg_score = sum(r.compliance_score for r in results) / total_files if results else 0

        grade_distribution = {
            'A (90-100%)': sum(1 for r in results if r.compliance_score >= 90),
            'B (80-89%)': sum(1 for r in results if 80 <= r.compliance_score < 90),
            'C (70-79%)': sum(1 for r in results if 70 <= r.compliance_score < 90),
            'D (60-69%)': sum(1 for r in results if 60 <= r.compliance_score < 70),
            'F (<60%)': sum(1 for r in results if r.compliance_score < 60),
        }

        # Overall grade
        if avg_score >= 90:
            overall_grade = 'A'
        elif avg_score >= 80:
            overall_grade = 'B'
        elif avg_score >= 70:
            overall_grade = 'C'
        elif avg_score >= 60:
            overall_grade = 'D'
        else:
            overall_grade = 'F'

        return {
            'total_files': total_files,
            'average_score': avg_score,
            'overall_grade': overall_grade,
            'grade_distribution': grade_distribution,
            'results': results
        }


def main():
    base_path = Path("/home/devuser/workspace/project/Metaverse-Ontology")
    file_list = base_path / "swarm-coordination" / "batch-1-ai-files.txt"

    validator = Batch1Validator(base_path)
    validation_data = validator.validate_batch(file_list)

    # Save detailed compliance scores
    scores = {
        r.file_path: {
            'compliance_score': r.compliance_score,
            'issues': r.issues,
            'broken_wikilinks': r.broken_wikilinks
        }
        for r in validation_data['results']
    }

    scores_file = base_path / "swarm-coordination" / "batch-1-compliance-scores.json"
    with open(scores_file, 'w') as f:
        json.dump(scores, f, indent=2)

    # Generate validation report
    report = []
    report.append("# Batch 1 AI-Grounded Domain Validation Report")
    report.append(f"\n**Generated**: {Path(__file__).stat().st_mtime}")
    report.append(f"\n## Summary Statistics\n")
    report.append(f"- **Total Files Validated**: {validation_data['total_files']}")
    report.append(f"- **Average Compliance Score**: {validation_data['average_score']:.2f}%")
    report.append(f"- **Overall Quality Grade**: **{validation_data['overall_grade']}**")
    report.append(f"\n## Grade Distribution\n")
    for grade, count in validation_data['grade_distribution'].items():
        report.append(f"- {grade}: {count} files")

    report.append(f"\n## Detailed File Results\n")
    for result in sorted(validation_data['results'], key=lambda r: r.compliance_score, reverse=True):
        file_name = Path(result.file_path).name
        report.append(f"\n### {file_name}")
        report.append(f"**Score**: {result.compliance_score:.1f}%")

        if result.issues:
            report.append(f"\n**Issues** ({len(result.issues)}):")
            for issue in result.issues:
                report.append(f"- {issue}")

        if result.broken_wikilinks:
            report.append(f"\n**Broken WikiLinks** ({len(result.broken_wikilinks)}):")
            for link in result.broken_wikilinks[:10]:  # Limit to first 10
                report.append(f"- `[[{link}]]`")
            if len(result.broken_wikilinks) > 10:
                report.append(f"- ... and {len(result.broken_wikilinks) - 10} more")

    # Save report
    report_file = base_path / "swarm-coordination" / "batch-1-validation-report.md"
    report_file.write_text('\n'.join(report))

    print(f"✅ Validation complete!")
    print(f"📊 Average Score: {validation_data['average_score']:.2f}%")
    print(f"🎓 Overall Grade: {validation_data['overall_grade']}")
    print(f"📄 Report: {report_file}")
    print(f"📊 Scores: {scores_file}")

if __name__ == "__main__":
    main()
