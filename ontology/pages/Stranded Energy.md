public:: true

# Stranded Energy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stranded-energy",
  "@type": "Page",
  "vc:slug": "stranded-energy",
  "title": "Stranded Energy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stranded-energy",
  "@type": "Class",
  "label": "Stranded Energy",
  "definition": "Stranded energy is generated power that cannot be economically transmitted to demand centres because it is produced in remote locations, lacks grid connection, or is curtailed when supply exceeds local demand. Examples include flared associated gas at oil wells, over-built hydro and wind capacity, and geothermal sites far from population. Because it would otherwise be wasted, stranded energy can be monetised by co-locating energy-intensive computation such as Bitcoin mining at the source.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:stranded-energy-monetisation", "label": "Stranded Energy Monetisation"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues", "label": "Bitcoin Environmental Issues"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Stranded energy is power that is produced but cannot reach a market, typically from remote or curtailed generation, and which can be captured by mobile compute loads as discussed in [[Bitcoin Environmental Issues]].
- ### Content
  - Stranded energy arises wherever generation is geographically or temporally disconnected from demand, such as flared natural gas, curtailed renewables, and isolated hydro. Its near-zero or negative marginal value makes it attractive for interruptible, location-flexible loads, and Bitcoin mining has emerged as a buyer of last resort that improves the economics of otherwise-wasted resources. This dynamic is central to debates over the energy footprint of proof-of-work networks.
