---
okf_version: "0.2"
type: Class
title: Transaction Fee
resource: urn:ngm:class:transaction-fee
domain: blockchain
description: Transaction Fee is an economic mechanism in blockchain systems whereby originators of transactions pay a fee — denominated in the network's native cryptocurrency — to validators or miners in exchange for including and processing their transaction in a block. Fees simultaneously compensate network participants and provide a spam-prevention signal.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
hasPart:
  - urn:ngm:class:base-fee
  - urn:ngm:class:priority-fee
  - urn:ngm:class:gas-price
requires:
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:cryptocurrency
enables:
  - urn:ngm:class:validator-node
  - urn:ngm:class:miner
  - urn:ngm:class:spam-prevention
dependsOn:
  - urn:ngm:class:mempool
  - urn:ngm:class:gas-limit
  - urn:ngm:class:network-congestion
implements:
  - urn:ngm:class:eip-1559
  - urn:ngm:class:incentive-mechanism
contrastsWith:
  - urn:ngm:class:block-reward
  - urn:ngm:class:feeless-blockchain
bridgesTo:
  - urn:ngm:class:micropayment
  - urn:ngm:class:payment-processing
partOf:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain
  - urn:ngm:class:token-economics
relatedTo:
  - urn:ngm:class:mining
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:tokenomics
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:de-fi
---

# Transaction Fee

Transaction Fee is an economic mechanism in blockchain systems whereby originators of transactions pay a fee — denominated in the network's native cryptocurrency — to validators or miners in exchange for including and processing their transaction in a block. Fees simultaneously compensate network participants and provide a spam-prevention signal.
