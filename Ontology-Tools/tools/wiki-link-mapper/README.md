# Wiki-Link Mapping Tool

Comprehensive tool for replacing [[wiki-style links]] in markdown files with canonical ontology term references.

## Purpose

This tool maps old or variant wiki-link references to the canonical ontology terms defined in the Logseq/OWL hybrid system. When you have markdown files with references like `[[platform layer]]`, `[[bitcoin]]`, or `[[AI agents]]`, this tool ensures they point to the canonical ontology terms like `[[Platform Layer]]`, `[[Bitcoin]]`, or `[[AI Agent System]]`.

## Files in This Directory

### Core Files

- **`extract_ontology_terms.py`** - Python script that scans `logseq/pages/` and extracts canonical ontology terms, generating the mapping tables
- **`wiki-link-mapping.csv`** - CSV mapping table (Old Term → Canonical Term) with 883 mappings
- **`wiki-link-mapping.json`** - Detailed JSON mapping with metadata (175 canonical terms)
- **`replace-wiki-links.zsh`** - ZSH script that performs the actual wiki-link replacements
- **`README.md`** - This file

### Generated Mappings

The mapping tables include:
- **175 canonical ontology terms** extracted from OntologyBlocks
- **883 total mappings** including common variations:
  - Lowercase variations (`bitcoin` → `Bitcoin`)
  - Hyphenated variations (`AI-Agent-System` → `AI Agent System`)
  - Singular/plural variations (`Token` → `Tokens`, `Avatar` → `Avatars`)
  - Title case variations
  - Filename variations

## Quick Start

### 1. Update Mapping Tables (Optional)

If you've added new ontology concepts since the last run:

```bash
cd /path/to/Metaverse-Ontology
python3 tools/wiki-link-mapper/extract_ontology_terms.py
```

This regenerates:
- `wiki-link-mapping.csv`
- `wiki-link-mapping.json`

### 2. Preview Changes (Dry Run)

See what would be replaced **without modifying files**:

```bash
cd /path/to/your/markdown/files
/path/to/Metaverse-Ontology/tools/wiki-link-mapper/replace-wiki-links.zsh --dry-run .
```

### 3. Apply Changes with Backups

Replace wiki-links and create `.bak` backup files:

```bash
cd /path/to/your/markdown/files
/path/to/Metaverse-Ontology/tools/wiki-link-mapper/replace-wiki-links.zsh --backup .
```

### 4. Apply Changes (No Backups)

Replace wiki-links without backups (**use with caution**):

```bash
cd /path/to/your/markdown/files
/path/to/Metaverse-Ontology/tools/wiki-link-mapper/replace-wiki-links.zsh .
```

## Usage Examples

### Example 1: Dry Run on Current Directory

```bash
./replace-wiki-links.zsh --dry-run .
```

**Output:**
```
Building replacement rules from mapping file...
Generated 883 replacement rules
Found 45 markdown files to process
DRY RUN MODE - No files will be modified
Would modify: ./my-notes.md
Would modify: ./research.md

================================
Replacement Summary
================================
Files processed:  45
Files modified:   2
Rules applied:    883

This was a DRY RUN - no files were actually modified.
Run without --dry-run to apply changes.
```

### Example 2: Apply Changes with Backups and Verbose Logging

```bash
./replace-wiki-links.zsh --backup --verbose ~/Documents/research-notes
```

**Output:**
```
Building replacement rules from mapping file...
Generated 883 replacement rules
Found 12 markdown files to process
Backup mode enabled - .bak files will be created
[INFO] Processing: /Users/you/Documents/research-notes/ai-notes.md
Created backup: /Users/you/Documents/research-notes/ai-notes.md.bak
Modified: /Users/you/Documents/research-notes/ai-notes.md
[INFO] Processing: /Users/you/Documents/research-notes/blockchain.md
No changes needed: /Users/you/Documents/research-notes/blockchain.md

================================
Replacement Summary
================================
Files processed:  12
Files modified:   1
Rules applied:    883

Wiki-link replacement complete!
Backup files (.bak) have been created.
```

### Example 3: Process Specific Subdirectory

```bash
./replace-wiki-links.zsh --dry-run ~/my-vault/daily-notes
```

## Script Options

### `--dry-run`
Preview changes without modifying files. Shows which files would be modified.

**Use case:** Always run this first to verify replacements before applying.

### `--backup`
Create `.bak` backup files before modifying originals.

**Use case:** Recommended for irreplaceable files or first-time runs.

### `--verbose`
Show detailed progress for each file processed.

**Use case:** Debugging or monitoring large batch operations.

### `--help`
Display usage information.

## Mapping Table Structure

### CSV Format (`wiki-link-mapping.csv`)

```csv
Old Term,Canonical Term,Term ID,Domain,Filename,Public Access
Bitcoin,Bitcoin,BC-0500,blockchain,Bitcoin,true
bitcoin,Bitcoin,BC-0500,blockchain,Bitcoin,true
Bitcoins,Bitcoin,BC-0500,blockchain,Bitcoin,true
Value Transfer,Value Transfer,DT-0001,cross-domain,Value Transfer,false
value transfer,Value Transfer,DT-0001,cross-domain,Value Transfer,false
```

**Columns:**
- **Old Term** - The variant wiki-link text to find
- **Canonical Term** - The canonical ontology term to replace it with
- **Term ID** - The ontology term identifier (e.g., BC-0500, AI-0600)
- **Domain** - The ontology domain (ai-grounded, blockchain, metaverse, robotics, cross-domain)
- **Filename** - The source markdown filename in `logseq/pages/`
- **Public Access** - Whether this ontology term is marked for public access (`true` or `false`)

### JSON Format (`wiki-link-mapping.json`)

```json
{
  "terms": [
    {
      "canonical_term": "Bitcoin",
      "term_id": "BC-0500",
      "source_domain": "blockchain",
      "public_access": true,
      "filename": "Bitcoin",
      "variations": ["Bitcoin", "bitcoin", "Bitcoins"]
    }
  ],
  "mapping": {
    "bitcoin": "Bitcoin",
    "value transfer": "Value Transfer",
    "ai agent": "AI Agent System"
  },
  "stats": {
    "total_canonical_terms": 175,
    "total_mappings": 883
  }
}
```

**Note:** The `public_access` field indicates whether the ontology term is marked for public accessibility in its OntologyBlock metadata (`public-access:: true`).

## Domain Coverage

The mapping covers all four ontology domains:

| Domain | Namespace | Example Terms |
|--------|-----------|---------------|
| **AI-Grounded** | `ai:` | AI Agent System, Neural 3D Generation, Transformer |
| **Blockchain** | `bc:` | Bitcoin, Smart Contract, Token, Consensus |
| **Metaverse** | `mv:` | Avatar, Digital Twin, Virtual World, Game Engine |
| **Robotics** | `rb:` | Robot, Manipulator, Sensor, Actuator |
| **Cross-Domain** | `dt:` | Value Transfer, Money, Technology Adoption |

## How It Works

### Step 1: Extraction (`extract_ontology_terms.py`)

1. Scans all markdown files in `logseq/pages/`
2. Identifies files with `ontology:: true` in OntologyBlock
3. Extracts `preferred-term::` as canonical name
4. Generates common variations:
   - Case variations (lowercase, title case)
   - Hyphenation/dehyphenation
   - Singular/plural forms
   - Filename mapping
5. Saves mappings to CSV and JSON

### Step 2: Replacement (`replace-wiki-links.zsh`)

1. Reads mapping CSV file
2. Generates sed replacement rules for each mapping
3. Finds all `.md` files in target directory
4. For each file:
   - Applies sed rules to replace `[[old term]]` with `[[Canonical Term]]`
   - Creates backup if `--backup` flag set
   - Reports modifications
5. Displays summary statistics

### Replacement Logic

```
[[bitcoin]]              → [[Bitcoin]]
[[value transfer]]       → [[Value Transfer]]
[[AI-Agent-System]]      → [[AI Agent System]]
[[digital twin]]         → [[Digital Twin]]
[[proof of work]]        → [[Proof of Work]]
[[Neural 3d generation]] → [[Neural 3D Generation]]
```

## Public Access Metadata

The ontology includes a `public-access` metadata field in the **Identification** section of each OntologyBlock to indicate whether a concept is intended for public visibility.

### OntologyBlock Structure

```markdown
- ### OntologyBlock
  id:: bitcoin-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: BC-0500
    - preferred-term:: Bitcoin
    - source-domain:: blockchain
    - status:: complete
    - public-access:: true    ← Public accessibility flag
    - version:: 1.0.0
    - last-updated:: 2025-11-05
```

### Purpose

The `public-access` field enables:
- **Content Management**: Mark concepts suitable for public documentation
- **Export Filtering**: Selectively export public-facing ontology subsets
- **Access Control**: Support visibility policies in applications
- **Documentation Generation**: Auto-generate public-facing documentation from flagged concepts

### Current Public Concepts

As of the latest mapping, the following concepts are marked `public-access:: true`:
- **Bitcoin** (BC-0500) - First decentralized cryptocurrency
- **Blockchain** (BC-0001) - Distributed ledger technology
- **Money** (DT-0002) - Cross-domain value transfer concept

### Adding Public Access to Concepts

Use the provided script to add public access metadata:

```bash
# Add public-access field to mapped concepts
python3 tools/wiki-link-mapper/add_public_access_field.py

# Dry-run mode (preview changes)
python3 tools/wiki-link-mapper/add_public_access_field.py --dry-run
```

The script:
1. Reads `public-files-mapping.json` to identify concepts marked as public
2. Adds `public-access:: true` to the Identification section
3. Defaults to `public-access:: false` if not specified

### Extraction and Mapping

The public-access field is automatically extracted and included in mapping tables:
- CSV column: **Public Access** (`true` or `false`)
- JSON field: `"public_access": true/false`

Run `extract_ontology_terms.py` to regenerate mappings after updating public access flags.

## Safety Features

1. **Dry Run Mode** - Preview changes before applying
2. **Backup Creation** - Optional `.bak` files for rollback
3. **Diff Detection** - Only modifies files that actually change
4. **Error Handling** - Script exits on error (set -e)
5. **Validation** - Checks for mapping file and target directory existence

## Troubleshooting

### Issue: "Mapping file not found"

**Cause:** `wiki-link-mapping.csv` doesn't exist

**Solution:**
```bash
cd /path/to/Metaverse-Ontology
python3 tools/wiki-link-mapper/extract_ontology_terms.py
```

### Issue: "No markdown files found"

**Cause:** Target directory has no `.md` files

**Solution:** Verify you're running the script in the correct directory containing markdown files.

### Issue: Unwanted replacements

**Cause:** Overly aggressive fuzzy matching

**Solution:**
1. Run with `--dry-run` to preview
2. Edit `wiki-link-mapping.csv` to remove problematic mappings
3. Rerun script

### Issue: Some links not replaced

**Cause:** Term not in mapping table (no matching OntologyBlock)

**Solution:**
1. Check if term exists in `logseq/pages/`
2. Verify file has `ontology:: true` and `preferred-term::`
3. Regenerate mapping: `python3 extract_ontology_terms.py`
4. Rerun replacement script

### Issue: Script permission denied

**Cause:** Script not executable

**Solution:**
```bash
chmod +x tools/wiki-link-mapper/replace-wiki-links.zsh
```

## Advanced Usage

### Regenerating Mappings After Ontology Updates

After adding new ontology concepts to `logseq/pages/`:

```bash
# 1. Regenerate mapping tables
cd /path/to/Metaverse-Ontology
python3 tools/wiki-link-mapper/extract_ontology_terms.py

# 2. Verify new mappings
grep "Your New Concept" tools/wiki-link-mapper/wiki-link-mapping.csv

# 3. Apply to your markdown files
cd /path/to/your/notes
/path/to/Metaverse-Ontology/tools/wiki-link-mapper/replace-wiki-links.zsh --dry-run .
```

### Custom Mapping Additions

You can manually add custom mappings to `wiki-link-mapping.csv`:

```csv
Old Term,Canonical Term,Term ID,Domain,Filename
my custom term,My Custom Concept,AI-XXXX,ai-grounded,My Custom Concept
legacy name,Modern Name,BC-YYYY,blockchain,Modern Name
```

**Note:** Manual additions will be overwritten when you regenerate mappings. For permanent custom mappings, add them to the `generate_common_variations()` function in `extract_ontology_terms.py`.

### Batch Processing Multiple Directories

```bash
#!/bin/bash
MAPPER="/path/to/Metaverse-Ontology/tools/wiki-link-mapper/replace-wiki-links.zsh"

for dir in ~/vault/notes ~/Documents/research ~/projects/ontology-docs; do
    echo "Processing $dir..."
    $MAPPER --backup --verbose "$dir"
done
```

## Statistics

Current mapping coverage (as of generation):

- **Canonical Terms:** 175
- **Total Mappings:** 883
- **Domains Covered:** 5 (AI, Blockchain, Metaverse, Robotics, Cross-Domain)
- **Variation Types:** Lowercase, Title Case, Hyphenated, Singular/Plural, Filenames

## Integration with Logseq

This tool is designed to work seamlessly with Logseq's wiki-link format:

- Preserves `[[` and `]]` brackets
- Maintains case-sensitive canonical names
- Respects Logseq's linking semantics
- Compatible with bidirectional links

## Limitations

1. **Context-Insensitive:** Replaces all occurrences of `[[old term]]` regardless of context
2. **Exact Bracket Matching:** Only replaces properly formatted `[[term]]` (not `[term]` or `[[term`)
3. **No Link Following:** Doesn't validate that target files exist
4. **Single-Pass:** Doesn't chain replacements (A→B→C requires two runs)

## Future Enhancements

Potential improvements (not yet implemented):

- [ ] Interactive mode for ambiguous replacements
- [ ] HTML report of changes made
- [ ] Git integration for automatic commit after changes
- [ ] Support for other markdown link formats (e.g., `[text](link)`)
- [ ] Fuzzy matching for near-miss terms
- [ ] Undo functionality to reverse replacements

## Support

For issues or questions:

1. Check the troubleshooting section above
2. Review the generated `wiki-link-mapping.csv` for your specific terms
3. Run with `--dry-run --verbose` to diagnose problems
4. Consult the main ontology documentation in `/docs/`

## Related Documentation

- [`/docs/CANONICAL-FORMAT-GUIDE.md`](../../docs/CANONICAL-FORMAT-GUIDE.md) - Ontology format specification
- [`/docs/LOGSEQ-OWL-SYSTEM.md`](../../docs/LOGSEQ-OWL-SYSTEM.md) - Hybrid system philosophy
- [`/task.md`](../../task.md) - Master refactoring directive
- [`/README.md`](../../README.md) - Project overview

## License

Part of the Disruptive Technologies Ontology project.

---

**Last Updated:** 2025-11-05
**Version:** 1.0.0
**Maintainer:** Metaverse Ontology Project
