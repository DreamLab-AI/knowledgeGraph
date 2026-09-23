---
okf_version: "0.2"
type: Class
title: 3D Asset
resource: urn:ngm:class:3-d-asset
domain: spatial-computing
description: A 3D Asset is a discrete, self-contained digital artefact encoding three-dimensional geometry, surface materials, skeletal animation rigs, and associated metadata in a machine-readable interchange format such as glTF 2.0, USD, FBX, or OBJ. Such assets are produced by digital content creation tools, stored in asset management systems with versioning and provenance records, and consumed at runtime b
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-asset
hasPart:
  - urn:ngm:class:polygon-mesh
  - urn:ngm:class:texture-map
  - urn:ngm:class:skeletal-rig
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:collision-mesh
requires:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:digital-content-creation
  - urn:ngm:class:asset-pipeline
enables:
  - urn:ngm:class:metaverse
  - urn:ngm:class:digital-twin
  - urn:ngm:class:extended-reality
  - urn:ngm:class:real-time-rendering
contrastsWith:
  - urn:ngm:class:voxel
  - urn:ngm:class:2d-sprite
bridgesTo:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:generative-ai
  - urn:ngm:class:non-fungible-token
uses:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:usd
  - urn:ngm:class:digital-asset-management
  - urn:ngm:class:texture-compression
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:w3-c
  - urn:ngm:class:academy-software-foundation
relatedTo:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:game-engine
  - urn:ngm:class:spatial-computing
---

# 3D Asset

A 3D Asset is a discrete, self-contained digital artefact encoding three-dimensional geometry, surface materials, skeletal animation rigs, and associated metadata in a machine-readable interchange format such as glTF 2.0, USD, FBX, or OBJ. Such assets are produced by digital content creation tools, stored in asset management systems with versioning and provenance records, and consumed at runtime by rendering engines, game engines, and spatial computing platforms. Production-quality 3D assets typically incorporate multiple levels of detail (LOD), physically-based rendering (PBR) material maps (albedo, metallic-roughness, normal, occlusion, emissive), collision meshes for physics simulation, and compressed texture atlases optimised for a target hardware envelope. Cross-platform delivery relies on open standards maintained by the Khronos Group and Pixar/Academy Software Foundation, enabling asset reuse across metaverse environments, digital twins, extended reality (XR) applications, and game titles.
