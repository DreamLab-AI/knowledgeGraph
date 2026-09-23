---
okf_version: "0.2"
type: Class
title: Single Point Of Failure
resource: urn:ngm:class:single-point-of-failure
domain: infrastructure
description: A single point of failure is a component, service, or dependency within a system whose failure would cause the entire system to stop functioning, because no redundant alternative exists to take over its role. Identifying and eliminating single points of failure is a central goal of high-availability and fault-tolerant design. Mitigation strategies include redundancy, replication, clustering, and l
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reliability-engineering
requires:
  - urn:ngm:class:health-monitoring
dependsOn:
  - urn:ngm:class:infrastructure
contrastsWith:
  - urn:ngm:class:redundancy
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:high-availability
bridgesTo:
  - urn:ngm:class:load-balancing
supports:
  - urn:ngm:class:monitoring
partOf:
  - urn:ngm:class:reliability-engineering
relatedTo:
  - urn:ngm:class:resilience
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:clustering
---

# Single Point Of Failure

A single point of failure is a component, service, or dependency within a system whose failure would cause the entire system to stop functioning, because no redundant alternative exists to take over its role. Identifying and eliminating single points of failure is a central goal of high-availability and fault-tolerant design. Mitigation strategies include redundancy, replication, clustering, and load balancing so that no individual element is indispensable.
