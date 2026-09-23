---
okf_version: "0.2"
type: Class
title: Vertex Attribute
resource: urn:ngm:class:vertex-attribute
domain: spatial-computing
description: A per-vertex data channel attached to the vertices of a polygon mesh — position, normal, tangent, texture coordinates, colour, skinning joint indices and weights — supplied to the vertex shader as its input. Attributes are stored in vertex buffers with a declared layout (location, format, offset, stride), interpolated across triangles during rasterisation for per-pixel shading, and standardised by
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:data-structure
enables:
  - urn:ngm:class:vertex-shader
partOf:
  - urn:ngm:class:polygon-mesh
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:uv-mapping
  - urn:ngm:class:skeletal-rig
---

# Vertex Attribute

A per-vertex data channel attached to the vertices of a polygon mesh — position, normal, tangent, texture coordinates, colour, skinning joint indices and weights — supplied to the vertex shader as its input. Attributes are stored in vertex buffers with a declared layout (location, format, offset, stride), interpolated across triangles during rasterisation for per-pixel shading, and standardised by interchange formats such as glTF, making them the fundamental unit of geometry data throughout the graphics pipeline.
