---
okf_version: "0.2"
type: Class
title: Atomic Settlement
resource: urn:ngm:class:atomic-settlement
domain: blockchain
description: Atomic settlement is a transaction completion mechanism in which the transfer of assets between two or more parties either executes in its entirety or not at all, eliminating counterparty risk and the possibility of partial fulfilment. The mechanism is enforced at the protocol level, ensuring that delivery and payment occur simultaneously and indivisibly within a single transaction or smart contra
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:transaction-finality
  - urn:ngm:class:cryptographic-commitment
enables:
  - urn:ngm:class:decentralized-exchange
  - urn:ngm:class:securities-settlement
  - urn:ngm:class:cross-chain-interoperability
  - urn:ngm:class:trustless-settlement
  - urn:ngm:class:settlement
  - urn:ngm:class:settlement
dependsOn:
  - urn:ngm:class:finality
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain
implements:
  - urn:ngm:class:acid-properties
  - urn:ngm:class:delivery-versus-payment
contrastsWith:
  - urn:ngm:class:deferred-net-settlement
  - urn:ngm:class:settlement-risk
  - urn:ngm:class:bilateral-netting
bridgesTo:
  - urn:ngm:class:distributed-transaction
  - urn:ngm:class:two-phase-commit
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:hash-time-locked-contract
  - urn:ngm:class:escrow-system
  - urn:ngm:class:digital-signature
  - urn:ngm:class:escrow-system
supports:
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:tokenised-securities
  - urn:ngm:class:de-fi
  - urn:ngm:class:central-bank-digital-currency-cbdc
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:atomic-swap
  - urn:ngm:class:real-time-gross-settlement
  - urn:ngm:class:payment-channel
  - urn:ngm:class:central-counterparty
---

# Atomic Settlement

Atomic settlement is a transaction completion mechanism in which the transfer of assets between two or more parties either executes in its entirety or not at all, eliminating counterparty risk and the possibility of partial fulfilment. The mechanism is enforced at the protocol level, ensuring that delivery and payment occur simultaneously and indivisibly within a single transaction or smart contract execution. This property derives from atomicity — one of the four ACID properties of database transactions — applied to financial and digital asset exchanges. Atomic settlement is the foundational guarantee underpinning trustless exchange protocols, cross-chain bridges, real-time gross settlement systems, and delivery-versus-payment architectures in both decentralised and regulated financial markets.
