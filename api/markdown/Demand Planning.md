public:: true

# Demand Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:demand-planning",
  "@type": "Page",
  "vc:slug": "demand-planning",
  "title": "Demand Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:demand-planning",
  "@type": "Class",
  "label": "Demand Planning",
  "definition": "Demand planning is the supply-chain process of estimating future customer demand and aligning inventory, production, and procurement to meet it efficiently. It consolidates statistical forecasts, market intelligence, and business constraints into an actionable plan that minimises stockouts and excess holding. Modern demand planning increasingly relies on time-series forecasting and machine-learning models fed by historical sales and external signals.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-platform-and-environment", "label": "Supply Chain Platform and Environment"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:demand-forecasting", "label": "Demand Forecasting"},
      {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time-Series Forecasting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Demand planning turns demand estimates into a coordinated plan for inventory, production, and procurement. It is driven by [[Demand Forecasting]] outputs and frequently powered by [[Time-Series Forecasting]] models.
- ### Content
  - A demand plan reconciles bottom-up SKU forecasts with top-down financial targets, then feeds sales-and-operations planning. Key trade-offs are service level versus working capital; accuracy depends on data quality, promotion handling, and the ability to sense short-term demand shifts.
