---
okf_version: "0.2"
type: Class
title: Transaction Propagation
resource: urn:ngm:class:transaction-propagation
domain: blockchain
description: Transaction propagation is the process by which a newly broadcast transaction spreads across a peer-to-peer blockchain network from its originating node to the rest of the participants. Nodes relay valid transactions to their peers using a gossip protocol, typically announcing availability before transferring full data, so that the transaction reaches miners and validators for inclusion in a block
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:gossip-protocol
requires:
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:transaction
dependsOn:
  - urn:ngm:class:node
  - urn:ngm:class:gossip-protocol
implements:
  - urn:ngm:class:gossip-protocol
contrastsWith:
  - urn:ngm:class:block-propagation
bridgesTo:
  - urn:ngm:class:mempool
uses:
  - urn:ngm:class:network-topology
supports:
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:peer-to-peer-network
relatedTo:
  - urn:ngm:class:mempool
  - urn:ngm:class:block-propagation
---

# Transaction Propagation

Transaction propagation is the process by which a newly broadcast transaction spreads across a peer-to-peer blockchain network from its originating node to the rest of the participants. Nodes relay valid transactions to their peers using a gossip protocol, typically announcing availability before transferring full data, so that the transaction reaches miners and validators for inclusion in a block while resisting spam through validation and fee policies.
