---
okf_version: "0.2"
type: Class
title: Video Codec
resource: urn:ngm:class:video-codec
domain: infrastructure
description: A video codec (coder-decoder) is an algorithm or hardware implementation that compresses and decompresses digital video by exploiting spatial redundancy within frames (intra-prediction), temporal redundancy across frames (inter-prediction with motion compensation), and transform coding of residuals, enabling practical storage and transmission of video at bitrates orders of magnitude lower than unc
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:encoder-decoder-architecture
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder
  - urn:ngm:class:motion-estimation
  - urn:ngm:class:entropy-coding
requires:
  - urn:ngm:class:discrete-cosine-transform
  - urn:ngm:class:convolution
enables:
  - urn:ngm:class:video-encoding
  - urn:ngm:class:adaptive-bitrate-streaming
  - urn:ngm:class:bandwidth-optimization
  - urn:ngm:class:computer-vision-video-analysis
contrastsWith:
  - urn:ngm:class:audio-codec
  - urn:ngm:class:lossless-compression
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:quantisation
  - urn:ngm:class:hardware-acceleration
supports:
  - urn:ngm:class:video-streaming
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:cdn
standardizedBy:
  - urn:ngm:class:compliance-standards
  - urn:ngm:class:open-media-alliance
relatedTo:
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:digital-rights-management
---

# Video Codec

A video codec (coder-decoder) is an algorithm or hardware implementation that compresses and decompresses digital video by exploiting spatial redundancy within frames (intra-prediction), temporal redundancy across frames (inter-prediction with motion compensation), and transform coding of residuals, enabling practical storage and transmission of video at bitrates orders of magnitude lower than uncompressed formats whilst maintaining perceptual quality.
