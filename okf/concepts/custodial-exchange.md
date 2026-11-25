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
  - urn:ngm:class:know-your-customer
  - urn:ngm:class:custodial-wallet
dependsOn:
  - urn:ngm:class:regulatory-compliance
implements:
  - urn:ngm:class:proof-of-reserve
contrastsWith:
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:self-custody
uses:
  - urn:ngm:class:custody
  - urn:ngm:class:cold-storage
supports:
  - urn:ngm:class:liquidity
relatedTo:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:qualified-custodian
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:wallet
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Custodial Exchange

A custodial exchange is a cryptocurrency trading venue that holds users' assets and private keys on their behalf, settling trades on its internal ledger rather than on-chain. Users gain convenience, liquidity and familiar account-based access, but cede control of their keys and accept counterparty risk in the operator. It is the centralised counterpart to non-custodial and decentralised trading models.
