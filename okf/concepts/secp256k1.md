---
okf_version: "0.2"
type: Class
title: secp256k1
resource: urn:ngm:class:secp256k1
domain: blockchain
description: secp256k1 is a Koblitz elliptic curve defined by the short Weierstrass equation y² = x³ + 7 over the 256-bit prime field ᴽₚ (where p = 2²⁵⁶ − 2³² − 977), standardised in SEC 2 by the Standards for Efficient Cryptography Group (SECG) and widely adopted as the asymmetric cryptographic backbone of Bitcoin, Ethereum, and dozens of subsequent blockchain protocols. Its specific Koblitz-form parameters p
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:elliptic-curve-cryptography
requires:
  - urn:ngm:class:private-key
  - urn:ngm:class:hash-function
  - urn:ngm:class:random-number-generation
enables:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:bitcoin-transaction
  - urn:ngm:class:taproot
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:wallet-address-derivation
  - urn:ngm:class:threshold-signature-scheme
implements:
  - urn:ngm:class:sec-2-standard
contrastsWith:
  - urn:ngm:class:ed25519
  - urn:ngm:class:curve25519
  - urn:ngm:class:nist-p-256
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:multi-party-computation
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:ecdsa
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:finite-field-arithmetic
supports:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ethereum
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:lightning-network
standardizedBy:
  - urn:ngm:class:standards-for-efficient-cryptography-group
relatedTo:
  - urn:ngm:class:key-derivation-function
  - urn:ngm:class:hierarchical-deterministic-wallet
  - urn:ngm:class:blockchain-security
---

# secp256k1

secp256k1 is a Koblitz elliptic curve defined by the short Weierstrass equation y² = x³ + 7 over the 256-bit prime field ᴽₚ (where p = 2²⁵⁶ − 2³² − 977), standardised in SEC 2 by the Standards for Efficient Cryptography Group (SECG) and widely adopted as the asymmetric cryptographic backbone of Bitcoin, Ethereum, and dozens of subsequent blockchain protocols. Its specific Koblitz-form parameters permit the Frobenius endomorphism optimisation (GLV decomposition), yielding scalar multiplication roughly 30% faster than equivalent-security NIST curves without requiring a random-looking but opaque seed. The curve underpins both the Elliptic Curve Digital Signature Algorithm (ECDSA) used for transaction authorisation and, via BIP 340, the Schnorr signature scheme that enables key and signature aggregation in Taproot-based Bitcoin smart contracts.
