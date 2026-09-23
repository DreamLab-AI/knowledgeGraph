---
okf_version: "0.2"
type: Class
title: Finite Field
resource: urn:ngm:class:finite-field
domain: security
description: A finite field, also called a Galois field, is an algebraic structure containing a finite number of elements on which addition, subtraction, multiplication, and division (excluding by zero) are defined and obey the field axioms. Every finite field has a number of elements equal to a prime power, and fields of a given size are unique up to isomorphism. Finite fields are central to cryptography, err
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:modular-arithmetic
requires:
  - urn:ngm:class:modular-arithmetic
enables:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:zero-knowledge-proof
dependsOn:
  - urn:ngm:class:number-theory
implements:
  - urn:ngm:class:modular-arithmetic
bridgesTo:
  - urn:ngm:class:cryptography
uses:
  - urn:ngm:class:number-theory
supports:
  - urn:ngm:class:cryptography
partOf:
  - urn:ngm:class:number-theory
relatedTo:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptography
---

# Finite Field

A finite field, also called a Galois field, is an algebraic structure containing a finite number of elements on which addition, subtraction, multiplication, and division (excluding by zero) are defined and obey the field axioms. Every finite field has a number of elements equal to a prime power, and fields of a given size are unique up to isomorphism. Finite fields are central to cryptography, error-correcting codes, and many computational algorithms because they support exact arithmetic over bounded sets.
