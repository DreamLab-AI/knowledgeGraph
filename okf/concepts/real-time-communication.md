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
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:session-initiation-protocol
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:signalling
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:transport-layer
  - urn:ngm:class:presence
  - urn:ngm:class:signalling-protocol
  - urn:ngm:class:media-codec
  - urn:ngm:class:presence
requires:
  - urn:ngm:class:video-compression
  - urn:ngm:class:audio-codec
  - urn:ngm:class:network-latency
  - urn:ngm:class:nat-traversal
  - urn:ngm:class:network-protocol
  - urn:ngm:class:latency
  - urn:ngm:class:network-synchronization
enables:
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:voice-over-ip
  - urn:ngm:class:live-streaming
  - urn:ngm:class:collaborative-editing
  - urn:ngm:class:real-time-collaboration
  - urn:ngm:class:immersive-communication
  - urn:ngm:class:telepresence
  - urn:ngm:class:telemedicine
dependsOn:
  - urn:ngm:class:wireless-connectivity
  - urn:ngm:class:content-delivery-network
  - urn:ngm:class:ice-protocol
  - urn:ngm:class:ice-protocol
contrastsWith:
  - urn:ngm:class:asynchronous-messaging
  - urn:ngm:class:batch-processing
  - urn:ngm:class:store-and-forward
bridgesTo:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:extended-reality
  - urn:ngm:class:ai-voice-synthesis
  - urn:ngm:class:avatar-streaming
uses:
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:congestion-control
  - urn:ngm:class:transport-protocol
  - urn:ngm:class:data-channel
  - urn:ngm:class:web-rtc
  - urn:ngm:class:session-initiation-protocol
  - urn:ngm:class:web-socket
  - urn:ngm:class:opus-codec
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:web-socket
  - urn:ngm:class:edge-computing
  - urn:ngm:class:media-server
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:content-delivery-network
---

# Real-Time Communication

Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between two or more endpoints with latency low enough to support interactive, synchronous engagement — typically under 150 ms end-to-end for voice and video. It encompasses the protocols, codecs, signalling mechanisms, and network transport layers that jointly minimise delay, jitter, and packet loss while adapting to dynamic network conditions. Modern RTC systems span peer-to-peer browser sessions via WebRTC, carrier-grade VoIP infrastructure built on SIP and RTP, and real-time data channels used in collaborative applications, gaming, and distributed control systems. Quality of experience is governed by congestion control algorithms, forward error correction, jitter buffering, and adaptive bitrate strategies.
