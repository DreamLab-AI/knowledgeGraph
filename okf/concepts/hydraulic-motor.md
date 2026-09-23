---
okf_version: "0.2"
type: Class
title: Hydraulic Motor
resource: urn:ngm:class:hydraulic-motor
domain: robotics
description: "A Hydraulic Motor is an actuation device that converts pressurised hydraulic fluid flow into continuous rotational mechanical torque, functioning as the rotary counterpart to the hydraulic cylinder (which produces linear force). It is distinguished by extremely high power-to-weight ratio and the ability to sustain high torques at low rotational speeds without gearbox inefficiencies, making it the "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:hydraulic-actuator
hasPart:
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:hydraulic-cylinder
  - urn:ngm:class:servo-control
contrastsWith:
  - urn:ngm:class:electric-motor
  - urn:ngm:class:pneumatic-motor
  - urn:ngm:class:servo-motor
  - urn:ngm:class:electric-actuator
uses:
  - urn:ngm:class:torque-control
  - urn:ngm:class:robot-actuator
relatedTo:
  - urn:ngm:class:mechanical-component
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:robotics-systems
---

# Hydraulic Motor

A Hydraulic Motor is an actuation device that converts pressurised hydraulic fluid flow into continuous rotational mechanical torque, functioning as the rotary counterpart to the hydraulic cylinder (which produces linear force). It is distinguished by extremely high power-to-weight ratio and the ability to sustain high torques at low rotational speeds without gearbox inefficiencies, making it the preferred actuator for heavy robotic joints, industrial manipulators, and mobile machinery operating in harsh environments. Common design types include gear motors, vane motors, and axial-piston motors, each offering different torque-speed-efficiency trade-offs.
