---
okf_version: "0.2"
type: Class
title: Blend Shape
resource: urn:ngm:class:blend-shape
domain: spatial-computing
description: A blend shape, also called a morph target, is a stored deformation of a 3D mesh that is blended with a base shape by a weighted interpolation of vertex positions. By combining multiple blend shapes at varying weights, animators produce smooth transitions between expressions and poses without altering the mesh topology. Blend shapes are central to facial animation, where subtle muscle movements are
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:facial-animation
hasPart:
  - urn:ngm:class:point-cloud
enables:
  - urn:ngm:class:facial-animation
  - urn:ngm:class:character-animation
contrastsWith:
  - urn:ngm:class:skeletal-animation
uses:
  - urn:ngm:class:animation-rig
  - urn:ngm:class:skeletal-animation
supports:
  - urn:ngm:class:avatar
  - urn:ngm:class:real-time-rendering
partOf:
  - urn:ngm:class:animation
relatedTo:
  - urn:ngm:class:facial-animation
  - urn:ngm:class:character-animation
  - urn:ngm:class:avatar
---

# Blend Shape

A blend shape, also called a morph target, is a stored deformation of a 3D mesh that is blended with a base shape by a weighted interpolation of vertex positions. By combining multiple blend shapes at varying weights, animators produce smooth transitions between expressions and poses without altering the mesh topology. Blend shapes are central to facial animation, where subtle muscle movements are captured as named targets driven by animation rigs or performance capture.
