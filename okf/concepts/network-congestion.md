---
okf_version: "0.2"
type: Class
title: Network Congestion
resource: urn:ngm:class:network-congestion
domain: blockchain
description: Network congestion is the state in which the demand for a network's processing capacity exceeds its available throughput, causing transactions to queue and confirmation times and fees to rise. On a blockchain it occurs when the volume of pending transactions outstrips the space available in upcoming blocks, filling the mempool and triggering competitive fee bidding. Congestion exposes the scalabil
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:transaction-pool
requires:
  - urn:ngm:class:scalability
enables:
  - urn:ngm:class:fee-market
dependsOn:
  - urn:ngm:class:scalability
  - urn:ngm:class:block-time
contrastsWith:
  - urn:ngm:class:scalability
bridgesTo:
  - urn:ngm:class:gas-fee
uses:
  - urn:ngm:class:mempool
supports:
  - urn:ngm:class:transaction-fee
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:mempool
  - urn:ngm:class:fee-market
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:transaction
---

# Network Congestion

Network congestion is the state in which the demand for a network's processing capacity exceeds its available throughput, causing transactions to queue and confirmation times and fees to rise. On a blockchain it occurs when the volume of pending transactions outstrips the space available in upcoming blocks, filling the mempool and triggering competitive fee bidding. Congestion exposes the scalability limits of a system and is a primary driver of fee market dynamics and layer-2 adoption. It is both a symptom of demand and a constraint that shapes protocol design.
