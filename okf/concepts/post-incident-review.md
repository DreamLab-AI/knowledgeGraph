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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Post Incident Review

A post-incident review is a structured retrospective conducted after an operational incident to establish what happened, why, and how recurrence can be prevented. Conducted in a blameless manner, it reconstructs the timeline, identifies contributing factors through root-cause analysis, and produces tracked corrective actions and durable lessons. It is a core practice of incident management and site reliability engineering that turns failures into systemic improvement.
