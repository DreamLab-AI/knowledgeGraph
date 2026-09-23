---
okf_version: "0.2"
type: Class
title: Homomorphic Encryption
resource: urn:ngm:class:homomorphic-encryption
domain: security
description: Homomorphic Encryption (HE) is a cryptographic paradigm that permits arbitrary arithmetic and logical operations to be performed directly on ciphertext, yielding an encrypted result that, upon decryption, matches the outcome of the same operations applied to the original plaintext. Fully Homomorphic Encryption (FHE), first constructed by Craig Gentry in 2009 using ideal-lattice hard problems, supp
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:encryption-scheme
  - urn:ngm:class:ckks-scheme
requires:
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:lattice-cryptography
  - urn:ngm:class:learning-with-errors
enables:
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:federated-learning
  - urn:ngm:class:homomorphic-encryption-for-machine-learning
  - urn:ngm:class:private-information-retrieval
  - urn:ngm:class:homomorphic-encryption-for-machine-learning
dependsOn:
  - urn:ngm:class:post-quantum-cryptography
  - urn:ngm:class:noise-management
contrastsWith:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:garbled-circuits
  - urn:ngm:class:secure-enclave
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:confidential-computing
uses:
  - urn:ngm:class:ring-learning-with-errors
  - urn:ngm:class:number-theoretic-transform
supports:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:healthcare-data-privacy
  - urn:ngm:class:genomic-data-analysis
standardizedBy:
  - urn:ngm:class:iso-iec-jtc-1
  - urn:ngm:class:homomorphicencryption-org
  - urn:ngm:class:iso-iec-jtc-1
partOf:
  - urn:ngm:class:privacy-preserving-technology
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:oblivious-ram
  - urn:ngm:class:functional-encryption
---

# Homomorphic Encryption

Homomorphic Encryption (HE) is a cryptographic paradigm that permits arbitrary arithmetic and logical operations to be performed directly on ciphertext, yielding an encrypted result that, upon decryption, matches the outcome of the same operations applied to the original plaintext. Fully Homomorphic Encryption (FHE), first constructed by Craig Gentry in 2009 using ideal-lattice hard problems, supports an unbounded depth of operations and enables third parties — such as cloud compute providers — to process sensitive data without ever gaining access to it in plaintext form. Practical FHE schemes include BGV and BFV for exact integer arithmetic, CKKS for approximate real-number arithmetic (widely used in machine-learning inference), and TFHE for fast gate-by-gate bootstrapping over Boolean circuits.
