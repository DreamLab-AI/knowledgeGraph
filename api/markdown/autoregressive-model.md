- ### Definition
  - A model that generates a sequence by predicting each element conditioned on the previously generated elements, factorising the joint distribution into a product of conditional distributions.

- ### Semantic Classification
  - owl-class:: machine-learning:AutoregressiveModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative Model]]
  - bridges-to:: [[Transformer]]
  - requires:: [[Probabilistic Model]]
  - enables:: [[Language Model]]

- ### Content
  - Autoregressive models decompose the probability of a sequence using the chain rule, modelling each token given its predecessors. This formulation underlies most large language models, which generate text one token at a time, as well as autoregressive models for audio and images.
  - Generation is inherently sequential, which limits parallelism at inference time, but the approach gives exact likelihoods and a simple training objective. Transformers are the dominant architecture for autoregressive sequence modelling because they handle long-range dependencies efficiently during training.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z