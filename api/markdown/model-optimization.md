- ### Definition
  - Model optimisation is the set of techniques that reduce the size or computational cost of a trained model while preserving accuracy. It includes quantisation, pruning and distillation to make deployment more efficient.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelOptimization
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Model Deployment]]
  - bridges-to:: [[AI Model Inference Engine]], [[Latency]]
  - requires:: [[Knowledge Distillation]]
  - enables:: [[Model Serving]], [[Inference Serving]]

- ### Content
  - Model optimisation transforms a trained model so that it runs faster, uses less memory or fits on constrained hardware. Quantisation lowers the numerical precision of weights and activations, pruning removes parameters with little effect, and distillation trains a smaller model to mimic a larger one.
  - These techniques trade a small loss in accuracy for substantial gains in latency and cost, which matters for serving at scale and on edge devices. Optimised models feed inference engines that execute them on accelerators.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z