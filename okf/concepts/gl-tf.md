---
okf_version: "0.2"
type: Class
title: glTF
resource: urn:ngm:class:gl-tf
domain: spatial-computing
description: Graphics Library Transmission Format (glTF) is a royalty-free, open interoperable 3D asset format developed by Khronos Group, designed for efficient runtime transmission and loading of 3D scenes across native and web-based engines, serving as a foundational standard for metaverse asset interoperability. Standardised as ISO/IEC 12113:2022, glTF 2.0 supports geometry, PBR materials, skeletal animati
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:3-d-file-format
  - urn:ngm:class:sc-standards-and-interop
  - urn:ngm:class:3-d-asset-standard
hasPart:
  - urn:ngm:class:binary-buffer
  - urn:ngm:class:scene-graph
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:pbr-materials
requires:
  - urn:ngm:class:3-d-model
  - urn:ngm:class:material-definition
  - urn:ngm:class:json-data-interchange-format-serialisation
  - urn:ngm:class:web-gl
enables:
  - urn:ngm:class:asset-interoperability
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:content-delivery
  - urn:ngm:class:cross-platform-content
  - urn:ngm:class:digital-twin
  - urn:ngm:class:cross-platform-content
dependsOn:
  - urn:ngm:class:web-gl
  - urn:ngm:class:json
implements:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:3-d-asset-standard
contrastsWith:
  - urn:ngm:class:fbx
  - urn:ngm:class:collada
  - urn:ngm:class:universal-scene-description
  - urn:ngm:class:obj-format
bridgesTo:
  - urn:ngm:class:metaverse-platform
  - urn:ngm:class:digital-twin
  - urn:ngm:class:web-xr
  - urn:ngm:class:3-d-asset-standard
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:gaussian-splatting
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:webgpu
supports:
  - urn:ngm:class:web-xr
  - urn:ngm:class:babylon-js
standardizedBy:
  - urn:ngm:class:khronos-group
partOf:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:metaverse-standards-forum
relatedTo:
  - urn:ngm:class:universal-scene-description
  - urn:ngm:class:open-xr
  - urn:ngm:class:vrm-format
  - urn:ngm:class:e-commerce-3-d
  - urn:ngm:class:web-xr
---

# glTF

Graphics Library Transmission Format (glTF) is a royalty-free, open interoperable 3D asset format developed by Khronos Group, designed for efficient runtime transmission and loading of 3D scenes across native and web-based engines, serving as a foundational standard for metaverse asset interoperability. Standardised as ISO/IEC 12113:2022, glTF 2.0 supports geometry, PBR materials, skeletal animation, morph targets, and a modular extension system enabling progressive capability extension.
