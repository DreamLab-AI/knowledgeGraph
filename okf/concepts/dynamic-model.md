---
okf_version: "0.2"
type: Class
title: Dynamic Model
resource: urn:ngm:class:dynamic-model
domain: ai
description: A Dynamic Model is a mathematical or computational representation of a system that explicitly captures how the system's state evolves over time in response to inputs, internal dynamics, and disturbances. Distinguished from static models by their time-varying state equations—typically differential equations for continuous systems or recurrence relations for discrete systems—dynamic models are funda
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:simulation
  - urn:ngm:class:mathematical-model
  - urn:ngm:class:predictive-model
  - urn:ngm:class:probabilistic-model
hasPart:
  - urn:ngm:class:state-space-representation
  - urn:ngm:class:ordinary-differential-equation
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:system-identification
  - urn:ngm:class:state-estimation
  - urn:ngm:class:inertia-tensor
  - urn:ngm:class:jacobian-computation
requires:
  - urn:ngm:class:state-machine
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:training-data
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:optimisation-solver
enables:
  - urn:ngm:class:model-based-control
  - urn:ngm:class:simulation-engine
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:digital-twin
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:world-model
  - urn:ngm:class:trajectory-optimisation
dependsOn:
  - urn:ngm:class:system-identification
  - urn:ngm:class:lagrangian-mechanics
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:deep-learning
  - urn:ngm:class:numerical-integration
implements:
  - urn:ngm:class:ordinary-differential-equation
  - urn:ngm:class:neural-odes
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:state-space-control
contrastsWith:
  - urn:ngm:class:static-model
  - urn:ngm:class:model-free-reinforcement-learning
  - urn:ngm:class:reactive-control
uses:
  - urn:ngm:class:state-machine
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:mu-jo-co
  - urn:ngm:class:physics-simulation-engine
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:vae
supports:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:aerial-robotics
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:process-control
  - urn:ngm:class:climate-modelling
standardizedBy:
  - urn:ngm:class:ieee-control-systems-society
  - urn:ngm:class:ifac
relatedTo:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:world-model
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:model-based-reinforcement-learning
  - urn:ngm:class:embodied-ai-simulation
  - urn:ngm:class:sim-to-real-transfer
---

# Dynamic Model

A Dynamic Model is a mathematical or computational representation of a system that explicitly captures how the system's state evolves over time in response to inputs, internal dynamics, and disturbances. Distinguished from static models by their time-varying state equations—typically differential equations for continuous systems or recurrence relations for discrete systems—dynamic models are fundamental to control engineering, physics simulation, robotics, and economic forecasting. They may be physics-derived from first principles, identified from data using system identification techniques, or learned end-to-end from observations using neural networks.
