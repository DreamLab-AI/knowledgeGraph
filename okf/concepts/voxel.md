---
okf_version: "0.2"
type: Class
title: Voxel
resource: urn:ngm:class:voxel
domain: spatial-computing
description: "A voxel is the volumetric analogue of a pixel: a discrete unit of value located on a regular three-dimensional grid that represents a sample of space, encoding attributes such as density, colour, opacity, or material. Voxels underpin volumetric data structures used in medical imaging, scientific simulation, terrain and procedural modelling, and game engines, and they can be stored efficiently in s"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:volume-rendering
hasPart:
  - urn:ngm:class:sparse-voxel-octree
enables:
  - urn:ngm:class:volume-rendering
contrastsWith:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:texture-mapping
uses:
  - urn:ngm:class:gpu-rendering
supports:
  - urn:ngm:class:game-engine
partOf:
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:volumetric-rendering
relatedTo:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:rendering
---

# Voxel

A voxel is the volumetric analogue of a pixel: a discrete unit of value located on a regular three-dimensional grid that represents a sample of space, encoding attributes such as density, colour, opacity, or material. Voxels underpin volumetric data structures used in medical imaging, scientific simulation, terrain and procedural modelling, and game engines, and they can be stored efficiently in sparse structures such as octrees to skip empty space. Unlike polygon meshes that describe only surfaces, voxels represent the full interior of objects, enabling destructible geometry, fluid simulation, and direct volume rendering.
