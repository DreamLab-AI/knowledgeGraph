---
okf_version: "0.2"
type: Class
title: Key Exchange
resource: urn:ngm:class:key-exchange
domain: security
description: Key exchange is a cryptographic procedure by which two parties establish a shared secret over an insecure channel for use in subsequent encrypted communication.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:cryptography
requires:
  - urn:ngm:class:cryptography
enables:
  - urn:ngm:class:symmetric-encryption
bridgesTo:
  - urn:ngm:class:cryptographic-protocol
---

# Key Exchange

Key exchange is a cryptographic procedure by which two parties establish a shared secret over an insecure channel for use in subsequent encrypted communication.
