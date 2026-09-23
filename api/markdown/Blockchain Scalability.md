
Blockchain Scalability encompasses the technical solutions and architectural approaches designed to increase the transaction throughput, reduce latency, and improve the efficiency of blockchain networks while maintaining security and decentralisation.

- ### Semantic Classification

- ### Content

  Blockchain Scalability addresses the fundamental tension between decentralisation, security, and transaction throughput. Bitcoin processes approximately 7 transactions per second whilst Ethereum historically handled around 15, far below Visa's 65,000 transactions per second capacity. Layer 2 solutions operate above the base blockchain, bundling transactions and settling them periodically on-chain. Lightning Network enables near-instantaneous Bitcoin payments with microsecond finality for micropayments, whilst [[Rollups]] on Ethereum compress hundreds of transactions into single on-chain proofs.

  Sharding partitions blockchain state across parallel chains, enabling simultaneous transaction processing on different chain shards. Danksharding advances this through data availability sampling, reducing validator hardware requirements. State channels enable counterparties to execute transactions off-chain, updating shared state only when disagreements occur or channels close.

  Scalability solutions introduce trade-offs: Layer 2 solutions may reduce decentralisation if few operators exist, whilst sharding increases protocol complexity. The optimal scalability architecture depends on application requirements—instant micropayments prioritise latency, financial settlements prioritise final security, and data availability systems prioritise throughput.

- ### Current Landscape (2026)
  - Ethereum's rollup-centric roadmap has become the dominant scaling paradigm: the Dencun upgrade (March 2024, EIP-4844 proto-danksharding) introduced "blob" data and cut Layer 2 fees by roughly 90%, and by mid-2026 the network settles over 100 million transactions daily across its L2 ecosystem while mainnet gas often sits below 0.5 gwei.
  - The Pectra upgrade activated on 7 May 2025, doubling blob throughput (EIP-7691, from 3/6 to 6/9 blobs per block), adding EOA-to-smart-contract execution for account abstraction (EIP-7702) and raising the maximum effective validator balance to 2,048 ETH (EIP-7251).
  - Fusaka went live on 3 December 2025, shipping PeerDAS (EIP-7594) so validators sample blob data via erasure coding instead of downloading it in full — enabling roughly an 8x theoretical increase in blob capacity without raising node hardware requirements — and standardising the L1 gas limit at 60M (up from 30M through 2025).
  - Fusaka also introduced lightweight "Blob Parameter Only" (BPO) forks to raise capacity without full hard forks: BPO1 (9 December 2025) lifted the blob target/max from 6/9 to 10/15, and BPO2 (7 January 2026) pushed it to 14/21.
  - The L2 market has consolidated sharply: L2Beat lists roughly 73-80 active rollups holding around $45-48bn TVL by mid-2026, with Arbitrum One and Base together commanding about 77% of L2 DeFi liquidity as many smaller general-purpose rollups shut down in 2025-2026.
  - Modular data-availability layers now compete on raw bandwidth: Celestia holds around 50% of the external DA market and its Matcha (v6) upgrade lifted maximum block size from 8MB to 128MB, while EigenDA V2 advertises around 100 MB/s and Celestia's experimental Fibre protocol targets terabit-per-second throughput.
  - Open challenges as of 2026 remain sequencer centralisation (most rollups still use a single sequencer), cross-chain bridge security, state growth, and cross-rollup interoperability; the next named upgrade, Glamsterdam (expected mid-2026), targets enshrined proposer-builder separation (EIP-7732) and Block-level Access Lists (EIP-7928), with full danksharding still years away.

- ### References
  - 1. Ethereum Foundation (2025). Fusaka Mainnet Announcement. https://blog.ethereum.org/2025/11/06/fusaka-mainnet-announcement
  - 2. Ethereum Foundation (2026). Protocol Priorities Update for 2026. https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026
  - 3. The Block (2025). Ethereum developers activate Pectra upgrade with 11 EIPs. https://www.theblock.co/news/ecosystems/2025-05-07-ethereum-pectra-upgrade-353407
  - 4. Ethereum.org (2026). Building on Ethereum in 2026: what has changed. https://ethereum.org/latest/building-on-ethereum-in-2026/
  - 5. UEEx (2026). Layer 2 Explained: Ethereum's Scaling Race in 2026. https://blog.ueex.com/crypto-terms/layer-2-2/
  - 6. BlockEden (2026). The 2026 Data Availability Race: Celestia, EigenDA, and Avail. https://blockeden.xyz/blog/2026/02/24/modular-blockchain-wars-data-availability/

- ### Provenance

