---
okf_version: "0.2"
type: Class
title: rb 0048 pid controller
resource: urn:ngm:class:rb-0048-pid-controller
domain: robotics
description: "A PID (Proportional-Integral-Derivative) controller is the most widely deployed feedback control algorithm in robotics and industrial automation. It computes a control output as the weighted sum of three terms: the proportional term (reacts to the current error magnitude), the integral term (eliminates steady-state error by accumulating past errors), and the derivative term (anticipates future err"
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-theory
enables:
  - urn:ngm:class:rb-0054-position-control
  - urn:ngm:class:rb-0055-velocity-control
dependsOn:
  - urn:ngm:class:rb-0072-encoder
contrastsWith:
  - urn:ngm:class:rb-0062-model-predictive-control
relatedTo:
  - urn:ngm:class:rb-0047-feedback-control
  - urn:ngm:class:rb-0063-sliding-mode-control
  - urn:ngm:class:rb-0060-optimal-control
  - urn:ngm:class:feedback-control
---

# rb 0048 pid controller

A PID (Proportional-Integral-Derivative) controller is the most widely deployed feedback control algorithm in robotics and industrial automation. It computes a control output as the weighted sum of three terms: the proportional term (reacts to the current error magnitude), the integral term (eliminates steady-state error by accumulating past errors), and the derivative term (anticipates future error by responding to the rate of change). PID controllers are used in robot joint position and velocity loops, temperature regulation, and process control, often augmented with feed-forward terms to improve performance under known dynamics.
