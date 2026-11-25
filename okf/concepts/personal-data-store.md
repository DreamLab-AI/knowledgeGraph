---
okf_version: "0.2"
type: Class
title: Personal Data Store
resource: urn:ngm:class:personal-data-store
domain: data
description: A Personal Data Store (PDS) is a user-controlled software system or vault that aggregates, stores, and selectively discloses an individual's personal data — including identity attributes, health records, behavioural logs, and transaction histories — under the direct control of the data subject. It enforces consent-based access through verifiable credentials and cryptographic authorisation mechanis
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
  - urn:ngm:class:data-portability
enables:
  - urn:ngm:class:federated-identity
  - urn:ngm:class:data-marketplace
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:personal-ai-assistant
contrastsWith:
  - urn:ngm:class:centralised-database
  - urn:ngm:class:data-brokers
  - urn:ngm:class:centralised-database
  - urn:ngm:class:data-brokers
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:access-control
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:linked-data
supports:
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:consent-management
standardizedBy:
  - urn:ngm:class:solid
  - urn:ngm:class:gdpr
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:solid
relatedTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:data-governance
  - urn:ngm:class:personal-data
  - urn:ngm:class:zero-knowledge-proof
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Personal Data Store

A Personal Data Store (PDS) is a user-controlled software system or vault that aggregates, stores, and selectively discloses an individual's personal data — including identity attributes, health records, behavioural logs, and transaction histories — under the direct control of the data subject. It enforces consent-based access through verifiable credentials and cryptographic authorisation mechanisms, enabling fine-grained, revocable sharing with third-party services. PDSs embody the principles of data sovereignty and privacy-by-design, decoupling data custody from service providers and restoring ownership to individuals. They serve as a foundational layer for interoperable digital identity ecosystems, federated personal AI assistants, and regulatory compliance with frameworks such as GDPR and CCPA.
