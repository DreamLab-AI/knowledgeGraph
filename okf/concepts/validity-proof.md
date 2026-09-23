---
okf_version: "0.2"
type: Class
title: Validity Proof
resource: urn:ngm:class:validity-proof
domain: blockchain
description: A validity proof is a cryptographic proof, typically a succinct zero-knowledge proof, that attests that a batch of state transitions was computed correctly according to the rules of a system. In layer-2 rollups it allows a base chain to accept a compressed state update after verifying a single proof, without re-executing the underlying transactions. Validity proofs give immediate, trustless finali
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-proof-system
hasPart:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zk-starks
  - urn:ngm:class:zk-starks
enables:
  - urn:ngm:class:zk-rollup
  - urn:ngm:class:scalability
implements:
  - urn:ngm:class:zero-knowledge-proof
contrastsWith:
  - urn:ngm:class:fraud-proof
bridgesTo:
  - urn:ngm:class:zk-rollup
uses:
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:layer-2-scaling
relatedTo:
  - urn:ngm:class:zk-sync
  - urn:ngm:class:blockchain
---

# Validity Proof

A validity proof is a cryptographic proof, typically a succinct zero-knowledge proof, that attests that a batch of state transitions was computed correctly according to the rules of a system. In layer-2 rollups it allows a base chain to accept a compressed state update after verifying a single proof, without re-executing the underlying transactions. Validity proofs give immediate, trustless finality in contrast to optimistic schemes that rely on fraud challenges.
