---
okf_version: "0.2"
type: Class
title: Block Size
resource: urn:ngm:class:block-size
domain: blockchain
description: "Block Size is the maximum data capacity—measured in bytes or weight units—that a single block in a blockchain may contain, governing how many transactions can be confirmed per block and therefore setting a fundamental upper bound on network throughput. Larger blocks increase per-block transaction capacity but raise propagation latency, orphan-block rates, and hardware requirements for full nodes, "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
requires:
  - urn:ngm:class:block
  - urn:ngm:class:blockchain
enables:
  - urn:ngm:class:transaction
  - urn:ngm:class:finality
bridgesTo:
  - urn:ngm:class:ai-energy-optimisation
uses:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:node
  - urn:ngm:class:merkle-tree
relatedTo:
  - urn:ngm:class:block-time
  - urn:ngm:class:latency
  - urn:ngm:class:gas
  - urn:ngm:class:network-protocol
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:sidechain
---

# Block Size

Block Size is the maximum data capacity—measured in bytes or weight units—that a single block in a blockchain may contain, governing how many transactions can be confirmed per block and therefore setting a fundamental upper bound on network throughput. Larger blocks increase per-block transaction capacity but raise propagation latency, orphan-block rates, and hardware requirements for full nodes, while smaller blocks favour decentralisation and faster propagation at the cost of throughput and higher fee markets when demand exceeds capacity. The Bitcoin block-size debate (resulting in the SegWit upgrade and eventual Bitcoin Cash fork) made block size one of the most consequential and politically contentious protocol parameters in blockchain history.
