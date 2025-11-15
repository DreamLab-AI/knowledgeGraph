#!/usr/bin/env python3
"""
Rename Files - Rename files based on migration mapping

This script:
1. Reads migration_map.json
2. Renames files from old → new
3. Handles conflicts gracefully
4. Tracks all renames
5. Verifies success
"""

import json
import sys
from pathlib import Path
from typing import Dict, List
from datetime import datetime
from tqdm import tqdm

# Configuration
PAGES_DIR = Path("/home/user/logseq/mainKnowledgeGraph/pages")
MAPPING_FILE = Path("/home/user/logseq/scripts/ontology-migration/migration_map.json")
LOGS_DIR = Path("/home/user/logseq/scripts/ontology-migration/logs")


def load_mapping() -> Dict:
    """Load migration mapping from JSON file."""
    if not MAPPING_FILE.exists():
        print(f"❌ Error: Mapping file not found: {MAPPING_FILE}", file=sys.stderr)
        print("   Run filename_mapper.py first!", file=sys.stderr)
        sys.exit(1)

    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def rename_file(old_path: Path, new_path: Path) -> bool:
    """
    Rename a single file.

    Returns:
        True if successful, False otherwise
    """
    try:
        # Check if old file exists
        if not old_path.exists():
            print(f"⚠️  File not found: {old_path.name}", file=sys.stderr)
            return False

        # Check if new filename already exists
        if new_path.exists():
            print(f"⚠️  Target already exists: {new_path.name}", file=sys.stderr)
            return False

        # Rename
        old_path.rename(new_path)
        return True

    except Exception as e:
        print(f"❌ Error renaming {old_path.name}: {e}", file=sys.stderr)
        return False


def rename_all_files(mapping_data: Dict) -> Dict:
    """
    Rename all files based on mapping.

    Returns:
        Statistics about the rename operation
    """
    mappings = mapping_data["mappings"]

    success_count = 0
    error_count = 0
    skipped_count = 0
    errors = []
    renames = []

    print(f"Renaming {len(mappings)} files...")

    for mapping in tqdm(mappings, desc="Renaming files"):
        old_filename = mapping["old_filename"]
        new_filename = mapping["new_filename"]

        # Skip if old and new are the same
        if old_filename == new_filename:
            skipped_count += 1
            continue

        old_path = PAGES_DIR / old_filename
        new_path = PAGES_DIR / new_filename

        if rename_file(old_path, new_path):
            success_count += 1
            renames.append({
                "old": old_filename,
                "new": new_filename,
                "term_id": mapping["term_id"]
            })
        else:
            error_count += 1
            errors.append({
                "old": old_filename,
                "new": new_filename,
                "error": "Rename failed"
            })

    return {
        "total": len(mappings),
        "success": success_count,
        "errors": error_count,
        "skipped": skipped_count,
        "renames": renames,
        "error_details": errors
    }


def verify_renames(mapping_data: Dict) -> Dict:
    """
    Verify that all files were renamed correctly.

    Returns:
        Verification results
    """
    mappings = mapping_data["mappings"]

    missing_files = []

    for mapping in tqdm(mappings, desc="Verifying renames"):
        new_filename = mapping["new_filename"]
        new_path = PAGES_DIR / new_filename

        if not new_path.exists():
            # Check if old file still exists (not renamed)
            old_filename = mapping["old_filename"]
            old_path = PAGES_DIR / old_filename

            if old_path.exists():
                missing_files.append({
                    "expected": new_filename,
                    "status": "not_renamed",
                    "old_file": old_filename
                })
            else:
                missing_files.append({
                    "expected": new_filename,
                    "status": "missing",
                    "old_file": old_filename
                })

    return {
        "verification_passed": len(missing_files) == 0,
        "missing_files": missing_files
    }


def save_rename_log(stats: Dict) -> None:
    """Save rename log."""
    log_file = LOGS_DIR / f"rename_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    LOGS_DIR.mkdir(parents=True, exist_ok=True)

    with open(log_file, 'w', encoding='utf-8') as f:
        json.dump(stats, f, indent=2, ensure_ascii=False)

    print(f"\n📝 Rename log saved: {log_file}")


def print_summary(stats: Dict, verification: Dict) -> None:
    """Print rename summary."""
    print("\n" + "="*70)
    print("FILE RENAME SUMMARY")
    print("="*70)

    print(f"\n📊 Statistics:")
    print(f"   Total files:       {stats['total']}")
    print(f"   Successfully renamed: {stats['success']}")
    print(f"   Skipped (same name): {stats['skipped']}")
    print(f"   Errors:            {stats['errors']}")

    # Show example renames
    if stats['renames']:
        print(f"\n📝 Example renames:")
        for rename in stats['renames'][:5]:
            print(f"   {rename['old']}")
            print(f"      → {rename['new']}")

    # Show errors
    if stats['error_details']:
        print(f"\n❌ ERRORS ({len(stats['error_details'])}):")
        for error in stats['error_details'][:10]:
            print(f"   {error['old']} → {error['new']}")
            print(f"      Error: {error['error']}")

    # Verification
    print(f"\n🔍 Verification:")
    if verification["verification_passed"]:
        print("   ✅ All files renamed successfully")
    else:
        print(f"   ❌ {len(verification['missing_files'])} files not found after rename")
        for missing in verification['missing_files'][:5]:
            print(f"      Expected: {missing['expected']}")
            print(f"      Status: {missing['status']}")


def main():
    """Main execution."""
    print("🚀 Rename Files - Renaming ontology files...")

    # Load mapping
    mapping_data = load_mapping()
    print(f"✅ Loaded mapping with {len(mapping_data['mappings'])} entries")

    # Check for conflicts
    if mapping_data.get("conflicts"):
        print(f"\n⚠️  WARNING: Conflicts detected in mapping!", file=sys.stderr)
        print("   Resolve conflicts before running rename!", file=sys.stderr)
        print("   Check migration_map.json for details", file=sys.stderr)
        return 1

    # Rename files
    stats = rename_all_files(mapping_data)

    # Verify renames
    verification = verify_renames(mapping_data)
    stats["verification"] = verification

    # Save log
    save_rename_log(stats)

    # Print summary
    print_summary(stats, verification)

    # Exit with appropriate code
    if stats['errors'] > 0 or not verification["verification_passed"]:
        print("\n❌ Rename completed with issues")
        return 1
    else:
        print("\n✅ Rename completed successfully")
        return 0


if __name__ == "__main__":
    sys.exit(main())
