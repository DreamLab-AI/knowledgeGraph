---
okf_version: "0.2"
type: Class
title: Keyframe Animation
resource: urn:ngm:class:keyframe-animation
domain: spatial-computing
description: Keyframe animation is a technique in which an animator specifies an object's properties at a set of significant frames, called keyframes, and the system interpolates the in-between frames automatically. Property values such as position, rotation, and scale are stored on timed curves whose interpolation and easing control the motion between keys. It is a foundational method for authoring determinis
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:animation
hasPart:
  - urn:ngm:class:interpolation
requires:
  - urn:ngm:class:interpolation
enables:
  - urn:ngm:class:skeletal-animation
implements:
  - urn:ngm:class:animation
contrastsWith:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:procedural-generation
bridgesTo:
  - urn:ngm:class:skeletal-animation
uses:
  - urn:ngm:class:interpolation
supports:
  - urn:ngm:class:rendering
  - urn:ngm:class:computer-graphics
partOf:
  - urn:ngm:class:animation
relatedTo:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:usd
  - urn:ngm:class:spatial-computing
---

# Keyframe Animation

Keyframe animation is a technique in which an animator specifies an object's properties at a set of significant frames, called keyframes, and the system interpolates the in-between frames automatically. Property values such as position, rotation, and scale are stored on timed curves whose interpolation and easing control the motion between keys. It is a foundational method for authoring deterministic, repeatable motion in computer graphics and real-time engines.
