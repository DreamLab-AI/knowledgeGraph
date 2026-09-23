---
okf_version: "0.2"
type: Class
title: Data Storage
resource: urn:ngm:class:data-storage
domain: infrastructure
description: Data storage encompasses the systems, technologies, and architectures used to capture, retain, and retrieve digital information for ongoing and future use. It includes file, block, and object storage paradigms alongside the hardware and software infrastructure ensuring data persistence, accessibility, availability, and protection against loss or corruption.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:technology-infrastructure-domain-component
hasPart:
  - urn:ngm:class:file-storage
  - urn:ngm:class:block-storage
  - urn:ngm:class:object-storage
requires:
  - urn:ngm:class:file-system
enables:
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:data-persistence
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:data-analytics
implements:
  - urn:ngm:class:data-redundancy
  - urn:ngm:class:storage-architecture
  - urn:ngm:class:data-encryption-at-rest
contrastsWith:
  - urn:ngm:class:in-memory-computing
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:distributed-file-system
uses:
  - urn:ngm:class:raid
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:data-compression
supports:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:lifecycle-management
partOf:
  - urn:ngm:class:data-centre
---

# Data Storage

Data storage encompasses the systems, technologies, and architectures used to capture, retain, and retrieve digital information for ongoing and future use. It includes file, block, and object storage paradigms alongside the hardware and software infrastructure ensuring data persistence, accessibility, availability, and protection against loss or corruption.
