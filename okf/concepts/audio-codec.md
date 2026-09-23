---
okf_version: "0.2"
type: Class
title: Audio Codec
resource: urn:ngm:class:audio-codec
domain: spatial-computing
description: An audio codec is a technology that encodes audio into a compressed digital representation and decodes it back for playback, reducing storage and bandwidth requirements. Lossy codecs discard perceptually less important information to achieve high compression, while lossless codecs preserve the original signal exactly. Codecs balance bitrate, audio quality, latency and computational cost, and defin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:audio-processing
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder
requires:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:data-compression
enables:
  - urn:ngm:class:audio-streaming
  - urn:ngm:class:spatial-audio
dependsOn:
  - urn:ngm:class:psychoacoustics
  - urn:ngm:class:quantisation
  - urn:ngm:class:quantisation
contrastsWith:
  - urn:ngm:class:video-codec
  - urn:ngm:class:lossy-compression
uses:
  - urn:ngm:class:lossless-compression
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:voice-over-ip
relatedTo:
  - urn:ngm:class:bitrate
  - urn:ngm:class:sample-rate
---

# Audio Codec

An audio codec is a technology that encodes audio into a compressed digital representation and decodes it back for playback, reducing storage and bandwidth requirements. Lossy codecs discard perceptually less important information to achieve high compression, while lossless codecs preserve the original signal exactly. Codecs balance bitrate, audio quality, latency and computational cost, and define container-independent bitstream formats. They are essential to streaming, telephony, broadcasting and immersive spatial audio.
