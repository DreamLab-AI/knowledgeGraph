---
okf_version: "0.2"
type: Class
title: Classical Planning
resource: urn:ngm:class:classical-planning
domain: artificial-intelligence
description: Classical planning is a branch of automated planning that computes a sequence of deterministic actions transforming a fully observable initial state into a state satisfying a goal condition. It assumes a single agent, discrete states, instantaneous actions with deterministic effects, and complete knowledge of the world. Problems are typically expressed in formalisms such as STRIPS or PDDL and solv
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:automated-planning
  - urn:ngm:class:planning-and-scheduling
hasPart:
  - urn:ngm:class:state-space-search
  - urn:ngm:class:heuristic-search
  - urn:ngm:class:strips
  - urn:ngm:class:pddl
  - urn:ngm:class:hierarchical-task-network
requires:
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:formal-logic
  - urn:ngm:class:knowledge-representation
enables:
  - urn:ngm:class:agent
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:task-automation
  - urn:ngm:class:multi-agent-coordination
dependsOn:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:formal-logic
implements:
  - urn:ngm:class:strips
  - urn:ngm:class:pddl
  - urn:ngm:class:a-star-algorithm
contrastsWith:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:reactive-planning
uses:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:graph-search
  - urn:ngm:class:formal-logic
  - urn:ngm:class:sat-solving
supports:
  - urn:ngm:class:game-playing
  - urn:ngm:class:motion-planning
  - urn:ngm:class:logistics-optimisation
  - urn:ngm:class:pathfinding
standardizedBy:
  - urn:ngm:class:pddl
partOf:
  - urn:ngm:class:automated-planning
  - urn:ngm:class:artificial-intelligence
relatedTo:
  - urn:ngm:class:optimisation
  - urn:ngm:class:pathfinding
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:temporal-planning
  - urn:ngm:class:hierarchical-task-network
  - urn:ngm:class:large-language-models
  - urn:ngm:class:a-star-algorithm
---

# Classical Planning

Classical planning is a branch of automated planning that computes a sequence of deterministic actions transforming a fully observable initial state into a state satisfying a goal condition. It assumes a single agent, discrete states, instantaneous actions with deterministic effects, and complete knowledge of the world. Problems are typically expressed in formalisms such as STRIPS or PDDL and solved by heuristic state-space search.
