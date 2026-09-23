---
okf_version: "0.2"
type: Class
title: rb 0061 nonlinear control
resource: urn:ngm:class:rb-0061-nonlinear-control
domain: robotics
description: Nonlinear control encompasses control strategies designed for systems whose dynamics cannot be adequately described by linear differential equations. In robotics, virtually all manipulators and mobile platforms exhibit nonlinear behaviour due to inertia coupling, Coriolis terms, gravity loading, and joint friction. Nonlinear control techniques—including computed-torque control, sliding-mode contro
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:rb-0063-sliding-mode-control
  - urn:ngm:class:rb-0064-computed-torque-control
  - urn:ngm:class:rb-0062-model-predictive-control
requires:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:rb-0021-robot-kinematics
contrastsWith:
  - urn:ngm:class:rb-0048-pid-controller
relatedTo:
  - urn:ngm:class:rb-0060-optimal-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:rb-0047-feedback-control
---

# rb 0061 nonlinear control

Nonlinear control encompasses control strategies designed for systems whose dynamics cannot be adequately described by linear differential equations. In robotics, virtually all manipulators and mobile platforms exhibit nonlinear behaviour due to inertia coupling, Coriolis terms, gravity loading, and joint friction. Nonlinear control techniques—including computed-torque control, sliding-mode control, feedback linearisation, Lyapunov-based methods, and model predictive control—explicitly account for these nonlinearities to achieve stable, high-performance trajectory tracking across the full operating envelope.
