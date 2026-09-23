---
okf_version: "0.2"
type: Class
title: Runbook
resource: urn:ngm:class:runbook
domain: infrastructure
description: A runbook is a documented set of procedures for operating, maintaining and recovering a system, giving operators a repeatable sequence of steps for routine tasks and known failure scenarios. Modern runbooks range from human-readable checklists to executable automations that orchestrate remediation directly. They are a core artefact of site reliability engineering, reducing reliance on individual e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:documentation
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:monitoring
enables:
  - urn:ngm:class:incident-management
  - urn:ngm:class:disaster-recovery
uses:
  - urn:ngm:class:automation
  - urn:ngm:class:infrastructure-as-code
supports:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:on-call
  - urn:ngm:class:reliability-engineering
partOf:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:documentation
  - urn:ngm:class:incident-management
---

# Runbook

A runbook is a documented set of procedures for operating, maintaining and recovering a system, giving operators a repeatable sequence of steps for routine tasks and known failure scenarios. Modern runbooks range from human-readable checklists to executable automations that orchestrate remediation directly. They are a core artefact of site reliability engineering, reducing reliance on individual expertise during incidents.
