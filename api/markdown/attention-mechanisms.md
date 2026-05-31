- ### Definition
  - Attention mechanisms let a neural network weight different parts of its input when computing a representation, focusing on the most relevant elements. They are the core component of transformer architectures.

- ### Semantic Classification
  - owl-class:: deep-learning:AttentionMechanisms
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Attention Mechanism]]
  - bridges-to:: [[Deep Learning]], [[Vision Transformer]]
  - requires:: [[Neural Network]]
  - enables:: [[Transformer]], [[Multi-Head Attention]]

- ### Content
  - Attention mechanisms compute a weighted combination of values, where the weights depend on the similarity between a query and a set of keys. This allows a model to draw information selectively from any position in the input rather than relying on fixed-distance connections.
  - Self-attention applies the mechanism within a single sequence and is the building block of transformers, where multiple attention heads run in parallel. Attention is now used across language, vision and multimodal models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z