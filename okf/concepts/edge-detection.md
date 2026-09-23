---
okf_version: "0.2"
type: Class
title: Edge Detection
resource: urn:ngm:class:edge-detection
domain: artificial-intelligence
description: Edge detection is a computer vision technique that identifies points in a digital image where brightness changes sharply, marking the boundaries of objects, surfaces and textures. It typically computes image gradients and applies thresholding to produce a binary or magnitude map of edges. As a low-level feature operator it underpins higher-level tasks such as segmentation, object detection and sha
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:feature-detection
requires:
  - urn:ngm:class:image-processing
enables:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:object-detection
dependsOn:
  - urn:ngm:class:convolution
implements:
  - urn:ngm:class:feature-detection
contrastsWith:
  - urn:ngm:class:image-segmentation
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:convolution
  - urn:ngm:class:gradient
supports:
  - urn:ngm:class:feature-extraction
partOf:
  - urn:ngm:class:image-processing
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:machine-vision
---

# Edge Detection

Edge detection is a computer vision technique that identifies points in a digital image where brightness changes sharply, marking the boundaries of objects, surfaces and textures. It typically computes image gradients and applies thresholding to produce a binary or magnitude map of edges. As a low-level feature operator it underpins higher-level tasks such as segmentation, object detection and shape analysis.
