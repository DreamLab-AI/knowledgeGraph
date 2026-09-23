---
okf_version: "0.2"
type: Class
title: File System
resource: urn:ngm:class:file-system
domain: infrastructure
description: A file system is the data structure and associated management software that an operating system uses to organise, store, retrieve, and manage data on storage media. It defines how data is logically partitioned into named files and directories, governs access permissions, maintains metadata such as timestamps and ownership, and translates logical file operations into physical block I/O against unde
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:operating-system
requires:
  - urn:ngm:class:storage-hardware
enables:
  - urn:ngm:class:data-storage-layer
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:device-drivers
contrastsWith:
  - urn:ngm:class:object-storage
  - urn:ngm:class:database
bridgesTo:
  - urn:ngm:class:ipfs
  - urn:ngm:class:distributed-storage
uses:
  - urn:ngm:class:storage-hardware
  - urn:ngm:class:virtual-machine
supports:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:snapshot
standardizedBy:
  - urn:ngm:class:posix
partOf:
  - urn:ngm:class:operating-system
relatedTo:
  - urn:ngm:class:data-storage
  - urn:ngm:class:cloud-storage
  - urn:ngm:class:storage-systems
---

# File System

A file system is the data structure and associated management software that an operating system uses to organise, store, retrieve, and manage data on storage media. It defines how data is logically partitioned into named files and directories, governs access permissions, maintains metadata such as timestamps and ownership, and translates logical file operations into physical block I/O against underlying storage hardware. File systems range from local single-disk formats (NTFS, ext4, APFS) to distributed and network-attached systems (NFS, HDFS, GFS) that span many physical storage nodes.
