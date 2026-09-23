---
okf_version: "0.2"
type: Class
title: rb 0063 sliding mode control
resource: urn:ngm:class:rb-0063-sliding-mode-control
domain: robotics
description: Sliding Mode Control (SMC) is a nonlinear robust control technique that drives system states onto a predefined sliding surface in state space and then maintains them on that surface using discontinuous (switching) control actions. Once on the sliding manifold, the system dynamics become insensitive to matched disturbances and parameter uncertainties, making SMC highly robust for robot manipulators
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-theory
enables:
  - urn:ngm:class:rb-0053-force-control
  - urn:ngm:class:rb-0054-position-control
dependsOn:
  - urn:ngm:class:rb-0022-robot-dynamics
contrastsWith:
  - urn:ngm:class:rb-0062-model-predictive-control
relatedTo:
  - urn:ngm:class:rb-0061-nonlinear-control
  - urn:ngm:class:rb-0048-pid-controller
  - urn:ngm:class:robust-control
  - urn:ngm:class:adaptive-control
---

# rb 0063 sliding mode control

Sliding Mode Control (SMC) is a nonlinear robust control technique that drives system states onto a predefined sliding surface in state space and then maintains them on that surface using discontinuous (switching) control actions. Once on the sliding manifold, the system dynamics become insensitive to matched disturbances and parameter uncertainties, making SMC highly robust for robot manipulators with uncertain dynamics, friction, and external loads. A key challenge is chattering — high-frequency oscillation caused by the switching law — which is addressed through boundary layer methods and higher-order SMC variants.
