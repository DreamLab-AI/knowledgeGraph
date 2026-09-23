---
okf_version: "0.2"
type: Class
title: Rotary Encoder
resource: urn:ngm:class:rotary-encoder
domain: robotics
description: "A rotary encoder is an electromechanical transducer that converts shaft angular position or velocity into digital pulses or absolute position codes. Incremental encoders output A/B quadrature pulses enabling direction and relative position measurement; absolute encoders output a unique binary code at every shaft position. Used ubiquitously in robot joints, servo motors, and motion-control systems "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:encoder
enables:
  - urn:ngm:class:simultaneous-localisation-and-mapping
bridgesTo:
  - urn:ngm:class:encoder
uses:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:pid-controller
relatedTo:
  - urn:ngm:class:servo-motor
  - urn:ngm:class:dc-servo-motor
  - urn:ngm:class:stepper-motor
  - urn:ngm:class:imu
  - urn:ngm:class:odometry
  - urn:ngm:class:force-torque-sensor
---

# Rotary Encoder

A rotary encoder is an electromechanical transducer that converts shaft angular position or velocity into digital pulses or absolute position codes. Incremental encoders output A/B quadrature pulses enabling direction and relative position measurement; absolute encoders output a unique binary code at every shaft position. Used ubiquitously in robot joints, servo motors, and motion-control systems for precise closed-loop feedback.
