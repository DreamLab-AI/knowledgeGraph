- ### Definition
  - A neural network technique that normalises the activations across the features of a single training example, stabilising and accelerating training. It is widely used in transformer architectures where it normalises each token's representation independently of the batch.

- ### Semantic Classification
  - owl-class:: general:LayerNormalization
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Neural Network]]
  - bridges-to:: [[Deep Learning]], [[Backpropagation]]
  - requires:: [[Activation Function]]
  - enables:: [[Transformer Architecture]]

- ### Content
  - Layer normalisation rescales the activations within each example to have a consistent mean and variance across the feature dimension, then applies learnable scale and shift parameters. Unlike batch normalisation, it does not depend on other examples in the batch, which suits variable-length sequences.
  - By keeping the distribution of activations stable across layers, it reduces sensitivity to initialisation and learning rate and helps gradients flow during backpropagation. It is a standard component of transformer blocks used in modern language and vision models.

- ### Provenance
  - sources:: [[https://arxiv.org/abs/1607.06450]]
  - migration-date:: 2026-05-29T00:00:00Z