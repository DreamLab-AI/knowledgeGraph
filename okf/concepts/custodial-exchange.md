---
okf_version: "0.2"
type: Class
title: Custodial Exchange
resource: urn:ngm:class:custodial-exchange
domain: blockchain
description: A custodial exchange is a cryptocurrency trading venue that holds users' assets and private keys on their behalf, settling trades on its internal ledger rather than on-chain. Users gain convenience, liquidity and familiar account-based access, but cede control of their keys and accept counterparty risk in the operator. It is the centralised counterpart to non-custodial and decentralised trading mo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptocurrency-exchange
requires:
  - urn:ngm:class:kyc
  - urn:ngm:class:custodial-wallet
dependsOn:
  - urn:ngm:class:regulatory-compliance
implements:
  - urn:ngm:class:proof-of-reserve
contrastsWith:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:self-custody
uses:
  - urn:ngm:class:custody
  - urn:ngm:class:cold-storage
supports:
  - urn:ngm:class:liquidity
relatedTo:
  - urn:ngm:class:centralized-exchange
  - urn:ngm:class:qualified-custodian
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:wallet
---

# Custodial Exchange

A custodial exchange is a cryptocurrency trading venue that holds users' assets and private keys on their behalf, settling trades on its internal ledger rather than on-chain. Users gain convenience, liquidity and familiar account-based access, but cede control of their keys and accept counterparty risk in the operator. It is the centralised counterpart to non-custodial and decentralised trading models.
