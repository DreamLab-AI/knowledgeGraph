---
okf_version: "0.2"
type: Class
title: Spam Prevention
resource: urn:ngm:class:spam-prevention
domain: blockchain
description: Spam prevention is the set of mechanisms that deter the flooding of a shared system with low-value or malicious activity. In blockchain networks it most commonly takes the form of transaction fees or proof-of-work requirements that impose a real cost on each submission, making large-scale spamming economically or computationally infeasible. Spam prevention protects scarce resources such as block s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:sybil-resistance
requires:
  - urn:ngm:class:transaction-fee
enables:
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:consensus-mechanism
implements:
  - urn:ngm:class:fee-market
contrastsWith:
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:sybil-attack
uses:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:transaction-fee
supports:
  - urn:ngm:class:mempool
partOf:
  - urn:ngm:class:network-security
relatedTo:
  - urn:ngm:class:transaction
  - urn:ngm:class:fee-market
  - urn:ngm:class:validator
---

# Spam Prevention

Spam prevention is the set of mechanisms that deter the flooding of a shared system with low-value or malicious activity. In blockchain networks it most commonly takes the form of transaction fees or proof-of-work requirements that impose a real cost on each submission, making large-scale spamming economically or computationally infeasible. Spam prevention protects scarce resources such as block space, mempool capacity and validator compute from denial-of-service style abuse. It is a key design constraint that interacts with throughput, fee markets and decentralisation.
