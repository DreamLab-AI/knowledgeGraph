---
okf_version: "0.2"
type: Class
title: Animation
resource: urn:ngm:class:animation
domain: spatial-computing
description: Animation is the technique of creating the illusion of movement by rapidly displaying a sequence of static images or by computationally interpolating between keyframe states of a scene or character over time. In digital contexts, animation encompasses skeletal rigging, keyframe interpolation, physics simulation, and procedural generation to produce lifelike motion in real-time or pre-rendered envi
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:animation-technique
hasPart:
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:procedural-animation
  - urn:ngm:class:motion-capture
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:blend-tree
requires:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:character-rigging
enables:
  - urn:ngm:class:presence
  - urn:ngm:class:cinematic-rendering
dependsOn:
  - urn:ngm:class:game-engine
  - urn:ngm:class:physics-simulation
bridgesTo:
  - urn:ngm:class:neural-motion-synthesis
  - urn:ngm:class:generative-ai
uses:
  - urn:ngm:class:animation-controller
  - urn:ngm:class:rendering-engine
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
partOf:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:interactive-media
relatedTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:simulation
---

# Animation

Animation is the technique of creating the illusion of movement by rapidly displaying a sequence of static images or by computationally interpolating between keyframe states of a scene or character over time. In digital contexts, animation encompasses skeletal rigging, keyframe interpolation, physics simulation, and procedural generation to produce lifelike motion in real-time or pre-rendered environments. Modern animation pipelines integrate motion capture data, inverse kinematics, and blend trees to deliver nuanced character performances. Animation is foundational to game engines, virtual reality, film, and interactive simulations.
