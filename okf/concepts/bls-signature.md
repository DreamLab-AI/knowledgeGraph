---
okf_version: "0.2"
type: Class
title: BLS Signature
resource: urn:ngm:class:bls-signature
domain: blockchain
description: A BLS Signature (Boneh–Lynn–Shacham signature) is a cryptographic signature scheme built on bilinear pairings over elliptic curves that permits multiple individual signatures to be aggregated into a single constant-size signature, which can be verified against the aggregate of the corresponding public keys in a single pairing operation. This aggregation property drastically reduces bandwidth and v
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:distributed-validator-technology
  - urn:ngm:class:signature-aggregation
dependsOn:
  - urn:ngm:class:discrete-logarithm-problem
implements:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:proof-of-stake
contrastsWith:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:schnorr-signature
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:bilinear-pairing
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:validator-attestation
  - urn:ngm:class:distributed-key-generation
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:key-management
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:zk-snark
---

# BLS Signature

A BLS Signature (Boneh–Lynn–Shacham signature) is a cryptographic signature scheme built on bilinear pairings over elliptic curves that permits multiple individual signatures to be aggregated into a single constant-size signature, which can be verified against the aggregate of the corresponding public keys in a single pairing operation. This aggregation property drastically reduces bandwidth and verification cost when many parties must co-sign a message or attest to a block.
