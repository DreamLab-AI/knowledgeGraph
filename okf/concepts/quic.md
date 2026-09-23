---
okf_version: "0.2"
type: Class
title: QUIC
resource: urn:ngm:class:quic
domain: distributed-systems
description: QUIC is a general-purpose transport layer protocol standardised as RFC 9000 by the IETF, running atop UDP rather than TCP in order to eliminate head-of-line blocking inherent in byte-stream semantics. It integrates TLS 1.3 cryptographic handshaking into the connection establishment phase, reducing round-trip latency to as little as zero additional RTT for resumed sessions, and multiplexes independ
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:communication-protocol
hasPart:
  - urn:ngm:class:stream-multiplexing
  - urn:ngm:class:connection-migration
  - urn:ngm:class:flow-control
requires:
  - urn:ngm:class:udp
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:http3
  - urn:ngm:class:scalability
  - urn:ngm:class:low-latency-networking
  - urn:ngm:class:connection-migration
  - urn:ngm:class:http-protocol
dependsOn:
  - urn:ngm:class:network-architecture
  - urn:ngm:class:congestion-control
implements:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:encryption
contrastsWith:
  - urn:ngm:class:tcp
  - urn:ngm:class:http2
  - urn:ngm:class:http
  - urn:ngm:class:sctp
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:real-time-communication
uses:
  - urn:ngm:class:tls
  - urn:ngm:class:udp
  - urn:ngm:class:packet-acknowledgement
supports:
  - urn:ngm:class:zero-rtt-resumption
  - urn:ngm:class:mobile-networking
standardizedBy:
  - urn:ngm:class:ietf
partOf:
  - urn:ngm:class:internet-protocol-suite
relatedTo:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:cdn
  - urn:ngm:class:edge-computing
---

# QUIC

QUIC is a general-purpose transport layer protocol standardised as RFC 9000 by the IETF, running atop UDP rather than TCP in order to eliminate head-of-line blocking inherent in byte-stream semantics. It integrates TLS 1.3 cryptographic handshaking into the connection establishment phase, reducing round-trip latency to as little as zero additional RTT for resumed sessions, and multiplexes independent byte-streams so that packet loss on one stream does not stall others. Developed initially at Google and later standardised as the foundation for HTTP/3 (RFC 9114), QUIC also supports seamless connection migration across changing IP addresses, making it particularly suited to mobile and lossy network environments.
