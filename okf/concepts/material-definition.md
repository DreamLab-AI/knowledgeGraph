---
okf_version: "0.2"
type: Class
title: Material Definition
resource: urn:ngm:class:material-definition
domain: spatial-computing
description: A material definition is a structured data specification that describes how a surface or volume should appear under lighting, encoding properties such as base colour, roughness, metalness, emissivity, and transparency in a renderer-agnostic format. It underpins physically based rendering (PBR) pipelines by separating the description of physical surface behaviour from the rendering algorithm that e
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:rendering-technique
hasPart:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:brdf
  - urn:ngm:class:normal-map
requires:
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:asset-interchange
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:digital-twin
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:shader
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:shading-model
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:material-x
relatedTo:
  - urn:ngm:class:open-usd
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:scene-graph
  - urn:ngm:class:level-of-detail
---

# Material Definition

A material definition is a structured data specification that describes how a surface or volume should appear under lighting, encoding properties such as base colour, roughness, metalness, emissivity, and transparency in a renderer-agnostic format. It underpins physically based rendering (PBR) pipelines by separating the description of physical surface behaviour from the rendering algorithm that evaluates it. Material definitions may be authored in formats such as MaterialX, glTF materials, or OpenUSD surface shading networks, enabling interchange across tools and engines. They are fundamental to achieving photorealistic and stylised visuals in real-time and offline 3D workflows.
