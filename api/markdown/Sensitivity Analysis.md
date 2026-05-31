public:: true

# Sensitivity Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensitivity-analysis",
  "@type": "Page",
  "vc:slug": "sensitivity-analysis",
  "title": "Sensitivity Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensitivity-analysis",
  "@type": "Class",
  "label": "Sensitivity Analysis",
  "definition": "Sensitivity analysis is the study of how variation in the output of a model or calculation can be attributed to variation in its inputs and parameters. It quantifies which factors drive results, identifies fragile assumptions, and supports robustness checks across deterministic and probabilistic models. It is widely used in risk assessment, optimisation, and the calibration of analytics pipelines.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimisation", "label": "Optimisation"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:calculation-parameters", "label": "Calculation Parameters"}, {"@id": "urn:ngm:class:privacy-preserving-analytics", "label": "Privacy-Preserving Analytics"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sensitivity analysis measures how changes in inputs and [[Calculation Parameters]] propagate to a model's outputs, revealing which factors most influence results. It supports robustness and budgeting decisions in [[Privacy-Preserving Analytics]].
- ### Content
  - Methods range from local one-at-a-time perturbation and gradient-based derivatives to global variance-based approaches such as Sobol indices and Morris screening. In differentially private analytics, sensitivity bounds the maximum change one record can cause, directly setting the noise scale required for a given privacy guarantee.
