---
okf_version: "0.2"
type: Class
title: Schnorr Signature
resource: urn:ngm:class:schnorr-signature
domain: security
description: A provably secure digital signature scheme based on the discrete logarithm problem over elliptic curves, offering linearity properties that enable key and signature aggregation. Within blockchain systems Schnorr signatures underpin features such as Taproot, MuSig multi-signature protocols, and threshold signing, providing smaller signature sizes and stronger privacy compared to ECDSA.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:elliptic-curve-group
  - urn:ngm:class:private-key
enables:
  - urn:ngm:class:digital-signature-verification
  - urn:ngm:class:key-aggregation
  - urn:ngm:class:signature-aggregation
  - urn:ngm:class:threshold-signature-scheme
implements:
  - urn:ngm:class:taproot
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
contrastsWith:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:bls-signature
bridgesTo:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:secp256k1
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:bip-340
  - urn:ngm:class:iso-iec-14888
partOf:
  - urn:ngm:class:bitcoin-protocol
  - urn:ngm:class:cryptographic-primitive
relatedTo:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:signature-scheme
  - urn:ngm:class:discrete-logarithm-problem
---

# Schnorr Signature

A provably secure digital signature scheme based on the discrete logarithm problem over elliptic curves, offering linearity properties that enable key and signature aggregation. Within blockchain systems Schnorr signatures underpin features such as Taproot, MuSig multi-signature protocols, and threshold signing, providing smaller signature sizes and stronger privacy compared to ECDSA.
