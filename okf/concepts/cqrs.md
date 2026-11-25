---
okf_version: "0.2"
type: Class
title: CQRS
resource: urn:ngm:class:cqrs
domain: infrastructure
description: Command Query Responsibility Segregation (CQRS) is a software architecture pattern that separates the model used to update state (commands) from the model used to read state (queries). By using distinct write and read paths, systems can independently optimise, scale, and secure each side, often pairing the write model with event sourcing. It is commonly applied in high-throughput, complex-domain s
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:data-layer
  - urn:ngm:class:crdt
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# CQRS

Command Query Responsibility Segregation (CQRS) is a software architecture pattern that separates the model used to update state (commands) from the model used to read state (queries). By using distinct write and read paths, systems can independently optimise, scale, and secure each side, often pairing the write model with event sourcing. It is commonly applied in high-throughput, complex-domain systems where read and write workloads diverge.
