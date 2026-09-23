---
okf_version: "0.2"
type: Class
title: Contact Mechanics
resource: urn:ngm:class:contact-mechanics
domain: robotics
description: Contact mechanics is the study of the forces, deformations, and motions that arise when solid bodies touch and interact at their surfaces. It models phenomena such as normal contact forces, friction, adhesion, and local deformation, and provides the constitutive laws that govern how bodies push against, stick to, and slide over one another. In robotics it is essential for grasping, manipulation, l
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:physics-simulation
requires:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:friction
enables:
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:grasping
dependsOn:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:collision-detection
contrastsWith:
  - urn:ngm:class:rigid-body-dynamics
uses:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:physics-engine
supports:
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:soft-robotics
partOf:
  - urn:ngm:class:physics-simulation
relatedTo:
  - urn:ngm:class:friction
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:rigid-body-dynamics
---

# Contact Mechanics

Contact mechanics is the study of the forces, deformations, and motions that arise when solid bodies touch and interact at their surfaces. It models phenomena such as normal contact forces, friction, adhesion, and local deformation, and provides the constitutive laws that govern how bodies push against, stick to, and slide over one another. In robotics it is essential for grasping, manipulation, locomotion, and physical simulation.
