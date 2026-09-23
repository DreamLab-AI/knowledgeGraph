---
okf_version: "0.2"
type: Class
title: rb 0047 feedback control
resource: urn:ngm:class:rb-0047-feedback-control
domain: robotics
description: A closed-loop control strategy in which sensor measurements of a system's output are continuously compared to a reference setpoint, and the resulting error signal drives corrective actuator commands. Feedback control is the foundational mechanism for stable, accurate robotic motion, enabling autonomous robots and telerobotic systems to compensate for disturbances, model uncertainty, and environmen
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:closed-loop-control
requires:
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:robot-control
uses:
  - urn:ngm:class:pid-control
  - urn:ngm:class:robot-sensor
relatedTo:
  - urn:ngm:class:robotics-control
  - urn:ngm:class:teleoperation
---

# rb 0047 feedback control

A closed-loop control strategy in which sensor measurements of a system's output are continuously compared to a reference setpoint, and the resulting error signal drives corrective actuator commands. Feedback control is the foundational mechanism for stable, accurate robotic motion, enabling autonomous robots and telerobotic systems to compensate for disturbances, model uncertainty, and environmental variation.
