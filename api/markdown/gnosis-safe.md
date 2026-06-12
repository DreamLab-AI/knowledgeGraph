- ### Definition
  - Gnosis Safe, later rebranded as Safe, is a smart-contract wallet for Ethereum and compatible networks that requires multiple signatures to authorise transactions. Rather than relying on a single private key, it enforces a configurable threshold, such as three of five owners, before funds move or contract calls execute. It is widely used by decentralised autonomous organisations, projects and individuals to manage treasuries and reduce the risk of a single compromised key.

- ### Semantic Classification
  - owl-class:: blockchain:GnosisSafe
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Snapshot]], [[Decentralised Autonomous Organisation]]
  - requires:: [[Smart Contract]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Multisignature Wallet]], [[Treasury Management]]

- ### Content
  - A Safe is deployed as a smart contract that holds assets and records a set of owner addresses together with a signature threshold. Any transaction must collect enough owner signatures to meet the threshold before it can be executed on-chain, which distributes control and removes single points of failure.
  - The contract supports modules and guards that extend its behaviour, enabling features such as spending limits, recovery mechanisms and integration with governance tooling. This programmability lets organisations encode policies directly into the wallet rather than enforcing them off-chain.
  - Safe is commonly paired with off-chain governance platforms, where an approved proposal is executed by the multisignature wallet, and with DeFi protocols that require an institutional-grade custody arrangement. Its widespread use has made it a de facto standard for shared on-chain treasuries.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z