---
okf_version: "0.2"
type: Class
title: Servo Motor
resource: urn:ngm:class:servo-motor
domain: robotics
description: A servo motor is a closed-loop electromechanical actuator that couples an electric motor with a feedback sensor, typically a rotary encoder, and a controller to deliver precise position, velocity, and torque control. Servo motors drive robot joints, manipulator arms, and CNC machinery, and other applications demanding accurate, repeatable motion under varying load.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-motor
hasPart:
  - urn:ngm:class:rotary-encoder
  - urn:ngm:class:pid-controller
  - urn:ngm:class:dc-servo-motor
enables:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:manipulator-arm
uses:
  - urn:ngm:class:encoder
  - urn:ngm:class:actuator
relatedTo:
  - urn:ngm:class:stepper-motor
  - urn:ngm:class:motion-control
  - urn:ngm:class:torque-control
  - urn:ngm:class:position-control
  - urn:ngm:class:feedback-control
---

# Servo Motor

A servo motor is a closed-loop electromechanical actuator that couples an electric motor with a feedback sensor, typically a rotary encoder, and a controller to deliver precise position, velocity, and torque control. Servo motors drive robot joints, manipulator arms, and CNC machinery, and other applications demanding accurate, repeatable motion under varying load.
