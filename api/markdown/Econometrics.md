public:: true

# Econometrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:econometrics",
  "@type": "Page",
  "vc:slug": "econometrics",
  "title": "Econometrics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:econometrics",
  "@type": "Class",
  "label": "Econometrics",
  "definition": "Econometrics is the application of statistical and mathematical methods to economic data in order to test hypotheses, estimate relationships, and forecast economic phenomena. It combines economic theory with regression analysis, time-series modelling, and causal-inference techniques to quantify effects such as elasticities and policy impacts. Econometrics is foundational to empirical economics and increasingly overlaps with machine learning for prediction.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economics", "label": "Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:time-series-forecasting", "label": "Time-Series Forecasting"}, {"@id": "urn:ngm:class:economics", "label": "Economics"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Econometrics applies statistical and mathematical methods to economic data to estimate relationships, test theory, and forecast outcomes. It is a quantitative discipline within [[Economics]] and shares methods with [[Time-Series Forecasting]].
- ### Content
  - Core techniques include linear and instrumental-variable regression, panel models, and time-series methods such as ARIMA and VAR, alongside causal-inference designs for policy evaluation. Modern practice blends classical inference with machine-learning estimators to improve out-of-sample prediction while preserving interpretability.
