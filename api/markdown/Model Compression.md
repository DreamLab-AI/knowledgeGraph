Model compression is the family of techniques that reduce the size, memory footprint, and computational cost of a machine learning model while preserving as much of its predictive accuracy as possible. Common methods include quantisation of weights to lower precision, pruning of redundant parameters, knowledge distillation into a smaller student model, and weight sharing. Compression is essential for deploying large neural networks on resource-constrained hardware and for reducing inference latency and energy use.

### Overview

- State-of-the-art models have grown faster than the memory and compute available on deployment targets.
- Compression closes that gap by trading a small accuracy budget for large reductions in footprint and latency.
- Techniques can be applied post-training or integrated into the training loop for better accuracy retention.
- Compression is increasingly combined with hardware-aware optimisation to exploit specific accelerators.

### Mechanisms

- Quantisation maps high-precision weights and activations to lower-bit representations.
- Pruning removes weights, channels, or whole structures that contribute little to outputs.
- Knowledge distillation transfers behaviour from a large teacher to a compact student.
- Weight sharing and low-rank factorisation reduce the number of independent parameters.

### Applications

- On-device inference for mobile and embedded systems.
- Cost reduction for large-scale serving of language models.
- Real-time computer vision where latency budgets are tight.
- Energy-efficient AI for battery-powered and edge hardware.

### Provenance

