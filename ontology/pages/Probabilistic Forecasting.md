public:: true

# Probabilistic Forecasting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:probabilistic-forecasting",
  "@type": "Page",
  "vc:slug": "probabilistic-forecasting",
  "title": "Probabilistic Forecasting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:probabilistic-forecasting",
  "@type": "Class",
  "label": "Probabilistic Forecasting",
  "definition": "Probabilistic forecasting predicts future quantities as full probability distributions rather than single point estimates, quantifying uncertainty in the prediction. Outputs are typically expressed as predictive intervals, quantiles, or samples. It is essential for risk-aware decision-making in domains such as demand planning, energy, and finance where the cost of error is asymmetric.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"}, {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time Series Forecasting"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time Series Forecasting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Probabilistic forecasting predicts future values as distributions with calibrated uncertainty rather than single points. It is enabled by the [[Probabilistic Model]] and is a specialised form of [[Time-Series Forecasting]].
- ### Content
  - Methods include quantile regression, Bayesian models, deep generative time-series models, and ensembles, evaluated with proper scoring rules such as the continuous ranked probability score and quantile loss. Well-calibrated probabilistic forecasts let decision-makers reason about tail risk and set safety stock, reserves, or hedges according to their risk tolerance rather than a single expected value.
