---
okf_version: "0.2"
type: Class
title: DLSS
resource: urn:ngm:class:dlss
domain: spatial-computing
description: DLSS (Deep Learning Super Sampling) is NVIDIA's family of AI-based rendering techniques that use neural networks running on dedicated tensor hardware to reconstruct high-resolution, high-frame-rate images from lower-resolution rendered inputs. By upscaling, accumulating temporal information, and generating intermediate frames, DLSS delivers image quality approaching or exceeding native rendering a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:rendering-technology
enables:
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gpu
relatedTo:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:rendering-pipeline
---

# DLSS

DLSS (Deep Learning Super Sampling) is NVIDIA's family of AI-based rendering techniques that use neural networks running on dedicated tensor hardware to reconstruct high-resolution, high-frame-rate images from lower-resolution rendered inputs. By upscaling, accumulating temporal information, and generating intermediate frames, DLSS delivers image quality approaching or exceeding native rendering at a fraction of the GPU cost, enabling demanding effects such as real-time ray tracing to run smoothly. It exemplifies the integration of learned models into the real-time graphics pipeline.
