---
okf_version: "0.2"
type: Class
title: Multi-Agent Coordination
resource: urn:ngm:class:multi-agent-coordination
domain: artificial-intelligence
description: Multi-agent coordination is the set of mechanisms and protocols by which a population of autonomous agents organise their individual actions, communications, and resource usage to achieve shared or mutually compatible goals without central command. It encompasses task decomposition and allocation, conflict detection and resolution, synchronisation of parallel workstreams, and the design of incenti
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:multi-agent-systems
hasPart:
  - urn:ngm:class:task-allocation
  - urn:ngm:class:negotiation-protocol
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:consensus-mechanism
requires:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:shared-environment
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:distributed-problem-solving
  - urn:ngm:class:emergent-behavior
  - urn:ngm:class:emergent-behavior
dependsOn:
  - urn:ngm:class:game-theory
  - urn:ngm:class:distributed-systems
contrastsWith:
  - urn:ngm:class:centralised-control
  - urn:ngm:class:single-agent-system
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:smart-contract
uses:
  - urn:ngm:class:belief-desire-intention
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:message-passing
supports:
  - urn:ngm:class:robotic-swarm
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:llm-orchestration
  - urn:ngm:class:autonomous-vehicle
partOf:
  - urn:ngm:class:multi-agent-systems
relatedTo:
  - urn:ngm:class:agent-communication-language
  - urn:ngm:class:auction-mechanism
  - urn:ngm:class:plan-merging
---

# Multi-Agent Coordination

Multi-agent coordination is the set of mechanisms and protocols by which a population of autonomous agents organise their individual actions, communications, and resource usage to achieve shared or mutually compatible goals without central command. It encompasses task decomposition and allocation, conflict detection and resolution, synchronisation of parallel workstreams, and the design of incentive structures that align agent behaviour across heterogeneous systems. Coordination differs from simple parallelism in that it requires agents to reason about the intentions and capabilities of peers, adapting their own behaviour accordingly. Contemporary implementations range from classical Distributed Constraint Optimisation Problems (DCOP) to large-language-model orchestration frameworks in which a controller agent delegates subtasks to specialist sub-agents and integrates their outputs.
