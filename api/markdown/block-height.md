- ### Definition
  Block Height is a monotonically increasing integer representing the position of a specific block in a blockchain, defined as the count of confirmed blocks preceding it in the canonical chain (genesis block has height 0). It serves as the primary temporal reference for blockchain state, used by smart contracts for time-locked operations and by consensus rules for protocol upgrade activation. In the presence of forks, competing chains may share height values; the canonical chain is selected by the fork choice rule.

- ### Relationships
  - hasPart:: [[Block]], [[Genesis Block]]
  - partOf:: [[Blockchain]], [[Blockchain Protocol]]
  - requires:: [[Consensus Mechanism]]
  - enables:: [[Smart Contract]], [[Blockchain Governance]], [[Fork Choice Rule]]
  - relatedTo:: [[Block Time]], [[Block Reward]], [[Mining Reward]], [[Chain Reorganization]]
  - dependsOn:: [[Proof Of Work]]
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

- ### Content
  Block height provides the canonical chronological index of a blockchain's transaction history. Because block production in proof-of-work systems is probabilistic, height is not equivalent to elapsed wall-clock time—Bitcoin's 10-minute target means a height of 840,000 (reached April 2024) corresponds to approximately 16 years of operation, but individual block intervals vary from seconds to hours. Protocol designers therefore use height rather than timestamps for consensus-critical time references, since timestamps are self-reported by miners and can be manipulated within the two-hour tolerance window.

  A common use of block height in Bitcoin is the halving schedule: the block subsidy is halved every 210,000 blocks (approximately four years). Smart contract platforms such as Ethereum use block height (or its timestamp equivalent) for time-lock constraints in DeFi protocols—position liquidations, options expiry, governance proposal voting periods, and vesting schedules all encode height or time thresholds that trigger on-chain actions automatically when reached.

  Block height also plays a central role in fork detection and resolution. When a network experiences a chain split—whether from a natural orphan race or a deliberate consensus parameter change—different nodes may temporarily assign the same height to different blocks. The fork choice rule (longest chain by cumulative work in Bitcoin; LMD-GHOST in Ethereum) resolves which block at a given height belongs to the canonical chain. Chain reorganisation events, where a node switches from a shorter to a longer chain, cause blocks at affected heights to be re-evaluated: transactions in orphaned blocks may be re-broadcast or may permanently fail if their inputs were consumed in the canonical chain.

  Checkpoint mechanisms and SPV security both reference block height: older blocks at low heights are generally considered more secure because an attacker would need to re-mine all subsequent blocks to rewrite them, giving each confirmation additional irreversibility weight proportional to the difficulty work accumulated above it.

  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies



  <!-- Merged from Block Height.md: Singularity -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z