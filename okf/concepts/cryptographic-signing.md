---
okf_version: "0.2"
type: Class
title: Cryptographic Signing
resource: urn:ngm:class:cryptographic-signing
domain: security
description: Cryptographic signing is the process of producing a verifiable proof of authorship and integrity over a message or document using a private key, such that anyone holding the corresponding public key can confirm the signature without being able to forge it. It underpins authentication, non-repudiation, software-supply-chain integrity, and blockchain transaction authorisation. Signing schemes includ
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:key-management
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:cryptographic-protocol
---

# Cryptographic Signing

Cryptographic signing is the process of producing a verifiable proof of authorship and integrity over a message or document using a private key, such that anyone holding the corresponding public key can confirm the signature without being able to forge it. It underpins authentication, non-repudiation, software-supply-chain integrity, and blockchain transaction authorisation. Signing schemes include RSA, ECDSA, EdDSA, and Schnorr, each defining how a hash of the message is transformed under the signer's secret key into a compact, publicly verifiable signature.
