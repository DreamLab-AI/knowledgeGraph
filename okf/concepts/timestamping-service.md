---
okf_version: "0.2"
type: Class
title: Timestamping Service
resource: urn:ngm:class:timestamping-service
domain: security
description: A timestamping service is a system that issues verifiable proof that a piece of data existed at or before a particular time, often using cryptographic methods.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:trusted-timestamping
requires:
  - urn:ngm:class:hash-function
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:content-provenance
bridgesTo:
  - urn:ngm:class:timestamp
---

# Timestamping Service

A timestamping service is a system that issues verifiable proof that a piece of data existed at or before a particular time, often using cryptographic methods.
