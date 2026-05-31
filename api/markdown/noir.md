- ### Definition
  - A domain-specific programming language for writing zero-knowledge proofs, developed by Aztec. It abstracts the underlying proving system so developers can express circuits without low-level cryptographic detail.

- ### Semantic Classification
  - owl-class:: blockchain:Noir
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Programming Language]]
  - bridges-to:: [[Cryptographic Protocol]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[ZK-SNARK]]

- ### Content
  - Noir is a language designed for writing programs that compile into zero-knowledge proof circuits. It uses a Rust-like syntax and aims to let developers create provable computations without expertise in the underlying cryptography.
  - Developed by Aztec, Noir targets multiple proving backends, separating the program logic from the specific proof system, which allows the same code to be used with different cryptographic backends.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z