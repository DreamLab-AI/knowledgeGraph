---
okf_version: "0.2"
type: Class
title: Stepper Motor
resource: urn:ngm:class:stepper-motor
domain: robotics
description: A stepper motor is an electromechanical actuator that divides a full rotation into a fixed number of discrete angular steps, enabling precise open-loop position control without requiring feedback sensors. By energising coils in sequence, the rotor advances one step per pulse, making stepper motors essential for applications demanding repeatable positioning such as CNC machining, 3D printing, and r
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-motor
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:rotary-encoder
requires:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:motion-control
  - urn:ngm:class:open-loop-control
enables:
  - urn:ngm:class:robotics-control
  - urn:ngm:class:robotics-process
contrastsWith:
  - urn:ngm:class:servo-motor
  - urn:ngm:class:dc-servo-motor
uses:
  - urn:ngm:class:actuator
  - urn:ngm:class:electric-actuator
relatedTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:robot-actuator
---

# Stepper Motor

A stepper motor is an electromechanical actuator that divides a full rotation into a fixed number of discrete angular steps, enabling precise open-loop position control without requiring feedback sensors. By energising coils in sequence, the rotor advances one step per pulse, making stepper motors essential for applications demanding repeatable positioning such as CNC machining, 3D printing, and robotic joints.
