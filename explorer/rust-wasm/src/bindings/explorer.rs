//! `NggExplorer` — the WASM surface for the NarrativeGoldmine explorer worker
//! (ADR-NG-001 §3). One instance per worker: load a tier with `load_csr`, expose
//! the live position buffer to JS zero-copy via `positions_ptr`/`positions_len`
//! (or copy it out with `write_positions_into` on the transferable path), and
//! drive the sim with `tick`/`is_finished`/`get_alpha`/`set_*`.
//!
//! This replaces the old `get_graph_data()` boundary-serialisation hot path
//! (deleted from default builds, kept behind the `debug-serde` feature on the
//! legacy `WebVowl` struct). Nothing here allocates across the boundary per
//! frame; only the position pointer crosses.

use crate::layout::csr_sim::CsrSimulation;
use wasm_bindgen::prelude::*;

/// The explorer's physics engine, as seen from the worker in JS.
#[wasm_bindgen]
pub struct NggExplorer {
    sim: CsrSimulation,
}

impl Default for NggExplorer {
    fn default() -> Self {
        Self::new()
    }
}

#[wasm_bindgen]
impl NggExplorer {
    /// Construct an empty explorer. Call `load_csr` before ticking.
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {
            sim: CsrSimulation::new(),
        }
    }

    /// Load an NGG1 tier: parse the bytes, seed positions from the node
    /// warm-start, build springs from the CSR adjacency, reset the temperature.
    /// Swaps the whole scope (DDD INV-2). Errors on a malformed/truncated buffer.
    #[wasm_bindgen(js_name = loadCsr)]
    pub fn load_csr(&mut self, bytes: &[u8]) -> Result<(), JsValue> {
        self.sim
            .load_csr(bytes)
            .map_err(|e| JsValue::from_str(&e.to_string()))
    }

    /// Advance one simulation step. No-op once settled.
    #[wasm_bindgen(js_name = tick)]
    pub fn tick(&mut self) {
        self.sim.tick();
    }

    /// `true` once the annealing temperature reached the floor.
    #[wasm_bindgen(js_name = isFinished)]
    pub fn is_finished(&self) -> bool {
        self.sim.is_finished()
    }

    /// Current alpha (annealing temperature) for HUD/telemetry.
    #[wasm_bindgen(js_name = getAlpha)]
    pub fn get_alpha(&self) -> f32 {
        self.sim.alpha()
    }

    /// On-screen node count of the loaded scope.
    #[wasm_bindgen(js_name = nodeCount)]
    pub fn node_count(&self) -> usize {
        self.sim.node_count()
    }

    /// Directed edge count of the loaded scope.
    #[wasm_bindgen(js_name = edgeCount)]
    pub fn edge_count(&self) -> usize {
        self.sim.edge_count()
    }

    /// Pointer to the live interleaved position buffer. JS builds a
    /// `new Float32Array(wasm.memory.buffer, positionsPtr(), positionsLen())`
    /// over WASM linear memory — zero copy (VisionClaw `get_*_ptr` idiom). The
    /// view is invalidated by the next `loadCsr` (possible reallocation) and by
    /// any WASM memory growth; re-read the pointer after either.
    #[wasm_bindgen(js_name = positionsPtr)]
    pub fn positions_ptr(&self) -> *const f32 {
        self.sim.positions_ptr()
    }

    /// Length of the position buffer in `f32` elements (`nodeCount * 2`).
    #[wasm_bindgen(js_name = positionsLen)]
    pub fn positions_len(&self) -> usize {
        self.sim.positions_len()
    }

    /// Copy live positions into the caller's buffer (the transferable ping-pong
    /// path used when `SharedArrayBuffer` is unavailable). Copies the overlap.
    #[wasm_bindgen(js_name = writePositionsInto)]
    pub fn write_positions_into(&self, out: &mut [f32]) {
        self.sim.write_positions_into(out);
    }

    /// Live-tune a scalar parameter by `protocol.ts` key: `charge`,
    /// `linkDistance`, `linkStrength`, `damping`, `centerGravity`, `alphaMin`,
    /// `reheat`. Unknown keys are ignored.
    #[wasm_bindgen(js_name = setParam)]
    pub fn set_param(&mut self, key: &str, val: f32) {
        self.sim.set_param(key, val);
    }

    /// Re-heat and resume a settled scope (convenience for `setParam("reheat")`).
    #[wasm_bindgen(js_name = reheat)]
    pub fn reheat(&mut self, alpha: f32) {
        self.sim.reheat(alpha);
    }
}
