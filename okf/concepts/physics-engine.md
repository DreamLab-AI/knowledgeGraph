---
okf_version: "0.2"
type: Class
title: Physics Engine
resource: urn:ngm:class:physics-engine
domain: spatial-computing
description: Software component that simulates physical interactions, constraints, and dynamics in real-time for virtual environments.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:collision-detection-system
  - urn:ngm:class:constraint-solver
  - urn:ngm:class:particle-system
  - urn:ngm:class:rigid-body-dynamics
requires:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:graphics-api
  - urn:ngm:class:math-library
enables:
  - urn:ngm:class:collision-response
  - urn:ngm:class:kinematic-animation
  - urn:ngm:class:physical-simulation
  - urn:ngm:class:realistic-interaction
dependsOn:
  - urn:ngm:class:3-d-engine
  - urn:ngm:class:animation-system
  - urn:ngm:class:rendering-pipeline
partOf:
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:compute-layer
  - urn:ngm:class:game-engine
  - urn:ngm:class:virtual-world
---

# Physics Engine

Software component that simulates physical interactions, constraints, and dynamics in real-time for virtual environments.
