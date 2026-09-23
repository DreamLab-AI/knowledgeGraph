---
okf_version: "0.2"
type: Class
title: rb 0100 safety integrity level
resource: urn:ngm:class:rb-0100-safety-integrity-level
domain: robotics
description: "Safety Integrity Level (SIL) is a discrete measure of the reliability required for a safety function in a robotic or automated system, defined by IEC 61508 on a four-level scale (SIL 1–4). A higher SIL demands greater hardware fault tolerance, stricter software development processes, and more comprehensive validation to ensure the safety function reduces risk to a tolerable level. SIL is assigned "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:cobot-safety-levels
requires:
  - urn:ngm:class:rb-0089-risk-assessment
  - urn:ngm:class:rb-0087-safety-standard
supports:
  - urn:ngm:class:rb-0092-protective-stop
standardizedBy:
  - urn:ngm:class:iec-61508
  - urn:ngm:class:functional-safety
relatedTo:
  - urn:ngm:class:rb-0090-emergency-stop
  - urn:ngm:class:rb-0091-safety-rated-monitored-stop
  - urn:ngm:class:rb-0096-safeguarding
---

# rb 0100 safety integrity level

Safety Integrity Level (SIL) is a discrete measure of the reliability required for a safety function in a robotic or automated system, defined by IEC 61508 on a four-level scale (SIL 1–4). A higher SIL demands greater hardware fault tolerance, stricter software development processes, and more comprehensive validation to ensure the safety function reduces risk to a tolerable level. SIL is assigned during risk assessment and drives the entire safety lifecycle of a system.
