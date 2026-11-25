---
okf_version: "0.2"
type: Class
title: Data Consistency
resource: urn:ngm:class:data-consistency
domain: infrastructure
description: Data consistency is the guarantee that data remains valid, coherent and in agreement across copies, transactions and nodes of a system. In distributed systems it spans a spectrum from strong consistency, where all readers observe the latest write, to eventual consistency, where replicas converge over time. It is a core correctness property traded off against availability and latency, and it underp
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:data-layer
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Data Consistency

Data consistency is the guarantee that data remains valid, coherent and in agreement across copies, transactions and nodes of a system. In distributed systems it spans a spectrum from strong consistency, where all readers observe the latest write, to eventual consistency, where replicas converge over time. It is a core correctness property traded off against availability and latency, and it underpins fault-tolerant data layers.
