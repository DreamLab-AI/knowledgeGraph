public:: true

# Full Duplex Communication

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:full-duplex-communication",
  "@type": "Page",
  "title": "Full Duplex Communication",
  "vc:slug": "full-duplex-communication",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:full-duplex-communication",
  "@type": "Class",
  "label": "Full Duplex Communication",
  "definition": "Full-duplex communication is a mode of data exchange in which both endpoints can transmit and receive simultaneously over a single connection. It contrasts with half-duplex, where only one side may send at a time. Full-duplex channels enable low-latency, bidirectional interaction and are central to technologies such as web sockets and real-time messaging.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bidirectional-communication",
        "label": "Bidirectional Communication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transmission-control-protocol",
        "label": "Transmission Control Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      },
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low Latency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transmission-control-protocol",
        "label": "Transmission Control Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bidirectional-communication",
        "label": "Bidirectional Communication"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
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
  - [[Full Duplex Communication]] lets both endpoints transmit and receive at the same time over one connection.
  - It is a mode within [[Communication Protocol]] design that implements true [[Bidirectional Communication]].
  - It enables [[Real-Time Communication]] and [[Low Latency]] interaction, in contrast to the request-response style of [[HTTP]].
- ### Overview
  - In half-duplex links a side must finish sending before the other can reply, adding latency and limiting interactivity.
  - Full-duplex channels remove that turn-taking constraint, allowing continuous two-way data flow.
  - Modern web sockets establish a persistent full-duplex channel after an initial handshake, typically over [[Transmission Control Protocol]].
  - This mode is essential where both peers must push data spontaneously rather than only respond.
- ### Mechanisms
  - A persistent connection is opened and kept alive for the session's duration.
  - Each direction has an independent logical stream so sends and receives do not block one another.
  - Framing delimits discrete messages within the continuous byte stream.
  - Underlying reliable transport ensures messages arrive intact in both directions.
- ### Key aspects
  - Simultaneity: sending and receiving overlap freely.
  - Persistence: the channel remains open across many messages.
  - Low latency: no per-message connection setup is required.
  - Symmetry: both peers can initiate communication at any time.
- ### Applications
  - Web socket-based live updates and chat.
  - Multiplayer and [[Real-Time Communication]] in collaborative tools.
  - Streaming telemetry and push notifications.
  - Interactive control channels for remote devices.
- ### Relationships
  - partOf:: [[Communication Protocol]]
  - implements:: [[Bidirectional Communication]]
  - uses:: [[Transmission Control Protocol]]
  - enables:: [[Real-Time Communication]]
  - enables:: [[Low Latency]]
  - requires:: [[Transmission Control Protocol]]
  - supports:: [[Real-Time Communication]]
  - dependsOn:: [[Network Protocol]]
  - relatedTo:: [[Bidirectional Communication]]
  - relatedTo:: [[Network Protocol]]
  - contrastsWith:: [[HTTP]]
  - bridgesTo:: [[Real-Time Communication]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
