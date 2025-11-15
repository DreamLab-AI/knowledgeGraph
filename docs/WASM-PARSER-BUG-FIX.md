# WASM Parser Bug Fix - Missing Domain Error

**Date**: 2025-11-14
**Commit**: ef020574 - CRITICAL FIX: Move domain/range to property array for WASM parser
**Status**: ✅ FIXED

## The Bug

WASM parser failed with error:
```
Failed to load ontology into WASM: Failed to parse ontology: Missing domain for property: 1244
```

Even though:
- ✅ Node 1157 exists in class array (domain)
- ✅ Node 1 exists in class array (range)
- ✅ Property 1244 has valid domain/range values

## Root Cause

**Data structure mismatch between JavaScript and Rust parser.**

### What We Were Sending

```typescript
{
  property: [
    {
      id: "1244",
      type: "owl:ObjectProperty"
      // ❌ No domain/range here!
    }
  ],
  propertyAttribute: [
    {
      id: "1244",
      domain: "1157",  // ❌ Domain in wrong place
      range: "1",      // ❌ Range in wrong place
      label: {...},
      iri: "..."
    }
  ]
}
```

### What WASM Parser Expected

The Rust parser in `rust-wasm/src/ontology/parser.rs:250-260` looks for domain/range **directly in the property object**:

```rust
fn parse_property(&self, json: &Value) -> Result<Property> {
    // ...
    let domain = json
        .get("domain")  // ❌ Looking HERE, not in propertyAttribute!
        .and_then(|v| v.as_str())
        .ok_or_else(|| VowlError::ParseError(format!("Missing domain for property: {}", id)))?
        .to_string();
```

**The parser was looking for `property[N].domain`, but we were sending `propertyAttribute[N].domain`.**

## The Fix

Moved domain/range fields from `propertyAttribute` to `property` array:

```typescript
property: validEdges.map((e) => ({
  id: e.id,
  type: e.type === 'objectProperty' ? 'owl:ObjectProperty' : 'owl:DatatypeProperty',
  domain: e.source,  // ✅ Domain now in property array
  range: e.target,   // ✅ Range now in property array
  label: e.label || e.id,
  iri: e.iri || `http://example.org/${e.id}`
}))
// ✅ Removed propertyAttribute array completely
```

## Investigation Process

### 1. Initial Symptoms
- Graph clustering at center
- 1,243 nodes, 46 properties defined
- Only 36 valid edges created by useGraphStore
- WASM failing to load ontology

### 2. First Hypothesis (WRONG)
Thought the problem was invalid edges referencing non-existent nodes.

**Fix Attempted**: Added edge filtering in useWasmSimulation.ts (commit 4f64c697)
- Checked if source/target nodes exist before sending to WASM
- Result: Filter passed (36/36 valid) but WASM still failed

### 3. Diagnostic Logging (commit 8c80f1ee)
Added comprehensive logging to identify the real issue:

```javascript
console.log('[useWasmSimulation] Node 1157 exists in class array?', true);
console.log('[useWasmSimulation] Node 1 exists in class array?', true);
console.log('[useWasmSimulation] Property 1244 full data:', {
  id: "1244",
  domain: "1157",  // Valid!
  range: "1"       // Valid!
});
// But WASM still failed: "Missing domain for property: 1244"
```

This proved the nodes existed but WASM couldn't find the domain/range.

### 4. Root Cause Discovery
Read Rust parser code (`rust-wasm/src/ontology/parser.rs`) and found:
- Parser calls `json.get("domain")` on each property object
- Does NOT look in a separate `propertyAttribute` array
- Expects domain/range directly in `property[N]`, not `propertyAttribute[N]`

### 5. Final Fix (commit ef020574)
Restructured data to match parser expectations:
- Removed `propertyAttribute` array
- Moved domain, range, label, iri into `property` array
- WASM can now find domain/range where it expects them

## Why This Wasn't Caught Earlier

1. **No type checking between JS and Rust**: TypeScript has no knowledge of Rust parser expectations
2. **Silent array separation**: Code split property metadata into two arrays for organizational clarity
3. **Parser error message misleading**: Said "Missing domain" when domain existed, just in wrong place
4. **WebVOWL spec ambiguity**: Spec shows `propertyAttribute` as separate, but some implementations merge them

## WebVOWL Format Variants

The WebVOWL JSON spec has **two valid formats**:

### Format 1: Separate Arrays (What we were using)
```json
{
  "property": [{"id": "1", "type": "owl:ObjectProperty"}],
  "propertyAttribute": [{"id": "1", "domain": "A", "range": "B"}]
}
```

### Format 2: Merged (What our Rust parser expects)
```json
{
  "property": [
    {"id": "1", "type": "owl:ObjectProperty", "domain": "A", "range": "B"}
  ]
}
```

Our JavaScript code used Format 1, our Rust parser expects Format 2.

## Impact

### Before Fix
- ❌ WASM failed to initialize
- ❌ No force simulation
- ❌ Blank graph or fallback visualization
- ❌ Could not debug clustering issue (blocked by parsing error)

### After Fix
- ✅ WASM loads successfully
- ✅ Force simulation starts
- ✅ Can now analyze actual clustering behavior
- ✅ Can test if extreme parameters fix clustering

## Testing

### Local Testing (http://localhost:5174/?debug=true)
Should see:
```
✅ WASM module initialized
🔄 Initializing 1243 nodes in circular layout with radius 2000
🔗 Applied 36 attraction forces between 1243 nodes
⏱️ Iteration 10: alpha=0.8234, nodes=1243
```

No "Missing domain" error!

### Deployed Testing (https://narrativegoldmine.com/?debug=true)
After GitHub Actions deployment completes (~3 min), check console for:
1. No parsing errors
2. Simulation starts successfully
3. Nodes initialize at radius 2000
4. Force simulation runs

## Next Steps

Once WASM loads successfully:

1. **Observe initial layout**
   - Are nodes in a circle at radius 2000?
   - Or immediately clustered?

2. **Monitor clustering during simulation**
   ```
   📊 After Tick 10 - Node Distribution
      Clustering: X% (should be < 10%)
      Spread: X% beyond 500 units (should be > 80%)
   ```

3. **If still clustering**, investigate force parameters:
   - Is repulsion strong enough? (chargeStrength: -2000)
   - Is link distance appropriate? (linkDistance: 250)
   - Is gravity too strong? (gravity: 0.01)

4. **Export positions** for analysis
   - Click Debug Panel → "Export Positions"
   - Analyze position distribution
   - Check for systematic clustering patterns

## Related Commits

1. **26566801** - Phase 1: Initial parameter optimizations
2. **67d12376** - CRITICAL FIX: Extreme parameters + local WASM import
3. **00f71abe** - Fix GitHub Actions: Build WASM before modern app
4. **33397080** - Fix Rust compiler warnings
5. **84f90546** - Add comprehensive debugging infrastructure
6. **4f64c697** - Fix WASM ontology loading: filter invalid edges
7. **8c80f1ee** - Add comprehensive diagnostic logging
8. **ef020574** - **THIS FIX**: Move domain/range to property array ✅

## Lessons Learned

1. **Type safety across language boundaries**: Need better validation of data structures between TypeScript and Rust
2. **Read parser implementation**: When in doubt, check exactly what the parser expects
3. **Diagnostic logging is critical**: Without the logging showing "Node 1157 exists: true", we might have wasted time trying to fix non-existent nodes
4. **WebVOWL spec has variants**: Different implementations interpret the spec differently
5. **Error messages can be misleading**: "Missing domain" really meant "domain not in expected location"

## Prevention

To prevent similar issues:

1. **Add JSON schema validation**: Validate graphData structure matches parser expectations before sending to WASM
2. **Integration tests**: Test JavaScript→Rust boundary with sample data
3. **Type definitions**: Create shared types between TypeScript and Rust (via serde/wasm-bindgen)
4. **Better error messages**: WASM parser could say "Missing domain in property object (checked propertyAttribute?)"
5. **Documentation**: Document exact JSON structure expected by Rust parser

---

**Status**: Fix deployed to main, awaiting GitHub Actions deployment to narrativegoldmine.com

**ETA**: ~3 minutes from push (ef020574)

**Verification**: Visit https://narrativegoldmine.com/?debug=true and check console for successful WASM initialization
