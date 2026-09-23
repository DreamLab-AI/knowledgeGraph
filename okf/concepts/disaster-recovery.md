---
okf_version: "0.2"
type: Class
title: Disaster Recovery
resource: urn:ngm:class:disaster-recovery
domain: infrastructure
description: Disaster recovery (DR) is the set of policies, tools, and procedures enabling an organisation to restore its IT systems, data, and operations following a disruptive event such as hardware failure, cyberattack, natural disaster, or human error. It is quantified by Recovery Time Objective (RTO) and Recovery Point Objective (RPO), and encompasses backup strategies, replication architectures, and test
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:resilience
hasPart:
  - urn:ngm:class:recovery-time-objective
  - urn:ngm:class:recovery-point-objective
  - urn:ngm:class:failover
requires:
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:replication
  - urn:ngm:class:data-centre
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:business-continuity
dependsOn:
  - urn:ngm:class:redundancy
  - urn:ngm:class:replication
contrastsWith:
  - urn:ngm:class:high-availability
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:security
uses:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:chaos-engineering
relatedTo:
  - urn:ngm:class:resilience-metric
  - urn:ngm:class:incident-response
  - urn:ngm:class:ransomware
---

# Disaster Recovery

Disaster recovery (DR) is the set of policies, tools, and procedures enabling an organisation to restore its IT systems, data, and operations following a disruptive event such as hardware failure, cyberattack, natural disaster, or human error. It is quantified by Recovery Time Objective (RTO) and Recovery Point Objective (RPO), and encompasses backup strategies, replication architectures, and tested failover procedures.
