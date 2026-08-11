public:: true

# Quantum Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:507c8335bc749943ef9e4628d1ed4494867b7c2cbd75653f18ff1ad22a2bd8ac",
  "@type": "Page",
  "vc:slug": "quantum-computing",
  "title": "Quantum Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:quantum-computation-paradigm",
      "vc:label": "Quantum Computation Paradigm"
    },
    {
      "@id": "urn:visionflow:linked:qubit",
      "vc:label": "Qubit"
    },
    {
      "@id": "urn:visionflow:linked:computational-complexity-theory",
      "vc:label": "Computational Complexity Theory"
    },
    {
      "@id": "urn:visionflow:linked:combinatorial-optimisation",
      "vc:label": "Combinatorial Optimisation"
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
  "@id": "urn:ngm:class:quantum-computing",
  "@type": "Class",
  "label": "Quantum Computing",
  "definition": "The engineering discipline and technology stack that performs computation using quantum-mechanical phenomena — superposition, entanglement and interference — over registers of qubits, spanning hardware platforms (superconducting circuits, trapped ions, photonics, neutral atoms), error correction, and algorithms such as Shor's factoring and Grover's search that offer provable or conjectured speed-ups over classical computation for specific problem classes including cryptanalysis, simulation of quantum systems and combinatorial optimisation.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:quantum-computation-paradigm",
    "label": "Quantum Computation Paradigm"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:qubit",
        "label": "Qubit"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computational-complexity-theory",
        "label": "Computational Complexity Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
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
  - "The engineering discipline and technology stack that performs computation using quantum-mechanical phenomena — superposition, entanglement and interference — over registers of qubits, spanning hardware platforms (superconducting circuits, trapped ions, photonics, neutral atoms), error correction, and algorithms such as Shor's factoring and Grover's search that offer provable or conjectured speed-ups over classical computation for specific problem classes including cryptanalysis, simulation of quantum systems and combinatorial optimisation."

- ### Semantic Classification
  - owl-class:: infrastructure:QuantumComputing
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Quantum Computation Paradigm]]
  - has-part:: [[Qubit]]
  - related-to:: [[Computational Complexity Theory]]
  - bridges-to:: [[Combinatorial Optimisation]]

- ### Content

  ## Definition

  **Quantum computing** realises the quantum computation paradigm as working machines. Where a classical bit is definitely 0 or 1, a register of n [[Qubit]]s occupies a superposition described by 2ⁿ complex amplitudes; quantum gates manipulate all amplitudes simultaneously, and interference is choreographed so that measurement yields a useful answer with high probability. The field's theoretical case rests on algorithms with proven separations: Shor's algorithm (1994) factors integers and computes discrete logarithms in polynomial time, threatening RSA and elliptic-curve cryptography, while Grover's algorithm gives a quadratic speed-up for unstructured search. Feynman's original motivation — efficiently simulating quantum systems themselves — remains the application with the clearest expected advantage, in quantum chemistry and materials science.

  In complexity-theoretic terms, quantum computers define the class BQP (bounded-error quantum polynomial time), believed to sit strictly between P and PSPACE and to be incomparable with NP; contrary to popular framing, they are not expected to solve NP-complete problems efficiently. This makes [[Computational Complexity Theory]] the discipline that delimits honest claims of quantum advantage. For [[Combinatorial Optimisation]], approaches such as the quantum approximate optimisation algorithm (QAOA) and quantum annealing offer heuristic routes whose practical benefit over the best classical heuristics is still an open empirical question.

  ## Current Landscape

  Hardware is in the transition from the NISQ (noisy intermediate-scale quantum) era towards early fault tolerance. Superconducting platforms (IBM, Google), trapped ions (Quantinuum, IonQ), neutral atoms (QuEra, Pasqal) and photonics (PsiQuantum, Xanadu) compete on qubit count, gate fidelity and error-corrected logical qubits; thousands of high-quality logical qubits are needed for cryptographically relevant workloads. The credible threat to public-key cryptography has already reshaped security practice: NIST finalised its first post-quantum cryptography standards (FIPS 203 ML-KEM, FIPS 204 ML-DSA, FIPS 205 SLH-DSA) in August 2024, and "harvest now, decrypt later" drives migration planning across governments and financial infrastructure. National programmes in the US, EU, UK and China treat quantum computing as strategic infrastructure, with the UK's National Quantum Strategy committing £2.5 billion over ten years.

  Dated developments:
  - **Dec 2024 / Feb 2025**: Google's 105-qubit Willow chip demonstrated *below-threshold* quantum error correction — published in Nature (Feb 2025), a 101-qubit distance-7 surface code suppresses the logical error rate by a factor Λ = 2.14 as code distance grows, the first convincing prototype of a scalable logical qubit.
  - **Oct 2025**: Google reported the first *verifiable* quantum advantage — its "Quantum Echoes" (OTOC) algorithm on Willow ran ~13,000× faster than the Frontier supercomputer on a reproducible, physically interpretable task.
  - **Nov 2025**: IBM's updated roadmap introduced Nighthawk (120 qubits, real-time qLDPC decoding) and set a fault-tolerant target of IBM Quantum Starling by 2029 (200 logical qubits, 100 million gates), scaling toward 1,000 logical qubits in the early 2030s.
  - **2025**: other groups replicated below-threshold operation (USTC's Zuchongzhi 3.2 via all-microwave control) and pushed neutral-atom fault tolerance (Harvard–QuEra, hundreds of qubits), broadening the platform race.

  **Sources**:
  - https://blog.google/innovation-and-ai/technology/research/google-willow-quantum-chip/
  - https://blog.google/innovation-and-ai/technology/research/quantum-hardware-verifiable-advantage/
  - https://www.moodys.com/web/en/us/insights/quantum/quantum-computings-six-most-important-trends-for-2025.html
