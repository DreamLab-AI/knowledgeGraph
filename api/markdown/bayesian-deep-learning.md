- ### Definition
  - Bayesian deep learning combines neural networks with Bayesian inference to represent uncertainty over model parameters and predictions. It treats network weights as random variables with distributions rather than fixed values.

- ### Semantic Classification
  - owl-class:: deep-learning:BayesianDeepLearning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Deep Learning]]
  - bridges-to:: [[Variational Inference]], [[Probabilistic Inference]]
  - requires:: [[Deep Learning]], [[Bayesian Inference]]
  - enables:: [[Uncertainty Quantification]]

- ### Content
  - Bayesian deep learning places prior distributions over the weights of a neural network and seeks a posterior given the training data, producing predictions with calibrated uncertainty. Exact posteriors are intractable, so methods rely on approximations such as variational inference and Monte Carlo techniques.
  - Practical approaches include Monte Carlo dropout, which interprets dropout at inference as approximate sampling, and deep ensembles. The uncertainty estimates are valuable in safety-sensitive applications and in active learning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z