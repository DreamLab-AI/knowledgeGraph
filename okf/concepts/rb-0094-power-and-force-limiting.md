---
okf_version: "0.2"
type: Class
title: rb 0094 power and force limiting
resource: urn:ngm:class:rb-0094-power-and-force-limiting
domain: robotics
description: Power and Force Limiting (PFL) is a collaborative robot safety mode defined in ISO/TS 15066 in which the robot's mechanical power, force, and momentum are continuously constrained so that any contact with a human remains below biomechanical injury thresholds. Unlike speed-and-separation monitoring, PFL allows direct physical contact by ensuring that contact forces can never exceed prescribed quasi
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-safety
requires:
  - urn:ngm:class:rb-0067-force-torque-sensor
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:rb-0057-admittance-control
standardizedBy:
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:iso-10218
relatedTo:
  - urn:ngm:class:rb-0091-safety-rated-monitored-stop
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:rb-0093-speed-limitation
  - urn:ngm:class:rb-0089-risk-assessment
  - urn:ngm:class:cobot-safety-levels
---

# rb 0094 power and force limiting

Power and Force Limiting (PFL) is a collaborative robot safety mode defined in ISO/TS 15066 in which the robot's mechanical power, force, and momentum are continuously constrained so that any contact with a human remains below biomechanical injury thresholds. Unlike speed-and-separation monitoring, PFL allows direct physical contact by ensuring that contact forces can never exceed prescribed quasi-static and transient limits.
