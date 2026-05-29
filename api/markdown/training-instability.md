- ### Definition
  Pathological behaviours during neural network optimisation — including exploding/vanishing gradients, loss divergence, and oscillating loss curves — that prevent convergence. Arises from interactions between architecture depth, learning rate, batch size, and numerical precision; mitigated via gradient clipping, mixed-precision training, careful initialisation, and adaptive optimisers.

- ### Relationships
  Training Instability **requires** Gradient Clipping and Gradient Descent as core diagnostic and remediation tools. It **depends on** Neural Network architecture, Loss Function shape, and Hyperparameter settings that jointly determine stability. It **contrasts with** Overfitting, which represents excessive fitting rather than failure to fit. It is **related to** Model Training, Deep Learning (where instability is most acute), and Mixed Precision Training (a common mitigation). It **uses** Learning Rate Schedule and Distributed Training strategies to manage instability at scale.

- ### Content

  Training instability is one of the primary obstacles in training large neural networks, particularly deep architectures such as transformers and very deep convolutional networks. The phenomenon manifests in several distinct forms: gradient explosion (gradients grow unboundedly through backpropagation), gradient vanishing (gradients diminish to near-zero in early layers, halting learning), and loss landscape pathologies (saddle points, sharp minima, or chaotic loss surfaces that prevent stable descent).

  The principal causes include excessively high learning rates that overshoot minima, poorly initialised weights that create imbalanced activation distributions, batch normalisation failures in small-batch regimes, and residual connections that improperly route gradient flow. In large language model training, numerical precision issues in FP16 or BF16 computation can cause loss spikes unless gradient scaling is applied.

  Mitigation strategies are layered. At the optimiser level, gradient clipping caps the norm of gradients before the weight update step, preventing explosive updates. Adaptive optimisers (Adam, AdaFactor) adjust per-parameter learning rates, smoothing traversal of anisotropic loss surfaces. At the architecture level, skip connections in ResNets and layer normalisation in transformers provide gradient highways. Mixed-precision training with loss scaling preserves numerical range in reduced-precision arithmetic.

  Distributed training introduces additional instability vectors: gradient aggregation across workers can amplify variance, and synchronous SGD with large effective batch sizes can destabilise training through sharp minima. Techniques such as learning rate warm-up schedules and linear scaling rules help adapt single-GPU training recipes to multi-GPU regimes.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z