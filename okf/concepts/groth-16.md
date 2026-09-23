---
okf_version: "0.2"
type: Class
title: Groth16
resource: urn:ngm:class:groth-16
domain: security
description: A pairing-based zk-SNARK proving system that produces constant-size proofs verifiable with a few elliptic curve pairing operations, at the cost of a per-circuit trusted setup.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:zk-snark
requires:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:zk-snark
enables:
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:cryptographic-primitive
---

# Groth16

A pairing-based zk-SNARK proving system that produces constant-size proofs verifiable with a few elliptic curve pairing operations, at the cost of a per-circuit trusted setup.
