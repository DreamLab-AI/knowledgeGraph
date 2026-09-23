---
okf_version: "0.2"
type: Class
title: Traffic Management
resource: urn:ngm:class:traffic-management
domain: infrastructure
description: Traffic management is the set of techniques for controlling the flow of data across a network to optimise performance, fairness, and reliability. It encompasses traffic shaping, rate limiting, prioritisation, congestion control, and load distribution, applied at routers, gateways, and application proxies. By regulating how bandwidth is allocated and how bursts are smoothed, traffic management upho
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:traffic-shaping
  - urn:ngm:class:rate-limiting
enables:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:graceful-degradation
dependsOn:
  - urn:ngm:class:monitoring
uses:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:bandwidth-adaptation
supports:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:high-availability
  - urn:ngm:class:service-level-agreement
partOf:
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:latency
  - urn:ngm:class:throughput
  - urn:ngm:class:smart-city
---

# Traffic Management

Traffic management is the set of techniques for controlling the flow of data across a network to optimise performance, fairness, and reliability. It encompasses traffic shaping, rate limiting, prioritisation, congestion control, and load distribution, applied at routers, gateways, and application proxies. By regulating how bandwidth is allocated and how bursts are smoothed, traffic management upholds quality-of-service guarantees, protects services from overload, and improves overall utilisation of finite network capacity.
