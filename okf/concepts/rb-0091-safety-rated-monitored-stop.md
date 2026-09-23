---
okf_version: "0.2"
type: Class
title: rb 0091 safety rated monitored stop
resource: urn:ngm:class:rb-0091-safety-rated-monitored-stop
domain: robotics
description: "A safety-rated monitored stop (SRMS) is a robot stopping function in which the robot halts motion while the control system continuously monitors joint positions to verify the robot remains stationary, without removing power to the actuators. Unlike an emergency stop, SRMS allows rapid resumption of operation when the hazardous condition clears, and is central to collaborative robot (cobot) safety "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-safety
requires:
  - urn:ngm:class:rb-0089-risk-assessment
  - urn:ngm:class:rb-0054-position-control
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:rb-0096-safeguarding
standardizedBy:
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-ts-15066
relatedTo:
  - urn:ngm:class:rb-0090-emergency-stop
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:rb-0093-speed-limitation
---

# rb 0091 safety rated monitored stop

A safety-rated monitored stop (SRMS) is a robot stopping function in which the robot halts motion while the control system continuously monitors joint positions to verify the robot remains stationary, without removing power to the actuators. Unlike an emergency stop, SRMS allows rapid resumption of operation when the hazardous condition clears, and is central to collaborative robot (cobot) safety architectures defined in ISO 10218 and ISO/TS 15066.
