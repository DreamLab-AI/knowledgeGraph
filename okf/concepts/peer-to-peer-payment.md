---
okf_version: "0.2"
type: Class
title: Peer To Peer Payment
resource: urn:ngm:class:peer-to-peer-payment
domain: blockchain
description: Peer-to-peer payment is the direct transfer of monetary value between two parties without a traditional intermediary settling each side of the transaction. In cryptocurrency systems it is realised by signing a transaction that reassigns ownership of digital tokens on a shared ledger, validated by network consensus rather than a bank. The model reduces reliance on centralised clearing and enables p
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain
  - urn:ngm:class:payment-system
requires:
  - urn:ngm:class:settlement
enables:
  - urn:ngm:class:remittances
  - urn:ngm:class:digital-payments
  - urn:ngm:class:remittances
  - urn:ngm:class:digital-payments
dependsOn:
  - urn:ngm:class:cryptocurrency
implements:
  - urn:ngm:class:settlement
contrastsWith:
  - urn:ngm:class:custody
bridgesTo:
  - urn:ngm:class:cbdcs
  - urn:ngm:class:stablecoin
  - urn:ngm:class:cbdcs
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptocurrency
supports:
  - urn:ngm:class:de-fi
  - urn:ngm:class:mobile-payment
relatedTo:
  - urn:ngm:class:settlement
  - urn:ngm:class:digital-payments
  - urn:ngm:class:digital-payments
---

# Peer To Peer Payment

Peer-to-peer payment is the direct transfer of monetary value between two parties without a traditional intermediary settling each side of the transaction. In cryptocurrency systems it is realised by signing a transaction that reassigns ownership of digital tokens on a shared ledger, validated by network consensus rather than a bank. The model reduces reliance on centralised clearing and enables programmable, near-instant value exchange.
