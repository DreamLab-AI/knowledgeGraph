public:: true
alias:: DataIntegrity

# data integrity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57c9ba2faa70b21fde3310821564ac45570bc40dd856b336f210d39c230b47b9",
  "@type": "Page",
  "vc:slug": "data-integrity",
  "title": "data integrity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-integrity",
  "@type": "Class",
  "label": "Data Integrity",
  "definition": "Data integrity is the property guaranteeing that data remains accurate, complete, consistent, and unaltered throughout its entire lifecycle—spanning creation, storage, transmission, and processing—except through authorised operations. It is enforced through a layered combination of technical controls including cryptographic hash functions, digital signatures, Merkle trees, access control mechanisms, and ACID-compliant transactions, as well as procedural controls such as change-control workflows, audit trails, and immutable logging. Violations—whether from storage errors, transmission corruption, software bugs, or deliberate tampering—can propagate silently and have cascading consequences in any system relying on the data for decision-making or compliance.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-quality",
      "label": "Data Quality"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:write-ahead-logging",
        "label": "Write-Ahead Logging"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:acid-transactions",
        "label": "ACID Transactions"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:referential-integrity",
        "label": "Referential Integrity"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:supply-chain-provenance",
        "label": "Supply Chain Provenance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-27001",
        "label": "ISO 27001"
      },
      {
        "@id": "urn:ngm:class:nist-cybersecurity-framework",
        "label": "NIST Cybersecurity Framework"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-correctness",
      "label": "Data Correctness"
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
  - Data integrity is the fundamental property guaranteeing that data remains accurate, complete, consistent, and unaltered throughout its entire lifecycle—from initial creation and storage through transmission, transformation, and processing—except via authorised operations. It encompasses both technical controls ([[Hash Function]], [[Digital Signature]], [[Merkle Tree]], [[Access Control]], [[ACID Transactions]]) and organisational controls ([[Audit Trail]], change management, and [[Data Governance]] policies. A breach of data integrity, whether from hardware fault, software error, or malicious actor, can cascade silently through dependent systems, corrupting analysis, decisions, and compliance records alike.

- ### Overview
  - Data integrity is one of the three legs of the CIA triad in [[Information Security]] (alongside Confidentiality and Availability), and is the principal concern of [[Data Quality]] engineering. It operates at multiple strata of a technology stack simultaneously:
    - **Physical layer** — media reliability, power-failure resilience, and [[Erasure Coding]] in storage arrays
    - **File-system layer** — checksums (e.g. ZFS end-to-end [[Checksum]]), journalling, and copy-on-write semantics
    - **Database layer** — [[ACID Transactions]], constraints, triggers, and [[Write-Ahead Logging]]
    - **Application layer** — input validation, [[Referential Integrity]] enforcement, and schema versioning
    - **Network layer** — CRC frames, TLS record MACs, and transport-level retransmission
    - **Cryptographic layer** — [[Hash Function]] digests, [[Digital Signature]]s, and certificate chains
  - Why it matters: practically every downstream process—[[Machine Learning]] training data pipelines, financial settlement, medical records, legal e-discovery, and real-time [[Supply Chain Provenance]] tracking—depends on the assumption that the data being processed reflects reality faithfully. When that assumption fails, the consequences range from silent model degradation to regulatory penalties and patient harm.

- ### Key Components
  - #### Referential and Domain Integrity
    - [[Referential Integrity]] — foreign-key constraints that prevent orphaned records and broken relationships in relational databases
    - Domain integrity — column-level constraints (NOT NULL, CHECK, ENUM) that restrict values to permitted types and ranges
    - Entity integrity — primary-key uniqueness guarantees ensuring each record is individually identifiable
  - #### Cryptographic Controls
    - [[Hash Function]] (SHA-256, BLAKE3, SHA-3) — deterministic digests; any change to source data produces a radically different digest, enabling tamper detection
    - [[Digital Signature]] — asymmetric cryptography binding a data artefact to a signer's private key; provides both integrity and non-repudiation
    - [[Merkle Tree]] — binary tree of hashes allowing efficient, logarithmic-cost proof of inclusion and consistency across large datasets or block sequences
    - [[Checksum]] — lightweight (CRC-32, Adler-32) or cryptographic integrity tokens embedded in storage or network frames
    - [[Encryption]] — while primarily a confidentiality control, authenticated encryption (AES-GCM, ChaCha20-Poly1305) bundles an integrity authentication tag with the ciphertext
  - #### Transaction and Consistency Controls
    - [[ACID Transactions]] — Atomicity, Consistency, Isolation, Durability; the database contract that prevents partial writes and enforces invariants even under failure
    - [[Write-Ahead Logging]] — journalling technique recording intended changes before committing them, enabling crash recovery without data loss
    - Two-phase commit (2PC) — distributed protocol ensuring that a transaction either commits on all participating nodes or on none
    - [[Eventual Consistency]] — weaker model common in distributed NoSQL systems that trades momentary inconsistency for availability; contrasts with strict integrity
  - #### Storage-Layer Resilience
    - [[Erasure Coding]] — algebraically redundant coding (Reed-Solomon, LDPC) allowing reconstruction of lost or corrupted shards without full replication
    - RAID (Redundant Array of Independent Disks) — block-level redundancy for single-disk or multi-disk failure tolerance
    - End-to-end checksumming — storage systems such as ZFS and Btrfs compute and verify checksums on every read/write path to detect silent data corruption (bit-rot)
  - #### Audit and Provenance
    - [[Audit Trail]] — tamper-evident, append-only log of all operations performed on data, required for compliance and forensic investigation
    - [[Data Provenance]] — metadata capturing origin, transformation history, and custody chain of a dataset; related to [[Data Lineage]]
    - [[Immutability]] — architectural pattern (WORM storage, append-only event logs, [[Blockchain]]) where records cannot be modified after creation

- ### Mechanisms of Enforcement
  - **Access Control** — role-based ([[Access Control]]) and attribute-based policies that restrict who can create, update, or delete records, limiting the attack surface for integrity violations
  - **Input validation** — syntactic and semantic checks at data-entry points (APIs, forms, ETL pipelines) to reject malformed or out-of-range values before they reach storage
  - **Schema and contract enforcement** — formal schema definitions (JSON Schema, Avro, Protocol Buffers) that validate structure on ingest and on consumption
  - **Cryptographic binding** — signing data at origin (e.g. X.509 document signing, JWT payload signatures) so that downstream consumers can independently verify integrity without trusting the transport
  - **Continuous monitoring** — integrity-monitoring tools (file-integrity monitoring, SIEM correlation, database activity monitoring) that detect anomalous writes or unexpected state changes in real time
  - **Reconciliation and checksumming** — periodic batch comparison of replicated datasets or backups against a trusted reference using [[Hash Function]] digests

- ### Applications and Use Cases
  - #### Financial Systems
    - Settlement finality in payment networks requires [[ACID Transactions]] and cryptographic audit logs to ensure that debits and credits balance exactly and that ledger entries cannot be silently altered
    - Regulatory reporting (MiFID II, Dodd-Frank) mandates tamper-evident audit trails and data lineage from raw trade capture through aggregated position reporting
  - #### Healthcare and Clinical Data
    - Electronic Health Records (EHR) systems must guarantee that patient data is not silently altered between entry and clinical use; [[Digital Signature]]s on records bind them to the creating clinician and timestamp
    - Clinical trial data integrity is mandated by FDA 21 CFR Part 11 and ICH E6 GCP guidelines, requiring audit trails and controlled access for computerised systems
  - #### Distributed Ledger and Blockchain
    - [[Blockchain]] operationalises data integrity at a system level: each block header contains the [[Hash Function]] digest of the preceding block, forming an append-only chain where altering any historical record invalidates all subsequent block hashes
    - [[Smart Contract]] execution relies on the integrity of on-chain state; the deterministic EVM guarantees all nodes compute the same result from the same state
    - [[Supply Chain Provenance]] — tracking material origin and custody using immutable ledger records to detect counterfeiting or diversion
  - #### Machine Learning Pipelines
    - Training data integrity directly affects model quality; corrupted or tampered training sets can introduce [[Data Poisoning]] attacks or silent accuracy degradation
    - Feature store systems use [[Checksum]] validation and version pinning to ensure reproducibility of model training runs
    - Dataset versioning tools (DVC, Delta Lake) maintain [[Merkle Tree]]-style manifests over dataset partitions for change detection and rollback
  - #### Distributed Storage and Cloud
    - Object stores (Amazon S3, Azure Blob) expose ETag checksums and optional server-side integrity validation for uploads and downloads
    - Content-addressed storage (IPFS, Git object store) uses [[Hash Function]] digests as object identifiers, making tampering structurally impossible without breaking references
    - Backup and disaster-recovery systems perform integrity verification of restore candidates before committing to production failover

- ### Relationships
  - uses:: [[Hash Function]]
  - uses:: [[Merkle Tree]]
  - uses:: [[Digital Signature]]
  - uses:: [[Checksum]]
  - uses:: [[Access Control]]
  - enables:: [[Audit Trail]]
  - enables:: [[Immutability]]
  - enables:: [[Data Provenance]]
  - enables:: [[Regulatory Compliance]]
  - requires:: [[Encryption]]
  - requires:: [[Write-Ahead Logging]]
  - dependsOn:: [[ACID Transactions]]
  - dependsOn:: [[Fault Tolerance]]
  - dependsOn:: [[Erasure Coding]]
  - contrastsWith:: [[Data Corruption]]
  - contrastsWith:: [[Eventual Consistency]]
  - relatedTo:: [[Distributed Ledger]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Information Security]]
  - relatedTo:: [[Referential Integrity]]
  - relatedTo:: [[Data Lineage]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Supply Chain Provenance]]
  - standardizedBy:: [[ISO 27001]]
  - standardizedBy:: [[NIST Cybersecurity Framework]]

- ### Standards and Context
  - **ISO/IEC 27001:2022** — Information Security Management Systems standard; Annex A controls directly address data integrity requirements for storage, processing, and transmission
  - **NIST Cybersecurity Framework (CSF 2.0)** — maps integrity under the "Protect" and "Detect" functions; references SP 800-53 controls SI-7 (Software, Firmware, and Information Integrity) and SI-10 (Information Input Validation)
  - **NIST SP 800-53 Rev. 5** — comprehensive control catalogue including SI-7 (integrity checking), AU-9 (protection of audit information), and SC-8 (transmission confidentiality and integrity)
  - **FDA 21 CFR Part 11** — US regulation governing electronic records and signatures in pharmaceutical/medical device contexts; mandates audit trails, access controls, and data integrity validation
  - **ICH Q10 / GxP guidelines** — pharmaceutical quality system requirements emphasising data integrity throughout the product lifecycle (ALCOA+ principles: Attributable, Legible, Contemporaneous, Original, Accurate)
  - **GDPR Article 5(1)(f)** — requires appropriate technical measures to ensure data integrity and resilience of processing; data accuracy obligation under Article 5(1)(d)
  - **PCI DSS v4.0** — Requirement 10 mandates audit logging and integrity monitoring of cardholder data environments
  - **ACID properties** — foundational database theory formalised by Gray and Reuter (1992); underpins relational DBMS integrity guarantees globally
  - **Common Criteria (ISO/IEC 15408)** — security evaluation framework whose TOE Security Functions include data integrity mechanisms as evaluable targets

- ### Semantic Classification
  - owl-class:: data-integrity:Data Integrity
  - owl-role:: Concept

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
  - updated:: 2026-06-13
