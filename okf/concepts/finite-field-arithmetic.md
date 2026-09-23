---
okf_version: "0.2"
type: Class
title: Finite Field Arithmetic
resource: urn:ngm:class:finite-field-arithmetic
domain: infrastructure
description: "Finite Field Arithmetic is the set of operations - addition, subtraction, multiplication and inversion - defined over a finite field (Galois field), a mathematical structure with a finite number of elements in which every non-zero element has a multiplicative inverse. Computations stay closed within the field and behave consistently under modular reduction by a prime or irreducible polynomial. It "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:modular-arithmetic
requires:
  - urn:ngm:class:number-theory
enables:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:error-correction
  - urn:ngm:class:reed-solomon-codes
dependsOn:
  - urn:ngm:class:modular-arithmetic
bridgesTo:
  - urn:ngm:class:elliptic-curve-cryptography
uses:
  - urn:ngm:class:number-theory
  - urn:ngm:class:modular-arithmetic
supports:
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-primitive
partOf:
  - urn:ngm:class:modular-arithmetic
relatedTo:
  - urn:ngm:class:hash-function
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:number-theory
---

# Finite Field Arithmetic

Finite Field Arithmetic is the set of operations - addition, subtraction, multiplication and inversion - defined over a finite field (Galois field), a mathematical structure with a finite number of elements in which every non-zero element has a multiplicative inverse. Computations stay closed within the field and behave consistently under modular reduction by a prime or irreducible polynomial. It is foundational to error-correcting codes, cryptography and many digital signal-processing algorithms.
