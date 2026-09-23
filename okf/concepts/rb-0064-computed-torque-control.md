---
okf_version: "0.2"
type: Class
title: rb 0064 computed torque control
resource: urn:ngm:class:rb-0064-computed-torque-control
domain: robotics
description: Computed torque control (CTC) is a model-based robot control strategy that uses the full inverse dynamics model of a manipulator to compute the joint torques required to follow a desired trajectory. By cancelling the nonlinear dynamics — including Coriolis, centripetal, and gravitational terms — CTC transforms the closed-loop system into a set of independent linear double-integrators, enabling sim
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:model-based-control
enables:
  - urn:ngm:class:rb-0051-trajectory-planning
dependsOn:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:rb-0021-robot-kinematics
uses:
  - urn:ngm:class:rb-0043-torque
  - urn:ngm:class:rb-0048-pid-controller
relatedTo:
  - urn:ngm:class:rb-0061-nonlinear-control
  - urn:ngm:class:rb-0062-model-predictive-control
  - urn:ngm:class:rb-0056-impedance-control
---

# rb 0064 computed torque control

Computed torque control (CTC) is a model-based robot control strategy that uses the full inverse dynamics model of a manipulator to compute the joint torques required to follow a desired trajectory. By cancelling the nonlinear dynamics — including Coriolis, centripetal, and gravitational terms — CTC transforms the closed-loop system into a set of independent linear double-integrators, enabling simple PD outer-loop controllers to achieve high-accuracy tracking. Its effectiveness depends on the fidelity of the dynamic model and is sensitive to parameter uncertainty.
