- ### Definition
  - Differentiable Architecture refers to a neural network design paradigm, most prominently realised in Differentiable Architecture Search (DARTS), in which discrete structural choices — such as which operation to place at each edge of a candidate graph or how to connect layers — are relaxed to continuous mixture weights over a predefined set of operations. This relaxation renders the architecture selection problem differentiable, allowing the architecture parameters to be optimised jointly with network weights via gradient descent on a validation loss. Once optimised, the continuous mixture is discretised to yield a final architecture, dramatically reducing the computational cost of neural architecture search compared to evolutionary or reinforcement learning methods.

- ### Semantic Classification
  - owl-class:: differentiable-architecture:Differentiable Architecture
  - owl-role:: Concept

- ### Relationships
  - uses [[Gradient Descent]]
  - uses [[Neural Network Architecture]]
  - enables [[Machine Learning Discipline]]
  - relatedTo [[Hyperparameter]]
  - relatedTo [[Deep Learning]]
  - relatedTo [[Knowledge Distillation]]

- ### Content
  - Differentiable Architecture Search (DARTS) and related methods address the combinatorial challenge of neural architecture search (NAS) by replacing discrete architectural decisions with continuous relaxations. In DARTS, each directed edge in a computation graph carries a weighted mixture over a set of candidate operations (e.g., convolution sizes, pooling, skip connections, identity). Architecture parameters — the mixture weights — are updated by gradient descent on a validation set, whilst network weights are updated on a training set. At the end of optimisation, the operation with the highest weight on each edge is selected, yielding a final discrete architecture.
  - This bilevel optimisation formulation, whilst computationally efficient relative to black-box NAS methods, introduces challenges including overfitting of architecture parameters to the validation set, performance collapse (where skip connections dominate due to their zero-cost gradient properties), and sensitivity to the candidate operation set. Subsequent methods such as PC-DARTS, SNAS, and GDAS address these failure modes through partial-channel connections, stochastic sampling, and Gumbel-softmax relaxations respectively.
  - Differentiable architecture techniques are applied to image classification backbones, object detection heads, and generative model architectures. The discovered architectures — such as those in the DARTS original paper evaluated on CIFAR-10 and ImageNet — often achieve competitive performance with lower parameter counts, motivating their use in edge deployment scenarios where Model Compression is important. The approach conceptually complements hyperparameter optimisation and Knowledge Distillation in the broader landscape of automated machine learning (AutoML).

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z