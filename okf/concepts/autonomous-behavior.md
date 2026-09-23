---
okf_version: "0.2"
type: Class
title: Autonomous Behavior
resource: urn:ngm:class:autonomous-behavior
domain: ai
description: The capacity of an agent, robot, or AI system to select and execute actions in pursuit of goals without continuous human instruction, using internal models of the world, perception of environmental state, and learned or programmed decision policies. Autonomous behaviour spans a continuum from simple reactive reflexes to deliberative planning over extended time horizons.
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:autonomous-operation
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:goal-directed-behavior
hasPart:
  - urn:ngm:class:perception-system
  - urn:ngm:class:planning-module
  - urn:ngm:class:decision-making
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:goal-representation
  - urn:ngm:class:action-selection
  - urn:ngm:class:policy-network
  - urn:ngm:class:world-model
  - urn:ngm:class:execution-monitor
requires:
  - urn:ngm:class:perception-system
  - urn:ngm:class:planning-module
  - urn:ngm:class:reward-function
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:decision-policy
  - urn:ngm:class:world-model
  - urn:ngm:class:goal-representation
  - urn:ngm:class:decision-making
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:agent-based-modelling
dependsOn:
  - urn:ngm:class:perception-system
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:world-model
  - urn:ngm:class:reward-function
  - urn:ngm:class:sensor-fusion
implements:
  - urn:ngm:class:bdi-model
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:subsumption-architecture
  - urn:ngm:class:ooda-loop
  - urn:ngm:class:sense-plan-act-loop
  - urn:ngm:class:hybrid-deliberative-reactive-architecture
contrastsWith:
  - urn:ngm:class:teleoperation
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:supervised-automation
  - urn:ngm:class:rule-based-systems
  - urn:ngm:class:remote-control
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:planning-module
  - urn:ngm:class:behavioral-modeling
  - urn:ngm:class:neural-network
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:task-planning
supports:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:ai-safety
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:swarm-intelligence
standardizedBy:
  - urn:ngm:class:iso-8373
  - urn:ngm:class:ieee-p-7009
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:sae-j-3016
relatedTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:behavioral-modeling
  - urn:ngm:class:goal
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:agent-based-modelling
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:bdi-model
---

# Autonomous Behavior

The capacity of an agent, robot, or AI system to select and execute actions in pursuit of goals without continuous human instruction, using internal models of the world, perception of environmental state, and learned or programmed decision policies. Autonomous behaviour spans a continuum from simple reactive reflexes to deliberative planning over extended time horizons.
