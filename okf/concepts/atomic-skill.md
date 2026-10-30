---
okf_version: "0.2"
type: Class
title: Atomic Skill
resource: urn:ngm:class:atomic-skill
domain: artificial-intelligence
description: An atomic skill is an "atomic, machine-executable operation with defined parameters", declared as `Skill` in the Agent Ontology's capability module.[^1] The same comment states that a capability "is composed of one or more Skills", and the `hasSkill` property links an [[Agent Capability]] to the skills that implement it.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:agent-action
contrastsWith:
  - urn:ngm:class:agent-skill
partOf:
  - urn:ngm:class:agent-capability
relatedTo:
  - urn:ngm:class:skill-parameter
  - urn:ngm:class:agent-skill
---

# Atomic Skill

An atomic skill is an "atomic, machine-executable operation with defined parameters", declared as `Skill` in the Agent Ontology's capability module.[^1] The same comment states that a capability "is composed of one or more Skills", and the `hasSkill` property links an [[Agent Capability]] to the skills that implement it.
