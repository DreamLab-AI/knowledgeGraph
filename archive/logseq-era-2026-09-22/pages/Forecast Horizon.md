public:: true

# Forecast Horizon
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:forecast-horizon",
  "@type": "Page",
  "vc:slug": "forecast-horizon",
  "title": "Forecast Horizon",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:forecast-horizon",
  "@type": "Class",
  "label": "Forecast Horizon",
  "definition": "The forecast horizon is the length of time into the future over which a predictive model generates estimates, measured as the number of time steps ahead from the last observation. It is a key design parameter in time-series forecasting that trades off relevance against uncertainty, since predictive error generally grows with the horizon. Choice of horizon shapes model selection, evaluation strategy, and the operational decisions a forecast supports.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:demand-forecasting", "label": "Demand Forecasting"},
      {"@id": "urn:ngm:class:time-series-forecasting", "label": "Time Series Forecasting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The forecast horizon is how far ahead a model predicts, a core parameter of [[Time Series Forecasting]] and a critical input to [[Demand Forecasting]] decisions. It is a concept within machine-learning forecasting technique.
- ### Content
  - Short horizons typically yield lower error and support operational decisions such as inventory replenishment, while longer horizons feed strategic planning at the cost of greater uncertainty and wider prediction intervals. Multi-step forecasting can be produced recursively, directly per step, or jointly, and the chosen horizon governs how models are trained, how backtesting windows are arranged, and how forecast accuracy is reported.
