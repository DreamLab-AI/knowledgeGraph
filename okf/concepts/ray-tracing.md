---
okf_version: "0.2"
type: Class
title: Ray Tracing
resource: urn:ngm:class:ray-tracing
domain: spatial-computing
description: Ray Tracing is a physically-based light-transport simulation technique in computer graphics that generates images by casting rays from a virtual camera through each image-plane pixel into a three-dimensional scene, recursively computing colour values by evaluating ray-geometry intersections, surf...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:light-transport
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:global-illumination
  - urn:ngm:class:rendering
  - urn:ngm:class:monte-carlo-methods
hasPart:
  - urn:ngm:class:acceleration-structure
  - urn:ngm:class:brdf
  - urn:ngm:class:bvh-acceleration-structure
  - urn:ngm:class:shading-model
  - urn:ngm:class:primary-ray
  - urn:ngm:class:secondary-ray
  - urn:ngm:class:intersection-test
  - urn:ngm:class:denoiser
  - urn:ngm:class:reservoir-sampling
  - urn:ngm:class:rt-core
requires:
  - urn:ngm:class:bvh-acceleration-structure
  - urn:ngm:class:camera-model
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:rendering-equation
  - urn:ngm:class:scene-geometry
  - urn:ngm:class:material-model
  - urn:ngm:class:light-sources
enables:
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:caustics
  - urn:ngm:class:soft-shadows
  - urn:ngm:class:subsurface-scattering
  - urn:ngm:class:global-illumination
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:reflections
  - urn:ngm:class:real-time-path-tracing
  - urn:ngm:class:participating-media-rendering
dependsOn:
  - urn:ngm:class:rendering-equation
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:bvh-construction
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:hardware-ray-tracing-cores
  - urn:ngm:class:brdf
  - urn:ngm:class:importance-sampling
implements:
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:path-tracing
  - urn:ngm:class:photon-mapping
  - urn:ngm:class:volumetric-rendering
  - urn:ngm:class:bidirectional-path-tracing
  - urn:ngm:class:metropolis-light-transport
  - urn:ngm:class:restir
  - urn:ngm:class:whitted-ray-tracing
  - urn:ngm:class:importance-sampling
contrastsWith:
  - urn:ngm:class:rasterization
  - urn:ngm:class:screen-space-reflections
  - urn:ngm:class:baked-lightmaps
  - urn:ngm:class:radiosity
  - urn:ngm:class:voxel-cone-tracing
  - urn:ngm:class:ambient-occlusion-maps
  - urn:ngm:class:shadow-maps
bridgesTo:
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:ai-upscaling-and-super-resolution
  - urn:ngm:class:brdf
  - urn:ngm:class:dlss
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:russian-roulette-termination
  - urn:ngm:class:reservoir-based-resampling
  - urn:ngm:class:neural-denoising
  - urn:ngm:class:ai-upscaling-and-super-resolution
  - urn:ngm:class:spatiotemporal-filtering
supports:
  - urn:ngm:class:architectural-visualisation
  - urn:ngm:class:film-vfx
  - urn:ngm:class:scientific-visualisation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:metaverse
  - urn:ngm:class:virtual-production
  - urn:ngm:class:game-rendering
  - urn:ngm:class:product-visualisation
standardizedBy:
  - urn:ngm:class:vulkan
  - urn:ngm:class:vulkan
  - urn:ngm:class:directx-raytracing
  - urn:ngm:class:pbrt-standard
  - urn:ngm:class:openrl
  - urn:ngm:class:optix-sdk
relatedTo:
  - urn:ngm:class:denoising
  - urn:ngm:class:dlss
  - urn:ngm:class:lumen
  - urn:ngm:class:vulkan
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:directx
  - urn:ngm:class:optix
---

# Ray Tracing

Ray Tracing is a physically-based light-transport simulation technique in computer graphics that generates images by casting rays from a virtual camera through each image-plane pixel into a three-dimensional scene, recursively computing colour values by evaluating ray-geometry intersections, surf...
