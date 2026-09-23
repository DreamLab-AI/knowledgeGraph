---
okf_version: "0.2"
type: Class
title: Verifiable Computation
resource: urn:ngm:class:verifiable-computation
domain: security
description: Techniques that let a party outsource a computation and receive a proof that the result is correct, allowing efficient verification without redoing the work. Proof systems such as SNARKs and STARKs make verification exponentially cheaper than re-execution, enabling trust-minimised delegation at scale.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-proof
hasPart:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:stark
requires:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:arithmetic-circuit
  - urn:ngm:class:commitment-scheme
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:privacy-preserving-computation
  - urn:ngm:class:layer-2-scaling
contrastsWith:
  - urn:ngm:class:trusted-execution-environments
  - urn:ngm:class:multi-party-computation
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:inference
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:trusted-execution-environments
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:hash-function
  - urn:ngm:class:interactive-proof-system
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:de-fi
  - urn:ngm:class:confidential-computing
relatedTo:
  - urn:ngm:class:interactive-proof-system
  - urn:ngm:class:succinct-argument
---

# Verifiable Computation

Techniques that let a party outsource a computation and receive a proof that the result is correct, allowing efficient verification without redoing the work. Proof systems such as SNARKs and STARKs make verification exponentially cheaper than re-execution, enabling trust-minimised delegation at scale.
