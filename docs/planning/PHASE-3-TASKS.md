# Phase 3: WASM Enhancement - Detailed Task Breakdown

**Phase Duration:** 1-2 weeks (40-80 hours)
**Primary Agents:** frontend-dev, backend-dev (Rust)
**Dependencies:** Phase 2 (Core Parser Migration) complete

---

## Overview

Enhance WebVOWL WASM module to support ontology-specific data models, emit click events for React integration, and update npm package for production use.

**Success Criteria:**
- [ ] WASM parses OntologyBlock data structures natively
- [ ] Click events bubble from WASM to React Three Fiber
- [ ] npm package updated with new features
- [ ] Performance maintained or improved (8ms tick time)
- [ ] Bundle size remains <1.5MB

---

## Task 3.1: Extend WebVOWL Data Model (12-16 hours)

### Subtask 3.1.1: Add OntologyBlock Support to Rust/WASM
**Duration:** 5-7 hours
**Agent:** backend-dev
**Priority:** Critical
**Dependencies:** Phase 2 complete

**Implementation Steps:**
1. Open `publishing-tools/WasmVOWL/rust-wasm/src/ontology/mod.rs`
2. Add `OntologyMetadata` struct:
   ```rust
   #[derive(Serialize, Deserialize, Clone)]
   pub struct OntologyMetadata {
       pub term_id: String,
       pub preferred_term: Option<String>,
       pub owl_class: Option<String>,
       pub maturity: Option<String>,
       pub status: Option<String>,
       pub domain: Option<String>,
   }
   ```
3. Extend `Node` struct in `src/graph/mod.rs`:
   ```rust
   pub struct Node {
       pub id: String,
       pub label: String,
       pub node_type: NodeType,
       pub position: Vector3<f32>,
       pub velocity: Vector3<f32>,
       pub mass: f32,
       // NEW:
       pub ontology_meta: Option<OntologyMetadata>,
   }
   ```
4. Update parser in `src/ontology/parser.rs` to extract ontology metadata from WebVOWL JSON

**Success Criteria:**
- [ ] WASM graph nodes contain ontology metadata
- [ ] Parser handles optional ontology fields
- [ ] Unit tests for ontology metadata extraction
- [ ] No performance regression in parsing

**Testing:**
```bash
cd publishing-tools/WasmVOWL/rust-wasm
cargo test ontology_metadata_tests
```

**Files Modified:**
- `publishing-tools/WasmVOWL/rust-wasm/src/ontology/mod.rs`
- `publishing-tools/WasmVOWL/rust-wasm/src/graph/mod.rs`
- `publishing-tools/WasmVOWL/rust-wasm/src/ontology/parser.rs`

---

### Subtask 3.1.2: Semantic Relationship Types
**Duration:** 4-5 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 3.1.1

**Implementation Steps:**
1. Create `EdgeType` enum in `src/graph/mod.rs`:
   ```rust
   #[wasm_bindgen]
   #[derive(Serialize, Deserialize, Clone, Copy)]
   pub enum SemanticRelationType {
       SubClassOf,      // rdfs:subClassOf
       Enables,         // dt:enables
       Requires,        // dt:requires
       Implements,      // dt:implements
       Supports,        // dt:supports
       Facilitates,     // dt:facilitates
       ObjectProperty,  // owl:ObjectProperty
       DatatypeProperty, // owl:DatatypeProperty
   }
   ```
2. Update `Edge` struct:
   ```rust
   pub struct Edge {
       pub id: String,
       pub source_id: String,
       pub target_id: String,
       pub relation_type: SemanticRelationType,
       pub label: Option<String>,
   }
   ```
3. Color-code edges by type in layout algorithm

**Success Criteria:**
- [ ] All 7+ semantic relation types supported
- [ ] Edge colors differentiate relation types
- [ ] Parser maps OWL properties to SemanticRelationType
- [ ] Unit tests for each relation type

**Testing:**
```bash
cargo test semantic_relations_tests
```

**Files Modified:**
- `publishing-tools/WasmVOWL/rust-wasm/src/graph/mod.rs`
- `publishing-tools/WasmVOWL/rust-wasm/src/layout/force_directed.rs`

---

### Subtask 3.1.3: Node Metadata Export to JS
**Duration:** 3-4 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 3.1.2

**Implementation Steps:**
1. Update `WebVowl::getGraphData()` in `src/lib.rs`:
   ```rust
   #[wasm_bindgen]
   pub fn getGraphData(&self) -> JsValue {
       let nodes_with_meta: Vec<NodeWithMeta> = self.graph.nodes()
           .map(|node| NodeWithMeta {
               id: node.id.clone(),
               x: node.position.x,
               y: node.position.y,
               z: node.position.z,
               label: node.label.clone(),
               ontology_meta: node.ontology_meta.clone(),
           })
           .collect();

       serde_wasm_bindgen::to_value(&nodes_with_meta).unwrap()
   }
   ```
2. Create `NodeWithMeta` struct for JS export
3. Test JSON serialization of ontology metadata

**Success Criteria:**
- [ ] JS receives ontology metadata for each node
- [ ] Serialization overhead <5ms
- [ ] TypeScript types generated for NodeWithMeta
- [ ] Integration test verifying JS can access metadata

**Testing:**
```javascript
const wasm = await import('./pkg/webvowl_wasm.js');
const graph = wasm.getGraphData();
console.log(graph.nodes[0].ontology_meta);
```

**Files Modified:**
- `publishing-tools/WasmVOWL/rust-wasm/src/lib.rs`
- `publishing-tools/WasmVOWL/rust-wasm/src/bindings/js_interface.rs`

---

## Task 3.2: Click Event Emission (10-14 hours)

### Subtask 3.2.1: Ray-Sphere Intersection in WASM
**Duration:** 4-6 hours
**Agent:** backend-dev
**Priority:** Critical
**Dependencies:** 3.1.3

**Implementation Steps:**
1. Create `src/interaction/mod.rs` in Rust/WASM
2. Implement ray-sphere intersection algorithm:
   ```rust
   pub struct Ray {
       pub origin: Vector3<f32>,
       pub direction: Vector3<f32>,
   }

   pub fn ray_sphere_intersection(
       ray: &Ray,
       center: Vector3<f32>,
       radius: f32
   ) -> Option<f32> {
       // Solve quadratic equation: ||ray.origin + t*ray.direction - center||² = radius²
       let oc = ray.origin - center;
       let a = ray.direction.dot(&ray.direction);
       let b = 2.0 * oc.dot(&ray.direction);
       let c = oc.dot(&oc) - radius * radius;
       let discriminant = b * b - 4.0 * a * c;

       if discriminant < 0.0 {
           None
       } else {
           let t = (-b - discriminant.sqrt()) / (2.0 * a);
           if t > 0.0 { Some(t) } else { None }
       }
   }
   ```
3. Add `WebVowl::checkNodeClick(ray_origin: Vec3, ray_direction: Vec3) -> Option<String>`

**Success Criteria:**
- [ ] Correctly detects clicks on spherical nodes
- [ ] Returns node ID for clicked node
- [ ] Handles edge cases (ray misses all nodes)
- [ ] Performance: <1ms for 1,000 nodes

**Testing:**
```bash
cargo test ray_intersection_tests
cargo bench ray_intersection_benchmark
```

**Files Created:**
- `publishing-tools/WasmVOWL/rust-wasm/src/interaction/mod.rs`

**Files Modified:**
- `publishing-tools/WasmVOWL/rust-wasm/src/lib.rs`

---

### Subtask 3.2.2: React Three Fiber Click Handler
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 3.2.1

**Implementation Steps:**
1. Open `publishing-tools/WasmVOWL/modern/src/components/Canvas/GraphScene.tsx`
2. Add onClick handler to Canvas:
   ```typescript
   const { camera, raycaster } = useThree();
   const wasm = useWasmSimulation();

   const handleClick = (event: ThreeEvent<MouseEvent>) => {
       const ray = {
           origin: camera.position.toArray(),
           direction: raycaster.ray.direction.toArray(),
       };

       const clickedNodeId = wasm.checkNodeClick(ray.origin, ray.direction);
       if (clickedNodeId) {
           selectNode(clickedNodeId);
       }
   };

   return (
       <Canvas onClick={handleClick}>
           {/* ... */}
       </Canvas>
   );
   ```
3. Update `useWasmSimulation` hook to expose `checkNodeClick()`

**Success Criteria:**
- [ ] Clicking node selects it in React state
- [ ] Visual feedback (highlight selected node)
- [ ] Click detection works at any zoom/rotation
- [ ] No performance impact on rendering

**Testing:**
```bash
cd publishing-tools/WasmVOWL/modern
npm test -- GraphScene.test.tsx
```

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/components/Canvas/GraphScene.tsx`
- `publishing-tools/WasmVOWL/modern/src/hooks/useWasmSimulation.ts`

---

### Subtask 3.2.3: Node Selection Panel
**Duration:** 3-4 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 3.2.2

**Implementation Steps:**
1. Create `NodeDetailsPanel.tsx` component:
   ```typescript
   export function NodeDetailsPanel({ nodeId }: { nodeId: string | null }) {
       const node = useGraphStore(state => state.nodes.get(nodeId || ''));
       if (!node) return null;

       return (
           <div className="node-details-panel">
               <h3>{node.label}</h3>
               {node.ontology_meta && (
                   <>
                       <p><strong>Term ID:</strong> {node.ontology_meta.term_id}</p>
                       <p><strong>Preferred Term:</strong> {node.ontology_meta.preferred_term}</p>
                       <p><strong>Maturity:</strong> {node.ontology_meta.maturity}</p>
                       <p><strong>Status:</strong> {node.ontology_meta.status}</p>
                   </>
               )}
               <button onClick={() => window.location.href = `/page/${node.label}`}>
                   View Full Page
               </button>
           </div>
       );
   }
   ```
2. Integrate with layout in `App.tsx`

**Success Criteria:**
- [ ] Panel displays ontology metadata on node click
- [ ] "View Full Page" button navigates to Logseq SPA page
- [ ] Panel can be closed/minimized
- [ ] Responsive design (mobile-friendly)

**Testing:**
```bash
npm test -- NodeDetailsPanel.test.tsx
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/src/components/UI/NodeDetailsPanel.tsx`

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/src/App.tsx`

---

## Task 3.3: npm Package Update (8-12 hours)

### Subtask 3.3.1: Version Bump and Changelog
**Duration:** 2-3 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 3.2.3

**Implementation Steps:**
1. Bump version in `publishing-tools/WasmVOWL/rust-wasm/Cargo.toml`:
   ```toml
   [package]
   version = "0.2.0"  # Was 0.1.0
   ```
2. Update `package.json` in frontend:
   ```json
   {
     "dependencies": {
       "narrativegoldmine-webvowl-wasm": "^0.2.0"
     }
   }
   ```
3. Create `CHANGELOG.md`:
   ```markdown
   ## [0.2.0] - 2025-11-XX

   ### Added
   - Ontology metadata support in WASM
   - Semantic relationship types (enables, requires, implements, etc.)
   - Click event emission with ray-sphere intersection
   - Node selection panel with metadata display

   ### Changed
   - Enhanced Node data structure with ontology_meta field
   - Updated WebVOWL JSON parser for ontology blocks

   ### Performance
   - Maintained 8ms tick time with additional metadata
   - Click detection: <1ms for 1,000 nodes
   ```

**Success Criteria:**
- [ ] Version numbers consistent across Cargo.toml and package.json
- [ ] Changelog documents all Phase 3 changes
- [ ] Git tags created for release

**Testing:**
```bash
git tag v0.2.0
git push origin v0.2.0
```

**Files Modified:**
- `publishing-tools/WasmVOWL/rust-wasm/Cargo.toml`
- `publishing-tools/WasmVOWL/modern/package.json`
- `publishing-tools/WasmVOWL/CHANGELOG.md`

---

### Subtask 3.3.2: Build and Publish WASM Package
**Duration:** 2-3 hours
**Agent:** backend-dev
**Priority:** Critical
**Dependencies:** 3.3.1

**Implementation Steps:**
1. Build WASM with optimizations:
   ```bash
   cd publishing-tools/WasmVOWL/rust-wasm
   wasm-pack build --target web --release --scope narrativegoldmine
   ```
2. Verify `pkg/` output:
   - `webvowl_wasm.js` (JS bindings)
   - `webvowl_wasm_bg.wasm` (WASM binary)
   - `webvowl_wasm.d.ts` (TypeScript definitions)
   - `package.json` (npm metadata)
3. Test locally:
   ```bash
   npm pack
   npm install ./narrativegoldmine-webvowl-wasm-0.2.0.tgz
   ```
4. Publish to npm:
   ```bash
   cd pkg
   npm publish --access public
   ```

**Success Criteria:**
- [ ] WASM binary size <1.5MB
- [ ] Package published to npm registry
- [ ] TypeScript types included
- [ ] Installation works: `npm install narrativegoldmine-webvowl-wasm@0.2.0`

**Testing:**
```bash
# In separate test project
npm init -y
npm install narrativegoldmine-webvowl-wasm@0.2.0
node -e "const wasm = require('narrativegoldmine-webvowl-wasm'); console.log(wasm);"
```

**Files Published:**
- npm package `narrativegoldmine-webvowl-wasm@0.2.0`

---

### Subtask 3.3.3: Update Frontend to Use New Package
**Duration:** 2-3 hours
**Agent:** frontend-dev
**Priority:** High
**Dependencies:** 3.3.2

**Implementation Steps:**
1. Update `publishing-tools/WasmVOWL/modern/package.json`:
   ```json
   {
     "dependencies": {
       "narrativegoldmine-webvowl-wasm": "^0.2.0"
     }
   }
   ```
2. Run `npm install` to fetch new version
3. Update imports in `useWasmSimulation.ts`:
   ```typescript
   import init, { WebVowl } from 'narrativegoldmine-webvowl-wasm';
   ```
4. Verify TypeScript types work correctly

**Success Criteria:**
- [ ] Frontend builds without errors
- [ ] TypeScript type checking passes
- [ ] WASM loads correctly in browser
- [ ] All new features accessible from React

**Testing:**
```bash
cd publishing-tools/WasmVOWL/modern
npm run build
npm run dev  # Test locally
```

**Files Modified:**
- `publishing-tools/WasmVOWL/modern/package.json`
- `publishing-tools/WasmVOWL/modern/package-lock.json`

---

### Subtask 3.3.4: GitHub Actions CI Update
**Duration:** 2-3 hours
**Agent:** cicd-engineer
**Priority:** Medium
**Dependencies:** 3.3.3

**Implementation Steps:**
1. Open `.github/workflows/publish.yml`
2. Update WASM build step:
   ```yaml
   - name: Build WASM Layout Engine
     run: |
       cd publishing-tools/WasmVOWL/rust-wasm
       wasm-pack build --target web --release --scope narrativegoldmine

   - name: Verify WASM Size
     run: |
       WASM_SIZE=$(wc -c < publishing-tools/WasmVOWL/rust-wasm/pkg/webvowl_wasm_bg.wasm)
       echo "WASM size: $WASM_SIZE bytes"
       if [ $WASM_SIZE -gt 1500000 ]; then
         echo "Error: WASM bundle exceeds 1.5MB limit"
         exit 1
       fi
   ```
3. Add step to verify npm package version matches

**Success Criteria:**
- [ ] CI builds WASM with new features
- [ ] Size check prevents bundle bloat
- [ ] Version consistency verified
- [ ] All checks pass on main branch

**Testing:**
Push to staging branch and verify workflow passes.

**Files Modified:**
- `.github/workflows/publish.yml`

---

## Task 3.4: Performance Validation (6-10 hours)

### Subtask 3.4.1: Benchmark Suite Enhancement
**Duration:** 3-5 hours
**Agent:** backend-dev
**Priority:** High
**Dependencies:** 3.3.4

**Implementation Steps:**
1. Create `publishing-tools/WasmVOWL/rust-wasm/benches/phase3_benchmarks.rs`:
   ```rust
   use criterion::{black_box, criterion_group, criterion_main, Criterion};
   use webvowl_wasm::WebVowl;

   fn benchmark_with_metadata(c: &mut Criterion) {
       let mut wasm = WebVowl::new();
       let json = include_str!("../test-data/narrativegoldmine-ontology.json");
       wasm.loadOntology(json).unwrap();

       c.bench_function("tick_with_metadata", |b| {
           b.iter(|| wasm.tick());
       });

       c.bench_function("get_graph_data_with_metadata", |b| {
           b.iter(|| wasm.getGraphData());
       });

       c.bench_function("check_node_click", |b| {
           b.iter(|| {
               wasm.checkNodeClick(
                   black_box([0.0, 0.0, 500.0]),
                   black_box([0.0, 0.0, -1.0])
               )
           });
       });
   }

   criterion_group!(benches, benchmark_with_metadata);
   criterion_main!(benches);
   ```
2. Run benchmarks and compare to Phase 2 baseline

**Success Criteria:**
- [ ] Tick time remains <10ms (target: 8ms)
- [ ] `getGraphData()` serialization <5ms
- [ ] `checkNodeClick()` <1ms for 1,000 nodes
- [ ] Benchmark results documented

**Testing:**
```bash
cargo bench --bench phase3_benchmarks
```

**Files Created:**
- `publishing-tools/WasmVOWL/rust-wasm/benches/phase3_benchmarks.rs`

---

### Subtask 3.4.2: Bundle Size Analysis
**Duration:** 2-3 hours
**Agent:** frontend-dev
**Priority:** Medium
**Dependencies:** 3.4.1

**Implementation Steps:**
1. Run Vite bundle analyzer:
   ```bash
   cd publishing-tools/WasmVOWL/modern
   npm run build -- --analyze
   ```
2. Verify bundle sizes:
   - `app.js`: <200KB (gzipped)
   - `webvowl_wasm_bg.wasm`: <1.5MB (uncompressed)
   - Total initial load: <1.7MB
3. Document bundle composition

**Success Criteria:**
- [ ] Total bundle size <1.7MB (vs 1.5MB in Phase 2)
- [ ] WASM binary <1.5MB
- [ ] No unexpected large dependencies
- [ ] Lazy loading works for ontology data

**Testing:**
```bash
npm run build
ls -lh dist/assets/
```

**Files Created:**
- `docs/planning/PHASE-3-BUNDLE-ANALYSIS.md`

---

### Subtask 3.4.3: Browser Performance Testing
**Duration:** 1-2 hours
**Agent:** frontend-dev
**Priority:** Low
**Dependencies:** 3.4.2

**Implementation Steps:**
1. Create `publishing-tools/WasmVOWL/modern/tests/performance.test.ts`:
   ```typescript
   describe('Phase 3 Performance', () => {
       it('loads ontology in <300ms', async () => {
           const start = performance.now();
           await loadOntology('/test-data/ontology.json');
           const duration = performance.now() - start;
           expect(duration).toBeLessThan(300);
       });

       it('renders 1000 nodes at 60fps', async () => {
           const fps = await measureFPS(1000);
           expect(fps).toBeGreaterThanOrEqual(60);
       });

       it('click detection responds in <50ms', async () => {
           const start = performance.now();
           handleNodeClick({ clientX: 100, clientY: 100 });
           const duration = performance.now() - start;
           expect(duration).toBeLessThan(50);
       });
   });
   ```
2. Run in CI with headless browser

**Success Criteria:**
- [ ] Load time <300ms
- [ ] 60fps with 1,000 nodes
- [ ] Click response <50ms
- [ ] Tests pass in CI (Chrome, Firefox)

**Testing:**
```bash
npm run test:performance
```

**Files Created:**
- `publishing-tools/WasmVOWL/modern/tests/performance.test.ts`

---

## Coordination Protocol

### Pre-Phase Coordination
```bash
npx claude-flow@alpha hooks pre-task --description "Phase 3 WASM Enhancement" --agent-id "frontend-dev-001"
npx claude-flow@alpha hooks session-restore --session-id "swarm-phase3"
npx claude-flow@alpha hooks memory-retrieve --key "swarm/phase2/owl-extractor-api"
```

### During Task Execution
After each task:
```bash
npx claude-flow@alpha hooks post-edit --file "src/interaction/mod.rs" --memory-key "swarm/frontend-dev/task-3.2"
npx claude-flow@alpha hooks notify --message "Task 3.2 complete: Click events implemented" --to "planner,backend-dev"
```

### Post-Phase Coordination
```bash
npx claude-flow@alpha hooks post-task --task-id "phase3-wasm-enhancement"
npx claude-flow@alpha hooks memory-store --key "swarm/phase3/npm-package-version" --value "0.2.0"
npx claude-flow@alpha hooks session-end --export-metrics true
```

---

## Risk Mitigation

### Risk: WASM bundle size exceeds 1.5MB
**Mitigation:** Add CI check to fail if WASM >1.5MB, use `wasm-opt` for optimization
**Contingency:** Remove optional features (LOD, spatial hashing) if needed

### Risk: Click detection doesn't work with camera rotation
**Mitigation:** Test at multiple camera angles, use Three.js raycaster as fallback
**Contingency:** Implement pure JavaScript raycasting if WASM version fails

### Risk: npm publish fails due to authentication
**Mitigation:** Use GitHub Actions secrets for NPM_TOKEN, test locally first
**Contingency:** Publish manually from local machine with correct credentials

---

## Handoff to Phase 4

**Deliverables:**
- [ ] WASM supports ontology metadata
- [ ] Click events bubble to React
- [ ] npm package `narrativegoldmine-webvowl-wasm@0.2.0` published
- [ ] Performance benchmarks pass
- [ ] Bundle size within limits

**Memory Keys for Phase 4:**
- `swarm/phase3/wasm-api-changes` - New WASM API functions
- `swarm/phase3/click-event-format` - Click event data structure
- `swarm/phase3/performance-benchmarks` - Benchmark results

**Next Phase Dependencies:**
Phase 4 (React SPA) requires:
- Click event handling from Phase 3
- Ontology metadata access
- Node details panel component

---

**Phase 3 Estimated Completion:** Week 5-6 of project
**Total Hours:** 36-52 hours (1-2 weeks with 1 full-time engineer)
