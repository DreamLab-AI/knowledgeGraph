public:: true

# Scenario Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scenario-analysis",
  "@type": "Page",
  "vc:slug": "scenario-analysis",
  "title": "Scenario Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scenario-analysis",
  "@type": "Class",
  "label": "Scenario Analysis",
  "definition": "Scenario analysis is a structured method for exploring how a system behaves under a set of plausible alternative futures rather than a single forecast. It defines coherent scenarios over key drivers and evaluates outcomes, risks, and decisions across each. It is widely used in financial planning, climate disclosure, and operational risk to stress-test strategies against uncertainty.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time-Series Forecasting"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Scenario analysis evaluates outcomes across multiple plausible futures; it builds on [[Time-Series Forecasting]] for projections and is a core input to [[Risk Assessment]].
- ### Content
  - Unlike point forecasting, scenario analysis emphasises a small set of internally consistent narratives, often including baseline, optimistic, and adverse cases. It surfaces tail risks and decision sensitivities, supporting contingency planning and regulatory disclosures such as climate and capital-adequacy stress tests.
