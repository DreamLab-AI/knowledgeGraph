---
okf_version: "0.2"
type: Class
title: Miner
resource: urn:ngm:class:miner
domain: blockchain
description: "A Miner is a network participant in a proof-of-work blockchain who dedicates computational resources to solving cryptographic hash puzzles, competing to produce valid blocks that extend the canonical chain in exchange for a block reward (newly issued coins plus transaction fees). Miners collectively provide the computational security of the network: the cost of mounting a 51% attack is proportiona"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:consensus-protocol
hasPart:
  - urn:ngm:class:mining-pool
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:block-propagation
dependsOn:
  - urn:ngm:class:blockchain-network
contrastsWith:
  - urn:ngm:class:validator-node
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:cryptographic-hash-function
relatedTo:
  - urn:ngm:class:block-reward
  - urn:ngm:class:mining-reward
  - urn:ngm:class:fee-market
  - urn:ngm:class:mempool
---

# Miner

A Miner is a network participant in a proof-of-work blockchain who dedicates computational resources to solving cryptographic hash puzzles, competing to produce valid blocks that extend the canonical chain in exchange for a block reward (newly issued coins plus transaction fees). Miners collectively provide the computational security of the network: the cost of mounting a 51% attack is proportional to the total hash rate, which represents real-world energy and hardware expenditure. Mining can be performed individually or cooperatively within mining pools that aggregate hash power and share rewards proportionally.
