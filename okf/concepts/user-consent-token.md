---
okf_version: "0.2"
type: Class
title: User Consent Token
resource: urn:ngm:class:user-consent-token
domain: spatial-computing
description: A cryptographically verifiable digital token that represents and enforces user consent for data processing, collection, sharing, or participation in virtual environments with granular permission controls and revocation mechanisms.
maturity: draft
quality: 0.35
is-a:
  - urn:ngm:class:sc-governance-and-safety
hasPart:
  - urn:ngm:class:consent-payload
  - urn:ngm:class:cryptographic-signature
  - urn:ngm:class:revocation-mechanism
  - urn:ngm:class:scope-definition
  - urn:ngm:class:timestamp
requires:
  - urn:ngm:class:consent-registry
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:data-schema
  - urn:ngm:class:privacy-policy
  - urn:ngm:class:digital-identity
  - urn:ngm:class:cryptographic-key
enables:
  - urn:ngm:class:automated-privacy-compliance
  - urn:ngm:class:consent-audit-trail
  - urn:ngm:class:consent-revocation
  - urn:ngm:class:user-data-sovereignty
  - urn:ngm:class:granular-consent-control
dependsOn:
  - urn:ngm:class:decentralized-identifier-did
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:blockchain-ledger
  - urn:ngm:class:time-oracle
partOf:
  - urn:ngm:class:consent-management
  - urn:ngm:class:consent-management
---

# User Consent Token

A cryptographically verifiable digital token that represents and enforces user consent for data processing, collection, sharing, or participation in virtual environments with granular permission controls and revocation mechanisms.
