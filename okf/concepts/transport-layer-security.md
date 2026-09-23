---
okf_version: "0.2"
type: Class
title: Transport Layer Security
resource: urn:ngm:class:transport-layer-security
domain: security
description: A cryptographic protocol standardised by the IETF that provides mutual authentication, confidentiality and data integrity for communications over a computer network, succeeding the deprecated Secure Sockets Layer and currently at version 1.3 (RFC 8446).
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-protocol
hasPart:
  - urn:ngm:class:tls-handshake
  - urn:ngm:class:session-key
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:asymmetric-cryptography
enables:
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
  - urn:ngm:class:secure-communication
  - urn:ngm:class:data-integrity
  - urn:ngm:class:mutual-authentication
bridgesTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:tls
uses:
  - urn:ngm:class:diffie-hellman-key-exchange
  - urn:ngm:class:digital-signature
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:message-authentication-code
supports:
  - urn:ngm:class:http
  - urn:ngm:class:secure-email
  - urn:ngm:class:api-security
standardizedBy:
  - urn:ngm:class:internet-engineering-task-force
  - urn:ngm:class:rfc-8446
relatedTo:
  - urn:ngm:class:certificate-revocation
  - urn:ngm:class:forward-secrecy
---

# Transport Layer Security

A cryptographic protocol standardised by the IETF that provides mutual authentication, confidentiality and data integrity for communications over a computer network, succeeding the deprecated Secure Sockets Layer and currently at version 1.3 (RFC 8446).
