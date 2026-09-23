---
okf_version: "0.2"
type: Class
title: Polynomial Commitment
resource: urn:ngm:class:polynomial-commitment
domain: infrastructure
description: A Polynomial Commitment is a cryptographic scheme that lets a prover commit to a polynomial with a short, binding value and later open the commitment at chosen evaluation points without revealing the whole polynomial. Verification of an opening is succinct and the commitment hides the polynomial until opened. Polynomial commitments are a core building block of modern succinct proof systems such as
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-commitment
requires:
  - urn:ngm:class:trusted-setup
enables:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:verifiable-computation
dependsOn:
  - urn:ngm:class:finite-field
implements:
  - urn:ngm:class:cryptographic-commitment
contrastsWith:
  - urn:ngm:class:merkle-tree
uses:
  - urn:ngm:class:finite-field
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:zk-snark
  - urn:ngm:class:verifiable-computation
partOf:
  - urn:ngm:class:commitment-scheme
relatedTo:
  - urn:ngm:class:kzg-commitment
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:merkle-tree
---

# Polynomial Commitment

A Polynomial Commitment is a cryptographic scheme that lets a prover commit to a polynomial with a short, binding value and later open the commitment at chosen evaluation points without revealing the whole polynomial. Verification of an opening is succinct and the commitment hides the polynomial until opened. Polynomial commitments are a core building block of modern succinct proof systems such as zk-SNARKs and zk-STARKs.
