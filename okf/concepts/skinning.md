---
okf_version: "0.2"
type: Class
title: Skinning
resource: urn:ngm:class:skinning
domain: spatial-computing
description: Skinning is the process of binding a deformable surface mesh to an underlying skeleton so that the mesh deforms naturally as the skeleton is animated. Each vertex is assigned weights that determine how strongly it follows each influencing bone, and these weights drive the deformation during playback. Skinning is essential to character animation, allowing a single rigged model to be posed and anima
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:character-rigging
hasPart:
  - urn:ngm:class:polygon-mesh
  - urn:ngm:class:blend-shape
requires:
  - urn:ngm:class:character-rigging
  - urn:ngm:class:character-model
enables:
  - urn:ngm:class:character-animation
  - urn:ngm:class:animation
dependsOn:
  - urn:ngm:class:topology
bridgesTo:
  - urn:ngm:class:rendering-pipeline
uses:
  - urn:ngm:class:geometry-processing
  - urn:ngm:class:shader
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:game-engine
relatedTo:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:uv-mapping
  - urn:ngm:class:fbx
  - urn:ngm:class:computer-graphics
---

# Skinning

Skinning is the process of binding a deformable surface mesh to an underlying skeleton so that the mesh deforms naturally as the skeleton is animated. Each vertex is assigned weights that determine how strongly it follows each influencing bone, and these weights drive the deformation during playback. Skinning is essential to character animation, allowing a single rigged model to be posed and animated across many motions.
