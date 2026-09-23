---
okf_version: "0.2"
type: Class
title: Non Interactive Proof
resource: urn:ngm:class:non-interactive-proof
domain: security
description: A Non-Interactive Proof (NIP) is a cryptographic proof system in which the prover transmits a single message to the verifier, without any back-and-forth challenge-response rounds, allowing verification of a claim without ongoing interaction. Non-interactive proofs are typically constructed from interactive protocols via the Fiat-Shamir heuristic, replacing the verifier's random challenge with a ha
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-proof
hasPart:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:cryptographic-verification
enables:
  - urn:ngm:class:zk-snarks
  - urn:ngm:class:zk-starks
  - urn:ngm:class:zero-knowledge-rollup
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-primitive
implements:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptographic-proof-system
contrastsWith:
  - urn:ngm:class:interactive-proof-system
bridgesTo:
  - urn:ngm:class:zero-knowledge-machine-learning
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:zk-snark
supports:
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:cryptographic-security
relatedTo:
  - urn:ngm:class:interactive-proof-system
  - urn:ngm:class:cryptographic-proofs
  - urn:ngm:class:bulletproofs
  - urn:ngm:class:stark
---

# Non Interactive Proof

A Non-Interactive Proof (NIP) is a cryptographic proof system in which the prover transmits a single message to the verifier, without any back-and-forth challenge-response rounds, allowing verification of a claim without ongoing interaction. Non-interactive proofs are typically constructed from interactive protocols via the Fiat-Shamir heuristic, replacing the verifier's random challenge with a hash of the prover's first message, binding the proof to the statement. The resulting proof string can be broadcast publicly, stored on-chain, or verified asynchronously by any party possessing the verification key. Non-interactive zero-knowledge proofs (NIZKs) additionally guarantee that the proof reveals nothing beyond the truth of the statement, and form the foundation of [[ZK-SNARK]] and [[ZK-STARKs]] schemes used in blockchain privacy and scalability applications.
