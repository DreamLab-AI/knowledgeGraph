---
okf_version: "0.2"
type: Class
title: Block Propagation Time
resource: urn:ngm:class:block-propagation-time
domain: blockchain
description: "Block Propagation Time is the latency metric measuring how long it takes for a newly mined or validated block to be disseminated to all (or a target percentage of) nodes in a blockchain peer-to-peer network after its initial announcement. It is a critical determinant of blockchain security and throughput: long propagation times increase the probability of temporary forks (stale/orphan blocks), was"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:block-propagation
requires:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:fork-choice-rule
contrastsWith:
  - urn:ngm:class:proof-of-stake
relatedTo:
  - urn:ngm:class:network-latency
  - urn:ngm:class:blockchain-scalability
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:blockchain-infrastructure
---

# Block Propagation Time

Block Propagation Time is the latency metric measuring how long it takes for a newly mined or validated block to be disseminated to all (or a target percentage of) nodes in a blockchain peer-to-peer network after its initial announcement. It is a critical determinant of blockchain security and throughput: long propagation times increase the probability of temporary forks (stale/orphan blocks), waste miner effort, and reduce effective network throughput. Bitcoin historically achieved median propagation times of approximately 1–2 seconds to reach 50% of nodes, while Ethereum's uncle mechanism tolerated higher latency by including competing blocks in the canonical chain.
