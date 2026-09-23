---
okf_version: "0.2"
type: Class
title: Sensor Feedback
resource: urn:ngm:class:sensor-feedback
domain: robotics
description: "Measurement data returned from sensors into a control loop so that a controller can compare the actual state of a dynamic system against its desired state and compute corrective action. Sensor feedback closes the loop in control engineering and robotics: encoders, IMUs, force-torque sensors, thermocouples, and cameras report position, velocity, force, temperature, or pose, and the resulting error "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:sensor-data
requires:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:closed-loop-control
partOf:
  - urn:ngm:class:feedback-loop
relatedTo:
  - urn:ngm:class:control-algorithm
  - urn:ngm:class:control-theory
---

# Sensor Feedback

Measurement data returned from sensors into a control loop so that a controller can compare the actual state of a dynamic system against its desired state and compute corrective action. Sensor feedback closes the loop in control engineering and robotics: encoders, IMUs, force-torque sensors, thermocouples, and cameras report position, velocity, force, temperature, or pose, and the resulting error signal drives actuator commands, with latency, noise, and sampling rate directly bounding achievable control performance.
