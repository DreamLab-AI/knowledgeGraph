---
okf_version: "0.2"
type: Class
title: Safety PLC
resource: urn:ngm:class:safety-plc
domain: robotics
description: A Safety Programmable Logic Controller (Safety PLC) is a specialised industrial controller certified to IEC 61511 or IEC 62061 safety integrity levels, designed to execute safety instrumented functions that bring a process to a safe state upon detecting hazardous conditions. Unlike standard PLCs, Safety PLCs implement redundant processing, self-diagnostics, and rigorous failure-mode analysis to ac
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
enables:
  - urn:ngm:class:cobot-safety-levels
  - urn:ngm:class:collaborative-systems-modality-robot
implements:
  - urn:ngm:class:functional-safety
uses:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:servo-control
---

# Safety PLC

A Safety Programmable Logic Controller (Safety PLC) is a specialised industrial controller certified to IEC 61511 or IEC 62061 safety integrity levels, designed to execute safety instrumented functions that bring a process to a safe state upon detecting hazardous conditions. Unlike standard PLCs, Safety PLCs implement redundant processing, self-diagnostics, and rigorous failure-mode analysis to achieve the high diagnostic coverage required for safety-critical robotics and industrial automation.
