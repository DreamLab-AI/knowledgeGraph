---
okf_version: "0.2"
type: Class
title: Trustless Transaction
resource: urn:ngm:class:trustless-transaction
domain: blockchain
description: A trustless transaction is an exchange of value or commitments that completes correctly without either party having to trust the other or a central intermediary. Its guarantees come instead from cryptography, consensus and protocol design that make cheating detectable or impossible. Trustless transactions are a defining capability of blockchains and underpin atomic swaps, payment channels and smar
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:immutability
enables:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:payment-channel
  - urn:ngm:class:de-fi
dependsOn:
  - urn:ngm:class:distributed-trust
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:distributed-trust
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:decentralisation
  - urn:ngm:class:cryptocurrency
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger
relatedTo:
  - urn:ngm:class:double-spending
  - urn:ngm:class:atomic-swap
---

# Trustless Transaction

A trustless transaction is an exchange of value or commitments that completes correctly without either party having to trust the other or a central intermediary. Its guarantees come instead from cryptography, consensus and protocol design that make cheating detectable or impossible. Trustless transactions are a defining capability of blockchains and underpin atomic swaps, payment channels and smart-contract settlement.
