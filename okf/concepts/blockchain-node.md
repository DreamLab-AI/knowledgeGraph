---
okf_version: "0.2"
type: Class
title: Blockchain Node
resource: urn:ngm:class:blockchain-node
domain: blockchain
description: A blockchain node is a computer running the protocol software of a blockchain network that maintains a copy of the ledger, validates transactions and blocks, and relays them to peers. Nodes collectively enforce the consensus rules and provide the decentralisation and redundancy that make the network trustworthy. They range from full nodes that store and verify the complete chain to light clients t
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:mempool
  - urn:ngm:class:full-node
requires:
  - urn:ngm:class:transaction-validation
enables:
  - urn:ngm:class:validator
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:peer-to-peer-network
implements:
  - urn:ngm:class:block-propagation
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:state-synchronisation
supports:
  - urn:ngm:class:decentralisation
  - urn:ngm:class:distributed-ledger
partOf:
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:full-node
  - urn:ngm:class:light-client
  - urn:ngm:class:consensus
---

# Blockchain Node

A blockchain node is a computer running the protocol software of a blockchain network that maintains a copy of the ledger, validates transactions and blocks, and relays them to peers. Nodes collectively enforce the consensus rules and provide the decentralisation and redundancy that make the network trustworthy. They range from full nodes that store and verify the complete chain to light clients that verify selectively, and validator nodes that additionally participate in block production.
