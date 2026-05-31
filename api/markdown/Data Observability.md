public:: true

# Data Observability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-observability",
  "@type": "Page",
  "vc:slug": "data-observability",
  "title": "Data Observability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-observability",
  "@type": "Class",
  "label": "Data Observability",
  "definition": "Data observability is the practice of continuously monitoring the health and reliability of data and data pipelines to detect, diagnose and resolve issues before they affect consumers. It tracks pillars such as freshness, volume, schema, distribution and lineage, often using automated anomaly detection. As an extension of metadata management it brings software-style monitoring discipline to data systems.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Infrastructure Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data observability continuously monitors data and pipeline health across freshness, volume, schema and lineage, extending [[Metadata Management]] with software-style monitoring of data systems.
- ### Content
  - Platforms profile datasets and learn baselines, then alert on anomalies such as stale tables, row-count drops or schema drift. By surfacing problems at the source, observability shortens incident resolution and protects downstream analytics and models.
