---
okf_version: "0.2"
type: Class
title: Wavelet Transform
resource: urn:ngm:class:wavelet-transform
domain: machine-learning
description: The wavelet transform is a signal-processing technique that represents a signal as a sum of scaled and translated copies of a localised oscillating basis function called a wavelet. Unlike the Fourier transform, which trades all time resolution for frequency resolution, the wavelet transform provides simultaneous time and frequency localisation through multiresolution analysis. It is widely used fo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:signal-processing
hasPart:
  - urn:ngm:class:convolution
enables:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:data-compression
dependsOn:
  - urn:ngm:class:signal-processing
implements:
  - urn:ngm:class:signal-processing
contrastsWith:
  - urn:ngm:class:convolution
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:anomaly-detection
uses:
  - urn:ngm:class:convolution
supports:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:dimensionality-reduction
partOf:
  - urn:ngm:class:signal-processing
relatedTo:
  - urn:ngm:class:image-processing
  - urn:ngm:class:pattern-recognition
---

# Wavelet Transform

The wavelet transform is a signal-processing technique that represents a signal as a sum of scaled and translated copies of a localised oscillating basis function called a wavelet. Unlike the Fourier transform, which trades all time resolution for frequency resolution, the wavelet transform provides simultaneous time and frequency localisation through multiresolution analysis. It is widely used for compression, denoising and feature extraction in machine-learning pipelines.
