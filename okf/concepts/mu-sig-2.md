---
okf_version: "0.2"
type: Class
title: MuSig2
resource: urn:ngm:class:mu-sig-2
domain: security
description: MuSig2 is a two-round multi-signature protocol for the Schnorr signature scheme, enabling a group of signers to collaboratively produce a single aggregate signature and a single aggregate public key that are indistinguishable on-chain from a standard single-signer Schnorr signature. It improves upon the original MuSig (three-round) by eliminating one communication round without sacrificing securit
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:multisignature
requires:
  - urn:ngm:class:schnorr-signatures
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:key-aggregation
  - urn:ngm:class:nonce-commitment
enables:
  - urn:ngm:class:taproot
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:privacy-preserving
  - urn:ngm:class:custody
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:privacy-preserving
  - urn:ngm:class:custody
implements:
  - urn:ngm:class:bip-327
contrastsWith:
  - urn:ngm:class:shamir-secret-sharing
  - urn:ngm:class:musig
  - urn:ngm:class:frost
  - urn:ngm:class:ecdsa-multisig
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:secure-multi-party-computation
uses:
  - urn:ngm:class:secp256k1
  - urn:ngm:class:hash-function
  - urn:ngm:class:random-oracle-model
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:lightning-network
  - urn:ngm:class:hardware-wallet
  - urn:ngm:class:custody
standardizedBy:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
  - urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals
relatedTo:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:adaptor-signatures
  - urn:ngm:class:discrete-logarithm
  - urn:ngm:class:script-less-contracts
---

# MuSig2

MuSig2 is a two-round multi-signature protocol for the Schnorr signature scheme, enabling a group of signers to collaboratively produce a single aggregate signature and a single aggregate public key that are indistinguishable on-chain from a standard single-signer Schnorr signature. It improves upon the original MuSig (three-round) by eliminating one communication round without sacrificing security, using a technique of committing to multiple nonces per signer and computing a linear combination of those nonces after seeing all co-signers' commitments. The scheme is proven secure in the random oracle model under the discrete logarithm assumption and is resistant to the rogue-key and Wagner attacks that affect naive key-aggregation approaches.
