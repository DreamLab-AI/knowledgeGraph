---
okf_version: "0.2"
type: Class
title: Lossy Compression
resource: urn:ngm:class:lossy-compression
domain: data
description: "Data compression that achieves high ratios by permanently discarding information judged perceptually or statistically less important, guided by rate-distortion theory and models of human vision and hearing; the basis of virtually all deployed image, audio and video coding — JPEG, MP3, AAC, Opus, H.264/HEVC/AV1 — where transform coding, quantisation and entropy coding together trade reconstruction "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:data-compression
enables:
  - urn:ngm:class:adaptive-bitrate-streaming
contrastsWith:
  - urn:ngm:class:lossless-compression
relatedTo:
  - urn:ngm:class:audio-codec
---

# Lossy Compression

Data compression that achieves high ratios by permanently discarding information judged perceptually or statistically less important, guided by rate-distortion theory and models of human vision and hearing; the basis of virtually all deployed image, audio and video coding — JPEG, MP3, AAC, Opus, H.264/HEVC/AV1 — where transform coding, quantisation and entropy coding together trade reconstruction fidelity against bitrate, in contrast to lossless methods that guarantee exact reconstruction.
