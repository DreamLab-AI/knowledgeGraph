
A mini-batch is a small, fixed-size subset of a training dataset processed together in a single forward and backward pass when training a machine learning model. Mini-batch gradient descent computes the gradient over the mini-batch rather than over a single example (stochastic) or the entire dataset (full batch), balancing the noise-reduction benefits of larger batches against the computational and memory cost. The mini-batch size is a key hyperparameter that influences convergence behaviour, gradient variance, hardware utilisation and generalisation.

- ### Overview
	- Mini-batching is the default training regime in modern [[Deep Learning]] because it maps efficiently onto vectorised hardware.
	- Batch size trades gradient noise against throughput: smaller batches add regularising noise, larger batches give smoother, more parallelisable updates.
	- An [[Epoch]] is one full pass over the dataset, comprising many mini-batch steps.
	- Batch construction usually involves shuffling and sometimes stratified or class-balanced sampling.
- ### Key aspects
	- **Gradient estimation**: the mini-batch gradient is an unbiased estimate of the full-batch gradient with variance inversely related to batch size.
	- **Hardware utilisation**: batched tensors enable dense [[Matrix Multiplication]] that saturates [[GPU Acceleration]].
	- **Scaling**: large-batch training often pairs with learning-rate warmup and scaling rules to preserve convergence.
	- **Memory bound**: maximum batch size is constrained by accelerator memory, motivating gradient accumulation.
- ### Applications
	- Training all major neural architectures including CNNs, transformers and recurrent networks.
	- Distributed training where each worker processes a shard of the global batch under [[Data Parallelism]].
	- Curriculum and contrastive learning, where batch composition affects the learning signal.
- ### Provenance

