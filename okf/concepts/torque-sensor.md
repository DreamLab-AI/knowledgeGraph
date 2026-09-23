---
okf_version: "0.2"
type: Class
title: Torque Sensor
resource: urn:ngm:class:torque-sensor
domain: robotics
description: A torque sensor is a transducer that measures the rotational force, or torque, applied about an axis, commonly at a robot joint or drive shaft. By reporting the load a joint experiences, it enables force control, compliance, collision detection, and safe physical interaction between robots and humans. Torque sensors typically use strain gauges bonded to a deformable element whose deflection is pro
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:robot-sensor
hasPart:
  - urn:ngm:class:sensor
requires:
  - urn:ngm:class:actuator
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:feedback-control
  - urn:ngm:class:safety-system
dependsOn:
  - urn:ngm:class:robot-joint
bridgesTo:
  - urn:ngm:class:proprioceptive-sensing
uses:
  - urn:ngm:class:sensor
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:manipulation
partOf:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:robot-sensor
relatedTo:
  - urn:ngm:class:force-feedback
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:kinematics
---

# Torque Sensor

A torque sensor is a transducer that measures the rotational force, or torque, applied about an axis, commonly at a robot joint or drive shaft. By reporting the load a joint experiences, it enables force control, compliance, collision detection, and safe physical interaction between robots and humans. Torque sensors typically use strain gauges bonded to a deformable element whose deflection is proportional to the applied moment.
