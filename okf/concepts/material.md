---
okf_version: "0.2"
type: Class
title: Material
resource: urn:ngm:class:material
domain: spatial-computing
description: A material is the generic description of how a 3D surface responds to light, bundling the shading model and its parameters — base colour, roughness, metalness, normal detail, emission, transparency — into a reusable definition that a renderer evaluates for each visible point. Materials are the container into which texture maps are plugged and which a shader program consumes, mediating between geom
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:texture-map
uses:
  - urn:ngm:class:shader
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:physically-based-rendering
---

# Material

A material is the generic description of how a 3D surface responds to light, bundling the shading model and its parameters — base colour, roughness, metalness, normal detail, emission, transparency — into a reusable definition that a renderer evaluates for each visible point. Materials are the container into which texture maps are plugged and which a shader program consumes, mediating between geometry and the final rendered appearance. This is a general graphics concept, not to be confused with MaterialX, which is a specific open interchange standard from Lucasfilm/ILM for encoding and exchanging material graphs between applications.
