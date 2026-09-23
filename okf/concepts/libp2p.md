---
okf_version: "0.2"
type: Class
title: libp2p
resource: urn:ngm:class:libp2p
domain: infrastructure
description: libp2p is a modular network stack and peer-to-peer networking framework originally extracted from the IPFS project that enables developers to build decentralised applications with configurable transport, security, and protocol multiplexing layers. It abstracts over TCP, QUIC, WebSocket, and WebRTC transports, applies encryption via Noise Protocol or TLS 1.3, multiplexes streams with Yamux or mplex
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:peer-to-peer-network
hasPart:
  - urn:ngm:class:noise-protocol
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:transport-layer
enables:
  - urn:ngm:class:decentralized-storage
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:decentralized-application
dependsOn:
  - urn:ngm:class:kademlia-dht
  - urn:ngm:class:distributed-hash-table
  - urn:ngm:class:quic
implements:
  - urn:ngm:class:peer-discovery
  - urn:ngm:class:stream-multiplexing
  - urn:ngm:class:publish-subscribe-pattern
contrastsWith:
  - urn:ngm:class:bittorrent-protocol
bridgesTo:
  - urn:ngm:class:decentralized-identity
uses:
  - urn:ngm:class:congestion-control
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:web-rtc
supports:
  - urn:ngm:class:ethereum
  - urn:ngm:class:filecoin
  - urn:ngm:class:polkadot
partOf:
  - urn:ngm:class:ipfs
relatedTo:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:content-addressed-storage
---

# libp2p

libp2p is a modular network stack and peer-to-peer networking framework originally extracted from the IPFS project that enables developers to build decentralised applications with configurable transport, security, and protocol multiplexing layers. It abstracts over TCP, QUIC, WebSocket, and WebRTC transports, applies encryption via Noise Protocol or TLS 1.3, multiplexes streams with Yamux or mplex, and provides peer discovery, routing, and publish-subscribe messaging as composable modules. libp2p powers the peer layer of Ethereum 2.0, Filecoin, Polkadot, and hundreds of other decentralised systems, providing a battle-tested foundation for production-grade peer-to-peer networking.
