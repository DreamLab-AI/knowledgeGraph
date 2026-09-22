public:: true

# Grid Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:grid-infrastructure",
  "@type": "Page",
  "vc:slug": "grid-infrastructure",
  "title": "Grid Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:grid-infrastructure",
  "@type": "Class",
  "label": "Grid Infrastructure",
  "definition": "Grid infrastructure is the physical and control system of generation, transmission, distribution, and balancing assets that delivers electrical power from sources to consumers. It includes substations, transmission lines, transformers, and increasingly digital control layers for monitoring and demand response. Reliable grid infrastructure is a prerequisite for energy-intensive computing, mining, and data-centre operations.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-infrastructure", "label": "Digital Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:energy-and-power", "label": "Energy and Power"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Grid infrastructure is the networked system that generates, transmits, and distributes electricity, and is a foundational requirement of the broader [[Energy and Power]] domain.
- ### Content
  - Modern grids add sensing, automation, and smart-meter telemetry to balance variable renewable supply against demand. Capacity, latency of load response, and carbon intensity of the grid directly shape the siting and sustainability of compute clusters and blockchain mining facilities.
