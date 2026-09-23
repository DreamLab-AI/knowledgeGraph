---
okf_version: "0.2"
type: Class
title: Micropayment
resource: urn:ngm:class:micropayment
domain: finance
description: A very small electronic payment, typically fractions of a cent to a few dollars, processed automatically within digital environments to enable low-value, high-frequency transactions that are economically infeasible with traditional payment infrastructure.
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:digital-payment-system
hasPart:
  - urn:ngm:class:payment-protocol
  - urn:ngm:class:settlement
  - urn:ngm:class:transaction-validation
  - urn:ngm:class:fee-calculation
  - urn:ngm:class:settlement
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:payment-channel
  - urn:ngm:class:payment-network
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:instant-settlement
  - urn:ngm:class:microtransactions
  - urn:ngm:class:content-monetisation
  - urn:ngm:class:pay-per-use-models
  - urn:ngm:class:instant-settlement
dependsOn:
  - urn:ngm:class:blockchain-infrastructure
  - urn:ngm:class:lightning-network
  - urn:ngm:class:central-bank-digital-currency-cbdc
contrastsWith:
  - urn:ngm:class:traditional-banking
bridgesTo:
  - urn:ngm:class:virtual-economy
  - urn:ngm:class:de-fi
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:digital-currency
  - urn:ngm:class:central-bank-digital-currency-cbdc
standardizedBy:
  - urn:ngm:class:w3c-payment-request-api
  - urn:ngm:class:iso-20022
partOf:
  - urn:ngm:class:digital-payment-system
  - urn:ngm:class:payment-network
relatedTo:
  - urn:ngm:class:tokenization
  - urn:ngm:class:financial-inclusion
---

# Micropayment

A very small electronic payment, typically fractions of a cent to a few dollars, processed automatically within digital environments to enable low-value, high-frequency transactions that are economically infeasible with traditional payment infrastructure.
