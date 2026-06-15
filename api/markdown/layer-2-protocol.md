- ### Definition
  - A layer-2 protocol executes transactions off an underlying [[Layer-1 Blockchain]] while inheriting its security through periodic settlement, increasing [[Transaction Throughput]] and cutting fees without altering base consensus. Major designs include [[Rollup]] systems — both [[Optimistic Rollup]] and [[ZK-Rollup]] — and [[State Channel]] networks. Layer-2 protocols are a central technique within [[Blockchain Scalability]] and depend on robust [[Data Availability]] from the base layer.

- ### Overview
  - Layer-2 emerged as the leading response to the blockchain scalability trilemma, scaling throughput without sacrificing the security or decentralisation of base layers such as [[Ethereum]].
  - Activity is processed off-chain and only compressed data, state roots, or validity proofs are posted to layer 1, which acts as the settlement and dispute court.
  - Rollups have become the dominant layer-2 family, with optimistic and zero-knowledge variants differing in how they prove the correctness of off-chain execution.
  - Channel-based designs such as the [[Lightning Network]] suit high-frequency, bilateral payments, while rollups support general [[Smart Contract]] execution.

- ### Mechanisms
  - #### Rollups
    - **[[Optimistic Rollup]]** — assumes posted transactions are valid and relies on fraud proofs during a challenge window to revert invalid state.
    - **[[ZK-Rollup]]** — posts succinct validity proofs (SNARKs/STARKs) that cryptographically guarantee correct execution, enabling fast finality.
  - #### State channels
    - **[[State Channel]]** — counterparties transact off-chain by exchanging signed state updates and settle a final balance on-chain, exemplified by payment-channel networks.
  - #### Settlement and data availability
    - Layer-2 protocols depend on the base chain for settlement and on [[Data Availability]] (on-chain calldata or blobs) so that anyone can reconstruct and verify rolled-up state.

- ### Key aspects
  - **Security inheritance** — security derives from the base [[Layer-1 Blockchain]] rather than a separate validator set, distinguishing rollups from a [[Sidechain]].
  - **Bridging** — assets and messages move between layers through bridge contracts, a primary security-sensitive surface.
  - **Cost reduction** — batching amortises base-layer fees across many off-chain transactions.
  - **Finality tradeoffs** — optimistic designs impose withdrawal delays; zero-knowledge designs offer faster finality at higher proving cost.

- ### Applications
  - **Scalable payments** — high-throughput, low-fee transfers via channels and rollups.
  - **DeFi at scale** — decentralised exchanges and lending protocols deploy on rollups such as [[Arbitrum]] and [[Optimism]] for cheaper [[Smart Contract]] interaction.
  - **Gaming and NFTs** — high-volume, low-value transactions move to layer 2 to avoid base-layer congestion.
  - **Enterprise settlement rails** — institutions use zero-knowledge rollups for privacy-preserving, verifiable transaction batching.
  - **Cross-rollup interoperability** — bridging protocols connect multiple layer-2 networks back to the shared base layer.

- ### Relationships
  - hasPart:: [[Rollup]]
  - hasPart:: [[State Channel]]
  - partOf:: [[Blockchain Scalability]]
  - implements:: [[Optimistic Rollup]]
  - implements:: [[ZK-Rollup]]
  - dependsOn:: [[Layer-1 Blockchain]]
  - dependsOn:: [[Data Availability]]
  - enables:: [[Transaction Throughput]]
  - enables:: [[Smart Contract]]
  - uses:: [[Ethereum]]
  - bridgesTo:: [[Sidechain]]
  - bridgesTo:: [[Ethereum]]
  - relatedTo:: [[Lightning Network]]
  - relatedTo:: [[Arbitrum]]
  - relatedTo:: [[Optimism]]
  - contrastsWith:: [[Layer-1 Blockchain]]
  - contrastsWith:: [[Sidechain]]

- ### Provenance
  - sources:: Ethereum Foundation layer-2 scaling documentation; rollup design literature (optimistic and zk-rollup whitepapers); Lightning Network specification (BOLT)
  - updated:: 2026-06-15