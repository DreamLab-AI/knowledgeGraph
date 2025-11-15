# Tools Directory

This directory contains utilities, scripts, and tools for ontology development, validation, and conversion.

## Directory Structure

```
tools/
├── conversion/          # Format conversion tools
├── converters/          # Legacy and specialized converters
├── generators/          # Ontology generation and enhancement tools
├── utilities/           # General-purpose utility scripts
├── validation/          # Multi-level validation framework
└── validators/          # Legacy and specialized validators
```

## Conversion Tools

### conversion/
- `convert_owl_to_ttl.py` - Convert OWL/XML to Turtle format

### converters/
- `convert-to-csv.py` - Export ontology to CSV format
- `convert-to-cypher.py` - Export to Neo4j Cypher queries
- `convert-to-jsonld.py` - Convert to JSON-LD format
- `convert-to-skos.py` - Transform to SKOS vocabulary
- `convert-to-sql.py` - Export to SQL schema
- `convert-to-turtle.py` - Convert to Turtle format
- `simple-format-converter.py` - Multi-format converter

## Generation Tools

### generators/
- `generate_unified_ontology.py` - Create unified meta-ontology
- `generate_combined_ontology.py` - Combine domain ontologies
- `generate-foundational-terms.py` - Generate base vocabulary
- `complete_crypto_ontology.py` - Cryptocurrency ontology generator
- `aggregate-owl-files.py` - Merge multiple OWL files
- `enhance_p1_owl.py` - Enhance ontology with metadata

## Validation Tools

### validation/
Multi-level validation framework:
- `level1_syntactic_validator.py` - Syntax and structure validation
- `level2_semantic_validator.py` - Semantic consistency checks
- `level3_quality_metrics.py` - Quality and completeness metrics
- `level4_competency_validator.py` - Competency question validation
- `level5_statistics_reporter.py` - Comprehensive statistics
- `run_all_validations.py` - Execute full validation suite

### validators/
- `validate-owl-syntax.py` - OWL syntax validation
- `verify-ontology.py` - Ontology verification
- `check-and-validate.py` - Quick validation check
- `watch-and-validate.sh` - Continuous validation monitoring

## Utility Scripts

### utilities/
- `ontology-validator.py` - General ontology validator
- `ofn_to_owl_xml.py` - Convert OWL Functional Syntax to XML
- `comprehensive_owl_to_turtle.py` - Advanced OWL to Turtle converter
- `watch-and-validate.sh` - File watcher with auto-validation

## Usage Examples

### Convert OWL to Turtle
```bash
python tools/conversion/convert_owl_to_ttl.py input.owl output.ttl
```

### Run Full Validation
```bash
python tools/validation/run_all_validations.py \
  --input ontologies/unified/disruptive-technologies-meta-ontology-v1.0.0.ttl \
  --output validation-report.json
```

### Generate Unified Ontology
```bash
python tools/generators/generate_unified_ontology.py \
  --ai ontologies/artificial-intelligence/schemas/ai-v1.0.0.ttl \
  --blockchain ontologies/blockchain/schemas/blockchain-v1.0.0.ttl \
  --metaverse ontologies/metaverse/schemas/metaverse-v1.0.0.ttl \
  --robotics ontologies/robotics/schemas/robotics-v1.0.0.ttl \
  --output ontologies/unified/disruptive-technologies-meta-ontology-v1.0.0.ttl
```

### Convert to JSON-LD
```bash
python tools/converters/convert-to-jsonld.py \
  --input ontologies/metaverse/schemas/metaverse-v1.0.0.ttl \
  --output metaverse-v1.0.0.jsonld
```

## Requirements

Most tools require:
- Python 3.8+
- rdflib
- owlrl
- pyshacl

Install dependencies:
```bash
pip install rdflib owlrl pyshacl
```

## Validation Levels

The validation framework uses a 5-level approach:

1. **Syntactic** - RDF/OWL syntax correctness
2. **Semantic** - Logical consistency, no contradictions
3. **Quality** - Completeness, documentation, standards
4. **Competency** - Domain coverage via test queries
5. **Statistics** - Metrics and reporting

## Contributing

When adding new tools:
1. Place in appropriate subdirectory
2. Include docstrings and help text
3. Add usage examples to this README
4. Update requirements if adding dependencies

## License

See LICENSE file in the repository root.
