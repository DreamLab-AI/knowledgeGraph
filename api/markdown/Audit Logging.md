public:: true

# Audit Logging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:audit-logging",
  "@type": "Page",
  "vc:slug": "audit-logging",
  "title": "Audit Logging",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audit-logging",
  "@type": "Class",
  "label": "Audit Logging",
  "definition": "Audit logging is the systematic, tamper-evident recording of security-relevant events, user actions, and system operations to an immutable or append-only store, enabling retrospective forensic analysis, regulatory compliance, and incident response. Each log entry captures who performed an action, what was performed, when, from where, and the outcome, providing an authoritative chain of evidence. Audit logs are distinct from general application logs by their integrity guarantees and structured, queryable format.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:audit-log", "label": "Audit Log"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:log-entry", "label": "Log Entry"},
      {"@id": "urn:ngm:class:event-record", "label": "Event Record"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:security-information-and-event-management", "label": "Security Information and Event Management"},
      {"@id": "urn:ngm:class:identity-and-access-management", "label": "Identity and Access Management"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:append-only-storage", "label": "Append-Only Storage"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:trusted-timestamping", "label": "Trusted Timestamping"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:algorithmic-auditing", "label": "Algorithmic Auditing"},
      {"@id": "urn:ngm:class:compliance-verification", "label": "Compliance Verification"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"},
      {"@id": "urn:ngm:class:forensic-analysis", "label": "Forensic Analysis"},
      {"@id": "urn:ngm:class:non-repudiation", "label": "Non-Repudiation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:log-integrity-verification", "label": "Log Integrity Verification"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-sp-800-92", "label": "NIST SP 800-92"},
      {"@id": "urn:ngm:class:iso-iec-27001", "label": "ISO/IEC 27001"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:application-logging", "label": "Application Logging"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:data-provenance", "label": "Data Provenance"},
      {"@id": "urn:ngm:class:blockchain-immutability", "label": "Blockchain Immutability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:security-audit-log", "label": "Security Audit Log"},
    {"@id": "urn:ngm:class:event-logging", "label": "Event Logging"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Audit logging is the practice of recording security-relevant system events into an immutable [[Audit Trail]], providing forensic evidence and supporting [[Compliance Framework]] obligations.

- ### Relationships
  - Audit logging directly produces the [[Audit Trail]] records that regulators and auditors inspect, and its outputs feed [[Compliance Monitoring]] dashboards and [[Algorithmic Auditing]] processes. Integrity guarantees—hash chaining, write-once storage, or cryptographic signatures—are what distinguish audit logs from ordinary application logs in the context of [[Information Security]] and [[Cybersecurity]]. [[Compliance Verification]] workflows consume audit log data to demonstrate adherence to policies and standards.

- ### Content
  - Audit logging has roots in mainframe accounting journals of the 1960s, where batch job resource consumption was recorded for billing and error diagnosis. As multi-user time-sharing systems emerged, the concept expanded to include security events—logins, privilege escalations, and file accesses. The TCSEC (Orange Book) in 1983 formally mandated audit trails for trusted systems at higher assurance levels, establishing the discipline as a security engineering requirement.

  - A well-designed audit logging system captures structured event records containing a timestamp (ideally from a trusted time source), subject identity, resource identifier, action type, and result code. Storage is typically append-only with cryptographic chaining (each record's hash is included in the next) or forwarding to an immutable SIEM platform. Access to audit logs is itself governed and logged to prevent cover-up. Indexing and query interfaces allow security operations teams to reconstruct sequences of events for incident investigation.

  - Audit logging is a cornerstone compliance requirement under regulations such as SOX, PCI-DSS, HIPAA, and the EU AI Act's transparency obligations. In cloud environments, services like AWS CloudTrail, Azure Monitor, and Google Cloud Audit Logs provide managed audit logging at infrastructure scale. Application-level audit logs complement infrastructure logs by capturing business-logic events (record reads, approvals, configuration changes) that have no corresponding infrastructure event.

  - By 2024–2025 audit logging is evolving under several pressures: the volume of microservice and serverless architectures generates enormous log throughput requiring streaming ingestion pipelines; AI Act obligations are driving demand for audit trails of model decisions and training data provenance; and zero-trust architectures mandate continuous verification that produces rich audit event streams. Immutable audit logs stored on blockchain or content-addressed storage are being explored for highest-assurance environments where the logging infrastructure itself could be compromised.