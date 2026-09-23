---
okf_version: "0.2"
type: Class
title: Reflection Probe
resource: urn:ngm:class:reflection-probe
domain: spatial-computing
description: A Reflection Probe is a spatial data structure placed in a 3D scene that captures a 360-degree image of its surroundings into a cubemap texture, which is then sampled by shaders to produce environment reflections on nearby surfaces. Probes are fundamental to physically based rendering pipelines, providing local ambient lighting and specular reflections without the cost of real-time ray tracing. Th
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:render-pipeline
hasPart:
  - urn:ngm:class:scene-management
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:photorealistic-rendering
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:physically-based-rendering
partOf:
  - urn:ngm:class:rendering-pipeline
---

# Reflection Probe

A Reflection Probe is a spatial data structure placed in a 3D scene that captures a 360-degree image of its surroundings into a cubemap texture, which is then sampled by shaders to produce environment reflections on nearby surfaces. Probes are fundamental to physically based rendering pipelines, providing local ambient lighting and specular reflections without the cost of real-time ray tracing. They are placed by artists or computed automatically at bake time and can be blended across zones to produce continuous, plausible illumination.
