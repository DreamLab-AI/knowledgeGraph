---
okf_version: "0.2"
type: Class
title: OpenUSD
resource: urn:ngm:class:open-usd
domain: spatial-computing
description: OpenUSD (Universal Scene Description) is an open-source framework, scene-graph data model, and file format developed by Pixar Animation Studios for composing, simulating, collaborating on, and exchanging richly structured 3D scenes across digital content creation tools and real-time rendering pipelines. Its layered composition engine allows multiple teams or tools to contribute non-destructive ove
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:usd-composition-arcs
  - urn:ngm:class:usd-schema-plugin
  - urn:ngm:class:usdz-package-format
  - urn:ngm:class:usd-hydra-renderer
requires:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:hierarchical-data-model
enables:
  - urn:ngm:class:3-d-content-pipeline
  - urn:ngm:class:digital-twin
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:collaborative-3d-editing
  - urn:ngm:class:augmented-reality-content
contrastsWith:
  - urn:ngm:class:gltf-standard
  - urn:ngm:class:fbx
  - urn:ngm:class:fbx
  - urn:ngm:class:collada-format
bridgesTo:
  - urn:ngm:class:autonomous-vehicle-simulation
  - urn:ngm:class:industrial-metaverse
uses:
  - urn:ngm:class:material-x
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:mdl-material-definition-language
supports:
  - urn:ngm:class:non-destructive-editing
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:non-destructive-editing
  - urn:ngm:class:procedural-geometry
standardizedBy:
  - urn:ngm:class:alliance-for-openusd
  - urn:ngm:class:iso-iec-22886
relatedTo:
  - urn:ngm:class:3-d-asset
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:nvidia-corporation-omniverse-platform
  - urn:ngm:class:realitykit
  - urn:ngm:class:nvidia-corporation-omniverse-platform
---

# OpenUSD

OpenUSD (Universal Scene Description) is an open-source framework, scene-graph data model, and file format developed by Pixar Animation Studios for composing, simulating, collaborating on, and exchanging richly structured 3D scenes across digital content creation tools and real-time rendering pipelines. Its layered composition engine allows multiple teams or tools to contribute non-destructive overrides to a shared hierarchical scene graph with full time-sampled animation support, making it the de facto interchange format for large-scale visual effects, game engine, and industrial simulation pipelines. Governed since 2023 by the Alliance for OpenUSD (AOUSD) and progressing toward ISO/IEC 22886 standardisation, OpenUSD underpins NVIDIA Omniverse, Apple visionOS/RealityKit, and major digital twin platforms.
