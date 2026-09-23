---
okf_version: "0.2"
type: Class
title: Operational Resilience
resource: urn:ngm:class:operational-resilience
domain: infrastructure
description: Operational Resilience is the organisational and technical capacity to anticipate, prepare for, withstand, recover from, and adapt to disruptions—whether caused by cyber-attacks, infrastructure failures, natural disasters, or human error—while maintaining continuity of critical business services within pre-defined impact tolerances. It extends traditional Business Continuity Management and Disaste
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:resilience
requires:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:high-availability
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:incident-response
  - urn:ngm:class:disaster-recovery
enables:
  - urn:ngm:class:business-continuity
  - urn:ngm:class:reliability
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:reliability
dependsOn:
  - urn:ngm:class:redundancy
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:monitoring-and-observability
implements:
  - urn:ngm:class:dora-regulation
  - urn:ngm:class:iso-22301
contrastsWith:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:business-continuity-planning
bridgesTo:
  - urn:ngm:class:aiops
  - urn:ngm:class:distributed-systems
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:iso-27001
relatedTo:
  - urn:ngm:class:compliance-framework
  - urn:ngm:class:supply-chain
  - urn:ngm:class:third-party-risk-management
  - urn:ngm:class:service-level-agreement
  - urn:ngm:class:supply-chain
  - urn:ngm:class:cyber-risk
---

# Operational Resilience

Operational Resilience is the organisational and technical capacity to anticipate, prepare for, withstand, recover from, and adapt to disruptions—whether caused by cyber-attacks, infrastructure failures, natural disasters, or human error—while maintaining continuity of critical business services within pre-defined impact tolerances. It extends traditional Business Continuity Management and Disaster Recovery by demanding that organisations identify their most important business services, quantify the maximum tolerable disruption for each, and validate end-to-end resilience through realistic scenario testing. Regulatory frameworks such as the Bank of England's Supervisory Statement SS1/21, the EU Digital Operational Resilience Act (DORA), and NIST SP 800-160 Vol. 2 have transformed operational resilience from a best-practice aspiration into a legal compliance obligation. Technically it is realised through layered redundancy, fault-tolerant architectures, chaos engineering disciplines, and automated recovery orchestration.
