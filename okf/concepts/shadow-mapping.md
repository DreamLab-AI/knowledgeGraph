---
okf_version: "0.2"
type: Class
title: Shadow Mapping
resource: urn:ngm:class:shadow-mapping
domain: spatial-computing
description: Shadow Mapping is a real-time computer graphics technique for rendering shadows by rendering the scene from the perspective of each light source into a depth texture (the shadow map), then comparing scene-point depth values against that map during the main render pass to determine visibility. It is the dominant method for dynamic shadows in games and real-time rendering engines due to its GPU effi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:shader
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:dynamic-lighting
dependsOn:
  - urn:ngm:class:rasterization
  - urn:ngm:class:graphics-pipeline
contrastsWith:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:shadow-volumes
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:game-engine
relatedTo:
  - urn:ngm:class:rasterization
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:global-illumination
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:rasterization
---

# Shadow Mapping

Shadow Mapping is a real-time computer graphics technique for rendering shadows by rendering the scene from the perspective of each light source into a depth texture (the shadow map), then comparing scene-point depth values against that map during the main render pass to determine visibility. It is the dominant method for dynamic shadows in games and real-time rendering engines due to its GPU efficiency and flexibility. Artefacts such as shadow acne and perspective aliasing are mitigated through techniques like bias adjustment, percentage-closer filtering, and cascaded shadow maps. The technique is fundamental to photorealistic rendering in spatial computing and XR applications.
