---
okf_version: "0.2"
type: Class
title: Security Protocol
resource: urn:ngm:class:security-protocol
domain: standards
description: A security protocol is a defined sequence of message exchanges and cryptographic operations that lets parties achieve security goals such as confidentiality, integrity, authentication or key establishment over an untrusted channel. Protocols specify message formats, ordering, cryptographic primitives and state transitions, and are designed to resist defined adversaries. Examples include TLS for tr
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:standards
enables:
  - urn:ngm:class:single-sign-on
implements:
  - urn:ngm:class:authentication
bridgesTo:
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:authentication
uses:
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-federation
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:network-security
relatedTo:
  - urn:ngm:class:tls
  - urn:ngm:class:network-security
  - urn:ngm:class:digital-signature
---

# Security Protocol

A security protocol is a defined sequence of message exchanges and cryptographic operations that lets parties achieve security goals such as confidentiality, integrity, authentication or key establishment over an untrusted channel. Protocols specify message formats, ordering, cryptographic primitives and state transitions, and are designed to resist defined adversaries. Examples include TLS for transport security and authentication protocols for identity verification.
