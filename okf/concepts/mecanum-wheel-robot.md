---
okf_version: "0.2"
type: Class
title: Mecanum Wheel Robot
resource: urn:ngm:class:mecanum-wheel-robot
domain: robotics
description: A Mecanum Wheel Robot is a wheeled mobile robot platform that achieves true omnidirectional movement by mounting four independently driven mecanum wheels—each fitted with a ring of passive rollers oriented at 45 degrees to the wheel's rotation axis. By differentially controlling the speeds and directions of the four wheels, the platform can translate in any horizontal direction, rotate in place, o
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:omnidirectional-robot
hasPart:
  - urn:ngm:class:robot-component
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:robot-control
  - urn:ngm:class:kinematics
contrastsWith:
  - urn:ngm:class:differential-drive-robot
  - urn:ngm:class:wheeled-robot
uses:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robotics-control
relatedTo:
  - urn:ngm:class:mobile-robot
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:wheeled-mobile-robot
---

# Mecanum Wheel Robot

A Mecanum Wheel Robot is a wheeled mobile robot platform that achieves true omnidirectional movement by mounting four independently driven mecanum wheels—each fitted with a ring of passive rollers oriented at 45 degrees to the wheel's rotation axis. By differentially controlling the speeds and directions of the four wheels, the platform can translate in any horizontal direction, rotate in place, or combine translation and rotation simultaneously without requiring steering joints or changing wheel orientation. Invented by Bengt Ilon at Mecanum AB in 1972, the design is widely used in warehousing, logistics, and research platforms where unrestricted planar mobility is required in confined spaces.
