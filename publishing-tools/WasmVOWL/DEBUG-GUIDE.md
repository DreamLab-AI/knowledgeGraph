# 🐛 WasmVOWL Force Simulation Debug Guide

## Overview

This guide explains how to use the comprehensive debugging infrastructure to diagnose and fix force-directed graph clustering issues.

## Quick Start

### Enable Debug Mode

**Option 1: URL Parameter**
```
http://localhost:5173/?debug=true
```

**Option 2: Debug Panel**
1. Click the "🐛 Debug" button in the top-right corner
2. Click "Enable All" to activate all logging
3. Open browser console to see logs

**Option 3: Console**
```javascript
// In browser console
window.wasmvowlDebug.enableAllLogging()
```

## Debug Features

### 1. Feature Flags

Control what gets logged:

```javascript
window.wasmvowlDebug.set({
  logForces: true,          // Log all force calculations
  logPositions: true,        // Log node positions
  logVelocities: true,       // Log node velocities
  logAlpha: true,            // Log simulation alpha
  logRepulsion: true,        // Log repulsion forces
  logAttraction: true,       // Log attraction forces
  logCentering: true,        // Log centering forces
  logBarnesHut: true,        // Log Barnes-Hut calculations
  logFPS: true,              // Log FPS
  logIterations: true,       // Log iteration count
  logNodeCount: true,        // Log node count
  logInterval: 10,           // Log every N iterations
  logPositionHistory: true,  // Track position history
  positionHistorySize: 100   // Keep last 100 positions
})
```

### 2. Distribution Analysis

**Console Commands:**
```javascript
// Log current node distribution
window.wasmvowlDebug.logDistribution('Current State', nodes)

// Calculate distribution statistics
const stats = window.wasmvowlDebug.calculateNodeDistribution(nodes)
console.log(stats)
// Output:
// {
//   centroid: {x, y},
//   minDist: number,
//   maxDist: number,
//   avgDist: number,
//   stdDev: number,
//   clusteredCount: number,  // Nodes within 100 units
//   spreadCount: number,     // Nodes beyond 500 units
//   clusteringPercentage: number,
//   spreadPercentage: number
// }
```

### 3. Position Export

Export node positions for analysis:

```javascript
// From Debug Panel: Click "Export Positions"
// Or from console:
const data = {
  timestamp: new Date().toISOString(),
  nodes: Array.from(nodes.values()).map(n => ({
    id: n.id,
    label: n.label,
    x: n.visual.x,
    y: n.visual.y,
    vx: n.visual.vx,
    vy: n.visual.vy
  }))
}

// Download as JSON
const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'})
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'positions.json'
a.click()
```

## Console Log Format

### Initialization
```
🔄 Initializing 1243 nodes in circular layout with radius 2000
📊 Initial Positions - Node Distribution (n=1243)
   Centroid: (0.0, 0.0)
   Distance: min=1998.4, max=2000.0, avg=1999.2
   Clustering: 0 nodes within 100 units (0.0%)
   Spread: 1243 nodes beyond 500 units (100.0%)
```

### Iteration Logs (every 10 iterations)
```
📊 Before Tick 0 - Node Distribution (n=1243)
📊 After Tick 0 - Node Distribution (n=1243)
⏱️ Iteration 0: alpha=1.0000, nodes=1243

🔗 Applied 2486 attraction forces between 1243 nodes (1243 edges in graph)
```

### Clustering Warning
```
⚠️ CLUSTERING DETECTED: 67.3% of nodes within 100 units of center!
```

## Debugging Workflow

### Step 1: Identify the Problem

1. Enable debug logging:
   ```javascript
   window.wasmvowlDebug.enableAllLogging()
   ```

2. Load the graph and observe initial state:
   ```
   🔄 Initializing 1243 nodes in circular layout with radius 2000
   ```

3. Watch for clustering warnings:
   ```
   ⚠️ CLUSTERING DETECTED: 67.3% of nodes within 100 units!
   ```

### Step 2: Analyze Forces

Check the console logs to understand what forces are being applied:

```
🔗 Applied 2486 attraction forces between 1243 nodes (1243 edges in graph)
```

**Questions to ask:**
- Are attraction forces being applied? (Should see "Applied N attraction forces")
- Are there enough edges? (Should match graph.edge_count())
- Is the circular initialization working? (All nodes should start at radius 2000)

### Step 3: Export and Analyze Positions

1. Click "Export Positions" in Debug Panel
2. Analyze the JSON file:
   ```javascript
   const data = require('./positions.json')

   // Calculate distances from center
   const distances = data.nodes.map(n =>
     Math.sqrt(n.x * n.x + n.y * n.y)
   )

   console.log('Min distance:', Math.min(...distances))
   console.log('Max distance:', Math.max(...distances))
   console.log('Avg distance:', distances.reduce((a,b) => a+b) / distances.length)

   // Count clustered nodes
   const clustered = distances.filter(d => d < 100).length
   console.log('Clustered nodes:', clustered, `(${(clustered/data.nodes.length*100).toFixed(1)}%)`)
   ```

### Step 4: Check Parameters

Verify simulation parameters are correct:

```javascript
// In browser console after WASM loads
// Should see:
⚙️ Initial simulation parameters: {
  linkDistance: 250,
  chargeStrength: -2000,
  gravity: 0.01,
  friction: 0.6
}
```

## Common Issues and Solutions

### Issue: Nodes Start Clustered

**Symptom:**
```
📊 Initial Positions - Node Distribution (n=1243)
   Clustering: 1200 nodes within 100 units (96.5%)
```

**Solution:**
Check initialization radius. Should be 2000:
```rust
// In rust-wasm/src/layout/simulation.rs
let radius = 2000.0;
```

### Issue: No Attraction Forces

**Symptom:**
```
🔗 Applied 0 attraction forces between 1243 nodes (0 edges in graph)
```

**Solution:**
Graph edges are not being loaded. Check:
1. `useWasmSimulation.ts` - propertyAttribute array
2. Console logs for "Loading N nodes, M edges"

### Issue: Parameters Not Applied

**Symptom:**
Parameters in console don't match configured values.

**Solution:**
1. Check you're loading local WASM, not npm package:
   ```typescript
   // Should be:
   import('../../../rust-wasm/pkg/webvowl_wasm.js')
   // NOT:
   import('narrativegoldmine-webvowl-wasm')
   ```

2. Rebuild WASM: `cd rust-wasm && wasm-pack build --target web --release`
3. Restart dev server: `cd modern && npm run dev`

### Issue: Nodes Collapse to Center Over Time

**Symptom:**
```
📊 After Tick 100 - Node Distribution (n=1243)
   Avg distance: 45.3
   Clustering: 95.2%
```

**Possible Causes:**
1. **Center force too strong** - Should be 0.001, not 1.0
2. **Charge strength too weak** - Should be -2000, not -500
3. **Attraction forces overpowering repulsion** - Check edge count

**Debug Steps:**
```javascript
// 1. Check parameters
window.wasmvowlDebug.get()

// 2. Watch forces over time
window.wasmvowlDebug.set({ logForces: true, logInterval: 1 })

// 3. Track specific nodes
window.wasmvowlDebug.set({
  trackNodes: ['node1', 'node2', 'node3'],
  logPositionHistory: true
})

// 4. View position history
window.wasmvowlDebug.getPositionHistory('node1')
```

## Advanced Debugging

### Track Specific Nodes

```javascript
// Track 3 nodes throughout simulation
window.wasmvowlDebug.set({
  trackNodes: ['123', '456', '789'],
  logPositionHistory: true,
  positionHistorySize: 1000
})

// Later, analyze their movement
const history = window.wasmvowlDebug.getPositionHistory('123')
console.log(history)
// [{x, y, iteration}, ...]
```

### Visualize Quadtree (Future Feature)

```javascript
window.wasmvowlDebug.set({
  showQuadtree: true  // Coming soon
})
```

### Performance Profiling

```javascript
window.wasmvowlDebug.set({
  logFPS: true,
  logIterations: true
})

// Check console for:
// ⏱️ Iteration 100: alpha=0.7234, nodes=1243
// 📊 FPS: 60.2
```

## Test Files

### Sample Small Graph

Create `public/test-data/small-graph.json`:
```json
{
  "header": {"title": {"en": "Test"}},
  "namespace": [],
  "class": [
    {"id": "1", "type": "owl:Class"},
    {"id": "2", "type": "owl:Class"},
    {"id": "3", "type": "owl:Class"}
  ],
  "classAttribute": [
    {"id": "1", "label": {"en": "Node 1"}},
    {"id": "2", "label": {"en": "Node 2"}},
    {"id": "3", "label": {"en": "Node 3"}}
  ],
  "property": [
    {"id": "p1", "type": "owl:ObjectProperty"}
  ],
  "propertyAttribute": [
    {"id": "p1", "domain": "1", "range": "2", "label": {"en": "connects"}}
  ]
}
```

Load and test:
1. Open http://localhost:5173
2. Drop `small-graph.json` onto the drop zone
3. Enable debug logging
4. Observe force calculations with just 3 nodes

## Interpreting Results

### Good Distribution
```
📊 Node Distribution (n=1243)
   Centroid: (2.3, -1.8)       ✅ Near origin
   Distance: min=458.2, max=1823.5, avg=982.4
   Clustering: 12 nodes within 100 units (1.0%)  ✅ < 5%
   Spread: 843 nodes beyond 500 units (67.8%)    ✅ > 50%
```

### Bad Distribution (Clustering)
```
📊 Node Distribution (n=1243)
   Centroid: (0.1, 0.0)
   Distance: min=2.3, max=87.4, avg=45.2
   Clustering: 1200 nodes within 100 units (96.5%)  ⚠️ > 50%
   Spread: 0 nodes beyond 500 units (0.0%)          ⚠️ < 10%
```

## Integration with GitHub Actions

To debug deployed version:

1. Add debug query param to deployed URL:
   ```
   https://narrativegoldmine.com/?debug=true
   ```

2. Check for console logs showing parameter application

3. Use Debug Panel to verify parameters match code

## Support

If debugging reveals issues, please provide:

1. Console logs (copy full output)
2. Exported positions JSON
3. Distribution statistics
4. Browser and OS version
5. WASM file size and build date

---

**Last Updated:** 2025-11-14
**WASM Size:** 215K
**Build Time:** 0.30s
