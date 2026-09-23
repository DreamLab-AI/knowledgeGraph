---
okf_version: "0.2"
type: Class
title: Motion Estimation
resource: urn:ngm:class:motion-estimation
domain: infrastructure
description: "Motion estimation is the process of determining motion vectors that describe how regions of one video frame map to corresponding regions in another, capturing the apparent movement of objects and the camera between frames. It is the computational heart of inter-frame video compression, where predicting a block from a previously coded frame removes temporal redundancy. The same techniques underpin "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:video-compression
hasPart:
  - urn:ngm:class:signal-processing
requires:
  - urn:ngm:class:signal-processing
enables:
  - urn:ngm:class:video-compression
  - urn:ngm:class:bitrate
implements:
  - urn:ngm:class:lossy-compression
contrastsWith:
  - urn:ngm:class:image-compression
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:optical-flow
supports:
  - urn:ngm:class:video-codec
  - urn:ngm:class:hevc
partOf:
  - urn:ngm:class:video-compression
relatedTo:
  - urn:ngm:class:optical-flow
  - urn:ngm:class:codec
  - urn:ngm:class:entropy-coding
---

# Motion Estimation

Motion estimation is the process of determining motion vectors that describe how regions of one video frame map to corresponding regions in another, capturing the apparent movement of objects and the camera between frames. It is the computational heart of inter-frame video compression, where predicting a block from a previously coded frame removes temporal redundancy. The same techniques underpin optical-flow analysis and frame interpolation in computer vision.
