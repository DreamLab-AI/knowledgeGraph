---
okf_version: "0.2"
type: Class
title: Cross-Border Settlement
resource: urn:ngm:class:cross-border-settlement
domain: finance
description: Cross-border settlement is the process of finalising the transfer of funds or assets between counterparties in different jurisdictions, including currency conversion, compliance checks, and the irrevocable discharge of obligations across correspondent banking chains, central bank systems, or emerging blockchain-based rails. It encompasses the full lifecycle from trade initiation to finality across
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:cross-border-payments
hasPart:
  - urn:ngm:class:sanctions-screening
requires:
  - urn:ngm:class:currency-conversion
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:liquidity-management
enables:
  - urn:ngm:class:trade-finance
  - urn:ngm:class:cross-border-payment-transparency
  - urn:ngm:class:financial-inclusion
dependsOn:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:swift-messaging
  - urn:ngm:class:nostro-vostro-accounts
implements:
  - urn:ngm:class:iso-20022
bridgesTo:
  - urn:ngm:class:cbdc-cross-border-settlement
uses:
  - urn:ngm:class:real-time-gross-settlement
supports:
  - urn:ngm:class:fsb-cross-border-payments-roadmap
  - urn:ngm:class:cross-border-payments
partOf:
  - urn:ngm:class:cross-border-payments
relatedTo:
  - urn:ngm:class:correspondent-banking
  - urn:ngm:class:delivery-versus-payment
---

# Cross-Border Settlement

Cross-border settlement is the process of finalising the transfer of funds or assets between counterparties in different jurisdictions, including currency conversion, compliance checks, and the irrevocable discharge of obligations across correspondent banking chains, central bank systems, or emerging blockchain-based rails. It encompasses the full lifecycle from trade initiation to finality across multiple legal, regulatory, and technical environments.
