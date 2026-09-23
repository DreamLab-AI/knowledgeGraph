---
okf_version: "0.2"
type: Class
title: Octocopter
resource: urn:ngm:class:octocopter
domain: robotics
description: An Octocopter is a multirotor unmanned aerial vehicle (UAV) equipped with eight independently controlled rotors arranged symmetrically around a central frame, providing significant redundancy that allows continued stable flight after individual motor failure. The eight-rotor configuration enables lift capacity substantially exceeding that of quadcopters or hexacopters, making it the preferred plat
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:multirotor-uav
hasPart:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:robotics-control
enables:
  - urn:ngm:class:inspection-robot
  - urn:ngm:class:aerial-robot
contrastsWith:
  - urn:ngm:class:quadcopter
uses:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:swarm-robotics
relatedTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:robotics-platform
  - urn:ngm:class:robotics-application
---

# Octocopter

An Octocopter is a multirotor unmanned aerial vehicle (UAV) equipped with eight independently controlled rotors arranged symmetrically around a central frame, providing significant redundancy that allows continued stable flight after individual motor failure. The eight-rotor configuration enables lift capacity substantially exceeding that of quadcopters or hexacopters, making it the preferred platform for heavy industrial payloads such as professional cinema cameras, LiDAR scanners, and precision agricultural dispensers.
