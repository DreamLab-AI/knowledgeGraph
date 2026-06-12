- ### Definition
  - zkSync is an Ethereum layer-2 scaling network developed by Matter Labs that uses zero-knowledge rollup technology to settle transactions on Ethereum with validity proofs. Its main network, zkSync Era, is a zk-rollup with an EVM-compatible execution environment, allowing many Ethereum smart contracts and tools to be used with minimal changes. By posting succinct proofs that each batch of transactions is valid, the network achieves Ethereum-level settlement security without an optimistic challenge period. zkSync is part of a broader effort to scale Ethereum through zero-knowledge cryptography.

- ### Semantic Classification
  - owl-class:: bc:ZkSync
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Optimism]], [[Arbitrum]], [[Polygon]]
  - requires:: [[Ethereum Smart Contract Platform]], [[Rollup]], [[Zero Knowledge Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - zkSync scales Ethereum using the zero-knowledge rollup model, in which transactions are executed off-chain and a succinct validity proof is generated attesting that the resulting state transition is correct. The proof is verified on Ethereum, so the network does not need the multi-day challenge windows associated with optimistic rollups before funds can be withdrawn securely.
  - zkSync Era provides an EVM-compatible environment, letting developers deploy Solidity contracts and use familiar tooling while the underlying system handles proof generation. This compatibility lowers the barrier to porting existing Ethereum applications onto the layer-2.
  - Matter Labs has also developed the ZK Stack, a framework for launching custom zk-powered chains, reflecting a wider trend toward modular rollup ecosystems. zkSync is one of several leading zk-rollups competing to scale Ethereum through validity proofs rather than fraud proofs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z