# Ontology Migration Tools

Complete migration toolkit for renaming 268 prefixed ontology files in Logseq knowledge graph from `PREFIX-NNNN-name.md` to human-readable `Preferred Term.md` format.

## Overview

This toolkit migrates ontology files while:
- ✅ Preserving all data and relationships
- ✅ Enriching metadata with domain information
- ✅ Updating all wiki-link references
- ✅ Validating before and after migration
- ✅ Providing complete rollback capability

## Directory Structure

```
ontology-migration/
├── README.md                    # This file
├── migration_runner.sh          # Master orchestration script
├── filename_mapper.py           # Generate old→new filename mapping
├── ontology_enricher.py         # Enrich ontology blocks with metadata
├── reference_updater.py         # Update all wiki-link references
├── migration_validator.py       # Pre/post validation
├── rollback_tool.py             # Rollback migration if needed
├── backup_ontology.py           # Create backups
├── rename_files.py              # Perform file renaming
├── backups/                     # Timestamped backups
├── logs/                        # Execution logs
└── reports/                     # Validation reports
```

## Quick Start

### 1. Run Complete Migration

The simplest way to migrate:

```bash
cd /home/user/logseq/scripts/ontology-migration
chmod +x migration_runner.sh
./migration_runner.sh
```

This runs all steps automatically:
1. ✅ Creates backup
2. ✅ Validates current state
3. ✅ Generates filename mapping
4. ✅ Renames files
5. ✅ Enriches ontology blocks
6. ✅ Updates all references
7. ✅ Validates new state
8. ✅ Tests publisher

### 2. Run Individual Steps

For more control, run steps individually:

```bash
# Step 1: Backup
python3 backup_ontology.py

# Step 2: Pre-validation
python3 migration_validator.py --phase=pre

# Step 3: Generate mapping
python3 filename_mapper.py

# Step 4: Rename files
python3 rename_files.py

# Step 5: Enrich ontology blocks
python3 ontology_enricher.py

# Step 6: Update references
python3 reference_updater.py

# Step 7: Post-validation
python3 migration_validator.py --phase=post
```

### 3. Rollback if Needed

If something goes wrong:

```bash
python3 rollback_tool.py
```

This reverts all changes using the most recent backup.

## What Gets Migrated

### Filename Changes

**Before:**
```
AI-0377-fairness-metrics.md
BC-0001-blockchain.md
```

**After:**
```
Fairness Metrics.md
Blockchain.md
```

### Ontology Block Enrichment

**Before:**
```yaml
- ### OntologyBlock
  - **Identification**
    - ontology:: true
    - term-id:: AI-0377
    - preferred-term:: Fairness Metrics
```

**After:**
```yaml
- ### OntologyBlock
  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0377
    - filename-history:: ["AI-0377-fairness-metrics.md"]
    - ontology:: true
    - term-id:: AI-0377
    - preferred-term:: Fairness Metrics
```

### Reference Updates

**Before:**
```markdown
See [[AI-0377-fairness-metrics]] for details.
Related: [[BC-0001-blockchain]]
```

**After:**
```markdown
See [[Fairness Metrics]] for details.
Related: [[Blockchain]]
```

## Tool Details

### filename_mapper.py

Generates `migration_map.json` with old→new filename mappings.

**Features:**
- Parses all prefixed files
- Extracts `preferred-term` from ontology blocks
- Handles filename conflicts
- Validates term-id consistency

**Output:** `migration_map.json`

### ontology_enricher.py

Enriches ontology blocks with domain metadata.

**Adds:**
- `domain-prefix:: AI` (extracted from filename)
- `sequence-number:: 0377` (extracted from filename)
- `filename-history:: ["AI-0377-fairness-metrics.md"]` (for tracking)

**Preserves:** All existing ontology data

### reference_updater.py

Updates all wiki-link references across the graph.

**Scans:**
- All pages (`pages/*.md`)
- All journals (`journals/*.md`)

**Updates:** `[[Old Name]]` → `[[New Name]]`

**Output:** `update_log.json` with all changes

### migration_validator.py

Comprehensive validation before and after migration.

**Checks:**
- ✅ No duplicate filenames
- ✅ term-id uniqueness
- ✅ Ontology block completeness
- ✅ No broken wiki-links
- ✅ All references resolve

**Usage:**
```bash
# Pre-migration validation
python3 migration_validator.py --phase=pre

# Post-migration validation
python3 migration_validator.py --phase=post
```

**Output:** JSON + Markdown reports in `reports/`

### backup_ontology.py

Creates timestamped backups with verification.

**Backs up:**
- All pages
- All journals
- Creates manifest with checksums

**Output:** `backups/backup_YYYYMMDD_HHMMSS/`

### rollback_tool.py

Complete rollback mechanism.

**Reverts:**
- File renames (new → old)
- Ontology block changes (from backup)
- Wiki-link references (from backup)

**Usage:**
```bash
python3 rollback_tool.py
```

### rename_files.py

Performs the actual file renaming.

**Features:**
- Uses `migration_map.json`
- Handles conflicts gracefully
- Tracks all renames
- Verifies success

## Requirements

- **Python:** 3.11+
- **Packages:** `tqdm` (auto-installed by runner)
- **Disk Space:** ~100MB for backups

## Output Files

### Generated During Migration

- `migration_map.json` - Filename mappings
- `update_log.json` - Reference update log
- `backups/backup_*/` - Timestamped backups
- `logs/*.log` - Execution logs
- `reports/*.json` - Validation reports (JSON)
- `reports/*.md` - Validation reports (Markdown)

## Safety Features

### 1. Comprehensive Backups
- Full graph backup before any changes
- SHA-256 checksums for verification
- Timestamped for historical tracking

### 2. Validation Gates
- Pre-migration validation
- Post-migration validation
- Broken link detection
- Duplicate detection

### 3. Rollback Capability
- Complete rollback from backup
- Verification after rollback
- No data loss

### 4. Atomic Operations
- Each step is independent
- Failure at any step triggers rollback option
- Transaction-like guarantees

## Common Issues

### Issue: Conflicts Detected

**Problem:** Multiple files have same preferred-term

**Solution:**
1. Review `migration_map.json` conflicts section
2. Edit ontology blocks to make preferred-terms unique
3. Re-run `filename_mapper.py`

### Issue: Broken Links After Migration

**Problem:** Some wiki-links don't resolve

**Solution:**
1. Check `reports/validation_post_*.md`
2. These may be legitimate external references
3. Or references to non-ontology pages

### Issue: Publisher Fails

**Problem:** Publisher can't find files after migration

**Solution:**
1. Check publisher config for hardcoded paths
2. Update `config.public-pages` if needed
3. Re-run publisher test

## Performance

- **Filename Mapping:** ~10 seconds for 369 files
- **File Renaming:** ~5 seconds
- **Ontology Enrichment:** ~15 seconds
- **Reference Updates:** ~30 seconds (scans 1,491 files)
- **Validation:** ~20 seconds
- **Total Migration Time:** ~2-3 minutes

## Verification Checklist

After migration, verify:

- [ ] All files renamed correctly
- [ ] No duplicate filenames
- [ ] All ontology blocks enriched
- [ ] All wiki-links resolve
- [ ] No broken references
- [ ] Publisher builds successfully
- [ ] Publisher test passes
- [ ] Graph loads in Logseq

## Next Steps After Migration

1. **Test Logseq Graph**
   - Open graph in Logseq
   - Verify pages load correctly
   - Check wiki-links work

2. **Update Publisher Config**
   - Update any hardcoded page references
   - Test public-access filtering
   - Build and test publisher

3. **Git Commit**
   ```bash
   cd /home/user/logseq/mainKnowledgeGraph
   git add pages/
   git commit -m "Migrate ontology files to human-readable names"
   ```

4. **Clean Up**
   - Old backups can be archived
   - Keep most recent backup for safety

## Troubleshooting

### Migration Runner Fails

Check logs:
```bash
tail -f logs/migration_*.log
```

### Python Errors

Check Python version:
```bash
python3 --version
```

Should be 3.11+

### Permission Issues

Make scripts executable:
```bash
chmod +x *.py migration_runner.sh
```

## Support

For issues or questions:
1. Check validation reports in `reports/`
2. Review execution logs in `logs/`
3. Check `migration_map.json` for conflicts
4. Use rollback if needed

## License

MIT License - Part of Logseq Publisher Toolchain

---

**Last Updated:** 2025-11-12
**Version:** 1.0.0
**Status:** Production Ready
