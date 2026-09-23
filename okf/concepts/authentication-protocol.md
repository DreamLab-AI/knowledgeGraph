---
okf_version: "0.2"
type: Class
title: Authentication Protocol
resource: urn:ngm:class:authentication-protocol
domain: security
description: A defined sequence of exchanges through which one party proves its identity to another over a communication channel.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:cryptographic-protocol
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:multi-factor-authentication
bridgesTo:
  - urn:ngm:class:oauth
---

# Authentication Protocol

A defined sequence of exchanges through which one party proves its identity to another over a communication channel.
