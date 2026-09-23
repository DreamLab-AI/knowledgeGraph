---
okf_version: "0.2"
type: Class
title: Service Level Objective
resource: urn:ngm:class:service-level-objective
domain: infrastructure
description: A service level objective (SLO) is a target value or range for a measurable property of a service, such as availability or latency, that defines the acceptable level of reliability over a stated time window. SLOs are expressed against service level indicators and provide the quantitative basis for engineering decisions, error budgets and the contractual commitments of service level agreements. The
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:site-reliability-engineering
hasPart:
  - urn:ngm:class:latency
requires:
  - urn:ngm:class:observability
enables:
  - urn:ngm:class:reliability
dependsOn:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
bridgesTo:
  - urn:ngm:class:reliability
uses:
  - urn:ngm:class:monitoring
supports:
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:capacity-planning
partOf:
  - urn:ngm:class:site-reliability-engineering
relatedTo:
  - urn:ngm:class:devops
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:distributed-systems
---

# Service Level Objective

A service level objective (SLO) is a target value or range for a measurable property of a service, such as availability or latency, that defines the acceptable level of reliability over a stated time window. SLOs are expressed against service level indicators and provide the quantitative basis for engineering decisions, error budgets and the contractual commitments of service level agreements. They are a cornerstone practice of site reliability engineering, balancing reliability against the pace of change.
