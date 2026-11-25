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
  - urn:ngm:class:public-key-infrastructure
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Kerberos

Kerberos is a network authentication protocol that uses tickets and symmetric key cryptography to allow nodes to prove their identity over an untrusted network, relying on a trusted Key Distribution Centre to issue time-limited session tickets without transmitting long-term credentials.
