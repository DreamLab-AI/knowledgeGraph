- ### Definition
  - BitVM is a proposed approach for expressing complex computations that can be verified on Bitcoin without changing its consensus rules. It uses fraud proofs and challenge-response interactions.

- ### Semantic Classification
  - owl-class:: blockchain:BitVM
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Script]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Taproot]], [[Fraud Proof]]
  - enables:: [[Layer 2 Scaling]]

- ### Content
  - BitVM is a scheme for committing to arbitrary computations off-chain and resolving disputes on-chain through a challenge-response game. A party that makes a false claim about a computation can be proven wrong using a fraud proof posted to Bitcoin.
  - The design aims to expand what can be built on Bitcoin without altering its base protocol, supporting constructions such as bridges and more expressive contracts. It relies on existing script capabilities and the Taproot upgrade.

- ### Provenance
  - sources:: [[https://bitvm.org]], [[https://github.com/BitVM/BitVM]]
  - migration-date:: 2026-05-29T00:00:00Z