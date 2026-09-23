---
okf_version: "0.2"
type: Class
title: File Storage
resource: urn:ngm:class:file-storage
domain: infrastructure
description: File storage is a storage model that organises data as named files within a hierarchical directory tree, accessed through file-system semantics such as open, read, write and seek. It presents a familiar path-based namespace and is typically shared over network protocols for concurrent access. File storage contrasts with block storage, which exposes raw volumes, and object storage, which uses a fla
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:storage-infrastructure
hasPart:
  - urn:ngm:class:file-system
  - urn:ngm:class:data-storage-layer
enables:
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:backup
dependsOn:
  - urn:ngm:class:data-storage-layer
contrastsWith:
  - urn:ngm:class:block-storage
  - urn:ngm:class:object-storage
uses:
  - urn:ngm:class:file-system
  - urn:ngm:class:distributed-storage
supports:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:cloud-storage
partOf:
  - urn:ngm:class:storage-infrastructure
relatedTo:
  - urn:ngm:class:object-storage
  - urn:ngm:class:block-storage
  - urn:ngm:class:cloud-storage
---

# File Storage

File storage is a storage model that organises data as named files within a hierarchical directory tree, accessed through file-system semantics such as open, read, write and seek. It presents a familiar path-based namespace and is typically shared over network protocols for concurrent access. File storage contrasts with block storage, which exposes raw volumes, and object storage, which uses a flat namespace of objects addressed by key.
