#!/usr/bin/env python3
"""
Fix Numeric Prefix Files - Fix files with numeric prefixes in their names

This script fixes files that were incorrectly renamed with numeric prefixes
like "0390 Ai Impact Assessment.md" instead of "AI Impact Assessment.md"
"""

import re
import sys
from pathlib import Path

PAGES_DIR = Path("/home/user/logseq/mainKnowledgeGraph/pages")

# Files with numeric prefixes and their correct names
FIXES = {
    "0390 Ai Impact Assessment.md": "AI Impact Assessment.md",
    "0422 Synthetic Data Generation.md": "Synthetic Data Generation.md",
    "0423 Privacy Preserving Data Mining.md": "Privacy Preserving Data Mining.md",
    "0424 Confidential Computing.md": "Confidential Computing.md",
    "0425 Privacy Impact Assessment.md": "Privacy Impact Assessment.md",
    "0426 Data Minimisation.md": "Data Minimisation.md",
    "0427 Pseudonymisation.md": "Pseudonymisation.md",
    "0428 Privacy By Design.md": "Privacy By Design.md",
    "0430 Privacy Utility Tradeoffs.md": "Privacy Utility Tradeoffs.md",
}

def fix_preferred_term(content: str, correct_term: str) -> str:
    """Fix preferred-term in ontology block."""
    pattern = r'(preferred-term::\s*)(\d{4}\s+.+?)(\s*)$'
    replacement = f'\\1{correct_term}\\3'
    return re.sub(pattern, replacement, content, flags=re.MULTILINE)

def main():
    print("🔧 Fixing numeric prefix files...")

    fixed_count = 0
    error_count = 0

    for old_name, new_name in FIXES.items():
        old_path = PAGES_DIR / old_name
        new_path = PAGES_DIR / new_name

        if not old_path.exists():
            print(f"⚠️  File not found: {old_name}")
            error_count += 1
            continue

        if new_path.exists():
            print(f"⚠️  Target exists: {new_name}")
            error_count += 1
            continue

        try:
            # Read content
            with open(old_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Extract correct term from new filename
            correct_term = new_name.replace('.md', '')

            # Fix preferred-term
            fixed_content = fix_preferred_term(content, correct_term)

            # Write fixed content
            with open(old_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)

            # Rename file
            old_path.rename(new_path)
            print(f"✓ {old_name} → {new_name}")
            fixed_count += 1

        except Exception as e:
            print(f"❌ Error fixing {old_name}: {e}")
            error_count += 1

    print(f"\n📊 Fixed {fixed_count} files, {error_count} errors")

    return 0 if error_count == 0 else 1

if __name__ == "__main__":
    sys.exit(main())
