---
okf_version: "0.2"
type: Class
title: Uv Mapping
resource: urn:ngm:class:uv-mapping
domain: spatial-computing
description: "UV mapping is the process of projecting a 3D model's surface onto a two-dimensional coordinate space so that texture images can be applied accurately to its geometry. The letters U and V denote the axes of this 2D texture space, distinct from the X, Y, and Z axes of the model. By unwrapping the mesh into UV islands, artists control how textures, normal maps, and other surface data wrap around the "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:3d-modelling
hasPart:
  - urn:ngm:class:vertex-attribute
requires:
  - urn:ngm:class:polygon-mesh
enables:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:normal-map
dependsOn:
  - urn:ngm:class:3d-modelling
implements:
  - urn:ngm:class:texture-mapping
contrastsWith:
  - urn:ngm:class:skeletal-rig
bridgesTo:
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:texture-atlas
supports:
  - urn:ngm:class:rendering
  - urn:ngm:class:ambient-occlusion
partOf:
  - urn:ngm:class:3d-modelling
relatedTo:
  - urn:ngm:class:shader
  - urn:ngm:class:digital-asset
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Uv Mapping

UV mapping is the process of projecting a 3D model's surface onto a two-dimensional coordinate space so that texture images can be applied accurately to its geometry. The letters U and V denote the axes of this 2D texture space, distinct from the X, Y, and Z axes of the model. By unwrapping the mesh into UV islands, artists control how textures, normal maps, and other surface data wrap around the object with minimal stretching or seams.
