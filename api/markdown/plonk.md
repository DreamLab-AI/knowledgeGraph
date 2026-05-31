- ### Definition
  - PLONK is a zero-knowledge proof system that uses polynomial commitments and a universal trusted setup. It is used to build succinct proofs for verifiable computation.

- ### Semantic Classification
  - owl-class:: blockchain:PLONK
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Scroll]]
  - requires:: [[Cryptography]]
  - enables:: [[Rollup]]

- ### Content
  - PLONK is a proof system that lets a prover convince a verifier that a computation was performed correctly while revealing nothing beyond its validity. It relies on polynomial commitments and a setup that can be reused across many circuits.
  - The universal setup distinguishes PLONK from earlier systems that required a fresh setup for each circuit. PLONK and its variants are used in zero-knowledge rollups and other applications that need compact proofs of computation.

- ### Provenance
  - sources:: [[https://eprint.iacr.org/2019/953]], [[https://vitalik.eth.limo/general/2019/09/22/plonk.html]]
  - migration-date:: 2026-05-29T00:00:00Z