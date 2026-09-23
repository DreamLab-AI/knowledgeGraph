---
okf_version: "0.2"
type: Class
title: Audit Log
resource: urn:ngm:class:audit-log
domain: security
description: An audit log is an immutable, chronologically ordered record of discrete system events that captures who performed an action, what action was performed, on which resource, at what time, and from what source context, providing an authoritative evidence trail for security investigation, regulatory compliance, and forensic analysis. Each entry is structured with a timestamp, actor identity, event typ
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:audit-trail
requires:
  - urn:ngm:class:identity-management
  - urn:ngm:class:time-synchronisation
  - urn:ngm:class:tamper-evident-storage
enables:
  - urn:ngm:class:security-audit
  - urn:ngm:class:regulatory-reporting
  - urn:ngm:class:anomaly-detection
contrastsWith:
  - urn:ngm:class:operational-log
  - urn:ngm:class:debug-log
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:certificate-transparency
uses:
  - urn:ngm:class:event-sourcing
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:merkle-tree
  - urn:ngm:class:digital-signature
  - urn:ngm:class:append-only-data-structure
supports:
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:information-security
  - urn:ngm:class:access-control
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-detection
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:iso-27001
  - urn:ngm:class:nist
  - urn:ngm:class:common-event-format
partOf:
  - urn:ngm:class:audit-trail
relatedTo:
  - urn:ngm:class:audit-logging
  - urn:ngm:class:compliance-audit-trail
  - urn:ngm:class:data-integrity
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:forensic-analysis
  - urn:ngm:class:siem
---

# Audit Log

An audit log is an immutable, chronologically ordered record of discrete system events that captures who performed an action, what action was performed, on which resource, at what time, and from what source context, providing an authoritative evidence trail for security investigation, regulatory compliance, and forensic analysis. Each entry is structured with a timestamp, actor identity, event type, affected object identifier, outcome status, and contextual metadata. Audit logs are foundational to accountability in information systems, distinguished from operational logs by their emphasis on human-actionable accountability and legal evidentiary weight rather than system diagnostics. In high-assurance environments, entries are cryptographically chained so that deletion or modification of any record invalidates all subsequent hashes, making tampering detectable.
