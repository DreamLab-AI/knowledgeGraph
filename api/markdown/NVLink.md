
NVLink is NVIDIA's high-bandwidth, low-latency point-to-point interconnect that links GPUs directly to one another, and in some platforms to the CPU, providing far greater throughput than the PCIe bus it supplements. By creating a coherent, high-speed fabric between accelerators, NVLink enables fast peer-to-peer memory transfers and unified memory pooling across multiple GPUs. It is foundational to multi-GPU training and inference of large neural networks, where the interconnect bandwidth between devices often determines the achievable scaling efficiency of model and tensor parallelism.

- ### Overview
  - As neural networks grew beyond the memory and compute capacity of a single GPU, the bottleneck shifted from raw arithmetic throughput to the speed at which devices can exchange data. PCIe, designed as a general peripheral bus, became a limiting factor for tightly coupled multi-GPU workloads.
  - NVLink addresses this by providing dedicated links between GPUs with bandwidth several times that of contemporary PCIe, and by supporting cache-coherent access so that one GPU can read another's memory efficiently. In server platforms, the NVSwitch fabric extends this to all-to-all connectivity among many GPUs within a node.
  - The result is that collective operations such as all-reduce — the backbone of synchronous data-parallel training — and the activation exchanges of [[Tensor Parallelism]] run far faster, raising the parallel efficiency achievable when scaling a model across multiple devices.

- ### Key aspects
  - **Point-to-point links** — NVLink establishes direct lanes between GPU pairs, each lane carrying high bidirectional bandwidth that aggregates across multiple links per device.
  - **Memory coherence and pooling** — Coherent access allows GPUs to share memory address spaces, enabling unified memory models and reducing explicit copy overhead through [[CUDA]].
  - **NVSwitch fabric** — In dense multi-GPU servers, NVSwitch chips connect every GPU to every other at full bandwidth, eliminating topology hotspots for collective communication.
  - **Bandwidth versus PCIe** — The defining advantage is throughput: NVLink supplies several-fold the [[Bandwidth]] of PCIe, which directly improves scaling for communication-bound workloads.
  - **Low latency** — Beyond raw bandwidth, reduced [[Latency]] for small transfers benefits the frequent synchronisation steps in [[Distributed Training]].

- ### Applications
  - **Large model training** — NVLink underpins [[Model Parallelism]] and [[Tensor Parallelism]], where layers or tensors are split across GPUs that must exchange activations and gradients every step.
  - **Distributed training** — Synchronous data-parallel [[Distributed Training]] relies on fast all-reduce, accelerated substantially by the interconnect.
  - **High-performance computing** — Scientific and simulation workloads in [[High Performance Computing]] use NVLink-connected GPUs for tightly coupled parallel computation.
  - **Inference serving** — Serving very large models that exceed a single GPU's memory uses NVLink to shard the model with acceptable communication overhead.
  - **Unified memory workflows** — Coherent memory access via [[CUDA]] simplifies programming for applications that span multiple GPUs.

- ### Provenance

