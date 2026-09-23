---
okf_version: "0.2"
type: Class
title: Lead Screw Actuator
resource: urn:ngm:class:lead-screw-actuator
domain: robotics
description: A linear actuation mechanism that converts rotational motion from a motor into controlled axial displacement by driving a threaded nut along a precision-cut helical screw shaft. Lead screw actuators provide high mechanical advantage, inherent load-holding capability (due to the self-locking property when lead angle is below the friction angle), and positional repeatability, making them widely used
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-linear-actuator
hasPart:
  - urn:ngm:class:mechanical-component
  - urn:ngm:class:actuator
enables:
  - urn:ngm:class:torque-control
  - urn:ngm:class:industrial-robot
contrastsWith:
  - urn:ngm:class:pid-controller
uses:
  - urn:ngm:class:stepper-motor
  - urn:ngm:class:servo-motor
  - urn:ngm:class:torque
relatedTo:
  - urn:ngm:class:robotics-control
  - urn:ngm:class:robotics-systems
---

# Lead Screw Actuator

A linear actuation mechanism that converts rotational motion from a motor into controlled axial displacement by driving a threaded nut along a precision-cut helical screw shaft. Lead screw actuators provide high mechanical advantage, inherent load-holding capability (due to the self-locking property when lead angle is below the friction angle), and positional repeatability, making them widely used in CNC machines, 3D printers, robotic joints, and medical devices.
