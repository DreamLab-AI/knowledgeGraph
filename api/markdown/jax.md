- ### Definition
  - A Python library from Google for high-performance numerical computing and machine learning research, combining NumPy-style array operations with automatic differentiation and just-in-time compilation.

- ### Semantic Classification
  - owl-class:: deep-learning:JAX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Deep Learning Domain]]
  - bridges-to:: [[PyTorch]]
  - requires:: [[Automatic Differentiation]], [[Hardware Acceleration]]
  - enables:: [[Backpropagation]]

- ### Content
  - JAX provides composable function transformations, including grad for differentiation, jit for just-in-time compilation through XLA, and vmap and pmap for automatic vectorisation and parallelisation. It follows a functional programming style with immutable arrays and pure functions.
  - The compilation backend targets CPUs, GPUs and TPUs, which makes JAX attractive for large-scale research and high-performance experimentation. Higher-level neural network libraries such as Flax and Haiku build on JAX to provide model abstractions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z