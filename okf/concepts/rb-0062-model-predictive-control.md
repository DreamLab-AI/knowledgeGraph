---
okf_version: "0.2"
type: Class
title: rb 0062 model predictive control
resource: urn:ngm:class:rb-0062-model-predictive-control
domain: robotics
description: "Model Predictive Control (MPC) is an advanced optimal control strategy that uses an explicit mathematical model of the plant to predict future system behaviour over a finite receding horizon, then solves an optimisation problem at each control step to determine the input sequence that minimises a cost function subject to state and input constraints. Only the first element of the computed sequence "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:optimal-control
enables:
  - urn:ngm:class:rb-0049-motion-planning
  - urn:ngm:class:rb-0056-impedance-control
dependsOn:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:rb-0051-trajectory-planning
contrastsWith:
  - urn:ngm:class:rb-0048-pid-controller
  - urn:ngm:class:rb-0063-sliding-mode-control
relatedTo:
  - urn:ngm:class:rb-0060-optimal-control
  - urn:ngm:class:rb-0061-nonlinear-control
  - urn:ngm:class:state-space-control
---

# rb 0062 model predictive control

Model Predictive Control (MPC) is an advanced optimal control strategy that uses an explicit mathematical model of the plant to predict future system behaviour over a finite receding horizon, then solves an optimisation problem at each control step to determine the input sequence that minimises a cost function subject to state and input constraints. Only the first element of the computed sequence is applied before the optimisation is repeated. In robotics, MPC enables constraint-aware trajectory tracking, force regulation, and whole-body motion planning that classical PID controllers cannot achieve.
