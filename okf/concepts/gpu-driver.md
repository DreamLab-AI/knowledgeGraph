---
okf_version: "0.2"
type: Class
title: GPU Driver
resource: urn:ngm:class:gpu-driver
domain: spatial-computing
description: A GPU driver is the system software that mediates between an operating system or application graphics API and the physical graphics processing unit, translating high-level rendering and compute commands into hardware-specific instructions. It manages GPU memory, command submission queues, context switching, and synchronisation, and exposes standard interfaces so that applications need not target i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:hardware-abstraction-layer
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:firmware
enables:
  - urn:ngm:class:vulkan
  - urn:ngm:class:cuda
  - urn:ngm:class:hardware-acceleration
dependsOn:
  - urn:ngm:class:operating-system
  - urn:ngm:class:gpu
implements:
  - urn:ngm:class:graphics-api
uses:
  - urn:ngm:class:memory-management
supports:
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:compute-shader
partOf:
  - urn:ngm:class:operating-system
relatedTo:
  - urn:ngm:class:directx
  - urn:ngm:class:open-gl
  - urn:ngm:class:graphics-api
---

# GPU Driver

A GPU driver is the system software that mediates between an operating system or application graphics API and the physical graphics processing unit, translating high-level rendering and compute commands into hardware-specific instructions. It manages GPU memory, command submission queues, context switching, and synchronisation, and exposes standard interfaces so that applications need not target individual hardware models. Driver quality and versioning directly affect performance, feature availability, and stability of graphics and GPU-compute workloads.
