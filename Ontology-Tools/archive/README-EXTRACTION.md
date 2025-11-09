# Ontology Block Extraction Tool

## Overview

This tool extracts structured ontology metadata from all Logseq markdown pages in the knowledge graph.

## Quick Start

```bash
cd /mnt/mldata/githubs/logseq
python3 Ontology-Tools/scripts/extract-ontology-blocks.py
```

## Output

**File**: `Ontology-Tools/outputs/ontology-blocks-extracted.yaml` (1.4 MB)

## Extraction Results

### Summary Statistics

- **Total files scanned**: 1,001 markdown files
- **Ontologies extracted**: 1,000 (99.9% success rate)
- **Output format**: YAML

### Format Analysis

The tool detected **two different ontology block formats**:

1. **Structured Format** (175 files, 17.5%)
   - Has organized sections: `**Identification**`, `**Definition**`, `**Semantic Classification**`
   - Example: `AI Agent System.md`, `AI-0376-algorithmic-accountability.md`
   - More detailed and standardized

2. **Flat Format** (825 files, 82.5%)
   - Simple key-value pairs without section headers
   - Example: `3D Scene Exchange Protocol (SXP).md`, `AI Alignment.md`
   - Less structured but still parseable

### Other Statistics

- **OWL Axioms**: 983 files (98.3%) contain formal OWL semantics
- **Mixed Format**: 0 files (good - no conflicting formats)
- **Incomplete**: 0 files (all structured files have complete sections)

### Term-ID Breakdown

| Prefix | Count | Domain |
|--------|-------|--------|
| AI     | 315   | AI/Machine Learning |
| BC     | 121   | Blockchain |
| mv     | 201   | Metaverse |
| RB     | 105   | Robotics |
| DT     | 3     | Digital Twin |
| other  | 255   | Various/Legacy |

## Output Structure

Each extracted ontology entry contains:

```yaml
- filename: example.md
  identification:           # For structured format
    ontology: true
    term_id: AI-0001
    preferred_term: Example Term
    source_domain: ai-grounded
    status: complete
    version: 1.0.0
    last_updated: '2025-11-07'
  definition:
    definition: "Detailed definition..."
    maturity: mature
    source: "Authoritative source"
    authority_score: '0.95'
  semantic_classification:
    owl_class: ai:ExampleClass
    owl_physicality: VirtualEntity
    owl_role: Process
    belongsToDomain: DomainName
    implementedInLayer: LayerName
  properties:               # For flat format
    metaverseOntology: true
    term_id: '20001'
    preferred_term: Example
    ...
  format_notes:
    - 'STRUCTURED_FORMAT: Has organized sections...'
    - 'HAS_OWL_AXIOMS: Contains OWL formal semantics'
  raw_block: "First 500 chars of raw ontology block..."
  block_id: example-ontology
```

## Format Notes Field

The `format_notes` array provides diagnostic information:

- **STRUCTURED_FORMAT**: File uses the organized section format
- **FLAT_FORMAT**: File uses simple key-value format
- **HAS_OWL_AXIOMS**: File contains formal OWL/Clojure semantics
- **WARNING: Mixed format**: File has both formats (indicates inconsistency)
- **INCOMPLETE: Missing [section]**: Structured format missing expected section

## Key Findings

### Format Inconsistency Issue

The tool identifies a **format inconsistency** across the knowledge graph:

- **82.5% use flat format** (older style)
- **17.5% use structured format** (newer, more complete style)

This suggests the knowledge graph evolved over time, with newer entries using the structured format.

### Recommendations

1. **Standardize on structured format**: The structured format provides better organization and completeness
2. **Migration path**: Use this extraction to identify flat-format files for conversion
3. **Validation**: All files successfully parsed - no broken ontology blocks

## Script Details

**Location**: `Ontology-Tools/scripts/extract-ontology-blocks.py`

**Features**:
- Parses both structured and flat formats
- Extracts identification, definition, semantic classification
- Captures relationships and properties
- Detects format variations
- Preserves raw block content (first 500 chars)
- Generates comprehensive statistics

**Dependencies**:
- Python 3.6+
- PyYAML library

## Use Cases

1. **Format Auditing**: Identify which files need format migration
2. **Bulk Analysis**: Analyze all ontology metadata without parsing 1,000 files individually
3. **Schema Validation**: Check for missing required fields
4. **Cross-Reference**: Find relationships between ontology terms
5. **Documentation**: Generate comprehensive ontology documentation

## Next Steps

Potential follow-up tools:

1. **Format Converter**: Migrate flat-format files to structured format
2. **Validation Tool**: Check for missing required fields, broken references
3. **Relationship Mapper**: Build graph of ontology relationships
4. **Documentation Generator**: Create readable documentation from metadata
