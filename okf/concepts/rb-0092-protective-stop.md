---
okf_version: "0.2"
type: Class
title: rb 0092 protective stop
resource: urn:ngm:class:rb-0092-protective-stop
domain: robotics
description: A protective stop is a safety-initiated cessation of robot motion that halts all hazardous movement when a safety function is triggered, without necessarily cutting power to the drive system. Unlike an emergency stop, a protective stop permits automatic restart once the triggering condition is resolved, making it a standard mechanism in collaborative robot cells operating under ISO 10218 and ISO/T
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-safety
requires:
  - urn:ngm:class:functional-safety
  - urn:ngm:class:risk-assessment
enables:
  - urn:ngm:class:collaborative-systems-modality-operation
  - urn:ngm:class:human-robot-interaction
standardizedBy:
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-ts-15066
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:robot-safety
---

# rb 0092 protective stop

A protective stop is a safety-initiated cessation of robot motion that halts all hazardous movement when a safety function is triggered, without necessarily cutting power to the drive system. Unlike an emergency stop, a protective stop permits automatic restart once the triggering condition is resolved, making it a standard mechanism in collaborative robot cells operating under ISO 10218 and ISO/TS 15066. It is fundamental to speed-and-separation monitoring and power-and-force-limiting safety strategies.
