---
okf_version: "0.2"
type: Class
title: Payment Gateway
resource: urn:ngm:class:payment-gateway
domain: finance
description: A Payment Gateway is a technology service that authorises, processes, and routes financial transactions between buyers and merchants, acting as the intermediary between a merchant's point-of-sale or e-commerce system and the acquiring bank or payment network. It encrypts sensitive payment credentials, communicates with card networks and issuing banks to obtain authorisation, and returns the result
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:payment-system
hasPart:
  - urn:ngm:class:tokenization
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:currency-conversion
requires:
  - urn:ngm:class:pci-dss
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:micropayment
  - urn:ngm:class:payment-token
  - urn:ngm:class:x402-and-l402-payment-protocols
  - urn:ngm:class:cross-border-payments
dependsOn:
  - urn:ngm:class:card-network
contrastsWith:
  - urn:ngm:class:payment-processor
bridgesTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:restful-api
supports:
  - urn:ngm:class:e-commerce
  - urn:ngm:class:point-of-sale
  - urn:ngm:class:agentic-ai
standardizedBy:
  - urn:ngm:class:iso-20022
relatedTo:
  - urn:ngm:class:digital-payment-system
  - urn:ngm:class:open-banking
  - urn:ngm:class:central-bank-digital-currency-cbdc
---

# Payment Gateway

A Payment Gateway is a technology service that authorises, processes, and routes financial transactions between buyers and merchants, acting as the intermediary between a merchant's point-of-sale or e-commerce system and the acquiring bank or payment network. It encrypts sensitive payment credentials, communicates with card networks and issuing banks to obtain authorisation, and returns the result to the merchant in real time. Modern payment gateways provide APIs, SDKs, fraud detection, currency conversion, and compliance tooling, and increasingly support cryptocurrency payments and programmable settlement rails alongside traditional card and bank transfer methods. Payment gateways are foundational infrastructure for e-commerce and digital commerce ecosystems.
