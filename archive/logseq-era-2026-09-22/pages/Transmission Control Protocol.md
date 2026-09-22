public:: true

# Transmission Control Protocol

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:transmission-control-protocol",
  "@type": "Page",
  "title": "Transmission Control Protocol",
  "vc:slug": "transmission-control-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transmission-control-protocol",
  "@type": "Class",
  "label": "Transmission Control Protocol",
  "definition": "The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of byte streams between applications over an IP network. It establishes connections through a handshake and uses acknowledgements, retransmission, and flow and congestion control to ensure data arrives intact. TCP is the dominant reliable transport underlying most internet applications.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transport-layer",
      "label": "Transport Layer"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:reliable-data-transfer",
        "label": "Reliable Data Transfer"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      },
      {
        "@id": "urn:ngm:class:flow-control",
        "label": "Flow Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:osi-model",
        "label": "OSI Model"
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
  - The [[Transmission Control Protocol]] provides reliable, ordered byte-stream delivery between applications.
  - It is a [[Transport Layer]] protocol that runs over [[Internet Protocol]].
  - It implements [[Reliable Data Transfer]] using acknowledgements, retransmission, [[Flow Control]], and [[Congestion Control]].
- ### Overview
  - TCP turns the unreliable, best-effort packet delivery of IP into a dependable stream abstraction for applications.
  - A connection is established through a three-way handshake before data flows, and torn down gracefully afterwards.
  - Lost or corrupted segments are detected and retransmitted, and segments are reordered into the original sequence.
  - Congestion and flow control adapt the sending rate to the network and the receiver's capacity.
- ### Mechanisms
  - Sequence numbers and acknowledgements track which bytes have been received.
  - Retransmission timers and fast retransmit recover lost data.
  - [[Flow Control]] uses a receiver-advertised window to avoid overwhelming the destination.
  - [[Congestion Control]] algorithms probe and back off to share network capacity fairly.
- ### Key aspects
  - Reliability: every byte is delivered or the connection fails explicitly.
  - Ordering: data is presented to the application in the order it was sent.
  - Connection orientation: state is maintained for the duration of a session.
  - Adaptivity: rate control responds to changing network conditions.
- ### Applications
  - Carrying [[HTTP]] traffic for the web.
  - Email, file transfer, and remote access protocols.
  - Any [[Application Layer]] service needing reliable delivery.
  - Tunnelling and overlay protocols built atop reliable streams.
- ### Relationships
  - partOf:: [[Transport Layer]]
  - requires:: [[Internet Protocol]]
  - implements:: [[Reliable Data Transfer]]
  - uses:: [[Congestion Control]]
  - uses:: [[Flow Control]]
  - enables:: [[HTTP]]
  - supports:: [[Application Layer]]
  - standardizedBy:: [[Standards]]
  - dependsOn:: [[Internet Protocol]]
  - relatedTo:: [[Network Protocol]]
  - relatedTo:: [[Packet Switching]]
  - contrastsWith:: [[Network Protocol]]
  - bridgesTo:: [[OSI Model]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
