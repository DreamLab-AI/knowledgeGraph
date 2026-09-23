---
okf_version: "0.2"
type: Class
title: Image Compression
resource: urn:ngm:class:image-compression
domain: data
description: The process of encoding digital images with fewer bits by exploiting spatial redundancy, statistical structure, and the limits of human visual perception. Lossless methods (PNG, lossless WebP) permit exact reconstruction, while lossy methods (JPEG, HEIC, AVIF, JPEG XL) discard perceptually insignificant detail through transform coding, quantisation, and entropy coding to achieve far higher ratios,
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:data-compression
contrastsWith:
  - urn:ngm:class:video-compression
uses:
  - urn:ngm:class:entropy-coding
  - urn:ngm:class:quantisation
  - urn:ngm:class:discrete-cosine-transform
relatedTo:
  - urn:ngm:class:image-processing
  - urn:ngm:class:lossless-compression
---

# Image Compression

The process of encoding digital images with fewer bits by exploiting spatial redundancy, statistical structure, and the limits of human visual perception. Lossless methods (PNG, lossless WebP) permit exact reconstruction, while lossy methods (JPEG, HEIC, AVIF, JPEG XL) discard perceptually insignificant detail through transform coding, quantisation, and entropy coding to achieve far higher ratios, trading fidelity against file size for storage and transmission.
