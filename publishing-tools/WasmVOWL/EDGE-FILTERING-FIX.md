# Edge Filtering Fix

## Problem Identified

From the console logs at narrativegoldmine.com:

```
Ontology data loaded: {classes: 1243, properties: 46}
[useGraphStore] Loaded 1243 nodes, 36 edges from 46 properties
Failed to load ontology into WASM: Failed to parse ontology: Missing domain for property: 1244
```

**Root Cause:**
- The ontology has 46 properties defined
- Only 36 valid edges were created (10 properties reference non-existent nodes)
- WASM parser received all 46 properties but couldn't find nodes for 10 of them
- Specifically, property 1244 has no valid domain node

## The Fix

### Before (Broken)
```typescript
property: Array.from(edges.values())
  .filter((e) => e.source && e.target)  // Only checks if fields exist
  .map((e) => ({ id: e.id, type: ... }))
```

**Problem:** Just checking `e.source && e.target` only verifies the fields exist, not that the referenced nodes exist in the graph.

### After (Fixed)
```typescript
// Create Set of valid node IDs for O(1) lookup
const nodeIds = new Set(Array.from(nodes.values()).map(n => n.id));

// Filter edges where BOTH source AND target nodes exist
const validEdges = Array.from(edges.values()).filter((e) => {
  const hasSource = e.source && nodeIds.has(e.source);
  const hasTarget = e.target && nodeIds.has(e.target);

  if (!hasSource || !hasTarget) {
    console.warn(`Skipping edge ${e.id}: source=${e.source} (exists: ${hasSource}), target=${e.target} (exists: ${hasTarget})`);
  }

  return hasSource && hasTarget;
});

property: validEdges.map(...)
propertyAttribute: validEdges.map(...)
```

## What This Fixes

1. **Validates node existence** - Ensures both source and target nodes exist before including edge
2. **Logs skipped edges** - Shows which properties reference missing nodes
3. **Prevents WASM errors** - Only sends valid data to WASM parser
4. **O(1) lookup** - Uses Set for efficient node ID checking

## Expected New Console Output

```
[useWasmSimulation] Skipping edge 1244: source=undefined (exists: false), target=... (exists: ...)
[useWasmSimulation] Skipping edge 1245: source=... (exists: true), target=undefined (exists: false)
... (repeat for ~10 invalid edges)
[useWasmSimulation] Filtered edges: 36 valid out of 46 total
[useWasmSimulation] Loading 1243 nodes, 36 edges into WASM
[useWasmSimulation] Sample property: {
  id: "1",
  domain: "123",
  range: "456",
  domainType: "string",
  rangeType: "string"
}
✅ WASM module initialized
🔄 Initializing 1243 nodes in circular layout with radius 2000
```

## Why This Matters

Without this fix:
- ❌ WASM fails to parse ontology
- ❌ No force simulation runs
- ❌ Blank graph or error state

With this fix:
- ✅ Only valid edges sent to WASM
- ✅ Force simulation starts successfully
- ✅ Can now debug actual clustering issue
- ✅ Logs show which properties were invalid

## Testing

### Local (http://localhost:5174/?debug=true)
Look for:
```
[useWasmSimulation] Filtered edges: 19 valid out of 19 total  ✅ (all valid in test graph)
```

### Deployed (https://narrativegoldmine.com/?debug=true)
Look for:
```
[useWasmSimulation] Skipping edge X: ...
[useWasmSimulation] Filtered edges: 36 valid out of 46 total
✅ WASM module initialized
🔄 Initializing 1243 nodes in circular layout with radius 2000
```

If you see initialization messages, the fix worked!

## Next Steps

Once this is deployed and WASM loads successfully:

1. **Verify force simulation starts**
   ```
   🔗 Applied 36 attraction forces between 1243 nodes (36 edges)
   ```

2. **Watch for clustering**
   ```
   📊 After Tick 10 - Node Distribution
      Clustering: X%
   ```

3. **Export positions to analyze**
   - Click "Export Positions" in Debug Panel
   - Check if nodes stay spread or collapse

4. **Determine root cause of clustering**
   - Is it happening immediately (initialization bug)?
   - Or over time (force imbalance)?
   - Which forces are strongest?

---

**Deployed:** Pending GitHub Actions
**Build Time:** 8.05s
**Bundle Size:** 595 KB main, 220 KB WASM
