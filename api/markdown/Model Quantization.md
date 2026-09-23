
Model quantization is a model-compression technique that reduces the numerical precision of a neural network's weights and activations, typically converting 32-bit floating-point values to lower-precision integer or float formats such as INT8, INT4 or FP8. By shrinking the memory footprint and exploiting cheaper integer arithmetic, quantization lowers latency, energy use and storage cost, usually at a small and controllable loss in accuracy. It is applied either after training (post-training quantization) or during training (quantization-aware training) to deploy large models on constrained inference hardware.

- ### Overview
	- Modern networks are trained in 32-bit floating point, but most of that precision is redundant for inference.
	- Quantization maps the wide floating-point range onto a narrow set of integer levels, commonly INT8 or INT4, using a scale and zero-point.
	- The technique is one of the principal levers for deploying [[Large Language Model]] systems within practical cost and latency budgets.
	- It composes with other compression methods such as pruning and [[Knowledge Distillation]] to compound efficiency gains.
- ### Mechanisms
	- Post-training quantization calibrates scales from a small sample of data without retraining the model.
	- Quantization-aware training inserts fake-quantization operations during training so the network learns to tolerate reduced precision.
	- Per-tensor and per-channel schemes choose how finely scales are assigned across the weight tensors.
	- Mixed-precision keeps sensitive layers in higher precision while quantizing the rest, balancing accuracy and speed.
- ### Applications
	- On-device inference for mobile, embedded and IoT deployments where memory and power are scarce.
	- Cost reduction in large-scale [[Model Serving]] by fitting more requests onto each accelerator.
	- Latency-critical pipelines where INT8 kernels exploit dedicated tensor cores on the [[GPU]].
	- Compressing foundation models for distribution and fine-tuning on consumer hardware.
- ### Provenance

