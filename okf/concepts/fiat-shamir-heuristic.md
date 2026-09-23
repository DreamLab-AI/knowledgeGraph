---
okf_version: "0.2"
type: Class
title: Fiat Shamir Heuristic
resource: urn:ngm:class:fiat-shamir-heuristic
domain: security
description: "The Fiat-Shamir heuristic is a cryptographic technique that transforms an interactive public-coin proof or identification protocol into a non-interactive one by replacing the verifier's random challenges with the output of a cryptographic hash function applied to the prover's messages. This removes the need for live interaction, allowing proofs and signatures to be generated and verified offline. "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:hash-function
enables:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:bulletproofs
dependsOn:
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:digital-signature
contrastsWith:
  - urn:ngm:class:interactive-proof-system
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:elliptic-curve-cryptography
relatedTo:
  - urn:ngm:class:interactive-proof-system
  - urn:ngm:class:commitment-scheme
---

# Fiat Shamir Heuristic

The Fiat-Shamir heuristic is a cryptographic technique that transforms an interactive public-coin proof or identification protocol into a non-interactive one by replacing the verifier's random challenges with the output of a cryptographic hash function applied to the prover's messages. This removes the need for live interaction, allowing proofs and signatures to be generated and verified offline. It is foundational to many digital signature schemes and non-interactive zero-knowledge proofs, with security analysed in the random oracle model.
