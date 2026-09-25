Finite Field Arithmetic is the set of operations - addition, subtraction, multiplication and inversion - defined over a finite field (Galois field), a mathematical structure with a finite number of elements in which every non-zero element has a multiplicative inverse. Computations stay closed within the field and behave consistently under modular reduction by a prime or irreducible polynomial. It is foundational to error-correcting codes, cryptography and many digital signal-processing algorithms.

### Overview

- Finite field arithmetic operates on a fixed, finite set of elements where the four arithmetic operations remain closed.
- Prime fields GF(p) use integers modulo a prime; extension fields GF(p^n) use polynomials modulo an irreducible polynomial.
- Every non-zero element has a unique multiplicative inverse, enabling division within the field.
- Efficient implementations exploit lookup tables, fast multiplication and reduction to meet performance needs.

### Mechanisms

- Modular reduction by a prime modulus or irreducible polynomial keeps results within the field.
- Multiplicative inversion via the extended Euclidean algorithm or Fermat's little theorem.
- Polynomial basis and normal basis representations for extension fields such as GF(2^m).
- Bit-level operations that make binary fields efficient on digital hardware.
- Generator elements that produce the cyclic multiplicative group of the field.

### Applications

- Reed-Solomon and BCH error-correcting codes used in storage and transmission.
- Elliptic-curve and RSA-adjacent cryptographic operations.
- Advanced Encryption Standard byte substitution and mix-columns steps.
- Hashing, secret sharing and coding-theory constructions.

### Provenance

