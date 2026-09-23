---
okf_version: "0.2"
type: Class
title: Trajectory Planning
resource: urn:ngm:class:trajectory-planning
domain: robotics
description: The process of computing a time-parameterised path for a robot or autonomous system that satisfies kinematic constraints, avoids obstacles, and achieves a target configuration smoothly and efficiently. Trajectory planning bridges high-level path planning with low-level motion control, incorporating velocity and acceleration profiles, inverse kinematics, and real-time replanning for dynamic environ
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:velocity-profiling
  - urn:ngm:class:acceleration-planning
requires:
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:dynamics-modelling
  - urn:ngm:class:configuration-space
enables:
  - urn:ngm:class:motion-control
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:human-robot-collaboration
dependsOn:
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:localisation
  - urn:ngm:class:environment-mapping
implements:
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:potential-field-method
contrastsWith:
  - urn:ngm:class:path-planning
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:simulation
uses:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:optimization-algorithms
  - urn:ngm:class:spline-interpolation
supports:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:autonomous-vehicle
partOf:
  - urn:ngm:class:robot-control
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:model-predictive-control
---

# Trajectory Planning

The process of computing a time-parameterised path for a robot or autonomous system that satisfies kinematic constraints, avoids obstacles, and achieves a target configuration smoothly and efficiently. Trajectory planning bridges high-level path planning with low-level motion control, incorporating velocity and acceleration profiles, inverse kinematics, and real-time replanning for dynamic environments.
