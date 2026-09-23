---
okf_version: "0.2"
type: Class
title: EdDSA
resource: urn:ngm:class:ed-dsa
domain: security
description: EdDSA (Edwards-curve Digital Signature Algorithm) is a high-performance digital signature scheme based on twisted Edwards elliptic curves, standardised in RFC 8032. It provides deterministic signing—eliminating the random number generation vulnerabilities that afflicted earlier schemes like ECDSA—whilst offering strong security with compact key and signature sizes. The most widely deployed instant
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:digital-signature
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:public-key
enables:
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:authentication
  - urn:ngm:class:decentralised-identity
implements:
  - urn:ngm:class:public-key-cryptography
contrastsWith:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:rsa-signature
  - urn:ngm:class:post-quantum-cryptography
bridgesTo:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:decentralised-identifier
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:twisted-edwards-curve
  - urn:ngm:class:curve25519
standardizedBy:
  - urn:ngm:class:rfc-8032
  - urn:ngm:class:internet-engineering-task-force
relatedTo:
  - urn:ngm:class:ed25519
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:signature-scheme
  - urn:ngm:class:tls
  - urn:ngm:class:wireguard
  - urn:ngm:class:openssh
---

# EdDSA

EdDSA (Edwards-curve Digital Signature Algorithm) is a high-performance digital signature scheme based on twisted Edwards elliptic curves, standardised in RFC 8032. It provides deterministic signing—eliminating the random number generation vulnerabilities that afflicted earlier schemes like ECDSA—whilst offering strong security with compact key and signature sizes. The most widely deployed instantiation is Ed25519, which operates over Curve25519 and produces 64-byte signatures with 128-bit security. EdDSA is extensively used in secure communications protocols, blockchain systems, verifiable credentials, and decentralised identity frameworks.
