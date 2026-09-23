---
okf_version: "0.2"
type: Class
title: Noise Reduction
resource: urn:ngm:class:noise-reduction
domain: ai
description: Noise reduction is the family of techniques that attenuate unwanted random or structured disturbances in a signal while preserving the underlying information of interest. It ranges from classical linear and spectral filtering to statistical estimators and learned denoising models that infer clean signals from noisy observations. Effective noise reduction improves downstream perception, measurement
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:signal-processing
hasPart:
  - urn:ngm:class:feature-extraction
requires:
  - urn:ngm:class:signal-processing
enables:
  - urn:ngm:class:model-evaluation
bridgesTo:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:statistics
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:feature-extraction
partOf:
  - urn:ngm:class:signal-processing
relatedTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:image-processing
  - urn:ngm:class:audio-processing
---

# Noise Reduction

Noise reduction is the family of techniques that attenuate unwanted random or structured disturbances in a signal while preserving the underlying information of interest. It ranges from classical linear and spectral filtering to statistical estimators and learned denoising models that infer clean signals from noisy observations. Effective noise reduction improves downstream perception, measurement and machine-learning tasks by raising the signal-to-noise ratio.
