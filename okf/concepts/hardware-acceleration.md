---
okf_version: "0.2"
type: Class
title: Hardware Acceleration
resource: urn:ngm:class:hardware-acceleration
domain: spatial-computing
description: The use of specialised hardware components, particularly GPUs and dedicated processors, to offload computationally intensive rendering, physics simulation, and AI workloads from the CPU, enabling real-time performance essential for immersive VR/AR metaverse experiences.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:computing-infrastructure
hasPart:
  - urn:ngm:class:gpu
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:tensor-core
  - urn:ngm:class:ray-tracing
requires:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:device-drivers
enables:
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:real-time-vr-performance
dependsOn:
  - urn:ngm:class:computing-infrastructure
  - urn:ngm:class:memory-bandwidth
contrastsWith:
  - urn:ngm:class:cpu-compute
bridgesTo:
  - urn:ngm:class:computing-infrastructure
  - urn:ngm:class:inference
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:vulkan
  - urn:ngm:class:directx
  - urn:ngm:class:opencl
supports:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:cloud-rendering
relatedTo:
  - urn:ngm:class:variable-rate-shading
  - urn:ngm:class:latency
---

# Hardware Acceleration

The use of specialised hardware components, particularly GPUs and dedicated processors, to offload computationally intensive rendering, physics simulation, and AI workloads from the CPU, enabling real-time performance essential for immersive VR/AR metaverse experiences.
