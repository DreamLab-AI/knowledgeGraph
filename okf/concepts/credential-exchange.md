---
okf_version: "0.2"
type: Class
title: Credential Exchange
resource: urn:ngm:class:credential-exchange
domain: security
description: Credential exchange is the protocol-governed flow by which verifiable credentials are issued to, held by and presented from a digital identity wallet to relying parties. It defines how issuers offer credentials, how holders store and selectively disclose them, and how verifiers request and validate proofs. It is a foundational interaction pattern of decentralised and self-sovereign identity system
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:digital-identity-standards
hasPart:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:presentation-exchange
requires:
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:trust-framework
enables:
  - urn:ngm:class:self-sovereign-identity
dependsOn:
  - urn:ngm:class:decentralised-identifier
implements:
  - urn:ngm:class:verifiable-credentials
contrastsWith:
  - urn:ngm:class:oauth
bridgesTo:
  - urn:ngm:class:zero-knowledge-proof
uses:
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:decentralised-identifier
supports:
  - urn:ngm:class:verifiable-credentials
partOf:
  - urn:ngm:class:digital-identity-standards
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:did-document
  - urn:ngm:class:trust-framework
---

# Credential Exchange

Credential exchange is the protocol-governed flow by which verifiable credentials are issued to, held by and presented from a digital identity wallet to relying parties. It defines how issuers offer credentials, how holders store and selectively disclose them, and how verifiers request and validate proofs. It is a foundational interaction pattern of decentralised and self-sovereign identity systems.
