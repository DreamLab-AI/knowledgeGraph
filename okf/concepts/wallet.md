---
okf_version: "0.2"
type: Class
title: Wallet
resource: urn:ngm:class:wallet
domain: blockchain
description: A software or hardware interface that stores cryptographic private keys and enables users to manage cryptocurrency assets, sign transactions, and interact with blockchain networks securely. Wallets range from hot custodial services to air-gapped hardware devices, and manage key derivation, address generation, UTXO selection, and transaction broadcasting.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:network-component
enables:
  - urn:ngm:class:de-fi
  - urn:ngm:class:blockchain-application
uses:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:digital-signature
partOf:
  - urn:ngm:class:bc-defi-and-economics
relatedTo:
  - urn:ngm:class:utxo-model
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:self-custody
---

# Wallet

A software or hardware interface that stores cryptographic private keys and enables users to manage cryptocurrency assets, sign transactions, and interact with blockchain networks securely. Wallets range from hot custodial services to air-gapped hardware devices, and manage key derivation, address generation, UTXO selection, and transaction broadcasting.
