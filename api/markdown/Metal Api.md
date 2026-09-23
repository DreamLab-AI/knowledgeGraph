
Metal is Apple's low-level graphics and compute application programming interface that provides near-direct access to the GPU on Apple platforms. It minimises driver overhead, exposes explicit command-buffer and resource management, and unifies rendering and general-purpose compute under one programming model. Metal is the platform-native alternative to cross-vendor APIs such as Vulkan and the legacy OpenGL on Apple hardware.

- ### Overview
  - Metal gives developers explicit control over GPU command submission, memory, and synchronisation to reduce CPU overhead.
  - It serves both real-time rendering and general-purpose compute, including machine-learning kernels on Apple silicon.
  - Being vendor-specific, it is highly optimised for Apple GPUs but is not portable across other hardware.
- ### Key aspects
  - Command buffers and encoders explicitly schedule GPU work for low-overhead submission.
  - The Metal Shading Language compiles to GPU programs for rendering and compute.
  - Resource heaps and argument buffers give fine-grained control over GPU memory.
  - A unified rendering-and-compute model supports graphics, image processing, and ML workloads.
- ### Applications
  - Game and application rendering on iOS, iPadOS, and macOS.
  - On-device machine-learning acceleration on Apple silicon.
  - High-performance image, video, and spatial-computing pipelines on Apple platforms.
- ### Provenance

