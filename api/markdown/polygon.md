- ### Definition
  - Polygon is a set of Ethereum scaling protocols and a development platform, originally launched as Matic Network in 2017 and rebranded to Polygon in 2021. It began as a proof-of-stake sidechain that runs in parallel to Ethereum and has expanded into zero-knowledge rollup technology, notably Polygon zkEVM, which executes Ethereum-compatible transactions with validity proofs. The architecture aims to offer lower fees and higher throughput while keeping compatibility with Ethereum tooling. The network's token, originally MATIC and migrating to POL, is used for staking and fees across Polygon chains.

- ### Semantic Classification
  - owl-class:: bc:Polygon
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Rollup]], [[zkSync]], [[Arbitrum]]
  - requires:: [[Ethereum]], [[Proof of Stake]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - The original Polygon PoS chain is a sidechain secured by its own validator set rather than directly by Ethereum, with periodic checkpoints committed to the Ethereum mainnet. This design trades some of Ethereum's security guarantees for substantially lower transaction costs, which made it a popular venue for gaming, payments and decentralised finance applications.
  - Polygon has since invested heavily in zero-knowledge cryptography. Polygon zkEVM is a zk-rollup that produces succinct validity proofs of correct execution and posts them to Ethereum, so the base layer can verify state transitions without re-running every transaction. The wider Polygon 2.0 roadmap describes a network of zk-powered chains connected through a shared interoperability layer.
  - The transition from the MATIC token to POL accompanies this shift, with POL intended to secure multiple Polygon chains through restaking. The platform also provides software development kits and a chain-deployment framework so teams can launch their own networks within the Polygon family.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z