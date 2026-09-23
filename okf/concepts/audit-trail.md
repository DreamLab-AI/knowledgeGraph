---
okf_version: "0.2"
type: Class
title: Audit Trail
resource: urn:ngm:class:audit-trail
domain: artificial-intelligence
description: A chronological, tamper-evident record of system activities, transactions, and events that enables reconstruction and verification of sequences of operations for compliance, security, and forensic analysis.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:governance-artifact
  - urn:ngm:class:security-record
  - urn:ngm:class:compliance-mechanism
hasPart:
  - urn:ngm:class:access-logs
  - urn:ngm:class:event-log
  - urn:ngm:class:system-state-snapshots
  - urn:ngm:class:timestamp-records
  - urn:ngm:class:transaction-records
  - urn:ngm:class:user-activity-logs
  - urn:ngm:class:event-log
  - urn:ngm:class:cryptographic-hash-chain
  - urn:ngm:class:digital-signature-record
requires:
  - urn:ngm:class:clock-synchronization
  - urn:ngm:class:cryptographic-integrity-protection
  - urn:ngm:class:logging-infrastructure
  - urn:ngm:class:secure-storage
  - urn:ngm:class:time-synchronization-service
  - urn:ngm:class:logging-protocol
  - urn:ngm:class:event-schema
enables:
  - urn:ngm:class:forensic-analysis
  - urn:ngm:class:incident-investigation
  - urn:ngm:class:accountability
  - urn:ngm:class:compliance-verification
  - urn:ngm:class:non-repudiation
  - urn:ngm:class:data-provenance
  - urn:ngm:class:regulatory-audit
  - urn:ngm:class:breach-detection
dependsOn:
  - urn:ngm:class:provenance-standard
  - urn:ngm:class:logging-protocol
  - urn:ngm:class:event-schema
  - urn:ngm:class:time-synchronization-service
  - urn:ngm:class:siem
  - urn:ngm:class:identity-and-access-management
contrastsWith:
  - urn:ngm:class:mutable-log
  - urn:ngm:class:application-debug-log
  - urn:ngm:class:volatile-telemetry
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:hash-function
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:worm-storage
  - urn:ngm:class:append-only-database
supports:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:gdpr-compliance
  - urn:ngm:class:soc-2-certification
  - urn:ngm:class:iso-27001
  - urn:ngm:class:pci-dss
  - urn:ngm:class:nis2-directive
  - urn:ngm:class:dora-compliance
  - urn:ngm:class:ai-governance
standardizedBy:
  - urn:ngm:class:etsi-gr-arf-010
  - urn:ngm:class:iso-iec-27001
  - urn:ngm:class:nist-csf-2-0
  - urn:ngm:class:pci-dss-v4-0
  - urn:ngm:class:eu-ai-act-article-12
partOf:
  - urn:ngm:class:governance-system
  - urn:ngm:class:security-infrastructure
  - urn:ngm:class:algorithmic-transparency-index
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:data-provenance
  - urn:ngm:class:risk-management
  - urn:ngm:class:ai-governance-framework
relatedTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:privacy-enhancing-technologies
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:chain-of-custody
  - urn:ngm:class:evidence-management
---

# Audit Trail

A chronological, tamper-evident record of system activities, transactions, and events that enables reconstruction and verification of sequences of operations for compliance, security, and forensic analysis.
