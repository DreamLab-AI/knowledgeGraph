# Ontology Tools

Conversion tools for transforming Logseq markdown knowledge graph into OWL/RDF ontologies and various export formats.

## Overview

This toolkit extracts OWL axioms from Logseq markdown OntologyBlock headers and converts them to multiple formats for semantic web applications, visualization, and data integration.

## Local Validation Status

**Last Tested**: November 9, 2025

### Current Production Pipeline

```bash
# Generate TTL from 2,519 markdown pages
webvowl_header_only_converter.py → 34,865 triples (1.5 MB)

# Convert to WebVOWL JSON
ttl_to_webvowl_json.py → 1,008 classes, 141 properties (522 KB)
```

**Validation**:
- ✅ Valid Turtle syntax (rdflib parses successfully)
- ✅ Prefixes declared once at top
- ✅ Proper uncommented rdfs:subClassOf axioms
- ✅ 1,008 OWL classes extracted
- ✅ 273 object properties
- ✅ 43 data properties
- ✅ WebVOWL JSON matches FOAF structure exactly

## Essential Converters (6 Tools)

### 1. Markdown → Turtle (TTL)

**webvowl_header_only_converter.py**

Extracts OntologyBlock headers from Logseq markdown and generates valid OWL 2 DL Turtle.

```bash
source venv/bin/activate

python3 tools/converters/webvowl_header_only_converter.py \
  --pages-dir ../mainKnowledgeGraph/pages \
  --output narrativegoldmine-ontology.ttl
```

**Features**:
- Extracts term-id, preferred-term, definition, maturity, category
- Parses Clojure-style OWL functional syntax
- Generates proper rdfs:subClassOf axioms (uncommented)
- Maps code prefixes to namespaces (AI, BC, MV, RB, DT)
- Single prefix block at top
- Valid OWL/RDF structure

**Output**: 34,865 triples, 1,008 classes, 316 properties

### 2. TTL → WebVOWL JSON

**ttl_to_webvowl_json.py**

Converts Turtle ontology to WebVOWL visualization format.

```bash
python3 tools/converters/ttl_to_webvowl_json.py \
  --input narrativegoldmine-ontology.ttl \
  --output narrativegoldmine-ontology.json
```

**Features**:
- FOAF-compatible structure
- Property array: `id` and `type` only
- PropertyAttribute array: `domain`, `range`, `attributes`
- Separate entry for each SubClassOf relationship
- Ready for WebVOWL interactive visualization

**Output**: 1,008 classes, 141 properties, 141 propertyAttributes

### 3. OWL Block Extraction

**extract_owl_from_markdown.py**

Utility to extract just the OWL axiom blocks from markdown files.

```bash
python3 tools/converters/extract_owl_from_markdown.py \
  --input-dir ../mainKnowledgeGraph/pages \
  --output-dir owl-blocks/
```

**Use Cases**:
- Debugging axiom parsing
- Generating OWL-only documentation
- Quality assurance checks

### 4. TTL → CSV

**convert-to-csv.py**

Exports ontology as tabular data for spreadsheet analysis.

```bash
python3 tools/converters/convert-to-csv.py \
  --input narrativegoldmine-ontology.ttl \
  --output ontology.csv
```

**Output Columns**:
- Subject
- Predicate
- Object
- Subject Type
- Object Type

### 5. TTL → Neo4j Cypher

**convert-to-cypher.py**

Generates Neo4j graph database import statements.

```bash
python3 tools/converters/convert-to-cypher.py \
  --input narrativegoldmine-ontology.ttl \
  --output ontology.cypher
```

**Creates**:
- Node creation statements
- Relationship creation statements
- Property assignments
- Ready for `cypher-shell` import

### 6. TTL → JSON-LD

**convert-to-jsonld.py**

Converts to JSON-LD for JavaScript/web applications.

```bash
python3 tools/converters/convert-to-jsonld.py \
  --input narrativegoldmine-ontology.ttl \
  --output ontology.jsonld
```

**Features**:
- Standard JSON-LD format
- Embedded @context
- Compatible with schema.org integrations

## Setup

### Python Environment

```bash
cd Ontology-Tools

# Create virtual environment
python3 -m venv venv

# Activate
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install dependencies
pip install rdflib==7.0.0
```

### Dependencies

- **Python 3.8+**
- **rdflib 7.0.0** - RDF parsing and generation
- No other dependencies required

## OntologyBlock Format

The converters extract from this Logseq markdown structure:

```markdown
- ### OntologyBlock
  - **Identification**
    - term-id:: BC-0097
    - preferred-term:: Cryptocurrency
    - status:: stable
  - **Definition**
    - definition:: A digital currency using cryptography...
    - maturity:: mature
    - category:: [[Digital Asset]]
  - **Semantic Classification**
    - owl:class:: bc:Cryptocurrency
  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :Cryptocurrency))
      (SubClassOf :Cryptocurrency :EconomicMechanism)
      (SubClassOf :Cryptocurrency :BlockchainEntity)
      (SubClassOf :Cryptocurrency
        (ObjectSomeValuesFrom :enables :DecentralisedExchange))
      ```
```

### Clojure-Style OWL Syntax

The axioms use Clojure-style functional syntax (not standard OWL):

```clojure
(Declaration (Class :ClassName))
(SubClassOf :Child :Parent)
(SubClassOf :Class (ObjectSomeValuesFrom :property :Target))
(SubClassOf :Class (ObjectAllValuesFrom :property :Target))
```

## Namespace Mapping

Converters map code prefixes to appropriate namespaces:

| Prefix | Namespace | Description |
|--------|-----------|-------------|
| AI-#### | `http://disruption.org/ontology/artificial-intelligence#` | AI concepts |
| BC-#### | `http://disruption.org/ontology/blockchain#` | Blockchain |
| MV-#### | `http://disruption.org/ontology/metaverse#` | Metaverse |
| RB-#### | `http://disruption.org/ontology/robotics#` | Robotics |
| DT-#### | `http://disruption.org/ontology/disruptive-tech#` | Cross-cutting |

## Quality Metrics

### November 2025 Audit

**Issues Identified and Fixed**:
1. ✅ Prefix declarations now once at top (not repeated per class)
2. ✅ rdfs:subClassOf axioms uncommented with proper syntax
3. ✅ Valid Turtle structure (parses in rdflib)
4. ⏳ URI sanitization improvements in progress

**Current Issues**:
- URIs contain embedded codes (e.g., `ai:0390AiImpactAssessment` should be `ai:AiImpactAssessment`)
- Inconsistent casing in some URIs

### Consolidation History

**Previous State**: 17 converter tools with significant overlap

**Current State**: 6 essential tools with clear purposes

**Archived**:
- Multiple experimental TTL converters (10 files)
- Duplicate format converters
- Simple format converter (superseded by specific tools)

See [docs/CONVERTER_AUDIT_AND_PLAN.md](../docs/CONVERTER_AUDIT_AND_PLAN.md) for detailed audit.

## Integration with Publishing Pipeline

The converters are integrated into the GitHub Actions publish workflow:

```yaml
# .github/workflows/publish.yml
- name: Generate TTL and WebVOWL JSON
  run: |
    python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
      --pages-dir mainKnowledgeGraph/pages \
      --output narrativegoldmine-ontology.ttl

    python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
      --input narrativegoldmine-ontology.ttl \
      --output narrativegoldmine-ontology.json
```

**Output Destination**: `www/data/` directory for WebVOWL visualization

**Auto-load**: JavaScript at `/ontology` automatically loads the generated JSON

## Future Improvements

### Planned (Near-term)

1. **URI Sanitization**
   - Remove embedded codes from URIs
   - Standardize to PascalCase
   - Store term-id as dcterms:identifier

2. **Property Definitions**
   - Formally declare all properties before use
   - Add domain and range restrictions
   - Include property characteristics (symmetric, transitive, etc.)

3. **Namespace Strategy**
   - Document clear namespace assignment rules
   - Handle multi-domain concepts
   - Support custom namespace definitions

### Proposed (Long-term)

4. **SKOS Export** - Hierarchical concept schemes
5. **SQL Schema Export** - Relational database DDL
6. **GraphQL Schema** - API type definitions
7. **Validation Suite** - Automated quality checks
8. **Incremental Updates** - Only convert changed files

## Testing

### Local Validation

```bash
cd Ontology-Tools
source venv/bin/activate

# Generate TTL
python3 tools/converters/webvowl_header_only_converter.py \
  --pages-dir ../mainKnowledgeGraph/pages \
  --output /tmp/test.ttl

# Validate with rdflib
python3 << 'EOF'
from rdflib import Graph
g = Graph()
g.parse('/tmp/test.ttl', format='turtle')
print(f"✅ Valid Turtle: {len(g)} triples")
print(f"Classes: {len(list(g.subjects(RDF.type, OWL.Class)))}")
EOF

# Convert to WebVOWL JSON
python3 tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/test.ttl \
  --output /tmp/test.json

# Verify JSON structure
python3 << 'EOF'
import json
with open('/tmp/test.json') as f:
    d = json.load(f)
    print(f"Classes: {len(d['class'])}")
    print(f"Properties: {len(d['property'])}")
    print(f"PropertyAttributes: {len(d['propertyAttribute'])}")
EOF
```

### Expected Output

```
✅ Valid Turtle: 34865 triples
Classes: 1008
Properties: 273
Object Properties: 273
Data Properties: 43

Classes: 1008
Properties: 141
PropertyAttributes: 141
```

## Documentation

- **[Converter Audit](../docs/CONVERTER_AUDIT_AND_PLAN.md)** - Detailed audit and consolidation plan
- **[Project Overview](../docs/PROJECT_OVERVIEW.md)** - Complete system architecture
- **Best Practice Guide** - See `best_practice_ttl_converter.py` docstring

## License

MIT License - see [LICENSE](../LICENSE)

## Contact

Issues: [GitHub Issues](https://github.com/flossverse/logseq/issues)

---

*Last Updated: November 2025*
