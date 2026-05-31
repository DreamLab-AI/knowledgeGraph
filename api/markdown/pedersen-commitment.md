- ### Definition
  - A cryptographic commitment scheme that lets a party commit to a value while keeping it hidden, with the ability to reveal it later. It is both binding and information-theoretically hiding, and it is additively homomorphic.

- ### Semantic Classification
  - owl-class:: cryptography:PedersenCommitment
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Commitment]]
  - bridges-to:: [[Cryptographic Commitment]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[Zero-Knowledge Proof]]

- ### Content
  - A Pedersen commitment to a value uses a blinding factor and two group generators, producing a commitment that reveals nothing about the value while binding the committer to it under the discrete logarithm assumption.
  - Its homomorphic property means commitments to two values can be combined into a commitment to their sum, which makes it useful in confidential transactions, range proofs, and various zero-knowledge protocols.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z