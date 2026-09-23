---
okf_version: "0.2"
type: Class
title: Animation Controller
resource: urn:ngm:class:animation-controller
domain: spatial-computing
description: An animation controller is a software component that manages the selection, blending, and sequencing of animation clips for a character or object in real-time interactive environments. It typically implements a state machine model in which transitions between animation states are governed by parametric conditions such as velocity, input events, or AI signals. Animation controllers sit between high
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:controller
hasPart:
  - urn:ngm:class:blend-tree
requires:
  - urn:ngm:class:character-rigging
  - urn:ngm:class:animation-clip
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:animation-retargeting
  - urn:ngm:class:procedural-animation
  - urn:ngm:class:motion-matching
dependsOn:
  - urn:ngm:class:physics-engine
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:state-machine
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:blend-tree
  - urn:ngm:class:animation-clip
partOf:
  - urn:ngm:class:game-engine
relatedTo:
  - urn:ngm:class:animation
  - urn:ngm:class:character-animation
  - urn:ngm:class:procedural-animation
  - urn:ngm:class:character-rigging
  - urn:ngm:class:locomotion
  - urn:ngm:class:ragdoll-physics
---

# Animation Controller

An animation controller is a software component that manages the selection, blending, and sequencing of animation clips for a character or object in real-time interactive environments. It typically implements a state machine model in which transitions between animation states are governed by parametric conditions such as velocity, input events, or AI signals. Animation controllers sit between high-level game logic and the low-level skeletal animation runtime, abstracting away the complexity of blend trees, IK passes, and additive layers.
