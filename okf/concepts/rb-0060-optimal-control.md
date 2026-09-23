---
okf_version: "0.2"
type: Class
title: rb 0060 optimal control
resource: urn:ngm:class:rb-0060-optimal-control
domain: robotics
description: Optimal control is a branch of control theory that computes control inputs minimising (or maximising) a performance criterion — such as energy consumption, time, or tracking error — subject to system dynamics and constraints. In robotics, optimal control underpins trajectory optimisation, model predictive control, and reinforcement learning-based policy synthesis.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-theory
enables:
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:rb-0051-trajectory-planning
dependsOn:
  - urn:ngm:class:rb-0064-computed-torque-control
uses:
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:rb-0022-robot-dynamics
relatedTo:
  - urn:ngm:class:rb-0062-model-predictive-control
  - urn:ngm:class:rb-0047-feedback-control
  - urn:ngm:class:reinforcement-learning
---

# rb 0060 optimal control

Optimal control is a branch of control theory that computes control inputs minimising (or maximising) a performance criterion — such as energy consumption, time, or tracking error — subject to system dynamics and constraints. In robotics, optimal control underpins trajectory optimisation, model predictive control, and reinforcement learning-based policy synthesis.
