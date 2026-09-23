---
okf_version: "0.2"
type: Class
title: Realtime Communication
resource: urn:ngm:class:realtime-communication
domain: infrastructure
description: Realtime communication denotes the class of systems, protocols, and architectures that deliver synchronous, low-latency exchange of audio, video, text, and arbitrary data between two or more participants such that end-to-end delay remains below perceptual thresholds — typically under 150 ms one-way for voice and under 50 ms for interactive haptics or gaming. It encompasses technologies such as Web
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:presence
  - urn:ngm:class:signalling-protocol
  - urn:ngm:class:media-codec
  - urn:ngm:class:presence
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:latency
  - urn:ngm:class:network-synchronization
  - urn:ngm:class:nat-traversal
enables:
  - urn:ngm:class:realtime-collaboration
  - urn:ngm:class:immersive-communication
  - urn:ngm:class:telepresence
  - urn:ngm:class:telemedicine
contrastsWith:
  - urn:ngm:class:asynchronous-messaging
  - urn:ngm:class:store-and-forward
bridgesTo:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:ai-voice-synthesis
  - urn:ngm:class:avatar-streaming
uses:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:session-initiation-protocol
  - urn:ngm:class:web-socket
  - urn:ngm:class:opus-codec
supports:
  - urn:ngm:class:metaverse-and-telecollaboration
  - urn:ngm:class:virtual-world
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:virtual-world
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:w3-c
  - urn:ngm:class:3-gpp
relatedTo:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:end-to-end-encryption
  - urn:ngm:class:cdn
---

# Realtime Communication

Realtime communication denotes the class of systems, protocols, and architectures that deliver synchronous, low-latency exchange of audio, video, text, and arbitrary data between two or more participants such that end-to-end delay remains below perceptual thresholds — typically under 150 ms one-way for voice and under 50 ms for interactive haptics or gaming. It encompasses technologies such as WebRTC, VoIP, SIP, XMPP, and WebSocket-based signalling, unified under the common requirement that transport, codec, and signalling planes cooperate to minimise jitter and packet loss. Realtime communication differs from asynchronous messaging in that session state must be continuously negotiated and media flows must be sustained for the interaction to remain coherent. It constitutes foundational infrastructure for distributed collaboration, virtual presence, telemedicine, and immersive social environments.
