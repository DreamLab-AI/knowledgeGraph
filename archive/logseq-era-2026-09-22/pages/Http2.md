public:: true

# Http2
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:http2",
  "@type": "Page",
  "title": "Http2",
  "vc:slug": "http2",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:http2",
  "@type": "Class",
  "label": "Http2",
  "definition": "HTTP/2 is a major revision of the Hypertext Transfer Protocol that introduces a binary framing layer, multiplexed streams over a single TCP connection, header compression and server push. It reduces latency and head-of-line blocking at the application layer compared with HTTP/1.1 while preserving the protocol's semantics. It is standardised in RFC 7540 (later RFC 9113) and is widely deployed across the modern web.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:http",
      "label": "HTTP"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      },
      {
        "@id": "urn:ngm:class:rest",
        "label": "REST"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC"
      },
      {
        "@id": "urn:ngm:class:web-socket",
        "label": "WebSocket"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tcp",
        "label": "TCP"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:multiplexing",
        "label": "Multiplexing"
      },
      {
        "@id": "urn:ngm:class:server-push",
        "label": "Server Push"
      },
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      },
      {
        "@id": "urn:ngm:class:tls-handshake",
        "label": "TLS Handshake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Http2]] is an [[Infrastructure]] application-layer protocol, a binary, multiplexed revision of [[HTTP]] running over [[TCP]] and [[TLS]] that uses [[Multiplexing]] to cut [[Latency]].
- ### Overview
  - HTTP/2 keeps HTTP semantics (methods, status codes, headers) but replaces the textual HTTP/1.1 wire format with a binary framing layer carrying interleaved streams.
  - A single connection multiplexes many concurrent requests and responses, eliminating per-request connection overhead and most application-layer head-of-line blocking.
- ### Key aspects
  - Binary framing: messages decomposed into frames belonging to numbered streams.
  - Header compression (HPACK): reduces redundant header bytes across requests.
  - Server push and stream prioritisation: proactive resource delivery and ordering hints.
- ### Applications
  - High-performance web delivery for content-heavy and API-driven sites.
  - gRPC and other RPC frameworks layering on HTTP/2 multiplexing.
  - CDN and edge platforms minimising round trips for global clients.
- ### Relationships
  - relatedTo:: [[HTTP]]
  - relatedTo:: [[Application Layer]]
  - relatedTo:: [[API]]
  - relatedTo:: [[REST]]
  - contrastsWith:: [[QUIC]]
  - contrastsWith:: [[WebSocket]]
  - requires:: [[TCP]]
  - requires:: [[TLS]]
  - uses:: [[Multiplexing]]
  - uses:: [[Server Push]]
  - uses:: [[Transport Layer]]
  - dependsOn:: [[Transport Layer]]
  - dependsOn:: [[TLS Handshake]]
  - enables:: [[Latency]]
  - supports:: [[Network Protocol]]
  - implements:: [[Network Protocol]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
