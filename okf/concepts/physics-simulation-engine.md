---
okf_version: "0.2"
type: Class
title: Physics Simulation Engine
resource: urn:ngm:class:physics-simulation-engine
domain: spatial-computing
description: A physics simulation engine is software that numerically integrates equations of motion over time to compute the movement, collision, and interaction of objects according to physical laws such as Newtonian mechanics, rigid-body dynamics, and contact resolution. It is used in real-time applications (games, XR), offline engineering simulation, and robotics training environments.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:simulation
hasPart:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:collision-detection
  - urn:ngm:class:constraint-solver
  - urn:ngm:class:soft-body-dynamics
  - urn:ngm:class:fluid-simulation
requires:
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:rigid-body-dynamics
enables:
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:digital-twin
  - urn:ngm:class:extended-reality
dependsOn:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:scene-graph
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:digital-twin
  - urn:ngm:class:3-d-engine
uses:
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:spatial-partitioning
supports:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:autonomous-agent
partOf:
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:game-engine
relatedTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:virtual-environment
  - urn:ngm:class:haptic-feedback
---

# Physics Simulation Engine

A physics simulation engine is software that numerically integrates equations of motion over time to compute the movement, collision, and interaction of objects according to physical laws such as Newtonian mechanics, rigid-body dynamics, and contact resolution. It is used in real-time applications (games, XR), offline engineering simulation, and robotics training environments.
