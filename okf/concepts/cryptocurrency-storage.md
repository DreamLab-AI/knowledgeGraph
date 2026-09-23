---
okf_version: "0.2"
type: Class
title: Cryptocurrency Storage
resource: urn:ngm:class:cryptocurrency-storage
domain: blockchain
description: Cryptocurrency Storage encompasses the cryptographic key management systems and secure storage solutions for maintaining control over digital assets on blockchain networks. Architectures range from hot wallets with internet connectivity through cold storage hardware devices to multi-signature and threshold-signature schemes. Hierarchical Deterministic (HD) wallets following BIP32/BIP39 standards g
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:cryptographic-key-management
  - urn:ngm:class:blockchain
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:cryptographic-signature
supports:
  - urn:ngm:class:digital-asset-management
---

# Cryptocurrency Storage

Cryptocurrency Storage encompasses the cryptographic key management systems and secure storage solutions for maintaining control over digital assets on blockchain networks. Architectures range from hot wallets with internet connectivity through cold storage hardware devices to multi-signature and threshold-signature schemes. Hierarchical Deterministic (HD) wallets following BIP32/BIP39 standards generate key trees from a single seed phrase, while institutional custody solutions leverage multi-party computation (MPC) and smart-contract-based social recovery for asset governance.
