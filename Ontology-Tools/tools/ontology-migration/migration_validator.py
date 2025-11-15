#!/usr/bin/env python3
"""
Migration Validator - Comprehensive validation before and after migration

This script validates:
1. No duplicate filenames
2. All wiki-links resolve to existing pages
3. All journal references valid
4. Ontology blocks valid and complete
5. term-id uniqueness
6. No broken references

Supports --phase=pre or --phase=post
"""

import json
import re
import sys
import argparse
from pathlib import Path
from typing import Dict, List, Set, Tuple
from collections import defaultdict
from datetime import datetime
from tqdm import tqdm

# Configuration
GRAPH_DIR = Path("/home/user/logseq/mainKnowledgeGraph")
PAGES_DIR = GRAPH_DIR / "pages"
JOURNALS_DIR = GRAPH_DIR / "journals"
REPORTS_DIR = Path("/home/user/logseq/scripts/ontology-migration/reports")

# Regex patterns
WIKILINK_PATTERN = re.compile(r'\[\[([^\]]+)\]\]')
TERM_ID_PATTERN = re.compile(r'^\s*-?\s*term-id::\s*(.+)$', re.MULTILINE)
ONTOLOGY_BLOCK_PATTERN = re.compile(r'^-\s*###\s*OntologyBlock\s*$', re.MULTILINE)
PREFERRED_TERM_PATTERN = re.compile(r'^\s*-?\s*preferred-term::\s*(.+)$', re.MULTILINE)


def get_all_pages() -> Set[str]:
    """Get set of all page names (without .md extension)."""
    pages = set()

    for file_path in PAGES_DIR.glob("*.md"):
        page_name = file_path.stem
        pages.add(page_name)

    return pages


def check_duplicate_filenames() -> Dict:
    """Check for duplicate filenames (case-insensitive on some systems)."""
    filenames = defaultdict(list)

    for file_path in PAGES_DIR.glob("*.md"):
        normalized = file_path.name.lower()
        filenames[normalized].append(file_path.name)

    duplicates = {
        norm_name: actual_names
        for norm_name, actual_names in filenames.items()
        if len(actual_names) > 1
    }

    return {
        "has_duplicates": len(duplicates) > 0,
        "duplicates": duplicates
    }


def check_term_id_uniqueness() -> Dict:
    """Check that all term-id values are unique."""
    term_ids = defaultdict(list)

    for file_path in tqdm(PAGES_DIR.glob("*.md"), desc="Checking term-id uniqueness"):
        try:
            content = file_path.read_text(encoding='utf-8')
            match = TERM_ID_PATTERN.search(content)

            if match:
                term_id = match.group(1).strip()
                term_ids[term_id].append(file_path.name)
        except Exception as e:
            print(f"Error reading {file_path}: {e}", file=sys.stderr)

    duplicates = {
        term_id: files
        for term_id, files in term_ids.items()
        if len(files) > 1
    }

    return {
        "has_duplicates": len(duplicates) > 0,
        "total_term_ids": len(term_ids),
        "duplicates": duplicates
    }


def validate_ontology_blocks() -> Dict:
    """Validate that all ontology blocks are complete and well-formed."""
    issues = []
    total = 0
    valid = 0

    for file_path in tqdm(PAGES_DIR.glob("*.md"), desc="Validating ontology blocks"):
        try:
            content = file_path.read_text(encoding='utf-8')

            # Check if file has OntologyBlock
            if not ONTOLOGY_BLOCK_PATTERN.search(content):
                continue

            total += 1
            file_issues = []

            # Check required fields
            if not TERM_ID_PATTERN.search(content):
                file_issues.append("Missing term-id")

            if not PREFERRED_TERM_PATTERN.search(content):
                file_issues.append("Missing preferred-term")

            if not re.search(r'^\s*-?\s*definition::', content, re.MULTILINE):
                file_issues.append("Missing definition")

            if not re.search(r'^\s*-?\s*source-domain::', content, re.MULTILINE):
                file_issues.append("Missing source-domain")

            if file_issues:
                issues.append({
                    "filename": file_path.name,
                    "issues": file_issues
                })
            else:
                valid += 1

        except Exception as e:
            issues.append({
                "filename": file_path.name,
                "issues": [f"Error reading file: {e}"]
            })

    return {
        "total_ontology_files": total,
        "valid": valid,
        "invalid": len(issues),
        "issues": issues
    }


def check_broken_links() -> Dict:
    """Check for wiki-links that don't resolve to existing pages."""
    all_pages = get_all_pages()
    broken_links = []

    # Collect all files to check
    all_files = list(PAGES_DIR.glob("*.md"))
    if JOURNALS_DIR.exists():
        all_files.extend(JOURNALS_DIR.glob("*.md"))

    for file_path in tqdm(all_files, desc="Checking broken links"):
        try:
            content = file_path.read_text(encoding='utf-8')
            wikilinks = WIKILINK_PATTERN.findall(content)

            for link in wikilinks:
                # Skip property references and embedded queries
                if '::' in link or link.startswith('query-'):
                    continue

                if link not in all_pages:
                    broken_links.append({
                        "source_file": str(file_path.relative_to(GRAPH_DIR)),
                        "broken_link": link
                    })

        except Exception as e:
            print(f"Error checking {file_path}: {e}", file=sys.stderr)

    # Group by broken link
    by_link = defaultdict(list)
    for broken in broken_links:
        by_link[broken["broken_link"]].append(broken["source_file"])

    return {
        "has_broken_links": len(broken_links) > 0,
        "total_broken": len(broken_links),
        "unique_broken_links": len(by_link),
        "broken_by_link": dict(by_link),
        "all_broken": broken_links
    }


def run_validation(phase: str) -> Dict:
    """Run complete validation suite."""
    print(f"\n🔍 Running {phase.upper()}-MIGRATION validation...")

    results = {
        "phase": phase,
        "timestamp": datetime.now().isoformat(),
        "validations": {}
    }

    # Check duplicate filenames
    print("   Checking duplicate filenames...")
    results["validations"]["duplicate_filenames"] = check_duplicate_filenames()

    # Check term-id uniqueness
    print("   Checking term-id uniqueness...")
    results["validations"]["term_id_uniqueness"] = check_term_id_uniqueness()

    # Validate ontology blocks
    print("   Validating ontology blocks...")
    results["validations"]["ontology_blocks"] = validate_ontology_blocks()

    # Check broken links
    print("   Checking broken links...")
    results["validations"]["broken_links"] = check_broken_links()

    return results


def generate_report(results: Dict) -> str:
    """Generate markdown validation report."""
    phase = results["phase"]
    timestamp = results["timestamp"]
    validations = results["validations"]

    report = []
    report.append(f"# Migration Validation Report")
    report.append(f"\n**Phase**: {phase.upper()}-MIGRATION")
    report.append(f"**Timestamp**: {timestamp}")
    report.append(f"\n---\n")

    # Overall status
    all_passed = True

    # Duplicate filenames
    dup_files = validations["duplicate_filenames"]
    report.append(f"## 1. Duplicate Filenames")
    if dup_files["has_duplicates"]:
        report.append(f"\n❌ **FAILED** - Found {len(dup_files['duplicates'])} duplicate filename groups")
        for norm_name, actual_names in list(dup_files['duplicates'].items())[:10]:
            report.append(f"   - {', '.join(actual_names)}")
        all_passed = False
    else:
        report.append(f"\n✅ **PASSED** - No duplicate filenames")

    # Term-id uniqueness
    term_ids = validations["term_id_uniqueness"]
    report.append(f"\n## 2. Term-ID Uniqueness")
    if term_ids["has_duplicates"]:
        report.append(f"\n❌ **FAILED** - Found {len(term_ids['duplicates'])} duplicate term-ids")
        for term_id, files in list(term_ids['duplicates'].items())[:10]:
            report.append(f"   - `{term_id}`: {', '.join(files)}")
        all_passed = False
    else:
        report.append(f"\n✅ **PASSED** - All {term_ids['total_term_ids']} term-ids are unique")

    # Ontology blocks
    onto_blocks = validations["ontology_blocks"]
    report.append(f"\n## 3. Ontology Block Validation")
    if onto_blocks["invalid"] > 0:
        report.append(f"\n⚠️  **WARNING** - {onto_blocks['invalid']} / {onto_blocks['total_ontology_files']} files have issues")
        report.append(f"\n**Valid**: {onto_blocks['valid']}")
        report.append(f"**Invalid**: {onto_blocks['invalid']}")
        report.append(f"\n**Sample issues:**")
        for issue in onto_blocks['issues'][:10]:
            report.append(f"   - {issue['filename']}: {', '.join(issue['issues'])}")
    else:
        report.append(f"\n✅ **PASSED** - All {onto_blocks['total_ontology_files']} ontology blocks valid")

    # Broken links
    broken = validations["broken_links"]
    report.append(f"\n## 4. Broken Links")
    if broken["has_broken_links"]:
        report.append(f"\n❌ **FAILED** - Found {broken['total_broken']} broken links ({broken['unique_broken_links']} unique)")
        report.append(f"\n**Top broken links:**")
        for link, sources in list(broken['broken_by_link'].items())[:10]:
            report.append(f"   - `[[{link}]]` referenced in {len(sources)} files")
        all_passed = False
    else:
        report.append(f"\n✅ **PASSED** - No broken links found")

    # Overall result
    report.append(f"\n---\n")
    if all_passed:
        report.append(f"## ✅ Overall Result: PASSED")
    else:
        report.append(f"## ❌ Overall Result: FAILED")
        report.append(f"\nPlease fix the issues above before proceeding with migration.")

    return '\n'.join(report)


def save_report(results: Dict, report_text: str) -> None:
    """Save validation report."""
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    phase = results["phase"]
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Save JSON
    json_file = REPORTS_DIR / f"validation_{phase}_{timestamp}.json"
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    # Save Markdown
    md_file = REPORTS_DIR / f"validation_{phase}_{timestamp}.md"
    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(report_text)

    print(f"\n📊 Validation report saved:")
    print(f"   JSON: {json_file}")
    print(f"   Markdown: {md_file}")


def main():
    """Main execution."""
    parser = argparse.ArgumentParser(description="Validate ontology migration")
    parser.add_argument('--phase', required=True, choices=['pre', 'post'],
                       help='Validation phase: pre or post migration')
    args = parser.parse_args()

    print("🚀 Migration Validator")
    print(f"📁 Graph directory: {GRAPH_DIR}")

    # Run validation
    results = run_validation(args.phase)

    # Generate report
    report_text = generate_report(results)

    # Save report
    save_report(results, report_text)

    # Print report
    print("\n" + report_text)

    # Exit with appropriate code
    all_passed = (
        not results["validations"]["duplicate_filenames"]["has_duplicates"] and
        not results["validations"]["term_id_uniqueness"]["has_duplicates"] and
        not results["validations"]["broken_links"]["has_broken_links"]
    )

    if all_passed:
        print("\n✅ Validation PASSED")
        return 0
    else:
        print("\n❌ Validation FAILED")
        return 1


if __name__ == "__main__":
    sys.exit(main())
