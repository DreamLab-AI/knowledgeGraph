---
okf_version: "0.2"
type: Class
title: Cryptographic Accumulator
resource: urn:ngm:class:cryptographic-accumulator
domain: security
description: A cryptographic accumulator is a primitive that compresses a large set of elements into a single short value while still permitting compact proofs that a given element is (or is not) a member of the set. Constructions based on RSA groups, bilinear pairings, or Merkle trees allow membership witnesses whose size is independent of the set's cardinality, and dynamic accumulators support efficient addi
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:hash-function
relatedTo:
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
---

# Cryptographic Accumulator

A cryptographic accumulator is a primitive that compresses a large set of elements into a single short value while still permitting compact proofs that a given element is (or is not) a member of the set. Constructions based on RSA groups, bilinear pairings, or Merkle trees allow membership witnesses whose size is independent of the set's cardinality, and dynamic accumulators support efficient addition and removal of elements. Accumulators underpin scalable membership proofs in anonymous credentials, certificate revocation, and stateless blockchain clients.
