---
okf_version: "0.2"
type: Class
title: Adaptive Bitrate Streaming
resource: urn:ngm:class:adaptive-bitrate-streaming
domain: infrastructure
description: Adaptive bitrate streaming (ABR) is a media delivery technique that encodes content at multiple quality levels and dynamically switches between them in response to measured network throughput and client buffer state. The player requests short segments at the highest sustainable bitrate, smoothing playback over variable connections. It underpins modern over-the-top video via protocols such as HLS a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:video-streaming
hasPart:
  - urn:ngm:class:codec
requires:
  - urn:ngm:class:data-compression
enables:
  - urn:ngm:class:video-streaming
dependsOn:
  - urn:ngm:class:cdn
implements:
  - urn:ngm:class:video-compression
contrastsWith:
  - urn:ngm:class:lossless-compression
uses:
  - urn:ngm:class:video-compression
  - urn:ngm:class:cdn
supports:
  - urn:ngm:class:network-protocol
partOf:
  - urn:ngm:class:video-streaming
relatedTo:
  - urn:ngm:class:lossy-compression
  - urn:ngm:class:mpeg
  - urn:ngm:class:bandwidth
---

# Adaptive Bitrate Streaming

Adaptive bitrate streaming (ABR) is a media delivery technique that encodes content at multiple quality levels and dynamically switches between them in response to measured network throughput and client buffer state. The player requests short segments at the highest sustainable bitrate, smoothing playback over variable connections. It underpins modern over-the-top video via protocols such as HLS and MPEG-DASH delivered over HTTP and content delivery networks.
