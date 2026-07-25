public:: true

# TCP

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:tcp",
  "@type": "Page",
  "title": "TCP",
  "vc:slug": "tcp",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tcp",
  "@type": "Class",
  "label": "TCP",
  "definition": "The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of a byte stream between applications over an IP network. It establishes connections via a three-way handshake, segments data, acknowledges receipt, retransmits lost segments, and applies flow and congestion control to share network capacity fairly. TCP is one of the core protocols of the Internet protocol suite, underlying most application protocols that demand reliability.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-transport",
      "label": "Network Transport"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      },
      {
        "@id": "urn:ngm:class:network-transport",
        "label": "Network Transport"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      },
      {
        "@id": "urn:ngm:class:client-server-architecture",
        "label": "Client-Server Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      },
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:udp",
        "label": "UDP"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:osi-model",
        "label": "OSI Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[TCP]] (Transmission Control Protocol) is a connection-oriented transport protocol delivering a reliable, ordered byte stream over [[Internet Protocol]].
  - It guarantees delivery through acknowledgements, retransmission, and sequencing, and it shares capacity via [[Congestion Control]].
  - TCP sits in the transport layer of the [[OSI Model]] and underpins protocols such as [[HTTP]].
- ### Overview
  - TCP opens a connection with a three-way handshake, after which both endpoints can send data as a continuous stream segmented into packets.
  - Each segment carries a sequence number; the receiver acknowledges received bytes, letting the sender detect and retransmit losses.
  - Flow control via a sliding window prevents a fast sender from overwhelming a slow receiver, while congestion control adapts the sending rate to network conditions.
  - The connection is closed gracefully with a teardown exchange, releasing resources at both ends.
- ### Mechanisms
  - **Three-way handshake**: SYN, SYN-ACK, ACK establishes synchronised sequence numbers.
  - **Reliable delivery**: cumulative acknowledgements and timeouts trigger retransmission of lost segments.
  - **Ordering**: sequence numbers let the receiver reassemble the stream in order.
  - **Congestion control**: algorithms such as slow start and congestion avoidance adjust the window to avoid collapse.
- ### Applications
  - Web traffic carried over HTTP and HTTPS.
  - Email transport, file transfer, and remote shell sessions.
  - Any application requiring guaranteed, in-order delivery over IP.
  - Foundation for TLS-secured channels.
- ### Relationships
  - requires:: [[Internet Protocol]]
  - requires:: [[Network Transport]]
  - enables:: [[HTTP]]
  - enables:: [[Secure Communication]]
  - enables:: [[Client-Server Architecture]]
  - uses:: [[Congestion Control]]
  - uses:: [[Packet Switching]]
  - implements:: [[Reliability]]
  - supports:: [[TLS]]
  - contrastsWith:: [[UDP]]
  - partOf:: [[OSI Model]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Network Protocol]]
  - relatedTo:: [[Network Layer]]
- ### Provenance
  - updated:: 2026-06-15
