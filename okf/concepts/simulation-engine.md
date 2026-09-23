---
okf_version: "0.2"
type: Class
title: Simulation Engine
resource: urn:ngm:class:simulation-engine
domain: infrastructure
description: "A simulation engine is the computational core responsible for advancing synthetic world state over discrete or continuous time steps, resolving inter-object interactions, enforcing physical or logical constraints, and exposing deterministic replay and instrumentation interfaces. It abstracts heterogeneous hardware (CPU thread pools, GPU compute shaders, distributed clusters) behind a unified loop "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:simulation-software
hasPart:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:collision-detection
  - urn:ngm:class:scene-graph
  - urn:ngm:class:event-loop
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:deterministic-execution
enables:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:synthetic-data-generation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:autonomous-vehicle-testing
contrastsWith:
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:game-engine
bridgesTo:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:metaverse-platform
uses:
  - urn:ngm:class:spatial-partitioning
  - urn:ngm:class:multithreading
  - urn:ngm:class:numerical-integration
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:robotics
  - urn:ngm:class:agent-based-modelling
partOf:
  - urn:ngm:class:simulation-software
  - urn:ngm:class:digital-twin-platform
relatedTo:
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:behaviour-tree
---

# Simulation Engine

A simulation engine is the computational core responsible for advancing synthetic world state over discrete or continuous time steps, resolving inter-object interactions, enforcing physical or logical constraints, and exposing deterministic replay and instrumentation interfaces. It abstracts heterogeneous hardware (CPU thread pools, GPU compute shaders, distributed clusters) behind a unified loop that separates physics integration, collision detection, agent behaviour evaluation, and sensor data generation into composable subsystems. Specialised variants include rigid-body and soft-body physics engines (PhysX, Bullet, Havok), behaviour-simulation engines, robotics simulators (Isaac Sim, Gazebo), and synthetic-data factories used to train and evaluate machine-learning models at scale.
