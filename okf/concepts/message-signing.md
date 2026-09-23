---
okf_version: "0.2"
type: Class
title: Message Signing
resource: urn:ngm:class:message-signing
domain: security
description: Message signing is a cryptographic operation whereby a private key is used to generate a digital signature over a message or data payload, enabling any holder of the corresponding public key to verify the authenticity and integrity of the message. It provides non-repudiation guarantees, ensuring that the signer cannot plausibly deny having produced the signature. Message signing is foundational to
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:cryptographic-verification
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:ecdsa
relatedTo:
  - urn:ngm:class:secp256k1
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-infrastructure
---

# Message Signing

Message signing is a cryptographic operation whereby a private key is used to generate a digital signature over a message or data payload, enabling any holder of the corresponding public key to verify the authenticity and integrity of the message. It provides non-repudiation guarantees, ensuring that the signer cannot plausibly deny having produced the signature. Message signing is foundational to authentication protocols, blockchain transactions, and secure communication systems.
