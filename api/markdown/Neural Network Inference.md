Neural network inference is the phase in which a trained neural-network model is applied to new input data to produce predictions, classifications or generations, as distinct from the training phase that learns the model's parameters. It is computationally dominated by forward-pass matrix and tensor operations and is frequently accelerated on GPUs and dedicated hardware. Inference efficiency, measured in latency, throughput and energy, is critical for deploying models in real-time, edge and large-scale serving environments.

### Overview

- Neural network inference runs the forward pass of a trained model to turn inputs into outputs.
- Unlike training, inference does not compute gradients or update weights, so it can be heavily optimised.
- Efficient inference is the bottleneck for deploying [[Deep Learning]] at scale and at the edge.

### Mechanisms

- Forward propagation evaluates layered tensor operations to produce predictions.
- Hardware acceleration on [[GPU]] and dedicated accelerators raises throughput.
- [[Model Optimization]] techniques such as quantisation and pruning reduce latency and memory.
- Standard exchange formats like [[ONNX]] enable portable deployment across runtimes.

### Applications

- [[Model Serving]] and [[Model Deployment]] for production prediction APIs.
- Low-latency inference on [[Edge Computing]] devices.
- [[Batch Processing]] of large datasets for offline scoring.
- Real-time generation and classification in interactive applications.

### Provenance

