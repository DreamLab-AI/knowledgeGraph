# Local Testing Guide

## ✅ Fixed: "Not valid JSON" Error

The error occurred because `ontology.json` is generated during GitHub Actions deployment but didn't exist in the local dev environment.

**Solution:** Created a small test graph (20 nodes, 19 edges) at `public/data/ontology.json`

## 🚀 Test the Debug Infrastructure Now

### Open the App
```
http://localhost:5174/?debug=true
```

This will:
- Auto-enable all debug logging
- Load the 20-node test graph
- Show detailed console output

### Expected Console Output

```
✅ WASM module initialized
⚙️ Initial simulation parameters: {
  linkDistance: 250,
  chargeStrength: -2000,
  gravity: 0.01,
  friction: 0.6
}

🔄 Initializing 20 nodes in circular layout with radius 2000
📊 Initial Positions - Node Distribution (n=20)
   Centroid: (0.0, 0.0)
   Distance: min=1998.4, max=2000.0, avg=1999.2
   Clustering: 0 nodes within 100 units (0.0%)  ✅ Good!
   Spread: 20 nodes beyond 500 units (100.0%)   ✅ Good!

[useWasmSimulation] Loading 20 nodes, 19 edges into WASM
🔗 Applied 19 attraction forces between 20 nodes (19 edges in graph)

⏱️ Iteration 10: alpha=0.8234, nodes=20
📊 After Tick 10 - Node Distribution (n=20)
   Clustering: 5.0%  ✅ or ⚠️ if it's high
```

### Debug Panel Features

1. **Click "🐛 Debug" button** (top-right corner)

2. **Quick Actions:**
   - **Enable All** - Turn on all logging
   - **Log Distribution** - Show current node statistics
   - **Export Positions** - Download positions.json

3. **Toggle Individual Logs:**
   - Force calculations
   - Positions before/after
   - Velocities
   - Repulsion/attraction/centering
   - Barnes-Hut quadtree
   - FPS and iterations

### What to Check

1. **Initialization** ✓
   - All nodes start at radius 2000?
   - Clustering is 0% initially?

2. **Force Application** ✓
   - See "Applied 19 attraction forces"?
   - Matches edge count?

3. **Simulation Behavior** ?
   - Do nodes stay spread out?
   - Or collapse toward center?
   - When does clustering start?

4. **Parameter Verification** ✓
   - chargeStrength: -2000 (strong repulsion)
   - linkDistance: 250 (large spacing)
   - gravity: 0.01 (weak center pull)

## Test Graph Structure

The test ontology has:
- **20 nodes** (classes)
- **19 edges** (properties)
- **Star topology** with node "1" as central hub
- **Tree structure** branching out 3 levels

```
     1 (central)
    /|\\\
   2 3 4 5 6
   | | | | |
   7 8 9 10 11
   | | | | |
   12 13 14 15 16
      | | |
      17 18 19 20
```

This creates interesting force dynamics:
- Central node has high degree (5 connections)
- Tree structure tests attraction
- Small size makes debugging easier

## Testing Workflow

### Step 1: Verify Initialization
```javascript
// In browser console
window.wasmvowlDebug.logDistribution('After Init',
  Array.from(document.querySelector('canvas')))
```

### Step 2: Watch First 10 Iterations
- Should see iteration logs every 10 ticks
- Check clustering percentage
- Look for warnings

### Step 3: Export Positions
```javascript
// Click "Export Positions" button
// Or from console:
window.wasmvowlDebug.exportPositions()
```

### Step 4: Analyze Data
```javascript
// Load exported JSON
const data = require('./positions-<timestamp>.json')

// Check distances
const distances = data.nodes.map(n =>
  Math.sqrt(n.x*n.x + n.y*n.y)
)
console.log('Min:', Math.min(...distances))
console.log('Max:', Math.max(...distances))
console.log('Avg:', distances.reduce((a,b)=>a+b)/distances.length)

// Count clustered
const clustered = distances.filter(d => d < 100).length
console.log(`Clustered: ${clustered}/${data.nodes.length} (${(clustered/data.nodes.length*100).toFixed(1)}%)`)
```

## Testing with Real Data (1,243 nodes)

To test with the full ontology graph, you have 3 options:

### Option 1: Use Deployed Site
```
https://narrativegoldmine.com/?debug=true
```
The deployed version has the full 1,243 node graph.

### Option 2: Convert TTL to JSON
```bash
cd publishing-tools/WasmVOWL/modern/public/data

# You'll need to run the conversion script
python3 ../../../../Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input ontology.ttl \
  --output ontology.json
```

### Option 3: Use File Drop Zone
1. Open http://localhost:5174
2. Have your ontology file ready (.json or .owl)
3. Drag and drop onto the interface
4. Debug panel will work with any loaded graph

## Common Issues

### Issue: Still seeing "not valid json"
**Solution:** Hard refresh browser (Ctrl+Shift+R) to clear cache

### Issue: WASM not loading
**Check console for:**
```
Failed to initialize WASM: ...
```
**Solution:** Rebuild WASM:
```bash
cd publishing-tools/WasmVOWL/rust-wasm
wasm-pack build --target web --release
```

### Issue: No debug logs
**Check:**
1. URL has `?debug=true`
2. Or click Debug Panel → Enable All
3. Browser console is open (F12)

### Issue: Positions not updating
**Check console for:**
```
⏱️ Iteration N: alpha=0.XXXX
```
If alpha is 0 or very low, simulation has finished.
**Solution:** Reload page to restart

## Success Criteria

You'll know the debug system is working when you see:

1. ✅ Detailed initialization logs
2. ✅ Force application counts
3. ✅ Distribution statistics every 10 iterations
4. ✅ Clustering warnings (if nodes cluster)
5. ✅ Export positions works
6. ✅ Debug panel toggles affect logging

## Next Steps After Testing

Once local testing confirms the debug system works:

1. **Test on deployed site:**
   ```
   https://narrativegoldmine.com/?debug=true
   ```

2. **Compare behaviors:**
   - Small test graph (20 nodes)
   - Large production graph (1,243 nodes)
   - Do they both cluster? Or just large?

3. **Share findings:**
   - Console logs showing clustering
   - Exported position JSONs
   - Screenshots from Debug Panel
   - At what iteration clustering starts

---

**Dev Server:** http://localhost:5174
**Debug Mode:** http://localhost:5174/?debug=true
**Test Graph:** 20 nodes, 19 edges
