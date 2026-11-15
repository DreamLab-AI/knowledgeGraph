---
okf_version: "0.2"
type: Class
title: Metal Api
resource: urn:ngm:class:metal-api
domain: spatial-computing
description: Metal is Apple's low-level graphics and compute application programming interface that provides near-direct access to the GPU on Apple platforms. It minimises driver overhead, exposes explicit command-buffer and resource management, and unifies rendering and general-purpose compute under one programming model. Metal is the platform-native alternative to cross-vendor APIs such as Vulkan and the leg
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:graphics-api
requires:
  - urn:ngm:class:graphics-api
enables:
  - urn:ngm:class:hardware-acceleration
implements:
  - urn:ngm:class:graphics-api
contrastsWith:
  - urn:ngm:class:vulkan
  - urn:ngm:class:open-gl
  - urn:ngm:class:directx
  - urn:ngm:class:webgpu
uses:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:hardware-acceleration
supports:
  - urn:ngm:class:graphics-pipeline
partOf:
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:vulkan
  - urn:ngm:class:compute-shader
  - urn:ngm:class:khronos-group
  - urn:ngm:class:hardware-acceleration
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Metal Api

Metal is Apple's low-level graphics and compute application programming interface that provides near-direct access to the GPU on Apple platforms. It minimises driver overhead, exposes explicit command-buffer and resource management, and unifies rendering and general-purpose compute under one programming model. Metal is the platform-native alternative to cross-vendor APIs such as Vulkan and the legacy OpenGL on Apple hardware.
