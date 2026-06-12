- ### Definition
  - A smart contract wallet platform on Ethereum and compatible chains, formerly Gnosis Safe, that provides multi-signature account management and programmable transaction approval.

- ### Semantic Classification
  - owl-class:: blockchain:Safe
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Multi-Signature Wallet]]
  - bridges-to:: [[Gnosis Safe]], [[Wallet]]
  - requires:: [[Smart Contract]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Account Abstraction]]

- ### Content
  - Safe is a widely deployed smart contract account framework that holds assets under configurable approval rules, typically requiring a threshold of signatures from a defined owner set before a transaction executes. It is commonly used by organisations, treasuries and DAOs to secure shared funds.
  - By moving wallet logic into a smart contract, Safe supports features such as batched transactions, spending policies and modular extensions, and it serves as a reference implementation for account abstraction patterns across EVM-compatible networks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z