---
okf_version: "0.2"
type: Class
title: Character Animation
resource: urn:ngm:class:character-animation
domain: spatial-computing
description: Character animation is the discipline of creating the illusion of life and intentional movement in digital or physical characters through the coordinated manipulation of skeletal rigs, blend shapes, and motion data across time, driven by principles derived from traditional film animation. It encompasses the full pipeline from rigging and skinning a character mesh to authoring, retargeting, and ble
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:animation
hasPart:
  - urn:ngm:class:procedural-animation
  - urn:ngm:class:physics-based-animation
requires:
  - urn:ngm:class:animation-state-machine
enables:
  - urn:ngm:class:real-time-character-animation
  - urn:ngm:class:dynamic-character-animation
  - urn:ngm:class:avatar-animation
  - urn:ngm:class:facial-animation
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:motion-capture
  - urn:ngm:class:character-rigging
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:keyframe-animation
standardizedBy:
  - urn:ngm:class:usd
  - urn:ngm:class:open-xr
relatedTo:
  - urn:ngm:class:animation-retargeting
  - urn:ngm:class:secondary-motion
  - urn:ngm:class:reinforcement-learning
---

# Character Animation

Character animation is the discipline of creating the illusion of life and intentional movement in digital or physical characters through the coordinated manipulation of skeletal rigs, blend shapes, and motion data across time, driven by principles derived from traditional film animation. It encompasses the full pipeline from rigging and skinning a character mesh to authoring, retargeting, and blending motion clips in real time, and extends to AI-driven procedural and physics-based approaches that generate plausible movement without manual keyframing. The field spans offline cinematic animation for film and games and real-time systems for interactive avatars, XR experiences, and virtual humans.
