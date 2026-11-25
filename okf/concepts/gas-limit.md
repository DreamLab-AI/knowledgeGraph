---
okf_version: "0.2"
type: Class
title: Gas Limit
resource: urn:ngm:class:gas-limit
domain: blockchain
description: A Gas Limit is the maximum amount of gas — the unit measuring computational effort — that a sender authorises for a blockchain transaction or that a block may contain in aggregate. It serves as a hard cap preventing unbounded resource consumption, protecting network nodes from denial-of-service attacks and ensuring predictable block processing times. On Ethereum, each transaction carries a user-se
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
requires:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:blockchain-scalability
dependsOn:
  - urn:ngm:class:base-fee
  - urn:ngm:class:fee-market
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
relatedTo:
  - urn:ngm:class:gas-price
  - urn:ngm:class:transaction-fee
  - urn:ngm:class:mev
  - urn:ngm:class:blockchain-economics
  - urn:ngm:class:validator-node
  - urn:ngm:class:mempool
  - urn:ngm:class:block-size
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Gas Limit

A Gas Limit is the maximum amount of gas — the unit measuring computational effort — that a sender authorises for a blockchain transaction or that a block may contain in aggregate. It serves as a hard cap preventing unbounded resource consumption, protecting network nodes from denial-of-service attacks and ensuring predictable block processing times. On Ethereum, each transaction carries a user-set gas limit and each block carries a protocol-enforced block gas limit that validators adjust over time.
