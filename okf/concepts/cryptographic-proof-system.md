---
okf_version: "0.2"
type: Class
title: Cryptographic Proof System
resource: urn:ngm:class:cryptographic-proof-system
domain: security
description: A cryptographic proof system is a formal protocol allowing one party (a prover) to convince another party (a verifier) of the truth of a statement without revealing any information beyond the validity of that statement. These systems provide mathematical guarantees of soundness, completeness, and, in zero-knowledge variants, zero information leakage.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-protocol
hasPart:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:commitment-scheme
enables:
  - urn:ngm:class:cryptographic-proofs
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:zk-snarks
  - urn:ngm:class:zk-starks
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Cryptographic Proof System

A cryptographic proof system is a formal protocol allowing one party (a prover) to convince another party (a verifier) of the truth of a statement without revealing any information beyond the validity of that statement. These systems provide mathematical guarantees of soundness, completeness, and, in zero-knowledge variants, zero information leakage.
