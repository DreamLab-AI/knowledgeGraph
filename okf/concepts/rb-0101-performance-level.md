---
okf_version: "0.2"
type: Class
title: rb 0101 performance level
resource: urn:ngm:class:rb-0101-performance-level
domain: robotics
description: Performance Level (PL) is a discrete safety metric defined in ISO 13849-1 that quantifies the ability of a safety-related control system to perform a safety function under foreseeable conditions. Levels range from PLa (lowest) to PLe (highest), each corresponding to a target probability of dangerous failure per hour. PL is determined through risk assessment and verified against the required PL (PL
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
requires:
  - urn:ngm:class:rb-0087-safety-standard
  - urn:ngm:class:rb-0090-emergency-stop
supports:
  - urn:ngm:class:rb-0096-safeguarding
standardizedBy:
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iec-61508
relatedTo:
  - urn:ngm:class:rb-0100-safety-integrity-level
  - urn:ngm:class:functional-safety
  - urn:ngm:class:rb-0089-risk-assessment
---

# rb 0101 performance level

Performance Level (PL) is a discrete safety metric defined in ISO 13849-1 that quantifies the ability of a safety-related control system to perform a safety function under foreseeable conditions. Levels range from PLa (lowest) to PLe (highest), each corresponding to a target probability of dangerous failure per hour. PL is determined through risk assessment and verified against the required PL (PLr) derived from the hazard and risk analysis of the application.
