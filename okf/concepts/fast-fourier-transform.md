---
okf_version: "0.2"
type: Class
title: Fast Fourier Transform
resource: urn:ngm:class:fast-fourier-transform
domain: ai
description: The Fast Fourier Transform (FFT) is a family of efficient algorithms for computing the discrete Fourier transform and its inverse, reducing the cost from quadratic to log-linear time in the number of samples. By exploiting symmetry and recursive divide-and-conquer factorisation, such as the Cooley-Tukey scheme, the FFT makes spectral analysis of large signals computationally practical. It is a fou
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:signal-processing
hasPart:
  - urn:ngm:class:algorithm
requires:
  - urn:ngm:class:algorithm
enables:
  - urn:ngm:class:convolution
  - urn:ngm:class:data-compression
implements:
  - urn:ngm:class:signal-processing
uses:
  - urn:ngm:class:matrix-multiplication
supports:
  - urn:ngm:class:audio-processing
  - urn:ngm:class:image-processing
partOf:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:numerical-methods
relatedTo:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:gpu-acceleration
---

# Fast Fourier Transform

The Fast Fourier Transform (FFT) is a family of efficient algorithms for computing the discrete Fourier transform and its inverse, reducing the cost from quadratic to log-linear time in the number of samples. By exploiting symmetry and recursive divide-and-conquer factorisation, such as the Cooley-Tukey scheme, the FFT makes spectral analysis of large signals computationally practical. It is a foundational primitive in digital signal processing, communications, numerical methods and many machine learning and scientific computing workloads.
