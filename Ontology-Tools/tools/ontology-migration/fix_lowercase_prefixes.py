#!/usr/bin/env python3
"""
Fix Lowercase Prefixes - Fix and migrate lowercase prefixed files

This script:
1. Finds all lowercase prefixed files (rb-, bc-, ai-, pc-)
2. Fixes malformed preferred-term in ontology blocks
3. Renames files to proper human-readable format
4. Enriches ontology blocks with domain metadata
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple
from datetime import datetime
from tqdm import tqdm

# Configuration
PAGES_DIR = Path("/home/user/logseq/mainKnowledgeGraph/pages")
LOGS_DIR = Path("/home/user/logseq/scripts/ontology-migration/logs")

# Patterns
LOWERCASE_PATTERN = re.compile(r'^([a-z]{2,4})-(\d{4})-(.+)\.md$')
TERM_ID_PATTERN = re.compile(r'(term-id::\s*)(.+?)(\s*)$', re.MULTILINE)
PREFERRED_TERM_PATTERN = re.compile(r'(preferred-term::\s*)(.+?)(\s*)$', re.MULTILINE)


def extract_term_id(content: str) -> str:
    """Extract term-id from ontology block."""
    match = re.search(r'term-id::\s*(.+)', content)
    return match.group(1).strip() if match else ""


def extract_preferred_term(content: str) -> str:
    """Extract preferred-term from ontology block."""
    match = re.search(r'preferred-term::\s*(.+)', content)
    return match.group(1).strip() if match else ""


def title_case_term(text: str) -> str:
    """
    Convert to proper title case for ontology terms.

    Examples:
        "rb 0006 service robot" -> "Service Robot"
        "ai 0376 algorithmic accountability" -> "Algorithmic Accountability"
    """
    # Remove prefix and number
    parts = text.split()
    # Skip first two parts if they look like "rb 0006"
    if len(parts) >= 2 and parts[0].isalpha() and parts[1].isdigit():
        parts = parts[2:]

    # Title case
    result = ' '.join(word.capitalize() for word in parts)

    # Handle special cases
    result = result.replace('Ai ', 'AI ')
    result = result.replace(' Ai', ' AI')
    result = result.replace('Ml ', 'ML ')
    result = result.replace(' Ml', ' ML')
    result = result.replace('Iot ', 'IoT ')
    result = result.replace(' Iot', ' IoT')
    result = result.replace('Api ', 'API ')
    result = result.replace(' Api', ' API')

    return result


def fix_ontology_block(content: str, term_id: str, preferred_term: str,
                       domain_prefix: str, sequence_num: str, old_filename: str) -> str:
    """Fix ontology block with proper values."""

    # Fix preferred-term if malformed
    if preferred_term and (preferred_term.islower() or ' 0' in preferred_term):
        new_preferred_term = title_case_term(preferred_term)
        content = re.sub(
            r'(preferred-term::\s*)(.+?)(\s*)$',
            f'\\1{new_preferred_term}\\3',
            content,
            flags=re.MULTILINE
        )
    else:
        new_preferred_term = preferred_term

    # Add domain metadata if not present
    if 'domain-prefix::' not in content:
        # Find the line after term-id and add domain metadata
        content = re.sub(
            r'(term-id::\s*.+\n)',
            f'\\1\t- domain-prefix:: {domain_prefix}\n\t- sequence-number:: {sequence_num}\n',
            content
        )

    # Add filename-history if not present
    if 'filename-history::' not in content:
        content = re.sub(
            r'(sequence-number::\s*.+\n)',
            f'\\1\t- filename-history:: ["{old_filename}"]\n',
            content
        )

    return content


def process_lowercase_files() -> Dict:
    """Process all lowercase prefixed files."""

    files = list(PAGES_DIR.glob('*-[0-9][0-9][0-9][0-9]-*.md'))

    lowercase_files = []
    for file_path in files:
        match = LOWERCASE_PATTERN.match(file_path.name)
        if match:
            lowercase_files.append(file_path)

    print(f"Found {len(lowercase_files)} lowercase prefixed files")

    results = {
        "total": len(lowercase_files),
        "fixed": 0,
        "renamed": 0,
        "errors": 0,
        "files": []
    }

    for file_path in tqdm(lowercase_files, desc="Processing files"):
        try:
            match = LOWERCASE_PATTERN.match(file_path.name)
            domain_prefix = match.group(1).upper()
            sequence_num = match.group(2)

            # Read content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Extract current values
            term_id = extract_term_id(content)
            preferred_term = extract_preferred_term(content)

            if not preferred_term:
                print(f"⚠️  No preferred-term found in {file_path.name}")
                results["errors"] += 1
                continue

            # Generate new filename
            new_filename = title_case_term(preferred_term) + ".md"
            new_path = PAGES_DIR / new_filename

            # Check if target exists
            if new_path.exists():
                print(f"⚠️  Target exists: {new_filename}")
                results["errors"] += 1
                continue

            # Fix ontology block
            new_content = fix_ontology_block(
                content, term_id, preferred_term,
                domain_prefix, sequence_num, file_path.name
            )

            # Write fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            results["fixed"] += 1

            # Rename file
            file_path.rename(new_path)
            results["renamed"] += 1

            results["files"].append({
                "old": file_path.name,
                "new": new_filename,
                "term_id": term_id,
                "domain": domain_prefix
            })

        except Exception as e:
            print(f"❌ Error processing {file_path.name}: {e}")
            results["errors"] += 1

    return results


def save_results(results: Dict) -> None:
    """Save processing results."""
    log_file = LOGS_DIR / f"lowercase_fix_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    LOGS_DIR.mkdir(parents=True, exist_ok=True)

    with open(log_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\n📝 Log saved: {log_file}")


def print_summary(results: Dict) -> None:
    """Print summary."""
    print("\n" + "="*70)
    print("LOWERCASE PREFIX FIX SUMMARY")
    print("="*70)

    print(f"\n📊 Statistics:")
    print(f"   Total files:        {results['total']}")
    print(f"   Fixed blocks:       {results['fixed']}")
    print(f"   Renamed files:      {results['renamed']}")
    print(f"   Errors:             {results['errors']}")

    if results['files']:
        print(f"\n📝 Example renames:")
        for file_info in results['files'][:10]:
            print(f"   {file_info['old']}")
            print(f"      → {file_info['new']}")


def main():
    """Main execution."""
    print("🚀 Fix Lowercase Prefixes - Processing robotics files...")

    # Process files
    results = process_lowercase_files()

    # Save results
    save_results(results)

    # Print summary
    print_summary(results)

    if results['errors'] > 0:
        print("\n⚠️  Processing completed with errors")
        return 1
    else:
        print("\n✅ Processing completed successfully")
        return 0


if __name__ == "__main__":
    sys.exit(main())
