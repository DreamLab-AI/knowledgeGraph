---
okf_version: "0.2"
type: Class
title: Zero Downtime Deployment
resource: urn:ngm:class:zero-downtime-deployment
domain: infrastructure
description: Zero Downtime Deployment is a release strategy that updates a running service without interrupting user-facing availability. It relies on patterns such as rolling updates, blue-green switchovers, or canary releases combined with health checks and load-balancer draining so that traffic only reaches instances ready to serve it. Achieving it requires backward-compatible changes, graceful connection s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:continuous-deployment
requires:
  - urn:ngm:class:auto-scaling
  - urn:ngm:class:idempotency
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:continuous-deployment
dependsOn:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:container
implements:
  - urn:ngm:class:continuous-deployment
bridgesTo:
  - urn:ngm:class:orchestration
uses:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:orchestration
supports:
  - urn:ngm:class:resilience
partOf:
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:ci-cd
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:scalability
---

# Zero Downtime Deployment

Zero Downtime Deployment is a release strategy that updates a running service without interrupting user-facing availability. It relies on patterns such as rolling updates, blue-green switchovers, or canary releases combined with health checks and load-balancer draining so that traffic only reaches instances ready to serve it. Achieving it requires backward-compatible changes, graceful connection shutdown, and idempotent operations across the transition.
