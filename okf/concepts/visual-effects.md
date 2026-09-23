---
okf_version: "0.2"
type: Class
title: Visual Effects
resource: urn:ngm:class:visual-effects
domain: spatial-computing
description: Visual Effects (VFX) are the computational and compositing techniques used to create, simulate, or augment imagery that cannot be practically captured in-camera, spanning both offline film/broadcast pipelines and real-time interactive applications. In offline production, VFX encompasses computer-generated imagery (CGI), digital compositing, matte painting, motion capture integration, and physicall
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:fluid-simulation
  - urn:ngm:class:volumetric-rendering
  - urn:ngm:class:procedural-animation
requires:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:compute-shader
enables:
  - urn:ngm:class:immersive-experience
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-production
  - urn:ngm:class:mixed-reality
dependsOn:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:scene-graph
contrastsWith:
  - urn:ngm:class:in-camera-vfx
  - urn:ngm:class:practical-effects
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:generative-ai
  - urn:ngm:class:machine-learning
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:particle-systems
  - urn:ngm:class:post-processing
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:motion-capture
  - urn:ngm:class:digital-compositing
standardizedBy:
  - urn:ngm:class:academy-software-foundation
  - urn:ngm:class:openexr
partOf:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:computer-graphics
relatedTo:
  - urn:ngm:class:3d-modelling
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:ray-tracing
---

# Visual Effects

Visual Effects (VFX) are the computational and compositing techniques used to create, simulate, or augment imagery that cannot be practically captured in-camera, spanning both offline film/broadcast pipelines and real-time interactive applications. In offline production, VFX encompasses computer-generated imagery (CGI), digital compositing, matte painting, motion capture integration, and physically accurate simulation of fluids, cloth, destruction, and crowds. In real-time and spatial-computing contexts, VFX includes particle systems, post-processing stacks (bloom, depth-of-field, ambient occlusion, screen-space reflections), procedural shaders, and GPU-accelerated simulation executed within physically-based rendering pipelines at interactive frame rates.
