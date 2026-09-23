---
okf_version: "0.2"
type: Class
title: Khronos glTF
resource: urn:ngm:class:khronos-gl-tf
domain: spatial-computing
description: Khronos glTF (GL Transmission Format) is an open royalty-free specification maintained by the Khronos Group that defines a JSON-based container format for 3D scenes and models, designed for efficient runtime delivery and rendering rather than authoring — storing geometry as compact binary buffer views, referencing PBR (Physically Based Rendering) material parameters, animation data, skeletal hiera
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:gl-tf-3-d-file-format
enables:
  - urn:ngm:class:asset-interoperability
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:extended-reality
uses:
  - urn:ngm:class:3-d-file-format
supports:
  - urn:ngm:class:virtual-production
relatedTo:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:open-xr
  - urn:ngm:class:vulkan
  - urn:ngm:class:physically-based-rendering
---

# Khronos glTF

Khronos glTF (GL Transmission Format) is an open royalty-free specification maintained by the Khronos Group that defines a JSON-based container format for 3D scenes and models, designed for efficient runtime delivery and rendering rather than authoring — storing geometry as compact binary buffer views, referencing PBR (Physically Based Rendering) material parameters, animation data, skeletal hierarchies, and scene graphs in a format that maps closely to GPU resource layouts, minimising parse and upload overhead. glTF 2.0 (2017) established the core specification and is widely regarded as the 'JPEG of 3D' due to its adoption across web browsers (via Three.js and Babylon.js), game engines (Unreal, Unity, Godot), AR/VR runtimes (OpenXR, WebXR), and digital twin platforms.
