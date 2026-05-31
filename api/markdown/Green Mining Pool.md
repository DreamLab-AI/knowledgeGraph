public:: true

# Green Mining Pool
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:green-mining-pool",
  "@type": "Page",
  "vc:slug": "green-mining-pool",
  "title": "Green Mining Pool",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:green-mining-pool",
  "@type": "Class",
  "label": "Green Mining Pool",
  "definition": "A green mining pool is a cooperative of cryptocurrency miners that aggregates hashing power while sourcing electricity predominantly from renewable or low-carbon generation, often coupling mining to surplus or curtailed grid energy. It rewards participants for verified sustainable energy use and reports the carbon intensity of the pooled hashrate. The model aims to reduce the environmental footprint of proof-of-work consensus.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "BC Network Component"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sustainable-bitcoin-protocol", "label": "Sustainable Bitcoin Protocol"},
      {"@id": "urn:ngm:class:green-blockchain-initiatives", "label": "Green Blockchain Initiatives"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A green mining pool aggregates renewable-powered hashrate and is used by frameworks such as the [[Sustainable Bitcoin Protocol]] and is a component of broader [[Green Blockchain Initiatives]].
- ### Content
  - Operators may integrate renewable energy certificates, flexible load balancing against grid demand, and on-chain attestation of the energy mix. This lets miners monetise otherwise-wasted renewable capacity while improving the sustainability credentials of the underlying network.
