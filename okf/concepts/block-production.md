---
okf_version: "0.2"
type: Class
title: Block Production
resource: urn:ngm:class:block-production
domain: blockchain
description: Block production is the process by which a blockchain network assembles pending transactions into a new block, orders them, and proposes that block for inclusion in the canonical chain. In proof-of-stake and similar systems, validators are selected to produce blocks for given slots or epochs, executing the consensus protocol that determines who may extend the chain and when. Block production is th
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-consensus
requires:
  - urn:ngm:class:consensus
  - urn:ngm:class:validator
  - urn:ngm:class:staking
enables:
  - urn:ngm:class:finality
  - urn:ngm:class:block-reward
  - urn:ngm:class:throughput
dependsOn:
  - urn:ngm:class:proof-of-work
uses:
  - urn:ngm:class:mempool
  - urn:ngm:class:transaction
  - urn:ngm:class:fork-choice-rule
partOf:
  - urn:ngm:class:blockchain-consensus
relatedTo:
  - urn:ngm:class:block
  - urn:ngm:class:epoch
  - urn:ngm:class:blockchain
  - urn:ngm:class:ledger
  - urn:ngm:class:ethereum
  - urn:ngm:class:solana
  - urn:ngm:class:mev
  - urn:ngm:class:gas-fee
---

# Block Production

Block production is the process by which a blockchain network assembles pending transactions into a new block, orders them, and proposes that block for inclusion in the canonical chain. In proof-of-stake and similar systems, validators are selected to produce blocks for given slots or epochs, executing the consensus protocol that determines who may extend the chain and when. Block production is the heartbeat of a blockchain, governing throughput, latency and the fair ordering of transactions.
