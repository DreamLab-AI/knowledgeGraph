---
okf_version: "0.2"
type: Class
title: FBX
resource: urn:ngm:class:fbx
domain: spatial-computing
description: FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines. Developed by Kaydara and now owned by Autodesk, it stores scene graphs, mesh data, skinning weights, keyframed animation tracks, cameras, and lights, making it the dominant interchange format across 3D production and real-time e
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:polygon-mesh
  - urn:ngm:class:skinning
requires:
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:3d-modelling
enables:
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:game-engine
  - urn:ngm:class:character-rigging
  - urn:ngm:class:avatar
dependsOn:
  - urn:ngm:class:autodesk
implements:
  - urn:ngm:class:3-d-file-format
contrastsWith:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:usd
  - urn:ngm:class:collada
  - urn:ngm:class:obj-format
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robotics
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:usd
uses:
  - urn:ngm:class:binary-encoding
  - urn:ngm:class:keyframe-animation
supports:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:morph-target-animation
standardizedBy:
  - urn:ngm:class:autodesk
partOf:
  - urn:ngm:class:asset-pipeline
  - urn:ngm:class:digital-content-creation
relatedTo:
  - urn:ngm:class:unity
  - urn:ngm:class:unreal-engine
  - urn:ngm:class:blender-3d-creation-suite
---

# FBX

FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines. Developed by Kaydara and now owned by Autodesk, it stores scene graphs, mesh data, skinning weights, keyframed animation tracks, cameras, and lights, making it the dominant interchange format across 3D production and real-time engine pipelines.
