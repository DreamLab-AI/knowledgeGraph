---
okf_version: "0.2"
type: Class
title: Commitment Scheme
resource: urn:ngm:class:commitment-scheme
domain: security
description: "A commitment scheme is a two-phase cryptographic primitive that allows a party (the committer) to bind itself to a chosen value by producing a short commitment string — analogous to sealing a value in an envelope — that is later opened by revealing the original value and a randomness parameter, with the scheme satisfying two security properties: binding (the committer cannot change the value after"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
requires:
  - urn:ngm:class:randomness
enables:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:blockchain-anchoring
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:verifiable-random-function
  - urn:ngm:class:coin-flipping-protocol
implements:
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:kzg-polynomial-commitment
  - urn:ngm:class:vector-commitment
contrastsWith:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:encryption-scheme
bridgesTo:
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zk-starks
  - urn:ngm:class:threshold-signature-scheme
relatedTo:
  - urn:ngm:class:zero-knowledge
  - urn:ngm:class:merkle-proof
  - urn:ngm:class:information-theoretic-security
  - urn:ngm:class:post-quantum-cryptography
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Commitment Scheme

A commitment scheme is a two-phase cryptographic primitive that allows a party (the committer) to bind itself to a chosen value by producing a short commitment string — analogous to sealing a value in an envelope — that is later opened by revealing the original value and a randomness parameter, with the scheme satisfying two security properties: binding (the committer cannot change the value after committing) and hiding (the commitment reveals nothing about the value before opening). Commitment schemes are foundational building blocks for zero-knowledge proofs, secure multi-party computation, and blockchain protocols.
