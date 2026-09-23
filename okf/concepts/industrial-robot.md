---
okf_version: "0.2"
type: Class
title: Industrial Robot
resource: urn:ngm:class:industrial-robot
domain: robotics
description: Industrial Robot is a reprogrammable, automatically controlled manipulator programmable in three or more axes, fixed in place or mobile, for use in industrial automation applications as defined by ISO 8373:2012.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics-systems
  - urn:ngm:class:manufacturing-automation
  - urn:ngm:class:electromechanical-systems
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:programmable-logic-controller
hasPart:
  - urn:ngm:class:joint-encoder
  - urn:ngm:class:kinematic-chain
  - urn:ngm:class:robot-controller
  - urn:ngm:class:safety-system
  - urn:ngm:class:servo-drive
  - urn:ngm:class:teach-pendant
  - urn:ngm:class:end-effector
  - urn:ngm:class:force-torque-sensor
requires:
  - urn:ngm:class:calibration-system
  - urn:ngm:class:industrial-network
  - urn:ngm:class:safety-standard
  - urn:ngm:class:motion-planning
  - urn:ngm:class:ros
  - urn:ngm:class:safety-standards
enables:
  - urn:ngm:class:flexible-manufacturing
  - urn:ngm:class:mass-customisation
  - urn:ngm:class:quality-inspection
  - urn:ngm:class:high-speed-assembly
  - urn:ngm:class:collaborative-automation
dependsOn:
  - urn:ngm:class:servo-motor
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:digital-twin
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:force-control
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:trajectory-planning
contrastsWith:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:autonomous-mobile-robots
  - urn:ngm:class:fixed-automation
  - urn:ngm:class:manual-assembly
bridgesTo:
  - urn:ngm:class:manufacturing-automation
uses:
  - urn:ngm:class:ether-cat
  - urn:ngm:class:mqtt
  - urn:ngm:class:opc-ua
  - urn:ngm:class:profinet
  - urn:ngm:class:ros-industrial
  - urn:ngm:class:mqtt
supports:
  - urn:ngm:class:logistics-automation
  - urn:ngm:class:automotive-manufacturing
  - urn:ngm:class:electronics-assembly
  - urn:ngm:class:food-processing-automation
  - urn:ngm:class:pharmaceutical-manufacturing
standardizedBy:
  - urn:ngm:class:iec-62061
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-9283
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:en-60204
relatedTo:
  - urn:ngm:class:machine-vision
  - urn:ngm:class:ground-robot
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:teleoperation-systems
  - urn:ngm:class:computer-numerical-control
---

# Industrial Robot

Industrial Robot is a reprogrammable, automatically controlled manipulator programmable in three or more axes, fixed in place or mobile, for use in industrial automation applications as defined by ISO 8373:2012.
