---
okf_version: "0.2"
type: Class
title: rb 0007 collaborative robot
resource: urn:ngm:class:rb-0007-collaborative-robot
domain: robotics
description: A collaborative robot (cobot) is an industrial robot designed and certified to work in direct physical proximity with human operators within a shared workspace, without requiring conventional hard safety guarding. Defined under ISO/TS 15066, cobots implement one or more of four collaborative operation modes — safety-rated monitored stop, hand guiding, speed-and-separation monitoring, and power-and
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:industrial-robot
requires:
  - urn:ngm:class:rb-0089-risk-assessment
implements:
  - urn:ngm:class:rb-0103-collaborative-operation
  - urn:ngm:class:rb-0093-speed-limitation
  - urn:ngm:class:rb-0094-power-and-force-limiting
standardizedBy:
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:rb-0087-safety-standard
relatedTo:
  - urn:ngm:class:rb-0056-impedance-control
  - urn:ngm:class:rb-0105-speed-and-separation-monitoring
  - urn:ngm:class:human-robot-interaction
---

# rb 0007 collaborative robot

A collaborative robot (cobot) is an industrial robot designed and certified to work in direct physical proximity with human operators within a shared workspace, without requiring conventional hard safety guarding. Defined under ISO/TS 15066, cobots implement one or more of four collaborative operation modes — safety-rated monitored stop, hand guiding, speed-and-separation monitoring, and power-and-force limiting — each constraining robot behaviour so that human contact does not result in injury. Cobots typically feature lightweight, rounded structures, intrinsic force/torque sensing, and redundant safety-rated control architectures compliant with ISO 10218-1/-2.
