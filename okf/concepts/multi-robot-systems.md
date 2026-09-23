---
okf_version: "0.2"
type: Class
title: Multi-Robot Systems
resource: urn:ngm:class:multi-robot-systems
domain: robotics
description: Multi-robot systems (MRS) are coordinated ensembles of two or more robotic agents that collaborate to accomplish tasks beyond the reach of a single robot, using communication, task allocation, and shared world models. They span architectures from tightly coupled homogeneous fleets to loosely coupled heterogeneous teams where robots with different capabilities complement each other. Key research ch
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:autonomous-system
hasPart:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:swarm-robot
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:task-allocation-mechanism
  - urn:ngm:class:inter-robot-communication
requires:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:distributed-sensing
enables:
  - urn:ngm:class:search-and-rescue-robotics
  - urn:ngm:class:warehouse-automation
  - urn:ngm:class:precision-agriculture
dependsOn:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:sensor-fusion
contrastsWith:
  - urn:ngm:class:single-robot-system
  - urn:ngm:class:teleoperation
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:robotic-control
  - urn:ngm:class:ros
  - urn:ngm:class:consensus-algorithm
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:swarm-robotics
  - urn:ngm:class:fleet-management
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:multi-agent-system
  - urn:ngm:class:human-robot-interaction
---

# Multi-Robot Systems

Multi-robot systems (MRS) are coordinated ensembles of two or more robotic agents that collaborate to accomplish tasks beyond the reach of a single robot, using communication, task allocation, and shared world models. They span architectures from tightly coupled homogeneous fleets to loosely coupled heterogeneous teams where robots with different capabilities complement each other. Key research challenges include task and motion planning, collision avoidance, fault tolerance, and communication bandwidth constraints in dynamic environments. MRS find application in search and rescue, warehouse automation, precision agriculture, and planetary exploration.
