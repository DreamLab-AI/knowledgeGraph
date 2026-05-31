- ### Definition
  - A Zero-Knowledge Succinct Non-Interactive Argument of Knowledge is a proof that a statement is true while revealing nothing else, producing a small proof that is fast to verify.

- ### Semantic Classification
  - owl-class:: cryptographic:ZKSNARK
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[Groth16]]

- ### Content
  - A ZK-SNARK lets a prover convince a verifier that they know a witness satisfying some relation, without interaction and without disclosing the witness. The proof is succinct, meaning its size and verification time are small relative to the computation.
  - Many constructions require a trusted setup that produces public parameters, and security typically rests on assumptions over elliptic curve pairings. ZK-SNARKs are widely applied in privacy systems and validity rollups.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z