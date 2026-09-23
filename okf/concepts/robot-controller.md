---
okf_version: "0.2"
type: Class
title: Robot Controller
resource: urn:ngm:class:robot-controller
domain: robotics
description: "A Robot Controller is the computational subsystem that governs a robot's behaviour by reading sensor data, computing control commands and driving actuators to achieve desired motion or tasks. It runs control loops in real time, coordinating kinematics, trajectory execution and safety logic while interfacing with higher-level planning software. Controllers range from embedded microcontrollers on a "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:control-system
hasPart:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:motor-driver
  - urn:ngm:class:firmware
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:real-time
  - urn:ngm:class:real-time
enables:
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
dependsOn:
  - urn:ngm:class:embedded-system
implements:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:trajectory-planning
uses:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:microcontroller
  - urn:ngm:class:ros
supports:
  - urn:ngm:class:servo-motor
partOf:
  - urn:ngm:class:robotic-system
relatedTo:
  - urn:ngm:class:control-system
  - urn:ngm:class:ros
---

# Robot Controller

A Robot Controller is the computational subsystem that governs a robot's behaviour by reading sensor data, computing control commands and driving actuators to achieve desired motion or tasks. It runs control loops in real time, coordinating kinematics, trajectory execution and safety logic while interfacing with higher-level planning software. Controllers range from embedded microcontrollers on a single joint to industrial cabinets coordinating an entire articulated arm.
