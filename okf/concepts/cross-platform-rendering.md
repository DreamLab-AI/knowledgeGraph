---
okf_version: "0.2"
type: Class
title: Cross-Platform Rendering
resource: urn:ngm:class:cross-platform-rendering
domain: spatial-computing
description: Cross-platform rendering is a rendering approach that produces consistent visual output across different operating systems, hardware GPUs and graphics APIs, typically by targeting an abstraction layer rather than a single vendor-specific API. It allows a single rendering codebase to run on Windows, macOS, Linux, mobile and web targets, translating draw calls to the underlying native graphics API s
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:graphics-api
uses:
  - urn:ngm:class:graphics-api
---

# Cross-Platform Rendering

Cross-platform rendering is a rendering approach that produces consistent visual output across different operating systems, hardware GPUs and graphics APIs, typically by targeting an abstraction layer rather than a single vendor-specific API. It allows a single rendering codebase to run on Windows, macOS, Linux, mobile and web targets, translating draw calls to the underlying native graphics API such as Vulkan, Metal or DirectX. Standards bodies such as the Khronos Group maintain the graphics APIs and specifications that make cross-platform rendering practical.
