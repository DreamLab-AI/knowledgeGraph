public:: true

# Quantum Error Correction
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:quantum-error-correction", "@type":"Page", "title":"Quantum Error Correction", "vc:slug":"quantum-error-correction", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:quantum-error-correction",
  "@type":"Class",
  "label":"Quantum Error Correction",
  "definition":"Quantum error correction is the set of techniques that protect quantum information against decoherence and operational noise by encoding a logical qubit redundantly across many physical qubits. Stabiliser measurements detect errors without collapsing the encoded state, allowing the system to diagnose and reverse bit-flip and phase-flip faults. It is the central prerequisite for fault-tolerant quantum computation, where logical error rates can be driven arbitrarily low provided physical error rates fall below a threshold.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:quantum-computation-paradigm","label":"Quantum Computation Paradigm"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:qubit","label":"Qubit"},
      {"@id":"urn:ngm:class:quantum-gate","label":"Quantum Gate"},
      {"@id":"urn:ngm:class:error-correction","label":"Error Correction"}
    ],
    "partOf":[{"@id":"urn:ngm:class:quantum-computation-paradigm","label":"Quantum Computation Paradigm"}],
    "requires":[
      {"@id":"urn:ngm:class:qubit","label":"Qubit"},
      {"@id":"urn:ngm:class:linear-algebra","label":"Linear Algebra"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:quantum-computation-paradigm","label":"Quantum Computation Paradigm"},
      {"@id":"urn:ngm:class:quantum-cryptography","label":"Quantum Cryptography"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:quantum-gate","label":"Quantum Gate"},
      {"@id":"urn:ngm:class:error-correction","label":"Error Correction"}
    ],
    "dependsOn":[{"@id":"urn:ngm:class:qubit","label":"Qubit"}],
    "uses":[{"@id":"urn:ngm:class:linear-algebra","label":"Linear Algebra"}],
    "bridgesTo":[
      {"@id":"urn:ngm:class:post-quantum-cryptography","label":"Post-Quantum Cryptography"},
      {"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:quantum-computation-paradigm","label":"Quantum Computation Paradigm"},
      {"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Quantum error correction protects fragile quantum information by encoding a logical [[Qubit]] redundantly across many physical qubits and measuring stabilisers to detect faults without destroying the encoded state. It generalises classical [[Error Correction]] to the constraints of quantum mechanics.
- ### Overview
- Quantum states cannot be copied or measured directly without disturbance, so classical redundancy schemes do not transfer; quantum codes instead spread information non-locally and read out only error syndromes.
- A logical qubit is built from many noisy physical qubits, and repeated syndrome extraction identifies which correctable error occurred so it can be reversed.
- The threshold theorem shows that if physical error rates sit below a code-specific threshold, arbitrarily reliable [[Quantum Computation Paradigm]] computation is achievable by scaling the code distance.
- ### Mechanisms
- Encode logical information across an entangled block of physical qubits.
- Measure commuting stabiliser operators to obtain a syndrome without collapsing the data.
- Decode the syndrome to infer the most likely error and apply a correction.
- Repeat continuously to combat ongoing decoherence and gate noise.
- Compose corrected operations into fault-tolerant logical [[Quantum Gate]] sequences.
- ### Applications
- Realising fault-tolerant [[Quantum Computation Paradigm]] devices at scale.
- Preserving entanglement for long-distance [[Quantum Cryptography]] links.
- Underpinning resilient quantum [[Infrastructure]] and repeaters.
- Benchmarking hardware against the error-correction threshold.
- ### Relationships
- hasPart:: [[Qubit]]
- hasPart:: [[Quantum Gate]]
- hasPart:: [[Error Correction]]
- partOf:: [[Quantum Computation Paradigm]]
- requires:: [[Qubit]]
- requires:: [[Linear Algebra]]
- enables:: [[Quantum Computation Paradigm]]
- enables:: [[Quantum Cryptography]]
- supports:: [[Quantum Gate]]
- supports:: [[Error Correction]]
- dependsOn:: [[Qubit]]
- uses:: [[Linear Algebra]]
- bridgesTo:: [[Post-Quantum Cryptography]]
- bridgesTo:: [[Fault Tolerance]]
- relatedTo:: [[Quantum Computation Paradigm]]
- relatedTo:: [[Infrastructure]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
