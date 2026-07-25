//! Integration test for the public NGG1 explorer surface (ADR-NG-001 §3),
//! driven through the exact crate API a consumer sees. Uses the FORMAT-NGG1 §7
//! worked-example bytes (183 bytes, byte-exact) — the twin of the `ngg1-3n2e.bin`
//! golden fixtures.

use webvowl_wasm::bindings::explorer::NggExplorer;
use webvowl_wasm::ngg1::Ngg1;

/// FORMAT-NGG1 §7 worked example (3 nodes, 2 edges). Kept byte-identical to the
/// spec hex dump and to the unit-test twin in `src/ngg1.rs`.
fn worked_example() -> Vec<u8> {
    let bytes: Vec<u8> = vec![
        // header
        0x4E, 0x47, 0x47, 0x31, 0x01, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00,
        0x00, 0x20, 0x00, 0x00, 0x00, 0x68, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x84, 0x00,
        0x00, 0x00, // nodes
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, // n0
        0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x3F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, // n1
        0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x3F, 0x00, 0x00, 0x01,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, // n2
        // adjacency
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, // edge types + pad
        0x00, 0x01, 0x00, 0x00, // strings header
        0x06, 0x00, 0x00, 0x00, 0x13, 0x00, 0x00, 0x00, // offsets
        0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00,
        0x00, 0x0C, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00, // blob
        0x41, 0x49, 0x6E, 0x67, 0x3A, 0x30, 0x4D, 0x4C, 0x6E, 0x67, 0x3A, 0x31, 0x4E, 0x4C, 0x50,
        0x6E, 0x67, 0x3A, 0x32,
    ];
    assert_eq!(bytes.len(), 183);
    bytes
}

#[test]
fn ngg1_reader_round_trips_spec_assertions() {
    // FORMAT-NGG1 §7 "Round-trip assertions".
    let b = worked_example();
    let g = Ngg1::parse(&b).unwrap();
    assert_eq!(g.node_count(), 3);
    assert_eq!(g.edge_count(), 2);
    assert_eq!(g.node(1).x, 1.0);
    assert_eq!(g.node(2).y, 1.0);
    assert_eq!(g.node(1).degree, 2);
    assert_eq!(g.label(1), "ML");
    assert_eq!(g.iri(1), "ng:1");
    assert_eq!(g.row_ptr(3), g.edge_count() as u32);
    let (src, tgt, ty) = g.edges();
    assert_eq!((src, tgt, ty), (vec![1, 1], vec![0, 2], vec![0, 1]));
}

#[test]
fn explorer_loads_ticks_and_settles() {
    let mut ex = NggExplorer::new();
    ex.load_csr(&worked_example()).unwrap();
    assert_eq!(ex.node_count(), 3);
    assert_eq!(ex.edge_count(), 2);
    assert_eq!(ex.positions_len(), 6);
    assert!(!ex.is_finished());

    // Drive to the alpha floor.
    for _ in 0..1000 {
        ex.tick();
    }
    assert!(ex.is_finished());

    // Transferable-path copy matches whatever the zero-copy pointer would view.
    let mut out = vec![0.0f32; ex.positions_len()];
    ex.write_positions_into(&mut out);
    for v in &out {
        assert!(v.is_finite());
    }
}

#[test]
fn explorer_is_deterministic() {
    let mut a = NggExplorer::new();
    let mut b = NggExplorer::new();
    a.load_csr(&worked_example()).unwrap();
    b.load_csr(&worked_example()).unwrap();
    for _ in 0..300 {
        a.tick();
        b.tick();
    }
    let mut pa = vec![0.0f32; a.positions_len()];
    let mut pb = vec![0.0f32; b.positions_len()];
    a.write_positions_into(&mut pa);
    b.write_positions_into(&mut pb);
    assert_eq!(pa, pb, "same NGG1 seeds must yield identical layouts");
}

// NB: the malformed-input error path (`NggExplorer::load_csr` → `Err(JsValue)`)
// is covered at the pure layer instead — `Ngg1::parse` rejection in the unit
// tests and `CsrSimulation::load_csr` in `csr_sim`. Exercising the `JsValue`
// error branch here would abort under native `cargo test` (wasm-bindgen 0.2's
// `JsValue::from_str` is a no-op-panic off wasm32); it is validated under
// `wasm-pack test`.

#[test]
fn explorer_setparam_reheat() {
    let mut ex = NggExplorer::new();
    ex.load_csr(&worked_example()).unwrap();
    for _ in 0..1000 {
        ex.tick();
    }
    assert!(ex.is_finished());
    ex.set_param("reheat", 1.0);
    assert!(!ex.is_finished());
}
