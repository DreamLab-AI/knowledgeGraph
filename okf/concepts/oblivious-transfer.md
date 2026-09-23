---
okf_version: "0.2"
type: Class
title: Oblivious Transfer
resource: urn:ngm:class:oblivious-transfer
domain: security
description: Oblivious transfer is a foundational cryptographic protocol in which a sender transmits one of several pieces of information to a receiver, but remains oblivious to which piece was received, while the receiver learns nothing about the other pieces. The canonical 1-out-of-2 variant lets a receiver choose one of two sender messages without revealing the choice and without learning the unchosen messa
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:secure-multi-party-computation
hasPart:
  - urn:ngm:class:public-key-cryptography
requires:
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:key-exchange
enables:
  - urn:ngm:class:secure-multi-party-computation
  - urn:ngm:class:secure-aggregation
contrastsWith:
  - urn:ngm:class:homomorphic-encryption
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:cryptographic-hash-function
supports:
  - urn:ngm:class:differential-privacy
partOf:
  - urn:ngm:class:secure-multi-party-computation
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:federated-learning
---

# Oblivious Transfer

Oblivious transfer is a foundational cryptographic protocol in which a sender transmits one of several pieces of information to a receiver, but remains oblivious to which piece was received, while the receiver learns nothing about the other pieces. The canonical 1-out-of-2 variant lets a receiver choose one of two sender messages without revealing the choice and without learning the unchosen message. Oblivious transfer is complete for secure two-party computation and underpins protocols such as garbled circuits and private set intersection.
