---
okf_version: "0.2"
type: Class
title: Skeletal Rig
resource: urn:ngm:class:skeletal-rig
domain: spatial-computing
description: A skeletal rig is the hierarchy of bones and control structures bound to a 3D model that allows it to be posed and animated. Each bone influences nearby vertices through skinning weights, so that rotating or translating a bone deforms the surrounding mesh in a controlled way. Rigs typically combine forward and inverse kinematics with control handles, enabling animators to drive complex character m
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:3d-modelling
hasPart:
  - urn:ngm:class:vertex-attribute
  - urn:ngm:class:inverse-kinematics
requires:
  - urn:ngm:class:polygon-mesh
enables:
  - urn:ngm:class:character-animation
  - urn:ngm:class:animation
dependsOn:
  - urn:ngm:class:3d-modelling
implements:
  - urn:ngm:class:animation-rig
contrastsWith:
  - urn:ngm:class:uv-mapping
bridgesTo:
  - urn:ngm:class:visual-effects
uses:
  - urn:ngm:class:animation-rig
  - urn:ngm:class:inverse-kinematics
supports:
  - urn:ngm:class:motion-capture
partOf:
  - urn:ngm:class:character-model
relatedTo:
  - urn:ngm:class:character-model
  - urn:ngm:class:digital-asset
---

# Skeletal Rig

A skeletal rig is the hierarchy of bones and control structures bound to a 3D model that allows it to be posed and animated. Each bone influences nearby vertices through skinning weights, so that rotating or translating a bone deforms the surrounding mesh in a controlled way. Rigs typically combine forward and inverse kinematics with control handles, enabling animators to drive complex character motion from a compact set of controls.
