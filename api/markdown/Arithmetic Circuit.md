public:: true

# Arithmetic Circuit

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:arithmetic-circuit",
  "@type": "Page",
  "title": "Arithmetic Circuit",
  "vc:slug": "arithmetic-circuit",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arithmetic-circuit",
  "@type": "Class",
  "label": "Arithmetic Circuit",
  "definition": "A directed acyclic graph (DAG) of addition and multiplication gates over a field, used to represent polynomial computations in a form amenable to cryptographic proof systems. Arithmetic circuits are the canonical intermediate representation for zero-knowledge proof schemes such as zk-SNARKs and STARKs: a computation is first expressed as an arithmetic circuit, then compiled into a system of polynomial constraints (R1CS or Plonkish), and finally proved using a cryptographic proving system. The complexity of a circuit is characterised by its depth (for parallelism) and size (gate count).",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:security", "label": "Security"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:finite-field-arithmetic", "label": "Finite Field Arithmetic"},
      {"@id": "urn:ngm:class:polynomial-commitment", "label": "Polynomial Commitment"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:constraint-system", "label": "Constraint System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:zk-snark", "label": "zk-SNARK"},
      {"@id": "urn:ngm:class:zk-starks", "label": "zk-STARK"},
      {"@id": "urn:ngm:class:verifiable-computation", "label": "Verifiable Computation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:logic-gate", "label": "Logic Gate"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:boolean-circuit", "label": "Boolean Circuit"},
      {"@id": "urn:ngm:class:homomorphic-encryption", "label": "Homomorphic Encryption"},
      {"@id": "urn:ngm:class:secure-multi-party-computation", "label": "Secure Multi-Party Computation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:boolean-circuit", "label": "Boolean Circuit"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:privacy-preserving-computation", "label": "Privacy-Preserving Computation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An [[Arithmetic Circuit]] is a DAG of addition and multiplication gates over a finite field, providing the foundational intermediate representation for [[Zero-Knowledge Proof]] and [[Verifiable Computation]] systems.
  - It bridges abstract computation descriptions to cryptographic constraint systems, enabling compilers to transform high-level programs into provable [[Constraint System]] representations used by [[zk-SNARK]] and [[zk-STARK]] backends.

- ### Overview
  - Arithmetic circuits occupy a central position in modern cryptographic engineering: nearly every practical zero-knowledge proof system compiles a target computation to an arithmetic circuit before generating proof constraints.
  - The circuit is defined over a large prime field; inputs and outputs are field elements; intermediate values at each gate are constrained to satisfy the circuit's wiring.
  - Circuit complexity determines prover time and proof size — minimising gate count and depth is an active area of compiler research for zkEVMs and similar systems.
  - Domain-specific languages (DSLs) such as Circom, Noir, and Cairo compile human-readable constraint descriptions to arithmetic circuits automatically.

- ### Key Aspects
  - **Field selection** — the prime modulus of the underlying field must be chosen to match the elliptic curve or hash function used in the proving system.
  - **R1CS encoding** — rank-1 constraint systems encode each multiplication gate as a linear-algebraic constraint triplet.
  - **Plonkish variants** — custom gate types (plookup, range checks) extend vanilla arithmetic circuits for efficiency.
  - **Depth vs width** — shallow wide circuits parallelise better; deep narrow circuits minimise gates but impede parallelism.

- ### Applications
  - zk-rollup transaction validity proofs in [[Blockchain]] layer-2 scaling.
  - Privacy-preserving credential verification without revealing underlying attributes.
  - Verifiable machine learning inference proofs over neural network weights.
  - [[Homomorphic Encryption]] circuit compilation for outsourced computation.

- ### Relationships
  - requires:: [[Finite Field Arithmetic]]
  - requires:: [[Polynomial Commitment]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Constraint System]]
  - enables:: [[zk-SNARK]]
  - enables:: [[zk-STARK]]
  - enables:: [[Verifiable Computation]]
  - hasPart:: [[Logic Gate]]
  - relatedTo:: [[Boolean Circuit]]
  - relatedTo:: [[Homomorphic Encryption]]
  - relatedTo:: [[Secure Multi-Party Computation]]
  - contrastsWith:: [[Boolean Circuit]]
  - dependsOn:: [[Elliptic Curve Cryptography]]
  - supports:: [[Privacy-Preserving Computation]]
  - implements:: [[Cryptographic Protocol]]
  - bridgesTo:: [[Blockchain]]

- ### Provenance
  - updated:: 2026-06-15
