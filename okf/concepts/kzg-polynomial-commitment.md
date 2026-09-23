---
okf_version: "0.2"
type: Class
title: KZG Polynomial Commitment
resource: urn:ngm:class:kzg-polynomial-commitment
domain: blockchain
description: The Kate-Zaverucha-Goldberg polynomial commitment scheme, which uses elliptic curve pairings and a structured reference string from a trusted setup to commit to a polynomial with a single constant-size group element and prove any evaluation with a constant-size opening proof; its succinctness underpins SNARK constructions such as PLONK and Ethereum's data availability sampling via blob commitments
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:polynomial-commitment
requires:
  - urn:ngm:class:trusted-setup
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:danksharding
  - urn:ngm:class:data-availability
relatedTo:
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:zero-knowledge-proof
---

# KZG Polynomial Commitment

The Kate-Zaverucha-Goldberg polynomial commitment scheme, which uses elliptic curve pairings and a structured reference string from a trusted setup to commit to a polynomial with a single constant-size group element and prove any evaluation with a constant-size opening proof; its succinctness underpins SNARK constructions such as PLONK and Ethereum's data availability sampling via blob commitments in proto-danksharding.
