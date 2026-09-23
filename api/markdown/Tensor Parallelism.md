
Tensor parallelism is a model-parallel training and inference technique that splits individual weight tensors, and the matrix multiplications that use them, across multiple accelerators so that each device holds and computes a shard of every layer. Partial results are combined with collective communication such as all-reduce. It lets models whose layers exceed a single device's memory run at scale, and is typically combined with data and pipeline parallelism.

- ### Content
  - Within a layer, weight matrices are partitioned along rows or columns so each device computes a slice of the matrix multiplication, after which an all-reduce or all-gather combines the partial outputs. This keeps per-device memory bounded but introduces communication on the critical path, so it is usually confined to the high-bandwidth interconnect within a single node. Frameworks such as Megatron-LM popularised the approach, and it composes with pipeline and data parallelism in 3D-parallel training of frontier models.

