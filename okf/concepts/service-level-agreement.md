---
okf_version: "0.2"
type: Class
title: Service Level Agreement
resource: urn:ngm:class:service-level-agreement
domain: infrastructure
description: A service level agreement (SLA) is a formal contract between a service provider and its customers that defines the measurable level of service to be delivered, including availability, performance, and response-time targets, together with the remedies or credits owed when those targets are breached. SLAs translate abstract reliability expectations into quantitative service level objectives and indi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:high-availability
hasPart:
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:service-level-indicator
  - urn:ngm:class:service-credit
requires:
  - urn:ngm:class:uptime-measurement
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:accountability
dependsOn:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
implements:
  - urn:ngm:class:contractual-obligation
contrastsWith:
  - urn:ngm:class:best-effort-service
bridgesTo:
  - urn:ngm:class:error-budget
  - urn:ngm:class:site-reliability-engineering
uses:
  - urn:ngm:class:metrics
supports:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:managed-services
partOf:
  - urn:ngm:class:service-management
relatedTo:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:capacity-planning
---

# Service Level Agreement

A service level agreement (SLA) is a formal contract between a service provider and its customers that defines the measurable level of service to be delivered, including availability, performance, and response-time targets, together with the remedies or credits owed when those targets are breached. SLAs translate abstract reliability expectations into quantitative service level objectives and indicators that can be monitored and enforced. They are central to cloud computing, managed services, and outsourcing, providing the accountability framework around which capacity, support, and operational practices are organised.
