---
okf_version: "0.2"
type: Class
title: Avalanche Effect
resource: urn:ngm:class:avalanche-effect
domain: security
description: The avalanche effect is a desirable property of cryptographic primitives whereby a tiny change in the input, such as flipping a single bit, produces an extensive, unpredictable change in the output, ideally altering about half of the output bits. In hash functions and ciphers it is the practical expression of diffusion, ensuring that outputs reveal no exploitable correlation with their inputs. A s
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cryptography
hasPart:
  - urn:ngm:class:cryptographic-hash
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptographic-hash-function
enables:
  - urn:ngm:class:collision-resistance
  - urn:ngm:class:preimage-resistance
implements:
  - urn:ngm:class:cryptographic-hash-function
uses:
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:encryption
  - urn:ngm:class:digital-signature
  - urn:ngm:class:blockchain-security
partOf:
  - urn:ngm:class:cryptography
relatedTo:
  - urn:ngm:class:information-security
  - urn:ngm:class:merkle-tree
---

# Avalanche Effect

The avalanche effect is a desirable property of cryptographic primitives whereby a tiny change in the input, such as flipping a single bit, produces an extensive, unpredictable change in the output, ideally altering about half of the output bits. In hash functions and ciphers it is the practical expression of diffusion, ensuring that outputs reveal no exploitable correlation with their inputs. A strong avalanche effect is essential for collision and preimage resistance and for resisting differential cryptanalysis.
