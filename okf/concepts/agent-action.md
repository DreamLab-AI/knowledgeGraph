---
okf_version: "0.2"
type: Class
title: Agent Action
resource: urn:ngm:class:agent-action
domain: artificial-intelligence
description: "An agent action is a concrete execution event initiated by an agent, producing observable or verifiable consequences.[^1] visionGraph places it under [[Event]]: it depends on an [[Execution Context]] and produces an [[Agent Artefact]]."
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:event
dependsOn:
  - urn:ngm:class:execution-context
relatedTo:
  - urn:ngm:class:agent-trace-event
  - urn:ngm:class:runtime-ledger-event
  - urn:ngm:class:action-type
generated: {"by":"agent:agent-ontology-import/0.1.0","process":"process:agent-ontology-import/0.1.0","at":"2026-10-30T12:00:00Z"}
---

# Agent Action

An agent action is a concrete execution event initiated by an agent, producing observable or verifiable consequences.[^1] visionGraph places it under [[Event]]: it depends on an [[Execution Context]] and produces an [[Agent Artefact]].
