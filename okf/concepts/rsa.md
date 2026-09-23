---
okf_version: "0.2"
type: Class
title: Rsa
resource: urn:ngm:class:rsa
domain: security
description: "RSA is a public-key cryptosystem, named after Rivest, Shamir and Adleman, whose security rests on the computational difficulty of factoring the product of two large prime numbers. It supports both encryption — where a message encrypted with a public key can only be decrypted with the corresponding private key — and digital signatures, where a private key signs data that anyone can verify with the "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:tls
dependsOn:
  - urn:ngm:class:modular-arithmetic
implements:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption
  - urn:ngm:class:public-key-cryptography
contrastsWith:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:ed25519
uses:
  - urn:ngm:class:key-generation
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:asymmetric-cryptography
relatedTo:
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:schnorr-signature
---

# Rsa

RSA is a public-key cryptosystem, named after Rivest, Shamir and Adleman, whose security rests on the computational difficulty of factoring the product of two large prime numbers. It supports both encryption — where a message encrypted with a public key can only be decrypted with the corresponding private key — and digital signatures, where a private key signs data that anyone can verify with the public key. As one of the earliest and most widely deployed asymmetric algorithms, RSA underpins much of the legacy public-key infrastructure, though it is gradually being supplemented by faster elliptic-curve schemes and, prospectively, post-quantum alternatives.
