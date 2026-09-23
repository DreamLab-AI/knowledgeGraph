---
okf_version: "0.2"
type: Class
title: MaterialX
resource: urn:ngm:class:material-x
domain: spatial-computing
description: MaterialX is an open standard for describing surface and procedural materials, shading networks and look development data in a renderer-independent form for exchange between content creation tools.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:material-definition
hasPart:
  - urn:ngm:class:shading-model
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:texture-mapping
enables:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:asset-interoperability
implements:
  - urn:ngm:class:open-standard
  - urn:ngm:class:node-graph-visual-programming-interface
bridgesTo:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:usd
uses:
  - urn:ngm:class:xml
  - urn:ngm:class:procedural-texture
supports:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:real-time-rendering
standardizedBy:
  - urn:ngm:class:academy-software-foundation
---

# MaterialX

MaterialX is an open standard for describing surface and procedural materials, shading networks and look development data in a renderer-independent form for exchange between content creation tools.
