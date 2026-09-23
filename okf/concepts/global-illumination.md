---
okf_version: "0.2"
type: Class
title: Global Illumination
resource: urn:ngm:class:global-illumination
domain: spatial-computing
description: Global Illumination (GI) is a rendering approach that simulates all light interactions within a scene, including both direct illumination from light sources and indirect illumination from light bouncing between surfaces. Techniques range from offline radiosity and photon mapping to real-time approximations such as voxel cone tracing, screen-space ambient occlusion, and hardware-accelerated ray tra
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
hasPart:
  - urn:ngm:class:direct-illumination
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:caustics
requires:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:light-transport-simulation
  - urn:ngm:class:compute-shader
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:soft-shadows
contrastsWith:
  - urn:ngm:class:rasterization
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-radiance-field
uses:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:photon-mapping
  - urn:ngm:class:radiosity
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:metaverse
  - urn:ngm:class:architectural-visualisation
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:subsurface-scattering
  - urn:ngm:class:lightmap-baking
  - urn:ngm:class:voxel-cone-tracing
---

# Global Illumination

Global Illumination (GI) is a rendering approach that simulates all light interactions within a scene, including both direct illumination from light sources and indirect illumination from light bouncing between surfaces. Techniques range from offline radiosity and photon mapping to real-time approximations such as voxel cone tracing, screen-space ambient occlusion, and hardware-accelerated ray tracing, producing physically plausible colour bleeding, soft shadows, and caustics.
