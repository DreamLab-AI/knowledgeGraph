---
okf_version: "0.2"
type: Class
title: Shading Model
resource: urn:ngm:class:shading-model
domain: spatial-computing
description: A shading model is a mathematical description of how a surface reflects and emits light, determining the colour and intensity seen at each point given the lighting and viewing geometry. It encapsulates a bidirectional reflectance distribution function together with parameters such as albedo, roughness and metalness. Shading models range from simple empirical formulations to physically based formul
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:rendering
hasPart:
  - urn:ngm:class:brdf
  - urn:ngm:class:material-system
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:global-illumination
dependsOn:
  - urn:ngm:class:brdf
implements:
  - urn:ngm:class:physically-based-rendering
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:gpu-rendering
partOf:
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:rendering-technique
  - urn:ngm:class:material-system
  - urn:ngm:class:physically-based-rendering
---

# Shading Model

A shading model is a mathematical description of how a surface reflects and emits light, determining the colour and intensity seen at each point given the lighting and viewing geometry. It encapsulates a bidirectional reflectance distribution function together with parameters such as albedo, roughness and metalness. Shading models range from simple empirical formulations to physically based formulations grounded in energy conservation.
