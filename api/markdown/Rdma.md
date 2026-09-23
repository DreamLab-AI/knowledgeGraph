
Remote Direct Memory Access (RDMA) is a networking capability that lets one computer read from or write to the memory of another without involving either machine's operating system or CPU on the data path. By bypassing kernel buffering and copying, RDMA delivers very low latency and high throughput, which is essential for the collective communication patterns of large-scale distributed training. It is exposed through fabrics such as InfiniBand and RoCE and underpins high-performance computing clusters.

- ### Overview
  - RDMA hardware moves data directly between the memory regions of two hosts, eliminating kernel involvement and extra copies.
  - This zero-copy, kernel-bypass path drives the all-reduce and all-gather operations that dominate distributed deep-learning traffic.
  - Fabrics such as InfiniBand and RoCE provide the transport, while GPUDirect lets accelerators exchange data without staging through host memory.
- ### Mechanisms
  - Kernel-bypass data path with direct memory placement.
  - Zero-copy transfers between registered memory regions.
  - Queue-pair work-request model for asynchronous operations.
  - GPUDirect RDMA for accelerator-to-accelerator transfers.
- ### Applications
  - Synchronising gradients in large-scale model training.
  - High-performance computing simulations and storage fabrics.
  - Low-latency inference serving and parameter exchange.
- ### Performance factors
  - Latency is dominated by fabric quality and topology.
  - Bandwidth scales with link width and congestion control.
  - Memory registration overhead must be amortised across transfers.
- ### Provenance

