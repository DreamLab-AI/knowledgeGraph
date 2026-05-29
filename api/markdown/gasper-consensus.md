- ### Definition
  Gasper Consensus is Ethereum's Proof-of-Stake consensus protocol, combining Casper FFG as a finality gadget with LMD GHOST as the fork choice rule. Validators stake ETH directly and attest to blocks each epoch; Casper FFG provides economic finality via two-thirds supermajority while LMD GHOST resolves short-lived forks by selecting the heaviest chain.

- ### Semantic Classification
  - owl-class:: blockchain:GasperConsensus
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Hybrid Consensus]], [[Protocol and Consensus]]
  - hasPart:: [[Fork Choice Rule]], [[Finality]], [[Validator Set]]
  - requires:: [[Proof of Stake]], [[Validator Node]], [[Consensus Mechanism]]
  - enables:: [[Finality]], [[Blockchain Scalability]]
  - uses:: [[Consensus Algorithm]], [[Consensus Protocol]]
  - relatedTo:: [[Blockchain]], [[Blockchain Protocol]], [[Distributed Ledger]]

### Definition

Gasper is the name given to the composite consensus specification underlying Ethereum's post-Merge Proof-of-Stake network. It was formally described in the 2020 paper "Combining GHOST and Casper" by Buterin, Neu, Tse, and Fox. The protocol operates across a slot-and-epoch structure: validators are assigned to slots within 32-slot epochs, and each validator submits a signed attestation specifying their view of the head of the chain and a checkpoint vote for Casper FFG.

### Relationships

Gasper combines two distinct algorithmic components that address different timing concerns. LMD GHOST (Fork Choice Rule) is a greedy algorithm selecting the chain head by finding the subtree with the greatest accumulated attestation weight, providing fast confirmation of newly produced blocks within seconds. Casper FFG (Finality) operates at epoch boundaries, achieving irreversible economic finality when two consecutive checkpoints each receive two-thirds of the total validator stake in attestations—a condition known as a "supermajority link."

### Content

Validator participation is central to Gasper's security model. Each Validator Node must post 32 ETH as collateral to a deposit contract, and the Validator Set is randomly shuffled each epoch to assign attestation committees and block proposers. Slashing conditions punish double voting and surround voting, destroying a portion of staked ETH and forcibly ejecting the offending validator. This economic penalty mechanism provides cryptoeconomic security: attacking finality requires burning at least one-third of total staked ETH.

Gasper's hybrid design creates a trade-off between latency and safety. LMD GHOST offers probabilistic confirmation in ~12 seconds (one slot), while Casper FFG finality takes ~12 minutes (two epochs) under normal network conditions. This separation allows applications requiring speed (e.g., DeFi) to operate on probabilistic confirmation while high-value operations can wait for finality. The design influences Blockchain Scalability by enabling sharding proposals (EIP-4844, full danksharding) to build atop the finality guarantees Gasper provides.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z