---
okf_version: "0.2"
type: Class
title: Audit Logging
resource: urn:ngm:class:audit-logging
domain: security
description: Audit logging is the systematic, tamper-evident recording of security-relevant events, user actions, and system operations to an immutable or append-only store, enabling retrospective forensic analysis, regulatory compliance, and incident response. Each log entry captures who performed an action, what was performed, when, from where, and the outcome, providing an authoritative chain of evidence. A
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:audit-log
requires:
  - urn:ngm:class:access-control
  - urn:ngm:class:trusted-timestamping
enables:
  - urn:ngm:class:algorithmic-auditing
  - urn:ngm:class:compliance-verification
  - urn:ngm:class:incident-response
  - urn:ngm:class:forensic-analysis
  - urn:ngm:class:non-repudiation
dependsOn:
  - urn:ngm:class:cryptographic-hash-function
bridgesTo:
  - urn:ngm:class:data-provenance
  - urn:ngm:class:blockchain-immutability
supports:
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:audit-trail
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:regulatory-reporting
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:iso-iec-27001
partOf:
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:identity-and-access-management
relatedTo:
  - urn:ngm:class:information-security
  - urn:ngm:class:cybersecurity
---

# Audit Logging

Audit logging is the systematic, tamper-evident recording of security-relevant events, user actions, and system operations to an immutable or append-only store, enabling retrospective forensic analysis, regulatory compliance, and incident response. Each log entry captures who performed an action, what was performed, when, from where, and the outcome, providing an authoritative chain of evidence. Audit logs are distinct from general application logs by their integrity guarantees and structured, queryable format.
