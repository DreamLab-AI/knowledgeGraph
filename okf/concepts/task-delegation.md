---
okf_version: "0.2"
type: Class
title: Task Delegation
resource: urn:ngm:class:task-delegation
domain: artificial-intelligence
description: "Task Delegation is the mechanism by which an agent assigns a sub-task to another agent or tool deemed more capable, available or specialised for that work. In multi-agent and agentic systems it underpins division of labour, allowing a coordinating agent to decompose a goal and route components to subordinate executors. Effective delegation requires shared task representation, capability awareness "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:multi-agent-system
requires:
  - urn:ngm:class:agent-communication-language
enables:
  - urn:ngm:class:multi-agent-coordination
  - urn:ngm:class:workflow-orchestration
dependsOn:
  - urn:ngm:class:autonomous-agent
contrastsWith:
  - urn:ngm:class:autonomous-agent
bridgesTo:
  - urn:ngm:class:workflow-orchestration
uses:
  - urn:ngm:class:inter-agent-communication
supports:
  - urn:ngm:class:decision-making
partOf:
  - urn:ngm:class:multi-agent-system
relatedTo:
  - urn:ngm:class:task-allocation
  - urn:ngm:class:multi-agent-coordination
---

# Task Delegation

Task Delegation is the mechanism by which an agent assigns a sub-task to another agent or tool deemed more capable, available or specialised for that work. In multi-agent and agentic systems it underpins division of labour, allowing a coordinating agent to decompose a goal and route components to subordinate executors. Effective delegation requires shared task representation, capability awareness and result aggregation.
