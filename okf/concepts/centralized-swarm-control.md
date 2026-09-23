---
okf_version: "0.2"
type: Class
title: Centralized Swarm Control
resource: urn:ngm:class:centralized-swarm-control
domain: robotics
description: Swarm robotics control architecture where a central controller coordinates all robot agents, providing global optimisation but creating a single point of failure.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:control-system
  - urn:ngm:class:swarm-control
  - urn:ngm:class:robotics
  - urn:ngm:class:centralized-control-architecture
hasPart:
  - urn:ngm:class:communication-network
  - urn:ngm:class:central-controller
  - urn:ngm:class:global-state-model
requires:
  - urn:ngm:class:computational-resources
  - urn:ngm:class:inter-agent-communication
  - urn:ngm:class:synchronised-timing
enables:
  - urn:ngm:class:global-task-optimisation
  - urn:ngm:class:coordinated-swarm-behaviour
  - urn:ngm:class:centralised-monitoring
bridgesTo:
  - urn:ngm:class:swarm-control
  - urn:ngm:class:decentralized-swarm-control
  - urn:ngm:class:hierarchical-control-systems
---

# Centralized Swarm Control

Swarm robotics control architecture where a central controller coordinates all robot agents, providing global optimisation but creating a single point of failure.
