- ### Definition
  - QBFT is a Byzantine fault tolerant consensus algorithm used in enterprise Ethereum clients to provide immediate finality among a known set of validators. It tolerates a minority of faulty or malicious validators.

- ### Semantic Classification
  - owl-class:: blockchain:QBFT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Byzantine Fault Tolerance]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Consensus Algorithm]], [[Byzantine Fault Tolerance]]
  - enables:: [[Distributed Ledger Technology]]

- ### Content
  - QBFT, or Quorum Byzantine Fault Tolerance, is a proof-of-authority style consensus protocol for permissioned Ethereum networks in which a fixed set of validators propose and agree on blocks. It provides immediate finality and tolerates up to roughly one third of validators being faulty.
  - Implemented in clients such as Hyperledger Besu and GoQuorum, QBFT supports validator set changes through on-chain voting and is suited to consortium deployments. It trades the open participation of public proof-of-stake for predictable performance among known parties.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z