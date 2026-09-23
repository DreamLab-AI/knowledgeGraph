---
okf_version: "0.2"
type: Class
title: 3D File Format
resource: urn:ngm:class:3-d-file-format
domain: spatial-computing
description: 3D File Formats are standardised container structures for encoding three-dimensional geometric data, textures, materials, animations, and metadata, enabling asset portability across tools, rendering engines, and platforms.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:data-format-standard
hasPart:
  - urn:ngm:class:mesh-data
  - urn:ngm:class:material-definition
  - urn:ngm:class:texture-map
requires:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:mesh-data
  - urn:ngm:class:material-definition
  - urn:ngm:class:animation-keyframes
enables:
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:cross-platform-asset-exchange
  - urn:ngm:class:digital-asset-management
  - urn:ngm:class:real-time-graphics
  - urn:ngm:class:augmented-reality
implements:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:usd
bridgesTo:
  - urn:ngm:class:data-format-standard
  - urn:ngm:class:interoperability
  - urn:ngm:class:metaverse-infrastructure
  - urn:ngm:class:3-d-model
  - urn:ngm:class:asset-pipeline
uses:
  - urn:ngm:class:binary-encoding
  - urn:ngm:class:data-compression
supports:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:physics-simulation
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:pixar-animation-studios
partOf:
  - urn:ngm:class:asset-pipeline
relatedTo:
  - urn:ngm:class:3-d-model
  - urn:ngm:class:point-cloud
---

# 3D File Format

3D File Formats are standardised container structures for encoding three-dimensional geometric data, textures, materials, animations, and metadata, enabling asset portability across tools, rendering engines, and platforms.
