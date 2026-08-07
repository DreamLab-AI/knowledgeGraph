public:: true

# Quantum Gate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2063ab8b5efa6f8d241c8587e45e41eafe272fdc6eb7599a1b3de62656dcd2d7",
  "@type": "Page",
  "vc:slug": "quantum-gate",
  "title": "Quantum Gate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:quantum-computation-paradigm",
      "vc:label": "Quantum Computation Paradigm"
    },
    {
      "@id": "urn:visionflow:linked:quantum-mechanics",
      "vc:label": "Quantum Mechanics"
    },
    {
      "@id": "urn:visionflow:linked:quantum-error-correction",
      "vc:label": "Quantum Error Correction"
    },
    {
      "@id": "urn:visionflow:linked:linear-algebra",
      "vc:label": "Linear Algebra"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quantum-gate",
  "@type": "Class",
  "label": "Quantum Gate",
  "definition": "A reversible, unitary operation applied to a small number of qubits that transforms their joint quantum state, serving as the fundamental building block of quantum circuits in the gate-based model of quantum computation. Quantum gates are the analogue of classical logic gates but, being unitary matrices acting on complex state vectors, they can create superposition and entanglement, and any quantum algorithm can be decomposed into sequences drawn from a small universal gate set.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:quantum-computation-paradigm",
    "label": "Quantum Computation Paradigm"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:quantum-computation-paradigm",
        "label": "Quantum Computation Paradigm"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:quantum-mechanics",
        "label": "Quantum Mechanics"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quantum-error-correction",
        "label": "Quantum Error Correction"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A reversible, unitary operation applied to a small number of qubits that transforms their joint quantum state, serving as the fundamental building block of quantum circuits in the gate-based model of quantum computation. Quantum gates are the analogue of classical logic gates but, being unitary matrices acting on complex state vectors, they can create superposition and entanglement, and any quantum algorithm can be decomposed into sequences drawn from a small universal gate set."

- ### Semantic Classification
  - owl-class:: infrastructure:QuantumGate
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Quantum Computation Paradigm]]
  - depends-on:: [[Quantum Mechanics]], [[Linear Algebra]]
  - enables:: [[Quantum Error Correction]]

- ### Content

  ## Definition

  A **quantum gate** is the elementary operation of gate-based quantum computing: a unitary transformation U (satisfying U†U = I) applied to one, two, or occasionally three qubits. Where a classical logic gate maps definite bit values to definite bit values, a quantum gate rotates a state vector in a complex Hilbert space, so it can place a qubit into superposition, interfere amplitudes, and — crucially for computational advantage — entangle multiple qubits. Because unitary evolution is reversible, every quantum gate has an inverse, in contrast to irreversible classical gates such as AND and OR.

  Single-qubit gates are 2×2 unitary matrices acting on the state α|0⟩ + β|1⟩. Canonical examples include the Pauli gates X (bit flip), Y, and Z (phase flip); the Hadamard gate H, which maps basis states to equal superpositions; the phase gate S; and the T gate, which supplies the non-Clifford resource needed for universality. Two-qubit gates such as the controlled-NOT (CNOT) and controlled-Z act on 4-dimensional joint states and are the standard mechanism for generating entanglement. A gate set is universal when arbitrary unitaries can be approximated to any precision from its elements — {H, T, CNOT} is the textbook example, with the Solovay–Kitaev theorem guaranteeing efficient approximation.

  Quantum circuits, as formalised within the [[Quantum Computation Paradigm]], are timed sequences of gates applied to registers of qubits followed by measurement. All the celebrated algorithms — Shor's factoring, Grover's search, quantum phase estimation, and the variational circuits used on near-term hardware — are ultimately compiled down to such gate sequences and then to the native gate set of a physical machine.

  ## Technical Details

  - **Mathematical form**: an n-qubit gate is a 2ⁿ × 2ⁿ unitary matrix; composition of gates is matrix multiplication, and gates acting on disjoint qubits combine by tensor product.
  - **Physical realisation**: microwave pulses on superconducting transmons (typical two-qubit gate times 20–200 ns), laser pulses on trapped ions (slower, ~10–100 µs, but higher fidelity), and photonic or neutral-atom implementations. Native gate sets differ by platform (e.g. cross-resonance or iSWAP-family gates on superconductors, Mølmer–Sørensen gates on ions).
  - **Fidelity**: state-of-the-art two-qubit gate error rates are in the 10⁻³–10⁻⁴ range. Since errors compound multiplicatively across deep circuits, gate fidelity is the binding constraint on useful circuit depth and the reason [[Quantum Error Correction]] — itself implemented from sequences of physical gates — is required for fault-tolerant computation.
  - **Compilation**: transpilers decompose abstract algorithm-level unitaries into native gates, route entangling gates across limited hardware connectivity, and optimise depth; the T-gate count is the standard cost metric for fault-tolerant execution because non-Clifford gates require expensive magic-state distillation.

  ## Current Landscape

  - **Below-threshold gates (Feb 2025)**: Google's Willow surface-code result — logical error suppressed by Λ = 2.14 on a 101-qubit distance-7 code, with a 1.1 µs syndrome-extraction cycle and ~63 µs real-time decoder latency — is the clearest demonstration that physical gate fidelities have crossed the surface-code threshold, the precondition for fault-tolerant gate execution.
  - **Fidelity frontier**: state-of-the-art two-qubit gate errors sit in the 10⁻³–10⁻⁴ range; trapped-ion and neutral-atom platforms report the highest fidelities, while superconducting transmons offer the fastest gates (tens to low-hundreds of ns).
  - **Overhead reduction (2025)**: work on algorithmic fault tolerance (e.g. QuEra) and quantum LDPC codes (central to IBM's 2029 Starling roadmap) aims to cut the physical-gate overhead of error-corrected logical operations by up to ~90–100×, easing the magic-state-distillation cost that dominates non-Clifford (T-gate) budgets.
  - **Native gate diversity**: platforms continue to expose different native entangling gates (cross-resonance / iSWAP-family on superconductors, Mølmer–Sørensen on ions), so transpilation and gate-set compilation remain an active hardware-software co-design problem.

  **Sources**:
  - https://blog.google/innovation-and-ai/technology/research/google-willow-quantum-chip/
  - https://www.research-collection.ethz.ch/bitstreams/ff784bf1-6f08-48b5-a9c6-c61d13aba053/download
  - https://www.spinquanta.com/news-detail/quantum-computing-industry-trends-2025-breakthrough-milestones-commercial-transition

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
