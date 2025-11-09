# Ontology Deployment - C4 Architecture Diagrams

**Project**: Narrative Goldmine Ontology Visualization
**URL**: https://narrativegoldmine.com/ontology
**Date**: November 9, 2025

## Level 1: System Context Diagram

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          System Context                                  │
└──────────────────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │   Content   │
    │   Authors   │  Edits markdown pages
    │             │  in Logseq Desktop
    └──────┬──────┘
           │
           │ git push
           ▼
    ┌─────────────────────────────────────────────┐
    │         GitHub Repository                   │
    │     flossverse/logseq (main branch)        │
    │                                             │
    │  • Markdown pages (2,519+)                 │
    │  • Ontology conversion tools               │
    │  • Publishing workflows                     │
    └──────────────────┬──────────────────────────┘
                       │
                       │ Triggers on push
                       ▼
    ┌─────────────────────────────────────────────┐
    │      GitHub Actions CI/CD Pipeline          │
    │                                             │
    │  1. Generate TTL from markdown             │
    │  2. Convert TTL to WebVOWL JSON            │
    │  3. Build Logseq SPA                       │
    │  4. Integrate WebVOWL v1.1.6               │
    │  5. Deploy to GitHub Pages                 │
    └──────────────────┬──────────────────────────┘
                       │
                       │ Deploys static site
                       ▼
    ┌─────────────────────────────────────────────┐
    │         GitHub Pages Hosting                │
    │     flossverse/knowledgeGraph (gh-pages)   │
    │                                             │
    │  Domain: narrativegoldmine.com             │
    │  HTTPS: Enforced automatically             │
    └──────────────────┬──────────────────────────┘
                       │
                       │ HTTPS requests
                       ▼
    ┌─────────────┐        ┌──────────────┐
    │   End Users │◄──────►│   Browsers   │
    │             │        │  (Chrome,    │
    │  Researchers│        │   Firefox,   │
    │  Students   │        │   Safari)    │
    │  Developers │        └──────────────┘
    └─────────────┘
         │
         │ Interacts with
         ▼
    ┌─────────────────────────────────────────────┐
    │    WebVOWL Interactive Visualization        │
    │                                             │
    │  • 1,008 OWL classes                       │
    │  • 273 object properties                   │
    │  • Force-directed graph                    │
    │  • Drag, zoom, filter, search              │
    └─────────────────────────────────────────────┘


External Systems:
┌────────────────┐          ┌────────────────┐
│ Google Fonts   │          │  Logseq SPA    │
│                │          │  Publisher     │
│ Open Sans font │          │  (nightly)     │
└────────────────┘          └────────────────┘
```

## Level 2: Container Diagram

```
┌──────────────────────────────────────────────────────────────────────────┐
│              GitHub Actions CI/CD Container                              │
└──────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                    Ontology Generation Pipeline                         │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Step 1: Extract OntologyBlocks from Markdown              │        │
│  │                                                             │        │
│  │  Python: webvowl_header_only_converter.py                  │        │
│  │  Input: mainKnowledgeGraph/pages/*.md (2,519 files)        │        │
│  │  Output: /tmp/narrativegoldmine-ontology.ttl               │        │
│  │                                                             │        │
│  │  • Regex extraction of OntologyBlock headers               │        │
│  │  • Parse term-id, preferred-term, definition               │        │
│  │  • Extract OWL axioms from Clojure syntax                  │        │
│  │  • Generate RDF triples (34,865 triples)                   │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
│                         │                                               │
│                         ▼                                               │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Step 2: Convert TTL to WebVOWL JSON                       │        │
│  │                                                             │        │
│  │  Python: ttl_to_webvowl_json.py                            │        │
│  │  Input: /tmp/narrativegoldmine-ontology.ttl                │        │
│  │  Output: /tmp/narrativegoldmine-ontology.json              │        │
│  │                                                             │        │
│  │  • Parse RDF graph with rdflib                             │        │
│  │  • Extract owl:Class → class nodes                         │        │
│  │  • Extract owl:ObjectProperty → property links             │        │
│  │  • Generate WebVOWL JSON structure                         │        │
│  │  • Output: 532KB JSON file                                 │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
└─────────────────────────┼──────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    WebVOWL Integration Pipeline                         │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Step 3: Clone WebVOWL v1.1.6                              │        │
│  │                                                             │        │
│  │  git clone --branch 1.1.6 WebVOWL.git                      │        │
│  │  cp -r deploy/* webvowl-deploy/                            │        │
│  │                                                             │        │
│  │  Components cloned:                                        │        │
│  │  • index.html - Main app                                   │        │
│  │  • js/d3.min.js - D3.js v3                                 │        │
│  │  • js/webvowl.js - Core engine                             │        │
│  │  • js/webvowl.app.js - App logic (347KB)                   │        │
│  │  • css/webvowl.css - Styles                                │        │
│  │  • css/webvowl.app.css - App styles ⚠️ HTTP IMPORT         │        │
│  │  • data/ - Example ontologies                              │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
│                         │                                               │
│                         ▼                                               │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Step 4: Configure with Custom Ontology                    │        │
│  │                                                             │        │
│  │  # Replace FOAF (default) with our ontology                │        │
│  │  cp narrativegoldmine-ontology.json → foaf.json            │        │
│  │  cp narrativegoldmine-ontology.ttl → foaf.ttl              │        │
│  │                                                             │        │
│  │  Strategy:                                                  │        │
│  │  • WebVOWL loads data/foaf.json by default                 │        │
│  │  • No code modification required                           │        │
│  │  • Auto-loads on page load                                 │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
└─────────────────────────┼──────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    Logseq Publishing Pipeline                           │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Step 5: Build Logseq SPA                                  │        │
│  │                                                             │        │
│  │  logseq/publish-spa@main                                   │        │
│  │  --graph-directory mainKnowledgeGraph-publish              │        │
│  │  --output-directory www                                    │        │
│  │  --version nightly                                         │        │
│  │                                                             │        │
│  │  Output: Static site in www/                               │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
│                         │                                               │
│                         ▼                                               │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Step 6: Integrate WebVOWL                                 │        │
│  │                                                             │        │
│  │  cp -r webvowl-deploy www/ontology                         │        │
│  │  echo 'narrativegoldmine.com' > www/CNAME                  │        │
│  │  touch www/.nojekyll                                       │        │
│  │                                                             │        │
│  │  Final structure:                                          │        │
│  │  www/                                                       │        │
│  │  ├── index.html (Logseq)                                   │        │
│  │  ├── static/ (Logseq assets)                               │        │
│  │  ├── ontology/ (WebVOWL) ← /ontology endpoint              │        │
│  │  ├── CNAME                                                  │        │
│  │  └── .nojekyll                                             │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
└─────────────────────────┼──────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    GitHub Pages Deployment                              │
│                                                                         │
│  peaceiris/actions-gh-pages@v3                                         │
│  • external_repository: flossverse/knowledgeGraph                      │
│  • publish_branch: gh-pages                                            │
│  • publish_dir: www                                                    │
│                                                                         │
│  Deploys to: https://narrativegoldmine.com                             │
└─────────────────────────────────────────────────────────────────────────┘
```

## Level 3: Component Diagram - WebVOWL Runtime

```
┌──────────────────────────────────────────────────────────────────────────┐
│              Browser Runtime (Client-Side JavaScript)                    │
└──────────────────────────────────────────────────────────────────────────┘

User navigates to: https://narrativegoldmine.com/ontology/

┌─────────────────────────────────────────────────────────────────────────┐
│                         HTML Document Load                              │
│                                                                         │
│  GET /ontology/index.html                                              │
│  ├── <link rel="stylesheet" href="css/webvowl.css">                    │
│  ├── <link rel="stylesheet" href="css/webvowl.app.css">                │
│  │   └──► ⚠️ @import url(http://fonts.googleapis.com/...) ◄─ BLOCKED  │
│  ├── <script src="js/d3.min.js">                                       │
│  ├── <script src="js/webvowl.js">                                      │
│  ├── <script src="js/webvowl.app.js">                                  │
│  └── <script>window.onload = webvowl.app().initialize</script>         │
└─────────────────────────┬───────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      WebVOWL Application Stack                          │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Layer 1: D3.js Visualization Engine (d3.min.js)           │        │
│  │                                                             │        │
│  │  • Force-directed graph layout                             │        │
│  │  • SVG rendering                                           │        │
│  │  • Event handling (drag, zoom, pan)                        │        │
│  │  • Animation framework                                     │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
│                         │                                               │
│                         ▼                                               │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Layer 2: WebVOWL Core (webvowl.js)                        │        │
│  │                                                             │        │
│  │  • Graph parsing and validation                            │        │
│  │  • Node/link data structures                               │        │
│  │  • VOWL specification compliance                           │        │
│  │  • Force simulation configuration                          │        │
│  │  • Filter and search engine                                │        │
│  └──────────────────────┬─────────────────────────────────────┘        │
│                         │                                               │
│                         ▼                                               │
│  ┌────────────────────────────────────────────────────────────┐        │
│  │  Layer 3: Application Logic (webvowl.app.js)               │        │
│  │                                                             │        │
│  │  Components:                                                │        │
│  │  ┌──────────────────────────────────────────────┐          │        │
│  │  │  File Converter Module                       │          │        │
│  │  │  • Handles file upload                       │          │        │
│  │  │  • Parses JSON/TTL                            │          │        │
│  │  │  • Validates ontology structure              │          │        │
│  │  └──────────────────────────────────────────────┘          │        │
│  │  ┌──────────────────────────────────────────────┐          │        │
│  │  │  Ontology Menu                                │          │        │
│  │  │  • Loads default ontologies                  │          │        │
│  │  │  • Loads FOAF on startup (our ontology)     │          │        │
│  │  │  • IRI converter for remote ontologies       │          │        │
│  │  └──────────────────────────────────────────────┘          │        │
│  │  ┌──────────────────────────────────────────────┐          │        │
│  │  │  Graph Renderer                               │          │        │
│  │  │  • Creates nodes for classes                 │          │        │
│  │  │  • Creates links for properties              │          │        │
│  │  │  • Applies force simulation                  │          │        │
│  │  │  • Renders to SVG canvas                     │          │        │
│  │  └──────────────────────────────────────────────┘          │        │
│  │  ┌──────────────────────────────────────────────┐          │        │
│  │  │  Interaction Controller                       │          │        │
│  │  │  • Node click → details panel                │          │        │
│  │  │  • Drag → repositioning                      │          │        │
│  │  │  • Zoom/pan → viewport transform             │          │        │
│  │  │  • Filter → hide/show nodes                  │          │        │
│  │  │  • Search → highlight matches                │          │        │
│  │  └──────────────────────────────────────────────┘          │        │
│  │  ┌──────────────────────────────────────────────┐          │        │
│  │  │  Export Module                                │          │        │
│  │  │  • Export as JSON                            │          │        │
│  │  │  • Export as SVG                             │          │        │
│  │  │  • Export as TTL                             │          │        │
│  │  │  • Export as TeX                             │          │        │
│  │  └──────────────────────────────────────────────┘          │        │
│  └────────────────────────────────────────────────────────────┘        │
└─────────────────────────┬───────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      Data Loading Sequence                              │
│                                                                         │
│  1. window.onload fires                                                │
│  2. webvowl.app().initialize() called                                  │
│  3. Ontology Menu initializes                                          │
│  4. Default FOAF loading triggered                                     │
│  5. XHR: GET /ontology/data/foaf.json                                  │
│  6. Response: narrativegoldmine-ontology.json (532KB)                  │
│  7. JSON parsed → graph data structure                                │
│  8. Validation: 1,008 classes, 273 properties                         │
│  9. Force simulation initialized                                       │
│  10. Nodes/links created in D3                                         │
│  11. SVG rendering to #graph container                                 │
│  12. ⚠️ FAILS if CSS not loaded (fonts missing)                        │
└─────────────────────────────────────────────────────────────────────────┘
```

## Level 4: Code Diagram - Data Transformation Pipeline

```
┌──────────────────────────────────────────────────────────────────────────┐
│            Markdown → WebVOWL JSON Transformation                        │
└──────────────────────────────────────────────────────────────────────────┘

INPUT: BC-0001.md (Blockchain ontology page)
───────────────────────────────────────────────

- ### OntologyBlock
  - **Identification**
    - term-id:: BC-0001
    - preferred-term:: Blockchain
  - **Definition**
    - definition:: A distributed ledger technology...
  - **Semantic Classification**
    - owl:class:: bc:Blockchain
  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :Blockchain))
      (SubClassOf :Blockchain :DistributedLedger)
      ```

                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 1: OntologyBlock Extraction (webvowl_header_only_converter.py)   │
│                                                                         │
│  def extract_ontology_block(content: str) -> str:                      │
│      # Regex: Match from ### OntologyBlock to first ## heading         │
│      match = re.search(                                                │
│          r'-\s*###\s*OntologyBlock\s*\n(.*?)(?=\n-\s*##|\Z)',         │
│          content, re.DOTALL                                            │
│      )                                                                  │
│      return match.group(1) if match else ""                            │
│                                                                         │
│  def extract_metadata(block: str) -> dict:                             │
│      # Extract: term-id, preferred-term, definition, etc.              │
│      metadata = {}                                                      │
│      term_id = re.search(r'term-id::\s*(.+)', block)                  │
│      metadata['term_id'] = 'BC-0001'                                   │
│      metadata['preferred_term'] = 'Blockchain'                         │
│      metadata['definition'] = 'A distributed ledger...'                │
│      return metadata                                                    │
│                                                                         │
│  def parse_owl_axioms(block: str) -> list:                             │
│      # Extract Clojure-style axioms                                    │
│      axioms = re.findall(r'\(Declaration.*?\)', block)                 │
│      axioms = re.findall(r'\(SubClassOf.*?\)', block)                  │
│      return axioms                                                      │
└─────────────────────────┬───────────────────────────────────────────────┘
                          │
                          ▼
OUTPUT: Turtle RDF
──────────────────────────

@prefix bc: <http://disruption.org/ontology/blockchain#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

bc:Blockchain a owl:Class ;
    rdfs:label "Blockchain"@en ;
    rdfs:comment "A distributed ledger technology..."@en ;
    rdfs:subClassOf bc:DistributedLedger .

                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 2: TTL → WebVOWL JSON (ttl_to_webvowl_json.py)                   │
│                                                                         │
│  def ttl_to_webvowl(ttl_file, output_file):                            │
│      g = Graph()                                                        │
│      g.parse(ttl_file, format='turtle')                                │
│                                                                         │
│      vowl = {                                                           │
│          "header": {...},                                               │
│          "class": [],                                                   │
│          "classAttribute": [],                                          │
│          "property": [],                                                │
│          "propertyAttribute": []                                        │
│      }                                                                  │
│                                                                         │
│      # Extract classes                                                  │
│      for cls in g.subjects(RDF.type, OWL.Class):                       │
│          class_id = generate_id()                                      │
│          label = g.value(cls, RDFS.label)                              │
│          comment = g.value(cls, RDFS.comment)                          │
│                                                                         │
│          vowl["class"].append({                                         │
│              "id": class_id,                                            │
│              "type": "owl:Class"                                        │
│          })                                                             │
│                                                                         │
│          vowl["classAttribute"].append({                                │
│              "id": class_id,                                            │
│              "iri": str(cls),                                           │
│              "label": {"en": str(label)},                               │
│              "comment": {"en": str(comment)}                            │
│          })                                                             │
│                                                                         │
│      # Extract properties                                              │
│      for prop in g.subjects(RDF.type, OWL.ObjectProperty):             │
│          prop_id = generate_id()                                       │
│          domain = g.value(prop, RDFS.domain)                           │
│          range_val = g.value(prop, RDFS.range)                         │
│                                                                         │
│          vowl["property"].append({                                      │
│              "id": prop_id,                                             │
│              "type": "owl:objectProperty"                               │
│          })                                                             │
│                                                                         │
│          vowl["propertyAttribute"].append({                             │
│              "id": prop_id,                                             │
│              "iri": str(prop),                                          │
│              "domain": domain_id,                                       │
│              "range": range_id                                          │
│          })                                                             │
│                                                                         │
│      json.dump(vowl, output_file, indent=2)                            │
└─────────────────────────┬───────────────────────────────────────────────┘
                          │
                          ▼
OUTPUT: WebVOWL JSON
────────────────────────

{
  "header": {
    "title": {"en": "Narrative Goldmine Ontology"},
    "version": "1.0"
  },
  "class": [
    {
      "id": "123",
      "type": "owl:Class"
    }
  ],
  "classAttribute": [
    {
      "id": "123",
      "iri": "http://disruption.org/ontology/blockchain#Blockchain",
      "baseIri": "http://disruption.org/ontology/blockchain",
      "label": {"en": "Blockchain"},
      "comment": {"en": "A distributed ledger technology..."}
    }
  ],
  "property": [...],
  "propertyAttribute": [...]
}

                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 3: WebVOWL Visualization (JavaScript runtime)                    │
│                                                                         │
│  // webvowl.app.js - Graph initialization                              │
│  function loadOntologyFromJSON(jsonData) {                             │
│      // Parse JSON structure                                           │
│      var classes = jsonData.class;                                     │
│      var classAttrs = jsonData.classAttribute;                         │
│      var properties = jsonData.property;                               │
│      var propAttrs = jsonData.propertyAttribute;                       │
│                                                                         │
│      // Create D3 nodes                                                │
│      var nodes = classes.map(function(cls) {                           │
│          var attr = classAttrs.find(a => a.id === cls.id);            │
│          return {                                                       │
│              id: cls.id,                                                │
│              type: cls.type,                                            │
│              label: attr.label.en,                                      │
│              iri: attr.iri,                                             │
│              x: Math.random() * width,                                 │
│              y: Math.random() * height                                 │
│          };                                                             │
│      });                                                                │
│                                                                         │
│      // Create D3 links                                                │
│      var links = properties.map(function(prop) {                       │
│          var attr = propAttrs.find(a => a.id === prop.id);            │
│          return {                                                       │
│              source: nodes.find(n => n.id === attr.domain),            │
│              target: nodes.find(n => n.id === attr.range),             │
│              label: attr.label.en,                                      │
│              type: prop.type                                            │
│          };                                                             │
│      });                                                                │
│                                                                         │
│      // Initialize D3 force simulation                                 │
│      var force = d3.layout.force()                                     │
│          .nodes(nodes)                                                  │
│          .links(links)                                                  │
│          .linkDistance(180)                                             │
│          .charge(-1000)                                                 │
│          .size([width, height])                                         │
│          .start();                                                      │
│                                                                         │
│      // Render to SVG                                                  │
│      svg.selectAll(".link")                                             │
│          .data(links)                                                   │
│          .enter().append("line")                                        │
│          .attr("class", "link");                                        │
│                                                                         │
│      svg.selectAll(".node")                                             │
│          .data(nodes)                                                   │
│          .enter().append("circle")                                      │
│          .attr("class", "node")                                         │
│          .attr("r", 10)                                                 │
│          .call(force.drag);                                             │
│  }                                                                      │
└─────────────────────────────────────────────────────────────────────────┘

FINAL OUTPUT: Interactive force-directed graph in browser
```

## Mixed Content Error - Detailed Analysis

```
┌──────────────────────────────────────────────────────────────────────────┐
│                      Error Propagation Chain                             │
└──────────────────────────────────────────────────────────────────────────┘

1. User navigates to: https://narrativegoldmine.com/ontology/
   │
   │ Browser requests: HTTPS
   ▼
2. HTML loads: index.html
   │
   │ <link rel="stylesheet" href="css/webvowl.app.css">
   ▼
3. CSS file loaded over HTTPS ✓
   │
   │ URL: https://narrativegoldmine.com/ontology/css/webvowl.app.css
   ▼
4. CSS contains: @import url(http://fonts.googleapis.com/css?family=Open+Sans);
   │                        ^^^^^ HTTP on HTTPS page
   │
   │ Browser security policy: BLOCK
   ▼
5. ⚠️ MIXED CONTENT ERROR
   │
   │ Console: "Mixed Content: The page at 'https://narrativegoldmine.com/ontology/'
   │           was loaded over HTTPS, but requested an insecure resource
   │           'http://fonts.googleapis.com/css?family=Open+Sans'.
   │           This request has been blocked; the content must be served over HTTPS."
   ▼
6. Font fails to load
   │
   │ Open Sans font unavailable
   │ Fallback to browser default font
   ▼
7. CSS rendering incomplete
   │
   │ Layout calculations may be incorrect
   │ Text sizing may be off
   ▼
8. JavaScript executes
   │
   │ webvowl.app.js initializes
   │ Loads foaf.json (our ontology)
   │ Attempts to render graph
   ▼
9. Graph rendering may fail
   │
   │ Possible issues:
   │ • SVG text elements use missing font
   │ • Layout calculations incorrect
   │ • Visual artifacts
   │ • Complete rendering failure
   ▼
10. User sees: Blank graph or broken visualization


┌──────────────────────────────────────────────────────────────────────────┐
│                           Fix Strategy                                   │
└──────────────────────────────────────────────────────────────────────────┘

BEFORE FIX:
───────────
css/webvowl.app.css:
    @import url(http://fonts.googleapis.com/css?family=Open+Sans);
                ^^^^^ Insecure HTTP

Browser: 🚫 BLOCKED (Mixed Content)

AFTER FIX:
──────────
css/webvowl.app.css:
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
                ^^^^^^ Secure HTTPS

Browser: ✅ ALLOWED

Implementation in publish.yml:
─────────────────────────────
- name: Fix mixed content in WebVOWL CSS
  run: |
    sed -i 's|http://fonts.googleapis.com|https://fonts.googleapis.com|g' \
      webvowl-deploy/css/webvowl.app.css
    echo "✅ Fixed CSS font import to use HTTPS"

Result:
───────
✅ Font loads successfully
✅ CSS rendering complete
✅ JavaScript executes without issues
✅ Graph renders correctly
✅ 1,008 classes visualized
✅ Interactive graph functional
```

---

**Document Version**: 1.0
**Last Updated**: November 9, 2025
**Status**: Architecture documented, awaiting fix deployment
