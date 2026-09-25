3D parallelism is a distributed training strategy that combines data parallelism, tensor parallelism and pipeline parallelism along three independent axes to train models too large for a single accelerator or single parallelism scheme alone. Each axis partitions a different dimension of the problem: data parallelism splits the batch, tensor parallelism splits individual layers across devices, and pipeline parallelism splits the layer stack across stages. Frameworks such as Megatron-LM and DeepSpeed implement 3D parallelism to scale training to thousands of GPUs.

### Provenance

