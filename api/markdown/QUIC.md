public:: true

# QUIC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:90acc9bbd6148ef730da90f4a6a3d8080dcc5952910c25f2651f629cf022a5ae",
  "@type": "Page",
  "vc:slug": "quic",
  "title": "QUIC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "QUIC"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quic",
  "@type": "Class",
  "label": "QUIC",
  "definition": "QUIC is a general-purpose transport layer protocol standardised as RFC 9000 by the IETF, running atop UDP rather than TCP in order to eliminate head-of-line blocking inherent in byte-stream semantics. It integrates TLS 1.3 cryptographic handshaking into the connection establishment phase, reducing round-trip latency to as little as zero additional RTT for resumed sessions, and multiplexes independent byte-streams so that packet loss on one stream does not stall others. Developed initially at Google and later standardised as the foundation for HTTP/3 (RFC 9114), QUIC also supports seamless connection migration across changing IP addresses, making it particularly suited to mobile and lossy network environments.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:http3-transport",
      "label": "HTTP/3 Transport"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:internet-protocol-suite",
        "label": "Internet Protocol Suite"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:stream-multiplexing",
        "label": "Stream Multiplexing"
      },
      {
        "@id": "urn:ngm:class:connection-migration",
        "label": "Connection Migration"
      },
      {
        "@id": "urn:ngm:class:flow-control",
        "label": "Flow Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:udp",
        "label": "UDP"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http3",
        "label": "HTTP/3"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:low-latency-networking",
        "label": "Low-Latency Networking"
      },
      {
        "@id": "urn:ngm:class:connection-migration",
        "label": "Connection Migration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      },
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:udp",
        "label": "UDP"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tcp",
        "label": "TCP"
      },
      {
        "@id": "urn:ngm:class:http2",
        "label": "HTTP/2"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:webrtc",
        "label": "WebRTC"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:quic:387166e8d5e3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:90acc9bbd6148ef730da90f4a6a3d8080dcc5952910c25f2651f629cf022a5ae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - QUIC is an [[IETF]]-standardised general-purpose [[Transport Layer]] protocol (RFC 9000, 2021) that runs over [[UDP]] rather than [[TCP]], integrating [[TLS]] 1.3 cryptographic negotiation directly into connection establishment. It eliminates [[Head-of-Line Blocking]] through independent [[Stream Multiplexing]], supports [[Zero-RTT Resumption]] for returning clients, and enables [[Connection Migration]] so that sessions survive changes in IP address or network interface without interruption.

- ### Overview
  - QUIC was developed at Google circa 2012 as "Quick UDP Internet Connections" to overcome the latency and head-of-line blocking limitations inherent in [[TCP]] and the layered [[TLS]] handshake. Google deployed it experimentally in Chrome and its own infrastructure before bringing it to the [[IETF]] for standardisation.
  - The IETF QUIC working group produced RFC 9000 (QUIC transport), RFC 9001 (QUIC-TLS), RFC 9002 (loss detection and [[Congestion Control]]), and RFC 9114 ([[HTTP/3]]) in May 2021, marking QUIC as the transport foundation for the next generation of the web.
  - Unlike [[TCP]], where a single byte-stream means a lost segment stalls all data behind it, QUIC encapsulates data in independent streams. A single [[UDP]] datagram can carry frames from multiple streams; packet loss only blocks the stream whose data is missing.
  - QUIC's cryptographic design means all payload data is always encrypted and authenticated — there is no plaintext QUIC in the wild, unlike [[HTTP/1.1]] or opportunistic [[TLS]] upgrades.
  - The protocol is designed to be deployable through existing [[NAT]] and [[Firewall]] infrastructure that already passes [[UDP]], making it more practical than alternative approaches such as [[SCTP]].

- ### Key Mechanisms
  - **Connection Establishment and 0-RTT**
    - A new QUIC connection performs a single round-trip (1-RTT) combining [[TLS]] 1.3 ClientHello and transport parameters. For returning clients, session tickets allow [[Zero-RTT Resumption]] (0-RTT), sending application data before receiving any server response.
    - Connection IDs decouple the logical connection from the underlying 4-tuple (src/dst IP + port), enabling [[Connection Migration]] when a mobile device switches between Wi-Fi and cellular without interrupting the session.
  - **[[Stream Multiplexing]]**
    - Applications open multiple independent streams within one QUIC connection. Streams are independently flow-controlled, acknowledged, and retransmitted. Loss of a packet carrying stream-3 data does not prevent stream-1 or stream-2 data from being delivered.
    - Streams may be bidirectional or unidirectional, and are assigned numeric IDs with parity encoding their direction and initiator.
  - **[[Congestion Control]] and Loss Detection**
    - QUIC uses packet number spaces (Initial, Handshake, Application Data) to avoid acknowledgement ambiguity present in [[TCP]] retransmission. Each retransmitted packet carries a new packet number, so the sender can unambiguously determine whether an acknowledgement refers to the original or the retransmit.
    - The default [[Congestion Control]] algorithm is NewReno-compatible, but the design allows pluggable algorithms (e.g. CUBIC, BBR) at the application layer, independent of OS kernel updates.
  - **Integrated [[Encryption]]**
    - All QUIC packets — including handshake data — are encrypted. The Initial packets use keys derived from a publicly known salt, protecting against trivial injection but providing no confidentiality; subsequent packets use full [[TLS]] 1.3 keys. This makes deep packet inspection and middlebox interference substantially harder.
  - **[[Flow Control]]**
    - QUIC provides two levels of [[Flow Control]]: per-stream credits and per-connection credits, both expressed as byte offsets. This prevents fast senders from overwhelming slow receivers while allowing fine-grained backpressure.
  - **[[Packet Acknowledgement]] and ACK Ranges**
    - QUIC ACK frames carry ranges of received packet numbers, allowing selective acknowledgement of out-of-order packets without a separate SACK option as in [[TCP]]. ACK Delay fields allow receivers to report processing latency accurately.

- ### Applications and Use Cases
  - **[[HTTP/3]] and Web Traffic**
    - [[HTTP/3]] (RFC 9114) is the direct application of QUIC for web browsing. HTTP/3 streams map directly to QUIC streams, eliminating the TCP-layer head-of-line blocking that plagued [[HTTP/2]] multiplexing. Major [[Content Delivery Network]] operators (Cloudflare, Akamai, Fastly) and browser vendors (Chrome, Firefox, Safari) support HTTP/3 over QUIC.
  - **[[Mobile Networking]] and Roaming**
    - [[Connection Migration]] is critical for mobile users switching between cellular towers or moving between Wi-Fi and 4G/5G. QUIC sessions survive these transitions transparently, improving reliability for streaming, video calls, and cloud sync.
  - **[[Real-Time Communication]]**
    - [[WebRTC]] uses its own UDP-based datapath (DTLS-SRTP); QUIC's DATAGRAM extension (RFC 9221) provides unreliable, unordered delivery within a QUIC connection, making it attractive for gaming, video conferencing, and other latency-sensitive applications where retransmission is counter-productive.
  - **[[Edge Computing]] and Microservices**
    - QUIC's fast connection establishment and [[Low-Latency Networking]] characteristics are valuable for service-to-service communication in [[Distributed Systems]], particularly where short-lived connections are common and TCP's three-way handshake adds measurable overhead.
  - **[[Content Delivery Network]] Optimisation**
    - CDNs use QUIC to reduce time-to-first-byte (TTFB) for end users, especially in high-latency or high-loss environments such as satellite links or congested mobile networks.
  - **DNS over QUIC (DoQ)**
    - RFC 9250 defines DNS over QUIC, offering confidential DNS resolution with lower latency than DNS over [[TLS]] (DoT) for subsequent queries due to 0-RTT resumption.

- ### Relationships
  - partOf:: [[Internet Protocol Suite]]
  - hasPart:: [[Stream Multiplexing]]
  - hasPart:: [[Connection Migration]]
  - hasPart:: [[Flow Control]]
  - requires:: [[UDP]]
  - requires:: [[TLS]]
  - enables:: [[HTTP/3]]
  - enables:: [[Scalability]]
  - enables:: [[Low-Latency Networking]]
  - enables:: [[Connection Migration]]
  - dependsOn:: [[Network Architecture]]
  - dependsOn:: [[Congestion Control]]
  - implements:: [[Transport Layer]]
  - implements:: [[Encryption]]
  - uses:: [[TLS]]
  - uses:: [[UDP]]
  - uses:: [[Packet Acknowledgement]]
  - supports:: [[Zero-RTT Resumption]]
  - supports:: [[Mobile Networking]]
  - standardizedBy:: [[IETF]]
  - contrastsWith:: [[TCP]]
  - contrastsWith:: [[HTTP/2]]
  - contrastsWith:: [[SCTP]]
  - relatedTo:: [[WebRTC]]
  - relatedTo:: [[Content Delivery Network]]
  - relatedTo:: [[Edge Computing]]
  - bridges-to:: [[Distributed Systems]]
  - bridges-to:: [[Real-Time Communication]]

- ### Standards and Context
  - **RFC 9000** — QUIC: A UDP-Based Multiplexed and Secure Transport (May 2021). The core transport specification defining connection establishment, streams, flow control, and migration.
  - **RFC 9001** — Using TLS to Secure QUIC. Defines how [[TLS]] 1.3 handshake messages are carried in QUIC packets and how keys are derived.
  - **RFC 9002** — QUIC Loss Detection and [[Congestion Control]]. Specifies packet number spaces, ACK processing, and loss recovery.
  - **RFC 9114** — [[HTTP/3]]. Defines the HTTP semantics layer over QUIC, replacing [[HTTP/2]]'s TCP-based framing.
  - **RFC 9221** — An Unreliable Datagram Extension to QUIC. Provides unreliable delivery for latency-sensitive data.
  - **RFC 9250** — DNS over QUIC (DoQ). Confidential, low-latency DNS resolution.
  - Standardisation body: [[IETF]] QUIC Working Group. Interoperability tested extensively via the QUIC Interop Runner before RFC publication.
  - The [[IETF]] continues to develop extensions: QUIC multipath (draft), QUIC for satellite links, and WebTransport (layering browser-accessible bidirectional streams over QUIC/HTTP/3).
  - Major open-source implementations include quiche (Cloudflare, Rust), msquic (Microsoft, C), ngtcp2 (C), quinn (Rust), and Go's standard library `crypto/tls` + `quic-go`.

- ### Provenance
  - sources:: RFC 9000; RFC 9001; RFC 9002; RFC 9114; RFC 9221; RFC 9250; IETF QUIC WG charter
  - updated:: 2026-06-13
