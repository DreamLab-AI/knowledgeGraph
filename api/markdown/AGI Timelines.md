public:: true

# AGI Timelines
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agi-timelines",
  "@type": "Page",
  "vc:slug": "agi-timelines",
  "title": "AGI Timelines",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agi-timelines",
  "@type": "Class",
  "label": "AGI Timelines",
  "definition": "AGI timelines are structured forecasts estimating when artificial general intelligence — AI matching or exceeding human cognitive ability across most economically valuable tasks — might be achieved. Such forecasts aggregate expert surveys, compute-scaling extrapolations, benchmark-progress curves, and Bayesian models of research milestones to produce probability distributions over future dates. Timelines are inherently uncertain and contested, and they materially influence research prioritisation, safety investment, and public policy. They are a distinct object of study within AI forecasting rather than a single predicted date.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:time-series-forecasting", "label": "Time Series Forecasting"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-general-intelligence", "label": "Artificial General Intelligence"},
      {"@id": "urn:ngm:class:gartner-prediction", "label": "Gartner Prediction"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:performance-benchmarks", "label": "Performance Benchmarks"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - [[AGI Timelines]] are forecasts estimating when [[Artificial General Intelligence]] might be reached. They combine expert elicitation, compute-scaling trends, and benchmark trajectories into probability distributions over dates rather than single point predictions.
- ### Relationships
  - AGI timelines draw on [[Performance Benchmarks]] progress curves as a leading indicator and are frequently summarised in industry forecasts such as the [[Gartner Prediction]] hype cycle. They are a specialised application of [[Time-Series Forecasting]] to a research milestone whose definition is itself contested.
- ### Content
  - Methods for constructing AGI timelines include aggregated expert surveys such as the AI Impacts and Metaculus elicitations, biological-anchor models that estimate the compute required to match the human brain, and direct extrapolation of capability benchmarks. Each method carries distinct assumptions and produces materially different distributions.

  - Timelines have tightened markedly since the emergence of large language models, with median expert estimates moving earlier across successive surveys. This compression has intensified debate over AI safety investment and governance, since shorter timelines reduce the time available to solve alignment and oversight problems.
