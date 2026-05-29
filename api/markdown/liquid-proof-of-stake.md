- ### Definition
  Liquid Proof of Stake is a consensus variant that decouples staking participation from token illiquidity, allowing holders to delegate validation rights to elected validators (bakers) while retaining full token ownership and transferability. Pioneered by Tezos, it combines on-chain governance with delegated staking, enabling small holders to earn rewards without running validator infrastructure.

- ### Relationships
  Liquid Proof of Stake **requires** Validator Node and Epoch as operational primitives — validators must be registered and active within defined epochs. It **enables** Tokenomics Governance and Decentralized Autonomous Organization participation by linking staking weight to governance votes. The mechanism **depends on** Consensus Mechanism and Blockchain Governance frameworks for its correctness guarantees. It **uses** Token Economics principles and a Validator Set for delegation routing. It **contrasts with** Proof Of Work, which requires computational expenditure rather than stake-based delegation. It is **related to** Proof Of Stake Sustainability (its energy advantage) and Governance Token (its on-chain voting integration).

- ### Content

  Liquid Proof of Stake emerged as a response to two limitations of early PoS designs: capital lock-up and validator centralisation. By separating ownership from validation rights, LPoS allows any token holder to delegate stake to a baker without transferring custody, earning proportional block rewards while maintaining liquidity.

  The Tezos implementation uses a rolling snapshot of stake distribution to determine baking rights at each cycle (a sequence of epochs). Bakers are selected pseudo-randomly weighted by delegated stake, and must post a security bond (safety deposit) to participate. If a baker behaves maliciously or goes offline, their bond is slashed, protecting delegators through economic accountability without requiring delegators to lock up their own stake.

  LPoS differs from delegated PoS (DPoS) in that delegation is implicit and permissionless — any holder can point stake to any baker without on-chain transactions in many implementations — and bakers are not elected via token-weighted voting to a fixed cardinality set. This reduces plutocratic concentration while preserving participation accessibility.

  On-chain governance integration is a distinguishing feature: LPoS protocols often bundle protocol upgrade proposals with the same staking mechanism, meaning bakers vote on amendments proportional to their delegated stake. This creates a tightly coupled incentive structure between consensus participation and governance participation.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z