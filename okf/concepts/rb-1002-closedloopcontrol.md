---
okf_version: "0.2"
type: Class
title: RB 1002 closedloopcontrol
resource: urn:ngm:class:rb-1002-closedloopcontrol
domain: robotics
description: RB 1002 Closed-Loop Control is an ontology term in the NarrativeGoldmine robotics hierarchy denoting the general class of feedback-based control architectures in which sensor measurements of a system's output are continuously fed back to the controller to correct deviations from a desired set-point. As a superclass it subsumes specific strategies including PID control, model-predictive control, ad
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:pid-control
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:adaptive-control
requires:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:state-estimation
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:trajectory-control
  - urn:ngm:class:autonomous-robot
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# RB 1002 closedloopcontrol

RB 1002 Closed-Loop Control is an ontology term in the NarrativeGoldmine robotics hierarchy denoting the general class of feedback-based control architectures in which sensor measurements of a system's output are continuously fed back to the controller to correct deviations from a desired set-point. As a superclass it subsumes specific strategies including PID control, model-predictive control, adaptive control, and state-estimation-driven controllers used in robotic actuation and manipulation.
