---
okf_version: "0.2"
type: Class
title: Batching
resource: urn:ngm:class:batching
domain: infrastructure
description: Batching is the practice of grouping multiple discrete operations, requests or data items so that they are processed together in a single pass rather than individually. It amortises fixed per-operation overheads such as draw calls, network round trips or kernel launches across many items, improving throughput at the cost of added latency for the items that wait to be grouped. Batching appears thro
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:batch-processing
enables:
  - urn:ngm:class:throughput
partOf:
  - urn:ngm:class:batch-processing
---

# Batching

Batching is the practice of grouping multiple discrete operations, requests or data items so that they are processed together in a single pass rather than individually. It amortises fixed per-operation overheads such as draw calls, network round trips or kernel launches across many items, improving throughput at the cost of added latency for the items that wait to be grouped. Batching appears throughout computing, from GPU rendering (combining draw calls to reduce state changes) to machine learning inference (grouping requests to maximise accelerator utilisation).
