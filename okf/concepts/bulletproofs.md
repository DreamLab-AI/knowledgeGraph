---
okf_version: "0.2"
type: Class
title: Bulletproofs
resource: urn:ngm:class:bulletproofs
domain: blockchain
description: Bulletproofs are a class of short, non-interactive zero-knowledge proof system that enables efficient range proofs and arbitrary arithmetic circuit satisfiability without a trusted setup. Based on the discrete logarithm assumption over elliptic curves, they produce logarithmically-sized proofs that can be aggregated and batched, making them particularly well-suited to confidential transaction syst
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:zero-knowledge-proof
requires:
  - urn:ngm:class:computational-hardness-assumption
enables:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:range-proof
  - urn:ngm:class:batch-verification
  - urn:ngm:class:privacy-preserving-computation
implements:
  - urn:ngm:class:non-interactive-proof
contrastsWith:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:zk-starks
  - urn:ngm:class:groth-16
bridgesTo:
  - urn:ngm:class:security
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:fiat-shamir-transform
  - urn:ngm:class:pedersen-commitment
supports:
  - urn:ngm:class:monero
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:proof-aggregation
---

# Bulletproofs

Bulletproofs are a class of short, non-interactive zero-knowledge proof system that enables efficient range proofs and arbitrary arithmetic circuit satisfiability without a trusted setup. Based on the discrete logarithm assumption over elliptic curves, they produce logarithmically-sized proofs that can be aggregated and batched, making them particularly well-suited to confidential transaction systems in public blockchains where proof size and verification cost are critical constraints.
