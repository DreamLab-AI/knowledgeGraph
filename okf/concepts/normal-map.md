---
okf_version: "0.2"
type: Class
title: Normal Map
resource: urn:ngm:class:normal-map
domain: spatial-computing
description: A normal map is a texture that encodes per-texel surface normal directions, typically storing the X, Y, and Z components of a normal vector in the red, green, and blue channels. It allows a low-polygon mesh to react to lighting as if it had the fine geometric detail of a much denser surface, by perturbing the shading normal without changing the underlying geometry. Normal maps are a foundational t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:texture-mapping
hasPart:
  - urn:ngm:class:texture-mapping
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:physically-based-rendering
dependsOn:
  - urn:ngm:class:texture-mapping
implements:
  - urn:ngm:class:rendering-technique
bridgesTo:
  - urn:ngm:class:shader
uses:
  - urn:ngm:class:shader
supports:
  - urn:ngm:class:polygon-mesh
partOf:
  - urn:ngm:class:physically-based-rendering
relatedTo:
  - urn:ngm:class:rendering-technique
  - urn:ngm:class:gpu
  - urn:ngm:class:spatial-computing
---

# Normal Map

A normal map is a texture that encodes per-texel surface normal directions, typically storing the X, Y, and Z components of a normal vector in the red, green, and blue channels. It allows a low-polygon mesh to react to lighting as if it had the fine geometric detail of a much denser surface, by perturbing the shading normal without changing the underlying geometry. Normal maps are a foundational technique in real-time and physically based rendering for adding visual detail efficiently.
