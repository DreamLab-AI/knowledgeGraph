---
okf_version: "0.2"
type: Class
title: Potential Field Method
resource: urn:ngm:class:potential-field-method
domain: robotics
description: The Potential Field Method is a reactive robot navigation technique that models the goal as an attractive potential and obstacles as repulsive potentials, steering the robot along the negative gradient of the summed field. It produces smooth, real-time motion commands directly from sensor readings without explicit global search. Its principal weakness is susceptibility to local minima, where attra
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:path-planning
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:lidar
enables:
  - urn:ngm:class:collision-detection
implements:
  - urn:ngm:class:path-planning
  - urn:ngm:class:motion-planning
contrastsWith:
  - urn:ngm:class:motion-planning
bridgesTo:
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:mobile-robot
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:navigation
  - urn:ngm:class:gradient-descent
---

# Potential Field Method

The Potential Field Method is a reactive robot navigation technique that models the goal as an attractive potential and obstacles as repulsive potentials, steering the robot along the negative gradient of the summed field. It produces smooth, real-time motion commands directly from sensor readings without explicit global search. Its principal weakness is susceptibility to local minima, where attractive and repulsive forces cancel and the robot stalls short of the goal.
