#!/usr/bin/env python3
"""
Master Validation Runner
Executes all 5 validation levels and generates comprehensive report
"""

import sys
import os
import json
from datetime import datetime

# Import all validators
sys.path.append(os.path.dirname(__file__))
from level1_syntactic_validator import SyntacticValidator
from level2_semantic_validator import SemanticValidator
from level3_quality_metrics import QualityMetricsValidator
from level4_competency_validator import CompetencyValidator
from level5_statistics_reporter import StatisticsReporter

class MasterValidator:
    def __init__(self, ontology_file: str):
        self.ontology_file = ontology_file
        self.results = []

    def run_all_validations(self):
        """Run all 5 validation levels"""
        print("\n" + "=" * 80)
        print("DISRUPTIVE TECHNOLOGIES META-ONTOLOGY VALIDATION")
        print("Comprehensive 5-Level Validation Framework")
        print("=" * 80)
        print(f"\nOntology File: {self.ontology_file}")
        print(f"Validation Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)

        # Level 1: Syntactic Validation
        print("\n🔍 Running Level 1: Syntactic Validation...")
        validator1 = SyntacticValidator(self.ontology_file)
        result1 = validator1.validate()
        self.results.append(result1)

        # Level 2: Semantic Validation
        print("\n🔍 Running Level 2: Semantic Validation...")
        validator2 = SemanticValidator(self.ontology_file)
        result2 = validator2.validate()
        self.results.append(result2)

        # Level 3: Quality Metrics
        print("\n🔍 Running Level 3: Quality Metrics...")
        validator3 = QualityMetricsValidator(self.ontology_file)
        result3 = validator3.validate()
        self.results.append(result3)

        # Level 4: Competency Evaluation
        print("\n🔍 Running Level 4: Competency Evaluation...")
        validator4 = CompetencyValidator(self.ontology_file)
        result4 = validator4.validate()
        self.results.append(result4)

        # Level 5: Statistics Report
        print("\n🔍 Running Level 5: Statistics Report...")
        reporter = StatisticsReporter(self.ontology_file)
        result5 = reporter.generate_report()
        self.results.append(result5)

        # Generate final report
        self._generate_final_report()

    def _generate_final_report(self):
        """Generate comprehensive final validation report"""
        print("\n" + "=" * 80)
        print("FINAL VALIDATION REPORT")
        print("=" * 80)

        # Calculate overall score
        total_score = 0
        total_target = 0

        print("\nLEVEL SCORES:")
        print("-" * 80)

        for result in self.results:
            level = result['level']
            name = result['name']
            score = result['score']
            target = result['target']
            passed = result['passed']

            total_score += score
            total_target += target

            status = "✓ PASS" if passed else "✗ FAIL"
            print(f"Level {level}: {name:30s} {score:6.2f}/{target:3d} [{status}]")

        # Calculate overall percentage and grade
        overall_percentage = (total_score / total_target * 100) if total_target > 0 else 0

        # Determine grade
        if overall_percentage >= 94:
            grade = "A"
            grade_desc = "Excellent"
        elif overall_percentage >= 90:
            grade = "A-"
            grade_desc = "Very Good"
        elif overall_percentage >= 85:
            grade = "B+"
            grade_desc = "Good"
        elif overall_percentage >= 80:
            grade = "B"
            grade_desc = "Satisfactory"
        else:
            grade = "C"
            grade_desc = "Needs Improvement"

        print("\n" + "=" * 80)
        print(f"OVERALL SCORE: {total_score:.2f}/{total_target} ({overall_percentage:.2f}%)")
        print(f"GRADE: {grade} ({grade_desc})")
        print("=" * 80)

        # Certification status
        certification_passed = all(r['passed'] for r in self.results) and overall_percentage >= 94

        print(f"\nCERTIFICATION STATUS: {'✓ PASSED' if certification_passed else '✗ FAILED'}")

        if certification_passed:
            print("\n🎉 The ontology meets all validation criteria and is certified for production use!")
        else:
            print("\n⚠️  The ontology requires improvements before certification.")

        # Summary of issues
        total_errors = sum(len(r.get('errors', [])) for r in self.results)
        total_warnings = sum(len(r.get('warnings', [])) for r in self.results)

        print(f"\nISSUES SUMMARY:")
        print(f"  Total Errors: {total_errors}")
        print(f"  Total Warnings: {total_warnings}")

        # Print key statistics
        stats_result = self.results[4]  # Level 5 statistics
        stats = stats_result['stats']

        print(f"\nKEY STATISTICS:")
        print(f"  File Size: {stats.get('file_size_kb', 0)} KB")
        print(f"  Total Classes: {stats.get('total_classes', 0)}")
        print(f"    - Metaverse: {stats.get('mv_classes', 0)}")
        print(f"    - Blockchain: {stats.get('bc_classes', 0)}")
        print(f"    - AI: {stats.get('ai_classes', 0)}")
        print(f"    - Robotics: {stats.get('rb_classes', 0)}")
        print(f"  Cross-Domain Bridges: {stats.get('total_bridges', 0)}")
        print(f"  Metadata Coverage: {stats.get('metadata_coverage_pct', 0)}%")
        print(f"  Provenance Coverage: {stats.get('prov_coverage_pct', 0)}%")

        # Quality metrics
        if len(self.results) >= 3:
            metrics = self.results[2].get('metrics', {})
            print(f"\nQUALITY METRICS:")
            print(f"  Cohesion Score: {metrics.get('cohesion', 0):.3f}")
            print(f"  Coupling Score: {metrics.get('coupling', 0):.3f}")
            print(f"  Documentation Coverage: {metrics.get('documentation_coverage', 0)*100:.2f}%")

        # Save report to file
        self._save_report_to_file(overall_percentage, grade, certification_passed)

        print("\n" + "=" * 80)
        print(f"Validation Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 80)

        return certification_passed

    def _save_report_to_file(self, overall_percentage, grade, certification_passed):
        """Save detailed report to JSON file"""
        report_dir = os.path.join(os.path.dirname(self.ontology_file), 'validation', 'reports')
        os.makedirs(report_dir, exist_ok=True)

        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        report_file = os.path.join(report_dir, f'validation_report_{timestamp}.json')

        report_data = {
            'ontology_file': self.ontology_file,
            'validation_timestamp': datetime.now().isoformat(),
            'overall_score': overall_percentage,
            'grade': grade,
            'certification_passed': certification_passed,
            'level_results': self.results
        }

        with open(report_file, 'w') as f:
            json.dump(report_data, f, indent=2)

        print(f"\n📄 Detailed report saved to: {report_file}")

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python run_all_validations.py <ontology_file>")
        sys.exit(1)

    ontology_file = sys.argv[1]

    if not os.path.exists(ontology_file):
        print(f"Error: File not found: {ontology_file}")
        sys.exit(1)

    validator = MasterValidator(ontology_file)
    passed = validator.run_all_validations()

    sys.exit(0 if passed else 1)
