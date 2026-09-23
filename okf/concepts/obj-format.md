---
okf_version: "0.2"
type: Class
title: Obj Format
resource: urn:ngm:class:obj-format
domain: spatial-computing
description: The OBJ format (Wavefront .obj) is a simple, text-based 3D geometry interchange format that stores polygon mesh data as lists of vertices, texture coordinates, normals and faces. It is openly documented and almost universally supported, with material properties carried in a companion .mtl file. Valued for its readability and portability rather than efficiency, OBJ remains a common lowest-common-de
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:polygon-mesh
requires:
  - urn:ngm:class:polygon-mesh
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:3-d-model
dependsOn:
  - urn:ngm:class:mesh-data
implements:
  - urn:ngm:class:polygon-mesh
contrastsWith:
  - urn:ngm:class:fbx
  - urn:ngm:class:gltf-standard
bridgesTo:
  - urn:ngm:class:gltf-standard
uses:
  - urn:ngm:class:mesh-data
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:3-d-asset
standardizedBy:
  - urn:ngm:class:standards-organization
partOf:
  - urn:ngm:class:3-d-asset
relatedTo:
  - urn:ngm:class:fbx
  - urn:ngm:class:3-d-model
  - urn:ngm:class:texture-mapping
---

# Obj Format

The OBJ format (Wavefront .obj) is a simple, text-based 3D geometry interchange format that stores polygon mesh data as lists of vertices, texture coordinates, normals and faces. It is openly documented and almost universally supported, with material properties carried in a companion .mtl file. Valued for its readability and portability rather than efficiency, OBJ remains a common lowest-common-denominator format for exchanging static 3D models between modelling tools and pipelines.
