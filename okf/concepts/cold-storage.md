---
okf_version: "0.2"
type: Class
title: Cold Storage
resource: urn:ngm:class:cold-storage
domain: blockchain
description: Cold Storage in the context of digital assets and cryptocurrency refers to the practice of holding private keys in an offline environment — physically disconnected from any network — to eliminate the attack surface presented by internet-connected systems. Hardware wallets, air-gapped computers, and paper wallets are common cold storage implementations. By contrast with hot wallets (internet-connec
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:custody-infrastructure
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:physical-security
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:key-ceremony
contrastsWith:
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:warm-storage
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:hardware-security-module
  - urn:ngm:class:multisignature
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:air-gapped-computer
supports:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:multisignature-wallets
  - urn:ngm:class:partially-signed-bitcoin-transaction
relatedTo:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:digital-asset-exchange
---

# Cold Storage

Cold Storage in the context of digital assets and cryptocurrency refers to the practice of holding private keys in an offline environment — physically disconnected from any network — to eliminate the attack surface presented by internet-connected systems. Hardware wallets, air-gapped computers, and paper wallets are common cold storage implementations. By contrast with hot wallets (internet-connected), cold storage sacrifices transaction convenience for maximum security, and is the industry standard for custodying large quantities of cryptocurrency at exchanges, institutional custodians, and high-net-worth individual holders.
