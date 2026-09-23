---
okf_version: "0.2"
type: Class
title: Health Check
resource: urn:ngm:class:health-check
domain: distributed-systems
description: A health check is a periodic probe that determines whether a service instance is functioning correctly and able to handle requests. Health checks distinguish between liveness, whether a process is running and should be restarted if not, and readiness, whether it is prepared to receive traffic. Load balancers, orchestrators, and service meshes use health checks to route around failed instances, tri
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:high-availability
hasPart:
  - urn:ngm:class:liveness
enables:
  - urn:ngm:class:auto-scaling
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:graceful-degradation
dependsOn:
  - urn:ngm:class:observability
implements:
  - urn:ngm:class:circuit-breaker
uses:
  - urn:ngm:class:monitoring
  - urn:ngm:class:heartbeat-mechanism
supports:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:service-discovery
  - urn:ngm:class:kubernetes
partOf:
  - urn:ngm:class:high-availability
relatedTo:
  - urn:ngm:class:uptime
  - urn:ngm:class:service-level-agreement
  - urn:ngm:class:microservices
---

# Health Check

A health check is a periodic probe that determines whether a service instance is functioning correctly and able to handle requests. Health checks distinguish between liveness, whether a process is running and should be restarted if not, and readiness, whether it is prepared to receive traffic. Load balancers, orchestrators, and service meshes use health checks to route around failed instances, trigger restarts, and gate traffic, making them a foundational primitive for high availability and self-healing distributed systems.
