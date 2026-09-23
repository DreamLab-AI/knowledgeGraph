---
okf_version: "0.2"
type: Class
title: Gossip Protocol
resource: urn:ngm:class:gossip-protocol
domain: distributed-systems
description: A peer-to-peer communication protocol in which nodes periodically exchange state information with randomly selected neighbours, enabling eventual consistency and fault-tolerant information dissemination across large-scale distributed systems without centralised coordination.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
requires:
  - urn:ngm:class:peer-discovery
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:consensus
implements:
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
  - urn:ngm:class:eventual-consistency
bridgesTo:
  - urn:ngm:class:security-layer
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:network-component
supports:
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:blockchain-network
partOf:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:peer-to-peer-network
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
---

# Gossip Protocol

A peer-to-peer communication protocol in which nodes periodically exchange state information with randomly selected neighbours, enabling eventual consistency and fault-tolerant information dissemination across large-scale distributed systems without centralised coordination.
