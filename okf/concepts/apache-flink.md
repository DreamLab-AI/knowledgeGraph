---
okf_version: "0.2"
type: Class
title: Apache Flink
resource: urn:ngm:class:apache-flink
domain: infrastructure
description: "Apache Flink is an open-source distributed engine for stateful computations over unbounded and bounded data streams. It provides a unified runtime that treats batch processing as a special case of streaming, with event-time semantics, sophisticated windowing, and exactly-once state consistency backed by distributed snapshots. Flink is widely used for low-latency, high-throughput stream processing "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stream-processing
enables:
  - urn:ngm:class:real-time-analytics
dependsOn:
  - urn:ngm:class:distributed-computing
implements:
  - urn:ngm:class:stream-processing
contrastsWith:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:batch-processing
uses:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:quorum
  - urn:ngm:class:distributed-computing
supports:
  - urn:ngm:class:apache-kafka
relatedTo:
  - urn:ngm:class:data-replication
  - urn:ngm:class:eventual-consistency
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Apache Flink

Apache Flink is an open-source distributed engine for stateful computations over unbounded and bounded data streams. It provides a unified runtime that treats batch processing as a special case of streaming, with event-time semantics, sophisticated windowing, and exactly-once state consistency backed by distributed snapshots. Flink is widely used for low-latency, high-throughput stream processing in real-time analytics, event-driven applications, and continuous data pipelines.
