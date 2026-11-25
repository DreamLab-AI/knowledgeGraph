---
okf_version: "0.2"
type: Class
title: Transaction Parameter
resource: urn:ngm:class:transaction-parameter
domain: blockchain
description: Transaction Parameters are the configuration values that define the execution characteristics of a blockchain transaction, including gas limit, gas price (or priority fee under EIP-1559), nonce, value, and calldata. These parameters determine transaction priority, cost, computational resources consumed, and ordering within blocks, directly influencing DeFi strategies such as MEV extraction and Lay
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-transaction
enables:
  - urn:ngm:class:gas-optimization
  - urn:ngm:class:mev
uses:
  - urn:ngm:class:gas-limit
  - urn:ngm:class:gas-price
  - urn:ngm:class:eip-1559
partOf:
  - urn:ngm:class:blockchain-transaction
relatedTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:layer2
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Transaction Parameter

Transaction Parameters are the configuration values that define the execution characteristics of a blockchain transaction, including gas limit, gas price (or priority fee under EIP-1559), nonce, value, and calldata. These parameters determine transaction priority, cost, computational resources consumed, and ordering within blocks, directly influencing DeFi strategies such as MEV extraction and Layer 2 batching efficiency.
