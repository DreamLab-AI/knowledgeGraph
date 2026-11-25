---
okf_version: "0.2"
type: Class
title: Computer Graphics
resource: urn:ngm:class:computer-graphics
domain: spatial-computing
description: Computer Graphics is the computational discipline concerned with synthesising, manipulating, and displaying visual imagery using mathematical models and algorithms running on specialised hardware. It encompasses the full pipeline from scene representation—geometry, materials, lighting—through rasterisation or ray-tracing renderers, shading languages, and GPU-accelerated display systems. As the ena
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:rasterization
  - urn:ngm:class:shader
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:global-illumination
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:3-d-geometry
enables:
  - urn:ngm:class:3-d-animation
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:scientific-visualisation
contrastsWith:
  - urn:ngm:class:image-processing
bridgesTo:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:game-engine
  - urn:ngm:class:open-gl
  - urn:ngm:class:vulkan
  - urn:ngm:class:webgpu
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:siggraph
relatedTo:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:spatial-computing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Computer Graphics

Computer Graphics is the computational discipline concerned with synthesising, manipulating, and displaying visual imagery using mathematical models and algorithms running on specialised hardware. It encompasses the full pipeline from scene representation—geometry, materials, lighting—through rasterisation or ray-tracing renderers, shading languages, and GPU-accelerated display systems. As the enabling layer for all visual digital experiences, it underpins spatial computing, interactive media, simulation, scientific visualisation, and metaverse infrastructure. The field spans real-time and offline rendering paradigms, blending applied mathematics, physics-based light transport, and hardware architecture.
