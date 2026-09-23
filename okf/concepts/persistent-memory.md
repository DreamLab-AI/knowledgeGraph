---
okf_version: "0.2"
type: Class
title: Persistent Memory
resource: urn:ngm:class:persistent-memory
domain: infrastructure
description: Persistent Memory (PMEM) is a class of byte-addressable, non-volatile storage technology that occupies the memory bus and exposes its capacity directly to processor load/store instructions, combining the persistence of storage media with latency approaching that of DRAM. It sits in a new tier of the memory hierarchy between volatile DRAM and block-accessed SSDs, enabling applications to retain sta
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:hardware
enables:
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:machine-learning-discipline-infrastructure
supports:
  - urn:ngm:class:vector-database
  - urn:ngm:class:inference-engine
relatedTo:
  - urn:ngm:class:data-persistence
  - urn:ngm:class:data-storage
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:hardware-acceleration
---

# Persistent Memory

Persistent Memory (PMEM) is a class of byte-addressable, non-volatile storage technology that occupies the memory bus and exposes its capacity directly to processor load/store instructions, combining the persistence of storage media with latency approaching that of DRAM. It sits in a new tier of the memory hierarchy between volatile DRAM and block-accessed SSDs, enabling applications to retain state across power cycles without the overhead of traditional I/O system calls.
