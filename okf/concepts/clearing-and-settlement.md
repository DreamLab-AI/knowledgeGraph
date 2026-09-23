---
okf_version: "0.2"
type: Class
title: Clearing And Settlement
resource: urn:ngm:class:clearing-and-settlement
domain: finance
description: "Clearing and settlement are the post-trade processes that finalise a financial transaction: clearing reconciles, nets and confirms the obligations between counterparties, while settlement effects the actual transfer of securities and funds to discharge those obligations. Central counterparties and securities depositories reduce counterparty risk by interposing themselves and managing margin. The i"
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:financial-infrastructure
hasPart:
  - urn:ngm:class:settlement
  - urn:ngm:class:payment-settlement
  - urn:ngm:class:securities-settlement
requires:
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:payment-system
enables:
  - urn:ngm:class:cross-border-settlement
dependsOn:
  - urn:ngm:class:payment-system
implements:
  - urn:ngm:class:settlement
uses:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:real-time-gross-settlement
supports:
  - urn:ngm:class:order-book
standardizedBy:
  - urn:ngm:class:central-bank
partOf:
  - urn:ngm:class:financial-infrastructure
relatedTo:
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:payment-processing
---

# Clearing And Settlement

Clearing and settlement are the post-trade processes that finalise a financial transaction: clearing reconciles, nets and confirms the obligations between counterparties, while settlement effects the actual transfer of securities and funds to discharge those obligations. Central counterparties and securities depositories reduce counterparty risk by interposing themselves and managing margin. The integrity of these processes underpins the stability of payment and securities markets.
