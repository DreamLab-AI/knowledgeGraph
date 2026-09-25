GPU-driven rendering is an architecture in which the GPU itself determines what to draw and issues its own draw commands, rather than relying on the CPU to traverse the scene and submit each object individually. Using compute shaders for culling and indirect, multi-draw commands, it minimises CPU overhead and draw-call cost, enabling scenes with very large object counts. It builds on compute capability, indirect drawing, and modern graphics APIs to keep the GPU saturated and scalable.

- GPU-driven rendering is a [[Real-Time Rendering]] architecture where the [[GPU]] decides and issues its own draw commands.
- It implements an advanced form of [[GPU Rendering]].
- It uses the [[Compute Shader]] and [[GPU Compute]] for culling and command generation.
- It enables scalable [[Level of Detail]] and [[Frustum Culling]] on device.

### Overview

- Traditional rendering relies on the CPU to traverse the scene and submit each draw, which becomes a bottleneck at high object counts.
- GPU-driven rendering shifts visibility determination and command building onto the GPU using compute and indirect-draw mechanisms.
- This minimises CPU overhead, reduces draw-call cost, and keeps the GPU saturated, allowing far larger and more detailed scenes.
- It depends on modern graphics APIs and compiled shaders that support indirect, multi-draw execution.

### Mechanisms

- Compute-shader culling computing visible instances on the GPU.
- Indirect and multi-draw commands generated without CPU per-object submission.
- On-device level-of-detail selection and instance compaction.
- Persistent GPU buffers holding scene and draw metadata.

### Applications

- Open-world and large-scene real-time engines.
- High-instance-count vegetation, crowds, and debris.
- Virtual and augmented reality demanding high throughput.
- Pipelines targeting modern explicit graphics APIs.

### Provenance

