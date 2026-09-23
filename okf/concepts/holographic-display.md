---
okf_version: "0.2"
type: Class
title: Holographic Display
resource: urn:ngm:class:holographic-display
domain: spatial-computing
description: A holographic display is a display system that reconstructs the full optical wavefront of a three-dimensional scene, enabling viewers to perceive genuine depth cues — including motion parallax, focus accommodation, and binocular disparity — without wearing specialised eyewear. It achieves this by encoding scenes as holograms (interference fringe patterns) and illuminating them with coherent or str
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:display-technology
hasPart:
  - urn:ngm:class:diffractive-optical-element
  - urn:ngm:class:wavefront-reconstruction
  - urn:ngm:class:hologram-rendering-pipeline
requires:
  - urn:ngm:class:holography
  - urn:ngm:class:spatial-light-modulator
  - urn:ngm:class:coherent-light-source
  - urn:ngm:class:computer-generated-holography
enables:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:telepresence
  - urn:ngm:class:volumetric-display
dependsOn:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:photonics
contrastsWith:
  - urn:ngm:class:stereoscopic-display
  - urn:ngm:class:flat-panel-display
  - urn:ngm:class:autostereoscopic-display
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:metaverse
uses:
  - urn:ngm:class:light-field
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:diffraction
  - urn:ngm:class:interference
relatedTo:
  - urn:ngm:class:head-mounted-display
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:optical-see-through
---

# Holographic Display

A holographic display is a display system that reconstructs the full optical wavefront of a three-dimensional scene, enabling viewers to perceive genuine depth cues — including motion parallax, focus accommodation, and binocular disparity — without wearing specialised eyewear. It achieves this by encoding scenes as holograms (interference fringe patterns) and illuminating them with coherent or structured light to recreate the original light field. Unlike stereoscopic or autostereoscopic displays, holographic displays avoid the vergence-accommodation conflict because the eye can naturally refocus at different depths within the reconstructed scene. Practical implementations typically use spatial light modulators, diffractive optical elements, or photopolymer recording media to shape wavefronts, placing extreme demands on computational throughput and optical bandwidth.
