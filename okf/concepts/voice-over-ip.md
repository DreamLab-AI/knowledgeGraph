---
okf_version: "0.2"
type: Class
title: Voice Over Ip
resource: urn:ngm:class:voice-over-ip
domain: infrastructure
description: Voice over IP (VoIP) is a family of technologies that digitise, compress, and transmit voice communications as packetised data over Internet Protocol networks rather than through dedicated circuit-switched telephony infrastructure. Audio is sampled, encoded using codecs such as G.711, G.729, or Opus, packetised, and transported using the Real-time Transport Protocol (RTP) over UDP, with session ma
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:real-time-communication
hasPart:
  - urn:ngm:class:secure-communication
requires:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:real-time-messaging
  - urn:ngm:class:real-time-systems
  - urn:ngm:class:communication-protocols
dependsOn:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:io-t-infrastructure
contrastsWith:
  - urn:ngm:class:real-time-collaborative-editing
bridgesTo:
  - urn:ngm:class:automatic-speech-recognition
uses:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:cryptographic-protocol
supports:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:real-time-collaboration
  - urn:ngm:class:communication-protocol
relatedTo:
  - urn:ngm:class:real-time
  - urn:ngm:class:real-time-computing
  - urn:ngm:class:secure-channel
---

# Voice Over Ip

Voice over IP (VoIP) is a family of technologies that digitise, compress, and transmit voice communications as packetised data over Internet Protocol networks rather than through dedicated circuit-switched telephony infrastructure. Audio is sampled, encoded using codecs such as G.711, G.729, or Opus, packetised, and transported using the Real-time Transport Protocol (RTP) over UDP, with session management handled by signalling protocols such as SIP or H.323. VoIP enables cost reduction, feature richness, and integration with unified communications platforms, but introduces quality-of-service sensitivities to packet loss, jitter, and latency. Encryption via SRTP and TLS/DTLS provides confidentiality and integrity for enterprise and consumer deployments.
