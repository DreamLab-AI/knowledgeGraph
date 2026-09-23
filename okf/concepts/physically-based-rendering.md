---
okf_version: "0.2"
type: Class
title: Physically Based Rendering
resource: urn:ngm:class:physically-based-rendering
domain: spatial-computing
description: "Physically Based Rendering (PBR) is a rendering methodology that simulates the interaction of light with materials using first-principles optics — energy conservation, the microfacet BRDF model, Fresnel reflectance equations, and radiometric correctness — to produce consistent, predictable visual output across arbitrary lighting environments. Surface materials are parameterised through a compact, "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:rendering-technique
hasPart:
  - urn:ngm:class:brdf
  - urn:ngm:class:normal-map
  - urn:ngm:class:environment-mapping
  - urn:ngm:class:microfacet-model
  - urn:ngm:class:image-based-lighting
  - urn:ngm:class:environment-mapping
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:gpu
  - urn:ngm:class:texture-mapping
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:digital-twin
  - urn:ngm:class:photorealism
  - urn:ngm:class:3-d-asset
dependsOn:
  - urn:ngm:class:energy-conservation
  - urn:ngm:class:radiometry
implements:
  - urn:ngm:class:cook-torrance-model
  - urn:ngm:class:fresnel-equation
contrastsWith:
  - urn:ngm:class:phong-shading
  - urn:ngm:class:rasterization
  - urn:ngm:class:rasterization
bridgesTo:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:metaverse
uses:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:hdri
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:gltf-standard
relatedTo:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:path-tracing
  - urn:ngm:class:global-illumination
  - urn:ngm:class:subsurface-scattering
---

# Physically Based Rendering

Physically Based Rendering (PBR) is a rendering methodology that simulates the interaction of light with materials using first-principles optics — energy conservation, the microfacet BRDF model, Fresnel reflectance equations, and radiometric correctness — to produce consistent, predictable visual output across arbitrary lighting environments. Surface materials are parameterised through a compact, artist-friendly set of maps (albedo, metalness, roughness, normal, ambient occlusion) that together drive evaluation of the Cook-Torrance or similar BRDF at each pixel. PBR has become the dominant material workflow in real-time engines (Unreal Engine, Unity) and offline path tracers alike, and is codified in the glTF 2.0 metallic-roughness material model, ensuring cross-renderer portability. Its physical correctness makes it the foundation for photorealistic digital twins, metaverse environments, and cinematic VFX pipelines.
