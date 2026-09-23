---
okf_version: "0.2"
type: Class
title: Particle Filter
resource: urn:ngm:class:particle-filter
domain: artificial-intelligence
description: ParticleFilter denotes a class of Sequential Monte Carlo (SMC) algorithms that approximate the posterior probability distribution bel(x_t) = p(x_t | z_{1:t}, u_{1:t}) over the hidden state x_t of a stochastic dynamical system by maintaining a weighted empirical measure {(x_t^(i), w_t^(i))}_{i...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:sequential-monte-carlo
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:nonparametric-filter
  - urn:ngm:class:recursive-bayesian-estimator
hasPart:
  - urn:ngm:class:effective-sample-size
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:motion-model
  - urn:ngm:class:observation-model
  - urn:ngm:class:proposal-distribution
  - urn:ngm:class:particle-set
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:resampling-scheme
requires:
  - urn:ngm:class:likelihood-function
  - urn:ngm:class:motion-model
  - urn:ngm:class:random-number-generator
  - urn:ngm:class:state-space-model
  - urn:ngm:class:resampling-algorithm
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:global-localisation
  - urn:ngm:class:target-tracking
  - urn:ngm:class:robot-localisation
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:slam
  - urn:ngm:class:kidnapped-robot-recovery
  - urn:ngm:class:target-tracking
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:markov-assumption
  - urn:ngm:class:state-space-model
implements:
  - urn:ngm:class:sampling
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:sequential-importance-sampling
  - urn:ngm:class:rao-blackwellisation
  - urn:ngm:class:auxiliary-variable-method
  - urn:ngm:class:mcmc-move-step
  - urn:ngm:class:sampling
contrastsWith:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:unscented-kalman-filter
  - urn:ngm:class:histogram-filter
  - urn:ngm:class:gaussian-process
bridgesTo:
  - urn:ngm:class:robo-navigation-and-planning
uses:
  - urn:ngm:class:imu
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:gyroscope
  - urn:ngm:class:lidar
  - urn:ngm:class:odometry
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:mobile-robot-platform
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:state-estimation
  - urn:ngm:class:wheeled-robot
standardizedBy:
  - urn:ngm:class:icra
  - urn:ngm:class:ieee-signal-processing-society
  - urn:ngm:class:iros
  - urn:ngm:class:ros-navigation-stack
  - urn:ngm:class:rss-conference
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:hidden-state
  - urn:ngm:class:localisation
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:simulation
  - urn:ngm:class:state-estimation
---

# Particle Filter

ParticleFilter denotes a class of Sequential Monte Carlo (SMC) algorithms that approximate the posterior probability distribution bel(x_t) = p(x_t | z_{1:t}, u_{1:t}) over the hidden state x_t of a stochastic dynamical system by maintaining a weighted empirical measure {(x_t^(i), w_t^(i))}_{i...
