public:: true

# Business Intelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:business-intelligence",
  "@type": "Page",
  "vc:slug": "business-intelligence",
  "title": "Business Intelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:business-intelligence",
  "@type": "Class",
  "label": "Business Intelligence",
  "definition": "Business intelligence is the set of technologies, processes, and practices for collecting, integrating, analysing, and presenting business data to support managerial decision-making. It encompasses data warehousing, reporting, dashboards, online analytical processing (OLAP), and ad-hoc querying that turn raw operational records into actionable insight. BI matters because it converts dispersed enterprise data into a coherent, queryable foundation for performance monitoring and strategic planning.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-engineering", "label": "Data Engineering"},
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Business Intelligence is a discipline combining [[Data Engineering]] pipelines and [[Metadata Management]] to deliver reporting, dashboards, and analytics that inform organisational decisions.
- ### Content
  - A BI stack typically layers a data warehouse or lakehouse, an OLAP/semantic model, and a presentation tier of reports and interactive dashboards. Modern BI emphasises self-service exploration and governed metric definitions so that analysts and business users share consistent measures across the enterprise.
