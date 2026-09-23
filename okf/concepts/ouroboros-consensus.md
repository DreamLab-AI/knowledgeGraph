---
okf_version: "0.2"
type: Class
title: Ouroboros Consensus
resource: urn:ngm:class:ouroboros-consensus
domain: blockchain
description: Ouroboros is a provably secure proof-of-stake consensus protocol developed for the Cardano blockchain, the first PoS protocol to be formally verified with cryptographic security proofs equivalent to those of proof-of-work systems. It divides blockchain time into epochs and slots, using a verifiable random function to elect slot leaders from among stake pools proportionally to their delegated stake
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-of-stake
hasPart:
  - urn:ngm:class:epoch
  - urn:ngm:class:finality
requires:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:probabilistic-finality
  - urn:ngm:class:blockchain-sustainability
  - urn:ngm:class:blockchain-governance
contrastsWith:
  - urn:ngm:class:delegated-proof-of-stake
  - urn:ngm:class:nominated-proof-of-stake
  - urn:ngm:class:liquid-proof-of-stake
  - urn:ngm:class:byzantine-fault-tolerance
relatedTo:
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain-scalability
---

# Ouroboros Consensus

Ouroboros is a provably secure proof-of-stake consensus protocol developed for the Cardano blockchain, the first PoS protocol to be formally verified with cryptographic security proofs equivalent to those of proof-of-work systems. It divides blockchain time into epochs and slots, using a verifiable random function to elect slot leaders from among stake pools proportionally to their delegated stake, enabling secure, energy-efficient block production without trusted setup.
