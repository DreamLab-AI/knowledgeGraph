
Model pruning is a neural-network compression technique that removes redundant or low-importance parameters, neurons, or structural components from a trained model to reduce its size and computational cost while preserving accuracy. Pruning may be unstructured, zeroing individual weights to induce sparsity, or structured, removing whole channels, filters, or layers to yield models that run faster on standard hardware. Importance is judged by criteria such as weight magnitude or sensitivity, and pruning is typically followed by fine-tuning to recover lost accuracy. It is a core method for deploying large models on resource-constrained and edge environments.

- Model pruning removes redundant parameters or components from a trained [[Neural Network]] to shrink it while keeping accuracy. It is a method of [[Model Compression]] and a contributor to [[Model Optimization]].
- It exploits the observation that large models are heavily over-parameterised, leaving much capacity safely removable.
- ### Overview
- Pruning ranks parameters or structures by an importance criterion such as magnitude or sensitivity, removes the least important, and then fine-tunes the survivors to recover any accuracy lost.
- Unstructured pruning zeroes individual weights to create sparse matrices, while structured pruning removes whole filters, channels, or heads, producing dense smaller models that run efficiently on commodity hardware.
- It is often combined with quantisation and distillation in a deployment pipeline to meet strict latency and memory budgets.
- ### Mechanisms
- Magnitude-based and sensitivity-based importance scoring.
- Unstructured (sparse) versus structured (channel/filter) pruning.
- Iterative prune-and-[[Fine-Tuning]] cycles.
- One-shot pruning versus gradual schedules during training.
- ### Applications
- Deploying models to mobile and [[Edge Computing]] devices.
- Reducing inference latency and energy in production serving.
- Compressing large vision and language models.
- Hardware-aware optimisation alongside [[Knowledge Distillation]].
- ### Provenance

