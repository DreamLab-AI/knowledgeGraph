---
okf_version: "0.2"
type: Class
title: Kerberos
resource: urn:ngm:class:kerberos
domain: security
description: Kerberos is a network authentication protocol that uses tickets and symmetric key cryptography to allow nodes to prove their identity over an untrusted network, relying on a trusted Key Distribution Centre to issue time-limited session tickets without transmitting long-term credentials.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:encryption
  - urn:ngm:class:symmetric-encryption
  - urn:ngm:class:trusted-third-party
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:mutual-authentication
  - urn:ngm:class:access-control
implements:
  - urn:ngm:class:cryptographic-protocols
contrastsWith:
  - urn:ngm:class:oauth
  - urn:ngm:class:saml
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:cryptographic-protocols
uses:
  - urn:ngm:class:aes-encryption
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:active-directory
  - urn:ngm:class:ldap
  - urn:ngm:class:network-security
standardizedBy:
  - urn:ngm:class:ietf
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:directory-service
---

# Kerberos

Kerberos is a network authentication protocol that uses tickets and symmetric key cryptography to allow nodes to prove their identity over an untrusted network, relying on a trusted Key Distribution Centre to issue time-limited session tickets without transmitting long-term credentials.
