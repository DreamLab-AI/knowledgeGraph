---
public: true
---

# Data Center Power Demand
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-center-power-demand",
  "@type": "Page",
  "vc:slug": "data-center-power-demand",
  "title": "Data Center Power Demand",
  "vc:public": true,
  "vc:outboundWikilinks": ["ERCOT Grid Capacity", "Energy Infrastructure Backlog"],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-center-power-demand",
  "@type": "Class",
  "label": "Data Center Power Demand",
  "definition": "The increasing energy consumption of data centers driven by AI workloads, impacting grid capacity and energy policy.",
  "domain": "infrastructure",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [{"@id": "urn:ngm:class:data-storage", "label": "Data Storage"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ai-inference-infrastructure", "label": "AI Inference Infrastructure"}, {"@id": "urn:ngm:class:energy-infrastructure-backlog", "label": "Energy Infrastructure Backlog"}]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-25",
    "episode": "why-the-data-center-debate-has-little-to-do-with-ai.md"
  }
}
```

- ### Overview
  - ERCOT in Texas has 474 gigawatts of new connection requests, 90% of which are from data centers, a figure that has doubled in six months and is five times the grid's record peak capacity. *(Source: ERCOT / AI Daily Brief host, via AI Daily Brief, 2026-08-25)*
- ### Relationships
- ### Provenance
