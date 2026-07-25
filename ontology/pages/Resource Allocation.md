public:: true

# Resource Allocation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:resource-allocation",
  "@type": "Page",
  "vc:slug": "resource-allocation",
  "title": "Resource Allocation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:resource-allocation",
  "@type": "Class",
  "label": "Resource Allocation",
  "definition": "Resource allocation is the economic and computational mechanism by which scarce resources, such as compute, capital, bandwidth, or stake, are distributed among competing uses or participants. In market and protocol contexts it determines who receives what and on what terms, often via pricing, auctions, or scheduling policies. Efficient allocation underpins value transfer and incentive alignment across economic and distributed systems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:value-transfer", "label": "Value Transfer"}, {"@id": "urn:ngm:class:economics", "label": "Economics"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Resource allocation distributes scarce resources among competing uses through pricing, auctions, or scheduling, enabling [[Value Transfer]] and forming a core concern of the [[Economics Domain]].
- ### Content
  - Allocation mechanisms range from centralised scheduling to decentralised market clearing and on-chain fee markets. The design choice shapes efficiency, fairness, and incentive compatibility, determining whether resources flow to their highest-value uses.
