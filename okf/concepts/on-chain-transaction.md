---
okf_version: "0.2"
type: Class
title: On-Chain Transaction
resource: urn:ngm:class:on-chain-transaction
domain: blockchain
description: "An on-chain transaction is a value or state transfer that is broadcast to a blockchain network, validated by consensus, and permanently recorded in a block on the shared ledger. Because settlement occurs through the network's consensus mechanism, on-chain transactions inherit the chain's security, immutability, and public verifiability, but also its latency, throughput limits, and fee costs. They "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:consensus
  - urn:ngm:class:gas
enables:
  - urn:ngm:class:settlement
dependsOn:
  - urn:ngm:class:consensus
  - urn:ngm:class:finality
contrastsWith:
  - urn:ngm:class:state-channel
  - urn:ngm:class:rollup
uses:
  - urn:ngm:class:block
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:ledger
relatedTo:
  - urn:ngm:class:transaction
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ethereum
  - urn:ngm:class:bitcoin
---

# On-Chain Transaction

An on-chain transaction is a value or state transfer that is broadcast to a blockchain network, validated by consensus, and permanently recorded in a block on the shared ledger. Because settlement occurs through the network's consensus mechanism, on-chain transactions inherit the chain's security, immutability, and public verifiability, but also its latency, throughput limits, and fee costs. They contrast with off-chain and layer-two approaches that defer or aggregate ledger updates to improve scalability.
