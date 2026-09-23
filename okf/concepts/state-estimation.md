---
okf_version: "0.2"
type: Class
title: State Estimation
resource: urn:ngm:class:state-estimation
domain: robotics
description: State Estimation is the computational discipline of inferring the latent, unobservable internal state of a dynamical system — such as position, velocity, orientation, and joint angles — from a sequence of noisy, incomplete sensor measurements, using probabilistic inference frameworks. Core algorithms include the Kalman Filter and its nonlinear extensions (EKF, UKF), particle filters, and factor-gr
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:probabilistic-inference
hasPart:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:factor-graph
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:imu
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:system-dynamics
  - urn:ngm:class:probabilistic-model
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:navigation
  - urn:ngm:class:robot-control
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:autonomous-system
dependsOn:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:stochastic-processes
  - urn:ngm:class:linear-algebra
contrastsWith:
  - urn:ngm:class:open-loop-control
  - urn:ngm:class:deterministic-control
bridgesTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:wheel-odometry
  - urn:ngm:class:gps
relatedTo:
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:path-planning
  - urn:ngm:class:control-theory
  - urn:ngm:class:signal-processing
---

# State Estimation

State Estimation is the computational discipline of inferring the latent, unobservable internal state of a dynamical system — such as position, velocity, orientation, and joint angles — from a sequence of noisy, incomplete sensor measurements, using probabilistic inference frameworks. Core algorithms include the Kalman Filter and its nonlinear extensions (EKF, UKF), particle filters, and factor-graph optimisation methods that maintain a belief distribution over state variables over time. The field underpins autonomous navigation, robotic manipulation, aerospace guidance systems, and any cyber-physical system that must act on estimated rather than directly observed quantities. Modern formulations unify Bayesian filtering, maximum-a-posteriori smoothing, and deep-learning-based perception to achieve robust estimation under sensor failure, model mismatch, and adversarial environments.
