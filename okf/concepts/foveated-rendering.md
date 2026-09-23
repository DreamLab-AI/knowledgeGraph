---
okf_version: "0.2"
type: Class
title: Foveated Rendering
resource: urn:ngm:class:foveated-rendering
domain: spatial-computing
description: "Foveated rendering is a real-time graphics technique that exploits the non-uniform spatial acuity of the human visual system by rendering the region around the viewer's gaze point at full resolution whilst progressively reducing shading quality, texture resolution, and geometric detail in the peripheral visual field. Eye-tracking hardware continuously locates the foveal fixation point so that the "
maturity: emerging
quality: 0.73
is-a:
  - urn:ngm:class:real-time-rendering
requires:
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:gaze-estimation
  - urn:ngm:class:variable-rate-shading
enables:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:high-fidelity-vr
dependsOn:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:display-hardware
  - urn:ngm:class:human-visual-system
contrastsWith:
  - urn:ngm:class:uniform-shading
  - urn:ngm:class:temporal-anti-aliasing
bridgesTo:
  - urn:ngm:class:neural-network-inference
  - urn:ngm:class:perceptual-quality-metric
uses:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:super-resolution
  - urn:ngm:class:mipmap
  - urn:ngm:class:reprojection
relatedTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:perceptual-rendering
---

# Foveated Rendering

Foveated rendering is a real-time graphics technique that exploits the non-uniform spatial acuity of the human visual system by rendering the region around the viewer's gaze point at full resolution whilst progressively reducing shading quality, texture resolution, and geometric detail in the peripheral visual field. Eye-tracking hardware continuously locates the foveal fixation point so that the high-quality region follows the gaze with sub-frame latency, making quality degradation imperceptible. The technique produces substantial GPU workload reductions that are critical for achieving high frame rates and thermal sustainability on power-constrained XR head-mounted displays, and is increasingly extended by neural super-resolution to reconstruct peripheral detail at low cost.
