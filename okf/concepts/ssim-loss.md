---
okf_version: "0.2"
type: Class
title: SSIM Loss
resource: urn:ngm:class:ssim-loss
domain: spatial-computing
description: SSIM loss is a training objective derived from the Structural Similarity Index that penalises differences in luminance, contrast, and structure between a rendered or reconstructed image and its target, typically computed as one minus the SSIM score. It is used alongside or instead of pixel-wise losses such as L1 or L2 because it better reflects perceptual image quality. SSIM loss is a common compo
maturity: established
quality: 0
is-a:
  - urn:ngm:class:loss-function
---

# SSIM Loss

SSIM loss is a training objective derived from the Structural Similarity Index that penalises differences in luminance, contrast, and structure between a rendered or reconstructed image and its target, typically computed as one minus the SSIM score. It is used alongside or instead of pixel-wise losses such as L1 or L2 because it better reflects perceptual image quality. SSIM loss is a common component of the optimisation objective in 3D Gaussian Splatting and other differentiable rendering pipelines.
