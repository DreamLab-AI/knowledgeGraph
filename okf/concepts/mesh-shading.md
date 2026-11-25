---
okf_version: "0.2"
type: Class
title: Mesh Shading
resource: urn:ngm:class:mesh-shading
domain: spatial-computing
description: Mesh shading is a GPU rendering pipeline model, exposed through APIs such as Vulkan and DirectX 12, that replaces the fixed vertex-and-geometry-shader stages with programmable task and mesh shaders operating on small groups of primitives called meshlets. It gives applications direct control over primitive culling, level-of-detail selection and amplification within the shader itself, removing bottl
maturity: emerging
quality: 0.65
is-a:
  - urn:ngm:class:graphics-api
requires:
  - urn:ngm:class:graphics-api
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Mesh Shading

Mesh shading is a GPU rendering pipeline model, exposed through APIs such as Vulkan and DirectX 12, that replaces the fixed vertex-and-geometry-shader stages with programmable task and mesh shaders operating on small groups of primitives called meshlets. It gives applications direct control over primitive culling, level-of-detail selection and amplification within the shader itself, removing bottlenecks inherent in the traditional pipeline. Mesh shading is used to render highly detailed geometry more efficiently in modern real-time graphics engines.
