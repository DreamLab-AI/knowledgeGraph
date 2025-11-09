# Logseq Knowledge Graph Project Overview

## Repository Purpose

This is a **Logseq knowledge graph instance**, not the Logseq application source code. It's a personal knowledge management system containing organized content about AI, blockchain, machine learning, and related technologies, published to narrativegoldmine.com.

## Architecture

### Core Components

1. **Knowledge Base** (`mainKnowledgeGraph/`)
   - 2,519+ markdown pages with ontology-based organization
   - 1.2 GB total size (1.0 GB assets)
   - Prefix codes: `AI-####`, `BC-####`, `MV-####`, `RB-####`, `DT-####`
   - Daily journals with timestamped notes
   - Visual whiteboards (.edn format)

2. **Ontology Tools** (`Ontology-Tools/`)
   - Converters for TTL, WebVOWL JSON, CSV, Cypher, JSON-LD
   - Validation and quality assurance tools
   - Python virtual environment with dependencies

3. **Publishing Pipeline** (`.github/workflows/`)
   - Automated Logseq SPA generation
   - WebVOWL ontology visualization
   - GitHub Pages deployment to narrativegoldmine.com
   - Mobile sync workflows

4. **WebVOWL Integration**
   - Interactive ontology visualization at /ontology
   - Live TTL generation from markdown headers
   - Auto-loading mechanism for seamless UX

## Ontology System

### Domain Ontologies

- **AI (AI-####)**: 500+ pages covering ethics, governance, safety, development
- **Blockchain (BC-####)**: 505 pages from fundamentals to enterprise applications
- **Metaverse (MV-####)**: Virtual worlds, digital economics, social platforms
- **Robotics (RB-####)**: Automation, human-robot interaction, industrial robotics
- **Disruptive Tech (DT-####)**: Cross-cutting technologies and frameworks

### OntologyBlock Structure

Each ontology page contains:
- **Identification**: term-id, preferred-term, status
- **Definition**: definition, maturity level, category
- **Semantic Classification**: owl:class namespace assignment
- **OWL Axioms**: Clojure-style functional syntax
  ```clojure
  (Declaration (Class :Cryptocurrency))
  (SubClassOf :Cryptocurrency :EconomicMechanism)
  (SubClassOf :Cryptocurrency (ObjectSomeValuesFrom :enables :DecentralisedExchange))
  ```

## Technical Stack

- **Format**: Markdown (.md) for content, EDN (Clojure) for configuration
- **Customization**: JavaScript runtime (custom.js, 272 lines), CSS styling
- **Publishing**: Logseq SPA Publisher → GitHub Pages
- **Domain**: narrativegoldmine.com
- **Ontology**: OWL/RDF with Turtle serialization
- **Visualization**: WebVOWL (JavaScript-based interactive graph)

## Publishing Workflow

### Automated Pipeline (publish.yml)

```bash
# 1. Generate TTL from markdown headers
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output narrativegoldmine-ontology.ttl

# 2. Convert TTL to WebVOWL JSON
python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input narrativegoldmine-ontology.ttl \
  --output narrativegoldmine-ontology.json

# 3. Publish Logseq SPA
logseq/publish-spa --graph-directory mainKnowledgeGraph --output-directory www

# 4. Configure for GitHub Pages
touch www/.nojekyll
sed -i 's/#\/all-pages/#\/page\/introduction/g' www/index.html
echo 'narrativegoldmine.com' > www/CNAME

# 5. Deploy to external repository
# Target: flossverse/knowledgeGraph (gh-pages branch)
```

### Mobile Sync Workflows

- **sync-to-mobile.yml**: Main → Mobile branch synchronization
- **sync-from-mobile.yml**: Mobile → Main branch merge
- Bidirectional conflict resolution
- Authenticated with `ACCESS_TOKEN` secret

## Custom Code Execution

The knowledge graph includes an **executable code runtime** via the "Kit" system in `custom.js`:

### Supported Languages
- **JavaScript**: Native async execution
- **Python**: Pyodide v0.23.4 (WebAssembly)
- **R**: WebR (WebAssembly)

### Built-in Kits
- `evalpage` - Run all code blocks on current page
- `evalparent` - Run parent block's code
- `runpage` - Execute code from named page
- `togglemsg` - Toggle status messages

### Usage
```markdown
{{renderer :kit, evalpage}}
{{renderer :kit, runpage, DataAnalysis}}
```

## Configuration

### Key Settings (config.edn)

```clojure
:preferred-workflow :todo               ; TODO/DOING/DONE states
:file/name-format :triple-lowbar        ; Slashes → ___ in filenames
:start-of-week 6                        ; Sunday as first day
:graph/forcesettings {:link-dist 180 :charge-strength -1000}
```

### Integrations
- Zotero integration for research papers
- Flashcards, whiteboards, journals enabled
- Block timestamps, search accent removal
- Linked reference collapse threshold: 50

## Ontology Tools

### Converters (6 essential tools)

1. **webvowl_header_only_converter.py** - Markdown → TTL (production)
2. **ttl_to_webvowl_json.py** - TTL → WebVOWL JSON
3. **extract_owl_from_markdown.py** - OWL block extraction
4. **convert-to-csv.py** - TTL → CSV tabular format
5. **convert-to-cypher.py** - TTL → Neo4j Cypher
6. **convert-to-jsonld.py** - TTL → JSON-LD

### Recent Audit (November 2025)

Consolidated from 17 converters to 6 essential tools. Key improvements:
- Single prefix block at top (not repeated per class)
- Valid PascalCase URIs without invalid characters
- Proper uncommented `rdfs:subClassOf` syntax
- Unique URIs (one class per concept)
- Formal property definitions before use
- Consistent namespace strategy based on domain codes

### Local Testing Validated

**Current Production Converter:**
- 34,865 triples generated from 2,519 pages
- 1,008 OWL classes
- 273 object properties
- 43 data properties
- Valid Turtle syntax (rdflib parses successfully)
- Prefixes declared once at top ✅
- Proper rdfs:subClassOf axioms ✅

**WebVOWL JSON Conversion:**
- 1,008 classes
- 141 properties/propertyAttributes
- Correct FOAF-compatible structure
- Property: `id` and `type` only
- PropertyAttribute: `domain`, `range`, `attributes`

## Git Workflow

**Current Branch**: main (default for all work)

**Submodules**:
- ResearchPapers - Linked research paper repository

**Publishing Target**:
- Source: This repo (logseq)
- Deploy: flossverse/knowledgeGraph (gh-pages)
- Domain: narrativegoldmine.com

## Recent Development

### Recent Commits
- Fix mobile sync workflows
- Add bidirectional sync capabilities
- Merge enriched blockchain ontology pages
- Fix critical converter issues (prefixes, axioms, URIs)
- Comprehensive converter audit and consolidation

### Active Work
- Local validation of conversion pipeline
- URI sanitization improvements
- WebVOWL deployment verification
- Best practice converter implementation

## Documentation

- **CLAUDE.md**: Project-specific AI assistant instructions
- **README.md**: Repository introduction
- **CONVERTER_AUDIT_AND_PLAN.md**: Detailed converter analysis and roadmap
- Research reports:
  - blockchain-property-registries-research-report.md
  - blockchain-voting-comprehensive-report.md

## Future Roadmap

1. **Immediate**: Complete converter URI sanitization
2. **Short-term**: Validate WebVOWL deployment, update workflows
3. **Medium-term**: Expand ontology coverage, improve cross-references
4. **Long-term**: Public ontology API, collaborative editing features
