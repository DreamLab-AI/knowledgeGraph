---
okf_version: "0.2"
type: Class
title: Control Algorithm
resource: urn:ngm:class:control-algorithm
domain: artificial-intelligence
description: ControlAlgorithm is a formalised mathematical and computational procedure that generates actuator commands to drive a dynamic system from its current state toward a desired target state, exploiting feedback from sensors, an internal model of the plant, or learned approximations of system dynamics...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:dynamical-systems
  - urn:ngm:class:computational-intelligence
  - urn:ngm:class:control-theory
  - urn:ngm:class:feedback-control
  - urn:ngm:class:optimal-control
hasPart:
  - urn:ngm:class:adaptation-law
  - urn:ngm:class:cost-function
  - urn:ngm:class:receding-horizon
  - urn:ngm:class:reference-model
  - urn:ngm:class:reward-signal
  - urn:ngm:class:safety-constraint
  - urn:ngm:class:state-observer
  - urn:ngm:class:switching-surface
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:pid-controller
requires:
  - urn:ngm:class:actuator-model
  - urn:ngm:class:constraint-specification
  - urn:ngm:class:plant-model
  - urn:ngm:class:sensor-feedback
  - urn:ngm:class:stability-analysis
  - urn:ngm:class:state-space
enables:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:energy-management
  - urn:ngm:class:fault-tolerant-control
  - urn:ngm:class:process-automation
  - urn:ngm:class:force-control
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-system
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:optimisation
  - urn:ngm:class:probability-theory
  - urn:ngm:class:differential-equations
  - urn:ngm:class:lyapunov-stability
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:neural-network
implements:
  - urn:ngm:class:h-infinity-control
  - urn:ngm:class:iterative-learning-control
  - urn:ngm:class:linear-quadratic-regulator
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:sliding-mode-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:pid-controller
  - urn:ngm:class:reinforcement-learning
contrastsWith:
  - urn:ngm:class:open-loop-control
  - urn:ngm:class:rule-based-systems
  - urn:ngm:class:expert-systems
  - urn:ngm:class:bang-bang-control
uses:
  - urn:ngm:class:hardware-in-the-loop-testing
  - urn:ngm:class:system-identification
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:simulation
  - urn:ngm:class:state-estimation
supports:
  - urn:ngm:class:aerospace
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:humanoid-robotics
  - urn:ngm:class:power-systems
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:chemical-process-control
standardizedBy:
  - urn:ngm:class:do-178-c
  - urn:ngm:class:iec-61511
  - urn:ngm:class:ieee-control-systems-society
  - urn:ngm:class:ifac
  - urn:ngm:class:iso-26262
relatedTo:
  - urn:ngm:class:dynamics
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:formal-verification
  - urn:ngm:class:safety-critical-systems
  - urn:ngm:class:control-theory
  - urn:ngm:class:kinematics
  - urn:ngm:class:machine-learning-discipline
---

# Control Algorithm

ControlAlgorithm is a formalised mathematical and computational procedure that generates actuator commands to drive a dynamic system from its current state toward a desired target state, exploiting feedback from sensors, an internal model of the plant, or learned approximations of system dynamics...
