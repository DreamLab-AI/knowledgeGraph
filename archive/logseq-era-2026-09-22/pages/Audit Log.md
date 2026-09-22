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
  "definition": "An audit log is an immutable, chronologically ordered record of discrete system events that captures who performed an action, what action was performed, on which resource, at what time, and from what source context, providing an authoritative evidence trail for security investigation, regulatory compliance, and forensic analysis. Each entry is structured with a timestamp, actor identity, event type, affected object identifier, outcome status, and contextual metadata. Audit logs are foundational to accountability in information systems, distinguished from operational logs by their emphasis on human-actionable accountability and legal evidentiary weight rather than system diagnostics. In high-assurance environments, entries are cryptographically chained so that deletion or modification of any record invalidates all subsequent hashes, making tampering detectable.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:audit-trail",
      "label": "Audit Trail"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      },
      {
        "@id": "urn:ngm:class:compliance-audit-trail",
        "label": "Compliance Audit Trail"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      },
      {
        "@id": "urn:ngm:class:forensic-analysis",
        "label": "Forensic Analysis"
      },
      {
        "@id": "urn:ngm:class:siem",
        "label": "SIEM"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:threat-detection",
        "label": "Threat Detection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:event-sourcing",
        "label": "Event Sourcing"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:time-synchronisation",
        "label": "Time Synchronisation"
      },
      {
        "@id": "urn:ngm:class:tamper-evident-storage",
        "label": "Tamper-Evident Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      },
      {
        "@id": "urn:ngm:class:regulatory-reporting",
        "label": "Regulatory Reporting"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:certificate-transparency",
        "label": "Certificate Transparency"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST SP 800-92"
      },
      {
        "@id": "urn:ngm:class:iso-27001",
        "label": "ISO 27001"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:audit-trail-record",
      "label": "Audit Trail Record"
    },
    {
      "@id": "urn:ngm:class:security-event-log",
      "label": "Security Event Log"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An [[Audit Log]] is an append-only, tamper-evident record of system events that captures actor identity, action type, affected resource, outcome, and timestamp, forming the evidentiary backbone of [[Compliance Framework]] requirements and [[Information Security]] investigation workflows. Each entry is structured to answer the fundamental accountability questions — who, what, where, when, and with what result — and is typically secured via [[Cryptographic Hash]] chaining or [[Digital Signature]] attestation to enforce [[Data Integrity]] and [[Non-Repudiation]]. Audit logs are foundational to both operational security and legal accountability, distinguished from [[Operational Log]] records by their emphasis on human-actionable accountability, regulatory retention mandates, and potential legal evidentiary weight.

- ### Overview
  - Audit logs exist at the intersection of security engineering, regulatory compliance, and legal accountability. Their primary function is to make the behaviour of information systems auditable by human investigators long after events have occurred, enabling [[Forensic Analysis]], [[Incident Response]], and regulatory attestation.
  - Unlike diagnostic or performance logs, audit logs are defined by their focus on actor-resource-action triples: they record discrete decisions and state changes initiated by identifiable subjects, whether human users, service accounts, or automated processes.
  - The immutability requirement distinguishes audit logs from general logging systems. Entries must be resistant to post-hoc modification, either through write-once storage media, database-level insert-only constraints, or cryptographic chaining mechanisms that make tampering detectable.
  - Audit logs feed directly into [[SIEM]] platforms, where they are correlated, normalised, and searched for indicators of compromise or policy violations. They also serve as primary input for [[Anomaly Detection]] and [[Threat Detection]] pipelines that identify unusual access patterns.
  - In regulated industries — financial services, healthcare, critical infrastructure — audit log retention is mandated by law and non-compliance attracts material penalties. The log thus serves simultaneously as a security control, a compliance artefact, and a legal instrument.

- ### Key Components
  - **Log Entry Schema** — each record includes:
    - Timestamp (ISO 8601 UTC, typically millisecond precision) — depends on [[Time Synchronisation]]
    - Subject identity (user ID, service account, API key, certificate DN) — provided by [[Identity Management]]
    - Action verb (CREATE, READ, UPDATE, DELETE, AUTHENTICATE, AUTHORISE, EXPORT)
    - Object identifier (resource type and unique ID)
    - Source context (IP address, user agent, session token, geolocation)
    - Outcome (SUCCESS / FAILURE with error code or denial reason)
    - Change payload or before/after diff for mutation events
    - Correlation ID linking related events across distributed services
  - **Storage Model** — uses an [[Append-Only Data Structure]] backed by WORM (write-once read-many) storage, insert-only database tables with DDL trigger protection, or [[Event Sourcing]] stores that treat the event stream as the source of truth.
  - **Tamper Evidence** — achieved via [[Cryptographic Hash]] chaining (each entry includes the hash of its predecessor), [[Merkle Tree]] structures for efficient inclusion proofs, or [[Digital Signature]] attestation by a trusted notary service. [[Certificate Transparency]] logs are a prominent public instance of this pattern.
  - **Integrity Verification** — periodic hash-chain validation confirms no entries have been deleted or modified; out-of-sequence gaps indicate potential tampering or log truncation.
  - **Retention Policy** — governed by regulatory mandates and risk appetite; entries may be tiered across hot (immediately queryable), warm (compressed), and cold (archived) storage with automated lifecycle management.
  - **Access Controls on the Log** — the audit log itself must be protected from the subjects it monitors; typically stored in a separate, privilege-segregated system with its own [[Access Control]] policies and read-only access for operational staff.

- ### Mechanisms
  - **Centralised Collection** — agents or sidecars on each service ship events to a centralised [[SIEM]] or log aggregation platform (Elasticsearch, Splunk, Chronicle, Microsoft Sentinel) over a secure transport, where normalisation maps heterogeneous source formats to a common schema such as [[Common Event Format]] (CEF) or OCSF (Open Cybersecurity Schema Framework).
  - **Structured Logging** — modern audit logging favours JSON or Protobuf-encoded structured entries over free-text syslog lines, enabling schema-on-write queries and downstream [[Anomaly Detection]] without regex parsing.
  - **Log Signing and Sealing** — hardware security modules (HSMs) or cloud KMS services sign batches of audit entries on a scheduled basis, producing a signed manifest that can be independently verified by an auditor.
  - **Distributed Tracing Integration** — in microservices architectures, audit events carry distributed trace IDs (W3C TraceContext or OpenTelemetry span IDs) enabling reconstruction of multi-service request chains for [[Forensic Analysis]].
  - **Real-Time Streaming** — platforms such as Apache Kafka serve as the audit event bus, decoupling producers from consumers and enabling both real-time [[Threat Detection]] and durable archival in parallel.
  - **Blockchain Anchoring** — periodic hashes of audit log batches are anchored to a public [[Blockchain]] (e.g. Ethereum or a consortium ledger), providing third-party verifiable tamper evidence without trusting any single custodian — a pattern used in regulated financial and healthcare contexts.

- ### Applications and Use Cases
  - **Security Incident Investigation** — after a breach, security operations teams reconstruct attacker activity by querying audit logs for the compromised account, tracing lateral movement, privilege escalation, and data exfiltration across affected systems.
  - **Regulatory Compliance Attestation** — PCI-DSS requires audit log retention for one year with three months immediately available; HIPAA mandates six-year retention for healthcare data access logs; GDPR requires demonstrable evidence of lawful basis for personal data processing. Audit logs provide this evidence directly.
  - **Insider Threat Detection** — behavioural [[Anomaly Detection]] models trained on baseline audit log patterns identify employees accessing unusual volumes of data, accessing resources outside their normal hours, or performing sequences of actions consistent with data exfiltration.
  - **Privileged Access Monitoring** — privileged account management (PAM) systems generate detailed audit logs for every privileged session, recording keystrokes and commands for administrator and root-level access as required by high-assurance security frameworks.
  - **Change Management Verification** — infrastructure and configuration change management processes require audit logs to verify that changes were authorised, performed by approved personnel, and matched the approved change ticket — supporting [[Regulatory Reporting]] obligations.
  - **Zero-Trust Architecture** — in [[Zero Trust]] environments where no implicit trust is granted to any network segment or user, every access decision generates an audit log entry, providing continuous visibility into the enforcement of least-privilege policies.
  - **Supply Chain Security** — software build pipeline audit logs record every artefact, dependency fetch, and signing operation, providing the evidence base for software bill-of-materials (SBOM) attestation and supply-chain provenance claims.
  - **Financial Transaction Accountability** — banking and payments systems maintain immutable audit logs of every transaction, authorisation decision, and fund movement to satisfy anti-money-laundering (AML) and financial reporting obligations.
  - **AI and Automated Decision Accountability** — as AI systems make consequential decisions (credit scoring, content moderation, medical triage), audit logs of inputs, model version, decision rationale, and outcome support [[Governance]] requirements for explainability and contestability.

- ### Relationships
  - partOf:: [[Audit Trail]]
  - relatedTo:: [[Audit Logging]]
  - relatedTo:: [[Compliance Audit Trail]]
  - relatedTo:: [[Data Integrity]]
  - relatedTo:: [[Non-Repudiation]]
  - relatedTo:: [[Forensic Analysis]]
  - relatedTo:: [[SIEM]]
  - supports:: [[Compliance Framework]]
  - supports:: [[Information Security]]
  - supports:: [[Access Control]]
  - supports:: [[Incident Response]]
  - supports:: [[Threat Detection]]
  - uses:: [[Event Sourcing]]
  - uses:: [[Cryptographic Hash]]
  - uses:: [[Merkle Tree]]
  - uses:: [[Digital Signature]]
  - uses:: [[Append-Only Data Structure]]
  - requires:: [[Identity Management]]
  - requires:: [[Time Synchronisation]]
  - requires:: [[Tamper-Evident Storage]]
  - enables:: [[Security Audit]]
  - enables:: [[Regulatory Reporting]]
  - enables:: [[Anomaly Detection]]
  - contrastsWith:: [[Operational Log]]
  - contrastsWith:: [[Debug Log]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Certificate Transparency]]
  - standardizedBy:: [[NIST SP 800-92]]
  - standardizedBy:: [[ISO 27001]]
  - standardizedBy:: [[Common Event Format]]

- ### Standards and Context
  - **NIST SP 800-92** (Guide to Computer Security Log Management) — the primary US federal guidance document defining audit logging requirements, log management architecture, and operational practices for government and critical infrastructure systems.
  - **NIST SP 800-53** — includes AU (Audit and Accountability) control family, specifying audit event categories, audit record content, and audit storage capacity requirements for federal information systems.
  - **ISO/IEC 27001:2022** — Annex A control A.8.15 (Logging) requires organisations to produce, protect, and retain logs of activities, exceptions, and security events as part of an Information Security Management System (ISMS).
  - **PCI DSS v4.0** — Requirement 10 mandates audit logging for all access to cardholder data, administrator activity, and system components, with specific field requirements and retention mandates.
  - **HIPAA Security Rule** — 45 CFR §164.312(b) requires audit controls that record and examine activity in information systems containing electronic protected health information (ePHI).
  - **SOC 2 Trust Services Criteria** — CC7.2 (System Monitoring) requires service organisations to implement detection procedures including log analysis to identify potential threats.
  - **GDPR Article 30** — Records of Processing Activities effectively function as a high-level audit log of data processing operations, complemented by technical access logs demonstrating lawful processing.
  - **Common Event Format (CEF)** — ArcSight-originated standard widely adopted for interoperable audit event encoding, defining mandatory and optional fields for security event records.
  - **Open Cybersecurity Schema Framework (OCSF)** — emerging cross-vendor standard (backed by AWS, Splunk, Crowdstrike, and others) for normalised security event schemas, increasingly adopted as the successor to CEF in cloud environments.
  - **RFC 5424** — Syslog protocol standard defining structured syslog message format, widely used as transport for audit events in Unix/Linux systems.
  - **W3C Web Application Security Working Group** — produces guidance on web application audit logging requirements, including authentication events and administrative actions.

- ### Historical Context
  - Audit logs emerged from physical paper ledgers in financial accounting and government record-keeping, where every transaction was recorded sequentially by a clerk. In computing, the concept was formalised during the 1960s and 1970s alongside time-sharing operating systems, where tracking multi-user access to shared resources became operationally necessary.
  - UNIX syslog, introduced in the early 1980s, provided the first widely adopted structured logging infrastructure, though its focus was operational rather than accountability-oriented. The distinction between operational logs and audit logs sharpened as regulatory requirements grew through the 1990s and 2000s, particularly following the Sarbanes-Oxley Act (2002) in the US.
  - The shift to cloud-native and microservices architectures in the 2010s created orders-of-magnitude increases in log volume, driving the development of purpose-built log aggregation platforms, streaming architectures using Apache Kafka, and AI-powered log analysis for [[Anomaly Detection]].
  - [[Blockchain]] and distributed ledger technology introduced new possibilities for audit logs requiring third-party verifiable tamper evidence, as seen in certificate transparency initiatives and financial regulatory reporting use cases.

- ### Provenance
  - sources:: NIST SP 800-92, ISO/IEC 27001:2022, PCI DSS v4.0, HIPAA Security Rule, OCSF specification, RFC 5424
  - updated:: 2026-06-13
