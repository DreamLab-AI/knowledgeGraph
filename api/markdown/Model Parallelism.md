
Model parallelism is a distributed training strategy that splits a single neural network's parameters and computation across multiple accelerators when the model is too large to fit in one device's memory. Variants include tensor parallelism (splitting within layers) and pipeline parallelism (splitting across layers into stages). It is essential for training large language models and is often combined with data parallelism.

- ### Content
  - Tensor parallelism partitions matrix multiplications across devices within a layer, while pipeline parallelism assigns consecutive layers to different devices and overlaps micro-batches to hide bubbles. Communication overhead and load balancing are the central trade-offs, motivating hybrid 3D strategies combining tensor, pipeline, and data parallelism.

