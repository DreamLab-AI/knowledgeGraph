- ### Definition
  - A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written for the Cairo virtual machine.

- ### Semantic Classification
  - owl-class:: blockchain:Starknet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum]]
  - enables:: [[Scalability]]

- ### Content
  - Starknet batches transactions off-chain and posts a succinct STARK proof to Ethereum attesting that the batch executed correctly. Validity proofs let the network inherit Ethereum settlement security without re-executing each transaction on the base layer.
  - Programs on Starknet are written in Cairo, a language designed for provable computation. The approach reduces per-transaction cost by amortising proof generation across many transactions while keeping data and proof verification on the main chain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z