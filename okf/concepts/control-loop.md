---
okf_version: "0.2"
type: Class
title: Control Loop
resource: urn:ngm:class:control-loop
domain: infrastructure
description: A control loop is the cyclical process by which a system measures its current state, compares it against a desired set point and applies corrective action to reduce the difference. Closed-loop control uses feedback from sensors to continuously regulate an actuator, while open-loop control acts without such feedback. Control loops are foundational to automation, cyber-physical systems and the recon
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:control-system
hasPart:
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:feedback-loop
enables:
  - urn:ngm:class:automation
  - urn:ngm:class:cyber-physical-systems
dependsOn:
  - urn:ngm:class:feedback-loop
implements:
  - urn:ngm:class:automation
  - urn:ngm:class:process-control
bridgesTo:
  - urn:ngm:class:cyber-physical-systems
uses:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
  - urn:ngm:class:state-estimation
partOf:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:control-system
  - urn:ngm:class:automation
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:digital-twin
---

# Control Loop

A control loop is the cyclical process by which a system measures its current state, compares it against a desired set point and applies corrective action to reduce the difference. Closed-loop control uses feedback from sensors to continuously regulate an actuator, while open-loop control acts without such feedback. Control loops are foundational to automation, cyber-physical systems and the reconciliation pattern used in infrastructure orchestration.
