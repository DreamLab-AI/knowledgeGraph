---
okf_version: "0.2"
type: Class
title: Block Storage
resource: urn:ngm:class:block-storage
domain: infrastructure
description: Block Storage is an infrastructure storage paradigm that presents raw fixed-size blocks of data to a host operating system or hypervisor, which then manages formatting, file system placement, and I/O scheduling directly. Unlike object storage or file storage, block storage exposes a low-level disk abstraction enabling high-performance, low-latency random read/write operations suitable for database
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:storage-systems
contrastsWith:
  - urn:ngm:class:object-storage
  - urn:ngm:class:distributed-storage
uses:
  - urn:ngm:class:file-system
supports:
  - urn:ngm:class:database-system
  - urn:ngm:class:persistent-storage
relatedTo:
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:data-storage-layer
---

# Block Storage

Block Storage is an infrastructure storage paradigm that presents raw fixed-size blocks of data to a host operating system or hypervisor, which then manages formatting, file system placement, and I/O scheduling directly. Unlike object storage or file storage, block storage exposes a low-level disk abstraction enabling high-performance, low-latency random read/write operations suitable for databases, virtual machine boot disks, and transactional workloads. Cloud providers implement block storage as network-attached volumes (e.g., AWS EBS, GCP Persistent Disk) that can be dynamically provisioned and attached to compute instances.
