public:: true

# Transport Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a29b26b4663a589cccceda0db7036d0742a9df0e30ac7737ddfe70e576e9bae",
  "@type": "Page",
  "vc:slug": "transport-layer",
  "title": "Transport Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:linked:protocol-layer",
      "vc:label": "Protocol Layer"
    },
    {
      "@id": "urn:visionflow:linked:integration-layer",
      "vc:label": "Integration Layer"
    },
    {
      "@id": "urn:visionflow:linked:transmission-control-protocol",
      "vc:label": "Transmission Control Protocol"
    },
    {
      "@id": "urn:visionflow:linked:congestion-control",
      "vc:label": "Congestion Control"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:ietf-internet-engineering-task-force",
      "vc:label": "IETF (Internet Engineering Task Force)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Transport Layer"
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
  "@id": "urn:ngm:class:transport-layer",
  "@type": "Class",
  "label": "Transport Layer",
  "definition": "The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:ip-addressing",
        "label": "IP Addressing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:protocol-layer",
        "label": "Protocol Layer"
      },
      {
        "@id": "urn:ngm:class:integration-layer",
        "label": "Integration Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      },
      {
        "@id": "urn:ngm:class:session-layer",
        "label": "Session Layer"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      },
      {
        "@id": "urn:ngm:class:flow-control",
        "label": "Flow Control"
      },
      {
        "@id": "urn:ngm:class:segmentation-and-reassembly",
        "label": "Segmentation and Reassembly"
      },
      {
        "@id": "urn:ngm:class:connection-management",
        "label": "Connection Management"
      },
      {
        "@id": "urn:ngm:class:error-detection-and-correction",
        "label": "Error Detection and Correction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:transmission-control-protocol",
        "label": "Transmission Control Protocol"
      },
      {
        "@id": "urn:ngm:class:user-datagram-protocol",
        "label": "User Datagram Protocol"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC Protocol"
      },
      {
        "@id": "urn:ngm:class:stream-control-transmission-protocol",
        "label": "Stream Control Transmission Protocol"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF (Internet Engineering Task Force)"
      },
      {
        "@id": "urn:ngm:class:osi-model",
        "label": "OSI Model"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-link-layer",
        "label": "Data Link Layer"
      },
      {
        "@id": "urn:ngm:class:physical-layer",
        "label": "Physical Layer"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      },
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:port-number",
        "label": "Port Number"
      },
      {
        "@id": "urn:ngm:class:socket-api",
        "label": "Socket API"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multiplexing",
        "label": "Multiplexing"
      },
      {
        "@id": "urn:ngm:class:end-to-end-principle",
        "label": "End-to-End Principle"
      },
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:osi-layer-4",
      "label": "OSI Layer 4"
    },
    {
      "@id": "urn:ngm:class:host-to-host-layer",
      "label": "Host-to-Host Layer"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:transport-layer:281d0eef6210",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a29b26b4663a589cccceda0db7036d0742a9df0e30ac7737ddfe70e576e9bae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:linked:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Protocol Layer]]",
      "resolved": "urn:visionflow:linked:protocol-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Integration Layer]]",
      "resolved": "urn:visionflow:linked:integration-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transmission Control Protocol]]",
      "resolved": "urn:visionflow:linked:transmission-control-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Congestion Control]]",
      "resolved": "urn:visionflow:linked:congestion-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[IETF (Internet Engineering Task Force)]]",
      "resolved": "urn:visionflow:linked:ietf-internet-engineering-task-force",
      "kind": "StubLink"
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
  - The Transport Layer is the stratum that provides end-to-end delivery of data between endpoints over a network. It sits above the Network Layer that routes packets and below the protocol and integration strata that rely on reliable channels. It contains segmentation, flow and congestion control, and connection management.

- ### Semantic Classification
  - owl-class:: net:TransportLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Transmission Control Protocol]], [[Congestion Control]]
  - requires:: [[Network Layer]]
  - enables:: [[Protocol Layer]], [[Integration Layer]]

- ### Content
  - The Transport Layer turns the best-effort delivery of the network beneath it into channels with defined reliability and ordering between endpoints. Typical members include segmentation and reassembly, acknowledgement and retransmission, flow and congestion control, and connection lifecycle management. It is concerned with end-to-end conversations rather than individual hops.
  - It requires the Network Layer to route packets toward their destination, and it enables the Protocol and Integration Layers that assume an orderly, reliable byte stream or datagram service. The guarantees chosen here, reliable or unreliable, shape what higher layers must handle themselves.
  - The layer bridges to the Transmission Control Protocol and congestion control, mechanisms that share network capacity fairly and recover from loss. Latency and throughput characteristics established here are inherited by every conversation above.

- ### Current Landscape (2026)
  - QUIC (RFC 9000, standardised May 2021) has moved from experiment to default transport for HTTP/3 (RFC 9114): as of late 2025 Cloudflare measured roughly 35% of edge traffic on HTTP/3, with W3Techs reporting ~39% of sites supporting it, though real page-load telemetry sits nearer 21% depending on methodology.
  - Server and client support is now commodity: nginx has shipped HTTP/3 since 1.25.0, Caddy enables it by default since 2.6, and Safari 16+ turned HTTP/3 on for all users in September 2024, completing native support across Chrome, Edge, Firefox and Safari.
  - Multipath QUIC advanced through the IETF QUIC working group (draft-ietf-quic-multipath-15, July 2025), redefining connection IDs and packet-number spaces per path so a single connection can use several 4-tuples (e.g. Wi-Fi plus cellular) simultaneously rather than merely migrating between them.
  - Post-quantum key exchange has reached the transport handshake: following NIST's FIPS 203 (ML-KEM) in August 2024, hybrid schemes such as X-Wing (X25519 + ML-KEM-768) are being deployed in TLS 1.3 and QUIC, pushing ClientHello sizes past 1.2 KB and requiring multiple QUIC Initial datagrams; Cloudflare's October 2025 review notes PQ certificates remain unlikely to be broadly trusted before 2027.
  - MASQUE (HTTP/3 tunnelling via Extended CONNECT) is driving a shift in the VPN and proxy market, with pilots multiplexing WireGuard and IP-over-UDP inside QUIC to improve mobile resilience and resist deep-packet inspection, at the cost of double congestion control in tunnelled mode.
  - L4S (Low Latency, Low Loss, Scalable throughput; RFC 9330 architecture, 2023) continues to see operator and standards attention as the mechanism for sub-millisecond queuing delay, complementing QUIC's user-space congestion control.
  - The frontier challenge as of 2026 is throughput and cost, not latency: a peer-reviewed 2024 ACM study found QUIC delivering up to ~45% less throughput than HTTP/2 on gigabit links due to user-space processing overhead, so adoption on fast fixed networks has plateaued even as QUIC dominates lossy mobile paths.

- ### References
  - 1. Mattias Geniar (2026). QUIC and HTTP/3 in 2026: from Google experiment to IETF standard. https://ma.ttias.be/quic-http3-in-2026/
  - 2. Linou (2026). HTTP/3 Is at 35% Adoption: You Can't Call QUIC a Future Technology Anymore. https://dev.to/linou518/http3-is-at-35-adoption-you-cant-call-quic-a-future-technology-anymore-2ghm
  - 3. Liu, Ma, De Coninck, Bonaventure, Huitema & Kühlewind / IETF QUIC WG (2025). Multipath Extension for QUIC (draft-ietf-quic-multipath-15). https://datatracker.ietf.org/doc/draft-ietf-quic-multipath/15/
  - 4. Cloudflare (2025). State of the post-quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 5. Briscoe, De Schepper, Bagnulo & White / IETF (2023). RFC 9330 — Low Latency, Low Loss, and Scalable Throughput (L4S) Internet Service: Architecture. https://datatracker.ietf.org/doc/rfc9330/
  - 6. arXiv (2025). Demystifying QUIC from the Specifications. https://arxiv.org/html/2511.08375v1

- ### Provenance
  - sources:: [[IETF (Internet Engineering Task Force)]]
  - migration-date:: 2026-05-29T00:00:00Z
