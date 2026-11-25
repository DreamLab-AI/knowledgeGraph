---
okf_version: "0.2"
type: Class
title: Hardware Wallet
resource: urn:ngm:class:hardware-wallet
domain: blockchain
description: A hardware wallet is a dedicated physical device that stores cryptocurrency private keys in a secure element and signs transactions internally, so the keys never leave the device or touch an internet-connected computer. It protects against malware and remote key theft by isolating signing operations behind on-device confirmation. Hardware wallets are a foundational tool for self-custody of digital
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:secure-element
  - urn:ngm:class:private-key
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:seed-phrase
  - urn:ngm:class:usb-interface
enables:
  - urn:ngm:class:self-custody
  - urn:ngm:class:cold-storage
  - urn:ngm:class:transaction-signing
implements:
  - urn:ngm:class:bip39
  - urn:ngm:class:bip44
  - urn:ngm:class:hierarchical-deterministic-wallet
contrastsWith:
  - urn:ngm:class:wallet
  - urn:ngm:class:custodial-wallet
  - urn:ngm:class:hot-wallet
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:cryptographic-key-management
supports:
  - urn:ngm:class:institutional-custody
  - urn:ngm:class:digital-asset
relatedTo:
  - urn:ngm:class:multi-sig-governance
  - urn:ngm:class:cryptocurrency
  - urn:ngm:class:decentralised-finance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hardware Wallet

A hardware wallet is a dedicated physical device that stores cryptocurrency private keys in a secure element and signs transactions internally, so the keys never leave the device or touch an internet-connected computer. It protects against malware and remote key theft by isolating signing operations behind on-device confirmation. Hardware wallets are a foundational tool for self-custody of digital assets.
