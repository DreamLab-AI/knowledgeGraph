---
okf_version: "0.2"
type: Class
title: KZG Commitment
resource: urn:ngm:class:kzg-commitment
domain: infrastructure
description: "A KZG commitment is a polynomial commitment scheme, named after Kate, Zaverucha and Goldberg, that lets a prover commit to a polynomial with a single constant-size group element and later open it at any point with a constant-size proof. Its security rests on elliptic-curve pairings and a structured reference string produced by a trusted setup. It is central to modern data-availability and scaling "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:polynomial-commitment
hasPart:
  - urn:ngm:class:cryptographic-commitment
requires:
  - urn:ngm:class:elliptic-curve-cryptography
enables:
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:danksharding
  - urn:ngm:class:data-availability
implements:
  - urn:ngm:class:polynomial-commitment
bridgesTo:
  - urn:ngm:class:danksharding
uses:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:cryptographic-commitment
supports:
  - urn:ngm:class:rollup
  - urn:ngm:class:zero-knowledge-proof
partOf:
  - urn:ngm:class:polynomial-commitment
  - urn:ngm:class:danksharding
relatedTo:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:ethereum
  - urn:ngm:class:data-availability
---

# KZG Commitment

A KZG commitment is a polynomial commitment scheme, named after Kate, Zaverucha and Goldberg, that lets a prover commit to a polynomial with a single constant-size group element and later open it at any point with a constant-size proof. Its security rests on elliptic-curve pairings and a structured reference string produced by a trusted setup. It is central to modern data-availability and scaling designs on Ethereum, including proto-danksharding and danksharding.
