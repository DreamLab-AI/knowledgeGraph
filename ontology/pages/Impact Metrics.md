public:: true

# Impact Metrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:impact-metrics",
  "@type": "Page",
  "vc:slug": "impact-metrics",
  "title": "Impact Metrics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:impact-metrics",
  "@type": "Class",
  "label": "Impact Metrics",
  "definition": "Impact metrics are quantitative and qualitative indicators used to measure the social, environmental, or economic outcomes produced by an intervention, project, or organisation. They translate a theory of change into measurable outputs, outcomes, and longer-term impacts, enabling comparison, accountability, and decision-making. Standardised metric catalogues such as IRIS+ promote comparability across programmes.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "partOf": [{"@id": "urn:ngm:class:social-impact-assessment-sia", "label": "Social Impact Assessment (SIA)"}],
    "relatedTo": [{"@id": "urn:ngm:class:climate-action-dao", "label": "Climate Action DAO"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Impact metrics quantify the outcomes of interventions, forming a core part of a [[Social Impact Assessment (SIA)]] and the accountability layer of governance structures such as a [[Climate Action DAO]].
- ### Content
  - Well-designed metrics distinguish outputs (activities delivered) from outcomes and impacts (changes attributable to the intervention), and pair quantitative figures with context. Their value depends on data quality, attribution rigour, and alignment with recognised frameworks to avoid cherry-picking and to support credible reporting.
