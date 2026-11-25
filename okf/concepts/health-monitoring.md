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
bridgesTo:
  - urn:ngm:class:fault-detection-isolation-and-recovery
  - urn:ngm:class:spacecraft-housekeeping-data
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Health Monitoring

Health monitoring is the continuous observation of a system's components, services, and dependencies to determine whether they are operating correctly and are able to serve requests. It uses signals such as heartbeats, readiness and liveness probes, resource metrics, and synthetic checks to produce a real-time view of system health. Health monitoring underpins high availability by enabling automated detection of failures and triggering recovery, failover, or load redistribution.
