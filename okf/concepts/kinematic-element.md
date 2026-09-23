---
okf_version: "0.2"
type: Class
title: Kinematic Element
resource: urn:ngm:class:kinematic-element
domain: robotics
description: A Kinematic Element is a rigid body or joint primitive within a robot's mechanical structure that participates in the forward and inverse kinematic chain, defining the positional and orientational degrees of freedom of a limb segment. Chains of kinematic elements model the geometry of robotic arms, legs, and manipulators for motion planning and control.
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:control-system
enables:
  - urn:ngm:class:legged-robot
  - urn:ngm:class:mobile-robot
partOf:
  - urn:ngm:class:robot
---

# Kinematic Element

A Kinematic Element is a rigid body or joint primitive within a robot's mechanical structure that participates in the forward and inverse kinematic chain, defining the positional and orientational degrees of freedom of a limb segment. Chains of kinematic elements model the geometry of robotic arms, legs, and manipulators for motion planning and control.
