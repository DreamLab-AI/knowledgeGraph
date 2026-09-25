GPU memory is the high-bandwidth memory resident on or tightly coupled to a graphics processing unit that stores model weights, activations, gradients, and intermediate buffers during computation. Its capacity and bandwidth are frequently the binding constraint on the size of models that can be trained or served, motivating techniques such as quantisation, gradient checkpointing, and model parallelism. Efficient use of GPU memory directly determines achievable throughput and batch size.

### Overview

- GPU memory holds the tensors a neural network needs during forward and backward passes, including weights, activations, and optimiser state.
- Capacity limits cap model and batch size, while bandwidth limits how fast data can feed the compute cores.
- Memory pressure is a primary driver of efficiency techniques across both training and inference.

### Key aspects

- Capacity (in gigabytes) bounds the largest model and batch that fit on a device.
- Bandwidth determines how quickly tensors move between memory and compute units.
- Memory fragmentation and allocation strategy affect usable capacity in practice.
- Activation, weight, and optimiser-state footprints each contribute to total consumption.

### Applications

- Training large language models where weights and activations dominate memory use.
- Serving inference with techniques like quantisation to fit larger models on commodity GPUs.
- Scaling across devices with model and tensor parallelism when a single GPU is insufficient.

### Provenance

