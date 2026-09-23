---
okf_version: "0.2"
type: Class
title: rb 0090 emergency stop
resource: urn:ngm:class:rb-0090-emergency-stop
domain: robotics
description: An Emergency Stop (E-stop) is a safety function that immediately removes power or halts the motion of a robot system upon activation, bringing the robot to a controlled or uncontrolled halt to prevent injury or damage. Defined under ISO 10218 and IEC 60204-1, it is a hardwired, independently monitored stop category (typically Stop Category 0 or 1) that takes priority over all other controls. E-sto
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-safety
  - urn:ngm:class:rb-0087-safety-standard
requires:
  - urn:ngm:class:rb-0089-risk-assessment
contrastsWith:
  - urn:ngm:class:rb-0093-speed-limitation
standardizedBy:
  - urn:ngm:class:iso-10218
  - urn:ngm:class:functional-safety
relatedTo:
  - urn:ngm:class:rb-0091-safety-rated-monitored-stop
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:rb-0095-safety-zone
  - urn:ngm:class:rb-0096-safeguarding
---

# rb 0090 emergency stop

An Emergency Stop (E-stop) is a safety function that immediately removes power or halts the motion of a robot system upon activation, bringing the robot to a controlled or uncontrolled halt to prevent injury or damage. Defined under ISO 10218 and IEC 60204-1, it is a hardwired, independently monitored stop category (typically Stop Category 0 or 1) that takes priority over all other controls. E-stops must be clearly marked, accessible, and self-latching so that the robot cannot restart until the stop is deliberately reset.
