---
okf_version: "0.2"
type: Class
title: Skeletal Animation
resource: urn:ngm:class:skeletal-animation
domain: spatial-computing
description: Skeletal animation is a character animation technique in which a hierarchical rig of joints defines the articulated structure of a character or creature, and mesh vertices are deformed by the weighted influence of surrounding joints through a process known as skinning. Artists author motion by keyframing or procedurally driving joint transforms over time; the underlying mesh deforms accordingly in
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:character-animation
hasPart:
  - urn:ngm:class:character-rigging
  - urn:ngm:class:animation-state-machine
  - urn:ngm:class:blend-tree
  - urn:ngm:class:linear-blend-skinning
requires:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:avatar-animation
  - urn:ngm:class:real-time-character-animation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:facial-animation
  - urn:ngm:class:virtual-production
bridgesTo:
  - urn:ngm:class:neural-motion-synthesis
  - urn:ngm:class:digital-twin
  - urn:ngm:class:biomechanical-simulation
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-capture
  - urn:ngm:class:animation-retargeting
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:vertex-shader
standardizedBy:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:gltf-standard
relatedTo:
  - urn:ngm:class:physics-based-animation
  - urn:ngm:class:procedural-animation
  - urn:ngm:class:gl-tf-3-d-file-format
  - urn:ngm:class:animation-controller
  - urn:ngm:class:morph-target-animation
  - urn:ngm:class:level-of-detail
---

# Skeletal Animation

Skeletal animation is a character animation technique in which a hierarchical rig of joints defines the articulated structure of a character or creature, and mesh vertices are deformed by the weighted influence of surrounding joints through a process known as skinning. Artists author motion by keyframing or procedurally driving joint transforms over time; the underlying mesh deforms accordingly in real time on the GPU via linear blend skinning or dual-quaternion skinning. The approach is the dominant method for animating characters in games, virtual reality, film visual effects, and virtual avatar systems due to its runtime efficiency, compact data representation, and amenability to motion capture retargeting and machine-learning-driven synthesis.
