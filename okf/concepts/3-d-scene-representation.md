---
okf_version: "0.2"
type: Class
title: 3D Scene Representation
resource: urn:ngm:class:3-d-scene-representation
domain: spatial-computing
description: "A 3D scene representation is a data structure that encodes the geometry, appearance and spatial layout of a three-dimensional environment, such as point clouds, meshes, voxel grids or neural implicit fields. It underpins 3D content generation and reconstruction pipelines, providing the intermediate format from which renderable or editable scenes are produced. Point clouds are one common instance, "
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:scene-representation
partOf:
  - urn:ngm:class:point-cloud
---

# 3D Scene Representation

A 3D scene representation is a data structure that encodes the geometry, appearance and spatial layout of a three-dimensional environment, such as point clouds, meshes, voxel grids or neural implicit fields. It underpins 3D content generation and reconstruction pipelines, providing the intermediate format from which renderable or editable scenes are produced. Point clouds are one common instance, forming a sparse, unstructured representation that is often converted into denser structures for downstream use.
