---
okf_version: "0.2"
type: Class
title: Zero-Knowledge Proof (ZKP)
resource: urn:ngm:class:zero-knowledge-proof-zkp
domain: infrastructure
description: A cryptographic protocol that enables one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:bulletproofs
  - urn:ngm:class:plonk
  - urn:ngm:class:zk-snarks
  - urn:ngm:class:zk-starks
  - urn:ngm:class:interactive-zkp
  - urn:ngm:class:non-interactive-zkp
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:commitment-scheme
enables:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:privacy-preserving-identity
  - urn:ngm:class:verifiable-computation
  - urn:ngm:class:private-authentication
dependsOn:
  - urn:ngm:class:computational-complexity-theory
  - urn:ngm:class:number-theory
  - urn:ngm:class:algebraic-circuits
partOf:
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:privacy-preserving-protocol
  - urn:ngm:class:cryptographic-verification
---

# Zero-Knowledge Proof (ZKP)

A cryptographic protocol that enables one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself.
