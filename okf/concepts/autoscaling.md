---
okf_version: "0.2"
type: Class
title: Autoscaling
resource: urn:ngm:class:autoscaling
domain: infrastructure
description: Autoscaling is the automated adjustment of computing resources allocated to an application in response to observed demand, scaling capacity up under load and down when demand falls. It monitors metrics such as utilisation, request rate or queue depth and triggers provisioning or removal of compute instances or containers against defined policies. Autoscaling improves cost efficiency and availabili
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:resource-management
hasPart:
  - urn:ngm:class:monitoring
  - urn:ngm:class:load-balancing
requires:
  - urn:ngm:class:monitoring
  - urn:ngm:class:capacity-planning
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:cloud-computing
implements:
  - urn:ngm:class:infrastructure-as-code
contrastsWith:
  - urn:ngm:class:capacity-planning
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:observability
supports:
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:cloud-native
  - urn:ngm:class:high-availability
partOf:
  - urn:ngm:class:resource-management
relatedTo:
  - urn:ngm:class:microservices
  - urn:ngm:class:load-balancing
  - urn:ngm:class:auto-scaling
---

# Autoscaling

Autoscaling is the automated adjustment of computing resources allocated to an application in response to observed demand, scaling capacity up under load and down when demand falls. It monitors metrics such as utilisation, request rate or queue depth and triggers provisioning or removal of compute instances or containers against defined policies. Autoscaling improves cost efficiency and availability by matching supply to demand without manual intervention.
