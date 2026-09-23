---
okf_version: "0.2"
type: Class
title: Cross-Border Payments
resource: urn:ngm:class:cross-border-payments
domain: finance
description: Cross-Border Payments are financial transactions that originate in one country and are settled in another, requiring currency conversion, multi-jurisdiction regulatory compliance, and interoperability between disparate payment systems. Traditional correspondent banking networks rely on SWIFT messaging and chains of intermediary banks, incurring multi-day settlement cycles, layered fees, and signif
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:financial-services
requires:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:currency-exchange
enables:
  - urn:ngm:class:remittances
  - urn:ngm:class:trade-finance
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:remittances
dependsOn:
  - urn:ngm:class:payment-infrastructure
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:interoperability
contrastsWith:
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:domestic-payments
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
uses:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:lightning-network
  - urn:ngm:class:swift-messaging
  - urn:ngm:class:iso-20022
  - urn:ngm:class:smart-contract
standardizedBy:
  - urn:ngm:class:bis-cpmi
  - urn:ngm:class:financial-stability-board
  - urn:ngm:class:iso-20022
  - urn:ngm:class:fatf-travel-rule
relatedTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:fatf-travel-rule
  - urn:ngm:class:forex
---

# Cross-Border Payments

Cross-Border Payments are financial transactions that originate in one country and are settled in another, requiring currency conversion, multi-jurisdiction regulatory compliance, and interoperability between disparate payment systems. Traditional correspondent banking networks rely on SWIFT messaging and chains of intermediary banks, incurring multi-day settlement cycles, layered fees, and significant opacity. Blockchain-based payment rails—including stablecoins, payment channels, and Central Bank Digital Currencies—compress settlement latency and reduce intermediary costs by enabling atomic finality and programmable escrow. The domain sits at the intersection of monetary policy, AML/KYC regulation, ISO 20022 standardisation, and distributed-ledger technology.
