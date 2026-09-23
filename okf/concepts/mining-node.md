---
okf_version: "0.2"
type: Class
title: Mining Node
resource: urn:ngm:class:mining-node
domain: blockchain
description: A mining node is a blockchain participant that not only validates and relays transactions but also competes to produce new blocks by performing proof-of-work computation. It assembles pending transactions into candidate blocks and searches for a valid solution that allows the block to be added to the chain. Mining nodes secure proof-of-work networks and are rewarded for the blocks they successfull
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:full-node
hasPart:
  - urn:ngm:class:full-node
requires:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:consensus-mechanism
dependsOn:
  - urn:ngm:class:peer-to-peer-network
implements:
  - urn:ngm:class:proof-of-work
contrastsWith:
  - urn:ngm:class:validator-node
bridgesTo:
  - urn:ngm:class:consensus-mechanism
uses:
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:block-validation
supports:
  - urn:ngm:class:bitcoin
partOf:
  - urn:ngm:class:blockchain-network
relatedTo:
  - urn:ngm:class:mining
  - urn:ngm:class:full-node
---

# Mining Node

A mining node is a blockchain participant that not only validates and relays transactions but also competes to produce new blocks by performing proof-of-work computation. It assembles pending transactions into candidate blocks and searches for a valid solution that allows the block to be added to the chain. Mining nodes secure proof-of-work networks and are rewarded for the blocks they successfully add.
