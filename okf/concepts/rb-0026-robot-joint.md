---
okf_version: "0.2"
type: Class
title: rb 0026 robot joint
resource: urn:ngm:class:rb-0026-robot-joint
domain: robotics
description: A robot joint is a mechanical articulation connecting two adjacent robot links that permits one or more degrees of relative motion—translational (prismatic) or rotational (revolute). Robot joints are the fundamental kinematic elements that determine a manipulator's workspace and degrees of freedom; their dynamic properties, including inertia, backlash, and compliance, critically influence both con
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot
hasPart:
  - urn:ngm:class:rb-0072-encoder
  - urn:ngm:class:robot-actuator
enables:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0054-position-control
partOf:
  - urn:ngm:class:rb-0027-robot-link
relatedTo:
  - urn:ngm:class:rb-0040-backlash
  - urn:ngm:class:rb-0041-inertia
  - urn:ngm:class:rb-0038-compliance
  - urn:ngm:class:rb-0039-stiffness
---

# rb 0026 robot joint

A robot joint is a mechanical articulation connecting two adjacent robot links that permits one or more degrees of relative motion—translational (prismatic) or rotational (revolute). Robot joints are the fundamental kinematic elements that determine a manipulator's workspace and degrees of freedom; their dynamic properties, including inertia, backlash, and compliance, critically influence both control precision and safe interaction with the environment.
