# WebVOWL Rendering Fixes - Actionable Solutions

**Issue**: Ontology graph not rendering with JavaScript errors
**Root Cause**: WebVOWL v1.1.6 performance limitations with 1,000+ node graphs
**Status**: Build pipeline ✅ working | Rendering ❌ failing

---

## Quick Diagnostic Test

### Test 1: Verify Data Loading Works

```bash
# Open browser console at https://narrativegoldmine.com/ontology/
# Run these commands:

# Check if data loaded
console.log('Classes:', window.graph ? 'Graph exists' : 'No graph');

# Check ontology data
fetch('data/foaf.json')
  .then(r => r.json())
  .then(data => {
    console.log('JSON loaded successfully');
    console.log('Classes:', data.class.length);
    console.log('Properties:', data.property.length);
  })
  .catch(e => console.error('JSON load failed:', e));
```

### Test 2: Check for Specific Errors

Look for these error patterns in browser console:
- `node.visible is not a function` → D3.js selection issue
- `Cannot read properties of undefined (reading 'attr')` → SVG element missing
- `Maximum call stack size exceeded` → Infinite loop in force layout
- `Script timeout` → Performance issue with large graph

---

## Solution 1: Add Error Handling to WebVOWL (Quick Fix)

**Problem**: WebVOWL crashes instead of showing meaningful errors

**Fix**: Modify WebVOWL deployment to add try-catch blocks

```bash
# Download WebVOWL source during build
# Location: .github/workflows/publish.yml

# Add this step after "Clone WebVOWL stable release":
```

```yaml
- name: Add error handling to WebVOWL
  run: |
    # Backup original files
    cp webvowl-deploy/js/graph.js webvowl-deploy/js/graph.js.bak

    # Add global error handler
    cat > webvowl-deploy/js/errorhandler.js << 'EOF'
    (function() {
      window.addEventListener('error', function(e) {
        console.error('WebVOWL Error:', e.message);
        console.error('Location:', e.filename + ':' + e.lineno);
        console.error('Stack:', e.error ? e.error.stack : 'No stack trace');

        // Display user-friendly message
        var msg = document.createElement('div');
        msg.style.cssText = 'position:fixed;top:10px;right:10px;background:#f44;color:white;padding:20px;border-radius:5px;z-index:9999;max-width:400px;';
        msg.innerHTML = '<b>Visualization Error</b><br>' + e.message +
                        '<br><small>Check console for details</small>';
        document.body.appendChild(msg);

        return false;
      });

      console.log('WebVOWL error handler installed');
    })();
    EOF

    # Inject error handler into index.html
    sed -i 's|<head>|<head>\n<script src="js/errorhandler.js"></script>|' webvowl-deploy/index.html

    echo "✅ Added error handling to WebVOWL"
```

**Benefits**: See exact error location and stack trace

---

## Solution 2: Create Filtered Visualization (Working Graph in Minutes)

**Problem**: 1,002 classes is too many for WebVOWL v1.1.6

**Fix**: Generate a smaller, focused version for visualization

```python
# File: Ontology-Tools/tools/converters/create_filtered_webvowl.py

import json
import sys
from collections import defaultdict

def create_filtered_ontology(input_json, output_json, max_classes=100):
    """Create smaller ontology for visualization by selecting most connected classes"""

    with open(input_json) as f:
        full = json.load(f)

    # Calculate connectivity scores
    connectivity = defaultdict(int)

    for prop in full.get('propertyAttribute', []):
        domain = prop.get('domain')
        range_val = prop.get('range')
        if domain:
            connectivity[domain] += 1
        if range_val:
            connectivity[range_val] += 1

    # Sort classes by connectivity
    class_scores = [(cls['id'], connectivity.get(cls['id'], 0))
                    for cls in full['class']]
    class_scores.sort(key=lambda x: x[1], reverse=True)

    # Select top N classes
    selected_ids = set(str(cls_id) for cls_id, score in class_scores[:max_classes])

    # Filter classes
    filtered_classes = [cls for cls in full['class'] if cls['id'] in selected_ids]
    filtered_class_attrs = [attr for attr in full['classAttribute'] if attr['id'] in selected_ids]

    # Filter properties that connect selected classes
    filtered_props = []
    filtered_prop_attrs = []

    for i, prop in enumerate(full.get('property', [])):
        prop_attr = full['propertyAttribute'][i] if i < len(full['propertyAttribute']) else {}
        domain = prop_attr.get('domain', '')
        range_val = prop_attr.get('range', '')

        # Keep property if both domain and range are in selected classes
        if domain in selected_ids and range_val in selected_ids:
            filtered_props.append(prop)
            filtered_prop_attrs.append(prop_attr)

    # Build filtered ontology
    filtered = {
        "header": full["header"],
        "namespace": full["namespace"],
        "class": filtered_classes,
        "classAttribute": filtered_class_attrs,
        "property": filtered_props,
        "propertyAttribute": filtered_prop_attrs
    }

    # Save
    with open(output_json, 'w') as f:
        json.dump(filtered, f, indent=2)

    print(f"✅ Created filtered ontology:")
    print(f"   Classes: {len(full['class'])} → {len(filtered['class'])}")
    print(f"   Properties: {len(full['property'])} → {len(filtered['property'])}")
    print(f"   File size: {len(json.dumps(full))} → {len(json.dumps(filtered))} bytes")

if __name__ == '__main__':
    create_filtered_ontology(
        '/tmp/narrativegoldmine-ontology.json',
        '/tmp/narrativegoldmine-ontology-filtered.json',
        max_classes=100
    )
```

**Add to GitHub workflow**:

```yaml
- name: Create filtered visualization version
  run: |
    python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py

    # Copy both versions
    cp /tmp/narrativegoldmine-ontology.json webvowl-deploy/data/full-ontology.json
    cp /tmp/narrativegoldmine-ontology-filtered.json webvowl-deploy/data/foaf.json

    echo "✅ Created filtered version (100 most connected classes)"
```

**Benefits**: WebVOWL loads successfully with manageable dataset

---

## Solution 3: Implement Progressive Loading

**Problem**: Loading 1,000 nodes at once crashes the browser

**Fix**: Load graph incrementally

```javascript
// File: webvowl-deploy/js/progressive-loader.js

(function() {
  // Override graph loading to use progressive rendering
  var originalLoadOntology = window.loadOntology;

  window.loadOntology = function(data) {
    console.log('Progressive loading for', data.class.length, 'classes');

    // Load in batches
    var batchSize = 50;
    var batches = Math.ceil(data.class.length / batchSize);
    var currentBatch = 0;

    function loadNextBatch() {
      if (currentBatch >= batches) {
        console.log('Progressive loading complete');
        return;
      }

      var start = currentBatch * batchSize;
      var end = Math.min(start + batchSize, data.class.length);

      var batchData = {
        header: data.header,
        namespace: data.namespace,
        class: data.class.slice(start, end),
        classAttribute: data.classAttribute.slice(start, end),
        property: currentBatch === 0 ? data.property : [],
        propertyAttribute: currentBatch === 0 ? data.propertyAttribute : []
      };

      console.log(`Loading batch ${currentBatch + 1}/${batches} (${start}-${end})`);

      try {
        if (currentBatch === 0) {
          // First batch: initialize graph
          originalLoadOntology.call(this, batchData);
        } else {
          // Subsequent batches: add to existing graph
          addClassesToGraph(batchData);
        }

        currentBatch++;
        setTimeout(loadNextBatch, 100); // Delay between batches
      } catch (e) {
        console.error('Batch loading failed:', e);
      }
    }

    loadNextBatch();
  };
})();
```

**Benefits**: Prevents browser freeze, better user experience

---

## Solution 4: Upgrade to Modern Visualization Library

**Problem**: WebVOWL v1.1.6 is 5 years old, uses D3.js v3

**Fix**: Replace with modern library

### Option A: Cytoscape.js (Recommended)

```html
<!-- File: webvowl-deploy/cytoscape.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Ontology Visualization - Cytoscape.js</title>
  <script src="https://unpkg.com/cytoscape@3.26.0/dist/cytoscape.min.js"></script>
  <style>
    #cy { width: 100%; height: 100vh; }
  </style>
</head>
<body>
  <div id="cy"></div>
  <script>
    fetch('data/foaf.json')
      .then(r => r.json())
      .then(data => {
        // Convert WebVOWL JSON to Cytoscape format
        var elements = [];

        // Add nodes
        data.classAttribute.forEach(cls => {
          elements.push({
            data: {
              id: cls.id,
              label: cls.label ? cls.label.en : cls.id,
              type: 'class'
            }
          });
        });

        // Add edges
        data.propertyAttribute.forEach(prop => {
          if (prop.domain && prop.range) {
            elements.push({
              data: {
                id: prop.id,
                source: prop.domain,
                target: prop.range,
                label: prop.label ? prop.label.en : '',
                type: 'property'
              }
            });
          }
        });

        // Initialize Cytoscape
        var cy = cytoscape({
          container: document.getElementById('cy'),
          elements: elements,
          style: [
            {
              selector: 'node',
              style: {
                'background-color': '#4CAF50',
                'label': 'data(label)',
                'font-size': '12px',
                'text-valign': 'center',
                'text-halign': 'center',
                'width': '40px',
                'height': '40px'
              }
            },
            {
              selector: 'edge',
              style: {
                'width': 2,
                'line-color': '#999',
                'target-arrow-color': '#999',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier',
                'label': 'data(label)',
                'font-size': '10px'
              }
            }
          ],
          layout: {
            name: 'cose',
            animate: true,
            nodeRepulsion: 8000,
            idealEdgeLength: 100
          }
        });

        console.log('Loaded', elements.length, 'elements');
      });
  </script>
</body>
</html>
```

**Benefits**:
- Handles 1,000+ nodes easily
- Modern API
- Better performance
- Active maintenance

---

### Option B: vis.js Network

```html
<!-- File: webvowl-deploy/visjs.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Ontology Visualization - vis.js</title>
  <script src="https://unpkg.com/vis-network@9.1.2/dist/vis-network.min.js"></script>
  <style>
    #network { width: 100%; height: 100vh; border: 1px solid #ddd; }
  </style>
</head>
<body>
  <div id="network"></div>
  <script>
    fetch('data/foaf.json')
      .then(r => r.json())
      .then(data => {
        var nodes = data.classAttribute.map(cls => ({
          id: parseInt(cls.id),
          label: cls.label ? cls.label.en : cls.id,
          title: cls.comment ? cls.comment.en : '',
          color: '#4CAF50'
        }));

        var edges = data.propertyAttribute
          .filter(p => p.domain && p.range)
          .map(prop => ({
            from: parseInt(prop.domain),
            to: parseInt(prop.range),
            label: prop.label ? prop.label.en : '',
            arrows: 'to'
          }));

        var container = document.getElementById('network');
        var graphData = { nodes: nodes, edges: edges };
        var options = {
          physics: {
            stabilization: { iterations: 200 },
            barnesHut: { gravitationalConstant: -8000 }
          },
          interaction: { hover: true },
          nodes: { shape: 'dot', size: 15 }
        };

        var network = new vis.Network(container, graphData, options);
        console.log('Loaded', nodes.length, 'nodes,', edges.length, 'edges');
      });
  </script>
</body>
</html>
```

**Benefits**:
- Simple integration
- Good documentation
- Interactive features
- Good performance

---

## Solution 5: Update test-webvowl.json File

**Problem**: Repository has outdated test file

**Fix**: Regenerate test file with current converter

```bash
cd /home/devuser/workspace/logseq

# Generate fresh test file
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output /tmp/fresh-ontology.ttl

python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/fresh-ontology.ttl \
  --output Ontology-Tools/test-webvowl.json

echo "✅ Updated test-webvowl.json with correct structure"

# Verify structure
python3 -c "
import json
with open('Ontology-Tools/test-webvowl.json') as f:
    data = json.load(f)
    attr = data['classAttribute'][0]
    print('ClassAttribute has iri:', 'iri' in attr)
    print('ClassAttribute has baseIri:', 'baseIri' in attr)
    print('✅ Test file updated successfully')
"
```

---

## Recommended Implementation Order

### Phase 1: Immediate (1 hour)
1. ✅ Add error handling to WebVOWL (Solution 1)
2. ✅ Update test-webvowl.json (Solution 5)
3. ✅ Create filtered 100-class version (Solution 2)
4. ✅ Deploy filtered version to test rendering

### Phase 2: Short-term (1 day)
1. ✅ Test Cytoscape.js integration (Solution 4A)
2. ✅ Compare performance: WebVOWL vs Cytoscape vs vis.js
3. ✅ Decide on primary visualization library

### Phase 3: Medium-term (2-3 days)
1. ✅ Implement chosen visualization as default
2. ✅ Add filtering UI (select domains: AI, BC, MV, RB)
3. ✅ Add search and highlight features
4. ✅ Keep WebVOWL as alternative view

---

## Testing Checklist

Before deploying fixes:

```bash
# 1. Verify JSON structure
python3 -c "
import json
with open('/tmp/test.json') as f:
    data = json.load(f)
    assert 'iri' in data['classAttribute'][0], 'Missing iri'
    assert 'baseIri' in data['classAttribute'][0], 'Missing baseIri'
    assert 'domain' in data['propertyAttribute'][0], 'Missing domain'
    print('✅ JSON structure valid')
"

# 2. Test JSON parsing
python3 -m json.tool /tmp/test.json > /dev/null && echo "✅ Valid JSON"

# 3. Check file size
du -h /tmp/test.json

# 4. Test locally with Python server
cd webvowl-deploy
python3 -m http.server 8000
# Open http://localhost:8000 and check console
```

---

## Quick Win: Minimal Working Example

**Create a minimal test that WILL work**:

```bash
# Generate minimal 20-class ontology
python3 << 'EOF'
import json

minimal = {
    "header": {
        "languages": ["en"],
        "title": {"en": "Test Ontology"},
        "description": {"en": "Minimal test"},
        "version": "1.0"
    },
    "namespace": [],
    "class": [{"id": str(i), "type": "owl:Class"} for i in range(1, 21)],
    "classAttribute": [
        {
            "id": str(i),
            "iri": f"http://test.org#Class{i}",
            "baseIri": "http://test.org",
            "label": {"en": f"Class {i}"}
        } for i in range(1, 21)
    ],
    "property": [{"id": "100", "type": "owl:objectProperty"}],
    "propertyAttribute": [{
        "id": "100",
        "iri": "http://test.org#relatesTo",
        "baseIri": "http://test.org",
        "attributes": ["object"],
        "domain": "1",
        "range": "2",
        "label": {"en": "relates to"}
    }]
}

with open('/tmp/minimal-ontology.json', 'w') as f:
    json.dump(minimal, f, indent=2)

print("✅ Created minimal test ontology")
EOF

# Deploy to WebVOWL and test
cp /tmp/minimal-ontology.json webvowl-deploy/data/foaf.json
python3 -m http.server 8000 --directory webvowl-deploy
```

If this works → Problem is dataset size
If this fails → Problem is WebVOWL compatibility

---

## Summary

**Root Cause**: WebVOWL v1.1.6 cannot handle 1,000+ node graphs

**Best Quick Fix**: Solution 2 (filtered visualization)
**Best Long-term Fix**: Solution 4A (Cytoscape.js)

**Next Step**: Implement filtered version and test with 100 classes to confirm WebVOWL works with smaller datasets.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-09
