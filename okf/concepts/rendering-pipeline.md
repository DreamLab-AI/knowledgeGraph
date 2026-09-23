---
okf_version: "0.2"
type: Class
title: Rendering Pipeline
resource: urn:ngm:class:rendering-pipeline
domain: spatial-computing
description: The Rendering Pipeline is the ordered computational sequence by which a GPU transforms three-dimensional scene representations — vertex buffers, index buffers, textures, uniform data, and acceleration structures — into a two-dimensional raster image suitable for display or further processing.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:real-time-systems
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:rasterization
hasPart:
  - urn:ngm:class:acceleration-structure
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:g-buffer
  - urn:ngm:class:geometry-shader
  - urn:ngm:class:compute-shader
  - urn:ngm:class:render-target
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:tessellation-stage
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:mesh-shader
  - urn:ngm:class:ray-tracing-stage
  - urn:ngm:class:rasteriser
  - urn:ngm:class:visibility-buffer
requires:
  - urn:ngm:class:gpu-resources
  - urn:ngm:class:index-buffer
  - urn:ngm:class:memory-bandwidth
  - urn:ngm:class:shader-compilation
  - urn:ngm:class:vertex-buffer
  - urn:ngm:class:graphics-api
  - urn:ngm:class:texture-sampler
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:global-illumination
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:post-processing
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:spatial-computing-paradigm
dependsOn:
  - urn:ngm:class:gpu-architecture
  - urn:ngm:class:simd-processing
  - urn:ngm:class:memory-hierarchy
  - urn:ngm:class:shader-model
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:bvh-acceleration-structure
implements:
  - urn:ngm:class:deferred-rendering
  - urn:ngm:class:forward-rendering
  - urn:ngm:class:gpu-driven-rendering
  - urn:ngm:class:clustered-shading
  - urn:ngm:class:visibility-buffer-rendering
  - urn:ngm:class:mesh-shader-pipeline
  - urn:ngm:class:hybrid-ray-tracing
contrastsWith:
  - urn:ngm:class:path-tracing
  - urn:ngm:class:offline-rendering
  - urn:ngm:class:ray-casting
  - urn:ngm:class:scan-line-rendering
  - urn:ngm:class:software-rasterisation
bridgesTo:
  - urn:ngm:class:gpu-compute
uses:
  - urn:ngm:class:dlss
  - urn:ngm:class:glsl
  - urn:ngm:class:hlsl
  - urn:ngm:class:metal
  - urn:ngm:class:spir-v
  - urn:ngm:class:vulkan
  - urn:ngm:class:webgpu
  - urn:ngm:class:wgsl
  - urn:ngm:class:directx-12
  - urn:ngm:class:fsr
supports:
  - urn:ngm:class:architectural-visualisation
  - urn:ngm:class:visual-effects
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:scientific-visualisation
  - urn:ngm:class:game-development
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:game-development
  - urn:ngm:class:visual-effects
standardizedBy:
  - urn:ngm:class:ieee-754
  - urn:ngm:class:khronos-group
  - urn:ngm:class:open-gl
  - urn:ngm:class:microsoft-directx
  - urn:ngm:class:apple-metal
  - urn:ngm:class:w3c-webgpu
  - urn:ngm:class:open-gl
relatedTo:
  - urn:ngm:class:3-d-rendering-engine
  - urn:ngm:class:compute-shader
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:real-time-rendering-pipeline
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:shader
  - urn:ngm:class:shader-language
  - urn:ngm:class:vertex-shader
---

# Rendering Pipeline

The Rendering Pipeline is the ordered computational sequence by which a GPU transforms three-dimensional scene representations — vertex buffers, index buffers, textures, uniform data, and acceleration structures — into a two-dimensional raster image suitable for display or further processing.
