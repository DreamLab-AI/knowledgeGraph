- ### Definition
  - Programs deployed to the Ethereum blockchain that execute deterministically on the Ethereum Virtual Machine and maintain state enforced by network consensus.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumSmartContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Ethereum Virtual Machine]], [[Solidity]]
  - enables:: [[ERC-20]]

- ### Content
  - Ethereum smart contracts are account-bound programs whose code and storage live on-chain. They run on the Ethereum Virtual Machine, with each operation metered in gas paid by the transaction sender.
  - Contracts are commonly written in Solidity and compiled to bytecode for execution. Their deterministic execution and shared state allow standards such as ERC-20 to define interoperable tokens and applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z