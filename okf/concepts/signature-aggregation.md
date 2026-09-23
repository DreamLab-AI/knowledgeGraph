---
okf_version: "0.2"
type: Class
title: Signature Aggregation
resource: urn:ngm:class:signature-aggregation
domain: blockchain
description: Signature Aggregation is a cryptographic technique that combines multiple digital signatures over distinct or identical messages into a single compact signature that can be verified with one operation. It reduces on-chain storage and verification cost in blockchain systems where many parties sign, such as validator committees. Schemes such as BLS and Schnorr support aggregation, improving scalabil
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:multisignature
implements:
  - urn:ngm:class:bls-signature
  - urn:ngm:class:schnorr-signature
uses:
  - urn:ngm:class:cryptography
  - urn:ngm:class:verification
supports:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:validator
  - urn:ngm:class:rollup
partOf:
  - urn:ngm:class:digital-signature
relatedTo:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:ethereum
---

# Signature Aggregation

Signature Aggregation is a cryptographic technique that combines multiple digital signatures over distinct or identical messages into a single compact signature that can be verified with one operation. It reduces on-chain storage and verification cost in blockchain systems where many parties sign, such as validator committees. Schemes such as BLS and Schnorr support aggregation, improving scalability and bandwidth efficiency for distributed consensus.
