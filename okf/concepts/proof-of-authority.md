---
okf_version: "0.2"
type: Class
title: Proof of Authority
resource: urn:ngm:class:proof-of-authority
domain: blockchain
description: A permissioned blockchain consensus mechanism in which a fixed set of pre-approved validators with verified real-world identities are authorised to produce and validate blocks. PoA sacrifices decentralisation for high throughput and fast finality, making it suitable for enterprise and consortium blockchains where participant trust can be established off-chain.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-based-consensus
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:proof-of-stake
bridgesTo:
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:blockchain-governance
relatedTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:consortium-blockchain
  - urn:ngm:class:finality
  - urn:ngm:class:consensus-algorithm
---

# Proof of Authority

A permissioned blockchain consensus mechanism in which a fixed set of pre-approved validators with verified real-world identities are authorised to produce and validate blocks. PoA sacrifices decentralisation for high throughput and fast finality, making it suitable for enterprise and consortium blockchains where participant trust can be established off-chain.
