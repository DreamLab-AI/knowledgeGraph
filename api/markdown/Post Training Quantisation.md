
Post-training quantisation (PTQ) converts a trained full-precision neural network to a lower-precision representation, typically 8-bit integers, without re-running the original training loop. A small calibration dataset is used to estimate the dynamic range of activations so that scale and zero-point parameters can be chosen. PTQ trades a small, usually recoverable, drop in accuracy for substantial reductions in model size and inference cost.

- ### Overview
  - PTQ operates on a frozen, already-trained model. A representative calibration set is passed through the network to record the statistical range of each tensor; from these ranges the quantiser derives per-tensor or per-channel scale and zero-point values that map floating-point values onto an integer grid. Because no gradient updates are performed, PTQ is fast and requires no labelled data beyond calibration, distinguishing it from quantisation-aware training.
- ### Mechanisms
  - Calibration-set range estimation for activations
  - Per-tensor versus per-channel scaling
  - Symmetric and asymmetric integer mapping
  - INT8 and lower bit-width weight encoding
  - Accuracy-recovery techniques such as bias correction
- ### Applications
  - Shrinking large language models for commodity GPUs
  - Deploying vision models on mobile and embedded NPUs
  - Reducing inference cost in high-throughput serving
  - Preparing models for INT8 acceleration on edge silicon
- ### Provenance

