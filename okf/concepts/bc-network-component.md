---
okf_version: "0.2"
type: Class
title: Network Component (Blockchain)
resource: urn:ngm:class:bc-network-component
domain: blockchain
description: Taxonomy hub for the node and network-layer components of a blockchain system. Network components are the participant entities and communication infrastructure through which blocks and transactions are propagated, validated, and stored across a distributed ledger.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:blockchain
hasPart:
  - urn:ngm:class:full-node
  - urn:ngm:class:light-node
  - urn:ngm:class:archival-node
  - urn:ngm:class:bootstrap-node
  - urn:ngm:class:validator-node
  - urn:ngm:class:mempool
enables:
  - urn:ngm:class:block-propagation
  - urn:ngm:class:consensus-mechanism
relatedTo:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:blockchain-network
---

# Network Component (Blockchain)

Taxonomy hub for the node and network-layer components of a blockchain system. Network components are the participant entities and communication infrastructure through which blocks and transactions are propagated, validated, and stored across a distributed ledger.
