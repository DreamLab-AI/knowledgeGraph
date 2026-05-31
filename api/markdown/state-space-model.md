- ### Definition
  - A class of sequence model that represents a system through a latent state evolving over time according to linear dynamics, recently adapted as an efficient alternative to attention for long sequences.

- ### Semantic Classification
  - owl-class:: deep-learning:StateSpaceModel
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Neural Network]]
  - bridges-to:: [[Transformer]]
  - requires:: [[Probabilistic Model]]
  - enables:: [[Language Model]]

- ### Content
  - State space models describe sequences using a hidden state that is updated by linear recurrence and mapped to outputs. Classical formulations appear in control and time series analysis, where the Kalman filter is a well-known inference method.
  - Recent deep learning variants, including structured state space models and selective designs such as Mamba, parameterise these dynamics so that they can be trained efficiently and capture long-range dependencies. They offer near-linear scaling in sequence length, which contrasts with the quadratic cost of self-attention.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z