---
okf_version: "0.2"
type: Class
title: Ragdoll Physics
resource: urn:ngm:class:ragdoll-physics
domain: spatial-computing
description: Ragdoll physics is a procedural animation technique that simulates the limp, physically reactive motion of an articulated character body using a system of rigid bodies connected by constrained joints. Instead of playing pre-authored animation, the character's limbs respond dynamically to gravity, collisions and impulses via a physics engine. It is widely used in games and interactive media to prod
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:physics-based-animation
requires:
  - urn:ngm:class:rigid-body-dynamics
enables:
  - urn:ngm:class:character-animation
dependsOn:
  - urn:ngm:class:physics-simulation
implements:
  - urn:ngm:class:procedural-animation
contrastsWith:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:skeletal-animation
bridgesTo:
  - urn:ngm:class:inverse-kinematics
uses:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:collision-detection
supports:
  - urn:ngm:class:game-engine
partOf:
  - urn:ngm:class:physics-based-animation
relatedTo:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:procedural-animation
  - urn:ngm:class:collision-detection
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Ragdoll Physics

Ragdoll physics is a procedural animation technique that simulates the limp, physically reactive motion of an articulated character body using a system of rigid bodies connected by constrained joints. Instead of playing pre-authored animation, the character's limbs respond dynamically to gravity, collisions and impulses via a physics engine. It is widely used in games and interactive media to produce believable falls, impacts and death animations.
