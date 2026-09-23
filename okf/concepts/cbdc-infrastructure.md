---
okf_version: "0.2"
type: Class
title: CBDC Infrastructure
resource: urn:ngm:class:cbdc-infrastructure
domain: finance
description: CBDC infrastructure refers to the technical systems, protocols, and institutional arrangements that underpin the issuance, distribution, settlement, and management of central bank digital currencies. It encompasses the ledger technology (centralised, distributed, or hybrid), API layers enabling interoperability with commercial banks and payment service providers, offline payment capability, and th
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:payment-infrastructure
enables:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:digital-payments
  - urn:ngm:class:cross-border-payments
uses:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:cryptographic-infrastructure
relatedTo:
  - urn:ngm:class:cbdc-frameworks
  - urn:ngm:class:monetary-policy-implementation
---

# CBDC Infrastructure

CBDC infrastructure refers to the technical systems, protocols, and institutional arrangements that underpin the issuance, distribution, settlement, and management of central bank digital currencies. It encompasses the ledger technology (centralised, distributed, or hybrid), API layers enabling interoperability with commercial banks and payment service providers, offline payment capability, and the privacy-preserving and security mechanisms required for sovereign digital money at scale. CBDC infrastructure must satisfy central bank requirements for finality, programmability, resilience, and monetary policy control that differ fundamentally from commercial digital payment systems.
