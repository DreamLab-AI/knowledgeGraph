public:: true

# Audit Log
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:audit-log",
  "@type": "Page",
  "vc:slug": "audit-log",
  "title": "Audit Log",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audit-log",
  "@type": "Class",
  "label": "Audit Log",
  "definition": "An audit log is an immutable, chronologically ordered record of discrete events that captures who performed an action, what action was performed, on which resource, at what time, and from where, providing an authoritative evidence trail for security investigation, regulatory compliance, and forensic analysis. Each log entry is typically structured with a timestamp, actor identity, event type, affected object identifier, outcome status, and contextual metadata. Audit logs are foundational to accountability in information systems, distinguishing themselves from operational logs by their emphasis on human-actionable accountability rather than system diagnostics.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:audit-logging", "label": "Audit Logging"},
      {"@id": "urn:ngm:class:compliance-audit-trail", "label": "Compliance Audit Trail"},
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:event-sourcing", "label": "Event Sourcing"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - An [[Audit Log]] is an append-only, tamper-evident record of system events that captures actor identity, action type, affected resource, and timestamp, forming the evidentiary backbone of [[Compliance Framework]] requirements and [[Information Security]] investigation workflows, often secured via [[Cryptographic Hash]] chaining to enforce [[Data Integrity]].

- ### Relationships
  - [[Audit Log]] is a specialisation of the broader [[Audit Trail]] concept and is produced by [[Audit Logging]] infrastructure. It supports [[Compliance Framework]] obligations such as SOC 2, PCI-DSS, HIPAA, and GDPR by providing verifiable records of data access and change. It underpins [[Information Security]] operations by enabling forensic reconstruction of incident timelines. [[Access Control]] systems generate audit log entries whenever permission decisions are made. Where systems are designed around [[Event Sourcing]], the event store itself often serves as the canonical audit log. [[Cryptographic Hash]] chaining (as in certificate transparency logs and blockchain-adjacent approaches) provides tamper evidence guarantees.

- ### Content
  - Audit logs emerged from physical paper trails used in financial accounting and government record-keeping, where every transaction was recorded in a ledger by a human clerk. In computing, the concept was formalised during the 1960s and 1970s alongside time-sharing operating systems, where tracking multi-user access to shared resources became operationally necessary. UNIX syslog, introduced in the early 1980s, provided the first widely adopted structured logging infrastructure, though its focus was operational rather than accountability-oriented. The distinction between operational logs and audit logs sharpened as regulatory requirements grew through the 1990s and 2000s.

  - A well-structured audit log entry contains a set of standardised fields: a monotonically increasing sequence number or UUID, an ISO 8601 UTC timestamp with millisecond precision, the subject identity (user ID, service account, or API key), the action verb (CREATE, READ, UPDATE, DELETE, AUTHENTICATE, AUTHORISE), the object identifier (resource type and ID), the source context (IP address, user agent, session token), the outcome (SUCCESS or FAILURE with error code), and any relevant change payload or diff. Entries are typically written to an append-only store — either a dedicated WORM (write once, read many) storage system or a database table with DDL triggers preventing modification. In high-assurance environments, entries are cryptographically chained so that deletion or modification of any record invalidates all subsequent hashes, making tampering detectable.

  - The significance of audit logs extends across security operations, regulatory compliance, and legal proceedings. Security teams rely on audit logs to detect anomalous access patterns, reconstruct the sequence of events during a breach investigation, and establish the blast radius of a compromised account. Regulatory frameworks mandate minimum retention periods — PCI-DSS requires one year of audit log retention with three months immediately available, HIPAA requires six years, and GDPR imposes proportionality constraints. Audit logs also serve as legal evidence in litigation, requiring chains of custody and authenticity attestation.

  - In 2024-2025, audit log management faces scaling challenges as cloud-native microservices architectures generate orders of magnitude more events than monolithic predecessors. Centralised log aggregation platforms such as SIEM systems ingest and correlate audit events across thousands of services, using streaming processing to detect threats in near-real-time. Blockchain-anchored audit logs and certificate-transparency-style append-only Merkle tree structures are emerging for scenarios requiring third-party verifiable tamper evidence without trusting a central authority. AI-powered log analysis applies anomaly detection to identify insider threats and novel attack patterns that rule-based systems miss. The tension between comprehensive logging for security and minimal data collection for privacy compliance remains an active governance challenge.

