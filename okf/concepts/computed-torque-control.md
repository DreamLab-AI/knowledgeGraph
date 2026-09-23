---
okf_version: "0.2"
type: Class
title: Computed Torque Control
resource: urn:ngm:class:computed-torque-control
domain: robotics
description: Computed torque control is a model-based robot control method that uses the inverse dynamics of the manipulator to cancel nonlinear coupling and gravity terms, linearising the closed-loop behaviour. The controller computes the joint torques required to achieve a desired acceleration, then adds a linear feedback term to correct tracking error. It enables high-accuracy trajectory following at the co
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
relatedTo:
  - urn:ngm:class:force-control
  - urn:ngm:class:motion-control
---

# Computed Torque Control

Computed torque control is a model-based robot control method that uses the inverse dynamics of the manipulator to cancel nonlinear coupling and gravity terms, linearising the closed-loop behaviour. The controller computes the joint torques required to achieve a desired acceleration, then adds a linear feedback term to correct tracking error. It enables high-accuracy trajectory following at the cost of requiring an accurate dynamic model.
