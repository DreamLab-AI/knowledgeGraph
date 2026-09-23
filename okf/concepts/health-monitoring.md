---
okf_version: "0.2"
type: Class
title: Health Monitoring
resource: urn:ngm:class:health-monitoring
domain: infrastructure
description: Health monitoring is the continuous observation of a system's components, services, and dependencies to determine whether they are operating correctly and are able to serve requests. It uses signals such as heartbeats, readiness and liveness probes, resource metrics, and synthetic checks to produce a real-time view of system health. Health monitoring underpins high availability by enabling automat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:observability
hasPart:
  - urn:ngm:class:metrics
  - urn:ngm:class:alerting
  - urn:ngm:class:telemetry
requires:
  - urn:ngm:class:monitoring
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:incident-response
dependsOn:
  - urn:ngm:class:infrastructure
supports:
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:load-balancing
partOf:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
relatedTo:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:resilience
  - urn:ngm:class:single-point-of-failure
---

# Health Monitoring

Health monitoring is the continuous observation of a system's components, services, and dependencies to determine whether they are operating correctly and are able to serve requests. It uses signals such as heartbeats, readiness and liveness probes, resource metrics, and synthetic checks to produce a real-time view of system health. Health monitoring underpins high availability by enabling automated detection of failures and triggering recovery, failover, or load redistribution.
