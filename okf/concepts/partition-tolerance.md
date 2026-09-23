---
okf_version: "0.2"
type: Class
title: Partition Tolerance
resource: urn:ngm:class:partition-tolerance
domain: distributed-systems
description: "The property of a distributed system that allows it to continue operating correctly when the network splits into components that cannot communicate with one another, so that messages between nodes are arbitrarily delayed or lost. As the P in the CAP theorem, partition tolerance is effectively mandatory over real networks, forcing designers to choose during a partition between refusing requests to "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:fault-tolerance
partOf:
  - urn:ngm:class:cap-theorem
relatedTo:
  - urn:ngm:class:eventual-consistency
  - urn:ngm:class:consistency-model
  - urn:ngm:class:replication-protocol
---

# Partition Tolerance

The property of a distributed system that allows it to continue operating correctly when the network splits into components that cannot communicate with one another, so that messages between nodes are arbitrarily delayed or lost. As the P in the CAP theorem, partition tolerance is effectively mandatory over real networks, forcing designers to choose during a partition between refusing requests to preserve consistency and serving them to preserve availability at the cost of divergent replicas.
