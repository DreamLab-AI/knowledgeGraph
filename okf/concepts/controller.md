---
okf_version: "0.2"
type: Class
title: Controller
resource: urn:ngm:class:controller
domain: robotics
description: A Controller is a computational or hardware module that receives a reference setpoint and measured feedback signals, applies a control law or learned policy, and generates command signals that drive a plant or process towards desired states. Controllers span a spectrum from classical linear regulators such as PID and LQR to nonlinear model-based controllers such as Model Predictive Control and com
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:error-signal
  - urn:ngm:class:reference-setpoint
  - urn:ngm:class:control-output
requires:
  - urn:ngm:class:actuator
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:sensor
  - urn:ngm:class:plant-model
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-control
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:stability
dependsOn:
  - urn:ngm:class:system-identification
  - urn:ngm:class:real-time-computing
implements:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:linear-quadratic-regulator
  - urn:ngm:class:reinforcement-learning-policy
contrastsWith:
  - urn:ngm:class:open-loop-control
  - urn:ngm:class:manual-control
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:pid-controller
  - urn:ngm:class:state-space-model
  - urn:ngm:class:control-law
partOf:
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:cyber-physical-systems
relatedTo:
  - urn:ngm:class:kinematics
  - urn:ngm:class:dynamics
  - urn:ngm:class:state-observer
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:state-observer
---

# Controller

A Controller is a computational or hardware module that receives a reference setpoint and measured feedback signals, applies a control law or learned policy, and generates command signals that drive a plant or process towards desired states. Controllers span a spectrum from classical linear regulators such as PID and LQR to nonlinear model-based controllers such as Model Predictive Control and computed-torque methods, as well as data-driven approaches including neural network policies trained via reinforcement learning. Operating within closed-loop feedback architectures, the controller continuously computes an error signal — the difference between desired and measured output — and produces corrective actuation to minimise that error subject to stability and performance constraints.
