---
okf_version: "0.2"
type: Class
title: Verifiable Random Function
resource: urn:ngm:class:verifiable-random-function
domain: security
description: A Verifiable Random Function (VRF) is a cryptographic primitive, introduced by Micali, Rabin, and Vadhan (1999), that maps an input to a pseudorandom output and produces a non-interactive proof allowing any third party to verify that the output was computed correctly from a given public key and input without learning the private key. The VRF owner possesses a private key SK and public key PK; give
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-proof
requires:
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:zero-knowledge-proof
enables:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-gaming
  - urn:ngm:class:oracle-network
  - urn:ngm:class:proof-of-stake
dependsOn:
  - urn:ngm:class:threshold-cryptography
  - urn:ngm:class:secret-sharing
implements:
  - urn:ngm:class:pseudorandom-function
contrastsWith:
  - urn:ngm:class:commit-reveal-scheme
  - urn:ngm:class:tee
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:non-fungible-token
uses:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:hash-function
  - urn:ngm:class:schnorr-signature
supports:
  - urn:ngm:class:blockchain-oracle
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:leader-election
---

# Verifiable Random Function

A Verifiable Random Function (VRF) is a cryptographic primitive, introduced by Micali, Rabin, and Vadhan (1999), that maps an input to a pseudorandom output and produces a non-interactive proof allowing any third party to verify that the output was computed correctly from a given public key and input without learning the private key. The VRF owner possesses a private key SK and public key PK; given input alpha, they compute output beta and proof pi such that any verifier with PK can confirm that beta = VRF(SK, alpha) without requiring SK. VRFs provide both uniqueness (exactly one valid output per key-input pair) and pseudorandomness (output is indistinguishable from random to anyone without SK). They are deployed in blockchain systems for unpredictable, manipulation-resistant leader election (Algorand, Cardano, Hedera), NFT trait generation, on-chain lotteries, and as the cryptographic core of Chainlink VRF and similar oracle randomness services.
