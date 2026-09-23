---
okf_version: "0.2"
type: Class
title: Archival Node
resource: urn:ngm:class:archival-node
domain: blockchain
description: An Archival Node is a blockchain network participant that stores the complete historical state of the ledger—every block, transaction, and state root from genesis to the current tip—without pruning older data. Unlike pruned nodes or light nodes, an archival node can respond to queries about any historical state at any block height, making it essential for block explorers, analytics services, and s
maturity: established
quality: 0
is-a:
  - urn:ngm:class:network-component
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:blockchain-protocol
  - urn:ngm:class:peer-to-peer-network
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:blockchain-compliance
  - urn:ngm:class:long-term-archival
contrastsWith:
  - urn:ngm:class:light-node
  - urn:ngm:class:pruned-node
supports:
  - urn:ngm:class:state-machine-replication
relatedTo:
  - urn:ngm:class:full-node
  - urn:ngm:class:chain-state
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:blockchain-infrastructure
---

# Archival Node

An Archival Node is a blockchain network participant that stores the complete historical state of the ledger—every block, transaction, and state root from genesis to the current tip—without pruning older data. Unlike pruned nodes or light nodes, an archival node can respond to queries about any historical state at any block height, making it essential for block explorers, analytics services, and smart contract developers who need point-in-time state access.
