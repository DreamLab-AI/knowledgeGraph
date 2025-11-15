#!/usr/bin/env python3
"""
Reference Updater - Update all wiki-link references across the graph

This script:
1. Loads migration_map.json
2. Scans all pages for [[Old Name]] wiki-links
3. Scans journals directory for references
4. Replaces [[Old Name]] with [[New Name]]
5. Tracks all updates in update_log.json
6. Validates no broken links remain
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Set, Tuple
from datetime import datetime
from tqdm import tqdm

# Configuration
GRAPH_DIR = Path("/home/user/logseq/mainKnowledgeGraph")
PAGES_DIR = GRAPH_DIR / "pages"
JOURNALS_DIR = GRAPH_DIR / "journals"
MAPPING_FILE = Path("/home/user/logseq/scripts/ontology-migration/migration_map.json")
OUTPUT_FILE = Path("/home/user/logseq/scripts/ontology-migration/update_log.json")
LOGS_DIR = Path("/home/user/logseq/scripts/ontology-migration/logs")

# Regex pattern for wiki-links
WIKILINK_PATTERN = re.compile(r'\[\[([^\]]+)\]\]')


def load_mapping() -> Dict:
    """Load migration mapping from JSON file."""
    if not MAPPING_FILE.exists():
        print(f"❌ Error: Mapping file not found: {MAPPING_FILE}", file=sys.stderr)
        print("   Run filename_mapper.py first!", file=sys.stderr)
        sys.exit(1)

    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def build_reference_map(mapping_data: Dict) -> Dict[str, str]:
    """
    Build a map of old filename (without .md) → new filename (without .md).

    Wiki-links use page names without .md extension:
        [[AI-0377-fairness-metrics]] → [[Fairness Metrics]]
    """
    ref_map = {}

    for mapping in mapping_data["mappings"]:
        old_name = mapping["old_filename"].replace('.md', '')
        new_name = mapping["new_filename"].replace('.md', '')
        ref_map[old_name] = new_name

    return ref_map


def find_wikilinks(content: str) -> Set[str]:
    """Extract all wiki-link page names from content."""
    return set(WIKILINK_PATTERN.findall(content))


def update_references(content: str, ref_map: Dict[str, str]) -> Tuple[str, List[Dict]]:
    """
    Update all wiki-links in content.

    Returns:
        (updated_content, changes_made)
    """
    changes = []

    def replace_link(match):
        old_ref = match.group(1)

        if old_ref in ref_map:
            new_ref = ref_map[old_ref]
            changes.append({
                "old": old_ref,
                "new": new_ref
            })
            return f"[[{new_ref}]]"

        return match.group(0)

    updated_content = WIKILINK_PATTERN.sub(replace_link, content)

    return updated_content, changes


def process_file(file_path: Path, ref_map: Dict[str, str]) -> Dict:
    """
    Process a single file and update references.

    Returns:
        Statistics about changes made
    """
    try:
        content = file_path.read_text(encoding='utf-8')
        updated_content, changes = update_references(content, ref_map)

        if changes:
            # Write back updated content
            file_path.write_text(updated_content, encoding='utf-8')

            return {
                "filename": str(file_path.relative_to(GRAPH_DIR)),
                "changes_count": len(changes),
                "changes": changes,
                "status": "updated"
            }
        else:
            return {
                "filename": str(file_path.relative_to(GRAPH_DIR)),
                "changes_count": 0,
                "status": "no_changes"
            }

    except Exception as e:
        return {
            "filename": str(file_path.relative_to(GRAPH_DIR)),
            "status": "error",
            "error": str(e)
        }


def process_all_files(ref_map: Dict[str, str]) -> Dict:
    """
    Process all pages and journals.

    Returns:
        Complete update statistics
    """
    # Collect all markdown files
    all_files = []
    all_files.extend(PAGES_DIR.glob("*.md"))
    if JOURNALS_DIR.exists():
        all_files.extend(JOURNALS_DIR.glob("*.md"))

    print(f"Found {len(all_files)} files to scan")

    results = []
    stats = {
        "total_files": len(all_files),
        "files_updated": 0,
        "files_unchanged": 0,
        "files_errored": 0,
        "total_references_updated": 0
    }

    # Process each file
    for file_path in tqdm(all_files, desc="Updating references"):
        result = process_file(file_path, ref_map)
        results.append(result)

        if result["status"] == "updated":
            stats["files_updated"] += 1
            stats["total_references_updated"] += result["changes_count"]
        elif result["status"] == "no_changes":
            stats["files_unchanged"] += 1
        elif result["status"] == "error":
            stats["files_errored"] += 1

    return {
        "stats": stats,
        "results": results,
        "timestamp": datetime.now().isoformat()
    }


def validate_references(ref_map: Dict[str, str]) -> Dict:
    """
    Validate that all references were updated correctly.

    Check for any remaining old-style references that should have been updated.
    """
    all_files = list(PAGES_DIR.glob("*.md"))
    if JOURNALS_DIR.exists():
        all_files.extend(JOURNALS_DIR.glob("*.md"))

    orphaned_refs = []

    for file_path in tqdm(all_files, desc="Validating references"):
        try:
            content = file_path.read_text(encoding='utf-8')
            wikilinks = find_wikilinks(content)

            for link in wikilinks:
                if link in ref_map:
                    # This should have been updated!
                    orphaned_refs.append({
                        "file": str(file_path.relative_to(GRAPH_DIR)),
                        "old_reference": link,
                        "should_be": ref_map[link]
                    })
        except Exception as e:
            print(f"Error validating {file_path}: {e}", file=sys.stderr)

    return {
        "validation_passed": len(orphaned_refs) == 0,
        "orphaned_references": orphaned_refs
    }


def save_log(update_data: Dict) -> None:
    """Save update log to JSON file."""
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(update_data, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Update log saved to: {OUTPUT_FILE}")


def print_summary(update_data: Dict, validation: Dict) -> None:
    """Print summary of reference updates."""
    stats = update_data["stats"]

    print("\n" + "="*70)
    print("REFERENCE UPDATE SUMMARY")
    print("="*70)

    print(f"\n📊 Statistics:")
    print(f"   Total files scanned:       {stats['total_files']}")
    print(f"   Files updated:             {stats['files_updated']}")
    print(f"   Files unchanged:           {stats['files_unchanged']}")
    print(f"   Files with errors:         {stats['files_errored']}")
    print(f"   Total references updated:  {stats['total_references_updated']}")

    # Show some example updates
    updated_files = [r for r in update_data["results"] if r["status"] == "updated"]
    if updated_files:
        print(f"\n📝 Example updates:")
        for result in updated_files[:5]:
            print(f"   {result['filename']}: {result['changes_count']} changes")
            for change in result['changes'][:2]:
                print(f"      [[{change['old']}]] → [[{change['new']}]]")

    # Validation results
    print(f"\n🔍 Validation:")
    if validation["validation_passed"]:
        print("   ✅ All references updated successfully")
    else:
        orphaned = validation["orphaned_references"]
        print(f"   ⚠️  Found {len(orphaned)} orphaned references")
        for ref in orphaned[:5]:
            print(f"      {ref['file']}: [[{ref['old_reference']}]] → [[{ref['should_be']}]]")

    # Errors
    errors = [r for r in update_data["results"] if r["status"] == "error"]
    if errors:
        print(f"\n❌ ERRORS ({len(errors)}):")
        for error in errors[:10]:
            print(f"   {error['filename']}: {error.get('error', 'Unknown error')}")

        log_file = LOGS_DIR / "reference_update_errors.json"
        LOGS_DIR.mkdir(parents=True, exist_ok=True)
        with open(log_file, 'w', encoding='utf-8') as f:
            json.dump(errors, f, indent=2, ensure_ascii=False)
        print(f"\n📝 Error log: {log_file}")


def main():
    """Main execution."""
    print("🚀 Reference Updater - Updating wiki-links...")

    # Load mapping
    mapping_data = load_mapping()
    print(f"✅ Loaded mapping with {len(mapping_data['mappings'])} entries")

    # Build reference map
    ref_map = build_reference_map(mapping_data)
    print(f"✅ Built reference map with {len(ref_map)} entries")

    # Update all references
    update_data = process_all_files(ref_map)

    # Validate
    validation = validate_references(ref_map)
    update_data["validation"] = validation

    # Save log
    save_log(update_data)

    # Print summary
    print_summary(update_data, validation)

    # Exit with appropriate code
    if update_data["stats"]["files_errored"] > 0 or not validation["validation_passed"]:
        print("\n⚠️  Reference update completed with issues")
        return 1
    else:
        print("\n✅ Reference update completed successfully")
        return 0


if __name__ == "__main__":
    sys.exit(main())
