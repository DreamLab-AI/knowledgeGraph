---
okf_version: "0.2"
type: Class
title: Healthcare Records
resource: urn:ngm:class:healthcare-records
domain: blockchain
description: Blockchain-based electronic health record systems that employ immutable distributed ledgers, smart contracts for consent management, and cryptographic security to enable secure patient data sharing across healthcare providers. These systems give patients controlled access to their own records whilst maintaining HIPAA and GDPR compliance through hybrid on-chain/off-chain architectures integrating H
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:network-component
hasPart:
  - urn:ngm:class:consent-management
  - urn:ngm:class:audit-trail
  - urn:ngm:class:access-control-policy
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ledger
  - urn:ngm:class:access-control
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:cryptographic-infrastructure
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:data-portability
  - urn:ngm:class:regulatory-compliance
dependsOn:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:permissioned-blockchain
contrastsWith:
  - urn:ngm:class:centralised-database
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:clinical-trials
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:encryption
  - urn:ngm:class:privacy-by-design
  - urn:ngm:class:decentralized-identifiers
standardizedBy:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:hipaa
  - urn:ngm:class:gdpr
relatedTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:digital-identity-wallet
  - urn:ngm:class:data-sovereignty
---

# Healthcare Records

Blockchain-based electronic health record systems that employ immutable distributed ledgers, smart contracts for consent management, and cryptographic security to enable secure patient data sharing across healthcare providers. These systems give patients controlled access to their own records whilst maintaining HIPAA and GDPR compliance through hybrid on-chain/off-chain architectures integrating HL7 FHIR standards.
