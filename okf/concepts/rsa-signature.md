---
okf_version: "0.2"
type: Class
title: RSA Signature
resource: urn:ngm:class:rsa-signature
domain: security
description: An RSA signature is a digital signature scheme built on the RSA public-key cryptosystem, where a message digest is signed with the holder's private exponent and verified with the corresponding public exponent and modulus. Security rests on the difficulty of factoring large composite integers, and practical deployments use padding schemes such as PKCS#1 v1.5 or PSS together with a cryptographic has
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:digital-signature
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:code-signing
contrastsWith:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:cryptographic-hash-function
supports:
  - urn:ngm:class:certificate-authority
partOf:
  - urn:ngm:class:public-key-cryptography
relatedTo:
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:key-exchange
---

# RSA Signature

An RSA signature is a digital signature scheme built on the RSA public-key cryptosystem, where a message digest is signed with the holder's private exponent and verified with the corresponding public exponent and modulus. Security rests on the difficulty of factoring large composite integers, and practical deployments use padding schemes such as PKCS#1 v1.5 or PSS together with a cryptographic hash function. RSA signatures are widely used for certificate authorities, code signing, and transport-layer authentication, though they produce larger keys and signatures than elliptic-curve alternatives.
