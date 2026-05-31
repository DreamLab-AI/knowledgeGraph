public:: true

# Proof-of-Work Energy Consumption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:proof-of-work-energy-consumption",
  "@type": "Page",
  "vc:slug": "proof-of-work-energy-consumption",
  "title": "Proof-of-Work Energy Consumption",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proof-of-work-energy-consumption",
  "@type": "Class",
  "label": "Proof-of-Work Energy Consumption",
  "definition": "Proof-of-work energy consumption is the electricity used by miners performing the computational hashing that secures proof-of-work blockchains such as Bitcoin. Because security scales with aggregate hashpower, energy use rises with price and competition, making it a central environmental and policy concern. It is tracked by indices that estimate network-wide power draw and carbon footprint.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-environmental-issues", "label": "Bitcoin Environmental Issues"},
      {"@id": "urn:ngm:class:cbeci", "label": "CBECI"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Proof-of-work energy consumption is the electricity expended by miners to secure PoW blockchains through competitive hashing. It is a central component of [[Bitcoin Environmental Issues]] and is quantified by indices such as the [[CBECI]].
- ### Content
  - Energy use derives from the deliberate computational cost that makes block production expensive and chain rewriting infeasible. Estimates rely on assumptions about miner hardware efficiency and the electricity mix powering it, which is contested. Debates centre on grid impact versus use of stranded and renewable energy, demand-response participation, and comparisons with proof-of-stake alternatives that secure chains at a fraction of the energy.
