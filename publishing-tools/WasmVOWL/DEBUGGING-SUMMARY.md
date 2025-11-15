# 🐛 Force-Directed Graph Debugging Infrastructure

**Created:** 2025-11-14
**Status:** ✅ Complete and Ready for Testing
**Dev Server:** http://localhost:5174 (running)

## What Was Built

A comprehensive debugging infrastructure to diagnose and fix the force-directed graph clustering issue affecting 1,243 ontology nodes.

## New Files Created

### TypeScript/React (Modern App)
1. **`src/config/debug.ts`** (200 lines)
   - DebugManager class with feature flags
   - Node distribution calculator
   - Position history tracking
   - Persistent localStorage config
   - Auto-enable via `?debug=true` URL param

2. **`src/hooks/useDebugControls.ts`** (80 lines)
   - React hook for debug panel
   - Export positions to JSON
   - Real-time distribution logging
   - Config management

3. **`src/components/UI/DebugPanel.tsx`** (150 lines)
   - Full-featured debug UI panel
   - Toggle individual logging flags
   - Quick actions (Enable All, Log Distribution, Export)
   - Real-time settings updates

4. **`src/components/UI/DebugPanel.css`** (120 lines)
   - Dark theme styling
   - Responsive layout
   - Smooth animations

5. **`src/test-local.html`** (200 lines)
   - Standalone test page
   - Live console output
   - Real-time stats display
   - Control buttons

### Rust/WASM (Layout Engine)
1. **`src/debug.rs`** (150 lines)
   - DebugFlags struct with WASM bindings
   - log_distribution() function
   - log_force(), log_position(), log_velocity() helpers
   - Distribution statistics calculator

2. **`src/layout/simulation.rs`** (enhanced)
   - Integrated debug logging
   - Position distribution tracking
   - Iteration logging
   - Force application logging

3. **`src/lib.rs`** (updated)
   - Added `pub mod debug;`

### Documentation
1. **`DEBUG-GUIDE.md`** (400 lines)
   - Complete debugging workflow
   - Console command reference
   - Common issues and solutions
   - Test file examples
   - Integration guide

2. **`DEBUGGING-SUMMARY.md`** (this file)
   - Overview and usage
   - Quick reference

## Features Implemented

### 1. Comprehensive Logging System
- ✅ Force calculations (repulsion, attraction, centering)
- ✅ Node positions before/after each tick
- ✅ Velocities and alpha values
- ✅ Barnes-Hut quadtree usage
- ✅ FPS and iteration counts
- ✅ Configurable log intervals

### 2. Distribution Analysis
- ✅ Real-time clustering detection
- ✅ Distance from center calculations
- ✅ Warning when >50% nodes clustered
- ✅ Min/max/avg/stddev statistics
- ✅ Spread percentage tracking

### 3. Position Export
- ✅ JSON export of all node positions
- ✅ Includes velocities and metadata
- ✅ Timestamp and node count
- ✅ One-click download

### 4. Debug Panel UI
- ✅ Floating debug button (top-right)
- ✅ Expandable panel with all controls
- ✅ Quick actions (Enable All, Disable All)
- ✅ Individual feature toggles
- ✅ Log interval configuration
- ✅ Dark theme styling

### 5. Console Access
- ✅ `window.wasmvowlDebug` global object
- ✅ Programmatic config control
- ✅ Position history queries
- ✅ Distribution calculations

## How to Use

### Option 1: Quick Debug Mode
```
http://localhost:5174/?debug=true
```
Opens browser console → All logging auto-enabled

### Option 2: Debug Panel
1. Open http://localhost:5174
2. Click "🐛 Debug" button (top-right)
3. Click "Enable All"
4. Watch browser console

### Option 3: Console Commands
```javascript
// Enable all logging
window.wasmvowlDebug.enableAllLogging()

// Log current distribution
window.wasmvowlDebug.logDistribution('Current State', nodes)

// Export positions
// (or click "Export Positions" in panel)
```

## What to Look For

### Initial State (Should See)
```
🔄 Initializing 1243 nodes in circular layout with radius 2000
📊 Initial Positions - Node Distribution (n=1243)
   Clustering: 0 nodes within 100 units (0.0%)  ✅ Good
   Spread: 1243 nodes beyond 500 units (100.0%) ✅ Good
```

### During Simulation (Should See)
```
🔗 Applied 2486 attraction forces between 1243 nodes (1243 edges)
⏱️ Iteration 10: alpha=0.8234, nodes=1243
📊 After Tick 10 - Node Distribution
   Avg distance: 850.3  ✅ Should stay high
   Clustering: 1.2%     ✅ Should stay low
```

### Warning Signs (Bad)
```
⚠️ CLUSTERING DETECTED: 67.3% of nodes within 100 units of center!
```

## Debug Workflow

1. **Start with clean state:**
   - Reload page: http://localhost:5174/?debug=true
   - Console should show initialization

2. **Watch initial distribution:**
   - Should see 2000-unit circular layout
   - All nodes starting far from center

3. **Track first 10 iterations:**
   - Are attraction forces applied?
   - Do nodes move inward or stay spread?
   - Check clustering percentage

4. **Export positions at iteration 50:**
   - Click "Export Positions"
   - Analyze distances in JSON

5. **Identify root cause:**
   - If clustering immediately → initialization bug
   - If clustering over time → force imbalance
   - If no attraction → edge loading bug

## Known Issues to Check

### Issue 1: Clustering Despite Parameters
**What to check:**
- Console shows correct parameters (chargeStrength: -2000, linkDistance: 250)?
- WASM file size is 215K (not smaller old version)?
- Import path is `../../../rust-wasm/pkg/` (not npm package)?

### Issue 2: No Attraction Forces
**What to check:**
- Console shows "Applied N attraction forces"?
- N should equal number of edges in graph
- Check `useWasmSimulation.ts` property loading

### Issue 3: Nodes Collapse Over Time
**What to check:**
- Center force too strong? (should be 0.001)
- Repulsion too weak? (should be -2000)
- Too many edges creating attraction vortex?

## Build Info

```bash
# WASM Build
cd publishing-tools/WasmVOWL/rust-wasm
wasm-pack build --target web --release
# Output: 215K webvowl_wasm_bg.wasm (0.30s)

# Modern App Dev Server
cd publishing-tools/WasmVOWL/modern
npm run dev
# Output: http://localhost:5174 (221ms startup)
```

## Next Steps

1. **Open debug mode:**
   ```
   http://localhost:5174/?debug=true
   ```

2. **Load the 1,243 node graph**
   - Should auto-load from `./data/ontology.json`
   - Or drop a file manually

3. **Watch console logs:**
   - Initialization message
   - Distribution statistics
   - Force application logs
   - Clustering warnings

4. **Export positions at key points:**
   - Iteration 0 (initial)
   - Iteration 50 (mid-simulation)
   - Iteration 100 (later)

5. **Analyze the data:**
   - Compare distance distributions
   - Track clustering percentage
   - Identify when/why collapse happens

6. **Report findings:**
   - Console logs
   - Exported position JSONs
   - Distribution statistics
   - Screenshots from Debug Panel

## Files Modified

### Rust
- `src/lib.rs` - Added debug module
- `src/layout/simulation.rs` - Added debug logging
- `src/debug.rs` - NEW debug utilities

### TypeScript
- `src/App.tsx` - Added DebugPanel component
- `src/hooks/useWasmSimulation.ts` - Added debug imports and logging
- `src/config/debug.ts` - NEW debug manager
- `src/hooks/useDebugControls.ts` - NEW debug hook
- `src/components/UI/DebugPanel.tsx` - NEW debug panel
- `src/components/UI/DebugPanel.css` - NEW debug styling

### Documentation
- `DEBUG-GUIDE.md` - NEW comprehensive guide
- `DEBUGGING-SUMMARY.md` - NEW (this file)

## Success Criteria

The debugging infrastructure is successful if it allows you to:

1. ✅ See exactly what parameters are being used
2. ✅ Track node positions throughout simulation
3. ✅ Identify when clustering occurs
4. ✅ Measure clustering percentage in real-time
5. ✅ Export data for external analysis
6. ✅ Toggle logging features without code changes

## Status

**Infrastructure:** ✅ Complete
**WASM Build:** ✅ Success (215K)
**Dev Server:** ✅ Running (http://localhost:5174)
**Documentation:** ✅ Complete
**Ready for Testing:** ✅ YES

---

**Now you have complete visibility into the force simulation!**

Open http://localhost:5174/?debug=true and watch the console to see exactly what's happening with your 1,243 nodes.
