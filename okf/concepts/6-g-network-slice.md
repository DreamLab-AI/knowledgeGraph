---
okf_version: "0.2"
type: Class
title: 6G Network Slice
resource: urn:ngm:class:6-g-network-slice
domain: infrastructure
description: Virtual partition of 6G infrastructure guaranteeing specified quality-of-service levels for immersive workloads through isolated resource allocation.
maturity: draft
quality: 0.35
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:resource-allocation
  - urn:ngm:class:service-level-agreement
  - urn:ngm:class:qos-policy
  - urn:ngm:class:resource-allocation
  - urn:ngm:class:traffic-classifier
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:network-slicing-orchestrator
  - urn:ngm:class:sdn-controller
enables:
  - urn:ngm:class:resource-allocation
  - urn:ngm:class:guaranteed-bandwidth
  - urn:ngm:class:low-latency-service
  - urn:ngm:class:workload-isolation
  - urn:ngm:class:resource-allocation
---

# 6G Network Slice

Virtual partition of 6G infrastructure guaranteeing specified quality-of-service levels for immersive workloads through isolated resource allocation.
