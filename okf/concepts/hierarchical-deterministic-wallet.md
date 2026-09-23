---
okf_version: "0.2"
type: Class
title: Hierarchical Deterministic Wallet
resource: urn:ngm:class:hierarchical-deterministic-wallet
domain: blockchain
description: A hierarchical deterministic (HD) wallet is a cryptocurrency wallet that derives a tree of key pairs from a single master seed using a deterministic algorithm, as standardised in BIP-32 and related proposals. From one human-readable mnemonic phrase the wallet can regenerate an effectively unlimited hierarchy of addresses, allowing backup of an entire wallet from a single seed. The structure improv
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:blockchain-wallet
hasPart:
  - urn:ngm:class:seed-phrase
  - urn:ngm:class:mnemonic-phrase
requires:
  - urn:ngm:class:entropy
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:self-custody
dependsOn:
  - urn:ngm:class:key-generation
implements:
  - urn:ngm:class:bip39
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:secp256k1
supports:
  - urn:ngm:class:key-management
partOf:
  - urn:ngm:class:blockchain-wallet
relatedTo:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:digital-wallet
---

# Hierarchical Deterministic Wallet

A hierarchical deterministic (HD) wallet is a cryptocurrency wallet that derives a tree of key pairs from a single master seed using a deterministic algorithm, as standardised in BIP-32 and related proposals. From one human-readable mnemonic phrase the wallet can regenerate an effectively unlimited hierarchy of addresses, allowing backup of an entire wallet from a single seed. The structure improves privacy by using fresh addresses while keeping recovery and organisation manageable.
