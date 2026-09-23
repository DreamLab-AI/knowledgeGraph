---
okf_version: "0.2"
type: Class
title: Swarm Robotics
resource: urn:ngm:class:swarm-robotics
domain: robotics
description: Swarm robotics employs large numbers of simple, autonomous agents that exhibit sophisticated collective behaviours through local interactions and decentralised control without centralised coordination, inspired by biological swarms like ant colonies and bird flocks. Individual robots with limited sensing, computation, and actuation communicate locally with neighbours, creating emergent system-leve
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:robo-robot-type
hasPart:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:robot-sensor
  - urn:ngm:class:inter-robot-communication
requires:
  - urn:ngm:class:decentralized-control
  - urn:ngm:class:distributed-sensing
enables:
  - urn:ngm:class:robot-learning
  - urn:ngm:class:collective-intelligence
  - urn:ngm:class:search-and-rescue-robotics
  - urn:ngm:class:environmental-monitoring
dependsOn:
  - urn:ngm:class:self-organisation
  - urn:ngm:class:fault-tolerance
implements:
  - urn:ngm:class:bio-inspired-robotics
  - urn:ngm:class:emergent-behavior
contrastsWith:
  - urn:ngm:class:centralized-robot-control
  - urn:ngm:class:single-robot-system
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:ros
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:stigmergy
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:robot-sensor
relatedTo:
  - urn:ngm:class:swarm-intelligence
  - urn:ngm:class:particle-swarm-optimization
---

# Swarm Robotics

Swarm robotics employs large numbers of simple, autonomous agents that exhibit sophisticated collective behaviours through local interactions and decentralised control without centralised coordination, inspired by biological swarms like ant colonies and bird flocks. Individual robots with limited sensing, computation, and actuation communicate locally with neighbours, creating emergent system-level intelligence enabling tasks like coordinated navigation, object transport, and environmental sensing that exceed individual capabilities.
