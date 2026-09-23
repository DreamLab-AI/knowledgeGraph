---
okf_version: "0.2"
type: Class
title: Settlement
resource: urn:ngm:class:settlement
domain: finance
description: Settlement is the final, legally binding transfer of an asset or funds from one party to another that extinguishes the obligation arising from a trade, payment, or contract. In traditional financial markets, settlement follows trade execution after a defined delay (e.g. T+2) during which counterparty risk persists; in distributed ledger systems, settlement occurs when a transaction achieves irreve
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:financial-infrastructure
hasPart:
  - urn:ngm:class:settlement-finality
  - urn:ngm:class:delivery-versus-payment
  - urn:ngm:class:netting
requires:
  - urn:ngm:class:clearing
  - urn:ngm:class:risk-management
  - urn:ngm:class:liquidity
  - urn:ngm:class:risk-management
enables:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:cross-border-settlement
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:securities-settlement
dependsOn:
  - urn:ngm:class:payment-system
  - urn:ngm:class:central-securities-depository
  - urn:ngm:class:central-bank
implements:
  - urn:ngm:class:real-time-gross-settlement
  - urn:ngm:class:deferred-net-settlement
contrastsWith:
  - urn:ngm:class:clearing
  - urn:ngm:class:trade-execution
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:central-bank-digital-currency-cbdc
partOf:
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:financial-infrastructure-domain
  - urn:ngm:class:post-trade-processing
relatedTo:
  - urn:ngm:class:systemic-risk
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:tokenization
  - urn:ngm:class:neural-network-text-tokenisation
---

# Settlement

Settlement is the final, legally binding transfer of an asset or funds from one party to another that extinguishes the obligation arising from a trade, payment, or contract. In traditional financial markets, settlement follows trade execution after a defined delay (e.g. T+2) during which counterparty risk persists; in distributed ledger systems, settlement occurs when a transaction achieves irreversible confirmation according to the network's consensus rules. Achieving settlement finality is the core objective of payment and securities clearing infrastructure, as it determines when legal title definitively passes and operational risk is eliminated. The shift towards real-time gross settlement (RTGS), delivery-versus-payment (DvP), and atomic settlement on distributed ledgers represents a decades-long effort to compress settlement latency and reduce systemic risk.
