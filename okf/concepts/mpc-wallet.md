---
okf_version: "0.2"
type: Class
title: Mpc Wallet
resource: urn:ngm:class:mpc-wallet
domain: blockchain
description: "An MPC wallet is a digital wallet whose private key is split into shares held by independent parties and never reconstructed in one place, so transactions are authorised through a multi-party computation protocol that jointly produces a signature. By distributing trust across devices or institutions, it removes the single seed phrase as a single point of failure while preserving a single on-chain "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-wallet
requires:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:multi-sig-governance
implements:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:distributed-key-generation
contrastsWith:
  - urn:ngm:class:multi-signature-wallet
  - urn:ngm:class:hardware-security-module
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:account-abstraction
uses:
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:private-key
supports:
  - urn:ngm:class:decentralized-exchange
relatedTo:
  - urn:ngm:class:digital-wallet
---

# Mpc Wallet

An MPC wallet is a digital wallet whose private key is split into shares held by independent parties and never reconstructed in one place, so transactions are authorised through a multi-party computation protocol that jointly produces a signature. By distributing trust across devices or institutions, it removes the single seed phrase as a single point of failure while preserving a single on-chain address. MPC wallets contrast with traditional self-custody seed wallets and with on-chain multisignature schemes by keeping the threshold logic off-chain and chain-agnostic.
