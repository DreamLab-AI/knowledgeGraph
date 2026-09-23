---
okf_version: "0.2"
type: Class
title: Strong Consistency
resource: urn:ngm:class:strong-consistency
domain: distributed-systems
description: Strong consistency is a property of a distributed data system in which every read returns the result of the most recently completed write, so that all clients observe a single, up-to-date view of the data. It typically corresponds to linearizability, where operations appear to take effect instantaneously at some point between their invocation and response. Achieving strong consistency requires coo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:consensus
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:quorum
enables:
  - urn:ngm:class:linearizability
  - urn:ngm:class:state-machine-replication
dependsOn:
  - urn:ngm:class:total-order-broadcast
contrastsWith:
  - urn:ngm:class:eventual-consistency
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:raft
  - urn:ngm:class:paxos
relatedTo:
  - urn:ngm:class:cap-theorem
  - urn:ngm:class:replication
---

# Strong Consistency

Strong consistency is a property of a distributed data system in which every read returns the result of the most recently completed write, so that all clients observe a single, up-to-date view of the data. It typically corresponds to linearizability, where operations appear to take effect instantaneously at some point between their invocation and response. Achieving strong consistency requires coordination such as consensus and, under the CAP theorem, trades availability for consistency during network partitions.
