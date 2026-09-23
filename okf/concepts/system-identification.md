---
okf_version: "0.2"
type: Class
title: System Identification
resource: urn:ngm:class:system-identification
domain: robotics
description: System identification is the discipline of constructing or refining a mathematical model of a dynamical system—parametric or non-parametric—from observed input-output experimental data, enabling accurate simulation and model-based control design. It spans classical methods such as prediction error minimisation, subspace identification, and autoregressive modelling for linear time-invariant systems
maturity: mature
quality: 0.73
is-a:
  - urn:ngm:class:robo-actuation-and-control
requires:
  - urn:ngm:class:excitation-trajectory
  - urn:ngm:class:state-estimation
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:signal-processing
  - urn:ngm:class:experimental-design
contrastsWith:
  - urn:ngm:class:domain-randomisation
  - urn:ngm:class:model-free-control
bridgesTo:
  - urn:ngm:class:physics-informed-neural-network
  - urn:ngm:class:sim-to-real-transfer
uses:
  - urn:ngm:class:regression
  - urn:ngm:class:gaussian-process-regression
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:neural-ode
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:regression
relatedTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:observer-design
  - urn:ngm:class:parameter-estimation
  - urn:ngm:class:structural-dynamics
---

# System Identification

System identification is the discipline of constructing or refining a mathematical model of a dynamical system—parametric or non-parametric—from observed input-output experimental data, enabling accurate simulation and model-based control design. It spans classical methods such as prediction error minimisation, subspace identification, and autoregressive modelling for linear time-invariant systems, through to Gaussian process regression, neural ordinary differential equations, and physics-informed learning for nonlinear and hybrid systems. In robotics and mechatronics, system identification calibrates rigid-body dynamics parameters—link inertia tensors, joint friction coefficients, and actuator gains—required by whole-body controllers and model predictive controllers to generate physically consistent torque commands. The field occupies an intersection of statistical estimation theory, control engineering, and machine learning, and is foundational to closing the sim-to-real gap in data-driven robot learning.
