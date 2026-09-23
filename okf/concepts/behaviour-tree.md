---
okf_version: "0.2"
type: Class
title: Behaviour Tree
resource: urn:ngm:class:behaviour-tree
domain: ai
description: A Behaviour Tree (BT) is a hierarchical, directed acyclic graph structure used to model the decision-making logic of autonomous agents, non-player characters (NPCs), and robots. Internal nodes represent control-flow composites — Sequence, Selector, Parallel, and Decorator — while leaf nodes represent atomic Actions or Conditions; execution propagates through the tree and each node returns Success,
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:automated-planning
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:reactive-systems
  - urn:ngm:class:control-architecture
  - urn:ngm:class:agent-architecture
  - urn:ngm:class:decision-making
hasPart:
  - urn:ngm:class:blackboard
  - urn:ngm:class:sequence-node
  - urn:ngm:class:selector-node
  - urn:ngm:class:parallel-node
  - urn:ngm:class:decorator-node
  - urn:ngm:class:action-node
  - urn:ngm:class:condition-node
  - urn:ngm:class:tick-loop
  - urn:ngm:class:port-system
requires:
  - urn:ngm:class:task-planning
  - urn:ngm:class:blackboard
  - urn:ngm:class:tick-loop
  - urn:ngm:class:state-space
  - urn:ngm:class:sensor-input
  - urn:ngm:class:world-model
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:npc-interaction
  - urn:ngm:class:intelligent-npc
  - urn:ngm:class:ai-game-agent
  - urn:ngm:class:mission-execution
  - urn:ngm:class:robot-navigation
  - urn:ngm:class:task-execution
  - urn:ngm:class:recovery-behaviour
  - urn:ngm:class:concurrent-task-execution
dependsOn:
  - urn:ngm:class:pathfinding-algorithm
  - urn:ngm:class:motion-planning
  - urn:ngm:class:sensor-input
  - urn:ngm:class:world-model
  - urn:ngm:class:task-and-motion-planning
implements:
  - urn:ngm:class:modular-behaviour-composition
  - urn:ngm:class:reactive-control
  - urn:ngm:class:hierarchical-task-decomposition
  - urn:ngm:class:interrupt-driven-control
  - urn:ngm:class:asynchronous-execution
contrastsWith:
  - urn:ngm:class:state-machine
  - urn:ngm:class:finite-state-machine
  - urn:ngm:class:hierarchical-task-network
  - urn:ngm:class:teleo-reactive-program
  - urn:ngm:class:subsumption-architecture
  - urn:ngm:class:belief-desire-intention
  - urn:ngm:class:decision-tree
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:large-language-model
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:explainable-ai
uses:
  - urn:ngm:class:pathfinding-algorithm
  - urn:ngm:class:ai-agents
  - urn:ngm:class:goal-oriented-action-planning
  - urn:ngm:class:blackboard
  - urn:ngm:class:pddl
  - urn:ngm:class:motion-planning
  - urn:ngm:class:perception-module
supports:
  - urn:ngm:class:game-engine
  - urn:ngm:class:game-development
  - urn:ngm:class:ros
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:swarm-robotics
  - urn:ngm:class:manufacturing-automation
standardizedBy:
  - urn:ngm:class:behaviortree-cpp
  - urn:ngm:class:nav2
  - urn:ngm:class:unreal-engine-ai
  - urn:ngm:class:py-trees
relatedTo:
  - urn:ngm:class:nav2
  - urn:ngm:class:intelligent-npc
  - urn:ngm:class:ai-game-agent
  - urn:ngm:class:automated-planning
  - urn:ngm:class:teleo-reactive-program
  - urn:ngm:class:belief-desire-intention
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:formal-verification
---

# Behaviour Tree

A Behaviour Tree (BT) is a hierarchical, directed acyclic graph structure used to model the decision-making logic of autonomous agents, non-player characters (NPCs), and robots. Internal nodes represent control-flow composites — Sequence, Selector, Parallel, and Decorator — while leaf nodes represent atomic Actions or Conditions; execution propagates through the tree and each node returns Success, Failure, or Running to its parent. Behaviour Trees superseded Finite State Machines (FSMs) in many game and robotics contexts because they offer superior modularity, reusability, and comprehensibility: sub-trees encapsulate coherent behaviours that can be composed without explicit inter-state transition wiring. First popularised in the game-development community circa 2005 and later formalised in robotics frameworks such as BehaviorTree.CPP, BTs are now a standard control architecture in both real-time interactive media and autonomous robotic systems.
