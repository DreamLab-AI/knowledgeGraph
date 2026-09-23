---
okf_version: "0.2"
type: Class
title: Interactive Proof System
resource: urn:ngm:class:interactive-proof-system
domain: security
description: An Interactive Proof System is a protocol in which a computationally powerful prover convinces a probabilistic, resource-bounded verifier of the truth of a statement through a sequence of message exchanges. It satisfies completeness, so true statements are accepted with high probability, and soundness, so false statements are rejected except with negligible probability. Interactive proofs generali
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-proof-system
hasPart:
  - urn:ngm:class:commitment-scheme
requires:
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:zk-snark
implements:
  - urn:ngm:class:cryptographic-protocol
contrastsWith:
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:fiat-shamir-heuristic
supports:
  - urn:ngm:class:zk-snark
partOf:
  - urn:ngm:class:cryptographic-proof-system
relatedTo:
  - urn:ngm:class:cryptographic-proof-system
  - urn:ngm:class:fiat-shamir-heuristic
---

# Interactive Proof System

An Interactive Proof System is a protocol in which a computationally powerful prover convinces a probabilistic, resource-bounded verifier of the truth of a statement through a sequence of message exchanges. It satisfies completeness, so true statements are accepted with high probability, and soundness, so false statements are rejected except with negligible probability. Interactive proofs generalise classical proofs and form the theoretical basis for zero-knowledge proofs and many cryptographic protocols.
