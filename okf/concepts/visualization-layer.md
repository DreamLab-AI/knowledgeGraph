---
okf_version: "0.2"
type: Class
title: Visualization Layer
resource: urn:ngm:class:visualization-layer
domain: spatial-computing
description: Graphics and rendering systems responsible for displaying virtual environments, objects, and interfaces through advanced rendering pipelines and visual processing.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:shader
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:shader
  - urn:ngm:class:display-manager
requires:
  - urn:ngm:class:gpu-resources
  - urn:ngm:class:display-hardware
  - urn:ngm:class:graphics-api
enables:
  - urn:ngm:class:immersive-experiences
  - urn:ngm:class:visual-output
  - urn:ngm:class:user-interface-rendering
dependsOn:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:dynamic-lighting
  - urn:ngm:class:material-system
partOf:
  - urn:ngm:class:presentation-infrastructure
---

# Visualization Layer

Graphics and rendering systems responsible for displaying virtual environments, objects, and interfaces through advanced rendering pipelines and visual processing.
