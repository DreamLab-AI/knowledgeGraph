---
okf_version: "0.2"
type: Class
title: Mutual Authentication
resource: urn:ngm:class:mutual-authentication
domain: security
description: "Mutual authentication is a security process in which both parties to a communication verify each other's identity before exchanging data, rather than only one party authenticating to the other. Each participant presents and validates credentials, such as digital certificates or shared secrets, establishing bidirectional trust. This prevents impersonation in both directions and is a cornerstone of "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:cryptographic-protocol
enables:
  - urn:ngm:class:trust-establishment
  - urn:ngm:class:secure-communication
dependsOn:
  - urn:ngm:class:authorization
  - urn:ngm:class:identity-and-access-management
implements:
  - urn:ngm:class:access-control
contrastsWith:
  - urn:ngm:class:single-sign-on
uses:
  - urn:ngm:class:asymmetric-cryptography
  - urn:ngm:class:kerberos
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:multi-factor-authentication
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:cybersecurity
---

# Mutual Authentication

Mutual authentication is a security process in which both parties to a communication verify each other's identity before exchanging data, rather than only one party authenticating to the other. Each participant presents and validates credentials, such as digital certificates or shared secrets, establishing bidirectional trust. This prevents impersonation in both directions and is a cornerstone of secure machine-to-machine and zero-trust communication.
