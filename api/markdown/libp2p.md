public:: true

# libp2p
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:libp2p",
  "@type": "Page",
  "vc:slug": "libp2p",
  "title": "libp2p",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:libp2p",
  "@type": "Class",
  "label": "libp2p",
  "definition": "libp2p is a modular network stack and peer-to-peer networking framework originally extracted from the IPFS project that enables developers to build decentralised applications with configurable transport, security, and protocol multiplexing layers. It abstracts over TCP, QUIC, WebSocket, and WebRTC transports, applies encryption via Noise Protocol or TLS 1.3, multiplexes streams with Yamux or mplex, and provides peer discovery, routing, and publish-subscribe messaging as composable modules. libp2p powers the peer layer of Ethereum 2.0, Filecoin, Polkadot, and hundreds of other decentralised systems, providing a battle-tested foundation for production-grade peer-to-peer networking.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:peer-to-peer-network",
    "label": "Peer-to-Peer Network"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:noise-protocol",
        "label": "Noise Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-storage",
        "label": "Decentralized Storage"
      },
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      },
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:kademlia-dht",
        "label": "Kademlia DHT"
      },
      {
        "@id": "urn:ngm:class:distributed-hash-table",
        "label": "Distributed Hash Table"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:peer-discovery",
        "label": "Peer Discovery"
      },
      {
        "@id": "urn:ngm:class:stream-multiplexing",
        "label": "Stream Multiplexing"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-messaging",
        "label": "Publish-Subscribe Messaging"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      },
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      },
      {
        "@id": "urn:ngm:class:webrtc",
        "label": "WebRTC"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:filecoin",
        "label": "Filecoin"
      },
      {
        "@id": "urn:ngm:class:polkadot",
        "label": "Polkadot"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bittorrent-protocol",
        "label": "BitTorrent Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      },
      {
        "@id": "urn:ngm:class:content-addressed-storage",
        "label": "Content-Addressed Storage"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:libp2p-networking-stack",
      "label": "libp2p Networking Stack"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - libp2p is a composable, transport-agnostic peer-to-peer networking stack that separates peer discovery via [[Kademlia DHT]], message dissemination via [[Gossip Protocol]], and encrypted stream multiplexing into independent swappable modules, enabling decentralised applications to run over TCP, QUIC, and WebRTC without code changes.

- ### Relationships
  - libp2p originated as the networking layer of [[IPFS]] and has been adopted as the peer networking foundation for major blockchain ecosystems. It uses [[Kademlia DHT]] for content-addressed routing and peer discovery, and [[Gossip Protocol]] (GossipSub) for efficient publish-subscribe message propagation across blockchain networks. [[Distributed Hash Table]] technology underpins its content routing. It uses [[Cryptographic Protocol]] handshakes (Noise, TLS 1.3) to authenticate and encrypt every connection. By providing [[Congestion Control]] at the transport layer it ensures fair bandwidth use among connected peers. Its decentralised application capability is what makes [[Blockchain Network]] gossip and block propagation practically feasible at global scale.

- ### Content
  - libp2p emerged from Juan Benet's work on IPFS at Protocol Labs, where the recognition that every decentralised application was reinventing peer networking from scratch led to the extraction of IPFS's networking code as a standalone, reusable framework in 2015-2016. The design philosophy was radical modularity: every concern—which transport to use, which security handshake to perform, how to multiplex streams, how to discover peers, how to route messages—should be a swappable component with a clean interface. This contrasts with monolithic P2P stacks like BitTorrent's that bundle all layers into one implementation, limiting portability and experimentation.

  - The stack operates in layers. At the transport layer, libp2p supports TCP for reliable connection-oriented communication, QUIC for low-latency multiplexed streams with built-in encryption, WebSockets for browser connectivity, and WebRTC for browser-to-browser direct connections without a server relay. Above transport, the Noise Protocol Framework or TLS 1.3 performs mutual authentication using peer identities derived from public keys, ensuring that connections cannot be man-in-the-middle attacked. Stream multiplexing using Yamux or mplex allows multiple independent logical streams to share one physical connection, eliminating the overhead of separate TCP connections per protocol. At the application layer, GossipSub provides efficient mesh-based publish-subscribe routing critical for blockchain block and transaction propagation.

  - The significance of libp2p is evidenced by its adoption in production blockchain infrastructure. Ethereum 2.0's beacon chain uses libp2p for peer discovery and block gossip across tens of thousands of validator nodes worldwide. Filecoin's storage and retrieval market uses it to coordinate data deals between storage providers and clients. Polkadot's relay chain and parachain communication depends on libp2p. This production deployment at scale has driven bug fixes, performance optimisations, and protocol improvements fed back into the open-source codebase, creating a virtuous cycle between implementation and specification. The GossipSub specification has undergone multiple formal analyses for security properties.

  - By 2024-2025, libp2p implementations exist in Go (the reference implementation), Rust (rust-libp2p, used by Polkadot), JavaScript (js-libp2p, enabling browser nodes), Python, Java, and Nim, enabling heterogeneous networks where nodes running different languages interoperate seamlessly. WebRTC transport support has matured sufficiently for browser nodes to participate fully in P2P networks without server intermediaries, a milestone for truly serverless decentralised applications. The framework is being explored for AI agent communication networks, where multiple AI agents running on different infrastructure need to coordinate without a central message broker—a use case that libp2p's authenticated, encrypted, multiplexed communication layer is well suited to address.