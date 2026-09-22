public:: true

# Internet Protocol Suite

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:internet-protocol-suite", "@type": "Page", "title": "Internet Protocol Suite", "vc:slug": "internet-protocol-suite", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:internet-protocol-suite",
  "@type": "Class",
  "label": "Internet Protocol Suite",
  "definition": "The Internet Protocol Suite (commonly TCP/IP) is the layered set of communication protocols used to interconnect network devices, defining how data is addressed, routed, fragmented and delivered across heterogeneous networks including the public Internet. It is organised into layers -- link, internet, transport and application -- each providing services to the layer above, with the network layer providing addressing and routing and transport protocols such as TCP, UDP and QUIC providing end-to-end delivery guarantees. Its layered, protocol-agnostic design is what allows the Internet to span vastly different physical networks under one addressing scheme.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [],
    "partOf": [],
    "hasPart": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC"
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
	- The Internet Protocol Suite (commonly TCP/IP) is the layered set of communication protocols used to interconnect network devices, defining how data is addressed, routed, fragmented and delivered across heterogeneous networks including the public Internet. It is organised into layers -- link, internet, transport and application -- each providing services to the layer above, with the network layer providing addressing and routing and transport protocols such as TCP, UDP and QUIC providing end-to-end delivery guarantees. Its layered, protocol-agnostic design is what allows the Internet to span vastly different physical networks under one addressing scheme.
- ### Relationships
	- hasPart:: [[Network Layer]]
	- hasPart:: [[QUIC]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
