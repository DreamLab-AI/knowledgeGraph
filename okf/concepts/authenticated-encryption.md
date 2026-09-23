---
okf_version: "0.2"
type: Class
title: Authenticated Encryption
resource: urn:ngm:class:authenticated-encryption
domain: security
description: Authenticated encryption is a class of symmetric cryptographic schemes that simultaneously provide confidentiality, integrity and authenticity of a message in a single operation. Authenticated encryption with associated data (AEAD) additionally binds unencrypted header data to the ciphertext, so any tampering with the message or its context is detected on decryption. Modern AEAD constructions such
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:encryption
requires:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:key-management
enables:
  - urn:ngm:class:secure-communication
  - urn:ngm:class:data-confidentiality
  - urn:ngm:class:data-integrity
implements:
  - urn:ngm:class:aes-gcm
uses:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:message-authentication-code
  - urn:ngm:class:nonce
supports:
  - urn:ngm:class:tls-1-3
  - urn:ngm:class:tls
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:hash-function
---

# Authenticated Encryption

Authenticated encryption is a class of symmetric cryptographic schemes that simultaneously provide confidentiality, integrity and authenticity of a message in a single operation. Authenticated encryption with associated data (AEAD) additionally binds unencrypted header data to the ciphertext, so any tampering with the message or its context is detected on decryption. Modern AEAD constructions such as AES-GCM and ChaCha20-Poly1305 are the recommended default for secure communication because they avoid the pitfalls of composing encryption and authentication separately.
