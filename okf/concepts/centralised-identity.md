---
okf_version: "0.2"
type: Class
title: Centralised Identity
resource: urn:ngm:class:centralised-identity
domain: blockchain
description: Centralised identity is a digital identity model in which a single authority — such as a government, enterprise, or platform identity provider — issues, stores, and controls users' identity credentials and authenticates them on behalf of relying parties. Users authenticate against the central provider, which holds the authoritative record of their attributes and mediates access to connected servic
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:identity-provider
enables:
  - urn:ngm:class:federated-identity
dependsOn:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:self-sovereign-identity
bridgesTo:
  - urn:ngm:class:verifiable-credentials
uses:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:oauth
  - urn:ngm:class:access-control
supports:
  - urn:ngm:class:access-control
relatedTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:identity-management
---

# Centralised Identity

Centralised identity is a digital identity model in which a single authority — such as a government, enterprise, or platform identity provider — issues, stores, and controls users' identity credentials and authenticates them on behalf of relying parties. Users authenticate against the central provider, which holds the authoritative record of their attributes and mediates access to connected services. The model is operationally simple and widely deployed, but concentrates control, data, and risk in one party, creating single points of failure, surveillance potential, and vendor lock-in that decentralised and self-sovereign identity approaches are designed to counter.
