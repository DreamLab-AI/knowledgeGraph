---
okf_version: "0.2"
type: Class
title: Consensus Mechanism
resource: urn:ngm:class:consensus-mechanism
domain: blockchain
description: A Consensus Mechanism is a Distributed Algorithm enabling a population of independent, potentially adversarial nodes communicating over an unreliable network to agree on a single, totally-ordered sequence of state transitions (a replicated log) such that all honest participants eventually...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:distributed-algorithm
  - urn:ngm:class:coordination-protocol
  - urn:ngm:class:state-machine-replication
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:atomic-broadcast
hasPart:
  - urn:ngm:class:block-proposal
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:finality-gadget
  - urn:ngm:class:leader-election
  - urn:ngm:class:quorum-certificate
  - urn:ngm:class:slashing-condition
  - urn:ngm:class:validator-set
  - urn:ngm:class:voting-round
  - urn:ngm:class:fork-choice-rule
  - urn:ngm:class:view-change
requires:
  - urn:ngm:class:incentive-mechanism
  - urn:ngm:class:clock-synchronization
  - urn:ngm:class:validator-registry
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:digital-signature
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:economic-incentive
  - urn:ngm:class:clock-synchronization
enables:
  - urn:ngm:class:blockchain-security
  - urn:ngm:class:double-spend-prevention
  - urn:ngm:class:permissionless-participation
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:trustless-settlement
  - urn:ngm:class:censorship-resistance
dependsOn:
  - urn:ngm:class:flp-impossibility
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:game-theory
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:network-synchrony-model
implements:
  - urn:ngm:class:avalanche
  - urn:ngm:class:hedera-hashgraph
  - urn:ngm:class:hot-stuff
  - urn:ngm:class:paxos
  - urn:ngm:class:raft
  - urn:ngm:class:tendermint
  - urn:ngm:class:nakamoto-consensus
  - urn:ngm:class:practical-byzantine-fault-tolerance
  - urn:ngm:class:proof-of-authority
  - urn:ngm:class:proof-of-history
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:hedera-hashgraph
contrastsWith:
  - urn:ngm:class:centralised-consensus
  - urn:ngm:class:single-source-of-truth-database
  - urn:ngm:class:eventually-consistent-system
  - urn:ngm:class:crdt
  - urn:ngm:class:byzantine-quorum-without-total-order
  - urn:ngm:class:coordinator-based-tangle
bridgesTo:
  - urn:ngm:class:coordination-protocol
uses:
  - urn:ngm:class:bls-signature
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:quorum-intersection
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:data-availability
  - urn:ngm:class:de-fi
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:layer-2-solutions
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:cross-chain-bridges
  - urn:ngm:class:layer-2-solutions
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:cosmos
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:ietf
  - urn:ngm:class:iso-tc-307-blockchain-standards
  - urn:ngm:class:nist-post-quantum-cryptography
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:cosmos
  - urn:ngm:class:nist-post-quantum-cryptography
  - urn:ngm:class:ietf
  - urn:ngm:class:iso-tc-307-blockchain-standards
relatedTo:
  - urn:ngm:class:decentralisation
  - urn:ngm:class:scalability
  - urn:ngm:class:validator-economics
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:finality
  - urn:ngm:class:mev
  - urn:ngm:class:scalability
---

# Consensus Mechanism

A Consensus Mechanism is a Distributed Algorithm enabling a population of independent, potentially adversarial nodes communicating over an unreliable network to agree on a single, totally-ordered sequence of state transitions (a replicated log) such that all honest participants eventually...
