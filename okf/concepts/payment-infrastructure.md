---
okf_version: "0.2"
type: Class
title: Payment Infrastructure
resource: urn:ngm:class:payment-infrastructure
domain: finance
description: Payment infrastructure is the aggregate of networks, protocols, clearing houses, settlement systems, and regulatory frameworks that enable the transfer of monetary value between parties. It spans card networks, interbank messaging (SWIFT, ISO 20022), real-time gross settlement (RTGS) systems, and emerging digital-asset rails including stablecoins and central bank digital currencies. The infrastruc
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:financial-infrastructure
hasPart:
  - urn:ngm:class:payment-channel-network
  - urn:ngm:class:payment-processor
  - urn:ngm:class:payment-system
  - urn:ngm:class:clearing-house
  - urn:ngm:class:real-time-gross-settlement
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:cryptographic-security
enables:
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:micropayment
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:regulatory-framework
implements:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:swift-messaging
contrastsWith:
  - urn:ngm:class:de-fi
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
supports:
  - urn:ngm:class:digital-commerce
relatedTo:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:cbdc-infrastructure
  - urn:ngm:class:lightning-network
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:correspondent-banking
---

# Payment Infrastructure

Payment infrastructure is the aggregate of networks, protocols, clearing houses, settlement systems, and regulatory frameworks that enable the transfer of monetary value between parties. It spans card networks, interbank messaging (SWIFT, ISO 20022), real-time gross settlement (RTGS) systems, and emerging digital-asset rails including stablecoins and central bank digital currencies. The infrastructure defines latency, finality, cost, and access characteristics that shape the global economy.
