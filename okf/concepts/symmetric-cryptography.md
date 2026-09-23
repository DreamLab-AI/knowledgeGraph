---
okf_version: "0.2"
type: Class
title: Symmetric Cryptography
resource: urn:ngm:class:symmetric-cryptography
domain: security
description: Symmetric cryptography is a class of cryptographic techniques in which the same secret key is used for both encryption and decryption. It includes block ciphers and stream ciphers and underpins fast bulk data protection and authenticated encryption. Its security depends on keeping the shared key secret and on secure key distribution, which is often handled by asymmetric methods.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:symmetric-key
  - urn:ngm:class:aes-gcm
requires:
  - urn:ngm:class:random-number-generation
dependsOn:
  - urn:ngm:class:key-management
  - urn:ngm:class:key-exchange
implements:
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:authenticated-encryption
contrastsWith:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:public-key-cryptography
uses:
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:cryptographic-algorithm
supports:
  - urn:ngm:class:data-confidentiality
  - urn:ngm:class:encryption
relatedTo:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:tls
---

# Symmetric Cryptography

Symmetric cryptography is a class of cryptographic techniques in which the same secret key is used for both encryption and decryption. It includes block ciphers and stream ciphers and underpins fast bulk data protection and authenticated encryption. Its security depends on keeping the shared key secret and on secure key distribution, which is often handled by asymmetric methods.
