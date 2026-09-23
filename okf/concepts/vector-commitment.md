---
okf_version: "0.2"
type: Class
title: Vector Commitment
resource: urn:ngm:class:vector-commitment
domain: security
description: A vector commitment is a cryptographic primitive that produces a short, binding commitment to an ordered sequence of values such that the committer can later open any individual position with a compact proof of its value. It is position-binding, meaning one cannot produce valid openings of two different values at the same index, and it supports succinct membership and update proofs. Vector commitm
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:commitment-scheme
hasPart:
  - urn:ngm:class:merkle-proof
requires:
  - urn:ngm:class:cryptographic-commitment
enables:
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:verifiable-computation
dependsOn:
  - urn:ngm:class:zero-knowledge
implements:
  - urn:ngm:class:commitment-scheme
contrastsWith:
  - urn:ngm:class:merkle-tree
bridgesTo:
  - urn:ngm:class:verifiable-computation
uses:
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:kzg-commitment
supports:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:blockchain-scalability
relatedTo:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:polynomial-commitment
---

# Vector Commitment

A vector commitment is a cryptographic primitive that produces a short, binding commitment to an ordered sequence of values such that the committer can later open any individual position with a compact proof of its value. It is position-binding, meaning one cannot produce valid openings of two different values at the same index, and it supports succinct membership and update proofs. Vector commitments generalise Merkle trees and underpin verifiable databases, stateless blockchains and proof systems.
