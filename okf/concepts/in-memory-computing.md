---
okf_version: "0.2"
type: Class
title: In-Memory Computing
resource: urn:ngm:class:in-memory-computing
domain: infrastructure
description: In-memory computing is an architectural approach that holds working data sets in a system's main memory (RAM) rather than on disk, eliminating storage-layer I/O from the critical path of data access and processing. By keeping data resident in fast volatile memory, it delivers order-of-magnitude reductions in latency and supports high-throughput analytics, transaction processing, and real-time deci
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:memory-hierarchy
  - urn:ngm:class:persistent-storage
requires:
  - urn:ngm:class:high-performance-computing
enables:
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:stream-processing
dependsOn:
  - urn:ngm:class:database
contrastsWith:
  - urn:ngm:class:persistent-storage
uses:
  - urn:ngm:class:memory-hierarchy
  - urn:ngm:class:hardware-acceleration
supports:
  - urn:ngm:class:data-storage
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:data-storage
  - urn:ngm:class:real-time-processing
---

# In-Memory Computing

In-memory computing is an architectural approach that holds working data sets in a system's main memory (RAM) rather than on disk, eliminating storage-layer I/O from the critical path of data access and processing. By keeping data resident in fast volatile memory, it delivers order-of-magnitude reductions in latency and supports high-throughput analytics, transaction processing, and real-time decisioning. It typically pairs with techniques such as columnar layouts, distributed caching, and durability mechanisms (logging, replication, persistence) to combine speed with resilience.
