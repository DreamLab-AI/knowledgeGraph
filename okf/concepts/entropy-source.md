---
okf_version: "0.2"
type: Class
title: Entropy Source
resource: urn:ngm:class:entropy-source
domain: security
description: An entropy source is a physical or computational process that produces unpredictable raw data used to seed cryptographic random number generation. Good entropy sources draw on inherently uncertain phenomena, such as electronic noise, timing jitter or radioactive decay, so that their output cannot be predicted or reproduced by an adversary. The quality of an entropy source directly determines the s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:random-number-generation
hasPart:
  - urn:ngm:class:randomness
requires:
  - urn:ngm:class:entropy
enables:
  - urn:ngm:class:key-generation
  - urn:ngm:class:cryptographic-key
dependsOn:
  - urn:ngm:class:hardware-security-module
uses:
  - urn:ngm:class:random-bit-generation
supports:
  - urn:ngm:class:nonce
  - urn:ngm:class:initialization-vector
partOf:
  - urn:ngm:class:random-number-generation
relatedTo:
  - urn:ngm:class:cryptography
  - urn:ngm:class:key-management
---

# Entropy Source

An entropy source is a physical or computational process that produces unpredictable raw data used to seed cryptographic random number generation. Good entropy sources draw on inherently uncertain phenomena, such as electronic noise, timing jitter or radioactive decay, so that their output cannot be predicted or reproduced by an adversary. The quality of an entropy source directly determines the strength of keys, nonces and other security-critical random values derived from it.
