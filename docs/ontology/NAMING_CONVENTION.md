# Logseq Ontology Naming Convention

**Version**: 2.0
**Status**: Proposed
**Last Updated**: 2025-11-12

## Overview

This document defines the standardized naming convention for Logseq ontology files, designed to improve human readability, discoverability, and maintainability while preserving all technical metadata in structured OntologyBlocks.

## Design Principles

### 1. Human-First Design
- **Principle**: Filenames should be immediately understandable to humans
- **Rationale**: Enhances navigation, search, and collaboration
- **Implementation**: Use natural language with proper capitalization

### 2. Metadata Belongs in OntologyBlock
- **Principle**: Technical identifiers (domain prefixes, IDs) live in the OntologyBlock
- **Rationale**: Separates human interface from machine interface
- **Implementation**: All technical metadata in YAML/EDN properties

### 3. Consistency and Uniqueness
- **Principle**: Each concept has exactly one canonical filename
- **Rationale**: Prevents duplicates and confusion
- **Implementation**: Preferred terms become filenames

### 4. Length Constraints
- **Principle**: Filenames should be concise but descriptive
- **Rationale**: Filesystem limits and readability
- **Implementation**: Maximum 100 characters, use abbreviations when necessary

## Naming Rules

### Rule 1: Use Clean, Human-Readable Names

**Format**: `{Preferred Term}.md`

**Examples**:
- ✅ `Algorithmic Accountability.md`
- ✅ `AI Alignment.md`
- ✅ `Service Robot.md`
- ✅ `Virtual Reality.md`

**Guidelines**:
- Use title case (capitalize first letter of major words)
- Use spaces between words (not hyphens or underscores)
- Use the official preferred term from the ontology
- Keep abbreviations if they are more recognizable (e.g., "AI" not "Artificial Intelligence")

### Rule 2: Handle Long Names

For terms exceeding 100 characters:

**Strategy 1: Use official abbreviations**
- ✅ `GDPR Compliance.md` (not "General Data Protection Regulation Compliance")
- ✅ `AI Impact Assessment.md` (not "Artificial Intelligence Impact Assessment")

**Strategy 2: Use common short forms**
- ✅ `3D Scene Exchange Protocol.md` (abbreviate numbers and technical terms)
- ✅ `ML Model Interpretability.md` (use ML not Machine Learning)

**Strategy 3: Drop redundant words**
- ✅ `Fairness Metrics.md` (not "Algorithmic Fairness Metrics for AI Systems")
- Add full name in OntologyBlock definition

### Rule 3: Handle Special Cases

**Acronyms and Initialisms**:
- Preserve well-known acronyms in all caps: `API.md`, `REST API.md`
- Use standard capitalization for mixed terms: `OAuth 2.0.md`

**Numbers and Versions**:
- Include numbers naturally: `6G Network Slice.md`, `IPv6 Protocol.md`
- Include version numbers if part of the term: `HTTP 2.0.md`

**Possessives and Punctuation**:
- Avoid possessives: Use `AI Ethics` not `AI's Ethics`
- Avoid special characters except spaces, hyphens, and periods
- Exception: Ampersands are allowed in official terms: `Research & Development.md`

### Rule 4: Avoid Domain Prefixes in Filenames

**Old System** (deprecated):
```
AI-0376-algorithmic-accountability.md
rb-0006-service-robot.md
MV-0123-virtual-world.md
```

**New System**:
```
Algorithmic Accountability.md
Service Robot.md
Virtual World.md
```

**Rationale**:
- Domain prefixes (AI-, RB-, MV-) move to OntologyBlock `domain-prefix` field
- Sequence numbers move to OntologyBlock `sequence-number` field
- Technical IDs move to OntologyBlock `term-id` field

## OntologyBlock Structure

### Enhanced OntologyBlock Format

Every ontology file must include an enhanced OntologyBlock with:

```markdown
- ### OntologyBlock
  id:: {slug}-ontology
  collapsed:: true

  - ontology:: true
  - term-id:: {DOMAIN}-{NUMBER}
  - domain-prefix:: {DOMAIN}
  - sequence-number:: {NUMBER}
  - preferred-term:: {Human Readable Term}
  - source-domain:: {source}
  - classification:: {Hierarchical/Path/Classification}
  - status:: {draft|complete|review}
  - public-access:: {true|false}
  - filename-history:: ["{old-name-1.md}", "{old-name-2.md}"]
  - definition:: {Comprehensive definition text}
```

### Field Descriptions

#### Core Identification
- **id**: Unique Logseq block identifier (kebab-case + "-ontology")
- **ontology**: Boolean flag indicating this is an ontology entry
- **term-id**: Technical identifier in format `{DOMAIN}-{NUMBER}` (e.g., `AI-0376`)
- **preferred-term**: Official human-readable name (matches filename minus .md)

#### New Migration Fields
- **domain-prefix**: Extracted domain code (e.g., `AI`, `RB`, `MV`, `BC`)
- **sequence-number**: Numeric sequence (e.g., `0376`, `0006`)
- **classification**: Hierarchical categorization (e.g., `AI/Ethics/Accountability`)
- **filename-history**: JSON array tracking all previous filenames for this term

#### Metadata Fields
- **source-domain**: Origin ontology (e.g., `metaverse`, `robotics`, `ai-grounded`)
- **status**: Development status (`draft`, `complete`, `review`, `deprecated`)
- **public-access**: Boolean indicating if this term is publicly accessible
- **definition**: Comprehensive definition of the term

### Example: Before and After Migration

**Before** (`AI-0376-algorithmic-accountability.md`):
```markdown
- ### OntologyBlock
  id:: algorithmic-accountability-ontology
  collapsed:: true
  - ontology:: true
  - term-id:: AI-0376
  - preferred-term:: Algorithmic Accountability
  - source-domain:: ai-grounded
  - status:: complete
  - public-access:: true
  - definition:: Algorithmic Accountability is a responsibility framework...
```

**After** (`Algorithmic Accountability.md`):
```markdown
- ### OntologyBlock
  id:: algorithmic-accountability-ontology
  collapsed:: true

  - ontology:: true
  - term-id:: AI-0376
  - domain-prefix:: AI
  - sequence-number:: 0376
  - preferred-term:: Algorithmic Accountability
  - source-domain:: ai-grounded
  - classification:: AI/Ethics/Accountability
  - status:: complete
  - public-access:: true
  - filename-history:: ["AI-0376-algorithmic-accountability.md"]
  - definition:: Algorithmic Accountability is a responsibility framework...
```

## Migration Guidelines

### For Files with Domain-Prefix-ID-Name Pattern

**Step 1**: Extract components
```
AI-0376-algorithmic-accountability.md
↓
Domain: AI
Number: 0376
Term: algorithmic accountability
```

**Step 2**: Generate clean filename
```
Algorithmic Accountability.md
```

**Step 3**: Update OntologyBlock
- Add `domain-prefix:: AI`
- Add `sequence-number:: 0376`
- Add `classification::` based on domain taxonomy
- Add `filename-history:: ["AI-0376-algorithmic-accountability.md"]`

**Step 4**: Rename file
```bash
git mv "AI-0376-algorithmic-accountability.md" "Algorithmic Accountability.md"
```

### For Files with Clean Names

**If already following convention**:
- ✅ No filename change needed
- Update OntologyBlock to add new fields if missing
- Add `filename-history:: []` (empty array)

**If minor adjustments needed**:
- Correct capitalization
- Remove redundant words
- Add to `filename-history`

## Domain Classification Taxonomy

Suggested hierarchical classifications:

### AI Domain
- `AI/Ethics/Accountability`
- `AI/Ethics/Fairness`
- `AI/Safety/Alignment`
- `AI/Governance/Framework`
- `AI/Technical/Model`

### Robotics Domain
- `Robotics/Types/Service`
- `Robotics/Types/Industrial`
- `Robotics/Kinematics/Forward`
- `Robotics/Control/Autonomous`

### Metaverse Domain
- `Metaverse/Virtual/World`
- `Metaverse/Avatar/Representation`
- `Metaverse/Protocol/Interoperability`

### Blockchain/Crypto Domain
- `Blockchain/Consensus/Proof`
- `Blockchain/Protocol/Layer2`
- `Blockchain/Security/Cryptography`

## Validation Checklist

Before finalizing a filename:

- [ ] Filename uses title case with spaces
- [ ] Filename matches `preferred-term` in OntologyBlock
- [ ] Filename is under 100 characters
- [ ] No domain prefix in filename (moved to OntologyBlock)
- [ ] OntologyBlock includes `domain-prefix` field
- [ ] OntologyBlock includes `sequence-number` field
- [ ] OntologyBlock includes `classification` field
- [ ] OntologyBlock includes `filename-history` field
- [ ] Filename is unique across entire knowledge graph
- [ ] No special characters except spaces, hyphens, periods

## Implementation Tools

### Automated Validation

Use the provided Python script:
```bash
python /home/user/logseq/scripts/ontology-migration/validate_naming.py
```

### Bulk Rename Script

Use the migration script:
```bash
python /home/user/logseq/scripts/ontology-migration/bulk_rename.py \
  --input migration_mapping.json \
  --dry-run  # Test first
```

### OntologyBlock Updater

Update OntologyBlocks with new fields:
```bash
python /home/user/logseq/scripts/ontology-migration/update_ontology_blocks.py
```

## Examples Reference

### Before Migration
```
AI-0376-algorithmic-accountability.md
AI-0377-fairness-metrics.md
AI-0268-ai-alignment.md
rb-0006-service-robot.md
rb-0007-collaborative-robot.md
BC-0045-proof-of-work.md
```

### After Migration
```
Algorithmic Accountability.md
Fairness Metrics.md
AI Alignment.md
Service Robot.md
Collaborative Robot.md
Proof of Work.md
```

## References

- ISO 25964: Thesauri and interoperability with other vocabularies
- W3C SKOS (Simple Knowledge Organization System)
- Logseq documentation: https://docs.logseq.com/
- Dublin Core Metadata Initiative

## Change Log

### Version 2.0 (2025-11-12)
- Complete redesign to human-readable naming
- Added enhanced OntologyBlock structure
- Added migration guidelines
- Added classification taxonomy

### Version 1.0 (Previous)
- Domain-prefix-ID-name pattern
- Basic OntologyBlock structure
