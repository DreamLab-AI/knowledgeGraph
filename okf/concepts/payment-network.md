---
okf_version: "0.2"
type: Class
title: Payment Network
resource: urn:ngm:class:payment-network
domain: finance
description: "A payment network is an infrastructure system of interconnected nodes, protocols, messaging standards, and settlement mechanisms that enables the authenticated transfer of value between participants — individuals, merchants, financial institutions, or autonomous software agents — with guarantees on finality, atomicity, and fraud prevention. Payment networks operate at multiple layers: a messaging "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:financial-infrastructure
hasPart:
  - urn:ngm:class:payment-system
  - urn:ngm:class:payment-gateway
  - urn:ngm:class:state-channel
  - urn:ngm:class:clearing-house
  - urn:ngm:class:settlement-layer
requires:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:network-protocol
  - urn:ngm:class:trust-model
enables:
  - urn:ngm:class:micropayments
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:machine-to-machine-payments
  - urn:ngm:class:real-time-payments
  - urn:ngm:class:programmable-money
dependsOn:
  - urn:ngm:class:internet-infrastructure
  - urn:ngm:class:cryptographic-infrastructure
contrastsWith:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:barter-system
bridgesTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-signature
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:smart-contract
standardizedBy:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:payment-card-industry-standard
relatedTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:stablecoin
  - urn:ngm:class:de-fi
---

# Payment Network

A payment network is an infrastructure system of interconnected nodes, protocols, messaging standards, and settlement mechanisms that enables the authenticated transfer of value between participants — individuals, merchants, financial institutions, or autonomous software agents — with guarantees on finality, atomicity, and fraud prevention. Payment networks operate at multiple layers: a messaging layer (e.g. SWIFT MT/MX, ISO 20022) carries authenticated payment instructions; a clearing layer nets obligations across participants; and a settlement layer achieves irrevocable finality through central bank reserves or distributed ledger consensus. The architecture spans traditional four-party card networks (Visa, Mastercard), interbank clearing systems (SWIFT, ACH, SEPA, Fedwire), cryptographic peer-to-peer blockchain networks, and second-layer off-chain channel networks such as the Lightning Network, collectively underpinning commerce, financial inclusion, and machine-to-machine value exchange.
