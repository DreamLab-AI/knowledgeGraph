public:: true

# Measurement Methodology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:measurement-methodology",
  "@type": "Page",
  "vc:slug": "measurement-methodology",
  "title": "Measurement Methodology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:measurement-methodology",
  "@type": "Class",
  "label": "Measurement Methodology",
  "definition": "A measurement methodology is a defined, repeatable procedure for quantifying a property or performance characteristic, specifying scope, units, data sources, and calculation rules. It ensures that results are consistent, comparable, and auditable across observers and over time. Rigorous methodology is the precondition for trustworthy indicators, benchmarks, and standards-based reporting.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:carbon-footprint-indicator", "label": "Carbon Footprint Indicator"}, {"@id": "urn:ngm:class:benchmark-standard", "label": "Benchmark Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A measurement methodology is a documented, repeatable procedure defining how a quantity is measured and computed, ensuring comparability. It is required to produce a credible [[Carbon Footprint Indicator]] and underpins any [[Benchmark Standard]].
- ### Content
  - A sound methodology fixes the system boundary, data collection protocol, units, and aggregation logic, and documents uncertainty. Standardised methodologies enable third-party verification and prevent the cherry-picking and incomparability that undermine self-reported metrics.
