---
okf_version: "0.2"
type: Class
title: Feedback Sensor
resource: urn:ngm:class:feedback-sensor
domain: robotics
description: A feedback sensor is a transducer that measures the actual state of an actuator or controlled system, such as position, velocity, force, or current, and reports it back to a controller to close the control loop. By comparing the measured value with the commanded reference, the controller can correct errors and reject disturbances. Encoders, resolvers, tachometers, and load cells are common feedbac
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sensor
relatedTo:
  - urn:ngm:class:dc-servo-motor
  - urn:ngm:class:hydraulic-actuator
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Feedback Sensor

A feedback sensor is a transducer that measures the actual state of an actuator or controlled system, such as position, velocity, force, or current, and reports it back to a controller to close the control loop. By comparing the measured value with the commanded reference, the controller can correct errors and reject disturbances. Encoders, resolvers, tachometers, and load cells are common feedback sensors in servo and motion-control systems.
