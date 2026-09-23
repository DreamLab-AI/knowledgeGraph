---
okf_version: "0.2"
type: Class
title: Differential Dynamic Programming
resource: urn:ngm:class:differential-dynamic-programming
domain: robotics
description: Differential Dynamic Programming (DDP) is a trajectory-optimisation algorithm that solves optimal-control problems by iteratively improving a control sequence using second-order local approximations of the dynamics and cost along the current trajectory. It performs a backward pass computing value-function derivatives and feedback gains, followed by a forward pass that applies the improved controls
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:optimal-control
uses:
  - urn:ngm:class:control-theory
supports:
  - urn:ngm:class:model-predictive-control
relatedTo:
  - urn:ngm:class:markov-decision-process
---

# Differential Dynamic Programming

Differential Dynamic Programming (DDP) is a trajectory-optimisation algorithm that solves optimal-control problems by iteratively improving a control sequence using second-order local approximations of the dynamics and cost along the current trajectory. It performs a backward pass computing value-function derivatives and feedback gains, followed by a forward pass that applies the improved controls, converging quadratically near a solution. Together with its Gauss-Newton variant iLQR, DDP is widely used in robotics and model-predictive control for generating smooth, dynamically feasible motions.
