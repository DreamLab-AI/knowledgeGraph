---
okf_version: "0.2"
type: Class
title: Model Based Control
resource: urn:ngm:class:model-based-control
domain: robotics
description: Model Based Control (MBC) is a class of control-system design paradigms in which an explicit mathematical model of the plant's dynamics — encoding kinematics, inertia tensors, contact forces, aerodynamics, or learned neural representations — is embedded within the controller to predict, plan, and...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-system
  - urn:ngm:class:trajectory-optimisation
  - urn:ngm:class:control-theory
  - urn:ngm:class:optimal-control
  - urn:ngm:class:predictive-control
  - urn:ngm:class:robot-control
hasPart:
  - urn:ngm:class:contact-model
  - urn:ngm:class:cost-function
  - urn:ngm:class:differential-dynamic-programming
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:prediction-horizon
  - urn:ngm:class:system-identification
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:ilqr
  - urn:ngm:class:constraint-set
requires:
  - urn:ngm:class:constraint-specification
  - urn:ngm:class:dynamic-model
  - urn:ngm:class:inertia-tensor
  - urn:ngm:class:state-estimation
  - urn:ngm:class:state-estimation
  - urn:ngm:class:optimisation-solver
  - urn:ngm:class:jacobian-computation
enables:
  - urn:ngm:class:autonomous-vehicle-control
  - urn:ngm:class:compliant-manipulation
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:data-efficient-learning
  - urn:ngm:class:real-time-motion-planning
  - urn:ngm:class:data-efficient-learning
  - urn:ngm:class:robust-locomotion
dependsOn:
  - urn:ngm:class:lagrangian-mechanics
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:contact-mechanics
  - urn:ngm:class:state-estimation
implements:
  - urn:ngm:class:differential-dynamic-programming
  - urn:ngm:class:quadratic-programming
  - urn:ngm:class:receding-horizon-control
  - urn:ngm:class:sequential-quadratic-programming
  - urn:ngm:class:interior-point-methods
  - urn:ngm:class:koopman-operator-methods
contrastsWith:
  - urn:ngm:class:model-free-reinforcement-learning
  - urn:ngm:class:reactive-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:behaviour-cloning
uses:
  - urn:ngm:class:drake
  - urn:ngm:class:mu-jo-co
  - urn:ngm:class:pinocchio
  - urn:ngm:class:drake
  - urn:ngm:class:osqp-solver
  - urn:ngm:class:hpipm
  - urn:ngm:class:casadi
  - urn:ngm:class:acados
supports:
  - urn:ngm:class:aerial-robotics
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:industrial-manipulation
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:process-control
  - urn:ngm:class:surgical-robotics
standardizedBy:
  - urn:ngm:class:ieee-control-systems-society
  - urn:ngm:class:ifac
  - urn:ngm:class:iso-10218-robot-safety
relatedTo:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:digital-twin
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:neural-odes
---

# Model Based Control

Model Based Control (MBC) is a class of control-system design paradigms in which an explicit mathematical model of the plant's dynamics — encoding kinematics, inertia tensors, contact forces, aerodynamics, or learned neural representations — is embedded within the controller to predict, plan, and...
