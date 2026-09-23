---
okf_version: "0.2"
type: Class
title: Collision Detection System
resource: urn:ngm:class:collision-detection-system
domain: spatial-computing
description: A computational subsystem that continuously tests whether geometric objects in a simulation or physical environment intersect or are about to intersect, enabling physics engines, robotics planners, and interactive applications to respond to contact events. It combines spatial partitioning structures with narrow-phase geometry tests to balance accuracy against performance.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:collision-detection
enables:
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:haptic-feedback
uses:
  - urn:ngm:class:game-engine
  - urn:ngm:class:bullet-physics
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-simulation
  - urn:ngm:class:cloth-simulation
---

# Collision Detection System

A computational subsystem that continuously tests whether geometric objects in a simulation or physical environment intersect or are about to intersect, enabling physics engines, robotics planners, and interactive applications to respond to contact events. It combines spatial partitioning structures with narrow-phase geometry tests to balance accuracy against performance.
