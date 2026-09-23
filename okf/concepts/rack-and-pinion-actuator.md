---
okf_version: "0.2"
type: Class
title: Rack and Pinion Actuator
resource: urn:ngm:class:rack-and-pinion-actuator
domain: robotics
description: A rack and pinion actuator is a mechanical transmission mechanism that converts rotary motion from a pinion gear into linear motion along a toothed rack, commonly used in robotics and industrial automation for precise linear positioning. The pinion rotates against the rack to produce controlled translational displacement, with speed and force determined by gear ratio and motor torque. It offers hi
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-linear-actuator
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:stepper-motor
requires:
  - urn:ngm:class:electric-actuator
  - urn:ngm:class:motion-control
  - urn:ngm:class:torque
enables:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:position-control
contrastsWith:
  - urn:ngm:class:lead-screw-actuator
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:hydraulic-actuator
uses:
  - urn:ngm:class:dc-servo-motor
  - urn:ngm:class:forward-kinematics
partOf:
  - urn:ngm:class:manipulator
  - urn:ngm:class:industrial-automation
relatedTo:
  - urn:ngm:class:end-effector
  - urn:ngm:class:robot-joint
---

# Rack and Pinion Actuator

A rack and pinion actuator is a mechanical transmission mechanism that converts rotary motion from a pinion gear into linear motion along a toothed rack, commonly used in robotics and industrial automation for precise linear positioning. The pinion rotates against the rack to produce controlled translational displacement, with speed and force determined by gear ratio and motor torque. It offers high stiffness, repeatability, and scalability for long-stroke linear axes in robotic manipulators and CNC systems.
