---
okf_version: "0.2"
type: Class
title: Live Streaming
resource: urn:ngm:class:live-streaming
domain: infrastructure
description: Live Streaming is the real-time delivery of audio and video over a network as the content is captured, allowing audiences to view events with minimal delay rather than after recording. It relies on continuous encoding, packetisation, and adaptive distribution through content delivery networks to reach large, geographically dispersed audiences. Live streaming trades the buffering headroom of on-dem
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:video-streaming
hasPart:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:cdn
  - urn:ngm:class:low-latency
enables:
  - urn:ngm:class:user-engagement
dependsOn:
  - urn:ngm:class:bandwidth
uses:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:cdn
supports:
  - urn:ngm:class:real-time-communication
partOf:
  - urn:ngm:class:video-streaming
  - urn:ngm:class:content-delivery
relatedTo:
  - urn:ngm:class:content-delivery
  - urn:ngm:class:network-protocol
---

# Live Streaming

Live Streaming is the real-time delivery of audio and video over a network as the content is captured, allowing audiences to view events with minimal delay rather than after recording. It relies on continuous encoding, packetisation, and adaptive distribution through content delivery networks to reach large, geographically dispersed audiences. Live streaming trades the buffering headroom of on-demand playback for low end-to-end latency, demanding careful management of bitrate adaptation, jitter, and edge caching.
