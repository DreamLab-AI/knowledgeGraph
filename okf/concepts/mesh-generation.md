---
okf_version: "0.2"
type: Class
title: Mesh Generation
resource: urn:ngm:class:mesh-generation
domain: spatial-computing
description: Mesh generation is the process of constructing a discrete representation of a geometric domain as a network of vertices, edges and faces - typically triangles or tetrahedra - suitable for rendering, simulation or analysis. It transforms continuous shapes, point clouds or implicit surfaces into well-formed polygonal or volumetric meshes that meet quality, density and topology constraints. Mesh gene
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:point-cloud
requires:
  - urn:ngm:class:point-cloud
enables:
  - urn:ngm:class:simulation
dependsOn:
  - urn:ngm:class:computer-graphics
bridgesTo:
  - urn:ngm:class:point-cloud-generation
uses:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:signed-distance-function
supports:
  - urn:ngm:class:simulation
  - urn:ngm:class:spatial-computing
partOf:
  - urn:ngm:class:computer-graphics
relatedTo:
  - urn:ngm:class:point-cloud-generation
  - urn:ngm:class:signed-distance-function
  - urn:ngm:class:neural-radiance-field
---

# Mesh Generation

Mesh generation is the process of constructing a discrete representation of a geometric domain as a network of vertices, edges and faces - typically triangles or tetrahedra - suitable for rendering, simulation or analysis. It transforms continuous shapes, point clouds or implicit surfaces into well-formed polygonal or volumetric meshes that meet quality, density and topology constraints. Mesh generation underpins computer graphics, 3D reconstruction and numerical simulation.
