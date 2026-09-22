public:: true

# Transport Network

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:transport-network",
  "@type": "Page",
  "title": "Transport Network",
  "vc:slug": "transport-network",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transport-network",
  "@type": "Class",
  "label": "Transport Network",
  "definition": "A transport network is the underlying backhaul or fronthaul infrastructure that interconnects the access and core segments of a communications system, carrying aggregated traffic between sites over fibre, microwave or leased links. In mobile networks it links radio sites to the core network and determines achievable latency and capacity. The term also covers physical transportation infrastructure, such as roads, rail and transit systems, that a region depends on for the movement of people and goods.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telecommunications",
      "label": "Telecommunications"
    }
  ],
  "relations": {},
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
	- A transport network is the underlying backhaul or fronthaul infrastructure that interconnects the access and core segments of a communications system, carrying aggregated traffic between sites over fibre, microwave or leased links. In mobile networks it links radio sites to the core network and determines achievable latency and capacity. The term also covers physical transportation infrastructure, such as roads, rail and transit systems, that a region depends on for the movement of people and goods.
- ### Relationships
	- subClassOf:: [[Telecommunications]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
