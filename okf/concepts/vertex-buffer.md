---
okf_version: "0.2"
type: Class
title: Vertex Buffer
resource: urn:ngm:class:vertex-buffer
domain: spatial-computing
description: A vertex buffer is a region of GPU-accessible memory that stores the attributes of a mesh's vertices, such as positions, normals, texture coordinates and colours, in a contiguous layout for the graphics pipeline to consume. By uploading geometry once and referencing it across many draw calls, vertex buffers minimise CPU-to-GPU transfer and enable high-throughput rendering. They are bound to the in
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:rendering-pipeline
hasPart:
  - urn:ngm:class:rendering-pipeline
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:rendering-pipeline
enables:
  - urn:ngm:class:vertex-shader
bridgesTo:
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:rasterization
supports:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:rasterization
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:shader
  - urn:ngm:class:computer-graphics
---

# Vertex Buffer

A vertex buffer is a region of GPU-accessible memory that stores the attributes of a mesh's vertices, such as positions, normals, texture coordinates and colours, in a contiguous layout for the graphics pipeline to consume. By uploading geometry once and referencing it across many draw calls, vertex buffers minimise CPU-to-GPU transfer and enable high-throughput rendering. They are bound to the input-assembler stage and described by a vertex layout that maps buffer bytes to shader inputs.
