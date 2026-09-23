---
okf_version: "0.2"
type: Class
title: Discrete Cosine Transform
resource: urn:ngm:class:discrete-cosine-transform
domain: infrastructure
description: The discrete cosine transform, DCT, is an integral transform, closely related to the discrete Fourier transform, that expresses a finite sequence of data points as a sum of cosine functions oscillating at different frequencies, concentrating most signal energy into a small number of low-frequency coefficients. This energy-compaction property makes it the core building block of lossy image and vide
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:fourier-transform
---

# Discrete Cosine Transform

The discrete cosine transform, DCT, is an integral transform, closely related to the discrete Fourier transform, that expresses a finite sequence of data points as a sum of cosine functions oscillating at different frequencies, concentrating most signal energy into a small number of low-frequency coefficients. This energy-compaction property makes it the core building block of lossy image and video codecs such as JPEG and MPEG, which quantise and discard high-frequency coefficients to achieve compression. Video codecs apply the DCT, or block-based variants of it, to spatial blocks of pixel data before entropy coding.
