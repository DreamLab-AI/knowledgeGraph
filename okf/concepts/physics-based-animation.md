---
okf_version: "0.2"
type: Class
title: Physics-Based Animation
resource: urn:ngm:class:physics-based-animation
domain: spatial-computing
description: Animation technique that computes object motion through real-time simulation of physical forces, gravity, collisions, and dynamics to create realistic movement and interactions.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:collision-detection-system
  - urn:ngm:class:constraint-solver
  - urn:ngm:class:physics-simulation-engine
  - urn:ngm:class:force-integrator
requires:
  - urn:ngm:class:animation-controller
  - urn:ngm:class:physics-engine
  - urn:ngm:class:3d-transform-system
enables:
  - urn:ngm:class:cloth-simulation
  - urn:ngm:class:ragdoll-physics
  - urn:ngm:class:dynamic-character-animation
  - urn:ngm:class:particle-systems
dependsOn:
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:soft-body-dynamics
bridgesTo:
  - urn:ngm:class:real-time-rendering
partOf:
  - urn:ngm:class:real-time-rendering-pipeline
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Physics-Based Animation

Animation technique that computes object motion through real-time simulation of physical forces, gravity, collisions, and dynamics to create realistic movement and interactions.
