#!/usr/bin/env python3
"""
Logseq Ontology Filename Pattern Analysis
Analyzes 1,491 markdown files to categorize naming patterns and extract ontology metadata.

Usage:
    python analyze_filenames.py [--output-dir OUTPUT_DIR] [--pages-dir PAGES_DIR]
"""

import os
import re
import json
from collections import defaultdict, Counter
from pathlib import Path
from typing import Dict, List, Tuple, Optional
import argparse
from dataclasses import dataclass, asdict


@dataclass
class OntologyFile:
    """Represents a single ontology file with metadata."""
    filename: str
    filepath: str
    naming_pattern: str
    domain_prefix: Optional[str] = None
    sequence_number: Optional[str] = None
    term_name: Optional[str] = None
    term_id: Optional[str] = None
    has_ontology_block: bool = False
    public_access: Optional[bool] = None
    status: Optional[str] = None

    def to_dict(self):
        return asdict(self)


class FilenameAnalyzer:
    """Analyzes Logseq ontology filenames and extracts patterns."""

    # Naming pattern regex
    DOMAIN_PREFIX_PATTERN = re.compile(r'^([A-Za-z]{2,4})-(\d{4})-(.+)\.md$')
    CLEAN_NAME_PATTERN = re.compile(r'^([A-Z][^-]*(?:\s+[^-]+)*)\.md$')
    ONTOLOGY_BLOCK_PATTERN = re.compile(r'###\s+OntologyBlock', re.IGNORECASE)
    TERM_ID_PATTERN = re.compile(r'term-id::\s*([A-Za-z]{2,4}-\d{4})', re.IGNORECASE)
    PUBLIC_ACCESS_PATTERN = re.compile(r'public-access::\s*(true|false)', re.IGNORECASE)
    STATUS_PATTERN = re.compile(r'status::\s*(\w+)', re.IGNORECASE)

    def __init__(self, pages_dir: str = "/home/user/logseq/mainKnowledgeGraph/pages"):
        self.pages_dir = Path(pages_dir)
        self.files: List[OntologyFile] = []
        self.patterns: Dict[str, int] = defaultdict(int)
        self.domain_prefixes: Counter = Counter()

    def analyze_file(self, filepath: Path) -> OntologyFile:
        """Analyze a single markdown file for naming patterns and ontology metadata."""
        filename = filepath.name

        # Check for domain-prefix-ID-name pattern
        domain_match = self.DOMAIN_PREFIX_PATTERN.match(filename)
        if domain_match:
            domain_prefix, sequence_number, term_name = domain_match.groups()
            pattern = "domain-prefix-id-name"
            self.domain_prefixes[domain_prefix.upper()] += 1

            file_obj = OntologyFile(
                filename=filename,
                filepath=str(filepath),
                naming_pattern=pattern,
                domain_prefix=domain_prefix.upper(),
                sequence_number=sequence_number,
                term_name=term_name.replace('-', ' ').title()
            )
        # Check for clean human-readable name
        elif self.CLEAN_NAME_PATTERN.match(filename):
            pattern = "clean-name"
            term_name = filename[:-3]  # Remove .md extension

            file_obj = OntologyFile(
                filename=filename,
                filepath=str(filepath),
                naming_pattern=pattern,
                term_name=term_name
            )
        else:
            # Other patterns (lowercase, special chars, etc.)
            pattern = "other"
            file_obj = OntologyFile(
                filename=filename,
                filepath=str(filepath),
                naming_pattern=pattern,
                term_name=filename[:-3]
            )

        self.patterns[pattern] += 1

        # Extract ontology block metadata if file is small enough to read quickly
        try:
            if filepath.stat().st_size < 500_000:  # Only read files < 500KB
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read(10000)  # Read first 10KB for ontology block

                    if self.ONTOLOGY_BLOCK_PATTERN.search(content):
                        file_obj.has_ontology_block = True

                        # Extract term-id
                        term_id_match = self.TERM_ID_PATTERN.search(content)
                        if term_id_match:
                            file_obj.term_id = term_id_match.group(1)

                        # Extract public-access
                        public_access_match = self.PUBLIC_ACCESS_PATTERN.search(content)
                        if public_access_match:
                            file_obj.public_access = public_access_match.group(1).lower() == 'true'

                        # Extract status
                        status_match = self.STATUS_PATTERN.search(content)
                        if status_match:
                            file_obj.status = status_match.group(1)
        except Exception as e:
            print(f"Warning: Could not read {filepath}: {e}")

        return file_obj

    def analyze_all_files(self) -> None:
        """Analyze all markdown files in the pages directory."""
        print(f"Scanning directory: {self.pages_dir}")

        md_files = list(self.pages_dir.glob("*.md"))
        total_files = len(md_files)
        print(f"Found {total_files} markdown files")

        for i, filepath in enumerate(md_files, 1):
            if i % 100 == 0:
                print(f"Progress: {i}/{total_files} files analyzed...")

            file_obj = self.analyze_file(filepath)
            self.files.append(file_obj)

        print(f"Analysis complete: {len(self.files)} files processed")

    def generate_statistics(self) -> Dict:
        """Generate comprehensive statistics about the analyzed files."""
        stats = {
            "total_files": len(self.files),
            "patterns": dict(self.patterns),
            "domain_prefixes": dict(self.domain_prefixes.most_common()),
            "ontology_blocks": {
                "with_ontology_block": sum(1 for f in self.files if f.has_ontology_block),
                "without_ontology_block": sum(1 for f in self.files if not f.has_ontology_block),
            },
            "public_access": {
                "true": sum(1 for f in self.files if f.public_access is True),
                "false": sum(1 for f in self.files if f.public_access is False),
                "unknown": sum(1 for f in self.files if f.public_access is None),
            },
            "status": Counter(f.status for f in self.files if f.status).most_common(),
            "term_id_format": {
                "has_term_id": sum(1 for f in self.files if f.term_id),
                "no_term_id": sum(1 for f in self.files if not f.term_id),
            }
        }

        return stats

    def generate_migration_mapping(self) -> List[Dict]:
        """Generate a list of files that need to be renamed with old -> new mapping."""
        migration_list = []

        for file_obj in self.files:
            if file_obj.naming_pattern == "domain-prefix-id-name":
                # Generate new clean filename
                if file_obj.term_name:
                    # Use term_name from filename
                    new_filename = file_obj.term_name.title() + ".md"
                elif file_obj.term_id:
                    # Fallback to term_id if available
                    new_filename = file_obj.term_id.replace('-', ' ').title() + ".md"
                else:
                    # Last resort: use original without prefix
                    name_part = file_obj.filename.split('-', 2)[2] if '-' in file_obj.filename else file_obj.filename
                    new_filename = name_part.replace('-', ' ').title()

                migration_list.append({
                    "old_filename": file_obj.filename,
                    "new_filename": new_filename,
                    "domain_prefix": file_obj.domain_prefix,
                    "sequence_number": file_obj.sequence_number,
                    "term_id": file_obj.term_id,
                    "filepath": file_obj.filepath,
                    "has_ontology_block": file_obj.has_ontology_block,
                })

        return migration_list

    def generate_report(self, output_dir: str = "/home/user/logseq/docs/ontology-migration") -> None:
        """Generate comprehensive analysis reports."""
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)

        print(f"\nGenerating reports in: {output_path}")

        # 1. Statistics report (JSON)
        stats = self.generate_statistics()
        stats_file = output_path / "analysis_statistics.json"
        with open(stats_file, 'w') as f:
            json.dump(stats, f, indent=2)
        print(f"✓ Statistics report: {stats_file}")

        # 2. Full file listing (JSON)
        files_file = output_path / "all_files.json"
        with open(files_file, 'w') as f:
            json.dump([f.to_dict() for f in self.files], f, indent=2)
        print(f"✓ Full file listing: {files_file}")

        # 3. Migration mapping (JSON)
        migration_mapping = self.generate_migration_mapping()
        migration_file = output_path / "migration_mapping.json"
        with open(migration_file, 'w') as f:
            json.dump(migration_mapping, f, indent=2)
        print(f"✓ Migration mapping: {migration_file} ({len(migration_mapping)} files to rename)")

        # 4. Human-readable summary (Markdown)
        summary_file = output_path / "ANALYSIS_SUMMARY.md"
        self._write_summary_markdown(summary_file, stats, migration_mapping)
        print(f"✓ Summary report: {summary_file}")

        print("\n✅ All reports generated successfully!")

    def _write_summary_markdown(self, filepath: Path, stats: Dict, migration_mapping: List[Dict]) -> None:
        """Write a human-readable summary in Markdown format."""
        with open(filepath, 'w') as f:
            f.write("# Logseq Ontology Filename Analysis Summary\n\n")
            f.write(f"**Analysis Date**: {Path(filepath).stat().st_mtime}\n")
            f.write(f"**Total Files Analyzed**: {stats['total_files']}\n\n")

            f.write("## Naming Pattern Distribution\n\n")
            for pattern, count in stats['patterns'].items():
                percentage = (count / stats['total_files']) * 100
                f.write(f"- **{pattern}**: {count} files ({percentage:.1f}%)\n")

            f.write("\n## Domain Prefix Distribution\n\n")
            f.write("Files using domain-prefix-ID-name pattern:\n\n")
            for prefix, count in stats['domain_prefixes'].items():
                f.write(f"- **{prefix}**: {count} files\n")

            f.write("\n## Ontology Block Analysis\n\n")
            f.write(f"- Files with OntologyBlock: {stats['ontology_blocks']['with_ontology_block']}\n")
            f.write(f"- Files without OntologyBlock: {stats['ontology_blocks']['without_ontology_block']}\n")
            f.write(f"- Files with term-id: {stats['term_id_format']['has_term_id']}\n")

            f.write("\n## Public Access Distribution\n\n")
            f.write(f"- Public (true): {stats['public_access']['true']}\n")
            f.write(f"- Private (false): {stats['public_access']['false']}\n")
            f.write(f"- Unknown: {stats['public_access']['unknown']}\n")

            f.write("\n## Status Distribution\n\n")
            for status, count in stats['status']:
                f.write(f"- **{status}**: {count} files\n")

            f.write("\n## Migration Impact\n\n")
            f.write(f"**Files requiring rename**: {len(migration_mapping)}\n\n")

            f.write("### Sample Renames (first 10)\n\n")
            for item in migration_mapping[:10]:
                f.write(f"- `{item['old_filename']}` → `{item['new_filename']}`\n")

            f.write("\n## Recommendations\n\n")
            f.write("1. Migrate domain-prefix-ID-name files to clean human-readable names\n")
            f.write("2. Enhance OntologyBlock to capture domain and sequence information\n")
            f.write("3. Standardize all ontology blocks across files\n")
            f.write("4. Add filename-history field to track renames\n")
            f.write("5. Implement validation to ensure consistency\n")


def main():
    """Main entry point for the filename analysis script."""
    parser = argparse.ArgumentParser(
        description="Analyze Logseq ontology filenames and generate migration reports"
    )
    parser.add_argument(
        '--pages-dir',
        default='/home/user/logseq/mainKnowledgeGraph/pages',
        help='Path to Logseq pages directory'
    )
    parser.add_argument(
        '--output-dir',
        default='/home/user/logseq/docs/ontology-migration',
        help='Output directory for reports'
    )

    args = parser.parse_args()

    print("=" * 70)
    print("LOGSEQ ONTOLOGY FILENAME ANALYSIS")
    print("=" * 70)

    analyzer = FilenameAnalyzer(pages_dir=args.pages_dir)
    analyzer.analyze_all_files()
    analyzer.generate_report(output_dir=args.output_dir)

    print("\n" + "=" * 70)
    print("ANALYSIS COMPLETE")
    print("=" * 70)


if __name__ == "__main__":
    main()
