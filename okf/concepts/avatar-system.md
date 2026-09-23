---
okf_version: "0.2"
type: Class
title: Avatar System
resource: urn:ngm:class:avatar-system
domain: spatial-computing
description: Avatar System is the integrated technical architecture for creating, customizing, animating, and rendering digital representations of users in virtual environments, encompassing character models, animation systems, facial expression rigs, physics simulations, and real-time rendering pipelines.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:sc-content-and-assets
  - urn:ngm:class:virtual-character-system
hasPart:
  - urn:ngm:class:animation-controller
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:level-of-detail
requires:
  - urn:ngm:class:animation-controller
  - urn:ngm:class:3-d-rendering-engine
  - urn:ngm:class:skeletal-mesh
  - urn:ngm:class:input-processing
enables:
  - urn:ngm:class:embodied-presence
  - urn:ngm:class:social-interaction
  - urn:ngm:class:user-representation
  - urn:ngm:class:nonverbal-communication
dependsOn:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:motion-capture
  - urn:ngm:class:facial-tracking
implements:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:physically-based-rendering
contrastsWith:
  - urn:ngm:class:non-player-character
bridgesTo:
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:blend-shape
  - urn:ngm:class:eye-tracking
supports:
  - urn:ngm:class:avatar-customization
  - urn:ngm:class:avatar-interoperability
partOf:
  - urn:ngm:class:virtual-world-platform
  - urn:ngm:class:metaverse-infrastructure
relatedTo:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
---

# Avatar System

Avatar System is the integrated technical architecture for creating, customizing, animating, and rendering digital representations of users in virtual environments, encompassing character models, animation systems, facial expression rigs, physics simulations, and real-time rendering pipelines.
