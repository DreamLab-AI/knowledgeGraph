---
okf_version: "0.2"
type: Class
title: Wheel Odometry
resource: urn:ngm:class:wheel-odometry
domain: robotics
description: "Wheel odometry is a method of estimating a mobile robot's change in position and orientation by counting wheel rotations measured with encoders and applying a kinematic motion model. As an instance of dead reckoning, it integrates incremental wheel displacement over time to track pose relative to a starting point. It is simple and low-cost but accumulates drift from wheel slip, uneven terrain and "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:odometry
hasPart:
  - urn:ngm:class:encoder
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:motion-model
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:navigation
  - urn:ngm:class:pose-estimation
dependsOn:
  - urn:ngm:class:mobile-robot
implements:
  - urn:ngm:class:dead-reckoning
contrastsWith:
  - urn:ngm:class:visual-odometry
uses:
  - urn:ngm:class:encoder
  - urn:ngm:class:kinematics
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor-fusion
relatedTo:
  - urn:ngm:class:odometry
  - urn:ngm:class:inertial-measurement-unit
---

# Wheel Odometry

Wheel odometry is a method of estimating a mobile robot's change in position and orientation by counting wheel rotations measured with encoders and applying a kinematic motion model. As an instance of dead reckoning, it integrates incremental wheel displacement over time to track pose relative to a starting point. It is simple and low-cost but accumulates drift from wheel slip, uneven terrain and calibration error, so it is typically fused with other sensors.
