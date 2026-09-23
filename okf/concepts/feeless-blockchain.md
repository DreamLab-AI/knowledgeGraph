---
okf_version: "0.2"
type: Class
title: Feeless Blockchain
resource: urn:ngm:class:feeless-blockchain
domain: blockchain
description: A feeless blockchain is a distributed ledger that allows transactions to be submitted without an explicit per-transaction fee paid to validators. Such designs replace fee-based economics with alternative mechanisms — for example directed acyclic graph structures where each sender contributes a small proof-of-work to confirm prior transactions, or networks where validators are compensated through o
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:bc-protocol-and-consensus
requires:
  - urn:ngm:class:consensus-mechanism
enables:
  - urn:ngm:class:micropayment
dependsOn:
  - urn:ngm:class:consensus
implements:
  - urn:ngm:class:proof-of-history
contrastsWith:
  - urn:ngm:class:gas-fee
  - urn:ngm:class:transaction-fee
bridgesTo:
  - urn:ngm:class:scalability
uses:
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:proof-of-work
supports:
  - urn:ngm:class:energy-efficiency
partOf:
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:validator
---

# Feeless Blockchain

A feeless blockchain is a distributed ledger that allows transactions to be submitted without an explicit per-transaction fee paid to validators. Such designs replace fee-based economics with alternative mechanisms — for example directed acyclic graph structures where each sender contributes a small proof-of-work to confirm prior transactions, or networks where validators are compensated through other means. Feeless models aim to enable micropayments and machine-to-machine value transfer that fee-bearing chains render uneconomic. They must still solve spam prevention and resource accounting without using fees as the deterrent.
