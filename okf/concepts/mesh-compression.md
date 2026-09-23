---
okf_version: "0.2"
type: Class
title: Mesh Compression
resource: urn:ngm:class:mesh-compression
domain: spatial-computing
description: Mesh compression is a family of techniques for reducing the storage and transmission size of 3D polygon mesh data, encoding vertex positions, normals, texture coordinates and connectivity more compactly than a naive array representation. Methods range from quantisation and delta encoding of vertex attributes to connectivity-aware schemes such as edgebreaker and Draco. It is a prerequisite for effi
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:data-compression
---

# Mesh Compression

Mesh compression is a family of techniques for reducing the storage and transmission size of 3D polygon mesh data, encoding vertex positions, normals, texture coordinates and connectivity more compactly than a naive array representation. Methods range from quantisation and delta encoding of vertex attributes to connectivity-aware schemes such as edgebreaker and Draco. It is a prerequisite for efficient streaming and exchange of 3D assets across networks and constrained devices.
