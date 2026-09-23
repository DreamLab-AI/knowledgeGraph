---
okf_version: "0.2"
type: Class
title: BIP-340 Schnorr Keypair
resource: urn:ngm:class:bip-340-schnorr-keypair
domain: blockchain
description: A BIP-340 Schnorr Keypair is the 32-byte public key and associated private key pairing defined by Bitcoin Improvement Proposal 340, which introduced Schnorr signature support to Bitcoin via the Taproot upgrade activated in November 2021. Unlike the earlier ECDSA scheme used in Bitcoin, BIP-340 uses x-only public keys — just the x-coordinate of the secp256k1 curve point — reducing on-chain byte foo
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-keys
requires:
  - urn:ngm:class:secp256k1-elliptic-curve
  - urn:ngm:class:private-key
enables:
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:multi-sig-governance
  - urn:ngm:class:bip-342-tapscript
  - urn:ngm:class:mu-sig-2
  - urn:ngm:class:nostr-protocol
  - urn:ngm:class:key-aggregation
dependsOn:
  - urn:ngm:class:hash-function
  - urn:ngm:class:tagged-hash
contrastsWith:
  - urn:ngm:class:ecdsa
bridgesTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:decentralized-identifier
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:x-only-public-key
  - urn:ngm:class:random-oracle-model
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
partOf:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:taproot
relatedTo:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:secp256k1
  - urn:ngm:class:bip-340
  - urn:ngm:class:bip-341
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:bip-327
---

# BIP-340 Schnorr Keypair

A BIP-340 Schnorr Keypair is the 32-byte public key and associated private key pairing defined by Bitcoin Improvement Proposal 340, which introduced Schnorr signature support to Bitcoin via the Taproot upgrade activated in November 2021. Unlike the earlier ECDSA scheme used in Bitcoin, BIP-340 uses x-only public keys — just the x-coordinate of the secp256k1 curve point — reducing on-chain byte footprint and simplifying key aggregation. The scheme is provably secure under the discrete logarithm assumption and supports native key and signature aggregation via protocols such as MuSig2, enabling multi-party signing that is indistinguishable from single-party signing on-chain. BIP-340 keypairs are the cryptographic foundation for Taproot outputs, Tapscript, and the Nostr identity protocol.
