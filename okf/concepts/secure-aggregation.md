---
okf_version: "0.2"
type: Class
title: Secure Aggregation
resource: urn:ngm:class:secure-aggregation
domain: security
description: Secure aggregation is a cryptographic protocol that computes the sum of inputs held by many parties without revealing any individual input to the aggregator or other participants. It is most prominent in federated learning, where a server combines model updates from clients while learning only the aggregate. Typical constructions use pairwise masking, secret sharing, or additively homomorphic encr
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:secure-multi-party-computation
requires:
  - urn:ngm:class:key-exchange
  - urn:ngm:class:public-key-cryptography
enables:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
contrastsWith:
  - urn:ngm:class:differential-privacy
bridgesTo:
  - urn:ngm:class:security
uses:
  - urn:ngm:class:oblivious-transfer
  - urn:ngm:class:homomorphic-encryption
  - urn:ngm:class:cryptographic-hash-function
supports:
  - urn:ngm:class:federated-learning
partOf:
  - urn:ngm:class:secure-multi-party-computation
relatedTo:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:secure-multi-party-computation
---

# Secure Aggregation

Secure aggregation is a cryptographic protocol that computes the sum of inputs held by many parties without revealing any individual input to the aggregator or other participants. It is most prominent in federated learning, where a server combines model updates from clients while learning only the aggregate. Typical constructions use pairwise masking, secret sharing, or additively homomorphic encryption, with dropout-resilient designs so the protocol completes even when some clients disconnect.
