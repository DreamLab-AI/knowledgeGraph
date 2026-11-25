---
okf_version: "0.2"
type: Class
title: Six Degrees Of Freedom
resource: urn:ngm:class:six-degrees-of-freedom
domain: spatial-computing
description: "Six degrees of freedom (6DoF) describes the full set of ways a rigid body can move in three-dimensional space: translation along three perpendicular axes and rotation about each of them. In spatial computing it characterises tracking systems that capture both an object's position and its orientation. Supporting 6DoF is essential for convincing virtual and augmented reality, robotics and motion-tra"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:tracking-system
requires:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:immersion
dependsOn:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:tracking-system
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
supports:
  - urn:ngm:class:motion-tracking
  - urn:ngm:class:locomotion
  - urn:ngm:class:head-mounted-display
partOf:
  - urn:ngm:class:tracking-system
  - urn:ngm:class:spatial-tracking
relatedTo:
  - urn:ngm:class:spatial-tracking
  - urn:ngm:class:motion-tracking
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Six Degrees Of Freedom

Six degrees of freedom (6DoF) describes the full set of ways a rigid body can move in three-dimensional space: translation along three perpendicular axes and rotation about each of them. In spatial computing it characterises tracking systems that capture both an object's position and its orientation. Supporting 6DoF is essential for convincing virtual and augmented reality, robotics and motion-tracked interaction.
