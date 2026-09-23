---
okf_version: "0.2"
type: Class
title: Correspondent Banking
resource: urn:ngm:class:correspondent-banking
domain: finance
description: Correspondent banking is an arrangement in which one bank (the correspondent) holds accounts and provides payment, settlement, trade finance, and liquidity services on behalf of another bank (the respondent) that lacks a direct presence or licence in a given jurisdiction or currency. The respondent bank maintains a nostro account at the correspondent and an equivalent vostro account on its own boo
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:nostro-account
  - urn:ngm:class:vostro-account
  - urn:ngm:class:loro-account
requires:
  - urn:ngm:class:kyc
  - urn:ngm:class:aml
  - urn:ngm:class:liquidity-management
enables:
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:trade-finance
  - urn:ngm:class:foreign-exchange
  - urn:ngm:class:documentary-credit
contrastsWith:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:payment-hub
bridgesTo:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:swift
  - urn:ngm:class:iso-20022
  - urn:ngm:class:real-time-gross-settlement
standardizedBy:
  - urn:ngm:class:financial-action-task-force
  - urn:ngm:class:basel-committee
relatedTo:
  - urn:ngm:class:financial-inclusion
  - urn:ngm:class:de-risking
  - urn:ngm:class:payment-messaging
  - urn:ngm:class:interbank-settlement
  - urn:ngm:class:remittances
---

# Correspondent Banking

Correspondent banking is an arrangement in which one bank (the correspondent) holds accounts and provides payment, settlement, trade finance, and liquidity services on behalf of another bank (the respondent) that lacks a direct presence or licence in a given jurisdiction or currency. The respondent bank maintains a nostro account at the correspondent and an equivalent vostro account on its own books, enabling cross-border value transfer without requiring every institution to maintain a full global branch network. This intermediated model underpins a substantial share of international wire transfers and documentary trade, but introduces multi-hop settlement chains, foreign-exchange conversion costs, and heightened anti-money-laundering compliance obligations, motivating ongoing efforts to reform or replace the model through ISO 20022, CBDC corridors, and distributed ledger payment rails.
