---
okf_version: "0.2"
type: Class
title: Real-Time Communication
resource: urn:ngm:class:real-time-communication
domain: infrastructure
description: Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between two or more endpoints with latency low enough to support interactive, synchronous engagement — typically under 150 ms end-to-end for voice and video. It encompasses the protocols, codecs, signalling mechanisms, and network transport layers that jointly minimise delay, jitter, and packet loss while adapting to
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:communication-protocol
hasPart:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:session-initiation-protocol
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:signalling
  - urn:ngm:class:transport-protocol
requires:
  - urn:ngm:class:video-compression
  - urn:ngm:class:audio-codec
  - urn:ngm:class:network-latency
  - urn:ngm:class:nat-traversal
enables:
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:voice-over-ip
  - urn:ngm:class:live-streaming
  - urn:ngm:class:collaborative-editing
dependsOn:
  - urn:ngm:class:wireless-connectivity
  - urn:ngm:class:cdn
  - urn:ngm:class:ice-protocol
  - urn:ngm:class:ice-protocol
contrastsWith:
  - urn:ngm:class:asynchronous-messaging
  - urn:ngm:class:batch-processing
bridgesTo:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:extended-reality
uses:
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:congestion-control
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:data-channel
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:w3-c
relatedTo:
  - urn:ngm:class:web-socket
  - urn:ngm:class:edge-computing
  - urn:ngm:class:media-server
---

# Real-Time Communication

Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between two or more endpoints with latency low enough to support interactive, synchronous engagement — typically under 150 ms end-to-end for voice and video. It encompasses the protocols, codecs, signalling mechanisms, and network transport layers that jointly minimise delay, jitter, and packet loss while adapting to dynamic network conditions. Modern RTC systems span peer-to-peer browser sessions via WebRTC, carrier-grade VoIP infrastructure built on SIP and RTP, and real-time data channels used in collaborative applications, gaming, and distributed control systems. Quality of experience is governed by congestion control algorithms, forward error correction, jitter buffering, and adaptive bitrate strategies.
