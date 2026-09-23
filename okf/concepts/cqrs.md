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
---

# CQRS

Command Query Responsibility Segregation (CQRS) is a software architecture pattern that separates the model used to update state (commands) from the model used to read state (queries). By using distinct write and read paths, systems can independently optimise, scale, and secure each side, often pairing the write model with event sourcing. It is commonly applied in high-throughput, complex-domain systems where read and write workloads diverge.
