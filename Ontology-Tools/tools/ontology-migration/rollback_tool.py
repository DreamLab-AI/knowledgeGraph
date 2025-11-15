#!/usr/bin/env python3
"""
Rollback Tool - Rollback migration if it fails

This script:
1. Reads migration_map.json
2. Reverses all file renames (new → old)
3. Restores original ontology blocks from backup
4. Restores original wiki-links from backup
5. Verifies rollback success
"""

import json
import shutil
import sys
from pathlib import Path
from typing import Dict
from datetime import datetime
from tqdm import tqdm

# Configuration
GRAPH_DIR = Path("/home/user/logseq/mainKnowledgeGraph")
PAGES_DIR = GRAPH_DIR / "pages"
MAPPING_FILE = Path("/home/user/logseq/scripts/ontology-migration/migration_map.json")
BACKUP_DIR = Path("/home/user/logseq/scripts/ontology-migration/backups")
LOGS_DIR = Path("/home/user/logseq/scripts/ontology-migration/logs")


def load_mapping() -> Dict:
    """Load migration mapping from JSON file."""
    if not MAPPING_FILE.exists():
        print(f"❌ Error: Mapping file not found: {MAPPING_FILE}", file=sys.stderr)
        sys.exit(1)

    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def find_backup_dir() -> Path:
    """Find the most recent backup directory."""
    if not BACKUP_DIR.exists():
        print(f"❌ Error: Backup directory not found: {BACKUP_DIR}", file=sys.stderr)
        sys.exit(1)

    # Find most recent backup
    backups = sorted(BACKUP_DIR.glob("backup_*"))
    if not backups:
        print(f"❌ Error: No backups found in: {BACKUP_DIR}", file=sys.stderr)
        sys.exit(1)

    return backups[-1]


def reverse_rename(mapping_data: Dict) -> Dict:
    """
    Reverse file renames (new filename → old filename).

    Returns:
        Statistics about the rollback
    """
    mappings = mapping_data["mappings"]

    success_count = 0
    error_count = 0
    errors = []

    print(f"Reversing {len(mappings)} file renames...")

    for mapping in tqdm(mappings, desc="Reversing renames"):
        old_filename = mapping["old_filename"]
        new_filename = mapping["new_filename"]

        old_path = PAGES_DIR / old_filename
        new_path = PAGES_DIR / new_filename

        # Check if new file exists
        if not new_path.exists():
            # Maybe it was never renamed, or already rolled back
            if old_path.exists():
                success_count += 1  # Already in old state
                continue
            else:
                errors.append({
                    "old_filename": old_filename,
                    "new_filename": new_filename,
                    "error": "Neither old nor new file exists"
                })
                error_count += 1
                continue

        # Rename back
        try:
            new_path.rename(old_path)
            success_count += 1
        except Exception as e:
            errors.append({
                "old_filename": old_filename,
                "new_filename": new_filename,
                "error": str(e)
            })
            error_count += 1

    return {
        "total": len(mappings),
        "success": success_count,
        "errors": error_count,
        "error_details": errors
    }


def restore_from_backup(backup_dir: Path) -> Dict:
    """
    Restore all files from backup.

    Returns:
        Statistics about the restoration
    """
    backup_pages = backup_dir / "pages"
    if not backup_pages.exists():
        print(f"❌ Error: Backup pages directory not found: {backup_pages}", file=sys.stderr)
        return {
            "success": 0,
            "errors": 1,
            "error_details": [{"error": "Backup pages directory not found"}]
        }

    files = list(backup_pages.glob("*.md"))

    success_count = 0
    error_count = 0
    errors = []

    print(f"Restoring {len(files)} files from backup...")

    for backup_file in tqdm(files, desc="Restoring files"):
        target_file = PAGES_DIR / backup_file.name

        try:
            shutil.copy2(backup_file, target_file)
            success_count += 1
        except Exception as e:
            errors.append({
                "filename": backup_file.name,
                "error": str(e)
            })
            error_count += 1

    return {
        "total": len(files),
        "success": success_count,
        "errors": error_count,
        "error_details": errors
    }


def verify_rollback(mapping_data: Dict) -> Dict:
    """
    Verify that rollback was successful.

    Check that all old filenames exist.
    """
    mappings = mapping_data["mappings"]

    missing_files = []

    for mapping in tqdm(mappings, desc="Verifying rollback"):
        old_filename = mapping["old_filename"]
        old_path = PAGES_DIR / old_filename

        if not old_path.exists():
            missing_files.append(old_filename)

    return {
        "verification_passed": len(missing_files) == 0,
        "missing_files": missing_files
    }


def save_rollback_log(data: Dict) -> None:
    """Save rollback log."""
    log_file = LOGS_DIR / f"rollback_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    LOGS_DIR.mkdir(parents=True, exist_ok=True)

    with open(log_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\n📝 Rollback log saved: {log_file}")


def print_summary(rename_stats: Dict, restore_stats: Dict, verification: Dict) -> None:
    """Print rollback summary."""
    print("\n" + "="*70)
    print("ROLLBACK SUMMARY")
    print("="*70)

    print(f"\n📊 Rename Reversal:")
    print(f"   Total files:   {rename_stats['total']}")
    print(f"   Success:       {rename_stats['success']}")
    print(f"   Errors:        {rename_stats['errors']}")

    if rename_stats['error_details']:
        print(f"\n   Errors:")
        for error in rename_stats['error_details'][:5]:
            print(f"      {error['old_filename']}: {error['error']}")

    print(f"\n📊 Backup Restoration:")
    print(f"   Total files:   {restore_stats['total']}")
    print(f"   Success:       {restore_stats['success']}")
    print(f"   Errors:        {restore_stats['errors']}")

    if restore_stats['error_details']:
        print(f"\n   Errors:")
        for error in restore_stats['error_details'][:5]:
            print(f"      {error['filename']}: {error['error']}")

    print(f"\n🔍 Verification:")
    if verification["verification_passed"]:
        print("   ✅ All files restored successfully")
    else:
        print(f"   ❌ {len(verification['missing_files'])} files missing")
        for filename in verification['missing_files'][:5]:
            print(f"      {filename}")


def main():
    """Main execution."""
    print("🚀 Rollback Tool - Reverting migration...")

    # Confirm with user
    response = input("\n⚠️  This will reverse the migration. Continue? [y/N]: ")
    if response.lower() != 'y':
        print("Rollback cancelled.")
        return 0

    # Load mapping
    mapping_data = load_mapping()
    print(f"✅ Loaded mapping with {len(mapping_data['mappings'])} entries")

    # Find backup
    backup_dir = find_backup_dir()
    print(f"✅ Using backup: {backup_dir}")

    # Reverse renames
    rename_stats = reverse_rename(mapping_data)

    # Restore from backup
    restore_stats = restore_from_backup(backup_dir)

    # Verify rollback
    verification = verify_rollback(mapping_data)

    # Save log
    rollback_data = {
        "timestamp": datetime.now().isoformat(),
        "backup_used": str(backup_dir),
        "rename_stats": rename_stats,
        "restore_stats": restore_stats,
        "verification": verification
    }
    save_rollback_log(rollback_data)

    # Print summary
    print_summary(rename_stats, restore_stats, verification)

    # Exit with appropriate code
    if verification["verification_passed"]:
        print("\n✅ Rollback completed successfully")
        return 0
    else:
        print("\n❌ Rollback completed with issues")
        return 1


if __name__ == "__main__":
    sys.exit(main())
