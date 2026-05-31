- ### Definition
  - A family of cryptographic constructions whose security rests on the hardness of computational problems over high-dimensional lattices, such as learning with errors. These problems are believed to resist attacks by quantum computers.

- ### Semantic Classification
  - owl-class:: cryptographic:LatticeCryptography
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Post-Quantum Cryptography]]
  - bridges-to:: [[Cryptographic Primitive]], [[Quantum Computing]]
  - requires:: [[Cryptography]]
  - enables:: [[Encryption]], [[Digital Signature]]

- ### Content
  - Lattice cryptography builds encryption, signatures and advanced primitives on the difficulty of finding short or close vectors in a lattice, including the learning with errors problem. These problems have no known efficient quantum algorithm, which makes the schemes candidates for post-quantum security.
  - Lattice methods also support functionality such as fully homomorphic encryption, which allows computation on encrypted data. Several lattice-based schemes were selected in standardisation efforts for quantum-resistant key exchange and signatures.

- ### Provenance
  - sources:: [[https://csrc.nist.gov/projects/post-quantum-cryptography]]
  - migration-date:: 2026-05-29T00:00:00Z