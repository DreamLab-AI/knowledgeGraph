---
okf_version: "0.2"
type: Class
title: Animation Rig
resource: urn:ngm:class:animation-rig
domain: spatial-computing
description: An animation rig is a hierarchical system of bones, controls, and constraints applied to a 3D character or object to enable articulated movement for animation. It abstracts underlying mesh deformation through a control interface that animators manipulate, translating high-level poses into low-level vertex transformations. Rigs range from simple skeletal setups to complex systems incorporating inve
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:skeletal-animation
enables:
  - urn:ngm:class:character-animation
  - urn:ngm:class:procedural-animation
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-capture
relatedTo:
  - urn:ngm:class:3-d-animation
  - urn:ngm:class:mesh-data
---

# Animation Rig

An animation rig is a hierarchical system of bones, controls, and constraints applied to a 3D character or object to enable articulated movement for animation. It abstracts underlying mesh deformation through a control interface that animators manipulate, translating high-level poses into low-level vertex transformations. Rigs range from simple skeletal setups to complex systems incorporating inverse kinematics, blend shapes, and procedural dynamics.
