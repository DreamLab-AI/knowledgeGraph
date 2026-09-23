---
okf_version: "0.2"
type: Class
title: Schnorr Signatures
resource: urn:ngm:class:schnorr-signatures
domain: security
description: A digital signature scheme based on the discrete logarithm problem over elliptic curve groups, producing compact fixed-size signatures with linear aggregation properties that enable efficient multi-signature and threshold constructions.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-signature
requires:
  - urn:ngm:class:elliptic-curve-cryptography
  - urn:ngm:class:discrete-logarithm-problem
  - urn:ngm:class:hash-function
  - urn:ngm:class:random-oracle-model
enables:
  - urn:ngm:class:mu-sig-2
  - urn:ngm:class:taproot
  - urn:ngm:class:key-aggregation
  - urn:ngm:class:threshold-signature-scheme
  - urn:ngm:class:batch-verification
implements:
  - urn:ngm:class:bip-340
contrastsWith:
  - urn:ngm:class:ecdsa
  - urn:ngm:class:rsa-signature
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:schnorr-signature
uses:
  - urn:ngm:class:secp256k1
  - urn:ngm:class:commitment-scheme
supports:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:privacy-preserving-protocol
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:public-key-cryptography
---

# Schnorr Signatures

A digital signature scheme based on the discrete logarithm problem over elliptic curve groups, producing compact fixed-size signatures with linear aggregation properties that enable efficient multi-signature and threshold constructions.
