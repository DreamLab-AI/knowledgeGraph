public:: true

# Signaling Server
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-signaling-server",
  "@type": "Page",
  "vc:slug": "signaling-server",
  "title": "Signaling Server",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:signaling-server",
  "@type": "Class",
  "label": "Signaling Server",
  "definition": "A signaling server is an intermediary service used in WebRTC and peer-to-peer systems to exchange session control messages between peers before a direct connection is established. It transmits session descriptions (SDP offers and answers) and ICE candidates so that peers can negotiate codec capabilities, network addresses, and connection parameters. Once the direct peer connection is set up, the signaling server is no longer involved in data transfer.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-protocol-and-infra",
      "label": "Protocol and Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      },
      {
        "@id": "urn:ngm:class:stun-and-turn",
        "label": "STUN and TURN"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A signaling server brokers the initial exchange of session descriptions and network candidates between peers, enabling them to establish direct WebRTC or peer-to-peer connections without itself carrying application data.
