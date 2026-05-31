- ### Definition
  - A memory-saving technique for training neural networks that stores only a subset of intermediate activations during the forward pass and recomputes the rest during the backward pass. It trades extra computation for reduced memory use.

- ### Semantic Classification
  - owl-class:: machine-learning:GradientCheckpointing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Backpropagation]]
  - bridges-to:: [[Gradient Descent]]
  - requires:: [[Backpropagation]]
  - enables:: [[Deep Learning]]

- ### Content
  - During backpropagation, gradients depend on activations computed in the forward pass. Storing all activations consumes memory proportional to network depth, which limits the size of models that fit on a device.
  - Gradient checkpointing saves activations only at selected layers and recomputes intermediate values when needed during the backward pass. This reduces peak memory at the cost of additional forward computation, enabling training of larger models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z