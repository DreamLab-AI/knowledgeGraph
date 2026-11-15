---
okf_version: "0.2"
type: Class
title: WebGPU
resource: urn:ngm:class:webgpu
domain: spatial-computing
description: WebGPU is a modern web standard and API that exposes the capabilities of contemporary graphics processing units to web applications for both rendering and general-purpose computation. It provides a low-overhead, explicit interface modelled on native APIs such as Vulkan, Metal and Direct3D 12, succeeding WebGL. WebGPU enables high-performance graphics, compute shaders, and GPU-accelerated machine l
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:graphics-api
hasPart:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:wgsl
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:real-time-rendering
dependsOn:
  - urn:ngm:class:gpu
implements:
  - urn:ngm:class:rendering-pipeline
contrastsWith:
  - urn:ngm:class:vulkan
bridgesTo:
  - urn:ngm:class:vulkan
uses:
  - urn:ngm:class:wgsl
  - urn:ngm:class:rendering-pipeline
supports:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:parallel-computing
standardizedBy:
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:cuda
  - urn:ngm:class:compute-shader
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# WebGPU

WebGPU is a modern web standard and API that exposes the capabilities of contemporary graphics processing units to web applications for both rendering and general-purpose computation. It provides a low-overhead, explicit interface modelled on native APIs such as Vulkan, Metal and Direct3D 12, succeeding WebGL. WebGPU enables high-performance graphics, compute shaders, and GPU-accelerated machine learning directly in the browser.
