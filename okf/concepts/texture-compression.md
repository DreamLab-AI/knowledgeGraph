---
okf_version: "0.2"
type: Class
title: Texture Compression
resource: urn:ngm:class:texture-compression
domain: spatial-computing
description: Texture compression is a set of techniques that store image textures in compact, GPU-decodable formats to reduce memory footprint and bandwidth during real-time rendering. Unlike general image compression, these formats support fast random access and fixed-rate block decoding directly in hardware, trading some image quality for large savings in storage and runtime cost. Common schemes include bloc
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:mipmap
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:real-time-rendering
dependsOn:
  - urn:ngm:class:gpu-memory
bridgesTo:
  - urn:ngm:class:game-engine
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:rendering
partOf:
  - urn:ngm:class:asset-pipeline
relatedTo:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:shader
  - urn:ngm:class:data-compression
---

# Texture Compression

Texture compression is a set of techniques that store image textures in compact, GPU-decodable formats to reduce memory footprint and bandwidth during real-time rendering. Unlike general image compression, these formats support fast random access and fixed-rate block decoding directly in hardware, trading some image quality for large savings in storage and runtime cost. Common schemes include block-based formats such as BCn, ETC and ASTC.
