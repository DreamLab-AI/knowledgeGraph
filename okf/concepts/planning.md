---
okf_version: "0.2"
type: Class
title: Planning
resource: urn:ngm:class:planning
domain: artificial-intelligence
description: Planning is the cognitive and computational process of deliberating over a set of possible actions and selecting a sequence that transforms an initial state into a desired goal state, given a model of how actions change the world. In artificial intelligence, automated planning formalises this problem using state representations, action schemas with preconditions and effects, and search or optimisa
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:automated-planning
hasPart:
  - urn:ngm:class:hierarchical-task-network
  - urn:ngm:class:plan-recognition
  - urn:ngm:class:plan-execution
requires:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:state-space-representation
  - urn:ngm:class:goal-representation
  - urn:ngm:class:knowledge-representation
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:motion-planning
  - urn:ngm:class:decision-making
  - urn:ngm:class:motion-planning
dependsOn:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:reasoning
contrastsWith:
  - urn:ngm:class:reactive-control
  - urn:ngm:class:reinforcement-learning
bridgesTo:
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:multi-agent-system
uses:
  - urn:ngm:class:heuristic-function
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:search-algorithm
partOf:
  - urn:ngm:class:artificial-intelligence
relatedTo:
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:optimisation
  - urn:ngm:class:temporal-reasoning
  - urn:ngm:class:planning-and-scheduling
---

# Planning

Planning is the cognitive and computational process of deliberating over a set of possible actions and selecting a sequence that transforms an initial state into a desired goal state, given a model of how actions change the world. In artificial intelligence, automated planning formalises this problem using state representations, action schemas with preconditions and effects, and search or optimisation algorithms to synthesise executable plans. Planning encompasses both classical deterministic formulations (e.g. STRIPS, PDDL) and richer variants that handle uncertainty, partial observability, continuous time, resources, and preferences. It underpins autonomous agents, robotics, supply-chain management, and any system that must reason prospectively about future action consequences.
