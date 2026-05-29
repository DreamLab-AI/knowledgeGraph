- ### Definition
  Tendermint Consensus is a Byzantine Fault Tolerant consensus engine combining Practical Byzantine Fault Tolerance (PBFT) with Proof-of-Stake validator sets to achieve immediate block finality and high transaction throughput. It underpins the Cosmos ecosystem and enables inter-blockchain communication by guaranteeing committed blocks are never reverted, eliminating probabilistic finality found in Proof-of-Work chains.

- ### Relationships
  - requires:: [[Validator Node]], [[Proof of Stake]]
  - enables:: [[Cosmos IBC]], [[Blockchain Interoperability]]
  - uses:: [[Digital Signature]], [[Cryptographic Hash]]
  - contrastsWith:: [[Proof Of Work]], [[Delegated Proof of Stake]]
  - relatedTo:: [[Consensus Mechanism]], [[Blockchain Scalability]], [[Low Energy Consumption]]
  - partOf:: [[Blockchain Protocol]]

- ### Content
  Tendermint Consensus was designed by Jae Kwon and formalised in a 2014 whitepaper as a deterministic BFT protocol adapted for public blockchain networks. Unlike Nakamoto-style probabilistic finality, Tendermint completes consensus in two rounds of voting—prevote and precommit—before a block is irrevocably committed. This structure guarantees safety under asynchronous network conditions as long as fewer than one-third of validator voting power is Byzantine, and liveness under partial synchrony.

  The protocol operates within a validator set selected proportionally by staked tokens. Each round has a designated proposer who broadcasts a block; validators then vote in two steps. A block is committed only when more than two-thirds of voting power sends precommit votes for the same block, ensuring accountability: any equivocation (double-signing) can be detected and penalised via slashing. This accountability property distinguishes Tendermint from pure PBFT, making it suitable for permissionless settings where validators are pseudonymous.

  Tendermint's instant finality makes it the natural substrate for the Inter-Blockchain Communication (IBC) protocol within the Cosmos ecosystem. IBC relies on light-client proofs of committed blocks; probabilistic chains require waiting for many confirmations before a cross-chain transfer is safe, whereas Tendermint-based chains can finalise transfers in seconds. This property drives adoption across Cosmos Hub, Osmosis, and dozens of application-specific chains (app-chains) built with the Cosmos SDK.

  Energy efficiency is a significant advantage: Tendermint validators perform cryptographic signing operations rather than hash grinding, consuming a fraction of the electricity required by Proof-of-Work networks at equivalent transaction volumes. This positions Tendermint-based networks favourably in ESG assessments and regulatory environments increasingly scrutinising blockchain environmental impact.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z