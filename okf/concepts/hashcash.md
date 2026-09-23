---
okf_version: "0.2"
type: Class
title: Hashcash
resource: urn:ngm:class:hashcash
domain: security
description: "Hashcash is a proof-of-work system invented by Adam Back in 1997 that requires a sender to compute a partial SHA-1 (later SHA-256) hash collision by finding a nonce such that the resulting digest has a specified number of leading zero bits. The asymmetry between expensive computation and cheap verification makes it suitable as an anti-abuse token: the sender bears a measurable cost while the recip"
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:proof-of-work
requires:
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:sha-256
  - urn:ngm:class:nonce
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-mining
  - urn:ngm:class:spam-prevention
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:denial-of-service-protection
implements:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:computational-puzzle
contrastsWith:
  - urn:ngm:class:proof-of-stake
  - urn:ngm:class:captcha
  - urn:ngm:class:proof-of-space
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-consensus
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:preimage-resistance
supports:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:email-security
relatedTo:
  - urn:ngm:class:bitcoin-protocol
  - urn:ngm:class:mining
  - urn:ngm:class:difficulty-adjustment
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:consensus-mechanism
---

# Hashcash

Hashcash is a proof-of-work system invented by Adam Back in 1997 that requires a sender to compute a partial SHA-1 (later SHA-256) hash collision by finding a nonce such that the resulting digest has a specified number of leading zero bits. The asymmetry between expensive computation and cheap verification makes it suitable as an anti-abuse token: the sender bears a measurable cost while the recipient verifies in microseconds. Originally designed to combat email spam and denial-of-service attacks, the mechanism was directly adopted by Bitcoin as the basis of its mining consensus algorithm, making Hashcash one of the foundational primitives of the blockchain era.
