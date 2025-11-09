# Logseq Knowledge Graph

A comprehensive knowledge management system covering AI, blockchain, machine learning, and related technologies, published to [narrativegoldmine.com](https://narrativegoldmine.com).

## Overview

This is a **Logseq knowledge graph instance** (not the Logseq application source code). It contains 2,519+ markdown pages with ontology-based organization, integrated executable code runtime, and automated publishing to GitHub Pages with interactive ontology visualization.

## Key Features

- **Ontology-Based Organization**: 505+ blockchain pages (BC-####), 500+ AI pages (AI-####), metaverse, robotics
- **Executable Code Runtime**: JavaScript, Python (Pyodide), and R (WebR) execution within knowledge graph
- **Automated Publishing**: GitHub Actions → Logseq SPA → narrativegoldmine.com
- **WebVOWL Visualization**: Interactive ontology graph at [narrativegoldmine.com/ontology](https://narrativegoldmine.com/ontology)
- **Mobile Sync**: Bidirectional sync workflows for mobile editing

## Structure

```
logseq/
├── mainKnowledgeGraph/          # Core knowledge base (1.2 GB)
│   ├── pages/                   # 2,519+ ontology pages
│   ├── journals/                # Daily notes
│   ├── assets/                  # Media files (1.0 GB)
│   ├── whiteboards/             # Visual diagrams
│   └── logseq/                  # Configuration
│       ├── config.edn           # Main config
│       ├── custom.js            # Code execution runtime
│       └── custom.css           # Styling
│
├── Ontology-Tools/              # Conversion tools
│   └── tools/converters/        # TTL, WebVOWL, CSV, Neo4j
│
├── .github/workflows/           # Automation
│   ├── publish.yml              # Main publishing workflow
│   ├── sync-to-mobile.yml       # Mobile sync (main → mobile)
│   └── sync-from-mobile.yml     # Mobile sync (mobile → main)
│
└── docs/                        # Documentation
    ├── PROJECT_OVERVIEW.md      # Complete project overview
    ├── CONVERTER_AUDIT_AND_PLAN.md
    ├── blockchain-property-registries-research-report.md
    └── blockchain-voting-comprehensive-report.md
```

## Quick Start

### Local Editing

1. Open the graph in Logseq:
   ```bash
   # Point Logseq to: /path/to/logseq/mainKnowledgeGraph
   ```

2. Edit pages using Logseq's outline editor

3. Commit and push to trigger auto-publish:
   ```bash
   git add mainKnowledgeGraph/
   git commit -m "Update content"
   git push  # Triggers GitHub Actions
   ```

### Ontology Conversion

Generate TTL and WebVOWL JSON locally:

```bash
cd Ontology-Tools

# Activate Python virtual environment
source venv/bin/activate

# Generate TTL from markdown headers
python3 tools/converters/webvowl_header_only_converter.py \
  --pages-dir ../mainKnowledgeGraph/pages \
  --output narrativegoldmine-ontology.ttl

# Convert to WebVOWL JSON
python3 tools/converters/ttl_to_webvowl_json.py \
  --input narrativegoldmine-ontology.ttl \
  --output narrativegoldmine-ontology.json
```

**Current Output**: 34,865 triples, 1,008 classes, 273 object properties

## Ontology System

### Domain Prefixes

- **AI-####**: AI topics (ethics, governance, safety, development)
- **BC-####**: Blockchain (BC-0001 to BC-0505)
- **MV-####**: Metaverse (virtual worlds, digital economics)
- **RB-####**: Robotics (automation, sensors, actuators)
- **DT-####**: Cross-cutting disruptive technologies

### OntologyBlock Structure

Each page contains:

```markdown
- ### OntologyBlock
  - **Identification**
    - term-id:: BC-0097
    - preferred-term:: Cryptocurrency
    - status:: stable
  - **Definition**
    - definition:: A digital currency operating on blockchain...
    - maturity:: mature
  - **Semantic Classification**
    - owl:class:: bc:Cryptocurrency
  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :Cryptocurrency))
      (SubClassOf :Cryptocurrency :EconomicMechanism)
      (SubClassOf :Cryptocurrency
        (ObjectSomeValuesFrom :enables :DecentralisedExchange))
      ```
```

## Publishing Workflow

### Automated Pipeline (publish.yml)

Triggered on every push to main:

1. **Generate TTL** from markdown headers
2. **Convert to WebVOWL JSON** for visualization
3. **Build Logseq SPA** with custom settings
4. **Deploy to GitHub Pages** (flossverse/knowledgeGraph repo)
5. **Serve at** narrativegoldmine.com

### WebVOWL Auto-Load

Visiting `/ontology` automatically loads the custom ontology:

- `webvowl-autoload.js` waits for WebVOWL initialization
- Fetches `narrativegoldmine-ontology.json`
- Simulates file upload via DataTransfer API
- Interactive graph loads with 1,008 classes

## Code Execution

The knowledge graph includes executable code runtime:

### Supported Languages

- **JavaScript**: Native async execution
- **Python**: Pyodide v0.23.4 (WebAssembly)
- **R**: WebR (WebAssembly)

### Usage

```markdown
{{renderer :kit, evalpage}}
```

Creates a button to run all code blocks on the page.

### Built-in Kits

- `evalpage` - Run all code on current page
- `evalparent` - Run parent block's code
- `runpage` - Execute code from named page
- `togglemsg` - Toggle status messages

## Configuration

### Key Settings (config.edn)

```clojure
:preferred-workflow :todo            ; TODO/DOING/DONE
:file/name-format :triple-lowbar     ; Slashes → ___
:start-of-week 6                     ; Sunday first
:graph/forcesettings {
  :link-dist 180
  :charge-strength -1000
}
```

### Integrations

- Zotero integration
- Flashcards, whiteboards, journals
- Block timestamps
- Search accent removal

## Documentation

- **[PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)** - Complete system overview
- **[CONVERTER_AUDIT_AND_PLAN.md](docs/CONVERTER_AUDIT_AND_PLAN.md)** - Tool consolidation plan
- **Research Reports**:
  - [Blockchain Property Registries](docs/blockchain-property-registries-research-report.md)
  - [Blockchain Voting Systems](docs/blockchain-voting-comprehensive-report.md)

## Recent Updates

### November 2025

- ✅ Local validation of conversion pipeline (34,865 triples)
- ✅ Converter audit and consolidation (17 → 6 tools)
- ✅ Fixed mobile sync workflows authentication
- ✅ Merged enriched blockchain ontology pages (BC-0441 through BC-0495)
- ⏳ URI sanitization improvements in progress

### October 2025

- WebVOWL visualization deployment
- TTL to WebVOWL JSON converter fixes
- Bidirectional mobile sync workflows
- Auto-loading mechanism for ontology

## Tech Stack

- **Format**: Markdown (.md) for content, EDN (Clojure) for config
- **Ontology**: OWL/RDF with Turtle serialization
- **Visualization**: WebVOWL (interactive JavaScript graph)
- **Publishing**: Logseq SPA Publisher → GitHub Pages
- **Domain**: narrativegoldmine.com (custom CNAME)
- **Version Control**: Git with GitHub Actions CI/CD

## Git Workflow

**Current Branch**: main (default for all work)

**Publishing Repository**: flossverse/knowledgeGraph (gh-pages branch)

**Required Secret**: `ACCESS_TOKEN` for cross-repo deployment

## Contributing

This is a personal knowledge graph, but ontology enrichment contributions welcome:

1. Fork the repository
2. Add/enhance ontology pages following OntologyBlock structure
3. Test with local TTL generation
4. Submit pull request with description

## License

- Content: Personal knowledge graph
- Tools: MIT License (Ontology-Tools/)
- Published Site: Creative Commons Attribution 4.0

## Contact

- **Website**: [narrativegoldmine.com](https://narrativegoldmine.com)
- **Issues**: [GitHub Issues](https://github.com/flossverse/logseq/issues)
- **Ontology Visualization**: [narrativegoldmine.com/ontology](https://narrativegoldmine.com/ontology)

---

*Last Updated: November 2025*
