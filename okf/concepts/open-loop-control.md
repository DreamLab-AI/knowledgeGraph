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
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Open-Loop Control

A control system where the control action is independent of the output. The system executes pre-programmed commands without feedback from sensors to verify if the desired state was achieved.
