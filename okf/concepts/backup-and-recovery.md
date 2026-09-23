---
okf_version: "0.2"
type: Class
title: Backup and Recovery
resource: urn:ngm:class:backup-and-recovery
domain: infrastructure
description: Backup and Recovery is the set of processes, technologies, and policies that ensure data and system state can be copied to a secondary store and restored to a known-good condition following data loss, corruption, or infrastructure failure. It encompasses full, incremental, and differential backup strategies alongside recovery time objectives (RTO) and recovery point objectives (RPO) that define ac
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:disaster-recovery
hasPart:
  - urn:ngm:class:recovery-time-objective
  - urn:ngm:class:recovery-point-objective
requires:
  - urn:ngm:class:data-storage
  - urn:ngm:class:data-integrity
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:operational-resilience
dependsOn:
  - urn:ngm:class:data-replication
  - urn:ngm:class:storage-infrastructure
contrastsWith:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:replication
bridgesTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:data-replication
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:snapshot
  - urn:ngm:class:immutable-storage
supports:
  - urn:ngm:class:regulatory-compliance
partOf:
  - urn:ngm:class:business-continuity
  - urn:ngm:class:disaster-recovery
relatedTo:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-protection
  - urn:ngm:class:air-gap
---

# Backup and Recovery

Backup and Recovery is the set of processes, technologies, and policies that ensure data and system state can be copied to a secondary store and restored to a known-good condition following data loss, corruption, or infrastructure failure. It encompasses full, incremental, and differential backup strategies alongside recovery time objectives (RTO) and recovery point objectives (RPO) that define acceptable loss and restoration windows.
