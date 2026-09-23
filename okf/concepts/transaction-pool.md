---
okf_version: "0.2"
type: Class
title: Transaction Pool
resource: urn:ngm:class:transaction-pool
domain: blockchain
description: The Transaction Pool (mempool) is the in-memory distributed data structure held by each full node that stores validated but as-yet-unconfirmed transactions awaiting inclusion in a block. Nodes propagate transactions through the pool via gossip, miners and validators select transactions (typically by fee priority), and the pool is cleared as blocks confirm or transactions expire. Pool size, fee dyn
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:distributed-data-structure
  - urn:ngm:class:distributed-data-structure
enables:
  - urn:ngm:class:miner
  - urn:ngm:class:fee-market
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:blockchain-transaction
partOf:
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:mempool
  - urn:ngm:class:block-propagation
  - urn:ngm:class:network-synchronization
  - urn:ngm:class:double-spending
---

# Transaction Pool

The Transaction Pool (mempool) is the in-memory distributed data structure held by each full node that stores validated but as-yet-unconfirmed transactions awaiting inclusion in a block. Nodes propagate transactions through the pool via gossip, miners and validators select transactions (typically by fee priority), and the pool is cleared as blocks confirm or transactions expire. Pool size, fee dynamics, and congestion directly determine user-experienced confirmation latency and cost.
