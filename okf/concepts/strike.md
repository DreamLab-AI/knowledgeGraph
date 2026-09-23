---
okf_version: "0.2"
type: Class
title: Strike
resource: urn:ngm:class:strike
domain: blockchain
description: Strike is a financial technology company founded by Jack Mallers that uses the Bitcoin Lightning Network as a settlement rail to deliver instant, low-cost global payments and remittances denominated in fiat currencies. It abstracts the technical complexity of Bitcoin and Lightning from end users, converting value at the edges so that senders and recipients may transact in their preferred local cur
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cross-border-payments
requires:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bitcoin-proof-of-work-protocol
  - urn:ngm:class:payment-channel
  - urn:ngm:class:liquidity-management
  - urn:ngm:class:bitcoin
enables:
  - urn:ngm:class:remittances
  - urn:ngm:class:instant-settlement
  - urn:ngm:class:micropayments
  - urn:ngm:class:merchant-payments
  - urn:ngm:class:remittances
dependsOn:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:bitcoin
  - urn:ngm:class:node-operation
contrastsWith:
  - urn:ngm:class:swift
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:pay-pal
  - urn:ngm:class:western-union
  - urn:ngm:class:swift
bridgesTo:
  - urn:ngm:class:open-banking
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:hash-time-locked-contracts
  - urn:ngm:class:bolt-specifications
  - urn:ngm:class:fiat-currency
  - urn:ngm:class:api-integration
  - urn:ngm:class:bolt-specifications
relatedTo:
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:cryptocurrency-exchange
  - urn:ngm:class:open-payments-protocol
  - urn:ngm:class:central-bank-digital-currency
---

# Strike

Strike is a financial technology company founded by Jack Mallers that uses the Bitcoin Lightning Network as a settlement rail to deliver instant, low-cost global payments and remittances denominated in fiat currencies. It abstracts the technical complexity of Bitcoin and Lightning from end users, converting value at the edges so that senders and recipients may transact in their preferred local currencies without needing to hold cryptocurrency. Strike competes with legacy remittance operators and correspondent banking channels by exploiting Lightning's near-zero fee structure and sub-second finality to offer dramatically lower-cost international money movement.
