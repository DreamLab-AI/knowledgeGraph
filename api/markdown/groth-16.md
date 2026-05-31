- ### Definition
  - A pairing-based zk-SNARK proving system that produces constant-size proofs verifiable with a few elliptic curve pairing operations, at the cost of a per-circuit trusted setup.

- ### Semantic Classification
  - owl-class:: cryptographic:Groth16
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[ZK-SNARK]]
  - bridges-to:: [[Cryptographic Primitive]]
  - requires:: [[Elliptic Curve Cryptography]], [[ZK-SNARK]]
  - enables:: [[Zero-Knowledge Proof]]

- ### Content
  - Groth16 is a succinct non-interactive argument whose proofs consist of only three group elements and are verified with a small fixed number of pairing checks. It is valued for very small proof sizes and fast verification.
  - The scheme requires a trusted setup that is specific to the circuit being proved, producing a structured reference string. It has been a common choice for privacy and scaling systems where minimal on-chain verification cost matters.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z