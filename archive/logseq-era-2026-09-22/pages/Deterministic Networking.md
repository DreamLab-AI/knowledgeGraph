public:: true

# Deterministic Networking

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:deterministic-networking", "@type":"Page", "title":"Deterministic Networking", "vc:slug":"deterministic-networking", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deterministic-networking",
  "@type": "Class",
  "label": "Deterministic Networking",
  "definition": "Deterministic networking is a class of networking techniques that provide bounded latency, low jitter and negligible packet loss for time-critical traffic over shared packet-switched infrastructure, typically through reserved bandwidth, scheduled transmission windows and time synchronisation across network nodes. It underpins standards such as IEEE Time-Sensitive Networking and IETF DetNet, which extend best-effort Ethernet and IP networks with guarantees suitable for industrial control, robotics and audio-video applications. Deterministic behaviour is achieved by combining traffic shaping, redundancy and precise clock synchronisation rather than relying on statistical over-provisioning alone.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:time-sensitive-networking",
        "label": "Time-Sensitive Networking"
      },
      {
        "@id": "urn:ngm:class:profinet",
        "label": "Profinet"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Deterministic networking is a class of networking techniques that provide bounded latency, low jitter and negligible packet loss for time-critical traffic over shared packet-switched infrastructure, typically through reserved bandwidth, scheduled transmission windows and time synchronisation across network nodes. It underpins standards such as IEEE Time-Sensitive Networking and IETF DetNet, which extend best-effort Ethernet and IP networks with guarantees suitable for industrial control, robotics and audio-video applications. Deterministic behaviour is achieved by combining traffic shaping, redundancy and precise clock synchronisation rather than relying on statistical over-provisioning alone.
- ### Relationships
	- partOf:: [[Network Protocol]]
	- relatedTo:: [[Time-Sensitive Networking]]
	- relatedTo:: [[Profinet]]
