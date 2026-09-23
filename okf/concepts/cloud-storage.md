---
okf_version: "0.2"
type: Class
title: Cloud Storage
resource: urn:ngm:class:cloud-storage
domain: infrastructure
description: Cloud storage is a model of data persistence in which digital data is held on remote servers operated by a cloud service provider, accessed over a network (typically the internet) via well-defined APIs rather than on locally attached hardware. Providers maintain geographically distributed, redundant infrastructure implementing erasure coding or multi-region replication to guarantee high durability
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-storage
hasPart:
  - urn:ngm:class:object-storage
  - urn:ngm:class:block-storage
  - urn:ngm:class:file-system
  - urn:ngm:class:file-system
requires:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:identity-and-access-management
enables:
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:data-lake
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:cloud-native-applications
contrastsWith:
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:on-premises-storage
bridgesTo:
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:hybrid-cloud
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:cdn
  - urn:ngm:class:erasure-coding
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:vector-database
  - urn:ngm:class:data-management
standardizedBy:
  - urn:ngm:class:s3-api
  - urn:ngm:class:rest-api
relatedTo:
  - urn:ngm:class:cloud-platform
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:data-sovereignty
---

# Cloud Storage

Cloud storage is a model of data persistence in which digital data is held on remote servers operated by a cloud service provider, accessed over a network (typically the internet) via well-defined APIs rather than on locally attached hardware. Providers maintain geographically distributed, redundant infrastructure implementing erasure coding or multi-region replication to guarantee high durability and availability, typically billing clients on capacity consumed and egress data transfer. The paradigm encompasses object storage, cloud file systems, and block storage volumes, and underpins virtually every modern cloud-native application architecture by decoupling storage from compute. Major implementations include Amazon S3, Google Cloud Storage, Azure Blob Storage, and S3-compatible open-source systems such as MinIO.
