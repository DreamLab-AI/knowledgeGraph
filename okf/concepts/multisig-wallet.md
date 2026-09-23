---
okf_version: "0.2"
type: Class
title: Multisig Wallet
resource: urn:ngm:class:multisig-wallet
domain: blockchain
description: A multisig wallet is a cryptocurrency wallet that requires multiple independent signatures to authorise a transaction, typically following an M-of-N threshold scheme where M of N designated keys must sign. By distributing signing authority across keys held by different people or devices, it removes single points of failure and enforces shared control. It is widely used for treasury management, cus
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptocurrency-wallet
hasPart:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:key-management
requires:
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:treasury-management
  - urn:ngm:class:self-custody
dependsOn:
  - urn:ngm:class:cryptocurrency-wallet
contrastsWith:
  - urn:ngm:class:hot-wallet
bridgesTo:
  - urn:ngm:class:bitcoin
uses:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:smart-contract
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:dao
  - urn:ngm:class:custody
relatedTo:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:custody
  - urn:ngm:class:ethereum
---

# Multisig Wallet

A multisig wallet is a cryptocurrency wallet that requires multiple independent signatures to authorise a transaction, typically following an M-of-N threshold scheme where M of N designated keys must sign. By distributing signing authority across keys held by different people or devices, it removes single points of failure and enforces shared control. It is widely used for treasury management, custody and decentralised-organisation governance.
