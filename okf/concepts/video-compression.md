---
okf_version: "0.2"
type: Class
title: Video Compression
resource: urn:ngm:class:video-compression
domain: infrastructure
description: "Video compression is the process of encoding digital video data to reduce file size and bit rate for efficient storage and transmission, while maintaining perceptually acceptable quality. It exploits three principal forms of redundancy: spatial redundancy within individual frames, temporal redundancy across consecutive frames, and perceptual redundancy based on limitations of human visual percepti"
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-compression
hasPart:
  - urn:ngm:class:entropy-coding
  - urn:ngm:class:motion-estimation
  - urn:ngm:class:intra-frame-coding
  - urn:ngm:class:inter-frame-coding
  - urn:ngm:class:quantisation
requires:
  - urn:ngm:class:discrete-cosine-transform
  - urn:ngm:class:rate-control
enables:
  - urn:ngm:class:content-delivery
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:video-streaming
  - urn:ngm:class:broadcast-television
dependsOn:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:perceptual-coding
implements:
  - urn:ngm:class:av1-codec
  - urn:ngm:class:h-264-avc
  - urn:ngm:class:h-265-hevc
  - urn:ngm:class:av1-codec
  - urn:ngm:class:vp9-codec
contrastsWith:
  - urn:ngm:class:lossless-compression
bridgesTo:
  - urn:ngm:class:cdn
  - urn:ngm:class:neural-video-compression
uses:
  - urn:ngm:class:psychovisual-model
  - urn:ngm:class:colour-subsampling
standardizedBy:
  - urn:ngm:class:itu-t
  - urn:ngm:class:alliance-for-open-media
  - urn:ngm:class:iso-iec-mpeg
partOf:
  - urn:ngm:class:video-codec
  - urn:ngm:class:multimedia-processing
relatedTo:
  - urn:ngm:class:adaptive-bitrate-streaming
  - urn:ngm:class:latency
---

# Video Compression

Video compression is the process of encoding digital video data to reduce file size and bit rate for efficient storage and transmission, while maintaining perceptually acceptable quality. It exploits three principal forms of redundancy: spatial redundancy within individual frames, temporal redundancy across consecutive frames, and perceptual redundancy based on limitations of human visual perception. Modern video codecs such as H.264/AVC, H.265/HEVC, VP9, and AV1 implement intra-frame prediction, inter-frame motion compensation, discrete cosine or wavelet transforms, quantisation, and entropy coding to achieve compression ratios that make streaming, broadcast, and real-time communication practical over bandwidth-limited networks.
