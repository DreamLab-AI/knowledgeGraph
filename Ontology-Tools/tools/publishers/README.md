## Logseq Publishing Tools

This directory contains tools for publishing the Logseq knowledge graph with custom ontology visualization.

### Components

#### 1. GitHub Actions Workflow (`.github/workflows/publish.yml`)

**Simplified, consolidated workflow** that:
- Uses custom composite action for all publishing logic
- Triggers on push to main branch
- Deploys to `flossverse/knowledgeGraph` repository

```yaml
- uses: ./.github/actions/publish-with-ontology
  with:
    graph-directory: 'mainKnowledgeGraph'
    output-directory: 'www'
    logseq-version: 'nightly'
```

#### 2. Custom Composite Action (`.github/actions/publish-with-ontology/action.yml`)

**All-in-one action** that handles:
1. **Graph Preparation**: Adds `public:: true` tags to ontology pages
2. **Ontology Generation**: Creates TTL and WebVOWL JSON
3. **WebVOWL Setup**: Clones, configures, fixes CSS mixed content
4. **Logseq Publishing**: Uses official `logseq/publish-spa@main`
5. **Post-Processing**: Integrates WebVOWL, adds docs, sets defaults

**Benefits:**
- Clean separation of concerns
- Reusable across workflows
- Easy to test and modify
- Standard Logseq publisher + custom enhancements

#### 3. Consolidated Python Script (`consolidated_publisher.py`)

**Standalone publishing script** for local use:

```bash
# Full pipeline
python3 consolidated_publisher.py

# Skip ontology generation
python3 consolidated_publisher.py --skip-ontology

# Custom directories
python3 consolidated_publisher.py \
  --graph-dir ./my-graph \
  --output-dir ./my-output
```

**Features:**
- Complete pipeline in single script
- Docker-based Logseq publishing
- Fallback methods if Docker unavailable
- Progress reporting
- Error handling

**Pipeline Steps:**
1. Prepare graph copy with public tags
2. Generate ontology (TTL + JSON)
3. Setup WebVOWL v1.1.6
4. Publish with Docker
5. Integrate WebVOWL
6. Finalize deployment

#### 4. Isolation Testing Tool (`test_publish_spa.py`)

**Debug tool** for identifying problematic pages:

```bash
# Test with minimal pages
python3 test_publish_spa.py --mode minimal

# Test ontology pages only
python3 test_publish_spa.py --mode ontology

# Test specific files
python3 test_publish_spa.py --mode custom \
  --files "AI-0001.md,BC-0001.md"

# Test full graph
python3 test_publish_spa.py --mode full
```

**Use Cases:**
- Binary search for escape character issues
- Progressive testing
- Validate specific page subsets
- Requires local Babashka installation

### Architecture

```
┌─────────────────────────────────────────────────────┐
│  GitHub Actions Workflow                            │
│  (.github/workflows/publish.yml)                    │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│  Custom Composite Action                            │
│  (.github/actions/publish-with-ontology)            │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │ 1. Prepare Graph                              │  │
│  │    - Copy mainKnowledgeGraph                  │  │
│  │    - Add public:: true tags                   │  │
│  └───────────────────────────────────────────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │ 2. Generate Ontology                          │  │
│  │    - webvowl_header_only_converter.py         │  │
│  │    - ttl_to_webvowl_json.py                   │  │
│  └───────────────────────────────────────────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │ 3. Setup WebVOWL                              │  │
│  │    - Clone v1.1.6                             │  │
│  │    - Fix CSS (HTTP → HTTPS)                   │  │
│  │    - Replace FOAF with our ontology           │  │
│  └───────────────────────────────────────────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │ 4. Publish Logseq Graph                       │  │
│  │    uses: logseq/publish-spa@main              │  │
│  └───────────────────────────────────────────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │ 5. Post-Process                               │  │
│  │    - Integrate WebVOWL                        │  │
│  │    - Add .nojekyll, CNAME                     │  │
│  │    - Copy documentation                       │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│  Deploy to GitHub Pages                             │
│  (flossverse/knowledgeGraph @ gh-pages)             │
└─────────────────────────────────────────────────────┘
```

### Key Fixes Implemented

#### 1. WebVOWL ID Overlap Fix
**Problem**: Class IDs and Property IDs overlapped, causing `node.visible is not a function` error.

**Solution**: Modified `ttl_to_webvowl_json.py` to start property IDs after all class IDs:
```python
prop_id = class_id  # Start at 1001 instead of 1
```

**Result**:
- Classes: 1-1000
- Properties: 1001-1141
- Zero overlap

#### 2. Mixed Content Security Error
**Problem**: WebVOWL CSS loaded fonts via HTTP, blocked on HTTPS site.

**Solution**: Replace HTTP URLs with HTTPS in `webvowl.app.css`:
```bash
sed -i 's|http://fonts.googleapis.com|https://fonts.googleapis.com|g' \
  webvowl-deploy/css/webvowl.app.css
```

#### 3. FOAF Replacement Approach
**Problem**: Complex autoload script had timing issues.

**Solution**: Simply replace `data/foaf.json` with our ontology - WebVOWL loads it by default.

### Local Development

#### Test Ontology Generation
```bash
cd Ontology-Tools/tools/converters

# Generate TTL
python3 webvowl_header_only_converter.py \
  --pages-dir ../../../mainKnowledgeGraph/pages \
  --output /tmp/test.ttl

# Convert to JSON
python3 ttl_to_webvowl_json.py \
  --input /tmp/test.ttl \
  --output /tmp/test.json

# Verify no ID overlap
python3 -c "
import json
d = json.load(open('/tmp/test.json'))
class_ids = set(str(c['id']) for c in d['class'])
prop_ids = set(str(p['id']) for p in d['property'])
overlap = class_ids & prop_ids
print(f'Classes: {len(class_ids)}, Properties: {len(prop_ids)}, Overlap: {len(overlap)}')
"
```

#### Test Full Pipeline Locally
```bash
# Requires Docker
python3 Ontology-Tools/tools/publishers/consolidated_publisher.py

# Check output
ls -lh www/
ls -lh www/ontology/

# Serve locally
python3 -m http.server 8080 -d www
# Visit: http://localhost:8080
```

#### Test Isolation
```bash
# Test with just introduction
python3 Ontology-Tools/tools/publishers/test_publish_spa.py --mode minimal

# Keep test directories for inspection
python3 Ontology-Tools/tools/publishers/test_publish_spa.py \
  --mode minimal --keep-dirs
```

### Future NPM Package Option

If you want to publish your own npm package to replace the standard publish-spa:

1. **Finish Rust/WASM implementation** at `logseq-publisher/logseq-publisher-npm/`
2. **Publish to npm**:
   ```bash
   cd logseq-publisher/logseq-publisher-npm
   npm publish --access public
   ```
3. **Update workflow** to use your package:
   ```yaml
   - name: Install custom publisher
     run: npm install -g your-package-name

   - name: Publish
     run: logseq-publish build -i ./graph -o ./www
   ```

### Troubleshooting

#### Workflow Fails at Publish Step
- Check GitHub Actions logs at `https://github.com/jjohare/logseq/actions`
- Verify `mainKnowledgeGraph-publish` directory created
- Ensure Logseq version (nightly) is available

#### WebVOWL Not Loading
- Check browser console for errors
- Verify ontology JSON at `/ontology/data/foaf.json`
- Check for ID overlap with verification script above

#### Pages Not Public
- Ensure pages have `public:: true` at top
- Check `public-access:: true` in properties
- Verify `### OntologyBlock` marker present

### Related Documentation

- Main workflow: `.github/workflows/publish.yml`
- Custom action: `.github/actions/publish-with-ontology/action.yml`
- Converter audit: `Ontology-Tools/CONVERTER_AUDIT_AND_PLAN.md`
- WebVOWL docs: `docs/webvowl-integration.md`
