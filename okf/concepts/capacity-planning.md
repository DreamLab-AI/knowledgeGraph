---
okf_version: "0.2"
type: Class
title: Capacity Planning
resource: urn:ngm:class:capacity-planning
domain: infrastructure
description: Capacity planning is the process of determining the production, infrastructure, or service capacity required by an organisation to meet changing demand over a defined time horizon, balancing the cost of over-provisioned resources against the risk of under-provisioned systems that cannot meet service-level objectives. In technology contexts, capacity planning encompasses compute, storage, network b
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:cloud-infrastructure
requires:
  - urn:ngm:class:performance-monitoring
  - urn:ngm:class:workload-management
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:resource-optimisation
dependsOn:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:observability
contrastsWith:
  - urn:ngm:class:reactive-scaling
bridgesTo:
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:carbon-aware-computing
uses:
  - urn:ngm:class:demand-forecasting
  - urn:ngm:class:queuing-theory
  - urn:ngm:class:time-series-analysis
  - urn:ngm:class:utilisation-monitoring
supports:
  - urn:ngm:class:finops
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:cost-optimisation
relatedTo:
  - urn:ngm:class:cloud-native
  - urn:ngm:class:scalability-pattern
  - urn:ngm:class:autoscaling
  - urn:ngm:class:kubernetes
---

# Capacity Planning

Capacity planning is the process of determining the production, infrastructure, or service capacity required by an organisation to meet changing demand over a defined time horizon, balancing the cost of over-provisioned resources against the risk of under-provisioned systems that cannot meet service-level objectives. In technology contexts, capacity planning encompasses compute, storage, network bandwidth, and human resources, employing demand forecasting models, utilisation metrics, and growth projections to derive procurement and scaling roadmaps. In manufacturing, the same principles apply to machine-hours, floor space, and workforce shifts.
