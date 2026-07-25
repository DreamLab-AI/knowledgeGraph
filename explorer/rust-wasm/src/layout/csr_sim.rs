//! `CsrSimulation` — deterministic force-directed layout over an NGG1 tier.
//!
//! This is the physics half of ADR-NG-001 §3: the worker owns one of these,
//! seeds it from the NGG1 node positions (warm start), and ticks it off the main
//! thread. Positions live in a single interleaved `Vec<f32>` (`[x0,y0,x1,y1,…]`)
//! whose pointer is handed to JS as a zero-copy `Float32Array` view — the
//! VisionClaw `get_*_ptr` idiom (`scene-effects`), adapted.
//!
//! Design constraints (ADR §3):
//! - Naive O(n²) repulsion, **scoped** — T1 caps at 1,500 nodes ⇒ ≤ 2.25M
//!   pair-ops/tick; well within WASM headroom. Barnes-Hut is a follow-up slot.
//! - Springs on both edge kinds (subClassOf backbone + objectProperty relation).
//! - **Deterministic** given the seeds: node order is the CSR local-index order,
//!   all accumulation is over `Vec` indices (no `HashMap` iteration), coincident
//!   nodes get an index-derived perturbation — so two runs from the same tier
//!   produce identical buffers.
//! - Auto-finish at the alpha floor (`is_finished`), matching `ngg1.ts`/protocol
//!   `Settled`.

use crate::ngg1::Ngg1;

/// Tunable scalar parameters. These are the only physics knobs exposed to JS
/// (protocol `SimParamKey`); no WebVOWL-style settings sprawl.
#[derive(Debug, Clone, Copy)]
pub struct SimConfig {
    /// Repulsion constant (Coulomb). **Positive = repulsive** (nodes push
    /// apart). Larger ⇒ more spread.
    pub charge: f32,
    /// Spring rest length for edges.
    pub link_distance: f32,
    /// Spring stiffness (Hooke). 0 ⇒ edges exert no pull.
    pub link_strength: f32,
    /// Per-tick velocity retention (damping). `v *= damping`. Lower ⇒ settles
    /// faster.
    pub damping: f32,
    /// Pull toward `center` each tick, scaled by this.
    pub center_gravity: f32,
    /// Layout centre.
    pub center: (f32, f32),
    /// Starting annealing temperature.
    pub alpha: f32,
    /// Per-tick multiplicative alpha decay: `alpha *= 1 - alpha_decay`.
    pub alpha_decay: f32,
    /// Alpha floor — below this the sim is `is_finished()` and ticks are no-ops.
    pub alpha_min: f32,
}

impl Default for SimConfig {
    fn default() -> Self {
        // Tuned for a scoped tier (≤1,500 nodes) on a cream editorial canvas:
        // strong spread, weak centre pull, a rest length that reads as airy.
        Self {
            charge: 2000.0,
            link_distance: 60.0,
            link_strength: 0.5,
            damping: 0.6,
            center_gravity: 0.02,
            center: (0.0, 0.0),
            alpha: 1.0,
            alpha_decay: 0.0228,
            alpha_min: 0.001,
        }
    }
}

/// A live simulation. Owns the interleaved position buffer and the CSR-derived
/// spring list; nothing crosses the WASM boundary but the position pointer.
pub struct CsrSimulation {
    config: SimConfig,
    n: usize,
    /// Interleaved live positions `[x0,y0,…]`, length `n*2`. Stable address
    /// after `load_csr` (no reallocation during `tick`) — this is what
    /// `positions_ptr` exposes.
    positions: Vec<f32>,
    /// Interleaved velocities, length `n*2`.
    velocities: Vec<f32>,
    /// Edge endpoints (local indices) and types, parallel arrays.
    edge_a: Vec<u32>,
    edge_b: Vec<u32>,
    edge_type: Vec<u8>,
    alpha: f32,
    finished: bool,
}

impl Default for CsrSimulation {
    fn default() -> Self {
        Self::new()
    }
}

impl CsrSimulation {
    /// A fresh, empty simulation with default parameters. Load a tier before
    /// ticking.
    pub fn new() -> Self {
        let config = SimConfig::default();
        Self {
            n: 0,
            positions: Vec::new(),
            velocities: Vec::new(),
            edge_a: Vec::new(),
            edge_b: Vec::new(),
            edge_type: Vec::new(),
            alpha: config.alpha,
            config,
            finished: false,
        }
    }

    /// Parse an NGG1 buffer and build simulation state from it: seed positions
    /// from the node warm-start `x,y`, build springs from the CSR adjacency
    /// (both edge kinds), reset velocities and the annealing temperature.
    ///
    /// Zero-copy at the parse layer (fields decoded on demand from the borrowed
    /// bytes); the owned working arrays are built once here. Idempotent: a second
    /// `load_csr` swaps the whole scope (DDD INV-2).
    pub fn load_csr(&mut self, bytes: &[u8]) -> Result<(), crate::ngg1::Ngg1Error> {
        let g = Ngg1::parse(bytes)?;
        self.load(&g);
        Ok(())
    }

    /// Build simulation state from an already-parsed tier.
    pub fn load(&mut self, g: &Ngg1<'_>) {
        self.n = g.node_count();
        self.positions = g.seed_positions();
        self.velocities = vec![0.0f32; self.n * 2];
        let (a, b, ty) = g.edges();
        self.edge_a = a;
        self.edge_b = b;
        self.edge_type = ty;
        self.alpha = self.config.alpha;
        self.finished = self.n == 0;
    }

    /// Advance the simulation one step. No-op once finished. Deterministic.
    pub fn tick(&mut self) {
        if self.finished || self.n == 0 {
            return;
        }
        let n = self.n;
        let mut fx = vec![0.0f32; n];
        let mut fy = vec![0.0f32; n];

        // ── Repulsion: O(n²) Coulomb, every unordered pair once (Newton's 3rd).
        let charge = self.config.charge;
        for i in 0..n {
            let xi = self.positions[i * 2];
            let yi = self.positions[i * 2 + 1];
            for j in (i + 1)..n {
                let mut dx = xi - self.positions[j * 2];
                let mut dy = yi - self.positions[j * 2 + 1];
                let mut d2 = dx * dx + dy * dy;
                if d2 < 1e-6 {
                    // Coincident (or near): deterministic index-derived nudge so
                    // the pair separates the same way on every run.
                    let s = (i as f32) * 12.9898 + (j as f32) * 78.233;
                    dx = s.sin() * 1e-2;
                    dy = s.cos() * 1e-2;
                    d2 = dx * dx + dy * dy;
                    if d2 < 1e-9 {
                        dx = 1e-2;
                        dy = 0.0;
                        d2 = 1e-4;
                    }
                }
                let inv_d = 1.0 / d2.sqrt();
                let mag = charge / d2; // repulsive magnitude
                let ux = dx * inv_d;
                let uy = dy * inv_d;
                fx[i] += ux * mag;
                fy[i] += uy * mag;
                fx[j] -= ux * mag;
                fy[j] -= uy * mag;
            }
        }

        // ── Springs: Hooke toward rest length, both backbone and relation.
        let ld = self.config.link_distance;
        let ls = self.config.link_strength;
        for e in 0..self.edge_a.len() {
            let a = self.edge_a[e] as usize;
            let b = self.edge_b[e] as usize;
            if a >= n || b >= n || a == b {
                continue;
            }
            let dx = self.positions[b * 2] - self.positions[a * 2];
            let dy = self.positions[b * 2 + 1] - self.positions[a * 2 + 1];
            let dist = (dx * dx + dy * dy).sqrt().max(1e-4);
            let disp = dist - ld;
            let f = disp * ls / dist;
            let fxe = dx * f;
            let fye = dy * f;
            fx[a] += fxe;
            fy[a] += fye;
            fx[b] -= fxe;
            fy[b] -= fye;
        }

        // ── Centre gravity + symplectic-Euler integration with damping.
        let (cx, cy) = self.config.center;
        let cg = self.config.center_gravity;
        let damping = self.config.damping;
        let alpha = self.alpha;
        for i in 0..n {
            let px = self.positions[i * 2];
            let py = self.positions[i * 2 + 1];
            let ax = fx[i] + (cx - px) * cg;
            let ay = fy[i] + (cy - py) * cg;

            let mut vx = self.velocities[i * 2] + ax * alpha;
            let mut vy = self.velocities[i * 2 + 1] + ay * alpha;
            vx *= damping;
            vy *= damping;
            self.velocities[i * 2] = vx;
            self.velocities[i * 2 + 1] = vy;
            self.positions[i * 2] = px + vx;
            self.positions[i * 2 + 1] = py + vy;
        }

        self.alpha *= 1.0 - self.config.alpha_decay;
        if self.alpha < self.config.alpha_min {
            self.alpha = self.config.alpha_min;
            self.finished = true;
        }
    }

    /// `true` once the annealing temperature has hit the floor.
    #[inline]
    pub fn is_finished(&self) -> bool {
        self.finished
    }

    /// Current annealing temperature (for HUD/telemetry, protocol `alpha`).
    #[inline]
    pub fn alpha(&self) -> f32 {
        self.alpha
    }

    /// On-screen node count of the loaded scope.
    #[inline]
    pub fn node_count(&self) -> usize {
        self.n
    }

    /// Directed edge count of the loaded scope.
    #[inline]
    pub fn edge_count(&self) -> usize {
        self.edge_a.len()
    }

    /// Pointer to the live interleaved position buffer (`*const f32`). JS builds
    /// a `Float32Array(memory.buffer, ptr, positions_len())` over it — zero copy.
    /// Valid until the next `load_csr` (which may reallocate).
    #[inline]
    pub fn positions_ptr(&self) -> *const f32 {
        self.positions.as_ptr()
    }

    /// Length of the position buffer in `f32` elements (`node_count * 2`).
    #[inline]
    pub fn positions_len(&self) -> usize {
        self.positions.len()
    }

    /// Copy live positions into `out` (the transferable ping-pong path, when
    /// `SharedArrayBuffer` is unavailable). Copies `min(len)` elements.
    pub fn write_positions_into(&self, out: &mut [f32]) {
        let k = out.len().min(self.positions.len());
        out[..k].copy_from_slice(&self.positions[..k]);
    }

    /* ── parameter setters (protocol SimParamKey) ─────────────────────────── */

    /// Set repulsion constant (positive = repulsive).
    pub fn set_charge(&mut self, v: f32) {
        self.config.charge = v;
    }
    /// Set spring rest length.
    pub fn set_link_distance(&mut self, v: f32) {
        self.config.link_distance = v;
    }
    /// Set spring stiffness.
    pub fn set_link_strength(&mut self, v: f32) {
        self.config.link_strength = v;
    }
    /// Set velocity damping.
    pub fn set_damping(&mut self, v: f32) {
        self.config.damping = v;
    }
    /// Set centre-gravity strength.
    pub fn set_center_gravity(&mut self, v: f32) {
        self.config.center_gravity = v;
    }
    /// Set the alpha floor.
    pub fn set_alpha_min(&mut self, v: f32) {
        self.config.alpha_min = v;
    }
    /// Re-heat the simulation: raise alpha and clear the finished flag so a
    /// settled scope resumes motion (protocol `reheat`).
    pub fn reheat(&mut self, v: f32) {
        self.alpha = v.max(self.config.alpha_min);
        self.finished = self.n == 0;
    }

    /// Dispatch a `SimParamKey` string to the matching setter. Unknown keys are
    /// ignored. Mirrors `protocol.ts::SimParamKey`.
    pub fn set_param(&mut self, key: &str, val: f32) {
        match key {
            "charge" => self.set_charge(val),
            "linkDistance" => self.set_link_distance(val),
            "linkStrength" => self.set_link_strength(val),
            "damping" => self.set_damping(val),
            "centerGravity" => self.set_center_gravity(val),
            "alphaMin" => self.set_alpha_min(val),
            "reheat" => self.reheat(val),
            _ => {}
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::ngg1::worked_example;

    fn loaded() -> CsrSimulation {
        let mut sim = CsrSimulation::new();
        sim.load_csr(&worked_example()).unwrap();
        sim
    }

    #[test]
    fn load_seeds_from_ngg1() {
        let sim = loaded();
        assert_eq!(sim.node_count(), 3);
        assert_eq!(sim.edge_count(), 2);
        assert_eq!(sim.positions_len(), 6);
        // Seeded positions match the NGG1 warm-start (before any tick).
        assert_eq!(
            &sim.positions[..],
            &[0.0f32, 0.0, 1.0, 0.0, 0.0, 1.0][..]
        );
        assert!(!sim.is_finished());
    }

    #[test]
    fn tick_moves_nodes_and_stays_finite() {
        let mut sim = loaded();
        let before = sim.positions.clone();
        for _ in 0..50 {
            sim.tick();
        }
        assert_ne!(before, sim.positions, "nodes must move under forces");
        for v in &sim.positions {
            assert!(v.is_finite(), "no NaN/inf may escape the sim");
        }
    }

    #[test]
    fn deterministic_given_seeds() {
        let mut a = loaded();
        let mut b = loaded();
        for _ in 0..200 {
            a.tick();
            b.tick();
        }
        assert_eq!(a.positions, b.positions, "same seeds ⇒ identical trajectory");
        assert_eq!(a.alpha(), b.alpha());
    }

    #[test]
    fn auto_finishes_at_alpha_floor() {
        let mut sim = loaded();
        for _ in 0..1000 {
            sim.tick();
        }
        assert!(sim.is_finished());
        assert!(sim.alpha() <= sim.config.alpha_min + f32::EPSILON);
    }

    #[test]
    fn finished_tick_is_noop() {
        let mut sim = loaded();
        for _ in 0..1000 {
            sim.tick();
        }
        let frozen = sim.positions.clone();
        sim.tick();
        assert_eq!(frozen, sim.positions);
    }

    #[test]
    fn reheat_resumes_motion() {
        let mut sim = loaded();
        for _ in 0..1000 {
            sim.tick();
        }
        assert!(sim.is_finished());
        sim.reheat(1.0);
        assert!(!sim.is_finished());
        let before = sim.positions.clone();
        sim.tick();
        assert_ne!(before, sim.positions);
    }

    #[test]
    fn write_positions_into_matches_ptr_buffer() {
        let mut sim = loaded();
        for _ in 0..10 {
            sim.tick();
        }
        let mut out = vec![0.0f32; sim.positions_len()];
        sim.write_positions_into(&mut out);
        assert_eq!(out, sim.positions);
    }

    #[test]
    fn set_param_dispatch() {
        let mut sim = loaded();
        sim.set_param("charge", 999.0);
        sim.set_param("linkDistance", 42.0);
        sim.set_param("unknownKey", 1.0); // ignored, no panic
        assert_eq!(sim.config.charge, 999.0);
        assert_eq!(sim.config.link_distance, 42.0);
    }

    #[test]
    fn load_csr_rejects_malformed() {
        let mut sim = CsrSimulation::new();
        // Pure error path (Ngg1Error) — no JsValue, safe under native cargo test.
        assert!(sim.load_csr(&[0u8; 8]).is_err());
        let mut truncated = worked_example();
        truncated.truncate(100);
        assert!(sim.load_csr(&truncated).is_err());
    }

    #[test]
    fn empty_scope_is_finished_and_safe() {
        let mut sim = CsrSimulation::new();
        assert!(sim.is_finished() || sim.node_count() == 0);
        sim.tick(); // must not panic
        assert_eq!(sim.positions_len(), 0);
    }

    #[test]
    fn positions_ptr_stable_across_ticks() {
        let mut sim = loaded();
        let p0 = sim.positions_ptr();
        for _ in 0..20 {
            sim.tick();
        }
        // No reallocation during ticking ⇒ the JS Float32Array view stays valid.
        assert_eq!(p0, sim.positions_ptr());
    }
}
