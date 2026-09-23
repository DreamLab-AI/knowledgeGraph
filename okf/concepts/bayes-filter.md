---
okf_version: "0.2"
type: Class
title: Bayes Filter
resource: urn:ngm:class:bayes-filter
domain: artificial-intelligence
description: BayesFilter denotes the canonical recursive probabilistic framework for sequential state estimation in partially-observable stochastic dynamical systems, computing at each timestep the posterior belief bel(x_t) = p(x_t | z_{1:t}, u_{1:t}) over the latent system state x_t conditioned on the full h...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:recursive-estimator
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:state-estimation
  - urn:ngm:class:probabilistic-filter
  - urn:ngm:class:sequential-monte-carlo
hasPart:
  - urn:ngm:class:motion-model
  - urn:ngm:class:observation-model
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:prior-distribution
  - urn:ngm:class:prediction-step
  - urn:ngm:class:measurement-update-step
  - urn:ngm:class:belief-state
  - urn:ngm:class:normalisation-constant
requires:
  - urn:ngm:class:motion-model
  - urn:ngm:class:observation-model
  - urn:ngm:class:sensor-measurements
  - urn:ngm:class:markov-assumption
  - urn:ngm:class:motion-model
  - urn:ngm:class:observation-model
  - urn:ngm:class:initial-belief
  - urn:ngm:class:control-inputs
enables:
  - urn:ngm:class:robot-localisation
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:target-tracking
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:belief-space-planning
  - urn:ngm:class:active-perception
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:stochastic-processes
  - urn:ngm:class:hidden-markov-models
  - urn:ngm:class:dynamic-bayesian-networks
  - urn:ngm:class:measure-theory
implements:
  - urn:ngm:class:chapman-kolmogorov-equation
  - urn:ngm:class:state-estimation
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:bayes-rule
  - urn:ngm:class:state-estimation
  - urn:ngm:class:bayesian-inference
contrastsWith:
  - urn:ngm:class:least-squares-estimation
  - urn:ngm:class:batch-optimisation
  - urn:ngm:class:pose-graph
  - urn:ngm:class:deterministic-observer
  - urn:ngm:class:pure-neural-state-estimation
bridgesTo:
  - urn:ngm:class:robo-navigation-and-planning
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:resampling
  - urn:ngm:class:linearisation
  - urn:ngm:class:sigma-point-sampling
supports:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:mobile-robotics
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:aerospace-guidance-navigation-control
  - urn:ngm:class:drone-autonomy
standardizedBy:
  - urn:ngm:class:ieee-robotics-and-automation-society
  - urn:ngm:class:ros-navigation-stack
  - urn:ngm:class:probabilistic-robotics-textbook
relatedTo:
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:factor-graph
  - urn:ngm:class:variational-inference
  - urn:ngm:class:pomdp
  - urn:ngm:class:smoothing-and-mapping
---

# Bayes Filter

BayesFilter denotes the canonical recursive probabilistic framework for sequential state estimation in partially-observable stochastic dynamical systems, computing at each timestep the posterior belief bel(x_t) = p(x_t | z_{1:t}, u_{1:t}) over the latent system state x_t conditioned on the full h...
