---
okf_version: "0.2"
type: Class
title: Model Predictive Control
resource: urn:ngm:class:model-predictive-control
domain: robotics
description: Model Predictive Control (MPC) is an advanced control strategy in which an explicit mathematical model of the controlled process is used to predict future system outputs over a receding finite-horizon window, and a constrained optimisation problem is solved at each control step to compute the optimal input sequence. Only the first element of the computed sequence is applied, after which the horizo
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:optimal-control
hasPart:
  - urn:ngm:class:prediction-horizon
  - urn:ngm:class:cost-function
  - urn:ngm:class:receding-horizon
requires:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:system-identification
  - urn:ngm:class:optimisation
  - urn:ngm:class:dynamic-model
  - urn:ngm:class:mathematical-optimisation
enables:
  - urn:ngm:class:trajectory-control
  - urn:ngm:class:robot-control
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:energy-management
dependsOn:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:quadratic-programming
contrastsWith:
  - urn:ngm:class:pid-control
  - urn:ngm:class:state-space-control
  - urn:ngm:class:state-space-control
bridgesTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:state-space-model
  - urn:ngm:class:quadratic-programming
  - urn:ngm:class:quadratic-programming
partOf:
  - urn:ngm:class:optimal-control
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:motion-planning
---

# Model Predictive Control

Model Predictive Control (MPC) is an advanced control strategy in which an explicit mathematical model of the controlled process is used to predict future system outputs over a receding finite-horizon window, and a constrained optimisation problem is solved at each control step to compute the optimal input sequence. Only the first element of the computed sequence is applied, after which the horizon shifts forward and the optimisation repeats with an updated state estimate, creating an implicit closed-loop feedback mechanism. MPC handles multi-input multi-output (MIMO) systems, hard inequality constraints on both states and inputs, and competing cost objectives within a single unified formulation, making it applicable across process control, autonomous vehicles, robotics, and energy management. Its ability to anticipate constraint violations before they occur distinguishes it fundamentally from classical reactive controllers such as PID.
