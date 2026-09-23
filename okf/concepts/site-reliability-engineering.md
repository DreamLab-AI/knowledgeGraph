---
okf_version: "0.2"
type: Class
title: Site Reliability Engineering
resource: urn:ngm:class:site-reliability-engineering
domain: infrastructure
description: Site Reliability Engineering (SRE) is a discipline that applies software engineering principles and practices to operations work, treating infrastructure management and service reliability as software problems to be solved through automation, measurement, and iterative improvement. Originating at Google in the early 2000s, SRE defines explicit reliability targets via Service Level Objectives, mana
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:reliability-engineering
hasPart:
  - urn:ngm:class:service-level-objective
  - urn:ngm:class:error-budget
  - urn:ngm:class:toil-reduction
  - urn:ngm:class:postmortem
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
  - urn:ngm:class:incident-management
enables:
  - urn:ngm:class:high-availability
  - urn:ngm:class:scalability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:software-engineering
contrastsWith:
  - urn:ngm:class:devops
  - urn:ngm:class:itil
bridgesTo:
  - urn:ngm:class:aiops
  - urn:ngm:class:machine-learning-operations
uses:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:chaos-engineering
  - urn:ngm:class:distributed-tracing
relatedTo:
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:service-mesh
  - urn:ngm:class:kubernetes
---

# Site Reliability Engineering

Site Reliability Engineering (SRE) is a discipline that applies software engineering principles and practices to operations work, treating infrastructure management and service reliability as software problems to be solved through automation, measurement, and iterative improvement. Originating at Google in the early 2000s, SRE defines explicit reliability targets via Service Level Objectives, manages risk through error budgets, and uses observability tooling to maintain confidence in production systems. SRE practitioners reduce operational toil through systematic automation, implement incident management processes, and balance the competing demands of feature velocity and system stability. The discipline formalises the role of the operations engineer as a software engineer who designs for reliability, scalability, and maintainability from the outset.
