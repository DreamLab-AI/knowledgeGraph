---
okf_version: "0.2"
type: Class
title: KYC
resource: urn:ngm:class:kyc
domain: finance
description: Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship, forming a cornerstone of anti-money laundering and counter-terrorist financing compliance frameworks.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:identity-verification
hasPart:
  - urn:ngm:class:enhanced-due-diligence
  - urn:ngm:class:sanctions-screening
  - urn:ngm:class:transaction-monitoring
requires:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:aml
  - urn:ngm:class:customer-due-diligence
  - urn:ngm:class:document-verification
  - urn:ngm:class:sanctions-screening
enables:
  - urn:ngm:class:compliance
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:risk-management
  - urn:ngm:class:counter-terrorist-financing
contrastsWith:
  - urn:ngm:class:pseudonymity
  - urn:ngm:class:privacy-preserving-protocol
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:kyc
  - urn:ngm:class:financial-regulation
uses:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:optical-character-recognition
  - urn:ngm:class:risk-scoring
standardizedBy:
  - urn:ngm:class:financial-action-task-force
  - urn:ngm:class:bank-secrecy-act
  - urn:ngm:class:aml
relatedTo:
  - urn:ngm:class:kyc
  - urn:ngm:class:aml
---

# KYC

Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship, forming a cornerstone of anti-money laundering and counter-terrorist financing compliance frameworks.
