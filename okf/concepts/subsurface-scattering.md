---
okf_version: "0.2"
type: Class
title: Subsurface Scattering
resource: urn:ngm:class:subsurface-scattering
domain: spatial-computing
description: Subsurface scattering is a light-transport phenomenon in which light penetrates the surface of a translucent material, scatters within it, and exits at a different point, producing the soft, diffuse glow characteristic of skin, wax, marble, and milk. In computer graphics it is modelled as part of global illumination to render such materials realistically, since a purely surface-level reflectance m
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:global-illumination
hasPart:
  - urn:ngm:class:shader
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:physically-based-rendering
dependsOn:
  - urn:ngm:class:global-illumination
implements:
  - urn:ngm:class:physically-based-rendering
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:ray-tracing
supports:
  - urn:ngm:class:rendering-pipeline
partOf:
  - urn:ngm:class:global-illumination
relatedTo:
  - urn:ngm:class:brdf
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:rendering-pipeline
---

# Subsurface Scattering

Subsurface scattering is a light-transport phenomenon in which light penetrates the surface of a translucent material, scatters within it, and exits at a different point, producing the soft, diffuse glow characteristic of skin, wax, marble, and milk. In computer graphics it is modelled as part of global illumination to render such materials realistically, since a purely surface-level reflectance model cannot capture the way light bleeds beneath and through them. Approaches range from physically based diffusion and path-traced volumetric scattering to fast screen-space and pre-integrated approximations used in real-time rendering. It is essential to photorealistic depiction of organic and semi-transparent matter.
