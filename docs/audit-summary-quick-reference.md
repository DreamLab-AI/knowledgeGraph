# Domain Audit Quick Reference

## File Locations

- **Full Audit Report**: `/home/user/logseq/docs/systematic-domain-audit.md` (623 lines)
- **Robotics Exclusion List**: `/tmp/robotics-exclusion-list.txt` (106 files)
- **Blockchain Priority List**: `/tmp/blockchain-priority-list.txt` (87 files)
- **Complete Data**: `/tmp/domain-audit-data.jsonl` (283 entries)

## Quick Stats

- **Total Files Analyzed**: 283
- **Robotics Files (EXCLUDE)**: 106 (37.5%)
- **Blockchain Files (PROCESS)**: 87 (30.7%)
- **To Assess**: 90 (31.8%)

## Processing Order

1. **HIGH PRIORITY** (87 files): Pure blockchain files
2. **MEDIUM PRIORITY** (25 files): Blockchain + governance
3. **LOW PRIORITY** (8 files): Blockchain + infrastructure
4. **ASSESS** (8 files): Blockchain + AI/ML
5. **DEFER** (15 files): Pure AI/ML
6. **EXCLUDE** (106 files): Robotics domain

## Next Actions

1. Move robotics files to separate directory
2. Fix missing termID metadata fields
3. Begin processing pure blockchain files
4. Re-assess velocity after first batch

## Key Finding

**Collection-level misclassification** (wrong files in project), NOT content-level contamination (mixed topics in files).

Files are high quality and internally consistent. Solution: Segregate by domain first.
