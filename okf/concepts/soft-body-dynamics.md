---
okf_version: "0.2"
type: Class
title: Soft Body Dynamics
resource: urn:ngm:class:soft-body-dynamics
domain: spatial-computing
description: Soft Body Dynamics is the branch of physics simulation concerned with deformable objects — including cloth, flesh, elastic materials, vegetation, and fluids — that change shape in response to forces, collisions, and internal stresses. Unlike rigid body simulation, soft body methods must track per-vertex or per-element deformation states, typically using mass-spring networks, finite element methods
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
enables:
  - urn:ngm:class:game-engine
  - urn:ngm:class:embodied-ai-simulation
  - urn:ngm:class:3-d-animation
uses:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:compute-shader
  - urn:ngm:class:gpu-compute
partOf:
  - urn:ngm:class:physics-simulation
relatedTo:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:fluid-simulation
  - urn:ngm:class:collision-detection
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:dynamic-character-animation
---

# Soft Body Dynamics

Soft Body Dynamics is the branch of physics simulation concerned with deformable objects — including cloth, flesh, elastic materials, vegetation, and fluids — that change shape in response to forces, collisions, and internal stresses. Unlike rigid body simulation, soft body methods must track per-vertex or per-element deformation states, typically using mass-spring networks, finite element methods (FEM), or position-based dynamics (PBD). It is essential for visual fidelity in real-time virtual environments, character animation, and embodied AI simulations.
