---
okf_version: "0.2"
type: Class
title: Digital Wallet
resource: urn:ngm:class:digital-wallet
domain: blockchain
description: A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:cryptocurrency-storage
hasPart:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
  - urn:ngm:class:seed-phrase
requires:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:cryptographic-security
  - urn:ngm:class:digital-signature
  - urn:ngm:class:private-key
enables:
  - urn:ngm:class:transaction-signing
  - urn:ngm:class:asset-management
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:defi-access
implements:
  - urn:ngm:class:account-abstraction
  - urn:ngm:class:bip39
contrastsWith:
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:centralized-exchange
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:payment-system
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:cross-chain-interoperability
relatedTo:
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:zero-knowledge-proof
---

# Digital Wallet

A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.
