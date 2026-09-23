---
okf_version: "0.2"
type: Class
title: Linear Quadratic Regulator
resource: urn:ngm:class:linear-quadratic-regulator
domain: robotics
description: The Linear Quadratic Regulator (LQR) is an optimal control framework that computes the state-feedback gain matrix minimising a quadratic cost function — a weighted sum of squared state deviations and squared control inputs over a time horizon — for a linear dynamical system, yielding the globally optimal linear feedback law in closed form through the algebraic Riccati equation. LQR provides a prin
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:optimal-control
enables:
  - urn:ngm:class:robot-control
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:model-predictive-control
uses:
  - urn:ngm:class:state-space-control
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:stability-analysis
relatedTo:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:adaptive-control
---

# Linear Quadratic Regulator

The Linear Quadratic Regulator (LQR) is an optimal control framework that computes the state-feedback gain matrix minimising a quadratic cost function — a weighted sum of squared state deviations and squared control inputs over a time horizon — for a linear dynamical system, yielding the globally optimal linear feedback law in closed form through the algebraic Riccati equation. LQR provides a principled, tunable controller where the designer specifies performance-energy trade-offs through cost weight matrices Q (penalising state error) and R (penalising control effort), and the solution guarantees both optimality with respect to this cost and closed-loop stability for controllable systems. Despite its linearity assumption, LQR is widely extended to nonlinear systems via linearisation, iterative LQR (iLQR), and as the backbone of linear-quadratic-Gaussian (LQG) control when combined with Kalman filtering.
