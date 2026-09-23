---
okf_version: "0.2"
type: Class
title: Direct3D
resource: urn:ngm:class:direct3d
domain: spatial-computing
description: "Direct3D is the 3D graphics application programming interface within Microsoft's DirectX collection, providing low-level access to the graphics processing unit for rendering geometry, shading, and compute workloads on Windows and Xbox platforms. It exposes the rendering pipeline through programmable shaders, command buffers, and resource state management, with modern revisions such as Direct3D 12 "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graphics-api
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:rasterization
implements:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:graphics-pipeline
contrastsWith:
  - urn:ngm:class:vulkan
  - urn:ngm:class:webgpu
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:shader
supports:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:texture-mapping
standardizedBy:
  - urn:ngm:class:directx
relatedTo:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:game-engine
---

# Direct3D

Direct3D is the 3D graphics application programming interface within Microsoft's DirectX collection, providing low-level access to the graphics processing unit for rendering geometry, shading, and compute workloads on Windows and Xbox platforms. It exposes the rendering pipeline through programmable shaders, command buffers, and resource state management, with modern revisions such as Direct3D 12 offering explicit, low-overhead control over GPU memory and parallelism. It is the dominant native graphics interface on Microsoft platforms and a primary backend target for game engines and real-time rendering systems.
