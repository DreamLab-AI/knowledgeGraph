---
okf_version: "0.2"
type: Class
title: Wholesale CBDC
resource: urn:ngm:class:wholesale-cbdc
domain: finance
description: A Wholesale Central Bank Digital Currency (wCBDC) is a form of central bank money issued in digital form and restricted to use by financial institutions—commercial banks, clearing houses, and other regulated entities—for large-value interbank settlement and financial market infrastructure operations, as distinct from retail CBDC which is available to the general public. Wholesale CBDCs are designe
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:central-bank-digital-currency-cbdc
requires:
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:central-bank
enables:
  - urn:ngm:class:instant-value-settlement
  - urn:ngm:class:cross-border-payments
  - urn:ngm:class:monetary-policy-implementation
  - urn:ngm:class:delivery-versus-payment
  - urn:ngm:class:atomic-swap
contrastsWith:
  - urn:ngm:class:retail-cbdc
  - urn:ngm:class:stablecoin
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:tokenised-securities
uses:
  - urn:ngm:class:digital-payment-system
  - urn:ngm:class:interoperability-protocol
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:smart-contract
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:monetary-sovereignty
  - urn:ngm:class:monetary-system
  - urn:ngm:class:financial-stability
standardizedBy:
  - urn:ngm:class:iso-20022
  - urn:ngm:class:bank-for-international-settlements
relatedTo:
  - urn:ngm:class:central-bank
  - urn:ngm:class:cbdcs
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:real-time-gross-settlement
  - urn:ngm:class:correspondent-banking
---

# Wholesale CBDC

A Wholesale Central Bank Digital Currency (wCBDC) is a form of central bank money issued in digital form and restricted to use by financial institutions—commercial banks, clearing houses, and other regulated entities—for large-value interbank settlement and financial market infrastructure operations, as distinct from retail CBDC which is available to the general public. Wholesale CBDCs are designed to modernise payment system infrastructure by enabling atomic delivery-versus-payment settlement, programmable payment conditions through smart contracts, and 24/7 settlement finality, addressing inefficiencies in legacy correspondent banking and real-time gross settlement systems. Multiple central banks are actively piloting wholesale CBDC, including Project Jura (BIS, Banque de France, SNB), Project Dunbar (BIS, MAS, SARB, RBA, BNM), and the Bank of England's New Payments Architecture.
