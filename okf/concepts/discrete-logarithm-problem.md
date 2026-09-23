---
okf_version: "0.2"
type: Class
title: Discrete Logarithm Problem
resource: urn:ngm:class:discrete-logarithm-problem
domain: security
description: The discrete logarithm problem (DLP) is the computational task of finding the integer exponent x given a generator g and the value g^x within a finite cyclic group such as a multiplicative group modulo a prime or the point group of an elliptic curve. It is widely believed to be intractable for classical computers when the group is suitably large, and this presumed hardness underpins much of public
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:digital-signature
dependsOn:
  - urn:ngm:class:cryptography
implements:
  - urn:ngm:class:cryptographic-primitive
contrastsWith:
  - urn:ngm:class:rsa
bridgesTo:
  - urn:ngm:class:quantum-computation-paradigm
uses:
  - urn:ngm:class:elliptic-curve-cryptography
supports:
  - urn:ngm:class:schnorr-signature
relatedTo:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:digital-signature
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:cryptographic-primitive
---

# Discrete Logarithm Problem

The discrete logarithm problem (DLP) is the computational task of finding the integer exponent x given a generator g and the value g^x within a finite cyclic group such as a multiplicative group modulo a prime or the point group of an elliptic curve. It is widely believed to be intractable for classical computers when the group is suitably large, and this presumed hardness underpins much of public-key cryptography. The elliptic-curve variant (ECDLP) offers equivalent security with smaller keys than the finite-field variant.
