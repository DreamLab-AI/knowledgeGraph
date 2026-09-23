---
okf_version: "0.2"
type: Class
title: rb 0103 collaborative operation
resource: urn:ngm:class:rb-0103-collaborative-operation
domain: robotics
description: Collaborative operation is a mode of robotic system use in which a robot and one or more human operators work together within a shared workspace, as defined in ISO/TS 15066 and ISO 10218. It encompasses the specific operating conditions, safety functions, and interaction patterns that govern the coexistence of humans and robots without a fixed separating safeguard. The concept underpins cobot depl
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:collaborative-systems-modality-operation
hasPart:
  - urn:ngm:class:rb-0104-hand-guiding
  - urn:ngm:class:rb-0105-speed-and-separation-monitoring
requires:
  - urn:ngm:class:rb-0089-risk-assessment
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:rb-0091-safety-rated-monitored-stop
standardizedBy:
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:iso-10218
relatedTo:
  - urn:ngm:class:rb-0007-collaborative-robot
  - urn:ngm:class:cobot-safety-levels
---

# rb 0103 collaborative operation

Collaborative operation is a mode of robotic system use in which a robot and one or more human operators work together within a shared workspace, as defined in ISO/TS 15066 and ISO 10218. It encompasses the specific operating conditions, safety functions, and interaction patterns that govern the coexistence of humans and robots without a fixed separating safeguard. The concept underpins cobot deployment strategies including hand guiding, speed and separation monitoring, power and force limiting, and safety-rated monitored stop.
