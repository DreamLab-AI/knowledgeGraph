public:: true

# Bitcoin Layer 2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-layer-2",
  "@type": "Page",
  "vc:slug": "bitcoin-layer-2",
  "title": "Bitcoin Layer 2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-layer-2",
  "@type": "Class",
  "label": "Bitcoin Layer 2",
  "definition": "Bitcoin Layer 2 refers to protocols built on top of the Bitcoin base chain that increase transaction throughput, reduce fees, or add functionality while inheriting Bitcoin's security. Examples include the Lightning Network for fast payments and federated systems such as Fedimint and Cashu for custodial and ecash-style scaling. These layers settle to the base chain periodically, trading some on-chain finality for speed and cost efficiency.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Blockchain Protocol and Consensus"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cashu", "label": "Cashu"},
      {"@id": "urn:ngm:class:fedimint", "label": "Fedimint"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Bitcoin Layer 2 protocols scale Bitcoin off-chain while settling to its base layer, encompassing systems such as [[Cashu]] and federated mints like [[Fedimint]].
- ### Content
  - Layer-2 designs move most activity off the base chain, anchoring only periodic settlements. The Lightning Network uses payment channels for instant low-fee transfers, while Chaumian ecash systems like Cashu and federations like Fedimint offer scalable, privacy-oriented custody at the cost of additional trust assumptions.
