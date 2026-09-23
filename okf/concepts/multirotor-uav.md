---
okf_version: "0.2"
type: Class
title: Multirotor UAV
resource: urn:ngm:class:multirotor-uav
domain: robotics
description: A Multirotor UAV is an unmanned aerial vehicle that achieves lift and attitude control through three or more independently driven rotors. Differential rotor speed adjustment enables hover, translation, yaw, and agile manoeuvring without mechanical pitch or collective mechanisms, making multirotors highly manoeuvrable platforms suited to inspection, aerial photography, payload delivery, and search-
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:aerial-robot
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:motion-planning
uses:
  - urn:ngm:class:state-space-control
  - urn:ngm:class:pid-controller
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:3-d-li-dar
  - urn:ngm:class:kalman-filter
relatedTo:
  - urn:ngm:class:swarm-robotics
  - urn:ngm:class:path-planning
  - urn:ngm:class:odometry
---

# Multirotor UAV

A Multirotor UAV is an unmanned aerial vehicle that achieves lift and attitude control through three or more independently driven rotors. Differential rotor speed adjustment enables hover, translation, yaw, and agile manoeuvring without mechanical pitch or collective mechanisms, making multirotors highly manoeuvrable platforms suited to inspection, aerial photography, payload delivery, and search-and-rescue operations.
