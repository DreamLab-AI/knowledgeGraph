---
okf_version: "0.2"
type: Class
title: Multi-Agent System
resource: urn:ngm:class:multi-agent-system
domain: ai
description: A Multi-Agent System (MAS) is a computational architecture in which multiple autonomous agents — each equipped with local perception, internal state, and independent decision-making capability — interact within a shared environment to accomplish individual or collective objectives. Coordination emerges from direct communication, environmental signalling, stigmergy, or market-like auction mechanism
maturity: established
quality: 0.76
is-a:
  - urn:ngm:class:ai-research-area
hasPart:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:coordination-protocol
  - urn:ngm:class:agent-environment
requires:
  - urn:ngm:class:agent-communication-language
  - urn:ngm:class:ontology
  - urn:ngm:class:message-passing
enables:
  - urn:ngm:class:swarm-robotics
  - urn:ngm:class:collective-decision-making
  - urn:ngm:class:software-engineering-agents
  - urn:ngm:class:emergent-behavior
  - urn:ngm:class:software-engineering-agents
  - urn:ngm:class:emergent-behavior
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:concurrency
implements:
  - urn:ngm:class:contract-net-protocol
  - urn:ngm:class:fipa-acl
contrastsWith:
  - urn:ngm:class:centralised-ai
  - urn:ngm:class:agent
  - urn:ngm:class:agent
bridgesTo:
  - urn:ngm:class:decentralised-autonomous-organisation
  - urn:ngm:class:peer-to-peer-network
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:multi-agent-reinforcement-learning
  - urn:ngm:class:large-language-model
  - urn:ngm:class:game-theory
supports:
  - urn:ngm:class:warehouse-automation
  - urn:ngm:class:smart-grid
  - urn:ngm:class:algorithmic-trading
standardizedBy:
  - urn:ngm:class:fipa
relatedTo:
  - urn:ngm:class:emergence
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:agent-based-modelling
---

# Multi-Agent System

A Multi-Agent System (MAS) is a computational architecture in which multiple autonomous agents — each equipped with local perception, internal state, and independent decision-making capability — interact within a shared environment to accomplish individual or collective objectives. Coordination emerges from direct communication, environmental signalling, stigmergy, or market-like auction mechanisms, without requiring any single agent to hold global knowledge or exert centralised control. MAS formalises distributed problem-solving by composing heterogeneous or homogeneous agent populations whose aggregate behaviour frequently exhibits emergence — properties absent in any individual agent. The paradigm spans robotics swarms, AI orchestration pipelines, financial market simulation, smart-grid balancing, and autonomous software engineering.
