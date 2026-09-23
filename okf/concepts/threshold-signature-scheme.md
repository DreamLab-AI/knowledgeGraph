---
okf_version: "0.2"
type: Class
title: Threshold Signature Scheme
resource: urn:ngm:class:threshold-signature-scheme
domain: security
description: "A Threshold Signature Scheme (TSS) is a cryptographic protocol in which a private key is distributed among n parties such that any subset of at least t parties can jointly compute a valid digital signature without any single party ever possessing the complete private key, while fewer than t parties gain zero information about the key. TSS extends threshold secret sharing (Shamir's Secret Sharing) "
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:signature-scheme
requires:
  - urn:ngm:class:distributed-key-generation
  - urn:ngm:class:secret-sharing
  - urn:ngm:class:secure-multi-party-computation
enables:
  - urn:ngm:class:key-management
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:decentralized-governance
  - urn:ngm:class:mpc-wallet
  - urn:ngm:class:institutional-custody
dependsOn:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:homomorphic-encryption
implements:
  - urn:ngm:class:digital-signature
contrastsWith:
  - urn:ngm:class:multi-signature
  - urn:ngm:class:hardware-security-module
bridgesTo:
  - urn:ngm:class:tee
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:proof-of-stake
relatedTo:
  - urn:ngm:class:bls-signature
  - urn:ngm:class:taproot
---

# Threshold Signature Scheme

A Threshold Signature Scheme (TSS) is a cryptographic protocol in which a private key is distributed among n parties such that any subset of at least t parties can jointly compute a valid digital signature without any single party ever possessing the complete private key, while fewer than t parties gain zero information about the key. TSS extends threshold secret sharing (Shamir's Secret Sharing) to the signing operation itself, producing a signature that is indistinguishable on-chain from a standard single-key signature, thereby enhancing privacy and reducing transaction fees compared to traditional on-chain multisig. TSS underpins distributed key management for exchanges, MPC wallets, and cross-chain bridge custody architectures.
