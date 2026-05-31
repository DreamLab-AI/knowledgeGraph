public:: true

# ICE Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ice-protocol",
  "@type": "Page",
  "vc:slug": "ice-protocol",
  "title": "ICE Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ice-protocol",
  "@type": "Class",
  "label": "ICE Protocol",
  "definition": "Interactive Connectivity Establishment (ICE) is an IETF framework that enables two peers behind network address translators (NATs) or firewalls to discover and negotiate the best path for direct media and data connections. It gathers candidate transport addresses via STUN and TURN servers, then performs connectivity checks to select a working candidate pair. ICE is a foundational component of real-time peer-to-peer communication.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:web-rtc", "label": "WebRTC"}],
    "enables": [{"@id": "urn:ngm:class:web-rtc", "label": "WebRTC"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The ICE Protocol negotiates NAT-traversing peer connections using STUN and TURN candidates, providing the connectivity layer required by [[WebRTC]].
- ### Content
  - ICE collects host, server-reflexive, and relayed candidates, exchanges them via signalling, and runs prioritised connectivity checks to converge on the lowest-latency viable path. When direct paths fail, it falls back to TURN relaying, guaranteeing connectivity at the cost of an extra hop.
