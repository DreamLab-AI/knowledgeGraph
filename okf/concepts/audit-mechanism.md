---
okf_version: "0.2"
type: Class
title: Audit Mechanism
resource: urn:ngm:class:audit-mechanism
domain: security
description: The specific technical or procedural instrument used to capture, preserve, and retrieve evidence of system events, user actions, or organisational activities for auditing purposes. Audit mechanisms range from low-level kernel event hooks and cryptographic tamper-evident logs to high-level workflow checkpoints and policy-enforcement records.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:audit
hasPart:
  - urn:ngm:class:event-log
requires:
  - urn:ngm:class:retention-policy
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:non-repudiation
enables:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:audit-logging
  - urn:ngm:class:compliance-audit-trail
  - urn:ngm:class:incident-response
dependsOn:
  - urn:ngm:class:secure-storage
contrastsWith:
  - urn:ngm:class:monitoring
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:cryptography
  - urn:ngm:class:hash-function
  - urn:ngm:class:immutability
  - urn:ngm:class:digital-signature
supports:
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:iso-27001
  - urn:ngm:class:nist-cybersecurity-framework
partOf:
  - urn:ngm:class:security-information-and-event-management
relatedTo:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:forensic-investigation
---

# Audit Mechanism

The specific technical or procedural instrument used to capture, preserve, and retrieve evidence of system events, user actions, or organisational activities for auditing purposes. Audit mechanisms range from low-level kernel event hooks and cryptographic tamper-evident logs to high-level workflow checkpoints and policy-enforcement records.
