---
okf_version: "0.2"
type: Class
title: SSIM Metric
resource: urn:ngm:class:ssim-metric
domain: ai
description: The Structural Similarity Index (SSIM) is a perceptual image-quality metric that compares two images by modelling luminance, contrast, and structural correlation over local windows, rather than measuring pixel-wise error alone. It correlates better with human judgement of quality than mean squared error or PSNR, producing a score between -1 and 1 where 1 indicates identical structure. It is widely
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:model-performance
relatedTo:
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:image-and-video-restoration
---

# SSIM Metric

The Structural Similarity Index (SSIM) is a perceptual image-quality metric that compares two images by modelling luminance, contrast, and structural correlation over local windows, rather than measuring pixel-wise error alone. It correlates better with human judgement of quality than mean squared error or PSNR, producing a score between -1 and 1 where 1 indicates identical structure. It is widely used to evaluate compression, restoration, and generative reconstruction.
