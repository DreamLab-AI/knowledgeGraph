---
okf_version: "0.2"
type: Class
title: AR Occlusion
resource: urn:ngm:class:ar-occlusion
domain: spatial-computing
description: AR occlusion is the computational technique by which virtual objects rendered in an augmented reality scene are correctly hidden or partially hidden by real-world geometry that physically lies in front of them from the viewer's perspective. Achieving occlusion requires real-time estimation of the depth structure of the physical scene, typically via depth sensors or monocular depth estimation neura
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:sc-display-and-rendering
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:spatial-mapping
uses:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:occlusion-rendering
  - urn:ngm:class:mixed-reality
---

# AR Occlusion

AR occlusion is the computational technique by which virtual objects rendered in an augmented reality scene are correctly hidden or partially hidden by real-world geometry that physically lies in front of them from the viewer's perspective. Achieving occlusion requires real-time estimation of the depth structure of the physical scene, typically via depth sensors or monocular depth estimation neural networks, so that the rendering pipeline can apply correct depth ordering between real and virtual content. Without occlusion, virtual objects appear to float unconvincingly in front of all physical surfaces regardless of their spatial relationship.
