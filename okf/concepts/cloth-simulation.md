---
okf_version: "0.2"
type: Class
title: Cloth Simulation
resource: urn:ngm:class:cloth-simulation
domain: metaverse
description: Cloth Simulation is the computational modelling of textile deformation and dynamics, representing fabric as a mesh of particles connected by spring constraints (stretch, shear, and bend) or by a continuum-mechanics model, and integrating the equations of motion to produce plausible cloth behaviour under gravity, wind, collision, and user interaction. The particle-spring model, popularised by Provo
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:physics-simulation
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:dynamic-character-animation
uses:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:animation-technique
supports:
  - urn:ngm:class:game-development
  - urn:ngm:class:simulation-software
relatedTo:
  - urn:ngm:class:soft-body-dynamics
  - urn:ngm:class:rigid-body
  - urn:ngm:class:particle-system
---

# Cloth Simulation

Cloth Simulation is the computational modelling of textile deformation and dynamics, representing fabric as a mesh of particles connected by spring constraints (stretch, shear, and bend) or by a continuum-mechanics model, and integrating the equations of motion to produce plausible cloth behaviour under gravity, wind, collision, and user interaction. The particle-spring model, popularised by Provot (1995), remains prevalent in real-time applications; more accurate results for offline rendering use finite-element or position-based dynamics (PBD) methods. Collision detection and response against rigid bodies and self-collision are the principal computational bottlenecks, requiring spatial acceleration structures such as bounding volume hierarchies. Cloth simulation is a sub-discipline of physically based animation used in character clothing, flag animation, curtains, and virtual fashion design within game engines, VFX pipelines, and metaverse avatar systems.
