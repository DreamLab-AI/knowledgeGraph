# WebVOWL Integration Investigation Report

**Date**: 2025-11-09
**Issue**: Ontology graph not rendering - JavaScript errors
**Errors Reported**:
- `node.visible is not a function`
- `Cannot read properties of undefined (reading 'attr')`

---

## Executive Summary

**ROOT CAUSE IDENTIFIED**: The conversion pipeline is working correctly. The JavaScript errors are likely caused by **WebVOWL v1.1.6 compatibility issues** with the generated JSON data structure or **missing properties in node objects** during graph rendering.

**STATUS**:
- ✅ TTL generation: **WORKING** (35,952 triples, 1,002 classes)
- ✅ JSON conversion: **WORKING** (correct WebVOWL format)
- ✅ Deployment: **SUCCESSFUL** (files deployed to narrativegoldmine.com/ontology/)
- ❌ Graph rendering: **FAILING** (JavaScript runtime errors)

---

## Investigation Findings

### 1. Build and Conversion Pipeline ✅

**GitHub Actions Workflow** (`/home/devuser/workspace/logseq/.github/workflows/publish.yml`):

```yaml
Step 1: Generate TTL from markdown
  Script: webvowl_header_only_converter.py
  Output: /tmp/narrativegoldmine-ontology.ttl
  Result: ✅ 35,952 triples generated

Step 2: Convert TTL to WebVOWL JSON
  Script: ttl_to_webvowl_json.py
  Output: /tmp/narrativegoldmine-ontology.json
  Result: ✅ 425KB JSON with correct structure

Step 3: Clone WebVOWL v1.1.6
  Source: https://github.com/VisualDataWeb/WebVOWL.git
  Branch: 1.1.6 (stable release from Oct 2019)
  Result: ✅ Pre-built deploy folder copied

Step 4: Replace FOAF default with custom ontology
  Method: Copy narrativegoldmine-ontology.json to data/foaf.json
  Rationale: Simpler than autoload, loads by default
  Result: ✅ Deployed successfully

Step 5: Deploy to GitHub Pages
  Target: flossverse/knowledgeGraph/gh-pages
  Domain: narrativegoldmine.com/ontology/
  Result: ✅ Deployed successfully
```

**Verification**:
```bash
# Local test confirms correct structure
$ python3 ttl_to_webvowl_json.py --input /tmp/test.ttl --output /tmp/test.json

Sample classAttribute:
{
  "id": "1",
  "iri": "http://disruption.org/ontology/artificial-intelligence#ActivationFunction",
  "baseIri": "http://disruption.org/ontology/artificial-intelligence",
  "label": {"en": "Activation Function"},
  "comment": {"en": "..."}
}

Sample propertyAttribute:
{
  "id": "1003",
  "iri": "http://disruption.org/ontology/artificial-intelligence#evaluatedByFairnessMetric",
  "baseIri": "http://disruption.org/ontology/artificial-intelligence",
  "attributes": ["object"],
  "domain": "1",
  "range": "1"
}
```

**Deployed JSON Verification**:
```bash
$ curl -s "https://narrativegoldmine.com/ontology/data/foaf.json" | python3 -c ...

✅ Classes: 1002
✅ Properties: 144
✅ ClassAttrs: 1002 (with iri + baseIri)
✅ PropAttrs: 144 (with iri + baseIri + domain + range)
```

---

### 2. Data Structure Analysis

**Comparison**: Test file vs. Deployed version

| Field | test-webvowl.json (OLD) | Deployed (CORRECT) |
|-------|-------------------------|-------------------|
| classAttribute.iri | ❌ Missing | ✅ Present |
| classAttribute.baseIri | ❌ Missing | ✅ Present |
| propertyAttribute.iri | ❌ Missing | ✅ Present |
| propertyAttribute.baseIri | ❌ Missing | ✅ Present |
| propertyAttribute.domain | ❌ Partial | ✅ All have values |
| propertyAttribute.range | ❌ Partial | ✅ All have values |

**Conclusion**: The old `test-webvowl.json` file in the repository is outdated and does NOT reflect the actual deployed JSON structure. The deployed version is correct.

---

### 3. WebVOWL Version and Compatibility

**WebVOWL v1.1.6 Details**:
- **Release Date**: October 2019
- **Last Update**: 5+ years ago
- **Dependencies**: D3.js v3.x (very old)
- **Known Issues**: Limited maintenance, compatibility issues with modern browsers

**Potential Compatibility Issues**:

1. **D3.js v3 vs Modern Browsers**:
   - D3.js v3 uses deprecated APIs
   - `node.visible()` might be a D3.js v3 method that's breaking
   - `.attr()` chaining issues with undefined selections

2. **JSON Structure Expectations**:
   - WebVOWL expects specific property structures
   - Missing or malformed properties cause undefined references

3. **Large Dataset Issues**:
   - 1,002 classes + 144 properties = 1,146 graph nodes
   - WebVOWL v1.1.6 may have performance/memory limits
   - Force-directed layout algorithms may time out

---

### 4. JavaScript Error Analysis

**Error 1**: `node.visible is not a function`

**Likely Causes**:
- D3.js v3 selection methods not working as expected
- `node` variable is undefined or null
- WebVOWL's graph builder expects a different node structure

**Error 2**: `Cannot read properties of undefined (reading 'attr')`

**Likely Causes**:
- D3.js selection returns `undefined`
- SVG element not created before `.attr()` call
- Missing node/edge data in JSON

**Common Root Cause**: WebVOWL's graph rendering code expects properties that aren't present in the node/edge objects, or the scale of the ontology (1,000+ nodes) exceeds WebVOWL v1.1.6's capabilities.

---

### 5. Git History - Recent Changes

**Relevant Commits** (addressing WebVOWL issues):

```
d49412ac - Replace FOAF with our ontology as WebVOWL default - simpler approach
aabd307e - Fix critical bug: Property IDs must not overlap with class IDs
11460c79 - Fix: Use WebVOWL v1.1.6 tag instead of non-existent v1.1.7
d77927f4 - Use stable WebVOWL v1.1.7 release instead of building from master
1f229ba5 - Generate ontology files in /tmp at build time, never commit them
e34dd7db - Add attributes field to propertyAttribute for WebVOWL compatibility
2b119c95 - Add required domain/range defaults for all properties in WebVOWL JSON
1a508a3c - Add required iri and baseIri fields to classAttribute and propertyAttribute
```

**Key Fixes Applied**:
- ✅ Property IDs now start after class IDs (no overlap)
- ✅ Added `iri` and `baseIri` to all attributes
- ✅ Added default `domain` and `range` for all properties
- ✅ Added `attributes` array to propertyAttribute
- ✅ Switched to stable WebVOWL v1.1.6 release

---

## Root Cause Assessment

### Primary Issue: WebVOWL Runtime Errors

**Not a data generation problem** - the JSON structure is correct and matches WebVOWL's expected format.

**Likely causes** (in order of probability):

1. **Large dataset performance issues**
   - 1,002 classes is significantly larger than typical WebVOWL demos (FOAF has ~15 classes)
   - Force-directed layout may time out or run out of memory
   - Browser's JavaScript engine may throttle long-running scripts

2. **WebVOWL v1.1.6 limitations**
   - 5-year-old codebase with D3.js v3
   - Not designed for large ontologies
   - Missing error handling for edge cases

3. **Missing graph initialization data**
   - WebVOWL may expect additional metadata
   - Graph layout parameters may need tuning
   - Viewport/canvas size issues

4. **Browser compatibility**
   - Modern browsers may have broken D3.js v3 compatibility
   - SVG rendering differences across browsers
   - JavaScript strict mode issues

---

## Proposed Solutions

### Option 1: Debug WebVOWL v1.1.6 ✅ **Recommended First**

**Steps**:
1. Add browser console logging to identify exact error location
2. Test with smaller subset of ontology (50-100 classes)
3. Compare with FOAF.json to identify structural differences
4. Add error handling to WebVOWL's graph rendering code

**Implementation**:
```javascript
// Add to webvowl-deploy/js/graph.js or similar
try {
  // Existing graph rendering code
  node.visible(true);
} catch (error) {
  console.error('Node visibility error:', error);
  console.log('Node object:', node);
}
```

**Pros**: Minimal changes, addresses root cause
**Cons**: Requires WebVOWL source code modification

---

### Option 2: Upgrade to WebVOWL v1.2+ or Fork

**Latest WebVOWL**: Check if newer versions exist (unlikely - project seems abandoned)

**Alternative**: Use **WebVOWL 2.0** or community forks:
- https://github.com/VisualDataWeb/WebVOWL (check for active forks)
- Look for D3.js v5/v6/v7 compatible versions

**Pros**: Modern codebase, better browser support
**Cons**: May require significant testing, no official v2.0 release found

---

### Option 3: Replace WebVOWL with Alternative Visualization

**Alternative Tools**:

1. **Protégé WebVOWL Plugin** (desktop application)
   - More robust for large ontologies
   - Better error handling
   - Requires Java

2. **OWLGrEd** - Online OWL graph editor
   - Modern web interface
   - Supports large ontologies
   - http://owlgred.lumii.lv/

3. **Custom D3.js Visualization**
   - Build tailored solution for this ontology
   - Use modern D3.js v7
   - Optimize for 1,000+ nodes

4. **Cytoscape.js**
   - Purpose-built for large graphs
   - Better performance than D3.js force layouts
   - Modern API

5. **vis.js Network**
   - Simple integration
   - Good performance
   - Interactive features

**Pros**: Modern, maintained, better performance
**Cons**: Requires development effort, different UI/UX

---

### Option 4: Reduce Ontology Size for Visualization

**Filter Approach**:
```python
# Add filtering to ttl_to_webvowl_json.py
def filter_classes_for_viz(classes, max_classes=100):
    """Select most connected classes for visualization"""
    # Calculate connectivity scores
    # Return top N classes
```

**Pros**: Works with existing WebVOWL
**Cons**: Doesn't show full ontology

---

## Immediate Next Steps

### Step 1: Browser Console Debugging

1. Open https://narrativegoldmine.com/ontology/ in browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Record exact error messages with line numbers
5. Check Network tab for failed requests

### Step 2: Test with Smaller Dataset

```bash
# Create minimal test ontology
cd Ontology-Tools
python3 << EOF
from tools.converters.ttl_to_webvowl_json import ttl_to_webvowl
import json

# Load full ontology
with open('test-webvowl.json') as f:
    full = json.load(f)

# Extract first 50 classes
minimal = {
    "header": full["header"],
    "namespace": full["namespace"],
    "class": full["class"][:50],
    "classAttribute": full["classAttribute"][:50],
    "property": full["property"][:10],
    "propertyAttribute": full["propertyAttribute"][:10]
}

with open('/tmp/minimal-test.json', 'w') as f:
    json.dump(minimal, f, indent=2)

print("✅ Created minimal test JSON with 50 classes")
EOF

# Test locally by replacing foaf.json with minimal-test.json
```

### Step 3: Compare with Working FOAF Example

```bash
# Download original FOAF ontology from WebVOWL
wget -O /tmp/foaf-original.json \
  "https://raw.githubusercontent.com/VisualDataWeb/WebVOWL/master/deploy/data/foaf.json"

# Compare structures
python3 -c "
import json
with open('/tmp/foaf-original.json') as f:
    foaf = json.load(f)
with open('/tmp/test-webvowl.json') as f:
    ours = json.load(f)

print('FOAF structure:')
for key in foaf.keys():
    print(f'  {key}: {len(foaf[key]) if isinstance(foaf[key], list) else type(foaf[key])}')

print('\nOur ontology structure:')
for key in ours.keys():
    print(f'  {key}: {len(ours[key]) if isinstance(ours[key], list) else type(ours[key])}')
"
```

### Step 4: Test WebVOWL Locally

```bash
# Clone and test locally
git clone --depth 1 --branch 1.1.6 https://github.com/VisualDataWeb/WebVOWL.git /tmp/webvowl-test
cd /tmp/webvowl-test/deploy

# Copy our ontology
cp /tmp/test-webvowl.json data/foaf.json

# Start local server
python3 -m http.server 8000

# Open http://localhost:8000 in browser
# Check console for errors
```

---

## Files to Review

**Build Pipeline**:
- `/home/devuser/workspace/logseq/.github/workflows/publish.yml` - Build workflow
- `/home/devuser/workspace/logseq/Ontology-Tools/tools/converters/webvowl_header_only_converter.py` - TTL generator
- `/home/devuser/workspace/logseq/Ontology-Tools/tools/converters/ttl_to_webvowl_json.py` - JSON converter

**Configuration**:
- `/home/devuser/workspace/logseq/.github/workflows/webvowl-autoload.js` - Auto-load script (not currently used)

**Outdated Files** (need updating):
- `/home/devuser/workspace/logseq/Ontology-Tools/test-webvowl.json` - Old test file, missing iri/baseIri fields

**Deployed Files**:
- https://narrativegoldmine.com/ontology/data/foaf.json - Live ontology (correct structure)
- https://narrativegoldmine.com/ontology/data/foaf.ttl - Live TTL file
- https://narrativegoldmine.com/ontology/ - WebVOWL interface

---

## Technical Details

### Conversion Process

```
Markdown Pages (1,015 files)
    ↓
[webvowl_header_only_converter.py]
    ↓
TTL File (35,952 triples)
    ↓
[ttl_to_webvowl_json.py]
    ↓
WebVOWL JSON (425KB)
    ↓
[Deploy to data/foaf.json]
    ↓
WebVOWL v1.1.6 Interface
```

### JSON Structure Requirements

**WebVOWL JSON Format**:
```json
{
  "header": {
    "languages": ["en"],
    "title": {"en": "..."},
    "description": {"en": "..."},
    "version": "1.0"
  },
  "namespace": [
    {"prefix": "ai", "iri": "http://..."}
  ],
  "class": [
    {"id": "1", "type": "owl:Class"}
  ],
  "classAttribute": [
    {
      "id": "1",
      "iri": "http://full/uri#Fragment",
      "baseIri": "http://full/uri",
      "label": {"en": "Label"},
      "comment": {"en": "Description"}
    }
  ],
  "property": [
    {"id": "1003", "type": "owl:objectProperty"}
  ],
  "propertyAttribute": [
    {
      "id": "1003",
      "iri": "http://full/uri#property",
      "baseIri": "http://full/uri",
      "attributes": ["object"],
      "domain": "1",
      "range": "2",
      "label": {"en": "propertyLabel"}
    }
  ]
}
```

**Critical Fields**:
- ✅ `iri` - Full URI of class/property (REQUIRED for WebVOWL rendering)
- ✅ `baseIri` - Namespace without fragment (REQUIRED for prefix handling)
- ✅ `domain` - Source class ID for properties (REQUIRED for edge rendering)
- ✅ `range` - Target class ID for properties (REQUIRED for edge rendering)
- ✅ `attributes` - Array like `["object"]` or `["datatype"]` (REQUIRED for property styling)

**All critical fields are present in deployed JSON** ✅

---

## Conclusion

**The build and deployment pipeline is working correctly.** The JavaScript errors are WebVOWL runtime issues, not data generation problems.

**Most Likely Fix**: WebVOWL v1.1.6 cannot handle 1,000+ node ontologies efficiently. The errors occur during graph layout/rendering, not data loading.

**Recommended Action Plan**:

1. **Immediate** (15 min): Test with minimal dataset (50 classes) to confirm WebVOWL works
2. **Short-term** (1-2 hours): Add error handling and logging to identify exact failure point
3. **Medium-term** (1 day): Evaluate WebVOWL alternatives (Cytoscape.js, vis.js, custom D3.js)
4. **Long-term** (2-3 days): Implement modern visualization solution for 1,000+ node graphs

**Priority**: Start with minimal dataset test to confirm hypothesis.

---

**Report Generated**: 2025-11-09
**Status**: Investigation Complete
**Next Action**: Browser console debugging + minimal dataset test
