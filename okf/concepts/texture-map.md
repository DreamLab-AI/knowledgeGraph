---
okf_version: "0.2"
type: Class
title: Texture Map
resource: urn:ngm:class:texture-map
domain: spatial-computing
description: A Texture Map is a 2D image applied to the surface of a 3D model to add visual detail such as colour, roughness, normals, or emissive properties without increasing polygon count. Texture maps are indexed via UV coordinates that establish a correspondence between surface points and image pixels. They are a foundational component of real-time and offline rendering pipelines.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:uv-mapping
hasPart:
  - urn:ngm:class:uv-mapping
  - urn:ngm:class:mipmap
  - urn:ngm:class:normal-map
requires:
  - urn:ngm:class:uv-mapping
  - urn:ngm:class:3-d-model
enables:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:real-time-rendering
contrastsWith:
  - urn:ngm:class:procedural-material
  - urn:ngm:class:implicit-neural-representation
uses:
  - urn:ngm:class:rasterization
  - urn:ngm:class:gpu
  - urn:ngm:class:rasterization
supports:
  - urn:ngm:class:xr
  - urn:ngm:class:virtual-reality
standardizedBy:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:3-d-asset-standard
partOf:
  - urn:ngm:class:3-d-asset
  - urn:ngm:class:material
relatedTo:
  - urn:ngm:class:3-d-content-creation
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:metaverse
---

# Texture Map

A Texture Map is a 2D image applied to the surface of a 3D model to add visual detail such as colour, roughness, normals, or emissive properties without increasing polygon count. Texture maps are indexed via UV coordinates that establish a correspondence between surface points and image pixels. They are a foundational component of real-time and offline rendering pipelines.
