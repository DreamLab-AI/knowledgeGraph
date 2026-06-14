public:: true

# Backup and Recovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:backup-and-recovery",
  "@type": "Page",
  "vc:slug": "backup-and-recovery",
  "title": "Backup and Recovery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:backup-and-recovery",
  "@type": "Class",
  "label": "Backup and Recovery",
  "definition": "Backup and Recovery is the set of processes, technologies, and policies that ensure data and system state can be copied to a secondary store and restored to a known-good condition following data loss, corruption, or infrastructure failure. It encompasses full, incremental, and differential backup strategies alongside recovery time objectives (RTO) and recovery point objectives (RPO) that define acceptable loss and restoration windows.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:full-backup", "label": "Full Backup"},
      {"@id": "urn:ngm:class:incremental-backup", "label": "Incremental Backup"},
      {"@id": "urn:ngm:class:differential-backup", "label": "Differential Backup"},
      {"@id": "urn:ngm:class:recovery-time-objective", "label": "Recovery Time Objective"},
      {"@id": "urn:ngm:class:recovery-point-objective", "label": "Recovery Point Objective"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:business-continuity", "label": "Business Continuity"},
      {"@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-storage", "label": "Data Storage"},
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:high-availability", "label": "High Availability"},
      {"@id": "urn:ngm:class:operational-resilience", "label": "Operational Resilience"},
      {"@id": "urn:ngm:class:point-in-time-recovery", "label": "Point-in-Time Recovery"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-replication", "label": "Data Replication"},
      {"@id": "urn:ngm:class:storage-infrastructure", "label": "Storage Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:data-replication", "label": "Data Replication"},
      {"@id": "urn:ngm:class:cloud-storage", "label": "Cloud Storage"},
      {"@id": "urn:ngm:class:snapshot", "label": "Snapshot"},
      {"@id": "urn:ngm:class:immutable-storage", "label": "Immutable Storage"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ransomware-protection", "label": "Ransomware Protection"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:replication", "label": "Replication"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:continuous-data-protection", "label": "Continuous Data Protection"},
      {"@id": "urn:ngm:class:air-gap", "label": "Air Gap"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:data-backup-and-recovery", "label": "Data Backup and Recovery"},
    {"@id": "urn:ngm:class:backup-and-restore", "label": "Backup and Restore"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Backup and Recovery encompasses all strategies and technologies used to create secondary copies of data and system configurations, and to restore them reliably following adverse events such as ransomware, hardware failure, accidental deletion, or site-level disaster. Modern practice is governed by the 3-2-1 rule (three copies, two media types, one offsite) and formalised into [[Disaster Recovery]] plans with documented RTO and RPO targets. It is a foundational pillar of [[Operational Resilience]] and [[Data Protection]] compliance.

- ### Relationships
  - Backup and Recovery directly enables [[High Availability]] by providing a restoration path when live systems fail. It relies on [[Data Replication]] for near-real-time secondary copies and leverages [[Cloud Storage]] as a cost-effective offsite target. It is closely related to [[Fault Tolerance]] — the two are complementary, with fault tolerance preventing failures from causing downtime and backup providing the fallback when faults do propagate. [[Data Protection]] regulations mandate backup retention periods and encryption standards that shape implementation.

- ### Content
  - Formalised backup practices emerged alongside early mainframe computing in the 1960s, when tape drives provided the primary backup medium. The discipline evolved through RAID arrays in the 1980s and 1990s, snapshot-based backup in the 2000s, and cloud-integrated continuous backup from the 2010s. Ransomware threats from the mid-2010s onwards have made air-gapped and immutable backup storage a critical design requirement.

  - Technically, backup strategies are categorised as full (complete copy of all data), incremental (changes since last backup), and differential (changes since last full backup). Backup systems operate at block, file, or application levels, with application-consistent backups ensuring databases and stateful services are captured at a transactionally consistent point. Recovery mechanisms include bare-metal restore, virtual machine snapshot restore, granular file-level recovery, and database point-in-time recovery.

  - In enterprise environments, backup orchestration platforms such as Veeam, Commvault, and Rubrik provide unified management across on-premises, virtualised, and multi-cloud environments. Cloud-native services including AWS Backup, Azure Backup, and Google Cloud Backup and DR handle backup lifecycle management for cloud-native workloads. Immutable storage targets — using object lock or WORM media — protect backups from ransomware encryption.

  - By 2024–2025, backup and recovery has increasingly adopted AI-driven anomaly detection to identify corruption or unexpected data change before backup, improving RPO. Continuous data protection (CDP) approaches that capture every write to a journal have become more accessible. Regulatory requirements under frameworks such as DORA (Digital Operational Resilience Act) in the EU have made documented, tested backup and recovery procedures mandatory for financial institutions.

