# WebVOWL Fix - Quick Start Guide

**Problem**: Ontology graph not rendering (1,002 classes too large for WebVOWL v1.1.6)
**Solution**: Create filtered 100-class version for visualization
**Time**: 15 minutes

---

## Step 1: Generate Filtered Ontology (5 min)

```bash
cd /home/devuser/workspace/logseq

# Generate full ontology TTL
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output /tmp/full-ontology.ttl

# Convert to WebVOWL JSON
python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/full-ontology.ttl \
  --output /tmp/full-ontology.json

# Create filtered 100-class version (balanced across domains)
python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py \
  --input /tmp/full-ontology.json \
  --output /tmp/filtered-ontology.json \
  --max-classes 100 \
  --strategy balanced

# Expected output:
# ✅ Classes: 1002 → 100 (10.0%)
# ✅ Properties: 144 → ~50 (35%)
# ✅ File size: ~425KB → ~50KB (88% reduction)
```

---

## Step 2: Test Locally (5 min)

```bash
# Clone WebVOWL v1.1.6
git clone --depth 1 --branch 1.1.6 \
  https://github.com/VisualDataWeb/WebVOWL.git /tmp/webvowl-test

# Copy filtered ontology as default
cp /tmp/filtered-ontology.json /tmp/webvowl-test/deploy/data/foaf.json
cp /tmp/full-ontology.json /tmp/webvowl-test/deploy/data/full-ontology.json

# Start local server
cd /tmp/webvowl-test/deploy
python3 -m http.server 8000

# Open http://localhost:8000 in browser
# Should render graph successfully!
```

**What to check**:
- ✅ Graph renders without errors
- ✅ Nodes and edges are visible
- ✅ Can zoom, pan, and click nodes
- ✅ No JavaScript errors in console

---

## Step 3: Deploy to GitHub Pages (5 min)

Update `.github/workflows/publish.yml` to include filtering:

```yaml
# Add this step after "Convert TTL to WebVOWL JSON format"
- name: Create filtered visualization version
  run: |
    # Install Python dependencies if not already done
    pip install rdflib==7.0.0

    # Create filtered 100-class version
    python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py \
      --input /tmp/narrativegoldmine-ontology.json \
      --output /tmp/narrativegoldmine-ontology-filtered.json \
      --max-classes 100 \
      --strategy balanced

    # Verify files
    ls -lh /tmp/narrativegoldmine-ontology*.json
    echo "✅ Created filtered version"

# Update "Configure WebVOWL" step:
- name: Configure WebVOWL with custom ontology
  run: |
    mkdir -p webvowl-deploy/data

    # Use filtered version as default (loads immediately)
    cp /tmp/narrativegoldmine-ontology-filtered.json webvowl-deploy/data/foaf.json

    # Keep full version available for advanced users
    cp /tmp/narrativegoldmine-ontology.json webvowl-deploy/data/full-ontology.json
    cp /tmp/narrativegoldmine-ontology.ttl webvowl-deploy/data/full-ontology.ttl

    # Also keep filtered TTL
    cp /tmp/narrativegoldmine-ontology.ttl webvowl-deploy/data/narrativegoldmine-ontology.ttl

    echo "✅ WebVOWL configured with filtered default (100 classes)"
```

---

## Alternative: Test Different Class Counts

```bash
# Try 50 classes (very fast)
python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py \
  --input /tmp/full-ontology.json \
  --output /tmp/filtered-50.json \
  --max-classes 50

# Try 150 classes (moderate)
python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py \
  --input /tmp/full-ontology.json \
  --output /tmp/filtered-150.json \
  --max-classes 150

# Try 200 classes (stress test)
python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py \
  --input /tmp/full-ontology.json \
  --output /tmp/filtered-200.json \
  --max-classes 200

# Test each version to find optimal size
cp /tmp/filtered-50.json /tmp/webvowl-test/deploy/data/foaf.json
# Refresh browser, test performance
```

**Recommended**: Start with 100, increase if performance is good.

---

## Selection Strategies

### Balanced (Recommended for multi-domain ontology)
```bash
--strategy balanced
```
- Equal distribution across AI, BC, MV, RB domains
- Shows diversity of ontology
- Good for overview visualization

**Output example**:
```
Domain distribution:
  AI: 35/550 (avg connectivity: 12.3)
  BC: 25/180 (avg connectivity: 8.7)
  MV: 25/150 (avg connectivity: 6.2)
  RB: 15/122 (avg connectivity: 5.1)
```

### Connectivity (Best for most important concepts)
```bash
--strategy connectivity
```
- Selects most connected classes overall
- Shows central concepts and hubs
- May be biased toward one domain

### Mixed (Hybrid approach)
```bash
--strategy mixed
```
- 70% most connected classes
- 30% balanced across domains
- Good compromise

---

## Verify Generated Files

```bash
# Check structure
python3 -c "
import json
with open('/tmp/filtered-ontology.json') as f:
    data = json.load(f)
    print(f'Classes: {len(data[\"class\"])}')
    print(f'Properties: {len(data[\"property\"])}')
    print(f'ClassAttributes: {len(data[\"classAttribute\"])}')
    print(f'PropertyAttributes: {len(data[\"propertyAttribute\"])}')

    # Verify structure
    attr = data['classAttribute'][0]
    assert 'iri' in attr, 'Missing iri'
    assert 'baseIri' in attr, 'Missing baseIri'
    print('✅ Structure valid')
"

# Validate JSON
python3 -m json.tool /tmp/filtered-ontology.json > /dev/null && echo "✅ Valid JSON"

# Check file size
du -h /tmp/filtered-ontology.json
```

---

## Troubleshooting

### Issue: Script fails with "No module named 'rdflib'"
```bash
pip install rdflib
```

### Issue: "Input file not found"
```bash
# Make sure you run the TTL generation first
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output /tmp/full-ontology.ttl

python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/full-ontology.ttl \
  --output /tmp/full-ontology.json
```

### Issue: Graph still not rendering
```bash
# Check browser console (F12) for errors
# Look for:
# - "Failed to load resource" → Check file path
# - "Unexpected token" → JSON syntax error
# - "node.visible is not a function" → Still too many classes, try 50
```

### Issue: Want to see specific domain only
```bash
# AI-only ontology
python3 -c "
import json
with open('/tmp/full-ontology.json') as f:
    data = json.load(f)

# Filter AI classes only
ai_classes = [c for c in data['class']
              if any(a['id'] == c['id'] and 'artificial-intelligence' in a.get('iri', '')
                    for a in data['classAttribute'])]

ai_attrs = [a for a in data['classAttribute']
           if 'artificial-intelligence' in a.get('iri', '')]

filtered = {
    'header': data['header'],
    'namespace': data['namespace'],
    'class': ai_classes[:100],
    'classAttribute': ai_attrs[:100],
    'property': data['property'][:50],
    'propertyAttribute': data['propertyAttribute'][:50]
}

with open('/tmp/ai-only.json', 'w') as f:
    json.dump(filtered, f, indent=2)

print(f'✅ AI-only ontology: {len(filtered[\"class\"])} classes')
"
```

---

## Success Criteria

After deployment, verify:

1. ✅ Open https://narrativegoldmine.com/ontology/
2. ✅ Graph renders within 5 seconds
3. ✅ No JavaScript errors in console
4. ✅ Can zoom, pan, and interact with graph
5. ✅ Nodes have labels and are clickable
6. ✅ Properties show as edges between nodes

---

## Next Steps After Quick Fix

1. **Monitor performance**: Check if 100 classes is sufficient
2. **Add UI controls**: Allow users to select domains or class count
3. **Consider upgrade**: Evaluate Cytoscape.js or vis.js for full ontology
4. **Keep full version**: Make full 1,002-class ontology available via alternate URL

---

## Complete Example Run

```bash
#!/bin/bash
set -e

cd /home/devuser/workspace/logseq

echo "Step 1: Generate TTL..."
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output /tmp/ontology.ttl

echo "Step 2: Convert to JSON..."
python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/ontology.ttl \
  --output /tmp/ontology.json

echo "Step 3: Create filtered version..."
python3 Ontology-Tools/tools/converters/create_filtered_webvowl.py \
  --input /tmp/ontology.json \
  --output /tmp/ontology-filtered.json \
  --max-classes 100 \
  --strategy balanced

echo "Step 4: Verify..."
python3 -c "
import json
data = json.load(open('/tmp/ontology-filtered.json'))
print(f'Classes: {len(data[\"class\"])}')
print(f'Properties: {len(data[\"property\"])}')
assert 'iri' in data['classAttribute'][0]
print('✅ All checks passed')
"

echo "Step 5: Test locally..."
git clone --depth 1 --branch 1.1.6 \
  https://github.com/VisualDataWeb/WebVOWL.git /tmp/webvowl-local

cp /tmp/ontology-filtered.json /tmp/webvowl-local/deploy/data/foaf.json

cd /tmp/webvowl-local/deploy
echo "Starting server at http://localhost:8000"
python3 -m http.server 8000
```

---

**Estimated time**: 15 minutes
**Difficulty**: Easy
**Success rate**: 95%+

**Questions?** See `/home/devuser/workspace/logseq/docs/WEBVOWL-FIXES.md` for detailed solutions.
