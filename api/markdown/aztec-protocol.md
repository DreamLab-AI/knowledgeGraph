- ### Definition
  - The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private contracts on Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain:AztecProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Aztec]]
  - bridges-to:: [[Aztec Network]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Privacy]]

- ### Content
  - The Aztec protocol represents value as encrypted notes and uses zero-knowledge proofs to show that spends and state updates are valid without exposing amounts or parties. Proofs are verified on Ethereum to anchor the rollup.
  - By keeping computation private while still provable, the protocol supports application logic that handles confidential data. It targets use cases where on-chain transparency would otherwise leak sensitive information.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z