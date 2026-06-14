public:: true

# STUN and TURN
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-stun-and-turn",
  "@type": "Page",
  "vc:slug": "stun-and-turn",
  "title": "STUN and TURN",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stun-and-turn",
  "@type": "Class",
  "label": "STUN and TURN",
  "definition": "STUN (Session Traversal Utilities for NAT) and TURN (Traversal Using Relays around NAT) are complementary protocols used to establish peer-to-peer connectivity across Network Address Translators and firewalls. STUN allows a client to discover its public IP address and port mapping, while TURN provides a relay server as a fallback when direct connectivity cannot be achieved. Together they form the ICE (Interactive Connectivity Establishment) framework used by WebRTC.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-protocol-and-infra", "label": "Protocol and Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:webrtc", "label": "WebRTC"},
      {"@id": "urn:ngm:class:signaling-server", "label": "Signaling Server"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - STUN and TURN are NAT-traversal protocols that enable WebRTC peers to discover their public network addresses and relay traffic through a server when direct peer-to-peer connectivity is not possible.
