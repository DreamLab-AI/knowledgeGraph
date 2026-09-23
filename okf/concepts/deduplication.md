---
okf_version: "0.2"
type: Class
title: Deduplication
resource: urn:ngm:class:deduplication
domain: data
description: Deduplication is a data-management technique that eliminates redundant copies of identical data by storing a single instance and referencing it wherever the same content recurs. Implementations typically hash data chunks and compare digests, so identical blocks resolve to the same stored object. It reduces storage footprint, backup windows, and network transfer in content-addressed and backup syst
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:hash-function
  - urn:ngm:class:content-addressing
---

# Deduplication

Deduplication is a data-management technique that eliminates redundant copies of identical data by storing a single instance and referencing it wherever the same content recurs. Implementations typically hash data chunks and compare digests, so identical blocks resolve to the same stored object. It reduces storage footprint, backup windows, and network transfer in content-addressed and backup systems.
