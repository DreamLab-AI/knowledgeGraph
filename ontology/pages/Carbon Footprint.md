public:: true

# Carbon Footprint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:carbon-footprint",
  "@type": "Page",
  "vc:slug": "carbon-footprint",
  "title": "Carbon Footprint",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-footprint",
  "@type": "Class",
  "label": "Carbon Footprint",
  "definition": "A carbon footprint is the total quantity of greenhouse gases, expressed as carbon dioxide equivalent (CO2e), emitted directly and indirectly by an individual, organisation, product, or activity over a defined period. It aggregates scope 1, 2, and 3 emissions to provide a single comparable measure of climate impact. Carbon footprints matter because they are the baseline metric for emissions reduction targets, disclosure, and offsetting strategies.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sustainability", "label": "Sustainability"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues", "label": "Bitcoin Environmental Issues"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Carbon Footprint quantifies total CO2-equivalent emissions of an entity or activity, forming a core measure within the [[Sustainability Domain]] and a focal point of debates over [[Bitcoin Environmental Issues]].
- ### Content
  - Footprint accounting follows protocols such as the GHG Protocol, partitioning emissions into operational (scope 1), purchased-energy (scope 2), and value-chain (scope 3) categories. Energy-intensive systems like proof-of-work mining are scrutinised through footprint analysis that weighs electricity sources and grid carbon intensity.
