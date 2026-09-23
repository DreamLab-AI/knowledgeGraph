---
okf_version: "0.2"
type: Class
title: Auto-Scaling
resource: urn:ngm:class:auto-scaling
domain: infrastructure
description: Auto-scaling is the automated adjustment of computing capacity in response to observed demand, adding or removing resources to maintain performance and control cost. It uses metrics, policies and controllers to scale horizontally by changing instance counts or vertically by resizing instances. Auto-scaling is foundational to elastic cloud infrastructure, balancing responsiveness against efficiency
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:scalability
hasPart:
  - urn:ngm:class:monitoring
  - urn:ngm:class:resource-allocation
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:capacity-planning
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:resource-management
uses:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:monitoring
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:performance-optimization
relatedTo:
  - urn:ngm:class:orchestration
  - urn:ngm:class:cloud-computing
---

# Auto-Scaling

Auto-scaling is the automated adjustment of computing capacity in response to observed demand, adding or removing resources to maintain performance and control cost. It uses metrics, policies and controllers to scale horizontally by changing instance counts or vertically by resizing instances. Auto-scaling is foundational to elastic cloud infrastructure, balancing responsiveness against efficiency without manual intervention.
