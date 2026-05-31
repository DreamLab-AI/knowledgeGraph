- ### Definition
  - Sequential Monte Carlo is a family of methods that approximate evolving probability distributions using a set of weighted samples updated recursively as new observations arrive.

- ### Semantic Classification
  - owl-class:: metaverse:SequentialMonteCarlo
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Numerical Methods]]
  - bridges-to:: [[Bayesian Inference]], [[Importance Sampling]]
  - requires:: [[Monte Carlo Integration]]
  - enables:: [[Particle Filter]]

- ### Content
  - Sequential Monte Carlo represents a distribution by a population of samples, or particles, carrying importance weights, then propagates and reweights them over time, resampling to combat weight degeneracy. It is well suited to non-linear, non-Gaussian state estimation.
  - The particle filter is its best-known instance, used for tracking and localisation in robotics and XR. It builds on Monte Carlo integration and importance sampling within a Bayesian inference framework.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z