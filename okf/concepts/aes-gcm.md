---
okf_version: "0.2"
type: Class
title: AES-GCM
resource: urn:ngm:class:aes-gcm
domain: security
description: AES-GCM (Advanced Encryption Standard – Galois/Counter Mode) is an authenticated encryption with associated data (AEAD) cipher mode that combines the AES block cipher operating in Counter Mode with the Galois Message Authentication Code. It provides both confidentiality and data integrity in a single pass, making it the dominant symmetric encryption scheme in modern secure communications.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:symmetric-encryption
enables:
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:network-security
uses:
  - urn:ngm:class:nonce
  - urn:ngm:class:message-authentication-code
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-key-management
---

# AES-GCM

AES-GCM (Advanced Encryption Standard – Galois/Counter Mode) is an authenticated encryption with associated data (AEAD) cipher mode that combines the AES block cipher operating in Counter Mode with the Galois Message Authentication Code. It provides both confidentiality and data integrity in a single pass, making it the dominant symmetric encryption scheme in modern secure communications.
