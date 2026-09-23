---
okf_version: "0.2"
type: Class
title: Node
resource: urn:ngm:class:node
domain: blockchain
description: A network participant computer within a blockchain system that stores, validates, and relays transactions and blocks. Nodes enforce consensus rules, maintain copies of the distributed ledger, and collectively provide the decentralised security guarantees that distinguish blockchain from centralised databases.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:networkcomponent
hasPart:
  - urn:ngm:class:full-node
  - urn:ngm:class:archival-node
  - urn:ngm:class:bootstrap-node
  - urn:ngm:class:light-node
  - urn:ngm:class:validator-node
requires:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:network-protocol
  - urn:ngm:class:distributed-storage
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:block-propagation
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:digital-signature
implements:
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:gossip-protocol
contrastsWith:
  - urn:ngm:class:mining-pool
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-systems
supports:
  - urn:ngm:class:decentralization
  - urn:ngm:class:fault-tolerance
partOf:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:peer-to-peer-network
relatedTo:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:staking
---

# Node

A network participant computer within a blockchain system that stores, validates, and relays transactions and blocks. Nodes enforce consensus rules, maintain copies of the distributed ledger, and collectively provide the decentralised security guarantees that distinguish blockchain from centralised databases.
