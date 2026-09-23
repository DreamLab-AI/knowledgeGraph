---
okf_version: "0.2"
type: Class
title: Garbled Circuits
resource: urn:ngm:class:garbled-circuits
domain: security
description: "Garbled Circuits is a cryptographic technique, introduced by Yao in 1986, that enables two-party secure computation by encoding a Boolean circuit such that one party (the garbler) produces an encrypted representation of the circuit and the other party (the evaluator) can compute the output without learning the garbler's private inputs. Each gate of the circuit is replaced by a garbled truth table "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptographic-primitive
hasPart:
  - urn:ngm:class:oblivious-transfer
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:secure-data-sharing
  - urn:ngm:class:privacy-preserving-machine-learning
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-key
implements:
  - urn:ngm:class:multi-party-computation
  - urn:ngm:class:privacy-preserving-computation
contrastsWith:
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:zero-knowledge-proof
bridgesTo:
  - urn:ngm:class:homomorphic-encryption-for-machine-learning
uses:
  - urn:ngm:class:oblivious-transfer
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:cryptographic-commitment
supports:
  - urn:ngm:class:privacy-preserving-analytics
relatedTo:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:secure-aggregation
---

# Garbled Circuits

Garbled Circuits is a cryptographic technique, introduced by Yao in 1986, that enables two-party secure computation by encoding a Boolean circuit such that one party (the garbler) produces an encrypted representation of the circuit and the other party (the evaluator) can compute the output without learning the garbler's private inputs. Each gate of the circuit is replaced by a garbled truth table consisting of four ciphertexts, and the evaluator decrypts exactly one row per gate using wire labels obtained through [[Oblivious Transfer]]. Modern optimisations — including Free XOR, Half Gates, and Three Halves — reduce the communication and computation overhead to practical levels. Garbled circuits are foundational to general-purpose [[Multi-Party Computation]] and form the basis of many practical secure function evaluation protocols.
