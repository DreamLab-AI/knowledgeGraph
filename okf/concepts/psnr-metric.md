---
okf_version: "0.2"
type: Class
title: PSNR Metric
resource: urn:ngm:class:psnr-metric
domain: ai
description: Peak Signal-to-Noise Ratio (PSNR) is an objective image- and video-quality metric expressing the ratio between the maximum possible signal power and the power of distorting noise, computed from the mean squared error between a reference and a degraded signal. Measured in decibels, higher PSNR values indicate closer fidelity to the original. It is widely used to benchmark lossy compression, restora
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:model-performance
relatedTo:
  - urn:ngm:class:image-and-video-restoration
  - urn:ngm:class:bandwidth-adaptation
---

# PSNR Metric

Peak Signal-to-Noise Ratio (PSNR) is an objective image- and video-quality metric expressing the ratio between the maximum possible signal power and the power of distorting noise, computed from the mean squared error between a reference and a degraded signal. Measured in decibels, higher PSNR values indicate closer fidelity to the original. It is widely used to benchmark lossy compression, restoration, and reconstruction algorithms despite its known weak correlation with perceived quality.
