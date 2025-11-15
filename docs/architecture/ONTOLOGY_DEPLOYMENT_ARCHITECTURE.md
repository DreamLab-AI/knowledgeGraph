# Ontology Deployment Architecture Analysis

**Date**: November 9, 2025
**URL**: https://narrativegoldmine.com/ontology
**Status**: ⚠️ MIXED CONTENT ERROR - Graph Not Rendering

## Executive Summary

The WebVOWL ontology visualization at `/ontology` is experiencing mixed content security errors that prevent the graph from rendering. The root cause is an **HTTP font import in CSS served over HTTPS**, triggering browser security blocks. Additionally, the auto-load script is not being deployed with the WebVOWL assets.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GitHub Actions CI/CD Pipeline                     │
│                         (publish.yml)                                │
└─────────────────────────────────────────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
            ┌───────▼────────┐       ┌───────▼────────┐
            │  Ontology      │       │  WebVOWL       │
            │  Generation    │       │  Setup         │
            └───────┬────────┘       └───────┬────────┘
                    │                        │
            ┌───────▼────────┐       ┌───────▼────────┐
            │ Python Scripts │       │ Clone v1.1.6   │
            │ - TTL Gen      │       │ from GitHub    │
            │ - JSON Convert │       │                │
            └───────┬────────┘       └───────┬────────┘
                    │                        │
                    └────────────┬───────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  Integration Step       │
                    │  - Copy to www/ontology │
                    │  - Replace foaf.json    │
                    │  ⚠️ Missing autoload.js │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  GitHub Pages Deploy    │
                    │  narrativegoldmine.com  │
                    └─────────────────────────┘
```

## 1. Deployment Pipeline Flow

### Step 1: Ontology Generation (Lines 35-71)

**Location**: GitHub Actions Runner
**Scripts**:
- `Ontology-Tools/tools/converters/webvowl_header_only_converter.py`
- `Ontology-Tools/tools/converters/ttl_to_webvowl_json.py`

```yaml
# Generate TTL from markdown
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output /tmp/narrativegoldmine-ontology.ttl

# Convert TTL to WebVOWL JSON
python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/narrativegoldmine-ontology.ttl \
  --output /tmp/narrativegoldmine-ontology.json
```

**Output**:
- 34,865 RDF triples
- 1,008 OWL classes
- 273 object properties
- ~532KB JSON file

### Step 2: WebVOWL Setup (Lines 73-95)

**Source**: https://github.com/VisualDataWeb/WebVOWL v1.1.6 (Oct 2019)

```bash
# Clone stable release
git clone --depth 1 --branch 1.1.6 \
  https://github.com/VisualDataWeb/WebVOWL.git webvowl-src

# Copy pre-built deploy folder
cp -r webvowl-src/deploy/* webvowl-deploy/
```

**Assets Included**:
- `index.html` - Main application page
- `js/d3.min.js` - D3.js visualization library
- `js/webvowl.js` - Core WebVOWL engine
- `js/webvowl.app.js` - Application logic (347KB)
- `css/webvowl.css` - Core styles
- `css/webvowl.app.css` - Application styles ⚠️ **CONTAINS HTTP IMPORT**
- `data/` - Example ontology files (FOAF, GoodRelations, etc.)

### Step 3: Ontology Integration (Lines 97-113)

**Strategy**: Replace default FOAF ontology with custom ontology

```bash
# Copy generated files to WebVOWL data directory
mkdir -p webvowl-deploy/data

# Replace FOAF (default) with our ontology
cp /tmp/narrativegoldmine-ontology.json webvowl-deploy/data/foaf.json
cp /tmp/narrativegoldmine-ontology.ttl webvowl-deploy/data/foaf.ttl

# Also keep under original name for reference
cp /tmp/narrativegoldmine-ontology.json \
   webvowl-deploy/data/narrativegoldmine-ontology.json
```

**How It Works**:
- WebVOWL v1.1.6 loads `data/foaf.json` by default on startup
- By replacing FOAF with our ontology, custom ontology loads automatically
- No JavaScript modification required

### Step 4: Logseq SPA Publishing (Lines 115-128)

```yaml
- name: Publish Logseq graph
  uses: logseq/publish-spa@main
  with:
    graph-directory: 'mainKnowledgeGraph-publish'
    output-directory: 'www'
    version: nightly

- name: Modify index.html
  run: |
    sed -i 's/#\/all-pages/#\/page\/introduction/g' \
      $GITHUB_WORKSPACE/www/index.html
```

**Output**: Static site in `www/` directory

### Step 5: WebVOWL Integration (Lines 130-147)

```bash
# Copy WebVOWL to subdirectory
cp -r webvowl-deploy $GITHUB_WORKSPACE/www/ontology
```

**Final Structure**:
```
www/
├── index.html (Logseq SPA)
├── static/ (Logseq assets)
├── ontology/
│   ├── index.html (WebVOWL app)
│   ├── js/
│   │   ├── d3.min.js
│   │   ├── webvowl.js
│   │   └── webvowl.app.js
│   ├── css/
│   │   ├── webvowl.css
│   │   └── webvowl.app.css ⚠️ HTTP FONT IMPORT
│   └── data/
│       ├── foaf.json (our ontology)
│       ├── foaf.ttl
│       └── narrativegoldmine-ontology.json
├── CNAME (narrativegoldmine.com)
└── .nojekyll
```

### Step 6: GitHub Pages Deployment (Lines 169-176)

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    personal_token: ${{ secrets.ACCESS_TOKEN }}
    external_repository: flossverse/knowledgeGraph
    publish_branch: gh-pages
    publish_dir: www
```

**Target**: https://narrativegoldmine.com/ontology

## 2. Current Issues

### 🔴 Critical: Mixed Content Error

**File**: `css/webvowl.app.css` (Line 1)
```css
@import url(http://fonts.googleapis.com/css?family=Open+Sans);
```

**Impact**:
- Browser blocks HTTP resource on HTTPS page
- Font fails to load
- Graph rendering may fail due to layout calculations
- Console error: "Mixed Content: The page at 'https://...' was loaded over HTTPS, but requested an insecure resource 'http://fonts.googleapis.com/...'"

**Security Context**:
- Modern browsers block mixed content by default
- HTTPS → HTTP downgrades violate Content Security Policy
- GitHub Pages enforces HTTPS for custom domains

### 🟡 Warning: Missing Auto-Load Script

**Expected**: `webvowl-autoload.js` should be integrated
**Location**: `.github/workflows/webvowl-autoload.js` (exists but not deployed)
**Impact**:
- Auto-load functionality not active
- Users must manually select ontology from menu
- Default FOAF loading works (foaf.json replacement), but autoload enhancement missing

**Current Workaround**:
- Replacing `data/foaf.json` with our ontology works
- WebVOWL loads it automatically on startup
- Auto-load script would provide better UX but not critical

### 🟢 Working: Ontology Data

**Status**: ✅ Successfully deployed
- URL: https://narrativegoldmine.com/ontology/data/narrativegoldmine-ontology.json
- Size: 532,460 bytes
- Structure: Valid WebVOWL JSON format
- Content: 1,008 classes, 273 properties

**Test Results**:
```bash
$ curl -s https://narrativegoldmine.com/ontology/data/narrativegoldmine-ontology.json \
  | jq -r '.header.title'
{
  "en": "Narrative Goldmine Ontology"
}
```

## 3. WebVOWL Asset Loading

### Current Loading Sequence

```
1. Browser loads https://narrativegoldmine.com/ontology/
   ↓
2. HTML references CSS: <link rel="stylesheet" href="css/webvowl.app.css" />
   ↓
3. CSS contains: @import url(http://fonts.googleapis.com/...) ⚠️
   ↓
4. Browser blocks HTTP request (mixed content)
   ↓
5. Font load fails
   ↓
6. JavaScript loads: webvowl.app.js
   ↓
7. WebVOWL initializes, loads data/foaf.json (our ontology)
   ↓
8. Graph rendering may fail due to missing fonts / layout issues
```

### Asset Verification

**All assets successfully deployed**:
```bash
✅ https://narrativegoldmine.com/ontology/index.html (200 OK)
✅ https://narrativegoldmine.com/ontology/js/webvowl.app.js (200 OK, 347KB)
✅ https://narrativegoldmine.com/ontology/js/webvowl.js (200 OK)
✅ https://narrativegoldmine.com/ontology/js/d3.min.js (200 OK)
✅ https://narrativegoldmine.com/ontology/data/foaf.json (200 OK, 532KB)
⚠️ https://narrativegoldmine.com/ontology/css/webvowl.app.css (200 OK, but contains HTTP import)
```

## 4. Routing Configuration

### Static Site Structure

**GitHub Pages Configuration**:
- Custom domain: `narrativegoldmine.com` (via CNAME)
- HTTPS enforced automatically
- `.nojekyll` file prevents Jekyll processing
- Direct file serving

**URL Routing**:
```
https://narrativegoldmine.com/
  ├── / → index.html (Logseq SPA)
  ├── /page/introduction → Logseq page routing
  └── /ontology/ → WebVOWL subdirectory
      ├── index.html
      ├── css/
      ├── js/
      └── data/
```

**No server-side routing** - Pure static file serving

## 5. Integration Between WebVOWL and Ontology Data

### Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│          Markdown Pages (mainKnowledgeGraph/pages)          │
│  AI-0001.md, BC-0001.md, MV-0001.md, RB-0001.md (2,519+)   │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────▼────────────────┐
        │ OntologyBlock Header Extraction │
        │ (webvowl_header_only_converter) │
        └────────────────┬────────────────┘
                         │
        ┌────────────────▼────────────────┐
        │     Turtle RDF Generation       │
        │  - Classes (owl:Class)          │
        │  - Properties (owl:ObjectProperty)│
        │  - Axioms (rdfs:subClassOf)     │
        │  - Metadata (rdfs:label, comment)│
        └────────────────┬────────────────┘
                         │
        ┌────────────────▼────────────────┐
        │   WebVOWL JSON Transformation   │
        │   (ttl_to_webvowl_json.py)     │
        │  - Nodes (classes)              │
        │  - Links (properties)           │
        │  - Attributes (labels, IRIs)    │
        └────────────────┬────────────────┘
                         │
        ┌────────────────▼────────────────┐
        │     WebVOWL Visualization       │
        │  - D3.js force-directed graph   │
        │  - Interactive node exploration │
        │  - Property relationship display│
        └─────────────────────────────────┘
```

### OntologyBlock Structure

**Example** (BC-0001.md - Blockchain):
```markdown
- ### OntologyBlock
  - **Identification**
    - term-id:: BC-0001
    - preferred-term:: Blockchain
    - status:: stable
  - **Definition**
    - definition:: A distributed ledger technology...
    - maturity:: mature
  - **Semantic Classification**
    - owl:class:: bc:Blockchain
  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :Blockchain))
      (SubClassOf :Blockchain :DistributedLedger)
      (SubClassOf :Blockchain
        (ObjectSomeValuesFrom :ensures :DataImmutability))
      ```
```

**Extracted TTL**:
```turtle
@prefix bc: <http://disruption.org/ontology/blockchain#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

bc:Blockchain a owl:Class ;
    rdfs:label "Blockchain"@en ;
    rdfs:comment "A distributed ledger technology..."@en ;
    rdfs:subClassOf bc:DistributedLedger .

bc:ensures a owl:ObjectProperty ;
    rdfs:domain bc:Blockchain ;
    rdfs:range bc:DataImmutability .
```

**WebVOWL JSON**:
```json
{
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
  "property": [
    {
      "id": "456",
      "type": "owl:objectProperty"
    }
  ],
  "propertyAttribute": [
    {
      "id": "456",
      "iri": "http://disruption.org/ontology/blockchain#ensures",
      "domain": "123",
      "range": "124",
      "label": {"en": "ensures"}
    }
  ]
}
```

### WebVOWL Rendering

**Visualization Engine**:
- **D3.js v3** - Force-directed graph layout
- **SVG rendering** - Scalable vector graphics
- **Force simulation** - Physics-based node positioning
  - Link distance: 180
  - Charge strength: -1000 (repulsion)
  - Collision detection

**Interaction Features**:
- Drag and drop nodes
- Zoom and pan
- Click to view details
- Filter by namespace
- Search functionality
- Export as SVG/JSON/TTL

## 6. Configuration Issues Summary

### Issue Matrix

| Component | Status | Issue | Impact | Fix Required |
|-----------|--------|-------|--------|--------------|
| Ontology JSON | ✅ Working | None | Graph data available | None |
| TTL Generation | ✅ Working | None | 34,865 triples | None |
| WebVOWL Assets | ✅ Deployed | None | All files accessible | None |
| CSS Fonts | 🔴 **BROKEN** | HTTP import on HTTPS page | Graph rendering fails | **CRITICAL** |
| Auto-load Script | 🟡 Missing | Not deployed | Manual load required | Nice-to-have |
| FOAF Replacement | ✅ Working | None | Auto-loads ontology | None |
| GitHub Pages | ✅ Working | HTTPS enforced | Blocks mixed content | None |

## 7. Solution Architecture

### Fix 1: Replace HTTP Font Import (CRITICAL)

**Problem**: Line 1 of `css/webvowl.app.css`
```css
@import url(http://fonts.googleapis.com/css?family=Open+Sans);
```

**Solution**: Change to HTTPS
```css
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
```

**Implementation Options**:

#### Option A: Pre-deployment Patching (Recommended)
Add to `publish.yml` after cloning WebVOWL:
```yaml
- name: Fix mixed content in WebVOWL CSS
  run: |
    # Replace HTTP with HTTPS in CSS font import
    sed -i 's|http://fonts.googleapis.com|https://fonts.googleapis.com|g' \
      webvowl-deploy/css/webvowl.app.css

    echo "✅ Fixed CSS font import to use HTTPS"
```

#### Option B: Fork WebVOWL
- Fork https://github.com/VisualDataWeb/WebVOWL
- Fix CSS in fork
- Clone from fork instead of upstream

#### Option C: Local Font Hosting
- Download Open Sans font files
- Host locally in `ontology/fonts/`
- Update CSS to reference local files

### Fix 2: Deploy Auto-load Script (Optional Enhancement)

**Add to `publish.yml`**:
```yaml
- name: Add auto-load script to WebVOWL
  run: |
    # Copy autoload script
    cp .github/workflows/webvowl-autoload.js \
       webvowl-deploy/js/webvowl-autoload.js

    # Inject script tag into index.html
    sed -i 's|</body>|<script src="js/webvowl-autoload.js"></script>\n</body>|' \
       webvowl-deploy/index.html

    echo "✅ Auto-load script integrated"
```

**Note**: This is optional since FOAF replacement already provides auto-loading.

## 8. Verification Steps

### After Deployment

1. **Check CSS Fix**:
```bash
curl -s https://narrativegoldmine.com/ontology/css/webvowl.app.css \
  | head -1
# Expected: @import url(https://fonts.googleapis.com/...)
```

2. **Test Browser Console**:
- Open https://narrativegoldmine.com/ontology/
- Check Developer Console (F12)
- No mixed content errors
- Graph renders successfully

3. **Verify Ontology Load**:
- Graph displays 1,008+ nodes
- Classes are interactive
- Properties show connections
- Namespaces visible (ai:, bc:, mv:, rb:, dt:)

4. **Performance Check**:
- Initial load time < 5 seconds
- Smooth interaction
- No JavaScript errors

## 9. Monitoring and Maintenance

### Regular Checks

**Monthly**:
- Verify ontology JSON size (should grow with new pages)
- Check graph rendering performance
- Test on multiple browsers
- Validate all assets load correctly

**Per Deployment**:
- GitHub Actions workflow success
- TTL generation output (34,865+ triples)
- WebVOWL JSON size (~532KB+)
- No console errors

### Known Limitations

1. **WebVOWL Version**: v1.1.6 (Oct 2019)
   - Last stable release
   - No recent updates
   - May not support latest OWL features

2. **Browser Compatibility**:
   - Does not work in Internet Explorer / Edge Legacy
   - Requires modern browser (Chrome, Firefox, Safari)
   - Mobile support limited

3. **Performance**:
   - Large ontologies (1,000+ classes) may be slow
   - Force simulation can be CPU-intensive
   - Consider pagination for very large graphs

## 10. References

### Documentation
- **WebVOWL**: http://vowl.visualdataweb.org/webvowl.html
- **VOWL Specification**: http://purl.org/vowl/
- **GitHub Repository**: https://github.com/VisualDataWeb/WebVOWL

### Project Files
- **Publishing Workflow**: `.github/workflows/publish.yml`
- **TTL Converter**: `Ontology-Tools/tools/converters/webvowl_header_only_converter.py`
- **JSON Converter**: `Ontology-Tools/tools/converters/ttl_to_webvowl_json.py`
- **Auto-load Script**: `.github/workflows/webvowl-autoload.js`

### External Dependencies
- **Logseq SPA Publisher**: https://github.com/logseq/publish-spa
- **GitHub Pages**: https://docs.github.com/en/pages
- **D3.js**: https://d3js.org/
- **Google Fonts**: https://fonts.google.com/

---

**Last Updated**: November 9, 2025
**Status**: Mixed content error identified - awaiting fix deployment
