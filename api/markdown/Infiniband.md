
InfiniBand is a high-throughput, low-latency switched-fabric interconnect standard used to connect servers, storage, and accelerators in high-performance computing and large-scale AI training clusters. It provides remote direct memory access (RDMA) that bypasses the operating system kernel, enabling near-wire-speed data movement between nodes. InfiniBand is widely deployed as the backbone fabric for GPU clusters where collective communication bandwidth determines training scalability.

- ### Overview
  - InfiniBand uses a credit-based flow-control fabric that avoids packet loss under congestion.
  - RDMA lets one node read or write another node's memory directly, removing CPU and kernel overhead.
  - It is a dominant interconnect for GPU supercomputers training large neural networks.
  - Topologies such as fat-tree provide non-blocking bisection bandwidth across thousands of nodes.
- ### Key aspects
  - Kernel-bypass RDMA moves data without CPU involvement, freeing compute for the workload.
  - Hardware offload of transport and congestion control keeps tail latency low at scale.
  - Adaptive routing and lossless flow control sustain throughput during all-reduce collectives.
  - GPUDirect integration allows direct GPU-to-GPU transfers across the fabric.
- ### Applications
  - Backbone fabric for large-language-model training clusters spanning thousands of GPUs.
  - Scientific HPC simulations requiring tightly-coupled message passing.
  - Distributed storage fabrics needing low-latency block and file access.
  - Parameter and gradient exchange in data- and model-parallel training.
- ### Provenance

