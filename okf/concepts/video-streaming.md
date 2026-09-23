---
okf_version: "0.2"
type: Class
title: Video Streaming
resource: urn:ngm:class:video-streaming
domain: infrastructure
description: "Video Streaming is the continuous, real-time transmission of encoded video data over a network to a client device that decodes and renders the content progressively, without requiring the complete file to be downloaded before playback begins. It relies on transport protocols such as RTMP, HLS, DASH, and WebRTC, combined with adaptive bitrate (ABR) algorithms that dynamically adjust resolution and "
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:network-infrastructure
hasPart:
  - urn:ngm:class:adaptive-bitrate-streaming
  - urn:ngm:class:live-streaming
  - urn:ngm:class:volumetric-video
  - urn:ngm:class:video-on-demand
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cdn
  - urn:ngm:class:video-codec
enables:
  - urn:ngm:class:virtual-production
  - urn:ngm:class:metaverse-platform
  - urn:ngm:class:remote-rendering
  - urn:ngm:class:cloud-gaming
dependsOn:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:latency-optimisation
  - urn:ngm:class:bandwidth
contrastsWith:
  - urn:ngm:class:broadcast-television
  - urn:ngm:class:file-download
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:inference
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:web-rtc
  - urn:ngm:class:data-compression
  - urn:ngm:class:http-live-streaming
supports:
  - urn:ngm:class:360-degree-video
  - urn:ngm:class:extended-reality
  - urn:ngm:class:social-vr
standardizedBy:
  - urn:ngm:class:mpeg-dash
  - urn:ngm:class:web-rtc
relatedTo:
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:digital-rights-management
---

# Video Streaming

Video Streaming is the continuous, real-time transmission of encoded video data over a network to a client device that decodes and renders the content progressively, without requiring the complete file to be downloaded before playback begins. It relies on transport protocols such as RTMP, HLS, DASH, and WebRTC, combined with adaptive bitrate (ABR) algorithms that dynamically adjust resolution and compression to match available network conditions. Modern deployments encompass live streaming, video-on-demand (VoD), 360-degree video, volumetric video, and cloud-rendered remote-display streaming, each with distinct latency, bandwidth, and codec trade-offs. Content delivery networks (CDNs), edge computing nodes, and specialised video codecs such as H.264, H.265/HEVC, AV1, and VP9 are the principal technical pillars enabling scalable, low-latency distribution at global scale.
