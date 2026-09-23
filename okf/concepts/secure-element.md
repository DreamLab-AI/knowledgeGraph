---
okf_version: "0.2"
type: Class
title: Secure Element
resource: urn:ngm:class:secure-element
domain: blockchain
description: A Secure Element (SE) is a tamper-resistant hardware component, typically a dedicated microcontroller, that securely stores cryptographic keys and executes sensitive operations such as signing and authentication in physical isolation from the host system. It enforces hardware-backed access controls so that secret material never leaves the chip in plaintext, resisting both software extraction and m
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hardware-security-module
hasPart:
  - urn:ngm:class:private-key
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:digital-signature
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:tee
  - urn:ngm:class:tee
uses:
  - urn:ngm:class:encryption
supports:
  - urn:ngm:class:self-custody
partOf:
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:tee
relatedTo:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:trusted-platform-module
  - urn:ngm:class:side-channel-attack
---

# Secure Element

A Secure Element (SE) is a tamper-resistant hardware component, typically a dedicated microcontroller, that securely stores cryptographic keys and executes sensitive operations such as signing and authentication in physical isolation from the host system. It enforces hardware-backed access controls so that secret material never leaves the chip in plaintext, resisting both software extraction and many physical attacks. Secure Elements underpin hardware wallets, payment cards, SIMs and mobile secure payment systems, and are commonly certified against standards such as Common Criteria EAL levels.
