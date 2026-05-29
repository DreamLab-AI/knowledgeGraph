- ### Definition
  - Tendermint is a Byzantine fault-tolerant (BFT) consensus engine that implements a partially synchronous, round-based, leader-elected protocol providing deterministic finality on each block. It separates the consensus layer from the application layer via the Application BlockChain Interface (ABCI), allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the consensus core of the Cosmos SDK and has influenced several subsequent BFT designs, offering safety guarantees as long as fewer than one-third of validator voting power is Byzantine.

- ### Semantic Classification
  - owl-class:: tendermint:Tendermint
  - owl-role:: Concept

- ### Relationships
  - implements [[Byzantine Fault Tolerance]]
  - implements [[Deterministic Finality]]
  - relatedTo [[Cosmos IBC]]
  - relatedTo [[Practical Byzantine Fault Tolerance]]
  - contrastsWith [[Proof Of Work]]

- ### Content
  Tendermint Core provides a BFT state-machine replication engine whose design derives from PBFT but introduces several pragmatic modifications for blockchain use cases. The protocol operates in rounds comprising a propose phase, a prevote phase, and a precommit phase, with a designated proposer rotating among the validator set each round. A block achieves finality once it collects precommits from more than two-thirds of total validator voting power, eliminating probabilistic fork risk and enabling immediate transaction confirmation.

  The ABCI interface decouples Tendermint's networking and consensus logic from application business logic, enabling the Cosmos SDK to build application-specific blockchains (AppChains) on a shared consensus substrate. This modularity has made Tendermint widely adopted across interoperable chains connected via the Inter-Blockchain Communication (IBC) protocol. Cosmos IBC relies on Tendermint's instant finality to enable trust-minimised cross-chain asset transfers — a key advantage over Nakamoto-consensus chains where probabilistic finality requires waiting many confirmations.

  Tendermint's liveness is conditional on partial synchrony: validators must be able to communicate within a bounded (though unknown) delay. Under complete network partition, the protocol halts rather than producing conflicting forks — an explicit design choice prioritising consistency (safety) over availability in the CAP theorem sense.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z