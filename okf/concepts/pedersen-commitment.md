---
okf_version: "0.2"
type: Class
title: Pedersen Commitment
resource: urn:ngm:class:pedersen-commitment
domain: security
description: A Pedersen commitment is a cryptographic commitment scheme in which a committer binds to a secret value v by computing C = g^v * h^r, where g and h are independent group generators and r is a random blinding factor. The scheme is computationally binding under the discrete logarithm assumption and unconditionally (information-theoretically) hiding, meaning an adversary with unlimited computation ca
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cryptographic-commitment
requires:
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:random-oracle-model
  - urn:ngm:class:random-oracle-model
enables:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:range-proof
  - urn:ngm:class:bulletproofs
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:secure-multi-party-computation
implements:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:commitment-scheme
contrastsWith:
  - urn:ngm:class:hash-commitment
  - urn:ngm:class:elgamal-encryption
bridgesTo:
  - urn:ngm:class:privacy-preserving-blockchain
  - urn:ngm:class:monero
  - urn:ngm:class:privacy-preserving-blockchain
uses:
  - urn:ngm:class:elliptic-curve-group
  - urn:ngm:class:blinding-factor
  - urn:ngm:class:group-generator
supports:
  - urn:ngm:class:privacy-preserving-protocol
  - urn:ngm:class:digital-signature
  - urn:ngm:class:verifiable-secret-sharing
relatedTo:
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:schnorr-signature
  - urn:ngm:class:sigma-protocol
  - urn:ngm:class:zero-knowledge-proof
---

# Pedersen Commitment

A Pedersen commitment is a cryptographic commitment scheme in which a committer binds to a secret value v by computing C = g^v * h^r, where g and h are independent group generators and r is a random blinding factor. The scheme is computationally binding under the discrete logarithm assumption and unconditionally (information-theoretically) hiding, meaning an adversary with unlimited computation cannot determine the committed value from C alone. Crucially, Pedersen commitments are additively homomorphic: the product of two commitments C(v1, r1) * C(v2, r2) equals C(v1+v2, r1+r2), enabling arithmetic on committed values without revealing them. This property makes Pedersen commitments foundational to confidential transactions, range proofs, and zero-knowledge proof systems.
