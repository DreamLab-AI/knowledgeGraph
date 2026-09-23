---
okf_version: "0.2"
type: Class
title: SWIFT Messaging
resource: urn:ngm:class:swift-messaging
domain: finance
description: "SWIFT Messaging is the standardised, structured financial message exchange system operated over the Society for Worldwide Interbank Financial Telecommunication (SWIFT) network, enabling banks, brokers, custodians, and other financial institutions to communicate payment instructions, securities transactions, treasury operations, and trade finance data. Messages are governed by two principal format "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:mt-message-types
  - urn:ngm:class:swiftnet
requires:
  - urn:ngm:class:swift
  - urn:ngm:class:business-identifier-code
  - urn:ngm:class:correspondent-banking
enables:
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:trade-finance
  - urn:ngm:class:treasury-management
  - urn:ngm:class:cross-border-payments
dependsOn:
  - urn:ngm:class:real-time-gross-settlement
  - urn:ngm:class:cryptographic-infrastructure
implements:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:cpmi-iosco-pfmi
contrastsWith:
  - urn:ngm:class:ripple-network
  - urn:ngm:class:blockchain-payment
  - urn:ngm:class:fedwire
bridgesTo:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:distributed-ledger-technology
uses:
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:financial-cryptography
supports:
  - urn:ngm:class:aml
  - urn:ngm:class:sanctions-screening
  - urn:ngm:class:kyc
standardizedBy:
  - urn:ngm:class:swift
  - urn:ngm:class:iso-tc68
partOf:
  - urn:ngm:class:swift
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:financial-infrastructure
relatedTo:
  - urn:ngm:class:payment-system
  - urn:ngm:class:financial-market-infrastructure
  - urn:ngm:class:nostro-vostro-account
---

# SWIFT Messaging

SWIFT Messaging is the standardised, structured financial message exchange system operated over the Society for Worldwide Interbank Financial Telecommunication (SWIFT) network, enabling banks, brokers, custodians, and other financial institutions to communicate payment instructions, securities transactions, treasury operations, and trade finance data. Messages are governed by two principal format families: the legacy MT (Message Type) standards encoded in SWIFT's own syntax, and the modern ISO 20022 MX messages encoded in XML, which carry richer, more granular data and support global harmonisation. SWIFT itself functions as a secure messaging infrastructure rather than a settlement system; actual fund movement occurs via correspondent banking relationships, real-time gross settlement (RTGS) systems, and central bank facilities. The network is subject to multi-jurisdictional regulatory oversight and is a critical node in the global financial stability architecture.
