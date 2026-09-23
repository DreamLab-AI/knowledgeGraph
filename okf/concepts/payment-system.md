---
okf_version: "0.2"
type: Class
title: Payment System
resource: urn:ngm:class:payment-system
domain: finance
description: A Payment System is an organised set of instruments, procedures, rules, and interbank funds-transfer networks that enables the exchange of monetary value between buyers and sellers, encompassing both traditional fiat rails (card networks, bank transfers, ACH) and digital-native mechanisms such as blockchain token transfers, smart-contract escrow, and central bank digital currencies. Payment system
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:financial-infrastructure
hasPart:
  - urn:ngm:class:payment-gateway
  - urn:ngm:class:clearing-and-settlement
  - urn:ngm:class:digital-wallet
requires:
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:identity-verification
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:e-commerce
  - urn:ngm:class:de-fi
  - urn:ngm:class:microtransaction
contrastsWith:
  - urn:ngm:class:barter-system
  - urn:ngm:class:central-bank-digital-currency-cbdc
bridgesTo:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:ai-driven-finance
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:lightning-network
  - urn:ngm:class:blockchain-transaction
standardizedBy:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:pci-dss
  - urn:ngm:class:swift
  - urn:ngm:class:swift
relatedTo:
  - urn:ngm:class:tokenomics
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:fraud-detection
---

# Payment System

A Payment System is an organised set of instruments, procedures, rules, and interbank funds-transfer networks that enables the exchange of monetary value between buyers and sellers, encompassing both traditional fiat rails (card networks, bank transfers, ACH) and digital-native mechanisms such as blockchain token transfers, smart-contract escrow, and central bank digital currencies. Payment systems define how obligations are cleared and settled — gross or net, in real time or deferred — while satisfying requirements for security, finality, liquidity efficiency, AML/KYC compliance, and cross-border interoperability. Modern payment infrastructure increasingly operates across layers: a base settlement layer (central bank reserves or a public blockchain), a clearing and messaging layer (SWIFT, ISO 20022, or a decentralised protocol), and an application layer (wallets, point-of-sale terminals, or embedded payment APIs) that exposes value exchange to end users and automated agents.
