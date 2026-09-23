---
okf_version: "0.2"
type: Class
title: Federated Credential Exchange
resource: urn:ngm:class:federated-credential-exchange
domain: infrastructure
description: A cross-platform workflow process that enables secure sharing and translation of identity credentials between different identity providers using standardized protocols, attribute mapping, and user consent mechanisms.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:attribute-translation
  - urn:ngm:class:consent-verification
  - urn:ngm:class:credential-request
  - urn:ngm:class:secure-exchange-protocol
requires:
  - urn:ngm:class:attribute-schema
  - urn:ngm:class:federation-protocol
  - urn:ngm:class:consent-management
  - urn:ngm:class:cryptographic-keys
enables:
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:attribute-sharing
  - urn:ngm:class:cross-platform-identity
dependsOn:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:trust-registry
  - urn:ngm:class:credential-format-standard
bridgesTo:
  - urn:ngm:class:attribute-sharing
partOf:
  - urn:ngm:class:federated-identity-system
  - urn:ngm:class:trust-framework
---

# Federated Credential Exchange

A cross-platform workflow process that enables secure sharing and translation of identity credentials between different identity providers using standardized protocols, attribute mapping, and user consent mechanisms.
