public:: true

# Packet Switching
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:packet-switching", "@type": "Page", "title": "Packet Switching", "vc:slug": "packet-switching", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:packet-switching",
  "@type": "Class",
  "label": "Packet Switching",
  "definition": "Packet switching is a method of data transmission in which messages are divided into discrete packets that are routed independently across a shared network and reassembled at the destination. Each packet carries addressing information allowing intermediate nodes to forward it along varying paths, making efficient use of shared links. It is the foundational technique of the internet, contrasting with circuit switching that dedicates a fixed path for a session.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-communication",
      "label": "Network Communication"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-communication",
        "label": "Network Communication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality of Service"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:network-communication",
        "label": "Network Communication"
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
  - Packet Switching is rooted in Network Communication and relates to [[Network Protocol]], [[TCP/IP]], [[Routing Protocol]]. Packet switching is a method of data transmission in which messages are divided into discrete packets that are routed independently across a shared network and reassembled at the destination.

- ### Overview
  - Packet switching breaks a message into small, independently addressed packets that traverse a shared network rather than reserving a dedicated circuit.
  - Each intermediate node inspects a packet's destination address and forwards it on, so different packets of one message may follow different paths.
  - At the destination, packets are reassembled in order, with protocols handling loss, duplication and reordering.

- ### Mechanisms
  - Messages are segmented into packets, each prefixed with addressing and control headers.
  - Routers forward packets hop by hop using routing tables and forwarding decisions.
  - Store-and-forward buffering lets nodes absorb bursts and select alternative paths.
  - Transport protocols reorder, acknowledge and retransmit packets to provide reliable delivery.

- ### Applications
  - The internet and all IP-based communication.
  - Voice-over-IP and real-time media carried as datagrams.
  - Mobile data networks multiplexing many users over shared spectrum.
  - Data-centre fabrics moving traffic between servers and storage.

- ### Relationships
  - subClassOf:: [[Network Communication]]
  - hasPart:: [[Routing Protocol]]
  - partOf:: [[Network Communication]]
  - uses:: [[TCP/IP]]
  - uses:: [[Network Protocol]]
  - uses:: [[Internet Protocol]]
  - dependsOn:: [[Network Layer]]
  - dependsOn:: [[Bandwidth]]
  - enables:: [[Quality of Service]]
  - supports:: [[Congestion Control]]
  - requires:: [[Routing Protocol]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Throughput]]
  - relatedTo:: [[Network Communication]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
