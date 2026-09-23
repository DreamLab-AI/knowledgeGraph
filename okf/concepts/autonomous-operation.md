---
okf_version: "0.2"
type: Class
title: Autonomous Operation
resource: urn:ngm:class:autonomous-operation
domain: ai
description: "The sustained execution of a system's core functions without ongoing human intervention, encompassing self-monitoring, self-configuration, self-healing, and self-optimisation capabilities that allow the system to maintain operational objectives across varying environmental conditions and failure states. Autonomous operation represents the highest level of system self-sufficiency on the automation "
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:process-automation
hasPart:
  - urn:ngm:class:self-healing-system
  - urn:ngm:class:monitoring-system
  - urn:ngm:class:feedback-control
  - urn:ngm:class:decision-engine
  - urn:ngm:class:perception-module
  - urn:ngm:class:fault-tolerant-control
  - urn:ngm:class:agent-loop
  - urn:ngm:class:mape-k-loop
requires:
  - urn:ngm:class:autonomous-behavior
  - urn:ngm:class:feedback-control
  - urn:ngm:class:perception-module
  - urn:ngm:class:decision-engine
  - urn:ngm:class:fault-tolerant-control
  - urn:ngm:class:operational-design-domain
  - urn:ngm:class:situation-awareness
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:autonomous-mobile-robots
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:process-automation
  - urn:ngm:class:aiops
  - urn:ngm:class:self-healing-system
  - urn:ngm:class:predictive-maintenance
dependsOn:
  - urn:ngm:class:autonomic-computing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:foundation-model
  - urn:ngm:class:tool-use
  - urn:ngm:class:sensor-networks
  - urn:ngm:class:state-estimation
implements:
  - urn:ngm:class:autonomic-computing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:mape-k-loop
  - urn:ngm:class:adaptive-control
contrastsWith:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:supervised-automation
  - urn:ngm:class:manual-control
  - urn:ngm:class:teleoperation
bridgesTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:autonomous-task-execution
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:smart-grid
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:digital-twin
  - urn:ngm:class:distributed-control-system
  - urn:ngm:class:chain-of-thought
  - urn:ngm:class:function-calling
  - urn:ngm:class:agent-memory
supports:
  - urn:ngm:class:functional-safety
  - urn:ngm:class:ai-safety
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:fault-tolerant-control
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:functional-safety
  - urn:ngm:class:iec-61508
  - urn:ngm:class:sae-j-3016
relatedTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:digital-twin
  - urn:ngm:class:aiops
  - urn:ngm:class:distributed-control-system
  - urn:ngm:class:operational-design-domain
  - urn:ngm:class:multi-agent-orchestration
  - urn:ngm:class:prompt-injection
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:graceful-degradation
  - urn:ngm:class:closed-loop-control
---

# Autonomous Operation

The sustained execution of a system's core functions without ongoing human intervention, encompassing self-monitoring, self-configuration, self-healing, and self-optimisation capabilities that allow the system to maintain operational objectives across varying environmental conditions and failure states. Autonomous operation represents the highest level of system self-sufficiency on the automation continuum.
