---
okf_version: "0.2"
type: Class
title: Distributed Databases
resource: urn:ngm:class:distributed-databases
domain: data
description: A distributed database stores and manages data across multiple networked nodes, presenting a unified logical database while partitioning and replicating data for scale and resilience. It must reconcile the trade-offs of the CAP theorem, choosing among strong consistency, availability, and partition tolerance through consensus, quorum, or conflict-resolution strategies. It underpins large-scale app
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:crdt
  - urn:ngm:class:distributed-computing
---

# Distributed Databases

A distributed database stores and manages data across multiple networked nodes, presenting a unified logical database while partitioning and replicating data for scale and resilience. It must reconcile the trade-offs of the CAP theorem, choosing among strong consistency, availability, and partition tolerance through consensus, quorum, or conflict-resolution strategies. It underpins large-scale applications that exceed the capacity or fault-tolerance limits of a single server.
