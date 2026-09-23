---
okf_version: "0.2"
type: Class
title: Business Continuity
resource: urn:ngm:class:business-continuity
domain: infrastructure
description: Business continuity is the discipline of ensuring that an organisation's critical functions can continue, or be rapidly restored, during and after a disruptive event such as an outage, disaster, or cyber-incident. It combines planning, redundancy, recovery procedures, and testing to limit downtime and data loss against defined objectives. In technical infrastructure it is realised through high ava
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:resilience
requires:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:redundancy
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:operational-resilience
dependsOn:
  - urn:ngm:class:infrastructure
contrastsWith:
  - urn:ngm:class:disaster-recovery
uses:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:service-level-agreement
supports:
  - urn:ngm:class:incident-response
partOf:
  - urn:ngm:class:risk-management
  - urn:ngm:class:operational-resilience
relatedTo:
  - urn:ngm:class:resilience
  - urn:ngm:class:risk-management
  - urn:ngm:class:high-availability
---

# Business Continuity

Business continuity is the discipline of ensuring that an organisation's critical functions can continue, or be rapidly restored, during and after a disruptive event such as an outage, disaster, or cyber-incident. It combines planning, redundancy, recovery procedures, and testing to limit downtime and data loss against defined objectives. In technical infrastructure it is realised through high availability, disaster recovery, fault tolerance, and resilient architecture, and is closely coupled with risk management.
