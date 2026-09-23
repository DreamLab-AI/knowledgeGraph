
A high-bandwidth interconnect is a communication link or fabric engineered to move very large volumes of data between processors, accelerators, or nodes with minimal latency, enabling tightly-coupled parallel computation. In machine learning it is the substrate over which gradients, activations, and parameters are exchanged during distributed training, directly bounding how efficiently models scale across many devices. Technologies such as NVLink, InfiniBand, and RDMA fabrics provide the throughput that large-scale training demands.

- ### Overview
  - High-bandwidth interconnects determine how efficiently computation scales across devices.
  - In distributed training, communication of gradients and parameters can dominate runtime.
  - Both intra-node links (NVLink) and inter-node fabrics (InfiniBand) matter for scaling.
  - Bandwidth and latency together bound achievable parallel speed-up.
- ### Key aspects
  - Aggregate bandwidth sets the ceiling on collective-communication throughput.
  - Low latency keeps synchronisation overhead small as device counts grow.
  - Topology (e.g. fat-tree, mesh) shapes bisection bandwidth and contention.
  - RDMA and kernel-bypass reduce CPU overhead on the critical communication path.
- ### Applications
  - Scaling large-language-model training across many GPUs and nodes.
  - All-reduce gradient synchronisation in data-parallel training.
  - Tensor and pipeline exchange in model-parallel training.
  - Tightly-coupled HPC simulations needing fast inter-node messaging.
- ### Provenance

