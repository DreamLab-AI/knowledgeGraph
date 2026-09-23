---
okf_version: "0.2"
type: Class
title: Payment Processing
resource: urn:ngm:class:payment-processing
domain: blockchain
description: Payment processing is the sequence of operations that authorise, capture, clear and settle a monetary transaction between a payer and a payee. It coordinates merchants, payment gateways, networks and settlement institutions to verify funds, manage risk and move value reliably. Modern payment processing spans card rails, digital wallets and blockchain-based settlement, increasingly emphasising spee
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:payment-network
hasPart:
  - urn:ngm:class:settlement
  - urn:ngm:class:clearing
  - urn:ngm:class:payment-gateway
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:fraud-detection
enables:
  - urn:ngm:class:transaction
dependsOn:
  - urn:ngm:class:settlement
bridgesTo:
  - urn:ngm:class:cryptocurrency
uses:
  - urn:ngm:class:payment-rail
supports:
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:fintech
  - urn:ngm:class:financial-technology
partOf:
  - urn:ngm:class:payment-network
relatedTo:
  - urn:ngm:class:stripe
  - urn:ngm:class:transaction
---

# Payment Processing

Payment processing is the sequence of operations that authorise, capture, clear and settle a monetary transaction between a payer and a payee. It coordinates merchants, payment gateways, networks and settlement institutions to verify funds, manage risk and move value reliably. Modern payment processing spans card rails, digital wallets and blockchain-based settlement, increasingly emphasising speed, fraud detection and interoperability.
