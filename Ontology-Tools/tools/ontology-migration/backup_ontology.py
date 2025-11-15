#!/usr/bin/env python3
"""
Backup Ontology - Create complete backup before migration

This script:
1. Creates timestamped backup directory
2. Copies all pages
3. Copies all journals
4. Creates backup manifest
5. Verifies backup integrity
"""

import shutil
import json
import hashlib
import sys
from pathlib import Path
from typing import Dict, List
from datetime import datetime
from tqdm import tqdm

# Configuration
GRAPH_DIR = Path("/home/user/logseq/mainKnowledgeGraph")
PAGES_DIR = GRAPH_DIR / "pages"
JOURNALS_DIR = GRAPH_DIR / "journals"
BACKUP_BASE = Path("/home/user/logseq/scripts/ontology-migration/backups")


def create_backup_dir() -> Path:
    """Create timestamped backup directory."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_dir = BACKUP_BASE / f"backup_{timestamp}"
    backup_dir.mkdir(parents=True, exist_ok=True)
    return backup_dir


def calculate_checksum(file_path: Path) -> str:
    """Calculate SHA-256 checksum of file."""
    sha256 = hashlib.sha256()
    with open(file_path, 'rb') as f:
        for chunk in iter(lambda: f.read(8192), b''):
            sha256.update(chunk)
    return sha256.hexdigest()


def backup_directory(source_dir: Path, backup_dir: Path, name: str) -> Dict:
    """
    Backup a directory with all its files.

    Returns:
        Statistics about the backup
    """
    if not source_dir.exists():
        return {
            "source": str(source_dir),
            "files_backed_up": 0,
            "total_size": 0,
            "checksums": {},
            "skipped": f"{name} directory does not exist"
        }

    target_dir = backup_dir / name
    target_dir.mkdir(parents=True, exist_ok=True)

    files = list(source_dir.glob("*.md"))
    checksums = {}
    total_size = 0

    print(f"Backing up {len(files)} files from {name}...")

    for file_path in tqdm(files, desc=f"Backing up {name}"):
        target_path = target_dir / file_path.name

        # Copy file
        shutil.copy2(file_path, target_path)

        # Calculate checksum
        checksum = calculate_checksum(file_path)
        checksums[file_path.name] = checksum

        # Track size
        total_size += file_path.stat().st_size

    return {
        "source": str(source_dir),
        "target": str(target_dir),
        "files_backed_up": len(files),
        "total_size": total_size,
        "checksums": checksums
    }


def create_manifest(backup_dir: Path, pages_stats: Dict, journals_stats: Dict) -> Dict:
    """Create backup manifest with metadata."""
    manifest = {
        "timestamp": datetime.now().isoformat(),
        "backup_dir": str(backup_dir),
        "graph_dir": str(GRAPH_DIR),
        "pages": pages_stats,
        "journals": journals_stats,
        "total_files": pages_stats["files_backed_up"] + journals_stats.get("files_backed_up", 0),
        "total_size_bytes": pages_stats["total_size"] + journals_stats.get("total_size", 0)
    }

    manifest_path = backup_dir / "manifest.json"
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    return manifest


def verify_backup(backup_dir: Path, manifest: Dict) -> Dict:
    """Verify backup integrity by checking file counts and checksums."""
    issues = []

    # Verify pages
    pages_backup = backup_dir / "pages"
    if pages_backup.exists():
        actual_files = len(list(pages_backup.glob("*.md")))
        expected_files = manifest["pages"]["files_backed_up"]

        if actual_files != expected_files:
            issues.append(f"Pages count mismatch: expected {expected_files}, found {actual_files}")
    else:
        issues.append("Pages backup directory not found")

    # Verify journals
    if manifest["journals"].get("files_backed_up", 0) > 0:
        journals_backup = backup_dir / "journals"
        if journals_backup.exists():
            actual_files = len(list(journals_backup.glob("*.md")))
            expected_files = manifest["journals"]["files_backed_up"]

            if actual_files != expected_files:
                issues.append(f"Journals count mismatch: expected {expected_files}, found {actual_files}")
        else:
            issues.append("Journals backup directory not found")

    return {
        "verification_passed": len(issues) == 0,
        "issues": issues
    }


def format_size(size_bytes: int) -> str:
    """Format size in human-readable format."""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.2f} TB"


def print_summary(manifest: Dict, verification: Dict) -> None:
    """Print backup summary."""
    print("\n" + "="*70)
    print("BACKUP SUMMARY")
    print("="*70)

    print(f"\n📊 Backup Details:")
    print(f"   Timestamp:    {manifest['timestamp']}")
    print(f"   Location:     {manifest['backup_dir']}")
    print(f"   Total files:  {manifest['total_files']}")
    print(f"   Total size:   {format_size(manifest['total_size_bytes'])}")

    print(f"\n📁 Pages:")
    print(f"   Files:        {manifest['pages']['files_backed_up']}")
    print(f"   Size:         {format_size(manifest['pages']['total_size'])}")

    if manifest['journals'].get('files_backed_up', 0) > 0:
        print(f"\n📅 Journals:")
        print(f"   Files:        {manifest['journals']['files_backed_up']}")
        print(f"   Size:         {format_size(manifest['journals']['total_size'])}")

    print(f"\n🔍 Verification:")
    if verification["verification_passed"]:
        print("   ✅ Backup verified successfully")
    else:
        print("   ❌ Verification issues found:")
        for issue in verification["issues"]:
            print(f"      - {issue}")


def main():
    """Main execution."""
    print("🚀 Backup Ontology - Creating backup...")
    print(f"📁 Graph directory: {GRAPH_DIR}")

    # Create backup directory
    backup_dir = create_backup_dir()
    print(f"✅ Created backup directory: {backup_dir}")

    # Backup pages
    pages_stats = backup_directory(PAGES_DIR, backup_dir, "pages")

    # Backup journals
    journals_stats = backup_directory(JOURNALS_DIR, backup_dir, "journals")

    # Create manifest
    manifest = create_manifest(backup_dir, pages_stats, journals_stats)
    print(f"✅ Created backup manifest")

    # Verify backup
    verification = verify_backup(backup_dir, manifest)

    # Print summary
    print_summary(manifest, verification)

    # Exit with appropriate code
    if verification["verification_passed"]:
        print("\n✅ Backup completed successfully")
        return 0
    else:
        print("\n❌ Backup completed with issues")
        return 1


if __name__ == "__main__":
    sys.exit(main())
