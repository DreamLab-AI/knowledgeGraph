---
okf_version: "0.2"
type: Class
title: Incident Management
resource: urn:ngm:class:incident-management
domain: infrastructure
description: "Incident management is the operational discipline of detecting, responding to, resolving, and learning from unplanned disruptions to a service. It coordinates people and tooling through detection, triage, escalation, mitigation, and recovery, then conducts blameless post-mortems to prevent recurrence. Closely associated with site reliability engineering and ITIL practice, it aims to minimise mean "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:site-reliability-engineering
hasPart:
  - urn:ngm:class:incident-response
  - urn:ngm:class:post-mortem
  - urn:ngm:class:escalation
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
  - urn:ngm:class:on-call
enables:
  - urn:ngm:class:service-level-objective
bridgesTo:
  - urn:ngm:class:site-reliability-engineering
uses:
  - urn:ngm:class:alerting
  - urn:ngm:class:runbook
  - urn:ngm:class:root-cause-analysis
supports:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:itil
  - urn:ngm:class:chaos-engineering
---

# Incident Management

Incident management is the operational discipline of detecting, responding to, resolving, and learning from unplanned disruptions to a service. It coordinates people and tooling through detection, triage, escalation, mitigation, and recovery, then conducts blameless post-mortems to prevent recurrence. Closely associated with site reliability engineering and ITIL practice, it aims to minimise mean time to recovery and protect service-level objectives.
