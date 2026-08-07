public:: true

# Qubit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:75fba45b9a910debbf925ef0afec807420e7f593a9ef0478fee169d589c19fbe",
  "@type": "Page",
  "vc:slug": "qubit",
  "title": "Qubit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:quantum-computation-paradigm",
      "vc:label": "Quantum Computation Paradigm"
    },
    {
      "@id": "urn:visionflow:linked:quantum-computing",
      "vc:label": "Quantum Computing"
    },
    {
      "@id": "urn:visionflow:linked:information-theory",
      "vc:label": "Information Theory"
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
  "@id": "urn:ngm:class:qubit",
  "@type": "Class",
  "label": "Qubit",
  "definition": "The fundamental unit of quantum information: a two-level quantum system whose state is a complex linear superposition α|0⟩ + β|1⟩ of computational basis states, capable of entanglement with other qubits and collapsing probabilistically on measurement; physically realised as superconducting transmon circuits, trapped-ion energy levels, photon polarisation, neutral-atom states or electron spins, and the resource whose coherence time, gate fidelity and count determine what a quantum computer can achieve.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:quantum-computation-paradigm",
    "label": "Quantum Computation Paradigm"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:quantum-computing",
        "label": "Quantum Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The fundamental unit of quantum information: a two-level quantum system whose state is a complex linear superposition α|0⟩ + β|1⟩ of computational basis states, capable of entanglement with other qubits and collapsing probabilistically on measurement; physically realised as superconducting transmon circuits, trapped-ion energy levels, photon polarisation, neutral-atom states or electron spins, and the resource whose coherence time, gate fidelity and count determine what a quantum computer can achieve."

- ### Semantic Classification
  - owl-class:: infrastructure:Qubit
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Quantum Computation Paradigm]]
  - part-of:: [[Quantum Computing]]
  - related-to:: [[Information Theory]]

- ### Content

  ## Definition

  A **qubit** (quantum bit) is the quantum analogue of the classical bit. Its state lives in a two-dimensional complex Hilbert space and is written |ψ⟩ = α|0⟩ + β|1⟩ with |α|² + |β|² = 1: rather than being 0 or 1, the qubit holds a definite superposition whose amplitudes are complex numbers carrying both magnitude and phase. Geometrically every pure single-qubit state is a point on the Bloch sphere, with |0⟩ and |1⟩ at the poles and quantum gates acting as rotations. Measurement in the computational basis yields 0 with probability |α|² and 1 with probability |β|², irreversibly collapsing the superposition — which is why quantum algorithms must use interference to concentrate probability on correct answers before measuring.

  The power of qubits emerges collectively. Two or more qubits can be entangled, occupying joint states such as the Bell state (|00⟩ + |11⟩)/√2 that cannot be factored into independent single-qubit states; an n-qubit register requires 2ⁿ amplitudes to describe, which is simultaneously the reason quantum systems are hard to simulate classically and the resource [[Quantum Computing]] exploits. Quantum information theory extends Shannon's framework to this setting: the no-cloning theorem forbids copying an unknown qubit, and entanglement becomes a quantifiable resource for teleportation and superdense coding, tying the qubit directly to [[Information Theory]].

  ## Technical Details

  Physical qubits are imperfect: interaction with the environment causes decoherence, characterised by relaxation time T₁ and dephasing time T₂, and gates introduce errors at rates around 10⁻³–10⁻⁴ on today's best hardware. Leading implementations trade off differently — superconducting transmons switch in nanoseconds but must be held at ~15 millikelvin and cohere for microseconds to milliseconds; trapped ions offer minutes-scale coherence and the highest two-qubit fidelities but slower gates; photonic qubits travel at light speed and resist decoherence but are hard to make interact; neutral-atom arrays scale to thousands of physical qubits with reconfigurable connectivity. Because error rates far exceed what long algorithms tolerate, quantum error correction encodes one logical qubit redundantly across many physical qubits (the surface code needs roughly a thousand physical qubits per logical qubit at current fidelities), making the physical-to-logical ratio the key metric on every hardware roadmap. Distinct notions — the physical qubit, the error-corrected logical qubit, and the algorithmic qubit counted by applications — should not be conflated when comparing platforms.
