- ### Definition
  - An optimisation algorithm widely used to train neural networks, combining momentum with per-parameter adaptive learning rates derived from estimates of the first and second moments of the gradients. Its name stands for adaptive moment estimation.

- ### Semantic Classification
  - owl-class:: machine-learning:AdamOptimizer
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Optimization Algorithm]]
  - bridges-to:: [[Stochastic Gradient Descent]]
  - requires:: [[Gradient Descent]]
  - enables:: [[Deep Learning]]

- ### Content
  - The Adam optimiser, introduced by Diederik Kingma and Jimmy Ba in 2014, maintains exponentially decaying averages of past gradients and squared gradients. It uses these moment estimates to scale the learning rate for each parameter individually.
  - Adam combines ideas from momentum and adaptive learning rate methods such as RMSProp, and it is a default choice for training many deep learning models because it often converges quickly with little tuning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z