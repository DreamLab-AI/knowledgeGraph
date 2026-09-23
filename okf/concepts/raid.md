---
okf_version: "0.2"
type: Class
title: Raid
resource: urn:ngm:class:raid
domain: infrastructure
description: "RAID (Redundant Array of Independent Disks) is a data storage virtualisation technology that combines multiple physical drives into one or more logical units to improve performance, capacity, or fault tolerance. Different RAID levels trade off redundancy, write performance and usable capacity using techniques such as striping, mirroring and parity. It protects against individual drive failure but "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-storage
requires:
  - urn:ngm:class:data-storage
enables:
  - urn:ngm:class:high-availability
contrastsWith:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:distributed-storage
uses:
  - urn:ngm:class:redundancy
  - urn:ngm:class:block-storage
supports:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:high-availability
  - urn:ngm:class:data-integrity
partOf:
  - urn:ngm:class:data-storage
relatedTo:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:redundancy
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:block-storage
---

# Raid

RAID (Redundant Array of Independent Disks) is a data storage virtualisation technology that combines multiple physical drives into one or more logical units to improve performance, capacity, or fault tolerance. Different RAID levels trade off redundancy, write performance and usable capacity using techniques such as striping, mirroring and parity. It protects against individual drive failure but is complementary to, not a substitute for, backups.
