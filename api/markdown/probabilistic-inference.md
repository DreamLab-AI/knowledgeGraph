- ### Definition
  - Probabilistic inference is the computation of the probability of unknown quantities given observed evidence within a probabilistic model. It produces posterior distributions used for prediction and decision making under uncertainty.

- ### Semantic Classification
  - owl-class:: machine-learning:ProbabilisticInference
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bayesian Inference]]
  - bridges-to:: [[Variational Inference]], [[Markov Chain Monte Carlo]]
  - requires:: [[Probabilistic Model]], [[Bayesian Inference]]
  - enables:: [[Uncertainty Quantification]]

- ### Content
  - Probabilistic inference computes distributions over hidden variables conditioned on data, applying rules of probability such as marginalisation and conditioning. Exact inference is tractable only for limited model classes, so approximations are widely used.
  - Common approximate methods include variational inference, which casts inference as optimisation, and Markov chain Monte Carlo, which draws samples from the posterior. These techniques support Bayesian deep learning and graphical models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z