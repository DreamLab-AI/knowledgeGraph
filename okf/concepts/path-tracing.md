---
okf_version: "0.2"
type: Class
title: Path Tracing
resource: urn:ngm:class:path-tracing
domain: spatial-computing
description: "Path tracing is a physically based rendering algorithm that estimates the rendering equation by stochastically sampling complete light-transport paths from the camera through a scene to light sources. It uses Monte Carlo integration over recursive ray bounces to compute unbiased estimates of global illumination, including soft shadows, indirect lighting, and caustics. Image noise decreases as the "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:physically-based-rendering
hasPart:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:importance-sampling
enables:
  - urn:ngm:class:real-time-rendering
implements:
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:global-illumination
contrastsWith:
  - urn:ngm:class:rasterization
  - urn:ngm:class:rasterization
bridgesTo:
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:gpu
partOf:
  - urn:ngm:class:physically-based-rendering
relatedTo:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:shader
  - urn:ngm:class:spatial-computing
---

# Path Tracing

Path tracing is a physically based rendering algorithm that estimates the rendering equation by stochastically sampling complete light-transport paths from the camera through a scene to light sources. It uses Monte Carlo integration over recursive ray bounces to compute unbiased estimates of global illumination, including soft shadows, indirect lighting, and caustics. Image noise decreases as the square root of the number of samples, making convergence and denoising central practical concerns.
