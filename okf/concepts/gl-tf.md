---
okf_version: "0.2"
type: Class
title: glTF
resource: urn:ngm:class:gl-tf
domain: spatial-computing
description: glTF (GL Transmission Format) is an open royalty-free standard from the Khronos Group for the efficient transmission and loading of 3D scenes and models, defining geometry, materials, animation and scene structure in a compact runtime format optimised for direct upload to graphics APIs.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:3-d-file-format
hasPart:
  - urn:ngm:class:binary-buffer
  - urn:ngm:class:scene-graph
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:skeletal-animation
requires:
  - urn:ngm:class:3-d-model
  - urn:ngm:class:material-definition
enables:
  - urn:ngm:class:asset-interoperability
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:content-delivery
dependsOn:
  - urn:ngm:class:web-gl
  - urn:ngm:class:json-data-interchange-format
implements:
  - urn:ngm:class:khronos-group
contrastsWith:
  - urn:ngm:class:fbx
  - urn:ngm:class:collada
bridgesTo:
  - urn:ngm:class:metaverse-platform
  - urn:ngm:class:digital-twin
  - urn:ngm:class:web-xr
uses:
  - urn:ngm:class:data-compression
supports:
  - urn:ngm:class:web-xr
  - urn:ngm:class:babylon-js
standardizedBy:
  - urn:ngm:class:khronos-group
partOf:
  - urn:ngm:class:asset-pipeline
relatedTo:
  - urn:ngm:class:usd
  - urn:ngm:class:open-xr
---

# glTF

glTF (GL Transmission Format) is an open royalty-free standard from the Khronos Group for the efficient transmission and loading of 3D scenes and models, defining geometry, materials, animation and scene structure in a compact runtime format optimised for direct upload to graphics APIs.
