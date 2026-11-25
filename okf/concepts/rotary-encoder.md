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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Rotary Encoder

A rotary encoder is an electromechanical transducer that converts shaft angular position or velocity into digital pulses or absolute position codes. Incremental encoders output A/B quadrature pulses enabling direction and relative position measurement; absolute encoders output a unique binary code at every shaft position. Used ubiquitously in robot joints, servo motors, and motion-control systems for precise closed-loop feedback.
