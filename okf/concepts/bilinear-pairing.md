---
okf_version: "0.2"
type: Class
title: Bilinear Pairing
resource: urn:ngm:class:bilinear-pairing
domain: security
description: A bilinear pairing is a mathematical map between two groups to a third group that is linear in each argument separately, commonly realised as the Weil or Tate pairing on elliptic curves over finite fields. Bilinear pairings enable advanced cryptographic constructions including identity-based encryption, short signature schemes (BLS), and zero-knowledge proof systems. They form the algebraic founda
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:weil-pairing
  - urn:ngm:class:ate-pairing
requires:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:finite-field-arithmetic
enables:
  - urn:ngm:class:identity-based-encryption
  - urn:ngm:class:bls-signature
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:threshold-signature-scheme
dependsOn:
  - urn:ngm:class:bn254-curve
  - urn:ngm:class:bls12-381-curve
contrastsWith:
  - urn:ngm:class:rsa
uses:
  - urn:ngm:class:pairing-based-cryptography
  - urn:ngm:class:public-key-cryptography
supports:
  - urn:ngm:class:blockchain
  - urn:ngm:class:zk-snark
relatedTo:
  - urn:ngm:class:cryptographic-accumulator
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:digital-signature
---

# Bilinear Pairing

A bilinear pairing is a mathematical map between two groups to a third group that is linear in each argument separately, commonly realised as the Weil or Tate pairing on elliptic curves over finite fields. Bilinear pairings enable advanced cryptographic constructions including identity-based encryption, short signature schemes (BLS), and zero-knowledge proof systems. They form the algebraic foundation of pairing-based cryptography, which underpins threshold signatures and SNARKs used in modern blockchain protocols.
