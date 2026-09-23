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
---

# Feedback Sensor

A feedback sensor is a transducer that measures the actual state of an actuator or controlled system, such as position, velocity, force, or current, and reports it back to a controller to close the control loop. By comparing the measured value with the commanded reference, the controller can correct errors and reject disturbances. Encoders, resolvers, tachometers, and load cells are common feedback sensors in servo and motion-control systems.
