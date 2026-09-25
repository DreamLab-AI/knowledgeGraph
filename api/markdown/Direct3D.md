Direct3D is the 3D graphics application programming interface within Microsoft's DirectX collection, providing low-level access to the graphics processing unit for rendering geometry, shading, and compute workloads on Windows and Xbox platforms. It exposes the rendering pipeline through programmable shaders, command buffers, and resource state management, with modern revisions such as Direct3D 12 offering explicit, low-overhead control over GPU memory and parallelism. It is the dominant native graphics interface on Microsoft platforms and a primary backend target for game engines and real-time rendering systems.

### Overview

- Direct3D abstracts the graphics hardware behind a device and command model, letting applications submit draw and dispatch commands that the driver translates into GPU work.
- Early versions (Direct3D 9/11) used an immediate, driver-managed model; Direct3D 12 introduced an explicit, low-overhead design that exposes command queues, descriptor heaps, and manual memory and synchronisation control.
- It is a core component of the Windows graphics stack and the primary backend for most Windows-native game engines.

### Mechanisms

- Device and context objects mediate resource creation and command submission.
- Programmable shader stages (vertex, pixel, geometry, hull, domain, compute) run on the GPU and are authored in HLSL.
- Command lists and queues batch GPU work; descriptor heaps bind resources; pipeline state objects capture fixed-function configuration.
- DirectX Raytracing (DXR) extends the pipeline with hardware-accelerated [[Ray Tracing]].

### Applications

- AAA and indie game rendering on Windows and Xbox.
- Real-time visualisation, CAD, and digital content creation tools.
- GPU compute for simulation and image processing via the compute pipeline.

### Provenance

