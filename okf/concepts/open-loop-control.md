---
okf_version: "0.2"
type: Class
title: Open-Loop Control
resource: urn:ngm:class:open-loop-control
domain: robotics
description: A control system where the control action is independent of the output. The system executes pre-programmed commands without feedback from sensors to verify if the desired state was achieved.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-system
requires:
  - urn:ngm:class:actuator
contrastsWith:
  - urn:ngm:class:feedback-mechanism
  - urn:ngm:class:closed-loop-control
uses:
  - urn:ngm:class:actuator
---

# Open-Loop Control

A control system where the control action is independent of the output. The system executes pre-programmed commands without feedback from sensors to verify if the desired state was achieved.
