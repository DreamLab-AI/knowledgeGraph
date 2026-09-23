---
okf_version: "0.2"
type: Class
title: Range Proof
resource: urn:ngm:class:range-proof
domain: blockchain
description: A range proof is a cryptographic zero-knowledge protocol that allows a prover to convince a verifier that a committed secret value lies within a specified numeric interval, without revealing the value itself. It is essential to confidential transaction systems, where amounts are hidden inside commitments yet must be proven non-negative to prevent inflation via negative-value forgery. Modern constr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:zero-knowledge-proof
requires:
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:privacy
implements:
  - urn:ngm:class:bulletproofs
bridgesTo:
  - urn:ngm:class:privacy
uses:
  - urn:ngm:class:pedersen-commitment
  - urn:ngm:class:cryptographic-primitive
supports:
  - urn:ngm:class:monero
  - urn:ngm:class:liquid-network
partOf:
  - urn:ngm:class:confidential-transactions
relatedTo:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:zero-knowledge-proof
---

# Range Proof

A range proof is a cryptographic zero-knowledge protocol that allows a prover to convince a verifier that a committed secret value lies within a specified numeric interval, without revealing the value itself. It is essential to confidential transaction systems, where amounts are hidden inside commitments yet must be proven non-negative to prevent inflation via negative-value forgery. Modern constructions such as Bulletproofs achieve compact, logarithmic-sized proofs without a trusted setup, making range proofs practical for on-chain privacy.
