---
okf_version: "0.2"
type: Class
title: SWIFT
resource: urn:ngm:class:swift
domain: finance
description: SWIFT, the Society for Worldwide Interbank Financial Telecommunication, is a cooperative that operates a secure messaging network used by banks and other financial institutions to exchange payment and securities instructions. It does not move money itself but standardises the messages that instruct transfers between institutions, which then settle through correspondent banking relationships or pay
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:financial-infrastructure-domain
hasPart:
  - urn:ngm:class:swift-messaging
  - urn:ngm:class:business-identifier-code
requires:
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:secure-messaging
enables:
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:interbank-settlement
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:trade-finance
dependsOn:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:network-infrastructure
implements:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:message-format
contrastsWith:
  - urn:ngm:class:ripple-net
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:payment-systems-domain
  - urn:ngm:class:iso-20022
supports:
  - urn:ngm:class:aml
  - urn:ngm:class:sanctions-compliance
standardizedBy:
  - urn:ngm:class:bank-for-international-settlements
partOf:
  - urn:ngm:class:payment-infrastructure
relatedTo:
  - urn:ngm:class:nostro-vostro-accounts
  - urn:ngm:class:real-time-gross-settlement
---

# SWIFT

SWIFT, the Society for Worldwide Interbank Financial Telecommunication, is a cooperative that operates a secure messaging network used by banks and other financial institutions to exchange payment and securities instructions. It does not move money itself but standardises the messages that instruct transfers between institutions, which then settle through correspondent banking relationships or payment systems. Founded in 1973 and based in Belgium, it connects thousands of institutions across most countries.
