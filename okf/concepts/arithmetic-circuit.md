---
okf_version: "0.2"
type: Class
title: Arithmetic Circuit
resource: urn:ngm:class:arithmetic-circuit
domain: security
description: "A directed acyclic graph (DAG) of addition and multiplication gates over a field, used to represent polynomial computations in a form amenable to cryptographic proof systems. Arithmetic circuits are the canonical intermediate representation for zero-knowledge proof schemes such as zk-SNARKs and STARKs: a computation is first expressed as an arithmetic circuit, then compiled into a system of polyno"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:logic-gate
requires:
  - urn:ngm:class:finite-field-arithmetic
  - urn:ngm:class:polynomial-commitment
enables:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zk-starks
  - urn:ngm:class:verifiable-computation
  - urn:ngm:class:zk-starks
dependsOn:
  - urn:ngm:class:elliptic-curve-cryptography
implements:
  - urn:ngm:class:cryptographic-protocol
contrastsWith:
  - urn:ngm:class:boolean-circuit
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:constraint-system
supports:
  - urn:ngm:class:privacy-preserving-computation
relatedTo:
  - urn:ngm:class:boolean-circuit
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:secure-multi-party-computation
---

# Arithmetic Circuit

A directed acyclic graph (DAG) of addition and multiplication gates over a field, used to represent polynomial computations in a form amenable to cryptographic proof systems. Arithmetic circuits are the canonical intermediate representation for zero-knowledge proof schemes such as zk-SNARKs and STARKs: a computation is first expressed as an arithmetic circuit, then compiled into a system of polynomial constraints (R1CS or Plonkish), and finally proved using a cryptographic proving system. The complexity of a circuit is characterised by its depth (for parallelism) and size (gate count).
