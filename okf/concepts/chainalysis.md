---
okf_version: "0.2"
type: Class
title: Chainalysis
resource: urn:ngm:class:chainalysis
domain: blockchain
description: Chainalysis is a commercial blockchain data analytics and intelligence platform founded in 2014 that provides investigative, compliance, and risk-management tools to government agencies, financial institutions, and cryptocurrency businesses for tracing, monitoring, and understanding blockchain transaction flows. It maintains a large proprietary database of attributed blockchain addresses — linking
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:blockchain-analytics
hasPart:
  - urn:ngm:class:reactor
  - urn:ngm:class:know-your-transaction
  - urn:ngm:class:address-attribution
requires:
  - urn:ngm:class:blockchain-data
  - urn:ngm:class:transaction-monitoring
enables:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:sanctions-compliance
  - urn:ngm:class:digital-forensics
  - urn:ngm:class:cryptocurrency-investigation
  - urn:ngm:class:ransomware-attribution
contrastsWith:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:privacy-coin
  - urn:ngm:class:cryptocurrency-mixer
bridgesTo:
  - urn:ngm:class:law-enforcement-technology
  - urn:ngm:class:financial-intelligence
  - urn:ngm:class:regulatory-technology
uses:
  - urn:ngm:class:transaction-graph-analysis
  - urn:ngm:class:heuristic-clustering
  - urn:ngm:class:utxo-model
  - urn:ngm:class:open-source-intelligence
supports:
  - urn:ngm:class:financial-crime-compliance
  - urn:ngm:class:vasp-regulation
relatedTo:
  - urn:ngm:class:fatf-travel-rule
  - urn:ngm:class:kyc
  - urn:ngm:class:sanctions-screening
  - urn:ngm:class:blockchain-compliance
  - urn:ngm:class:darknet-market
---

# Chainalysis

Chainalysis is a commercial blockchain data analytics and intelligence platform founded in 2014 that provides investigative, compliance, and risk-management tools to government agencies, financial institutions, and cryptocurrency businesses for tracing, monitoring, and understanding blockchain transaction flows. It maintains a large proprietary database of attributed blockchain addresses — linking pseudonymous on-chain addresses to real-world entities through heuristic clustering, open-source intelligence, data partnerships, and legal processes — and offers products including Reactor (graph-based investigation tool), KYT (Know Your Transaction real-time compliance API), and Kryptos (market intelligence). Chainalysis is a primary contractor to agencies including the US Department of Justice, IRS Criminal Investigation, and OFAC for cryptocurrency-related law enforcement investigations, and publishes the annual Crypto Crime Report, the most widely cited source for cryptocurrency illicit finance statistics.
