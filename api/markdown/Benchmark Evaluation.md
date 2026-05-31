public:: true

# Benchmark Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:benchmark-evaluation",
  "@type": "Page",
  "vc:slug": "benchmark-evaluation",
  "title": "Benchmark Evaluation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:benchmark-evaluation",
  "@type": "Class",
  "label": "Benchmark Evaluation",
  "definition": "Benchmark evaluation is the systematic measurement of a model or system against a standardised dataset and scoring protocol so that results are comparable across systems and over time. A benchmark specifies the task, the data splits, the permitted inputs, and the metrics used to rank performance. In machine learning, benchmark evaluation drives the field's empirical progress, but it is subject to well-known failure modes including train-test contamination, overfitting to leaderboards, and construct validity gaps between the benchmark and the real-world capability it purports to measure.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:model-evaluation", "label": "Model Evaluation"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"},
      {"@id": "urn:ngm:class:performance-benchmarks", "label": "Performance Benchmarks"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:evaluation-harness", "label": "Evaluation Harness"}
    ]
  },
  "quality": 0.78
}
```

- ### Definition
  - [[Benchmark Evaluation]] is the measurement of a system against a standardised dataset and scoring protocol to produce comparable results. It is a specialisation of [[Model Evaluation]] that fixes the task, data, and [[Evaluation Metric]] so that different systems can be ranked on equal terms.
- ### Relationships
  - Benchmark evaluation depends on [[Performance Benchmarks]] as its measurement instruments and is operationalised through an [[Evaluation Harness]] that automates dataset loading, prompting, and scoring. The choice of [[Evaluation Metric]] determines what aspect of capability the benchmark actually rewards.
- ### Content
  - Robust benchmark evaluation requires careful control of data contamination, since modern models trained on web-scale corpora may have memorised test items. Held-out, freshly collected, or private test sets mitigate this, as do dynamic benchmarks that refresh their contents.

  - Beyond raw scores, mature evaluation practice reports confidence intervals, per-category breakdowns, and qualitative error analysis. Leaderboard saturation — where top systems cluster near the ceiling — signals that a benchmark has exhausted its discriminative power and motivates the design of harder successor benchmarks.
