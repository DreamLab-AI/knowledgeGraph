#!/usr/bin/env python3
"""
WikiLink Integrity Validator
Validates WikiLinks across the Metaverse Ontology knowledge base.

Usage:
    python3 validate-wikilinks.py [--verbose] [--output report.md]
"""

import os
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Set, List, Tuple

class WikiLinkValidator:
    def __init__(self, base_path: str = "."):
        self.base_path = Path(base_path)
        self.wikilinks: Set[str] = set()
        self.existing_files: Set[str] = set()
        self.broken_links: Set[str] = set()
        self.broken_link_counts: Counter = Counter()

    def extract_wikilinks(self) -> Set[str]:
        """Extract all WikiLinks from markdown files."""
        wikilinks = set()
        pattern = re.compile(r'\[\[([^\]]+)\]\]')

        for md_file in self.base_path.rglob("*.md"):
            try:
                with open(md_file, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    matches = pattern.findall(content)
                    wikilinks.update(matches)
            except Exception as e:
                print(f"Warning: Could not read {md_file}: {e}", file=sys.stderr)

        return wikilinks

    def get_existing_files(self) -> Set[str]:
        """Get all existing markdown file names (without extension)."""
        existing = set()

        for md_file in self.base_path.rglob("*.md"):
            # Get filename without extension
            name = md_file.stem
            existing.add(name)

        return existing

    def count_link_references(self, link: str) -> int:
        """Count how many times a link is referenced across all files."""
        pattern = re.compile(re.escape(f'[[{link}]]'))
        count = 0

        for md_file in self.base_path.rglob("*.md"):
            try:
                with open(md_file, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    count += len(pattern.findall(content))
            except Exception:
                pass

        return count

    def validate(self) -> Tuple[int, int, int]:
        """
        Perform validation.

        Returns:
            Tuple of (total_links, valid_links, broken_links)
        """
        print("Extracting WikiLinks...")
        self.wikilinks = self.extract_wikilinks()

        print("Scanning existing files...")
        self.existing_files = self.get_existing_files()

        print("Identifying broken links...")
        self.broken_links = self.wikilinks - self.existing_files

        print("Counting link references...")
        for link in self.broken_links:
            count = self.count_link_references(link)
            if count > 0:
                self.broken_link_counts[link] = count

        total = len(self.wikilinks)
        valid = len(self.wikilinks - self.broken_links)
        broken = len(self.broken_links)

        return total, valid, broken

    def print_summary(self):
        """Print validation summary."""
        total, valid, broken = (
            len(self.wikilinks),
            len(self.wikilinks - self.broken_links),
            len(self.broken_links)
        )

        print("\n" + "="*70)
        print("WikiLink Integrity Validation Summary")
        print("="*70)
        print(f"Total unique WikiLinks: {total:,}")
        print(f"Valid links:            {valid:,} ({valid/total*100:.1f}%)")
        print(f"Broken links:           {broken:,} ({broken/total*100:.1f}%)")
        print(f"Existing MD files:      {len(self.existing_files):,}")
        print("="*70)

        if self.broken_link_counts:
            print("\nTop 20 Most Frequently Broken Links:")
            print("-"*70)
            for i, (link, count) in enumerate(self.broken_link_counts.most_common(20), 1):
                print(f"{i:2d}. {count:4d} occurrences: [[{link}]]")

    def save_report(self, output_path: str = "wikilink-report.txt"):
        """Save detailed report to file."""
        with open(output_path, 'w') as f:
            total, valid, broken = (
                len(self.wikilinks),
                len(self.wikilinks - self.broken_links),
                len(self.broken_links)
            )

            f.write("WikiLink Integrity Validation Report\n")
            f.write("="*70 + "\n\n")
            f.write(f"Total unique WikiLinks: {total:,}\n")
            f.write(f"Valid links:            {valid:,} ({valid/total*100:.1f}%)\n")
            f.write(f"Broken links:           {broken:,} ({broken/total*100:.1f}%)\n")
            f.write(f"Existing MD files:      {len(self.existing_files):,}\n\n")

            f.write("Broken Links by Frequency:\n")
            f.write("-"*70 + "\n")
            for link, count in self.broken_link_counts.most_common():
                f.write(f"{count:4d}\t{link}\n")

        print(f"\nDetailed report saved to: {output_path}")

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Validate WikiLinks in markdown files')
    parser.add_argument('--path', default='.', help='Base path to scan (default: current directory)')
    parser.add_argument('--output', help='Output report file path')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')

    args = parser.parse_args()

    validator = WikiLinkValidator(args.path)

    try:
        total, valid, broken = validator.validate()
        validator.print_summary()

        if args.output:
            validator.save_report(args.output)

        # Exit with error code if broken links found
        sys.exit(0 if broken == 0 else 1)

    except KeyboardInterrupt:
        print("\n\nValidation interrupted by user.")
        sys.exit(2)
    except Exception as e:
        print(f"\nError during validation: {e}", file=sys.stderr)
        sys.exit(3)

if __name__ == "__main__":
    main()
