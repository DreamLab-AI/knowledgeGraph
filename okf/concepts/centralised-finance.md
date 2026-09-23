---
okf_version: "0.2"
type: Class
title: Centralised Finance
resource: urn:ngm:class:centralised-finance
domain: blockchain
description: Centralised Finance (CeFi) is a model of financial service provision in which a trusted intermediary custodies user assets and operates the order books, matching engines and settlement rails on behalf of participants. In the cryptocurrency context it denotes exchanges and lending platforms that hold customer funds in pooled wallets and enforce identity verification, in contrast to non-custodial, s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:finance
requires:
  - urn:ngm:class:compliance
  - urn:ngm:class:fiat-currency
dependsOn:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:de-fi
  - urn:ngm:class:self-regulation
bridgesTo:
  - urn:ngm:class:traditional-finance
uses:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:kyc
supports:
  - urn:ngm:class:liquidity
partOf:
  - urn:ngm:class:finance
relatedTo:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:tokenomics
  - urn:ngm:class:global-digital-finance
---

# Centralised Finance

Centralised Finance (CeFi) is a model of financial service provision in which a trusted intermediary custodies user assets and operates the order books, matching engines and settlement rails on behalf of participants. In the cryptocurrency context it denotes exchanges and lending platforms that hold customer funds in pooled wallets and enforce identity verification, in contrast to non-custodial, smart-contract-mediated alternatives. CeFi platforms offer familiar account models, fiat on-ramps and regulatory compliance at the cost of counterparty trust.
