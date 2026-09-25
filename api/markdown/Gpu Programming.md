GPU programming is the practice of writing software that exploits the massively parallel architecture of graphics processing units to accelerate computation across thousands of concurrent threads. It encompasses both graphics pipelines, expressed through shaders, and general-purpose compute expressed through frameworks such as CUDA, OpenCL, and Vulkan compute. Effective GPU programming requires reasoning about memory hierarchies, thread divergence, and data parallelism to achieve high throughput on suitable workloads.

### Overview

- GPU programming maps data-parallel problems onto a SIMT (single instruction, multiple thread) execution model where warps of threads execute in lockstep.
- Performance hinges on coalesced memory access, minimising divergence, and overlapping computation with data transfer across the host-device boundary.
- Modern toolchains expose both fixed-function graphics stages and fully programmable compute kernels, blurring the line between rendering and general computation.

### Mechanisms

- Kernel launch configuration: organising work into grids, blocks, and threads matched to the device.
- Memory hierarchy management across global, shared, constant, and register memory to maximise bandwidth.
- Synchronisation primitives and atomics for safe cooperation within thread blocks.
- Asynchronous streams and pipelining to hide host-device transfer latency.

### Applications

- Real-time graphics rendering and shading in games and immersive applications.
- Training and inference of deep neural networks across machine learning workloads.
- Scientific simulation, ray tracing, and neural rendering for spatial computing.

### Provenance

