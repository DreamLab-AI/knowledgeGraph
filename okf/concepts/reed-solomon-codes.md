---
okf_version: "0.2"
type: Class
title: Reed-Solomon Codes
resource: urn:ngm:class:reed-solomon-codes
domain: infrastructure
description: Reed-Solomon codes are a class of non-binary, cyclic, block error-correcting codes defined over finite fields (Galois fields), capable of correcting both erasures and symbol errors with provably optimal efficiency at the Singleton bound. Introduced by Irving Reed and Gustave Solomon in 1960, they treat data blocks as polynomials over a finite field and encode them by evaluating the polynomial at m
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:error-correction
requires:
  - urn:ngm:class:polynomial-interpolation
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-integrity
  - urn:ngm:class:data-availability-sampling
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-collaboration
supports:
  - urn:ngm:class:cryptographic-proof
  - urn:ngm:class:blockchain
  - urn:ngm:class:polynomial-commitment
  - urn:ngm:class:stark
relatedTo:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:data-availability
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:finite-field-arithmetic
  - urn:ngm:class:coding-theory
---

# Reed-Solomon Codes

Reed-Solomon codes are a class of non-binary, cyclic, block error-correcting codes defined over finite fields (Galois fields), capable of correcting both erasures and symbol errors with provably optimal efficiency at the Singleton bound. Introduced by Irving Reed and Gustave Solomon in 1960, they treat data blocks as polynomials over a finite field and encode them by evaluating the polynomial at multiple distinct points, allowing the original polynomial to be reconstructed from any sufficient subset of evaluation points. Reed-Solomon codes underpin data reliability in storage media (CDs, DVDs, RAID), satellite communications, QR codes, and are foundational to erasure-coded distributed storage and modern polynomial commitment schemes used in zero-knowledge proofs.
