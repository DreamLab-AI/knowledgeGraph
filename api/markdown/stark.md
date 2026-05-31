- ### Definition
  - A STARK is a scalable transparent argument of knowledge, a cryptographic proof system that lets a verifier check a computation was performed correctly without a trusted setup and with proof verification far cheaper than re-execution.

- ### Semantic Classification
  - owl-class:: metaverse:STARK
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography Domain]]
  - bridges-to:: [[Cryptographic Hash Function]], [[Blockchain]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[Verifiable Computation]]

- ### Content
  - STARKs build succinct proofs from hash-based commitments and polynomial constraints, avoiding the trusted ceremony required by some other proof systems and resisting quantum attacks on their underlying assumptions. Proof size and verification scale favourably with computation size.
  - They are applied to verifiable computation and blockchain scaling, where a single proof attests that a large batch of transactions was processed correctly. This connects them to zero-knowledge proof techniques and to cryptographic hash functions used as the commitment primitive.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z