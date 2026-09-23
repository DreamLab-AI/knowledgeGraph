---
okf_version: "0.2"
type: Class
title: Motion Planning
resource: urn:ngm:class:motion-planning
domain: robotics
description: Motion Planning extends path planning by incorporating robot dynamics, control constraints, and time-parametrisation to generate dynamically feasible trajectories that account for velocity, acceleration, jerk, and actuator limitations. It produces executable control sequences that guide robots and autonomous vehicles from initial to goal states whilst satisfying kinodynamic constraints and optimis
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:trajectory-optimisation
  - urn:ngm:class:collision-avoidance
requires:
  - urn:ngm:class:path-planning
  - urn:ngm:class:control-theory
  - urn:ngm:class:configuration-space
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:human-robot-interaction
dependsOn:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:environment-mapping
  - urn:ngm:class:robot-kinematics
implements:
  - urn:ngm:class:rapidly-exploring-random-tree
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:potential-field-method
contrastsWith:
  - urn:ngm:class:reactive-control
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:sampling-based-planning
  - urn:ngm:class:optimisation-algorithm
partOf:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:robot-autonomy
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:task-planning
---

# Motion Planning

Motion Planning extends path planning by incorporating robot dynamics, control constraints, and time-parametrisation to generate dynamically feasible trajectories that account for velocity, acceleration, jerk, and actuator limitations. It produces executable control sequences that guide robots and autonomous vehicles from initial to goal states whilst satisfying kinodynamic constraints and optimising performance metrics.
