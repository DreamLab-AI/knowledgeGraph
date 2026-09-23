---
okf_version: "0.2"
type: Class
title: Post Incident Review
resource: urn:ngm:class:post-incident-review
domain: governance
description: A post-incident review is a structured retrospective conducted after an operational incident to establish what happened, why, and how recurrence can be prevented. Conducted in a blameless manner, it reconstructs the timeline, identifies contributing factors through root-cause analysis, and produces tracked corrective actions and durable lessons. It is a core practice of incident management and sit
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:incident-management
hasPart:
  - urn:ngm:class:root-cause-analysis
requires:
  - urn:ngm:class:root-cause-analysis
  - urn:ngm:class:monitoring-system
enables:
  - urn:ngm:class:change-management
  - urn:ngm:class:risk-management
  - urn:ngm:class:reliability
bridgesTo:
  - urn:ngm:class:incident-response
uses:
  - urn:ngm:class:monitoring
  - urn:ngm:class:observability
supports:
  - urn:ngm:class:governance-framework
  - urn:ngm:class:compliance
partOf:
  - urn:ngm:class:incident-management
relatedTo:
  - urn:ngm:class:incident-response
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:reliability-engineering
---

# Post Incident Review

A post-incident review is a structured retrospective conducted after an operational incident to establish what happened, why, and how recurrence can be prevented. Conducted in a blameless manner, it reconstructs the timeline, identifies contributing factors through root-cause analysis, and produces tracked corrective actions and durable lessons. It is a core practice of incident management and site reliability engineering that turns failures into systemic improvement.
