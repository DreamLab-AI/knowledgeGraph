---
okf_version: "0.2"
type: Class
title: Texture Mapping
resource: urn:ngm:class:texture-mapping
domain: spatial-computing
description: Texture mapping is the computer graphics technique of applying a 2D image (texture) to the surface of a 3D geometric model so as to simulate surface colour, roughness, reflectance, and fine structural detail without subdividing the underlying mesh. The process involves establishing a correspondence between 3D surface points and 2D texture coordinates (UV space), then sampling the texture through a
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:uv-mapping
  - urn:ngm:class:normal-mapping
  - urn:ngm:class:mipmap
  - urn:ngm:class:texture-atlas
  - urn:ngm:class:bump-mapping
requires:
  - urn:ngm:class:uv-unwrapping
  - urn:ngm:class:rasterization
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:gpu
  - urn:ngm:class:rasterization
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:photorealism
  - urn:ngm:class:differentiable-rendering
contrastsWith:
  - urn:ngm:class:displacement-mapping
  - urn:ngm:class:procedural-texture
  - urn:ngm:class:procedural-texture
bridgesTo:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:generative-adversarial-network
uses:
  - urn:ngm:class:procedural-texture
  - urn:ngm:class:compute-shader
  - urn:ngm:class:texture-compression
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:metaverse
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:open-gl
partOf:
  - urn:ngm:class:3-d-rendering-engine
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:material-definition
  - urn:ngm:class:shader
  - urn:ngm:class:material-definition
---

# Texture Mapping

Texture mapping is the computer graphics technique of applying a 2D image (texture) to the surface of a 3D geometric model so as to simulate surface colour, roughness, reflectance, and fine structural detail without subdividing the underlying mesh. The process involves establishing a correspondence between 3D surface points and 2D texture coordinates (UV space), then sampling the texture through a pipeline that handles filtering, mipmapping, and perspective-correct interpolation. Modern pipelines extend the concept to multi-channel PBR texture sets (albedo, metalness, roughness, normal, ambient-occlusion, emissive) that together drive physically-based shading models, enabling photorealistic rendering in both real-time and offline contexts.
